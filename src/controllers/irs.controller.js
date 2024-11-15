const IRS = require("../models/IRS");

const IRSController = {
  createIRS: async (req, res) => {
    try {
      const mahasiswa_id = req.decodedToken.username;
      const semester = parseInt(req.body.semester, 10);
      const jumlah_sks = parseInt(req.body.jumlah_sks, 10);
      let nilai = parseFloat(req.body.nilai);
      nilai = parseFloat(nilai.toFixed(2));
      const berkas_irs = req.file;

      const data = {
        semester: semester,
        jumlah_sks: jumlah_sks,
        nilai: nilai,
        berkas_irs: berkas_irs.filename,
        mahasiswa_id: mahasiswa_id,
        isVerified: false,
      };

      const response = await IRS.create(data);

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = IRSController;
