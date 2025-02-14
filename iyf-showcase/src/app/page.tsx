import React from 'react';
import { ArrowRight, Star, Code, Globe } from 'lucide-react';

const HomePage = () => {
  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Doctor Finder",
      student: "Gabriel Esma",
      description: "An innovative healthcare platform connecting patients with medical professionals.",
      image: "/api/placeholder/400/300",
      category: "Healthcare",
      liveUrl: "https://example.com/doctor-finder"
    },
    {
      id: 2,
      title: "SkillBoost",
      student: "Evans Odhiambo",
      description: "Enterprise learning management system for professional development.",
      image: "/api/placeholder/400/300",
      category: "Education",
      liveUrl: "https://example.com/skillboost"
    },
    {
      id: 3,
      title: "Viper Cab",
      student: "Fidel Oluoch",
      description: "Modern ride-hailing solution with real-time tracking.",
      image: "/api/placeholder/400/300",
      category: "Transportation",
      liveUrl: "https://example.com/viper-cab"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-600 py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/api/placeholder/1920/1080')] opacity-10"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              IYF Academy Season 7
              <span className="block text-green-200">Top Programming Projects</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-green-100">
              Discover outstanding projects created by our talented students during Season 7 
              of the IYF Free Weekend Academy programming course.
            </p>
            <div className="mt-10">
              <a href="#featured-projects" 
                 className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-lg font-medium text-green-600 shadow-md transition-all hover:bg-green-50">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">20+</p>
              <p className="mt-2 text-lg text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">15+</p>
              <p className="mt-2 text-lg text-gray-600">Technologies Used</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">100%</p>
              <p className="mt-2 text-lg text-gray-600">Project Completion Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600">
              Highlighting some of our outstanding student projects
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.id} 
                   className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">By {project.student}</p>
                  <p className="mt-4 text-gray-600">{project.description}</p>
                  <div className="mt-6">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/projects"
              className="inline-flex items-center rounded-lg border-2 border-green-600 px-6 py-3 text-lg font-medium text-green-600 transition-all hover:bg-green-600 hover:text-white"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                About Our Programming Course
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                IYF Free Weekend Academy provides comprehensive programming education 
                to aspiring developers. Our hands-on approach ensures students gain 
                practical experience through real-world projects.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Code className="mr-4 h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Modern Tech Stack</h3>
                    <p className="mt-2 text-gray-600">
                      Learn industry-standard technologies including React, Next.js, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="mr-4 h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Real-World Projects</h3>
                    <p className="mt-2 text-gray-600">
                      Build and deploy actual applications that solve real problems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="mr-4 h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Expert Mentorship</h3>
                    <p className="mt-2 text-gray-600">
                      Get guidance from experienced developers throughout your journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Programming Course"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;