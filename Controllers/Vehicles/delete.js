const Vehicle =  require("../../models/addVehicle")

const deleteVehicle = async (req , res) => {
    try{
        const deletedVehicle = await Vehicle.findByIdAndDelete({ _id : req.params.id})
        if(!deletedVehicle){
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        return res.status(200).json({  message: 'Vehicle deleted successfully', deletedVehicle });

    }
    catch(err){
        res.status(500).json({ message: 'Error deleting Vehicle', err });

    }
}

module.exports = deleteVehicle