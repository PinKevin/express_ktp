const express = require("express");
const router = express.Router();
const DosenController = require("../controllers/dosen.controller");
const auth = require("../middleware/auth");


router.get("/", auth, DosenController.getByUsername);


module.exports = router;