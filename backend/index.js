require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const Holding = require("./models/holdingsModel"); // Assuming you have a Holding model defined in models/Holding.js
const Position = require("./models/positionsModel"); // Assuming you have a Position model defined in models/Holding.js

const uri = process.env.DB_URL; // MongoDB connection string
const PORT = process.env.PORT || 8080;

app.get('/allHoldings', async (req, res) => {
    const allHoldings = await Holding.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
    const allPositions = await Position.find({});
    res.json(allPositions);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  mongoose
    .connect(uri)
    .then((res) => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.error("Error connecting to Database", err);
    });
});
