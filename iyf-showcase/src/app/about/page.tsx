'use client';

import React from 'react';
import Image from 'next/image';
import {  Clock } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { value: "7", label: "Successful Seasons" },
    { value: "500+", label: "Graduates" },
    { value: "100+", label: "Projects Completed" },
    { value: "24", label: "Weeks Per Season" }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools",
      technologies: ["Git", "GitHub", "VS Code", "Linux", "Command Line"]
    }
  ];

  const courseOutline = [
    {
      title: "Weeks 1-2",
      content: "Introduction to Web Development and Linux",
      topics: ["Web Development Basics", "Linux Commands", "HTML & CSS Fundamentals"]
    },
    {
      title: "Weeks 3-4",
      content: "Advanced HTML, CSS, and JavaScript",
      topics: ["Semantic HTML", "CSS Layout", "JavaScript Basics"]
    },
    {
      title: "Weeks 5-6",
      content: "JavaScript and Front-End Frameworks",
      topics: ["Advanced JavaScript", "React Fundamentals", "State Management"]
    },
    {
      title: "Weeks 7-8",
      content: "Node.js and Backend Development",
      topics: ["Node.js Basics", "Express.js", "MongoDB Integration"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Consistent with Homepage */}
      <section className="relative bg-green-600 py-20">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-green-700 to-green-600"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Empowering Future Developers
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-green-100">
              Since our first season, IYF Academy has been committed to providing 
              comprehensive programming education through our weekend sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <p className="text-4xl font-bold text-green-600">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
              <p className="mt-4 text-lg text-gray-600">
                Starting from Season 1, we've grown into a comprehensive tech education platform. 
                Each season brings new technologies, improved curriculum, and more success stories. 
                Now in Season 7, we continue to evolve and adapt to the latest industry trends.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/pc.jpg"
                  alt="IYF Academy Journey"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Tech Stack</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Course Outline</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {courseOutline.map((week, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-600 mb-2">{week.title}</h3>
                <p className="text-gray-900 font-medium mb-4">{week.content}</p>
                <ul className="space-y-2">
                  {week.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-xl text-green-100">
            Join our upcoming Season 7 and transform your programming skills.
          </p>
          <div className="mt-8">
            <a
              href="https://freeacademy.iyfkenya.org/register"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;