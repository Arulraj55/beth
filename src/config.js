const path = require('path');

const config = {
    dbPaths: {
        donorDB: path.join(__dirname, 'db', 'donor.json'),
        recipientDB: path.join(__dirname, 'db', 'recipient.json'),
        contactInfoDB: path.join(__dirname, 'db', 'contactInfo.json'),
    },
    server: {
        port: process.env.PORT || 3000,
    },
};

module.exports = config;