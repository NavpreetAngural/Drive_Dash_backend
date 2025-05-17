const Joi = require("joi")

const registrationValidation = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.number().required(),
    gender: Joi.string().required(),
    address: Joi.string().required(),
    role: Joi.string().required()
})

const loginValidation = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

const contactValidation = Joi.object({
    email: Joi.string().required(),
    subject: Joi.string().required(),
    message: Joi.string().required()
})

const addBookingValidation = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
    vehicleType: Joi.string().required(),
    modificationDetails: Joi.string(),
    licenseNo: Joi.string().required(),
    pickupDate:Joi.string().required(),
    dropDate:Joi.string().required(),
})

const addVehicleValidation = Joi.object({
    vehicleName: Joi.string().required(),
    vehicleType: Joi.string().required(),
    brandName: Joi.string().required(),
    model: Joi.string().required(),
    fuelType: Joi.string().required(),
    rentPerDay:Joi.number().required(),
    details:Joi.string().required(),
    email: Joi.string().email().required()
})

module.exports = { registrationValidation, loginValidation , contactValidation , addBookingValidation , addVehicleValidation}  