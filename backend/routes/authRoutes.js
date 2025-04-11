const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../controllers/authController");

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
// This code defines the authentication routes for the application. It imports the necessary modules, creates a router, and sets up two POST routes for user signup and login. The routes are linked to their respective controller functions, which handle the logic for each operation. Finally, the router is exported for use in other parts of the application.