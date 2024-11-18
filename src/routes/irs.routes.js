const express = require("express");
const router = express.Router();
const IRSController = require("../controllers/irs.controller");
const auth = require("../middleware/auth");
const upload = require("../helpers/upload");

router.post(
  "/upload",
  upload.single("berkas_irs"),
  auth,
  IRSController.createIRS
);
router.get("/", auth, IRSController.getIRS);
router.get("/mahasiswa", auth, IRSController.getIRSMahaiswaPerwalian);
router.put("/verify/:id", auth, IRSController.verifyIRS);
router.put("/verify-bulk", auth, IRSController.verifyBulkIRS);

module.exports = router;
