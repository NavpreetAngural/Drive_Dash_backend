const Vehicles = require("../../models/addVehicle")

const manage = async (req, res) => {
    try {
        const vehicles = await Vehicles.find({ email: req.params.email })
        if (!vehicles) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(vehicles);
    }
    catch (err) {
        res.status(500).json({ error: err.message });

    }
}

module.exports = manage