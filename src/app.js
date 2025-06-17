const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

// Import your routes
const authRoutes = require('./routes/auth');
const donorRoutes = require('./routes/donor');
const recipientRoutes = require('./routes/recipient');
const contactRoutes = require('./routes/contact');

mongoose.connect('mongodb+srv://arulrajjebasingh:BsvCior7VICpS8v5@glc.tvobjtg.mongodb.net/test')
.then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/recipient', recipientRoutes);
app.use('/api/contact', contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});