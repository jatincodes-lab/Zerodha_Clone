const bcrypt =  require("bcrypt");
const User = require("../models/usersModel");
const createSecretToken = require("../utils/createToken");

const Signup = async (req, res) => {
  console.log("User Data", req.body);
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ message: "User already exists", success: false });
  }

  const newUser = new User({ username, email, password });
  const token = createSecretToken(newUser._id);
  res.cookie("token", token, {
    httpOnly: true,
  });

  try {
    await newUser.save();
    console.log("User signed up successfully", newUser);
    return res.json({ message: "User signed up successfully", success: true });
  } catch (err) {
    console.error("Error signing up user", err);
    return res.json({ message: "Internal server error", success: false });
  }
};

const Login = async (req, res) => {
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
      httpOnly: true,
    });

    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { Signup, Login };
