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
};

module.exports = IRS;
