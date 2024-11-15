const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Dosen = {
  getByUsername: async (req) => {
    try {
    const username = req.decodedToken.username;

      const response = await prisma.dosen.findUnique({
        where: {
          nip: username,
        },
        select: {
          nip: true,
          nama: true,
          user: {
            select: {
              id: true,
              username: true,
              password: true,
              role: true,
            },
          },
        },
      });

      if (!response) {
        throw new Error("Dosen not found");
      }

      return response;
    } catch (error) {
      throw new Error(`Error fetching Dosen by username: ${error.message}`);
    }
  },
};

module.exports = Dosen;
