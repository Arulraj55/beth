const express = require('express');
const router = express.Router();
const recipientController = require('../controllers/recipientController');

// Route to get all recipients
router.get('/', recipientController.getAllRecipients);

// Route to add a new recipient
router.post('/', recipientController.addRecipient);

// Route to get a recipient by ID
router.get('/:id', recipientController.getRecipientById);

// Route to update a recipient by ID
router.put('/:id', recipientController.updateRecipientById);

// Route to delete a recipient by ID
router.delete('/:id', recipientController.deleteRecipientById);

module.exports = router;