const Donor = require('../models/donor');
const Recipient = require('../models/recipient');

// Donor signup
const donorSignup = async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  try {
    const existing = await Donor.findOne({ $or: [{ name }, { email }] });
    if (existing) {
      return res.status(400).json({ message: 'Donor already exists' });
    }
    const donor = new Donor({ name, email, password, phone, address });
    await donor.save();
    res.status(201).json({ message: 'Donor registered successfully', donor });
  } catch (err) {
    res.status(500).json({ message: 'Error registering donor' });
  }
};

// Donor login
const donorLogin = async (req, res) => {
  const { name, password } = req.body;
  try {
    const donor = await Donor.findOne({ name, password });
    if (!donor) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful', donor });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in' });
  }
};

// Recipient signup
const recipientSignup = async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  try {
    const existing = await Recipient.findOne({ $or: [{ name }, { email }] });
    if (existing) {
      return res.status(400).json({ message: 'Recipient already exists' });
    }
    const recipient = new Recipient({ name, email, password, phone, address });
    await recipient.save();
    res.status(201).json({ message: 'Recipient registered successfully', recipient });
  } catch (err) {
    res.status(500).json({ message: 'Error registering recipient' });
  }
};

// Recipient login
const recipientLogin = async (req, res) => {
  const { name, password } = req.body;
  try {
    const recipient = await Recipient.findOne({ name, password });
    if (!recipient) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful', recipient });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in' });
  }
};

module.exports = {
  donorSignup,
  donorLogin,
  recipientSignup,
  recipientLogin,
};