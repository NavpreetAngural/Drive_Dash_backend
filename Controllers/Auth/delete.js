const User = require("../../models/User")

const deleteUser = async(req , res) => {
    try{
        const deleteduser = await User.findOneAndDelete({_id: req.params.id})
        if(!deleteduser){
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({  message: 'User deleted successfully', deleteduser });
    }
    catch(error){
        res.status(500).json({ message: 'Error deleting User', error });

    }
}

module.exports = deleteUser