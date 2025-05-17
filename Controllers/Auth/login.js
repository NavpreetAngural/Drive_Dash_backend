const { loginValidation } = require("../../services/validationSchema");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res, next) => {
  try {
    const loginValues = await loginValidation.validateAsync(req.body);
    const { email, password } = loginValues;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email address, please register first",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password, please enter correct",
      });
    }

    // Prepare payload for JWT
    const userInfo = {
      id: existingUser._id,
      role: existingUser.role
    };

    // Sign JWT token
    const jwtToken = jwt.sign(userInfo, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Respond with token and user info
    return res.status(200).json({
      success: true,
      message: "Login successfully",
      jwtToken,
      role: existingUser.role,
      fullname: existingUser.fullname,
      email : existingUser.email,
      mobile : existingUser.phone
    });

  } catch (error) {
    next(error);
  }
};

module.exports = login;
