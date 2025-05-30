import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fromSchool = searchParams.get('fromSchool');
  const toSchool = searchParams.get('toSchool');
  const courseNumber = searchParams.get('courseNumber');

  try {
    let query: any = {
      include: {
        fromSchool: true,
        toSchool: true,
        fromCourse: true,
        toCourse: true,
      },
      where: {},
    };

    if (fromSchool) {
      query.where = {
        ...query.where,
        fromSchool: {
          name: fromSchool,
        },
      };
    }

    if (toSchool) {
      query.where = {
        ...query.where,
        toSchool: {
          name: toSchool,
        },
      };
    }

    if (courseNumber) {
      query.where = {
        ...query.where,
        fromCourse: {
          code: courseNumber,
        },
      };
    }

    console.log('Query:', JSON.stringify(query, null, 2));
    const results = await prisma.transferMapping.findMany(query);
    console.log('Results:', JSON.stringify(results, null, 2));

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error fetching transfer mappings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transfer mappings' },
      { status: 500 }
    );
  }
} 