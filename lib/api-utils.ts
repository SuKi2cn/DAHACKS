import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export type ApiResponse<T = any> = {
  data?: T
  error?: string
  status: number
}

export function successResponse<T>(data: T): NextResponse<ApiResponse<T>> {
  return NextResponse.json({ data, status: 200 })
}

export function errorResponse(error: unknown, status = 500): NextResponse<ApiResponse> {
  if (error instanceof ZodError) {
    return NextResponse.json(
      { error: 'Validation error', details: error.errors, status: 400 },
      { status: 400 }
    )
  }

  console.error('API Error:', error)
  return NextResponse.json(
    { error: error instanceof Error ? error.message : 'Internal server error', status },
    { status }
  )
}

export function buildSchoolSearchQuery(query: string) {
  return {
    OR: [
      { name: { contains: query, mode: 'insensitive' } },
      { code: { contains: query, mode: 'insensitive' } }
    ]
  }
}

export function buildCourseSearchQuery(query: string) {
  return {
    OR: [
      { code: { contains: query, mode: 'insensitive' } },
      { name: { contains: query, mode: 'insensitive' } }
    ]
  }
} 