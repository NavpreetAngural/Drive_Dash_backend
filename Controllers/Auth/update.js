const User = require("../../models/User")

const updateUser = async (req, res) => {
    const userId = req.params.id
    const updateData = req.body
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true })
        if (!updatedUser) {
            return res.status(404).json({ message: "failed to fetch single User" })
        }
        return res.status(200).json({ message: "user fetched successfully", updatedUser })
    }
    catch(error) {
        return res.status(400).json({error })
    }
}

module.exports = updateUser