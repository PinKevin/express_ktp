const { PrismaClient, sql, Prisma } = require("@prisma/client");
const Dosen = require("./Dosen");
const prisma = new PrismaClient();

const IRS = {
    getIRS: async (irsid) => {
        try {
            const response = await prisma.$queryRaw`
                SELECT * FROM "IRS"
            `;
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getIRS: async (nip, irsid) => {
        try {
            const response = await prisma.$queryRaw`
                SELECT 
                    "IRS".id,
                    "Dosen". nip,
                FROM "IRS"
                JOIN "Dosen" ON "IRS".dosenid = "Dosen".nip
                WHERE Dosen.nip = ${nip}
                AND IRS.id = ${irsid}
            `;
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    verifyIRS: async (nip, irsid) => {
        try {
            const response = await prisma.$executeRaw`
                UPDATE "IRS"
                SET is_verified = 1
                WHERE Dosen.nip = ${nip}
                AND IRS.id = ${irsid}
            `;
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}