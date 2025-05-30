import { z } from 'zod'
import { TransferStatus } from '../generated/prisma'

export const schoolSchema = z.object({
  code: z.string().min(1).max(10),
  name: z.string().min(1).max(100),
})

export const courseSchema = z.object({
  code: z.string().min(1).max(20),
  name: z.string().min(1).max(200),
  credits: z.number().min(0).max(12),
  description: z.string().max(1000).optional(),
  schoolId: z.string().min(1),
})

export const transferMappingSchema = z.object({
  fromCourseId: z.string().min(1),
  toCourseId: z.string().min(1),
  notes: z.string().max(1000).optional(),
  status: z.nativeEnum(TransferStatus).optional(),
})

export const searchParamsSchema = z.object({
  query: z.string().optional(),
  fromSchool: z.string().optional(),
  toSchool: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(50).default(20),
}) 