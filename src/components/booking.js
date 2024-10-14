import React, { useState } from 'react';
import axios from 'axios';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    flight: '',
    hotel: '',
    numPersons: 0, 
  });

  const [errors, setErrors] = useState({
    numPersons: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'number') {
      setFormData({
        ...formData,
        [name]: Math.max(0, Number(value)), 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (name === 'numPersons') {
      setErrors({
        ...errors,
        numPersons: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.numPersons) {
      setErrors({
        ...errors,
        numPersons: 'Please specify the number of persons.'
      });
      return;
    }

    try {
      await axios.post('http://localhost:5000/travelers', formData);
      alert('Booked successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        flight: '',
        hotel: '',
        numPersons: 0, 
      });
      setErrors({ numPersons: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="Booking">
      <style>
        {`
          .Booking {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            padding: 30px;
            max-width: 600px;
            margin: 40px auto;
            border: 2px solid #fd7e14;
            border-radius: 10px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            background-color: #fff;
          }
          .Booking h3 {
            color: #343a40;
            margin-bottom: 20px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
          }
          .Booking form {
            display: flex;
            flex-direction: column;
          }
          .Booking div {
            margin-bottom: 15px;
          }
          .Booking label {
            display: block;
            margin-bottom: 5px;
            color: #495057;
            font-size: 16px;
            font-weight: 500;
          }
          .Booking input[type="text"],
          .Booking input[type="email"],
          .Booking input[type="tel"],
          .Booking input[type="number"],
          .Booking select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ced4da;
            border-radius: 6px;
            box-sizing: border-box;
            font-size: 16px;
          }
          .Booking button {
            background-color: #fd7e14;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
            align-self: center;
          }
          .Booking button:hover {
            background-color: #e06c00;
          }
          .Booking .error {
            color: #dc3545;
            font-size: 14px;
            margin-top: 5px;
          }
          .Booking input[type="text"],
          .Booking input[type="email"],
          .Booking input[type="tel"],
          .Booking input[type="number"],
          .Booking select {
            max-width: 400px;
          }
        `}
      </style>
      <h3>BOOK HERE</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[6789][0-9]{9}"
            title="Phone number must be 10 digits long and start with 6, 7, 8, or 9."
            maxLength={10}
          />
        </div>

        <div>
          <label htmlFor="flight">Choose Flight Service:</label>
          <select
            id="flight"
            name="flight"
            value={formData.flight}
            onChange={handleChange}
            required
          >
            <option value="">Select Flight</option>
            <option value="air india">Air India</option>
            <option value="spicejet">Spice Jet</option>
            <option value="IndiGo">IndiGo</option>
            <option value="Goair">GoAir</option>
            <option value="Vistara">Vistara</option>
          </select>
        </div>

      

        <div>
          <label htmlFor="hotel">Choose Hotel:</label>
          <select
            id="hotel"
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
            required
          >
            <option value="">Select Hotel</option>
            <option value="Marriott hotel">Marriott Hotel</option>
            <option value="Hilton Hotels">Hilton Hotels</option>
            <option value="IHG">IHG</option>
            <option value="Hyatt Hotels">Hyatt Hotels</option>
            <option value="Accor Hotels">Accor Hotels</option>
          </select>
        </div>

        <div>
          <label htmlFor="numPersons">Number of Persons:</label>
          <input
            type="number"
            id="numPersons"
            name="numPersons"
            placeholder="Enter Number of Persons"
            value={formData.numPersons}
            onChange={handleChange}
            required
            min="1"
          />
          {errors.numPersons && <p className="error">{errors.numPersons}</p>}
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Booking;