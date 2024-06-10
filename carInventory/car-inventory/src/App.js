import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const fetchHome = async () => {
    try {
      const response = await axios.get("http://localhost:8000");
      console.log(response);
    } catch (error) {
      console.error("Error reaching http://localhost:8000", error);
    }
  };

  fetchHome();

  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [registration, setRegistration] = useState("");
  const [owner, setOwner] = useState("");

  // Separate useStates for handleUpdate
  const [updateModel, setUpdateModel] = useState("");
  const [updateMake, setUpdateMake] = useState("");
  const [updateRegistration, setUpdateRegistration] = useState("");
  const [updateOwner, setUpdateOwner] = useState("");

  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const response = await fetch("http://localhost:8000/cars");
    const data = await response.json();
    setCars(data);
  };

  // Display cars handler
  const handleDisplayAllCars = () => {
    alert("All cars" + JSON.stringify(cars));
  };

  // Display cars older than 5 years handler. Fetch factored into handle unlike 
  // cars for handleDisplayAllCars as that variable is needed else where
  const handleDisplayFiveYears = async () => {
    const response = await fetch("http://localhost:8000/cars/carsFiveYearsOld");
    const carsFiveYearsOld = await response.json();
    console.log(carsFiveYearsOld);
    alert("All cars older than 5 years" + JSON.stringify(carsFiveYearsOld));
  };

  // Handler for creating new cars
  const handleAddCar = async (e) => {
    e.preventDefault();
    //Checking input submission
    console.log(model, make, registration, owner);
    const response = await fetch("http://localhost:8000/cars/createCar", {
      // Method and and body has to be in response otherwise it will be an empty entry in collection
      method: "POST",
      body: JSON.stringify({ model, make, registration, owner }),
      // Specifying content type as json
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Checking response
    const info = await response.json();
    console.log(info);
  };

  const handleUpdate = async (id) => {
    console.log(updateModel, updateMake, updateRegistration, updateOwner);

    const response = await fetch(
      `http://localhost:8000/cars/updateOneCar/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          updateModel,
          updateMake,
          updateRegistration,
          updateOwner,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const info = await response.json();
    console.log(info);
    alert("Car Updated Successfully");
  };

  // // Handle for updating one car
  // const handleUpdateOne = async (e) => {
  //   e.preventDefault();
  //   //Checking input submission
  //   console.log();
  //   const response = await fetch("http://localhost:8000/cars/updateOneCar", {
  //     method: "PUT",
  //     body: JSON.stringify({ model, make, registration, owner }),
  //     // Specifying content type as json
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   // Checking response
  //   const info = await response.json();
  //   console.log(info);
  // };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/cars/delete/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    // Force render after delete here
    alert("Car has been deleted", data);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  // This displays the fetched data to the user on the React app
  return (
    <div>
      <header>
        <h1>Car Inventory App Front End</h1>
        <div>
          {/* Display all cars */}
          <button onClick={handleDisplayAllCars} type="submit">
            Display all Cars
          </button>
          <button onClick={handleDisplayFiveYears} type="submit">
            Display all Cars older than 5 years
          </button>
        </div>
        <h2>Add Car</h2>
        <form onSubmit={handleAddCar}>
          <input
            type="text"
            name="model"
            value={model}
            placeholder="Model"
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            type="text"
            name="make"
            value={make}
            placeholder="Make"
            onChange={(e) => setMake(e.target.value)}
          />
          <input
            type="text"
            name="registration"
            value={registration}
            placeholder="Registration"
            onChange={(e) => setRegistration(e.target.value)}
          />
          <input
            type="text"
            name="owner"
            value={owner}
            placeholder="Owner"
            onChange={(e) => setOwner(e.target.value)}
          />
          <button type="submit">Add new Car</button>
        </form>
        <hr></hr>
        {cars.map((car) => {
          return (
            <div key={car._id}>
              <h5>{car._id}</h5>
              <button onClick={() => handleDelete(car._id)}>Delete</button>
              <ul>
                <li>{car.model}</li>
                <li>{car.make}</li>
                <li>{car.registration}</li>
                <li>{car.owner}</li>
              </ul>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  name="updateModel"
                  value={updateModel}
                  placeholder="Model"
                  onChange={(e) => setUpdateModel(e.target.value)}
                />
                <input
                  type="text"
                  name="updateMake"
                  value={updateMake}
                  placeholder="Make"
                  onChange={(e) => setUpdateMake(e.target.value)}
                />
                <input
                  type="text"
                  name="updateRegistration"
                  value={updateRegistration}
                  placeholder="Registration"
                  onChange={(e) => setUpdateRegistration(e.target.value)}
                />
                <input
                  type="text"
                  name="updateOwner"
                  value={updateOwner}
                  placeholder="Owner"
                  onChange={(e) => setUpdateOwner(e.target.value)}
                />
                <button onClick={() => handleUpdate(car._id)} type="submit">
                  Update
                </button>
              </form>
              <hr></hr>
            </div>
          );
        })}

        {/* <h2>Update Car</h2>
        <form onSubmit={handleUpdateOne}>
          <label for="updateOne">Choose car to update by number:</label>
          Then enter details to update.
          <br></br>
          <input
            type="text"
            name="model"
            value={model}
            placeholder="Model"
            onChange={(e) => setUpdateModel(e.target.value)}
          />
          <input
            type="text"
            name="make"
            value={make}
            placeholder="Make"
            onChange={(e) => setUpdateMake(e.target.value)}
          />
          <input
            type="text"
            name="registration"
            value={registration}
            placeholder="Registration"
            onChange={(e) => setUpdateRegistration(e.target.value)}
          />
          <input
            type="text"
            name="owner"
            value={owner}
            placeholder="Owner"
            onChange={(e) => setUpdateOwner(e.target.value)}
          />
          <button type="submit">Update</button>
        </form> */}
      </header>
    </div>
  );
}

export default App;
