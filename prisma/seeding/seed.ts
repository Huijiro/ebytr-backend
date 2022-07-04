import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.status.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'To Do',
    },
  });

  await prisma.status.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Ongoing',
    },
  });

  await prisma.status.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'Done',
    },
  });

  await prisma.task.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: 'Default Task',
      description: 'This is a default task',
      statusId: 1,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
