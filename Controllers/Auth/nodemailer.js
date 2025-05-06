const nodemailer = require("nodemailer");
require('dotenv').config();

const sendEmail = async (email, password, address) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD
            }
        });

        const message = {
            from: process.env.USER,
            to: email,
            subject: "User Account Created Successfully",
            html: `
                <h2>Welcome!</h2>
                <p>Your account has been created successfully.</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
                <p><strong>Address:</strong> ${address}</p>
            `
        };

        await transporter.sendMail(message);
        console.log(`✅ Email sent to ${email}`);
        return { success: true };
    } catch (error) {
        console.error(`❌ Error sending email: ${error.message}`);
        return { success: false, error: error.message };
    }
};

module.exports = sendEmail;
