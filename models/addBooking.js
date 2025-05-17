const { Schema, model } = require("mongoose")
const addBookingSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    modificationDetails: {
        type: String,
        // required: true
    },
    licenseNo: {
        type: String,
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    dropDate: {
        type: Date,
        required: true
    },
})

module.exports = model("addBooking" , addBookingSchema)