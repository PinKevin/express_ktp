const { PrismaClient, sql, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const User = {
  getByUsername: async (username) => {
    try {
      const response = await prisma.$queryRaw`
            SELECT 
                "User".id, 
                "User".username,
                "User".password, 
                "User".role,
                COALESCE("Mahasiswa".nama, "Dosen".nama) AS nama
            FROM "User"
            LEFT JOIN "Mahasiswa" ON "User".id = "Mahasiswa".user_id
            LEFT JOIN "Dosen" ON "User".id = "Dosen".user_id
            WHERE "User".username = ${username}
            LIMIT 1
        `;

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = User;
