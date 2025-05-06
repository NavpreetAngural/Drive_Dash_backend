const Vehicle = require("../../models/addVehicle");

const type = async (req, res) => {
  const vehicleType = req.params.vehicleType;

  try {
    const vehicles = await Vehicle.find({
      vehicleType: { $regex: new RegExp(`^${vehicleType}$`, 'i') }
    });

    res.status(200).json(vehicles);
  } catch (err) {
    console.error("Error fetching vehicles by type:", err);
    res.status(500).json({ message: "Server error fetching vehicles" });
  }
};

module.exports = type;
