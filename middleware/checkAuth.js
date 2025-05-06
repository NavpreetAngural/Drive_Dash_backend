const jwt = require("jsonwebtoken")
require("dotenv").config()
const secretKey = process.env.JWT_SECRET

const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        // console.log(token)
        const decoded = jwt.verify(token, secretKey)
        req.user = decoded
        // console.log("verify", decoded);
        next()
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token !!"
        })
    }
}
module.exports = checkAuth;
