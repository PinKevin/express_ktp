const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

async function seeder() {
  try {
    const hashedPassword = await bcrypt.hash("password", 10);

    const dosenUserData = [
      {
        username: "9876543210",
        password: hashedPassword,
        role: "Dosen",
      },
      {
        username: "9876543211",
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
        nip: "9876543210",
        nama: "Dosen Satu",
        alamat: "Alamat Dosen Satu",
        no_telp: "081234567892",
        email: "dosen1@email.com",
        user_id: createdDosenUsers.find(
          (user) => user.username === "9876543210"
        ).id,
      },
      {
        nip: "9876543211",
        nama: "Dosen Dua",
        alamat: "Alamat Dosen Dua",
        no_telp: "081234567893",
        email: "dosen2@email.com",
        user_id: createdDosenUsers.find(
          (user) => user.username === "9876543211"
        ).id,
      },
    ];
    await prisma.dosen.createMany({
      data: dosenData,
    });

    const mahasiswaUserData = [
      {
        username: "1234567890",
        password: hashedPassword,
        role: "Mahasiswa",
      },
      {
        username: "1234567891",
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
        nim: "1234567890",
        nama: "Mahasiswa Satu",
        alamat: "Alamat Satu",
        no_telp: "081234567890",
        email: "mahasiswa1@email.com",
        jalur_masuk: "SNMPTN",
        status: "Aktif",
        dosenId: "9876543210",
        user_id: createdMahasiswaUsers.find(
          (user) => user.username === "1234567890"
        ).id,
      },
      {
        nim: "1234567891",
        nama: "Mahasiswa Dua",
        alamat: "Alamat Dua",
        no_telp: "081234567891",
        email: "mahasiswa2@email.com",
        jalur_masuk: "SBMPTN",
        status: "Aktif",
        dosenId: "9876543211",
        user_id: createdMahasiswaUsers.find(
          (user) => user.username === "1234567891"
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
