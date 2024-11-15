const Dosen = require("../models/Dosen");

const DosenController = {
  getByUsername: async (req, res) => {

    try {
      const dosen = await Dosen.getByUsername(req);
      return res.status(200).json(dosen);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = DosenController;
