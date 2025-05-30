'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react'

interface SearchResult {
  id: string
  fromCourse: {
    code: string
    name: string
    credits: number
    school: {
      name: string
      code: string
    }
  }
  toCourse: {
    code: string
    name: string
    credits: number
    school: {
      name: string
      code: string
    }
  }
  status: 'APPROVED' | 'PENDING' | 'REJECTED' | 'CONDITIONAL'
  notes?: string
}

const statusIcons = {
  APPROVED: <CheckCircle className="w-5 h-5 text-green-500" />,
  PENDING: <Clock className="w-5 h-5 text-yellow-500" />,
  REJECTED: <XCircle className="w-5 h-5 text-red-500" />,
  CONDITIONAL: <AlertCircle className="w-5 h-5 text-orange-500" />
}

const statusText = {
  APPROVED: '已批准',
  PENDING: '待审核',
  REJECTED: '不接受',
  CONDITIONAL: '有条件接受'
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')
  const fromSchool = searchParams.get('from')
  const toSchool = searchParams.get('to')
  
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setResults([
        {
          id: '1',
          fromCourse: {
            code: 'CS 101',
            name: 'Introduction to Computer Science',
            credits: 4,
            school: {
              name: 'New York University',
              code: 'NYU'
            }
          },
          toCourse: {
            code: 'EECS 183',
            name: 'Elementary Programming Concepts',
            credits: 4,
            school: {
              name: 'University of Michigan',
              code: 'UMICH'
            }
          },
          status: 'APPROVED',
          notes: '直接转换，无需额外材料'
        },
        {
          id: '2',
          fromCourse: {
            code: 'MATH 121',
            name: 'Calculus I',
            credits: 4,
            school: {
              name: 'New York University',
              code: 'NYU'
            }
          },
          toCourse: {
            code: 'MATH 115',
            name: 'Calculus I',
            credits: 4,
            school: {
              name: 'University of Michigan',
              code: 'UMICH'
            }
          },
          status: 'APPROVED'
        }
      ])
      setLoading(false)
    }, 1000)
  }, [query, fromSchool, toSchool])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-indigo-600 hover:text-indigo-800">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-lg font-semibold">返回首页</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/cases/new" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                上传案例
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Summary */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">搜索结果</h1>
          <p className="text-gray-600">
            {fromSchool && toSchool && `从 ${fromSchool} 到 ${toSchool}`}
            {query && ` - 关键词: "${query}"`}
          </p>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">正在搜索...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-4">
            {results.map((result) => (
              <div key={result.id} className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* From Course */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">原课程</h3>
                    <div className="bg-gray-50 rounded p-4">
                      <p className="font-semibold text-lg">{result.fromCourse.code}</p>
                      <p className="text-gray-700">{result.fromCourse.name}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {result.fromCourse.school.name} • {result.fromCourse.credits} 学分
                      </p>
                    </div>
                  </div>

                  {/* To Course */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">目标课程</h3>
                    <div className="bg-gray-50 rounded p-4">
                      <p className="font-semibold text-lg">{result.toCourse.code}</p>
                      <p className="text-gray-700">{result.toCourse.name}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {result.toCourse.school.name} • {result.toCourse.credits} 学分
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status and Notes */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    {statusIcons[result.status]}
                    <span className="ml-2 font-medium">{statusText[result.status]}</span>
                  </div>
                  {result.notes && (
                    <p className="text-sm text-gray-600">{result.notes}</p>
                  )}
                </div>

                {/* Action */}
                <div className="mt-4 flex justify-end">
                  <Link
                    href={`/mapping/${result.id}`}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    查看详情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600 mb-4">未找到相关转学分信息</p>
            <Link
              href="/cases/new"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
            >
              上传新案例
            </Link>
          </div>
        )}
      </div>
    </main>
  )
} 