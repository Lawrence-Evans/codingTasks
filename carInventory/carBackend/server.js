// Server packages
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
const cors = require("cors");
require("dotenv").config();

// Initialize express
const app = express();

// Enable CORS, routes and http requests/responses can use json
app.use(express.json());
app.use(cors());
app.use("/", router.routes);

// Retrieving environment variables for port number
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connection to db using Mongo Atlas driver stored in env, contains username and password as one string
const URI = process.env.DB_DRIVER_CONNECTION;

// // Creating api object
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

// Connection 1 Using URL and clientOptions to connect MongoDB cluster and mongoose.
mongoose
  .connect(URI, clientOptions)
  .then(() => {
    console.log("Connection to mongodb successful.");
  })
  .catch((error) => {
    console.log("Error connecting to mongodb", error);
  });

// // Connection 2
// mongoose
//   .connect(URI, clientOptions)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// // Connection 3
// const db = async () => {
//   try {
//     await mongoose.connect(URI, { clientOptions });
//     console.log("CONNECTED TO DATABASE SUCCESSFULLY");
//   } catch (error) {
//     console.error("COULD NOT CONNECT TO DATABASE:", error.message);
//   }
// };

// Connection 3
// module.exports = { db };
