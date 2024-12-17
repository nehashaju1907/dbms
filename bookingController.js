const Booking = require("../models/Booking");

// POST: Create a new booking
const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking successful!", booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBooking };
