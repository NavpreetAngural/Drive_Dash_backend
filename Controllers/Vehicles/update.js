const Vehicle = require("../../models/addVehicle")

const updateVehicle = async(req , res) => {
    const vehicleId = req.params.id;
    
    try{
        const updateData = req.body;
        if (req.file) {
            updateData.vehicleImage = req.file.filename;
        }
        const updatedVehicle = await Vehicle.findByIdAndUpdate(vehicleId , updateData ,{ new: true } )
        if (!updatedVehicle) {
            return res.status(404).json({ message: "Failed to update Vehicle" });
        }
        return res.status(200).json({ message: "Vehicle updated successfully", updatedVehicle });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = updateVehicle