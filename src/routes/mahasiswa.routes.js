const express = require("express");
const router = express.Router();
const MahasiswaController = require("../controllers/mahasiswa.controller");
const auth = require("../middleware/auth");

router.get("/", auth, MahasiswaController.getMahasiswa);

module.exports = router;
