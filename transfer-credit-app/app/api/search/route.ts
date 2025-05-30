import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const fromSchool = searchParams.get('from')
    const toSchool = searchParams.get('to')

    // Build where clause
    const where: any = {}

    if (fromSchool) {
      where.fromCourse = {
        school: {
          OR: [
            { name: { contains: fromSchool, mode: 'insensitive' } },
            { code: { contains: fromSchool, mode: 'insensitive' } }
          ]
        }
      }
    }

    if (toSchool) {
      where.toCourse = {
        school: {
          OR: [
            { name: { contains: toSchool, mode: 'insensitive' } },
            { code: { contains: toSchool, mode: 'insensitive' } }
          ]
        }
      }
    }

    if (query) {
      where.OR = [
        { fromCourse: { code: { contains: query, mode: 'insensitive' } } },
        { fromCourse: { name: { contains: query, mode: 'insensitive' } } },
        { toCourse: { code: { contains: query, mode: 'insensitive' } } },
        { toCourse: { name: { contains: query, mode: 'insensitive' } } }
      ]
    }

    const mappings = await prisma.transferMapping.findMany({
      where,
      include: {
        fromCourse: {
          include: {
            school: true
          }
        },
        toCourse: {
          include: {
            school: true
          }
        }
      },
      take: 50
    })

    return NextResponse.json({ mappings })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 