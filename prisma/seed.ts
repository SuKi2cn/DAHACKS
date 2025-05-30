const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Create De Anza College
    const deAnza = await prisma.school.create({
      data: {
        code: 'DEANZA',
        name: 'De Anza College',
      },
    });

    console.log('Created De Anza College:', deAnza);

    // Create University of Michigan
    const umich = await prisma.school.create({
      data: {
        code: 'UMICH',
        name: 'University of Michigan',
      },
    });

    console.log('Created University of Michigan:', umich);

    // Create De Anza's MATH 22 course
    const deAnzaMath22 = await prisma.course.create({
      data: {
        code: 'MATH 22',
        name: 'Discrete Mathematics',
        credits: 5,
        description: 'Elements of discrete mathematics with applications to computer science. Topics include methods of proof, mathematical induction, logic, sets, relations, graphs, combinatorics, and Boolean algebra.',
        schoolId: deAnza.id,
      },
    });

    console.log('Created De Anza MATH 22:', deAnzaMath22);

    // Create UMich's EECS 203 course
    const umichEECS203 = await prisma.course.create({
      data: {
        code: 'EECS 203',
        name: 'Discrete Mathematics',
        credits: 4,
        description: 'Introduction to the mathematical foundations of computer science. Topics covered include: propositional and predicate logic, set theory, function and relations, growth of functions and asymptotic notation, introduction to algorithms, elementary combinatorics, and graph theory.',
        schoolId: umich.id,
      },
    });

    console.log('Created UMich EECS 203:', umichEECS203);

    // Create transfer mapping
    const mapping = await prisma.transferMapping.create({
      data: {
        fromSchoolId: deAnza.id,
        toSchoolId: umich.id,
        fromCourseId: deAnzaMath22.id,
        toCourseId: umichEECS203.id,
        status: 'APPROVED',
        notes: 'Direct equivalent transfer. Both courses cover similar discrete mathematics topics essential for computer science.',
      },
    });

    console.log('Created transfer mapping:', mapping);
    console.log('Seed data has been successfully added.');
  } catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 