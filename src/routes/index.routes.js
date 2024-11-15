const express = require("express");
const router = express.Router();

const AuthRoutes = require("../routes/auth.routes");
const MahasiswaRoutes = require("../routes/mahasiswa.routes");
const IRSRoutes = require("../routes/irs.routes");

router.use("/auth", AuthRoutes);
router.use("/mahasiswa", MahasiswaRoutes);
router.use("/irs", IRSRoutes);

module.exports = router;
