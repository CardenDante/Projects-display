'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Top performers first (sorted by score)
  const students = [
    "Tyra Nyambura",
    "Isaac Iliwa Omuse",
    "Jacktone Many",
    "Ashley Bura Omolo",
    "Gabriel Lemuya Esma",
    "Kipkirui Shadrack Ngeno",
    "Winfred Mwikali",
    "Brian Omondi Amol",
    "Nicholas Ndung'u Njiiri",
    "Peter Mogunde Mboya",
    "Kendrick Osia",
    "Ryder Anyira Alumasa",
    "Jacob Angel",
    "Maxwel Odhiambo",
    "Mark David Chomba",
    "Ian Mbugua",
    "Antony Makau Mutiso",
    "Amadi Marion",
    "Veronicah Nyakiringa",
    "Tracy Okwaro"
  ];

  const filteredStudents = students.filter(student =>
    student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-green-600 py-20">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-green-700 to-green-600"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Our Students
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-green-100">
              Meet the talented individuals from Season 7
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full rounded-lg border-gray-200 pl-10 pr-4 py-2 focus:border-green-500 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Students List */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {filteredStudents.map((student, index) => (
                <li
                  key={index}
                  className="relative group hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center px-6 py-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-medium">
                          {student.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{student}</p>
                      <p className="text-sm text-gray-500">Season 7 Student</p>
                    </div>
                    <div className="ml-auto">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                          View Profile
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;