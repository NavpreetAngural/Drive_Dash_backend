const Contact = require("../../models/contact");

const deleteQuery = async (req, res) => {
  try {
    const deletedQuery = await Contact.findOneAndDelete({ _id: req.params.id });
    if (!deletedQuery) {
      return res.status(404).json({ message: 'Query not found' });
    }
    return res.status(200).json({ message: 'Query deleted successfully', deletedQuery });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Query', error });
  }
};

module.exports = deleteQuery;
