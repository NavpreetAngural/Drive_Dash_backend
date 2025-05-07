const { oauth2client } = require("../../utils/googleConfig")

const googleLogin = async (req, res) => {
    try {
        const { code } = req.query
        const googleRes = await oauth2client.getToken(code)
        oauth2client.setCredentials(googleRes.tokens)
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)
        const { email, name, picture } = userRes.data
        res.status(200).json({
            message: 'success',

        });

    }
    catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = googleLogin