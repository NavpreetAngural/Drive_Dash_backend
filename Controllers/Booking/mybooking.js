const Booking = require("../../models/addBooking");

const myBooking = async (req, res) => {
    try {
        const booking = await Booking.find({ email: req.params.email });
        if (!booking) {
            return res.status(404).json({ message: 'Bookings not found' });
        }
        res.json(booking);  // Use 'booking' instead of 'user'

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = myBooking;
