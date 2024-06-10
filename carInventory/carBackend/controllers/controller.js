// const app = require("../server.js");
const models = require("../models/CarModel");
const CarModel = models.CarModel;

// Added error handling specify where the request that failed
const getAllCars = async (req, res) => {
  try {
    const cars = await CarModel.find();
    res.json(cars);
  } catch (error) {
    console.error("Error while fetching all cars", error);
  }
};

// Current date1 is defined as full year then date2 is defined as 5 years less than that
// date2 is used to find all models less than itself
const displayFiveYearsOld = async (req, res) => {
  try {
    const date1 = new Date().getFullYear();
    const date2 = date1 - 5;
    const carsFiveYearsOld = await CarModel.find({ model: { $lt: date2 } });
    res.json(carsFiveYearsOld);
  } catch (error) {
    console.error("Error while fetching five year old cars", error);
  }
};

// Create a car
const createCar = async (req, res) => {
  const { model, make, registration, owner } = req.body;
  const car = await CarModel.create({
    model: model,
    make: make,
    registration: registration,
    owner: owner,
  });
  const savedCar = await car.save();
  res.json({
    message: "Car saved successfully",
    savedCar: savedCar,
  });
};

// Updates the first matching car
const updateOneCar = async (req, res) => {
  const { id } = req.params;
  const values = req.body;

  const car = await CarModel.findByIdAndUpdate(id, values);
  res.json({
    message: "Car Updated successfully.",
    car: car,
  });
};

const updateCarMultiple = async (req, res) => {
  // Takes onClick submission of identifier for more than one car
  // updates all cars which match with with new data
  // Error, car not found
};

const deleteCar = async (req, res) => {
  const { id } = req.params;
  const car = await CarModel.findByIdAndDelete(id);

  res.json({
    // Trying to print car _id in alert
    message: `Car ${JSON.stringify(id)} deleted successfully`,
    car: car,
  });
};

const olderThanFiveYears = async (req, res) => {
  // List all cars >5 years of Date.now() as alert
};

module.exports = {
  getAllCars,
  displayFiveYearsOld,
  createCar,
  updateOneCar,
  updateCarMultiple,
  deleteCar,
  olderThanFiveYears,
};
