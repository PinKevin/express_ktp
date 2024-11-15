const Mahasiswa = require("../models/Mahasiswa");

const MahasiswaController = {
  getMahasiswa: async (req, res) => {
    try {
      const mahasiswa = await Mahasiswa.getMahasiswaByToken(req);
      res.status(200).json(mahasiswa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = MahasiswaController;
