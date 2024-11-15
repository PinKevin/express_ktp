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
  getIRS: async (req, res) => {
    try {
      const mahasiswa_id = req.decodedToken.username;

      const data = await IRS.getIrsByMahasiswaID(mahasiswa_id);

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getIRSMahaiswaPerwalian: async (req, res) => {
    try {
      const dosen_id = req.decodedToken.username;

      const data = await IRS.getIrsMahaiswaPerwalian(dosen_id);

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  verifyIRS: async (req, res) => {
    try {
      const irs_id = req.params.id;

      const response = await IRS.verifyIRS(irs_id);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  verifyBulkIRS: async (req, res) => {
    try {
      const { irs_ids } = req.body;

      const responses = await IRS.verifyBulkIRS(irs_ids);

      return res.status(200).json(responses);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = IRSController;
