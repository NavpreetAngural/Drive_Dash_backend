const addBooking = require("../../models/addBooking");

const deletebooking = async (req, res) => {
    try {
        const deletedbooking = await addBooking.findOneAndDelete({ _id: req.params.id });
        if (!deletedbooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully', deletedbooking });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting booking', error });
    }
};

module.exports = deletebooking;
