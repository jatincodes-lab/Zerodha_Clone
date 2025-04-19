require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const authRoutes = require("./routes/authRoutes");
const dataRoutes = require("./routes/dataRoutes");
const uri = process.env.DB_URL;
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cookieParser());

const allowedOrigins = [
  "https://zerodha-clone-green-one.vercel.app",
  "https://zerodha-clone-25ma.vercel.app",
  "https://localhost:8080"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(bodyParser.json());

app.use("/", authRoutes);
app.use("/api/", dataRoutes);

// Connect to MongoDB and Start Server
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to Database", err);
  });
