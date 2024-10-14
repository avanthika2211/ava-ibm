const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
app.use(express.json());
app.use(cors()); 

mongoose.connect('mongodb://localhost:27017/signup', { useNewUrlParser: true, useUnifiedTopology: true });

const travelerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Traveler = mongoose.model('Traveler', travelerSchema);


app.get('/signup', async (req, res) => {
  try {
    const users = await Traveler.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users.' });
  }
});

app.post('/signup', async (req, res) => {
  try {
    const traveler = new Traveler(req.body);
    await traveler.save();
    res.json(traveler);
  } catch (error) {
    res.status(500).json({ message: 'Error saving user.' });
  }
});

app.listen(5001, () => console.log('Server running on port 5001'));
