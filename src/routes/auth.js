const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Donor signup route
router.post('/donor/signup', authController.donorSignup);

// Recipient signup route
router.post('/recipient/signup', authController.recipientSignup);

// Donor login route
router.post('/donor/login', authController.donorLogin);

// Recipient login route
router.post('/recipient/login', authController.recipientLogin);

module.exports = router;