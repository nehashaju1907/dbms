const express = require('express');
const Booking = require('../models/Booking');  // Import the Booking model

const router = express.Router();

// POST route to handle booking data
router.post('/', async (req, res) => {
  try {
    const { name, email, roomType, checkInDate, checkOutDate } = req.body;

    // Create a new booking entry
    const newBooking = new Booking({
      name,
      email,
      roomType,
      checkInDate,
      checkOutDate
    });

    // Save the booking to MongoDB
    await newBooking.save();

    // Respond with success message
    res.status(201).json({ message: 'Booking successful!' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Booking failed. Please try again.' });
  }
});

module.exports = router;
