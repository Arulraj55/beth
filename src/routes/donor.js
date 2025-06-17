const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donorController');

// Route to get all donors
router.get('/', donorController.getAllDonors);

// Route to add a new donor
router.post('/', donorController.addDonor);

// Route to find a donor by email
router.get('/:email', donorController.findDonorByEmail);

// Route for donor signup
router.post('/signup', donorController.signup);

module.exports = router;