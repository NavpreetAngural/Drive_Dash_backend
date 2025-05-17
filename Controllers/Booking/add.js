const addBooking = require("../../models/addBooking")
const User = require("../../models/User")
const { addBookingValidation } = require("../../services/validationSchema")
const add = async (req, res, next) => {
    try {
        const bookValues = await addBookingValidation.validateAsync(req.body)
        console.log(bookValues)
        const { fullname , email, phone, vehicleType, licenseNo, pickupDate, dropDate, modificationDetails } = bookValues;
        const existingEmail = await User.findOne({
            email
        })
        if (!existingEmail) {
            return res.status(400).json({
                success: "false",
                message: "please register first "
            })
        }
        const bookData = new addBooking({
            fullname,
            email,
            phone,
            vehicleType,
            modificationDetails,
            licenseNo,
            pickupDate,
            dropDate,
        })
        await bookData.save()
        res.status(200).json({
            success: true,
            message: "Booking Add successfully",
            data: bookValues,
        });
    } catch (error) {
        next(error);}
};
module.exports = add;
