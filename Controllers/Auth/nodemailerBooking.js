const nodemailer = require('nodemailer')
require('dotenv').config()

const sendBookingEmail = async (email , vehicleType, pickupDate, dropDate) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD
            }
        })

        const message = {
            from: process.env.USER,
            to: email,
            subject: "Booking Added Successfully",
            html: `
            <h2>Welcome!</h2>
                <p>Your Booking has been created successfully.</p>
                <p><strong>Type of Vehicle:</strong> ${vehicleType}</p>
                <p><strong>Pickup Date:</strong> ${pickupDate}</p>
                <p><strong>Drop Date:</strong> ${dropDate}</p>
            `
        }
        await transporter.sendMail(message)
        console.log(`✅ Email sent to ${email}`);
        return { status: true }
    }
    catch {
        return { success: false, error: error.message };
    }
}

module.exports = sendBookingEmail