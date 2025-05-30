"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isContributionFormOpen, setIsContributionFormOpen] = useState(false);
  const [sourceSchool, setSourceSchool] = useState('');
  const [targetSchool, setTargetSchool] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  // 社区大学列表
  const communityColleges = [
    { id: 'deanza', name: 'De Anza College' },
    { id: 'foothill', name: 'Foothill College' },
    { id: 'mission', name: 'Mission College' },
    { id: 'ohlone', name: 'Ohlone College' },
    { id: 'laney', name: 'Laney College' },
    { id: 'berkeley_city', name: 'Berkeley City College' },
    { id: 'ccsf', name: 'City College of San Francisco' },
    { id: 'skyline', name: 'Skyline College' },
    { id: 'canada', name: 'Cañada College' },
    { id: 'smcc', name: 'Santa Monica College' },
  ];

  // 目标大学列表
  const universities = [
    { id: 'ucla', name: 'University of California, Los Angeles (UCLA)' },
    { id: 'ucb', name: 'University of California, Berkeley (UCB)' },
    { id: 'ucsd', name: 'University of California, San Diego (UCSD)' },
    { id: 'uci', name: 'University of California, Irvine (UCI)' },
    { id: 'ucd', name: 'University of California, Davis (UCD)' },
    { id: 'umich', name: 'University of Michigan (UMich)' },
    { id: 'nyu', name: 'New York University (NYU)' },
    { id: 'columbia', name: 'Columbia University' },
    { id: 'stanford', name: 'Stanford University' },
    { id: 'mit', name: 'Massachusetts Institute of Technology (MIT)' },
  ];

  // 模拟的学习记录数据
  const myCoursesData = [
    {
      id: 1,
      courseNumber: 'ENGL001A',
      courseName: 'English Composition I',
      college: 'De Anza College',
      credits: 4,
      term: 'Fall 2023',
      grade: 'A'
    },
    {
      id: 2,
      courseNumber: 'MATH001A',
      courseName: 'Calculus I',
      college: 'De Anza College',
      credits: 5,
      term: 'Fall 2023',
      grade: 'B+'
    }
  ];

  // 模拟的官方转学结果数据
  const officialResults = [
    {
      id: 1,
      sourceCourse: {
        number: 'ENGL001A',
        name: 'English Composition I',
        college: 'De Anza College',
        credits: 4,
      },
      targetCourse: {
        number: 'WRITING 1',
        name: 'Writing I',
        university: 'UCLA',
        credits: 4,
      },
      status: 'Approved',
      lastUpdated: '2024-01-15',
      details: 'Direct equivalent, fulfills Writing I requirement'
    }
  ];

  // 模拟的社区讨论数据
  const communityResults = [
    {
      id: 1,
      courseNumber: 'ENGL001A',
      fromCollege: 'De Anza College',
      toUniversity: 'UCLA',
      lastUpdate: '2024-02-20',
      replies: 12,
      status: 'Approved',
      latestComment: 'Successfully transferred as Writing 1'
    },
    {
      id: 2,
      courseNumber: 'ENGL001A',
      fromCollege: 'De Anza College',
      toUniversity: 'UCLA',
      lastUpdate: '2023-12-15',
      replies: 5,
      status: 'Approved',
      latestComment: 'Transferred in Fall 2023, process was smooth'
    }
  ];

  // 处理搜索
  const handleSearch = () => {
    if (!sourceSchool) {
      alert('Please select a community college');
      return;
    }
    if (!courseNumber) {
      alert('Please enter a course number');
      return;
    }
    if (!targetSchool) {
      alert('Please select a target university');
      return;
    }
    // 显示搜索结果
    setShowSearchResults(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <span className="font-bold text-xl text-blue-600">TransferHub</span>
            </Link>
          </div>
          {/* Main Menu */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link href="/" className="text-blue-600">Home</Link>
            <Link href="/help">Help Center</Link>
          </nav>
          {/* User Area */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100">
              <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">U</span>
              <span className="hidden md:inline">Username</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {/* Search Panel */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col gap-4">
            {/* Source School Search Input */}
            <div className="w-full">
              <label htmlFor="source-school" className="block text-sm font-medium text-gray-700 mb-1">Step 1: Select Community College</label>
              <div className="relative">
                <input
                  id="source-school"
                  list="community-colleges"
                  type="text"
                  value={sourceSchool}
                  onChange={(e) => setSourceSchool(e.target.value)}
                  placeholder="Search community college..."
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <datalist id="community-colleges">
                  {communityColleges.map((college) => (
                    <option key={college.id} value={college.name} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Course Number Input */}
            <div className="w-full">
              <label htmlFor="course-number" className="block text-sm font-medium text-gray-700 mb-1">
                Step 2: Enter Course Number
                {!sourceSchool && <span className="text-gray-400 ml-2">(Select college first)</span>}
              </label>
              <input
                id="course-number"
                type="text"
                value={courseNumber}
                onChange={(e) => setCourseNumber(e.target.value)}
                placeholder={sourceSchool ? "Enter course number (e.g. ENGL001A)" : "Select a college first..."}
                disabled={!sourceSchool}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Target School Search Input */}
            <div className="w-full">
              <label htmlFor="target-school" className="block text-sm font-medium text-gray-700 mb-1">
                Step 3: Select Target University
                {!courseNumber && <span className="text-gray-400 ml-2">(Enter course number first)</span>}
              </label>
              <div className="relative">
                <input
                  id="target-school"
                  list="universities"
                  type="text"
                  value={targetSchool}
                  onChange={(e) => setTargetSchool(e.target.value)}
                  placeholder={courseNumber ? "Search university..." : "Enter course number first..."}
                  disabled={!courseNumber}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <datalist id="universities">
                  {universities.map((uni) => (
                    <option key={uni.id} value={uni.name} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full">
              <button 
                onClick={handleSearch}
                disabled={!sourceSchool || !courseNumber || !targetSchool}
                className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Search Results */}
        {showSearchResults && (
          <div className="mt-8 space-y-8">
            {/* Official Results */}
            <section className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-blue-50">
                <h2 className="text-lg font-semibold text-gray-800">Official Transfer Results</h2>
                <p className="text-sm text-gray-600">Verified by university admissions offices</p>
              </div>
              <div className="divide-y divide-gray-200">
                {officialResults.map(result => (
                  <div key={result.id} className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-medium text-gray-900">
                            {result.sourceCourse.number}
                          </span>
                          <span className="text-gray-500">→</span>
                          <span className="text-lg font-medium text-gray-900">
                            {result.targetCourse.number}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Official
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Source Course</h4>
                            <p className="text-sm text-gray-900">{result.sourceCourse.name}</p>
                            <p className="text-sm text-gray-600">{result.sourceCourse.college}</p>
                            <p className="text-sm text-gray-600">{result.sourceCourse.credits} credits</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Target Course</h4>
                            <p className="text-sm text-gray-900">{result.targetCourse.name}</p>
                            <p className="text-sm text-gray-600">{result.targetCourse.university}</p>
                            <p className="text-sm text-gray-600">{result.targetCourse.credits} credits</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Transfer Details</h4>
                          <p className="text-sm text-gray-600">{result.details}</p>
                          <p className="text-xs text-gray-500 mt-1">Last updated: {result.lastUpdated}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Community Discussions */}
            <section className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Community Discussions</h2>
                    <p className="text-sm text-gray-600">Recent transfer experiences shared by students</p>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Share Your Experience
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {communityResults.map(discussion => (
                  <div key={discussion.id} className="p-6 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {discussion.courseNumber} ({discussion.fromCollege} → {discussion.toUniversity})
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{discussion.latestComment}</p>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        discussion.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {discussion.status}
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500 flex items-center gap-4">
                      <span>Last updated: {discussion.lastUpdate}</span>
                      <span>{discussion.replies} replies</span>
                      <button className="text-blue-600 hover:text-blue-800">Join Discussion →</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Content Tabs */}
        <div className="flex space-x-4 mb-6">
          <button 
            className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white"
          >
            My Courses
          </button>
          <button 
            className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => window.location.href = '/discussions'}
          >
            Transfer Discussions
          </button>
        </div>

        {/* My Courses Section */}
        <section className="bg-white rounded-lg shadow mb-8 overflow-x-auto">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">My Course Records</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              + Add Course
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Info</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Term</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {myCoursesData.map(course => (
                <tr key={course.id}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{course.courseNumber}</div>
                      <div className="text-sm text-gray-500">{course.courseName}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{course.college}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{course.term}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{course.credits}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{course.grade}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View Transfer</button>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Recent Discussions Preview */}
        <section className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Recent Transfer Discussions</h2>
            <Link href="/discussions" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All →
            </Link>
          </div>
          <div className="divide-y divide-gray-200">
            {communityResults.map(discussion => (
              <div key={discussion.id} className="p-6 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {discussion.courseNumber} ({discussion.fromCollege} → {discussion.toUniversity})
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{discussion.latestComment}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    discussion.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {discussion.status}
                  </span>
                </div>
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-4">
                  <span>Last updated: {discussion.lastUpdate}</span>
                  <span>{discussion.replies} replies</span>
                  <button className="text-blue-600 hover:text-blue-800">Join Discussion →</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <Link href="/about" className="text-gray-500 hover:text-gray-900">About</Link>
            <Link href="/help" className="text-gray-500 hover:text-gray-900">Help</Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TransferHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
