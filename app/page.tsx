"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface TransferResult {
  id: string;
  fromSchool: { name: string };
  toSchool: { name: string };
  fromCourse: {
    code: string;
    name: string;
    credits: number;
    description: string;
  };
  toCourse: {
    code: string;
    name: string;
    credits: number;
    description: string;
  };
  status: string;
  notes: string;
}

export default function HomePage() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isContributionFormOpen, setIsContributionFormOpen] = useState(false);
  const [sourceSchool, setSourceSchool] = useState('');
  const [targetSchool, setTargetSchool] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<TransferResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [communityColleges, setCommunityColleges] = useState<{ id: string; name: string }[]>([]);
  const [universities, setUniversities] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        console.log('Fetching schools...');
        const response = await fetch('/api/schools');
        const result = await response.json();
        console.log('Received data:', result);
        if (response.ok && result.data) {
          console.log('Setting schools:', result.data.communityColleges, result.data.universities);
          setCommunityColleges(result.data.communityColleges || []);
          setUniversities(result.data.universities || []);
        } else {
          console.error('Error fetching schools:', result.error);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };
    fetchSchools();
  }, []);

  // 处理搜索
  const handleSearch = async () => {
    if (!sourceSchool) {
      alert('Please select a community college');
      return;
    }
    if (!targetSchool) {
      alert('Please select a target university');
      return;
    }

    setIsLoading(true);
    setShowSearchResults(true);

    try {
      const params = new URLSearchParams({
        fromSchool: sourceSchool,
        toSchool: targetSchool,
        ...(courseNumber && { courseNumber }),
      });

      const response = await fetch(`/api/transfer?${params}`);
      const data = await response.json();

      if (response.ok) {
        setSearchResults(data.results);
      } else {
        console.error('Error fetching results:', data.error);
        alert('Failed to fetch transfer results. Please try again.');
      }
    } catch (error) {
      console.error('Error during search:', error);
      alert('An error occurred while searching. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
            <Link href="/auth/login" className="text-gray-700 hover:text-gray-900">
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign up
            </Link>
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
                <select
                  id="source-school"
                  value={sourceSchool}
                  onChange={(e) => setSourceSchool(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a community college</option>
                  {communityColleges.map((college) => (
                    <option key={college.id} value={college.name}>{college.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Target School Search Input */}
            <div className="w-full">
              <label htmlFor="target-school" className="block text-sm font-medium text-gray-700 mb-1">
                Step 2: Select Target University
              </label>
              <div className="relative">
                <select
                  id="target-school"
                  value={targetSchool}
                  onChange={(e) => setTargetSchool(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a target university</option>
                  {universities.map((uni) => (
                    <option key={uni.id} value={uni.name}>{uni.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Course Number Input (Optional) */}
            <div className="w-full">
              <label htmlFor="course-number" className="block text-sm font-medium text-gray-700 mb-1">
                Step 3: Enter Course Number (Optional)
              </label>
              <input
                id="course-number"
                type="text"
                value={courseNumber}
                onChange={(e) => setCourseNumber(e.target.value)}
                placeholder="Enter course number (e.g. MATH 22)"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Search Button */}
            <div className="w-full">
              <button 
                onClick={handleSearch}
                disabled={!sourceSchool || !targetSchool || isLoading}
                className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        </section>

        {/* Search Results */}
        {showSearchResults && (
          <div className="mt-8 space-y-8">
            {/* Transfer Results */}
            <section className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-blue-50">
                <h2 className="text-lg font-semibold text-gray-800">Transfer Results</h2>
                <p className="text-sm text-gray-600">Available transfer options</p>
              </div>
              <div className="divide-y divide-gray-200">
                {isLoading ? (
                  <div className="p-6 text-center text-gray-500">
                    Loading results...
                  </div>
                ) : searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <div key={result.id} className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-medium text-gray-900">
                              {result.fromCourse.code}
                            </span>
                            <span className="text-gray-500">→</span>
                            <span className="text-lg font-medium text-gray-900">
                              {result.toCourse.code}
                            </span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              result.status === 'APPROVED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {result.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700">Source Course</h4>
                              <p className="text-sm text-gray-900">{result.fromCourse.name}</p>
                              <p className="text-sm text-gray-600">{result.fromSchool.name}</p>
                              <p className="text-sm text-gray-600">{result.fromCourse.credits} credits</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700">Target Course</h4>
                              <p className="text-sm text-gray-900">{result.toCourse.name}</p>
                              <p className="text-sm text-gray-600">{result.toSchool.name}</p>
                              <p className="text-sm text-gray-600">{result.toCourse.credits} credits</p>
                            </div>
                          </div>
                          {result.notes && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-700">Notes</h4>
                              <p className="text-sm text-gray-600">{result.notes}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    No transfer options found for the selected criteria.
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
