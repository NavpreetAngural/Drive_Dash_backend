const { addVehicleValidation } = require("../../services/validationSchema");
const User = require("../../models/User");
const AddVehicle = require("../../models/addVehicle");

const add = async (req, res, next) => {
    try {
        // Validate request body
        const addValues = await addVehicleValidation.validateAsync(req.body);
        const {
            vehicleName,
            vehicleType,
            brandName,
            model,
            fuelType,
            rentPerDay,
            details,
            email
        } = addValues;

        // Check if the user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: "Please register first.",
            });
        }

        // Create and save new vehicle
        const addData = new AddVehicle({
            vehicleName,
            vehicleImage: req.file.filename,
            vehicleType,
            brandName,
            model,
            fuelType,
            rentPerDay,
            details,
            email,
        });

        await addData.save();

        res.status(200).json({
            success: true,
            message: "Vehicle added successfully",
            data: addData,
        });

    } catch (error) {
        console.log(error);
        next(error); // ✅ Pass error to Express error handler
    }
};

module.exports = add;
