import { NextRequest } from 'next/server'
import { courseSchema } from '@/lib/validations'
import { successResponse, errorResponse } from '@/lib/api-utils'
import * as courseService from '@/lib/services/course.service'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const query = searchParams.get('query')
    const schoolId = searchParams.get('schoolId')
    
    const courses = await courseService.findCourses(
      query || undefined,
      schoolId || undefined
    )

    return successResponse(courses)
  } catch (error) {
    return errorResponse(error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const validated = courseSchema.parse(data)
    const course = await courseService.createCourse(validated)
    return successResponse(course)
  } catch (error) {
    return errorResponse(error)
  }
} 