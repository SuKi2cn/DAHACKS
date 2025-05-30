import { NextRequest } from 'next/server'
import { schoolSchema } from '@/lib/validations'
import { successResponse, errorResponse } from '@/lib/api-utils'
import * as schoolService from '@/lib/services/school.service'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const query = searchParams.get('query')
    const schools = await schoolService.findSchools(query || undefined)
    console.log('Found schools:', schools);
    
    // 将学校列表分为社区大学和目标大学
    const communityColleges = schools.filter(school => school.code === 'DEANZA');
    const universities = schools.filter(school => school.code === 'UMICH');
    
    console.log('Filtered schools:', { communityColleges, universities });
    
    const response = { communityColleges, universities };
    console.log('Sending response:', response);
    
    return successResponse(response);
  } catch (error) {
    console.error('Error in GET /api/schools:', error);
    return errorResponse(error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const validated = schoolSchema.parse(data)
    const school = await schoolService.createSchool(validated)
    return successResponse(school)
  } catch (error) {
    return errorResponse(error)
  }
} 