const express = require("express");
const router = express.Router();
const IRSController = require("../controllers/irs.controller");
const auth = require("../middleware/auth");
const upload = require("../helpers/upload");

// Import path dan fs
const path = require("path");
const fs = require("fs");

router.post(
  "/upload",
  upload.single("berkas_irs"),
  auth,
  IRSController.createIRS
);
router.get("/", auth, IRSController.getIRS);
router.get("/mahasiswa", auth, IRSController.getIRSMahaiswaPerwalian);
router.put("/verify/:id", auth, IRSController.verifyIRS);
router.put("/verify-bulk", IRSController.verifyBulkIRS);

// Route untuk mengakses file PDF
router.get('/uploads/irs/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, 'public', 'uploads', 'irs', fileName);

  console.log('File path:', filePath); // Memverifikasi path yang diteruskan
  // Cek apakah file ada
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File PDF tidak ditemukan.' });
  }

  // Kirim file PDF dengan header yang tepat
  res.setHeader('Content-Type', 'application/pdf');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error saat mengirim file:', err);
      return res.status(500).json({ message: 'Gagal mengirim file PDF.' });
    }
  });
});

module.exports = router;
