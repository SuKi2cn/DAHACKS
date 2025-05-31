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

  // 创建 De Anza College 课程
  const deAnzaMATH001A = await prisma.course.create({
    data: {
      code: 'MATH 001A',
      name: 'CALCULUS',
      credits: 5,
      schoolId: deAnza.id
    }
  });

  const deAnzaMATH001B = await prisma.course.create({
    data: {
      code: 'MATH 001B',
      name: 'CALCULUS',
      credits: 5,
      schoolId: deAnza.id
    }
  });

  const deAnzaMATH001C = await prisma.course.create({
    data: {
      code: 'MATH 001C',
      name: 'CALCULUS',
      credits: 5,
      schoolId: deAnza.id
    }
  });

  const deAnzaMATH010 = await prisma.course.create({
    data: {
      code: 'MATH 010',
      name: 'ELEM STATS/PROBABILITY',
      credits: 5,
      schoolId: deAnza.id
    }
  });

  const deAnzaPHYS004A = await prisma.course.create({
    data: {
      code: 'PHYS 004A',
      name: 'PHYSICS FOR SCIENTISTS AND ENG',
      credits: 5,
      schoolId: deAnza.id
    }
  });

  const deAnzaCHEM001A = await prisma.course.create({
    data: {
      code: 'CHEM 001A',
      name: 'GENERAL CHEMISTRY',
      credits: 5,
      schoolId: deAnza.id
    }
  });

  // 创建 University of Michigan 课程
  const umichMATH116 = await prisma.course.create({
    data: {
      code: 'MATH 116',
      name: 'Calculus II',
      credits: 4,
      schoolId: umich.id
    }
  });

  const umichMATH101X = await prisma.course.create({
    data: {
      code: 'MATH 101X',
      name: 'Departmental',
      credits: 4,
      schoolId: umich.id
    }
  });

  const umichSTATS250 = await prisma.course.create({
    data: {
      code: 'STATS 250',
      name: 'Intr Stat&Data Anlys',
      credits: 4,
      schoolId: umich.id
    }
  });

  const umichPHYS140 = await prisma.course.create({
    data: {
      code: 'PHYSICS 140',
      name: 'General Phys I',
      credits: 4,
      schoolId: umich.id
    }
  });

  const umichPHYS141 = await prisma.course.create({
    data: {
      code: 'PHYSICS 141',
      name: 'Elem Lab I',
      credits: 1,
      schoolId: umich.id
    }
  });

  const umichCHEM125 = await prisma.course.create({
    data: {
      code: 'CHEM 125',
      name: 'Gen Chem Lab I',
      credits: 1,
      schoolId: umich.id
    }
  });

  const umichCHEM126 = await prisma.course.create({
    data: {
      code: 'CHEM 126',
      name: 'Gen Chem Lab II',
      credits: 1,
      schoolId: umich.id
    }
  });

  const umichCHEM130 = await prisma.course.create({
    data: {
      code: 'CHEM 130',
      name: 'G Chem&R Princ',
      credits: 3,
      schoolId: umich.id
    }
  });

  // 创建课程映射
  // MATH 001A + MATH 001B + MATH 001C -> MATH 116 + MATH 101X
  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaMATH001A.id,
      toCourseId: umichMATH116.id,
      status: 'APPROVED'
    }
  });

  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaMATH001B.id,
      toCourseId: umichMATH116.id,
      status: 'APPROVED'
    }
  });

  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaMATH001C.id,
      toCourseId: umichMATH101X.id,
      status: 'APPROVED'
    }
  });

  // MATH 010 -> STATS 250
  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaMATH010.id,
      toCourseId: umichSTATS250.id,
      status: 'APPROVED'
    }
  });

  // PHYS 004A -> PHYSICS 140 + PHYSICS 141
  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaPHYS004A.id,
      toCourseId: umichPHYS140.id,
      status: 'APPROVED'
    }
  });

  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaPHYS004A.id,
      toCourseId: umichPHYS141.id,
      status: 'APPROVED'
    }
  });

  // CHEM 001A -> CHEM 125 + CHEM 126 + CHEM 130
  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaCHEM001A.id,
      toCourseId: umichCHEM125.id,
      status: 'APPROVED'
    }
  });

  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaCHEM001A.id,
      toCourseId: umichCHEM126.id,
      status: 'APPROVED'
    }
  });

  await prisma.transferMapping.create({
    data: {
      fromSchoolId: deAnza.id,
      toSchoolId: umich.id,
      fromCourseId: deAnzaCHEM001A.id,
      toCourseId: umichCHEM130.id,
      status: 'APPROVED'
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