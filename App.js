import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// HomePage Component
function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Sahyadri</h1>
      <p>This is the homepage. Navigate to other pages using the links above.</p>
    </div>
  );
}

// BookingPage Component
function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomType: 'Single',
    checkInDate: '',
    checkOutDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking successful!
Name: ${formData.name}
Email: ${formData.email}
Room Type: ${formData.roomType}
Check-In: ${formData.checkInDate}
Check-Out: ${formData.checkOutDate}`);
  };

  return (
    <div className="booking-page">
      <h1>Booking Page</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Room Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">USN:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="roomType">Capacity:</label>
          <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange}>
            <option value="Single">50-100</option>
            <option value="Double">100-200</option>
            <option value="Suite">More than 200</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Booking Date:</label>
          <input type="date" id="checkInDate" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Booking Time:</label>
          <input type="time" id="bookingtime" name="bookingtime" value={formData.checkOutDate} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
}

// FormSubmissionPage Component
function FormSubmissionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted!
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`);
  };

  return (
    <div className="form-page">
      <h1>Complaint Form</h1>
      <form onSubmit={handleSubmit} className="form-submission">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Complaint:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/form">Complaint Form</Link></li>
      </ul>
    </nav>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/form" element={<FormSubmissionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
