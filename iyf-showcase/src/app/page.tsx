'use client';

import React from 'react';
import { ExternalLink, ArrowRight, Star, Code, Globe, Github, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  // Featured projects data based on the image provided
  const featuredProjects = [
    {
      id: 1,
      title: "Doctor Finder",
      student: "Gabriel Esma",
      description: "A healthcare platform to find and connect with medical professionals",
      image: "/api/placeholder/400/300",
      category: "Healthcare",
      liveUrl: "https://example.com/doctor-finder",
      githubUrl: "https://github.com/example/doctor-finder",
      grade: "Graded"
    },
    {
      id: 2,
      title: "SkillBoost",
      student: "Evans Odhiambo",
      description: "Learning management system for enterprise training",
      image: "/api/placeholder/400/300",
      category: "Education",
      liveUrl: "https://example.com/skillboost",
      githubUrl: "https://github.com/fai2-web/flip",
      grade: "Graded"
    },
    {
      id: 3,
      title: "Viper Cab",
      student: "Fidel Oluoch",
      description: "Modern transportation and ride-hailing platform",
      image: "/api/placeholder/400/300",
      category: "Transportation",
      liveUrl: "https://example.com/viper-cab",
      githubUrl: "https://github.com/example/viper-cab",
      grade: "Graded"
    }
  ];

  const stats = [
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Technologies Used" },
    { value: "100%", label: "Completion Rate" }
  ];

  const features = [
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Learn industry-standard technologies including React, Next.js, and more."
    },
    {
      icon: Globe,
      title: "Real-World Projects",
      description: "Build and deploy actual applications that solve real problems."
    },
    {
      icon: Star,
      title: "Expert Mentorship",
      description: "Get guidance from experienced developers throughout your journey."
    }
  ];

  return (
     <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-600 min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block mb-4 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/20">
            Season 7 Projects Showcase
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Transforming Ideas Into
            <span className="block mt-2">Real-World Solutions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-green-50">
            Discover outstanding projects created by our talented students during 
            Season 7 of the IYF Free Weekend Academy programming course.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#projects"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-green-600 hover:bg-green-50 transition-colors"
            >
              View Projects
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated */}
      <section className="relative -mt-12 sm:-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-soft text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-green-600">{stat.value}</div>
                <p className="mt-2 text-sm font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Featured Projects Section - Updated with previews */}
<section id="featured-projects" className="py-24 bg-gray-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Featured Projects
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Highlighting some of our outstanding student projects that demonstrate technical excellence.
      </p>
    </div>

    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project) => (
        <div 
          key={project.id} 
          className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          {/* Project Preview with iframe */}
          <div className="aspect-[4/3] w-full relative bg-gray-100">
            <iframe
              src={project.liveUrl}
              className="w-full h-full absolute inset-0 border-none rounded-t-2xl"
              title={`${project.student}'s Project - ${project.title}`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href={project.liveUrl}
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
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                {project.category}
              </span>
              <span className="text-sm text-gray-500">{project.grade}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500">By {project.student}</p>
            <p className="mt-4 text-gray-600 line-clamp-2">{project.description}</p>
            
            {/* Links */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
              >
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Course Overview Section - Updated */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                Why Choose Us
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Programming Education
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                IYF Free Weekend Academy provides hands-on programming education 
                to aspiring developers. Our practical approach ensures students gain 
                real-world experience through project-based learning.
              </p>
              <div className="mt-10 space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
                        <feature.icon className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-auto lg:h-[600px]">
              <Image
                src="/api/placeholder/600/400"
                alt="Programming Course"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;