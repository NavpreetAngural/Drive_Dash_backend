const contactForm = require("../../models/contact")
const User = require("../../models/User")

const { contactValidation } = require("../../services/validationSchema")

const form = async (req, res, next) => {
  try {
    const contactValues = await contactValidation.validateAsync(req.body)
    console.log(contactValues);

    const { email, subject, message } = contactValues;

    const existingEmail = await User.findOne({
      email
    })

    if (!existingEmail) {
      return res.status(400).json({
        success: "false",
        message: "please register first "
      })
    }

    const formData = new contactForm({
      email,
      subject,
      message
    })
    await formData.save()
    res.status(200).json({
      success: true,
      message: "Query Sent successfully",
      data: contactValues,
    });

  } catch (error) {
    next(error);
  }
};

module.exports = form;