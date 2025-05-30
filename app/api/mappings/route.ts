import { NextRequest } from 'next/server'
import { transferMappingSchema } from '@/lib/validations'
import { successResponse, errorResponse } from '@/lib/api-utils'
import * as mappingService from '@/lib/services/mapping.service'
import { getPaginationParams, buildPaginationResponse } from '@/lib/utils'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const { skip, take, page, limit } = getPaginationParams(
      searchParams.get('page'),
      searchParams.get('limit')
    )

    const { mappings, total } = await mappingService.findMappings({
      query: searchParams.get('query') || undefined,
      fromSchool: searchParams.get('from') || undefined,
      toSchool: searchParams.get('to') || undefined,
      status: searchParams.get('status') as any,
      skip,
      take
    })

    return successResponse({
      mappings,
      pagination: buildPaginationResponse(total, page, limit)
    })
  } catch (error) {
    return errorResponse(error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const validated = transferMappingSchema.parse(data)
    const mapping = await mappingService.createMapping(validated)
    return successResponse(mapping)
  } catch (error) {
    return errorResponse(error)
  }
} 