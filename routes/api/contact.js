const router = require("express").Router()

const form = require("../../Controllers/Contact/form")
const view = require("../../Controllers/Contact/view")
const deletequery = require("../../Controllers/Contact/delete")
const checkAuth = require("../../middleware/checkAuth")

router.use("/form",form)
router.use("/view", checkAuth , view) 
router.use("/delete/:id" , checkAuth , deletequery)

module.exports = router