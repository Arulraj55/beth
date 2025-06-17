const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
  facebook: { type: String, required: true },
  instagram: { type: String, required: true },
  phone: { type: String, required: true }
});

module.exports = mongoose.model('ContactInfo', contactInfoSchema);