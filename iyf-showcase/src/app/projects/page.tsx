'use client';

import React, { useState } from 'react';
import { Search, ExternalLink, Github, Code } from 'lucide-react';
import Image from 'next/image';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      student: "Evans Odhiambo",
      url: "https://ashleybura.github.io/Manhan/",
      grade: "Graded",
    },
    {
      id: 2,
      student: "Gabriel Esma",
      url: "https://example.com/doctor-finder",
      grade: "Graded",
    },
    {
      id: 3,
      student: "Fidel Oluoch",
      url: "https://example.com/viper-cab",
      grade: "Graded",
    },
  ];

  const filteredProjects = projects.filter(project =>
    project.student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section - Matching Home Page Style */}
      <section className="relative bg-green-600 min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block mb-4 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/20">
            Season 7 Projects Gallery
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Student Project Showcase
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-green-50">
            Explore our collection of innovative projects created by talented students during Season 7
          </p>
        </div>
      </section>

      {/* Search Section - Elevated Design */}
      <section className="relative -mt-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white shadow-soft p-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                className="w-full rounded-xl border-gray-200 pl-12 pr-4 py-3 focus:border-green-500 focus:ring-green-500 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Enhanced Layout */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Project Preview */}
                <div className="aspect-[4/3] w-full relative bg-gray-100">
                  <iframe
                    src={project.url}
                    className="w-full h-full absolute inset-0 border-none rounded-t-2xl"
                    title={`${project.student}'s Project`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-50 transition-colors shadow-md"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Project
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {project.student}
                    </h2>
                    <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                      {project.grade}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Code className="h-4 w-4" />
                    <span>Season 7 Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State - When no projects match search */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No projects found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search terms to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;