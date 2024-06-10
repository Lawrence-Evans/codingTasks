const mongoose = require("mongoose");

// Initialize our schema
const carSchema = mongoose.Schema({
  model: String,
  make: String,
  registration: String,
  owner: String,
});

const CarModel = mongoose.model("Car", carSchema);

module.exports = { CarModel };
