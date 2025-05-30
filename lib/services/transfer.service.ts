import { prisma } from '@/lib/prisma'

export async function findTransfers(params: {
  fromSchool?: string
  toSchool?: string
  courseNumber?: string
}) {
  const { fromSchool, toSchool } = params

  const where: any = {}

  if (fromSchool) {
    where.fromSchool = {
      name: fromSchool
    }
  }

  if (toSchool) {
    where.toSchool = {
      name: toSchool
    }
  }

  const results = await prisma.transferMapping.findMany({
    include: {
      fromSchool: true,
      toSchool: true,
      fromCourse: true,
      toCourse: true
    },
    where
  })

  return results
} 