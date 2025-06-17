const fs = require('fs');
const path = require('path');

// Path to the recipient database
const recipientDBPath = path.join(__dirname, '../db/recipient.json');

// Function to get all recipients
const getAllRecipients = (req, res) => {
    fs.readFile(recipientDBPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading recipient data' });
        }
        const recipients = JSON.parse(data);
        res.status(200).json(recipients);
    });
};

// Function to add a new recipient
const addRecipient = (req, res) => {
    const newRecipient = req.body;

    fs.readFile(recipientDBPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading recipient data' });
        }
        const recipients = JSON.parse(data);
        recipients.push(newRecipient);

        fs.writeFile(recipientDBPath, JSON.stringify(recipients, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving recipient data' });
            }
            res.status(201).json(newRecipient);
        });
    });
};

// Function to find a recipient by email
const findRecipientByEmail = (req, res) => {
    const { email } = req.params;

    fs.readFile(recipientDBPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading recipient data' });
        }
        const recipients = JSON.parse(data);
        const recipient = recipients.find(r => r.email === email);

        if (!recipient) {
            return res.status(404).json({ message: 'Recipient not found' });
        }
        res.status(200).json(recipient);
    });
};

// Function to get a recipient by ID (index in array)
const getRecipientById = (req, res) => {
    const { id } = req.params;
    fs.readFile(recipientDBPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading recipient data' });
        }
        const recipients = JSON.parse(data);
        const recipient = recipients[parseInt(id)];
        if (!recipient) {
            return res.status(404).json({ message: 'Recipient not found' });
        }
        res.status(200).json(recipient);
    });
};

// Function to update a recipient by ID (index in array)
const updateRecipientById = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    fs.readFile(recipientDBPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading recipient data' });
        }
        let recipients = JSON.parse(data);
        if (!recipients[parseInt(id)]) {
            return res.status(404).json({ message: 'Recipient not found' });
        }
        recipients[parseInt(id)] = { ...recipients[parseInt(id)], ...updatedData };
        fs.writeFile(recipientDBPath, JSON.stringify(recipients, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving recipient data' });
            }
            res.status(200).json(recipients[parseInt(id)]);
        });
    });
};

// Function to delete a recipient by ID (index in array)
const deleteRecipientById = (req, res) => {
    const { id } = req.params;
    fs.readFile(recipientDBPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading recipient data' });
        }
        let recipients = JSON.parse(data);
        if (!recipients[parseInt(id)]) {
            return res.status(404).json({ message: 'Recipient not found' });
        }
        const deleted = recipients.splice(parseInt(id), 1);
        fs.writeFile(recipientDBPath, JSON.stringify(recipients, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving recipient data' });
            }
            res.status(200).json({ message: 'Recipient deleted', deleted });
        });
    });
};

module.exports = {
    getAllRecipients,
    addRecipient,
    findRecipientByEmail,
    getRecipientById,
    updateRecipientById, // <-- Make sure this is here
    deleteRecipientById, // <-- And this
};