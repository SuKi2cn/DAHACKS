import { NextRequest } from 'next/server'
import { transferMappingSchema } from '@/lib/validations'
import { successResponse, errorResponse } from '@/lib/api-utils'
import * as mappingService from '@/lib/services/mapping.service'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const mapping = await mappingService.findMappingById(params.id)

    if (!mapping) {
      return errorResponse('Transfer mapping not found', 404)
    }

    return successResponse(mapping)
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
    const validated = transferMappingSchema.partial().parse(data)
    const mapping = await mappingService.updateMapping(params.id, validated)
    return successResponse(mapping)
  } catch (error) {
    return errorResponse(error)
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await mappingService.deleteMapping(params.id)
    return successResponse({ message: 'Transfer mapping deleted successfully' })
  } catch (error) {
    return errorResponse(error)
  }
} 