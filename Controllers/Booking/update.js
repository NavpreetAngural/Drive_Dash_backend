const addBookings = require("../../models/addBooking");

const updateBooking = async (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;
    try {
        const updatedBooking = await addBookings.findByIdAndUpdate(userId, updateData, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ message: "Failed to update booking" });
        }
        return res.status(200).json({ message: "Booking updated successfully", updatedBooking });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = updateBooking;
