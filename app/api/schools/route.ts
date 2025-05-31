import { NextRequest, NextResponse } from 'next/server'
import { schoolSchema } from '@/lib/validations'
import { successResponse, errorResponse } from '@/lib/api-utils'
import * as schoolService from '@/lib/services/school.service'
import { SchoolType } from '@prisma/client'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    console.log('Fetching schools...');
    const schools = await prisma.school.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    
    console.log('Found schools:', schools);
    
    // 将学校列表分为社区大学和目标大学
    const communityColleges = schools.filter(school => school.type === 'COMMUNITY_COLLEGE');
    const universities = schools.filter(school => school.type === 'UNIVERSITY');
    
    console.log('Community colleges:', communityColleges);
    console.log('Universities:', universities);
    
    return NextResponse.json({
      data: {
        communityColleges,
        universities
      }
    });
  } catch (error) {
    console.error('Error in GET /api/schools:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schools' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const validated = schoolSchema.parse(data)
    const school = await schoolService.createSchool(validated)
    return NextResponse.json({ data: school });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create school' }, { status: 500 });
  }
}

export async function getCommunityColleges() {
  try {
    const communityColleges = await prisma.school.findMany({
      where: {
        type: 'COMMUNITY_COLLEGE'
      },
      select: {
        id: true,
        name: true,
        code: true
      },
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json({
      communityColleges
    });
  } catch (error: any) {
    console.error('Failed to fetch schools:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schools' },
      { status: 500 }
    );
  }
} 