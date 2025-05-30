import { NextRequest } from 'next/server'
import { courseSchema } from '@/lib/validations'
import { successResponse, errorResponse } from '@/lib/api-utils'
import * as courseService from '@/lib/services/course.service'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const course = await courseService.findCourseById(params.id)

    if (!course) {
      return errorResponse('Course not found', 404)
    }

    return successResponse(course)
  } catch (error) {
    return errorResponse(error)
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json()
    const validated = courseSchema.partial().parse(data)
    const course = await courseService.updateCourse(params.id, validated)
    return successResponse(course)
  } catch (error) {
    return errorResponse(error)
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await courseService.deleteCourse(params.id)
    return successResponse({ message: 'Course deleted successfully' })
  } catch (error) {
    return errorResponse(error)
  }
} 