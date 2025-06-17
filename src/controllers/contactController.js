const ContactInfo = require('../models/contactInfo');

// Get contact info (only one document, manually created in DB)
exports.getContactInfo = async (req, res) => {
  try {
    const info = await ContactInfo.findOne();
    if (!info) {
      return res.status(404).json({ message: 'Contact info not found' });
    }
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json({ message: 'Error reading contact information' });
  }
};