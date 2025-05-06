const User = require("../../models/User")

const hirerProfile = async(req , res) => {
    try{
        const user = await User.findOne({email : req.params.email})
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.json(user);

    }
    catch(err){
        res.status(500).json({ error: err.message });

    }
}

module.exports = hirerProfile