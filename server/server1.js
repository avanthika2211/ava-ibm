const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Flight = require('./Flight'); // Adjust the path if necessary

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/flight-booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/flights', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flights' });
  }
});

app.post('/api/flights/book/:id', async (req, res) => {
  const flightId = req.params.id;
  try {
    // In a real application, you would handle booking logic here
    // For simplicity, this example does not implement actual booking
    res.json({ message: 'Booked successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error booking flight' });
  }
});

app.listen(5005, () => {
  console.log('Server running on port 5005');
});
