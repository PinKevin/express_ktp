const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const auth = require("../middleware/auth");

router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

module.exports = router;