const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

// POST /api/users/register
router.post("/register", registerUser);

// POST /api/users/login
router.post("/login", loginUser);

module.exports = router;