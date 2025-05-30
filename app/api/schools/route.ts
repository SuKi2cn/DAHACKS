import { NextRequest } from 'next/server'
import { schoolSchema } from '@/lib/validations'
import { successResponse, errorResponse } from '@/lib/api-utils'
import * as schoolService from '@/lib/services/school.service'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const query = searchParams.get('query')
    const schools = await schoolService.findSchools(query || undefined)
    return successResponse(schools)
  } catch (error) {
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