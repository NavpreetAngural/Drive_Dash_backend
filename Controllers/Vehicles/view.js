const Vehicle = require("../../models/addVehicle")

const viewVehicles = async(req , res) => {
    try{
        const vehicles = await Vehicle.find()
        res.json(vehicles)
    }
    catch(err){
        return res.status(400).json({
            success : "false",
            msg : "Failed to Fetch Vehicles Data"
        })
    }
}

module.exports = viewVehicles