import { prisma } from '../prisma'
import { formatCourseCode, formatCredits } from '../utils'
import type { Course } from '../../generated/prisma'

export async function findCourses(query?: string, schoolId?: string) {
  const where: any = {}
  
  if (schoolId) {
    where.schoolId = schoolId
  }
  
  if (query) {
    where.OR = [
      { code: { contains: query, mode: 'insensitive' } },
      { name: { contains: query, mode: 'insensitive' } }
    ]
  }

  return prisma.course.findMany({
    where,
    include: {
      school: true,
      _count: {
        select: {
          fromMappings: true,
          toMappings: true
        }
      }
    },
    orderBy: [
      { school: { name: 'asc' } },
      { code: 'asc' }
    ]
  })
}

export async function findCourseById(id: string) {
  return prisma.course.findUnique({
    where: { id },
    include: {
      school: true,
      fromMappings: {
        include: {
          toSchool: true,
          toCourse: true
        }
      },
      toMappings: {
        include: {
          fromSchool: true,
          fromCourse: true
        }
      },
      _count: {
        select: {
          fromMappings: true,
          toMappings: true
        }
      }
    }
  })
}

export async function createCourse(data: Pick<Course, 'code' | 'name' | 'credits' | 'description' | 'schoolId'>) {
  const formattedCode = formatCourseCode(data.code)
  const formattedCredits = formatCredits(data.credits)
  
  // Check for existing course with same code in the same school
  const existing = await prisma.course.findFirst({
    where: {
      code: formattedCode,
      schoolId: data.schoolId
    }
  })

  if (existing) {
    throw new Error(`Course with code ${formattedCode} already exists in this school`)
  }

  return prisma.course.create({
    data: {
      ...data,
      code: formattedCode,
      credits: formattedCredits
    },
    include: {
      school: true
    }
  })
}

export async function updateCourse(
  id: string,
  data: Partial<Pick<Course, 'code' | 'name' | 'credits' | 'description'>>
) {
  if (data.code) {
    const course = await prisma.course.findUnique({
      where: { id },
      select: { schoolId: true }
    })

    if (!course) {
      throw new Error('Course not found')
    }

    const formattedCode = formatCourseCode(data.code)
    
    // Check for existing course with same code in the same school
    const existing = await prisma.course.findFirst({
      where: {
        code: formattedCode,
        schoolId: course.schoolId,
        NOT: { id }
      }
    })

    if (existing) {
      throw new Error(`Course with code ${formattedCode} already exists in this school`)
    }

    data.code = formattedCode
  }

  if (data.credits !== undefined) {
    data.credits = formatCredits(data.credits)
  }

  return prisma.course.update({
    where: { id },
    data,
    include: {
      school: true
    }
  })
}

export async function deleteCourse(id: string) {
  return prisma.course.delete({
    where: { id }
  })
} 