'use client'

import { useState } from 'react'
import { Search, Upload, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [fromSchool, setFromSchool] = useState('')
  const [toSchool, setToSchool] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to search results with query params
    window.location.href = `/search?query=${searchQuery}&from=${fromSchool}&to=${toSchool}`
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">TransferHub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-indigo-600">
                登录
              </Link>
              <Link href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                注册
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            转学分查询平台
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            快速查询课程转学分情况，分享转学经验
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                原学校
              </label>
              <input
                type="text"
                value={fromSchool}
                onChange={(e) => setFromSchool(e.target.value)}
                placeholder="如：NYU"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                目标学校
              </label>
              <input
                type="text"
                value={toSchool}
                onChange={(e) => setToSchool(e.target.value)}
                placeholder="如：University of Michigan"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                课程代码/名称
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="如：CS 101"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 flex items-center justify-center"
          >
            <Search className="w-5 h-5 mr-2" />
            搜索转学分信息
          </button>
        </form>

        {/* Quick Links */}
        <div className="mt-8 text-center">
          <Link href="/browse" className="text-indigo-600 hover:text-indigo-800">
            浏览所有学校 →
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">课程数据库</h3>
              <p className="text-gray-600">
                覆盖主要大学的转学分信息，持续更新
              </p>
            </div>
            <div className="text-center">
              <Upload className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">上传案例</h3>
              <p className="text-gray-600">
                分享你的转学分经验，帮助其他同学
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">社区讨论</h3>
              <p className="text-gray-600">
                在案例下讨论，获取更多信息
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
