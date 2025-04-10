require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();

// Models
const Holding = require("./models/holdingsModel");
const Position = require("./models/positionsModel");
const User = require("./models/usersModel");

const uri = process.env.DB_URL;
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true, // allow credentials (cookies)
  })
);
app.use(bodyParser.json());

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

// Routes
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await Holding.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await Position.find({});
  res.json(allPositions);
});

app.post("/signup", async (req, res) => {
  console.log("User Data", req.body);
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ message: "User already exists", success: false });
  }

  const newUser = new User({ username, email, password });
  const token = createSecretToken(newUser._id);
  res.cookie("token", token, {
    httpOnly: false,
  });

  try {
    await newUser.save();
    console.log("User signed up successfully", newUser);
    return res.json({ message: "User signed up successfully", success: true });
  } catch (err) {
    console.error("Error signing up user", err);
    return res.json({ message: "Internal server error", success: false });
  }
});

app.post("/login", async (req, res) => {
  console.log("Login User Data", req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
});

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
