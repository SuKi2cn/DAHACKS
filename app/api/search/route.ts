import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { searchParamsSchema } from '@/lib/validations'
import { buildSchoolSearchQuery, buildCourseSearchQuery, successResponse, errorResponse } from '@/lib/api-utils'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const params = searchParamsSchema.parse({
      query: searchParams.get('query'),
      fromSchool: searchParams.get('from'),
      toSchool: searchParams.get('to'),
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
    })

    const where: any = {}
    const skip = (params.page - 1) * params.limit

    if (params.fromSchool) {
      where.fromSchool = buildSchoolSearchQuery(params.fromSchool)
    }

    if (params.toSchool) {
      where.toSchool = buildSchoolSearchQuery(params.toSchool)
    }

    if (params.query) {
      where.OR = [
        { fromCourse: buildCourseSearchQuery(params.query) },
        { toCourse: buildCourseSearchQuery(params.query) }
      ]
    }

    const [mappings, total] = await Promise.all([
      prisma.transferMapping.findMany({
        where,
        include: {
          fromSchool: true,
          toSchool: true,
          fromCourse: true,
          toCourse: true
        },
        skip,
        take: params.limit,
        orderBy: { updatedAt: 'desc' }
      }),
      prisma.transferMapping.count({ where })
    ])

    return successResponse({
      mappings,
      pagination: {
        total,
        page: params.page,
        limit: params.limit,
        totalPages: Math.ceil(total / params.limit)
      }
    })
  } catch (error) {
    return errorResponse(error)
  }
} 