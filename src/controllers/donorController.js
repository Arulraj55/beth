const fs = require('fs');
const path = require('path');

// Path to the donor database
const donorDBPath = path.join(__dirname, '../db/donor.json');
console.log('Donor DB Path:', donorDBPath);

// Function to get all donors
const getAllDonors = (req, res) => {
    fs.readFile(donorDBPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading donor data' });
        }
        const donors = JSON.parse(data);
        res.status(200).json(donors);
    });
};

// Function to add a new donor
const addDonor = (req, res) => {
    const newDonor = req.body;

    fs.readFile(donorDBPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading donor data' });
        }
        const donors = JSON.parse(data);
        donors.push(newDonor);

        fs.writeFile(donorDBPath, JSON.stringify(donors, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving donor data' });
            }
            res.status(201).json(newDonor);
        });
    });
};

// Function to find a donor by email
const findDonorByEmail = (req, res) => {
    const { email } = req.params;

    fs.readFile(donorDBPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading donor data' });
        }
        const donors = JSON.parse(data);
        const donor = donors.find(d => d.email === email);

        if (!donor) {
            return res.status(404).json({ message: 'Donor not found' });
        }
        res.status(200).json(donor);
    });
};

// Donor signup function for route
const signup = (req, res) => {
    const newDonor = req.body;
    console.log('Received signup:', newDonor);

    fs.readFile(donorDBPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Read error:', err);
            return res.status(500).json({ message: 'Error reading donor data' });
        }
        let donors = [];
        try {
            donors = JSON.parse(data);
        } catch (parseErr) {
            console.error('Parse error:', parseErr);
            return res.status(500).json({ message: 'Error parsing donor data' });
        }

        if (donors.some(d => d.email === newDonor.email)) {
            return res.status(400).json({ message: 'Donor already exists' });
        }

        donors.push(newDonor);

        fs.writeFile(donorDBPath, JSON.stringify(donors, null, 2), (err) => {
            if (err) {
                console.error('Write error:', err);
                return res.status(500).json({ message: 'Error saving donor data' });
            }
            console.log('Donor added:', newDonor);
            res.status(201).json({ message: 'Donor signed up successfully', donor: newDonor });
        });
    });
};

module.exports = {
    getAllDonors,
    addDonor,
    findDonorByEmail,
    signup,
};