import React, { useState } from 'react';
import { Search, Filter, Github, Globe } from 'lucide-react';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample project data - replace with your actual data
  const projects = [
    {
      id: 1,
      title: "SkillBoost - Learn Enterprise",
      student: "Evans Odhiambo",
      category: "education",
      description: "A learning management platform for enterprise training",
      image: "/api/placeholder/400/300",
      liveUrl: "https://example.com/skillboost",
      githubUrl: "https://github.com/example/skillboost",
      grade: "A"
    },
    // Add more projects here
  ];

  const categories = ['all', 'education', 'e-commerce', 'healthcare', 'technology'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              IYF Academy Season 7
            </h1>
            <p className="mt-4 text-xl text-green-100">
              Showcasing the top 20 programming projects from our talented students
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-0 z-10 bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects or students..."
                className="w-full rounded-lg border pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                className="rounded-lg border px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600">By {project.student}</p>
                <p className="mt-4 text-sm text-gray-700">{project.description}</p>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 hover:text-green-700"
                    >
                      <Globe className="mr-1 h-4 w-4" />
                      <span className="text-sm">Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 hover:text-green-700"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                    {project.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">About IYF Academy</h2>
            <p className="mt-4 text-lg text-gray-600">
              IYF Free Weekend Academy provides hands-on programming education to aspiring developers.
              Our Season 7 cohort has produced exceptional projects showcasing various web technologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;