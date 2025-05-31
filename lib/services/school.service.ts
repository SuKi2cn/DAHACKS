import { prisma } from '../prisma'
import { formatSchoolCode } from '../utils'
import { Prisma, School } from '@prisma/client'

export async function findSchools(query?: string) {
  try {
    const where = query ? {
      OR: [
        { name: { contains: query, mode: 'insensitive' as Prisma.QueryMode } },
        { code: { contains: query, mode: 'insensitive' as Prisma.QueryMode } }
      ]
    } : {}

    return await prisma.school.findMany({
      where,
      select: {
        id: true,
        name: true,
        code: true,
        type: true
      },
      orderBy: { name: 'asc' }
    })
  } catch (error) {
    console.error('Error in findSchools:', error);
    throw error;
  }
}

export async function findSchoolById(id: string) {
  return prisma.school.findUnique({
    where: { id },
    include: {
      courses: {
        orderBy: { code: 'asc' }
      },
      fromMappings: {
        include: {
          fromCourse: true,
          toCourse: true,
          toSchool: true
        }
      },
      toMappings: {
        include: {
          fromCourse: true,
          toCourse: true,
          fromSchool: true
        }
      },
      _count: {
        select: {
          courses: true,
          fromMappings: true,
          toMappings: true
        }
      }
    }
  })
}

export async function createSchool(data: Pick<School, 'name' | 'code'>) {
  const formattedCode = formatSchoolCode(data.code)
  
  // Check for existing school with same code
  const existing = await prisma.school.findUnique({
    where: { code: formattedCode }
  })

  if (existing) {
    throw new Error(`School with code ${formattedCode} already exists`)
  }

  return prisma.school.create({
    data: {
      ...data,
      code: formattedCode
    }
  })
}

export async function updateSchool(id: string, data: Partial<Pick<School, 'name' | 'code'>>) {
  if (data.code) {
    const formattedCode = formatSchoolCode(data.code)
    
    // Check for existing school with same code
    const existing = await prisma.school.findFirst({
      where: {
        code: formattedCode,
        NOT: { id }
      }
    })

    if (existing) {
      throw new Error(`School with code ${formattedCode} already exists`)
    }

    data.code = formattedCode
  }

  return prisma.school.update({
    where: { id },
    data
  })
}

export async function deleteSchool(id: string) {
  return prisma.school.delete({
    where: { id }
  })
} 