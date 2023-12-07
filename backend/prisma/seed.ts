import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  { name: 'alpha', email: 'alpha@example.com', password: 'password' },
  { name: 'beta', email: 'beta@exaple.com', password: 'password' },
  { name: 'gamma', email: 'gamma@exaple.com', password: 'password' },
  { name: 'delta', email: 'delta@exaple.com', password: 'password' },
  { name: 'epsilon', email: 'epsilon@exaple.com', password: 'password' },
];

async function main() {
  prisma.user.deleteMany({});
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
