const Contact = require("../../models/contact")
const viewqueries = async (req, res) => {
    try {
        const queries = await Contact.find();
        res.json(queries)
    }
    catch (err) {
        res.status(500).json({ message: 'Server Error', Error })
    }
}

module.exports = viewqueries