const express = require("express");
const controllers = require("../controllers/controller");

const routes = express.Router();

// api routes
routes.get("/cars", controllers.getAllCars);
routes.get("/cars/carsFiveYearsOld", controllers.displayFiveYearsOld);
routes.post("/cars/createCar", controllers.createCar);
routes.put("/cars/updateOneCar/:id", controllers.updateOneCar);
routes.delete("/cars/delete/:id", controllers.deleteCar);

// Other routes to come

module.exports = {
  routes,
};
