const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/travelers', { useNewUrlParser: true, useUnifiedTopology: true });

const travelerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  flight: String,
  hotel: String,
  numPersons: Number,
});

const Traveler = mongoose.model('Traveler', travelerSchema);

app.get('/travelers', async (req, res) => {
  try {
    const travelers = await Traveler.find();
    res.json(travelers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching travelers.' });
  }
});

app.post('/travelers', async (req, res) => {
  try {
    const traveler = new Traveler(req.body);
    await traveler.save();
    res.json(traveler);
  } catch (error) {
    res.status(500).json({ message: 'Error saving traveler.' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

