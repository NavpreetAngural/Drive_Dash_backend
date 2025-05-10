const router = require("express").Router()

const register = require("../../Controllers/Auth/register") //importing file where to direct
const login = require("../../Controllers/Auth/login")
const view = require("../../Controllers/Auth/viewUsers")
const nodemailer = require("../../Controllers/Auth/nodemailer")
const deleteuser = require("../../Controllers/Auth/delete")
const updateuser = require("../../Controllers/Auth/update")
const checkAuth = require("../../middleware/checkAuth")
const hirerprofile = require("../../Controllers/Auth/hirerProfile")
const renterprofile = require("../../Controllers/Auth/renterProfile")
const google = require("../../Controllers/Auth/googleLogin")


router.use("/register", register)  //path and file 
router.use("/login", login)
router.use("/viewusers", checkAuth, view)
router.use("/delete/:id", checkAuth, deleteuser)
router.use("/update/:id", checkAuth, updateuser)
router.use("/sendmail", nodemailer)
router.use("/hirerprofile/:email" , hirerprofile)
router.use("/renterprofile/:email" , renterprofile)
router.post("/google", google )

module.exports = router