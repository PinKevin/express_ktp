const express = require("express");
const router = express.Router();
const IRSController = require("../controllers/irs.controller");
const auth = require("../middleware/auth");
const upload = require("../helpers/upload");

router.post("/", upload.single("berkas_irs"), auth, IRSController.createIRS);

module.exports = router;
