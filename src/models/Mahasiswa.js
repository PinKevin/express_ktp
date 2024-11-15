const { PrismaClient, sql, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const Mahasiswa = {
  getMahasiswaByToken: async (req) => {
    try {
      const nim = req.decodedToken.username;

      const response = await prisma.mahasiswa.findUnique({
        where: {
          nim: nim,
        },
        select: {
          nama: true,
          nim: true,
          email : true,
          jalur_masuk : true,
          status : true,
          user: {
            select: {
              username: true,
              role: true,
            },
          },
          dosen: {
            select: {
                nama: true,
                nip: true
            }
          }
        },
      });

      if (!response) {
        throw new Error("Mahasiswa not found");
      }

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = Mahasiswa;
