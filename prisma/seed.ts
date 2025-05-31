import { PrismaClient, SchoolType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 清理现有数据
  await prisma.transferMapping.deleteMany();
  await prisma.course.deleteMany();
  await prisma.school.deleteMany();
  await prisma.user.deleteMany();

  // 创建社区大学
  const deAnza = await prisma.school.create({
    data: {
      name: 'De Anza College',
      code: 'DAC',
      type: SchoolType.COMMUNITY_COLLEGE
    }
  });

  const foothill = await prisma.school.create({
    data: {
      name: 'Foothill College',
      code: 'FHC',
      type: SchoolType.COMMUNITY_COLLEGE
    }
  });

  // 创建大学
  const umich = await prisma.school.create({
    data: {
      name: 'University of Michigan',
      code: 'UMICH',
      type: SchoolType.UNIVERSITY
    }
  });

  // 创建课程
  const deAnzaCIS22C = await prisma.course.create({
    data: {
      code: 'CIS 22C',
      name: 'Data Abstraction & Struct',
      credits: 4.5,
      schoolId: deAnza.id
    }
  });

  const umichEECS183 = await prisma.course.create({
    data: {
      code: 'EECS 183',
      name: 'Elem Prog Concepts',
      credits: 4,
      schoolId: umich.id
    }
  });

  // 创建课程映射
  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaCIS22C.id,
      toCourseId: umichEECS183.id,
      status: 'APPROVED',
      notes: 'Both courses cover fundamental programming concepts and data structures.'
    }
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 