const express = require("express");
const { regiterUser, loginUser, currentUser } = require("../Controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", regiterUser);

router.post("/login", loginUser);

router.get("/current",validateToken, currentUser);

module.exports = router;