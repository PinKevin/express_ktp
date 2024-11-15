const { PrismaClient, sql, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const IRS = {
  create: async (data) => {
    try {
      const response = await prisma.iRS.create({
        data: {
          ...data,
        },
      });

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getIrsByMahasiswaID: async (mahasiswa_id) => {
    try {
      const response = await prisma.iRS.findMany({
        where: {
          mahasiswa_id: mahasiswa_id,
        },
      });

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getIrsMahaiswaPerwalian: async (dosen_id) => {
    try {
      const response = await prisma.iRS.findMany({
        where: {
          mahasiswa: {
            dosenId: dosen_id,
          },
        },
        include: {
          mahasiswa: true,
        },
      });

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  verifyIRS: async (irs_id) => {
    try {
      const id = parseInt(irs_id, 10);
      const irs = await prisma.iRS.findUnique({
        where: {
          id: id,
        },
      });

      if (!irs) {
        throw new Error("IRS not found");
      }
      const newIsVerified = !irs.isVerified;

      const response = await prisma.iRS.update({
        where: {
          id: id,
        },
        data: {
          isVerified: newIsVerified,
        },
      });

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  verifyBulkIRS: async (irs_ids) => {
    try {
      const ids = irs_ids.map((id) => parseInt(id, 10));

      const responses = await Promise.all(
        ids.map(async (id) => {
          const irs = await prisma.iRS.findUnique({
            where: {
              id: id,
            },
          });

          if (!irs) {
            throw new Error(`IRS with id ${id} not found`);
          }

          const newIsVerified = !irs.isVerified;

          const response = await prisma.iRS.update({
            where: {
              id: id,
            },
            data: {
              isVerified: newIsVerified,
            },
          });

          return response;
        })
      );

      return responses;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = IRS;
