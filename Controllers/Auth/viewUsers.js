const Users = require("../../models/User")
const viewUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users)
    }
    catch (err) {
        res.status(500).json({ message: 'Server Error', Error })
    }
}

module.exports = viewUsers