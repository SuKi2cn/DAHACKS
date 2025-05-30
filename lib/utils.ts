import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCourseCode(code: string) {
  return code.toUpperCase().trim()
}

export function formatCredits(credits: number) {
  return Number(credits.toFixed(1))
}

export function generateSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function formatSchoolCode(code: string) {
  return code.toUpperCase().trim()
}

export const DEFAULT_PAGE_SIZE = 20

export function getPaginationParams(page?: string | null, limit?: string | null) {
  const parsedPage = Math.max(1, Number(page) || 1)
  const parsedLimit = Math.min(50, Math.max(1, Number(limit) || DEFAULT_PAGE_SIZE))
  const skip = (parsedPage - 1) * parsedLimit

  return {
    skip,
    take: parsedLimit,
    page: parsedPage,
    limit: parsedLimit
  }
}

export function buildPaginationResponse(total: number, page: number, limit: number) {
  return {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    hasNextPage: page * limit < total,
    hasPreviousPage: page > 1
  }
} 