import React, { useState } from 'react';
import axios from 'axios';

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomType: 'Single',
    checkInDate: '',
    checkOutDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend via a POST request
      const response = await axios.post("http://localhost:5000/api/bookings", formData);
      
      // Handle the response
      alert(response.data.message); // Assuming backend returns a success message
    } catch (error) {
      console.error("Error:", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="booking-page">
      <h1>Booking Page</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomType">Room Type: </label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date: </label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date: </label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
}

export default BookingPage;
