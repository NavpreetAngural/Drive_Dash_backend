const Booking = require("../../models/addBooking")
const viewBooking = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings)
    }
    catch (err) {
        res.status(500).json({ message: 'Server Error', Error })
    }
}

module.exports = viewBooking