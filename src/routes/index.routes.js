const express = require("express");
const router = express.Router();
const DosenRoutes = require("../routes/dosen.routes");

const AuthRoutes = require("../routes/auth.routes");
const MahasiswaRoutes = require("../routes/mahasiswa.routes");
const IRSRoutes = require("../routes/irs.routes");
const SymlinkRoutes = require("../routes/symlink.routes");

router.use("/auth", AuthRoutes);
router.use("/dosen", DosenRoutes);
router.use("/mahasiswa", MahasiswaRoutes);
router.use("/irs", IRSRoutes);
router.use("/symlink", SymlinkRoutes);

module.exports = router;
