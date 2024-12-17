const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const PORT = 5000;

// Connect to MongoDB (ensure the URI is correct)
mongoose.connect('mongodb+srv://nehashetty:jungkook@cluster0.wfi6caw.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
