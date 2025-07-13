const router = require("express").Router()

const add = require("../../Controllers/Vehicles/add");
const viewVehicles = require("../../Controllers/Vehicles/view");
const deleteVehicle = require("../../Controllers/Vehicles/delete")
const checkAuth = require("../../middleware/checkAuth");
const updateVehicle = require("../../Controllers/Vehicles/update")
const type = require("../../Controllers/Vehicles/type")
const manageVehicles = require("../../Controllers/Vehicles/manageVehicles");
const upload = require("../../middleware/CloudinaryUpload");

router.post("/add", upload.single('vehicleImage'), add);
router.get("/view", viewVehicles)
router.delete("/delete/:id", checkAuth, deleteVehicle)
router.put("/update/:id" ,  upload.single('vehicleImage'), updateVehicle)
router.get("/type/:vehicleType" , type)
router.get("/manage/:email" , manageVehicles)

module.exports = router;
