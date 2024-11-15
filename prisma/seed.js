const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

async function seeder() {
  try {
    const hashedPassword = await bcrypt.hash("password", 10);

    const dosenUserData = [
      {
        username: "199112092024061001",
        password: hashedPassword,
        role: "Dosen",
      },
      {
        username: "198203092006041002",
        password: hashedPassword,
        role: "Dosen",
      },
    ];

    await prisma.user.createMany({
      data: dosenUserData,
    });

    const createdDosenUsers = await prisma.user.findMany({
      where: {
        username: { in: dosenUserData.map((user) => user.username) },
      },
    });

    const dosenData = [
      {
        nip: "199112092024061001",
        nama: "Adhe Setya Pramayoga, M.T.",
        alamat: "Tembalang",
        no_telp: "081234567892",
        email: "adhesetya@lecturer.undip.ac.id",
        user_id: createdDosenUsers.find(
          (user) => user.username === "199112092024061001"
        ).id,
      },
      {
        nip: "198203092006041002",
        nama: "Dr.Eng. Adi Wibowo, S.Si., M.Kom.",
        alamat: "Tembalang",
        no_telp: "081234567893",
        email: "adiwibowo@lecturer.undip.ac.id",
        user_id: createdDosenUsers.find(
          (user) => user.username === "198203092006041002"
        ).id,
      },
    ];
    await prisma.dosen.createMany({
      data: dosenData,
    });

    const mahasiswaUserData = [
      {
        username: "24060121140166",
        password: hashedPassword,
        role: "Mahasiswa",
      },
      {
        username: "24060121140174",
        password: hashedPassword,
        role: "Mahasiswa",
      },
    ];

    await prisma.user.createMany({
      data: mahasiswaUserData,
    });

    const createdMahasiswaUsers = await prisma.user.findMany({
      where: {
        username: { in: mahasiswaUserData.map((user) => user.username) },
      },
    });

    const mahasiswaData = [
      {
        nim: "24060121140166",
        nama: "Erlan Irhab Ghalib",
        alamat: "Kuningan",
        no_telp: "081234567890",
        email: "erlanirhab@gmail.com",
        jalur_masuk: "SNMPTN",
        status: "Aktif",
        dosenId: "199112092024061001",
        user_id: createdMahasiswaUsers.find(
          (user) => user.username === "24060121140166"
        ).id,
      },
      {
        nim: "24060121140174",
        nama: "M Hafiz Attariq",
        alamat: "Medan",
        no_telp: "081234567891",
        email: "hafizattariq@email.com",
        jalur_masuk: "SBMPTN",
        status: "Aktif",
        dosenId: "198203092006041002",
        user_id: createdMahasiswaUsers.find(
          (user) => user.username === "24060121140174"
        ).id,
      },
    ];
    await prisma.mahasiswa.createMany({
      data: mahasiswaData,
    });

    console.log("Seeding success");
  } catch (error) {
    console.error("Failed to seed database", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

seeder();
