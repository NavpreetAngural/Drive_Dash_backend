const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    fullname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
    }, password : {
        type: String,
        required: true
    }, phone: {
        type: Number,
        required: true
    }, gender: {
        type: String,
        required: true
    }, address: {
        type: String,
        required: true
    },
    role :{
        type : String,
        default :'hirer'
    }
})

module.exports = model("User", userSchema)