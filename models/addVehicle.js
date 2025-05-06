const { Schema, model } = require("mongoose")

const addVehicleSchema = new Schema({
    vehicleName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    vehicleImage : {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        // required: true
    },
    model: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    rentPerDay: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    }
})

module.exports = model("addVehicle" , addVehicleSchema)