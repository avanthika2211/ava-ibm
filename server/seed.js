const mongoose = require('mongoose');
const Flight = require('./Flight'); 

mongoose.connect('mongodb://localhost:27017/flight-booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');

  const flights = [
    {
      from: "New York",
      to: "London",
      price: 50000,
      takeoff: "2024-09-15 11:00:00",
      landing: "2024-09-15 19:00:00",
      duration: 8
    },
    {
      from: "Los Angeles",
      to: "Tokyo",
      price: 60000,
      takeoff: "2024-09-20 15:00:00",
      landing: "2024-09-21 06:00:00",
      duration: 11
    },
    {
      from: "Paris",
      to: "Rome",
      price: 30000,
      takeoff: "2024-09-25 08:00:00",
      landing: "2024-09-25 09:30:00",
      duration: 1.5
    }
  ];

  // Clear existing data
  await Flight.deleteMany({});

  // Insert new data
  await Flight.insertMany(flights);
  console.log('Sample data inserted');

  mongoose.connection.close();
})
.catch(err => console.error('Connection error:', err));
