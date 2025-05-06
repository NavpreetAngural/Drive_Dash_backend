const User = require("../../models/User")
const bcrypt = require("bcryptjs")
const { registrationValidation } = require("../../services/validationSchema");
const sendEmail = require("./nodemailer");

const register = async (req, res, next) => {
  try {
    const registerValues = await registrationValidation.validateAsync(req.body)
    console.log(registerValues)

    const { fullname, email, password, phone, gender, address  , role} = registerValues;
    const emailVerification = await User.findOne({
      email
    })

    if (emailVerification) {
      return res.status(400).json({
        success: false,
        message: "User already Exist ",
      });
    }

    else {
      const saltRound = 10
      const hash_password = await bcrypt.hash(password, saltRound)
      const newUser = new User({
        fullname,
        email,
        password: hash_password,
        phone,
        gender,
        address, 
        role,
      })
      await newUser.save()

      try{
        await sendEmail(email,password , address);
      }
      catch(emailerror){
        console.error("email sending failed" , emailerror)
      }

      res.status(200).json({
        success: true,
        message: "User registered successfully",
        data: registerValues,
      });
    }

  } catch (error) {
    next(error);
  }
};

module.exports = register;