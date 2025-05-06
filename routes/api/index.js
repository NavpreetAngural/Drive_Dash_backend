const router = require("express").Router()

const authRoute = require("./auth")
const contactRoute = require("./contact")
const bookingRoute = require("./booking")
const vehicleRoute = require("./vehicle")

router.use("/auth" , authRoute)
router.use("/contact" , contactRoute)
router.use("/booking" , bookingRoute)
router.use("/vehicle" , vehicleRoute)

module.exports = router