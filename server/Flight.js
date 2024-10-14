const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  price: { type: Number, required: true },
  takeoff: { type: String, required: true },
  landing: { type: String, required: true },
  duration: { type: Number, required: true },
});

module.exports = mongoose.model('Flight', FlightSchema);