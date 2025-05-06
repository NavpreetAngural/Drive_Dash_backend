const   router = require("express").Router()
const add = require("../../Controllers/Booking/add") //importing file where to direct
const view = require("../../Controllers/Booking/view")
const deletebooking = require("../../Controllers/Booking/delete")
const updatebooking = require("../../Controllers/Booking/update")
const checkAuth = require("../../middleware/checkAuth")
const mybooking = require("../../Controllers/Booking/mybooking")

router.use("/add", add)  //path and file 
router.use('/view', checkAuth, view)
router.use('/delete/:id', checkAuth, deletebooking)
router.use("/update/:id", checkAuth, updatebooking)
router.use("/mybooking/:email" , mybooking)
module.exports = router