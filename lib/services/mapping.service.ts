import { prisma } from '../prisma'
import type { TransferMapping, TransferStatus } from '../../generated/prisma'

export async function findMappings(params: {
  query?: string
  fromSchool?: string
  toSchool?: string
  status?: TransferStatus
  skip?: number
  take?: number
}) {
  const { query, fromSchool, toSchool, status, skip, take } = params
  const where: any = {}

  if (fromSchool) {
    where.fromSchool = {
      OR: [
        { name: { contains: fromSchool, mode: 'insensitive' } },
        { code: { contains: fromSchool, mode: 'insensitive' } }
      ]
    }
  }

  if (toSchool) {
    where.toSchool = {
      OR: [
        { name: { contains: toSchool, mode: 'insensitive' } },
        { code: { contains: toSchool, mode: 'insensitive' } }
      ]
    }
  }

  if (status) {
    where.status = status
  }

  if (query) {
    where.OR = [
      { fromCourse: { code: { contains: query, mode: 'insensitive' } } },
      { fromCourse: { name: { contains: query, mode: 'insensitive' } } },
      { toCourse: { code: { contains: query, mode: 'insensitive' } } },
      { toCourse: { name: { contains: query, mode: 'insensitive' } } }
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
      take,
      orderBy: { updatedAt: 'desc' }
    }),
    prisma.transferMapping.count({ where })
  ])

  return { mappings, total }
}

export async function findMappingById(id: string) {
  return prisma.transferMapping.findUnique({
    where: { id },
    include: {
      fromSchool: true,
      toSchool: true,
      fromCourse: true,
      toCourse: true
    }
  })
}

export async function createMapping(data: Pick<TransferMapping, 'fromCourseId' | 'toCourseId' | 'notes'>) {
  // Get the courses to verify schools
  const [fromCourse, toCourse] = await Promise.all([
    prisma.course.findUnique({
      where: { id: data.fromCourseId },
      include: { school: true }
    }),
    prisma.course.findUnique({
      where: { id: data.toCourseId },
      include: { school: true }
    })
  ])

  if (!fromCourse || !toCourse) {
    throw new Error('One or both courses not found')
  }

  // Check if mapping already exists
  const existing = await prisma.transferMapping.findFirst({
    where: {
      fromCourseId: data.fromCourseId,
      toCourseId: data.toCourseId
    }
  })

  if (existing) {
    throw new Error('A mapping between these courses already exists')
  }

  return prisma.transferMapping.create({
    data: {
      ...data,
      fromSchoolId: fromCourse.school.id,
      toSchoolId: toCourse.school.id,
      status: 'PENDING'
    },
    include: {
      fromSchool: true,
      toSchool: true,
      fromCourse: true,
      toCourse: true
    }
  })
}

export async function updateMapping(
  id: string,
  data: Partial<Pick<TransferMapping, 'notes' | 'status'>>
) {
  return prisma.transferMapping.update({
    where: { id },
    data,
    include: {
      fromSchool: true,
      toSchool: true,
      fromCourse: true,
      toCourse: true
    }
  })
}

export async function deleteMapping(id: string) {
  return prisma.transferMapping.delete({
    where: { id }
  })
} 