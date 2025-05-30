import { NextRequest } from 'next/server'
import { schoolSchema } from '@/lib/validations'
import { successResponse, errorResponse } from '@/lib/api-utils'
import * as schoolService from '@/lib/services/school.service'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const school = await schoolService.findSchoolById(params.id)
    
    if (!school) {
      return errorResponse('School not found', 404)
    }

    return successResponse(school)
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
    const validated = schoolSchema.partial().parse(data)
    const school = await schoolService.updateSchool(params.id, validated)
    return successResponse(school)
  } catch (error) {
    return errorResponse(error)
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await schoolService.deleteSchool(params.id)
    return successResponse({ message: 'School deleted successfully' })
  } catch (error) {
    return errorResponse(error)
  }
} 