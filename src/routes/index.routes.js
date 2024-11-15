const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const DosenRoutes = require("../routes/dosen.routes");

const AuthRoutes = require("../routes/auth.routes");

router.use("/auth", AuthRoutes);
router.get("/dosen", DosenRoutes);

module.exports = router;
