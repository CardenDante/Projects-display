'use client';

import React, { useMemo, useState } from 'react';
import { Search, ExternalLink, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;


  const projects = [
    {
      id: 1,
      student: "Tyra Nyambura",
      url: "https://brakes21.github.io/ProTints/?authuser=0",
      grade: "Graded"
    },
    {
      id: 2,
      student: "Ashley Bura Omolo",
      url: "https://ashleybura.github.io/Manhan/?authuser=0",
      grade: "Graded"
    },
    {
      id: 3,
      student: "Isaac Iliwa Omuse",
      url: "https://isaaciliwa5.github.io/Landing-page-PROJECT/?authuser=0",
      grade: "Graded"
    },
    {
      id: 4,
      student: "Jacktone Many",
      url: "https://jacktonemony.github.io/furniture-shop/?authuser=0",
      grade: "Graded"
    },
    {
      id: 5,
      student: "Gabriel Lemuya Esma",
      url: "https://gabriel1abc.github.io/final-project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 6,
      student: "Kipkirui Shadrack Ngeno",
      url: "https://kipshazngeno.github.io/Towett-Rising-Hotel/?authuser=0",
      grade: "Graded"
    },
    {
      id: 7,
      student: "Maxwel Odhiambo",
      url: "https://maxintoke.github.io/Coffee_time/?authuser=0",
      grade: "Graded"
    },
    {
      id: 8,
      student: "Winfred Mwikali",
      url: "https://winnieym.github.io/winfredMwikali/?authuser=0",
      grade: "Graded"
    },
    {
      id: 9,
      student: "Brian Omondi Amol",
      url: "https://brianamol.github.io/Brian-s-Apartments/?authuser=0",
      grade: "Graded"
    },
    {
      id: 10,
      student: "Nicholas Ndung'u Njiiri",
      url: "https://nicknjiiri.github.io/Nicholas-Njiiri-Final-Project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 11,
      student: "Peter Mogunde Mboya",
      url: "https://mboya123.github.io/Urban-Oasis-Hotel/?authuser=0",
      grade: "Graded"
    },
    {
      id: 12,
      student: "Kendrick Osia",
      url: "https://manken-exp.github.io/MK/?authuser=0",
      grade: "Graded"
    },
    {
      id: 13,
      student: "Ryder Anyira Alumasa",
      url: "https://ry-hub-it.github.io/?authuser=0",
      grade: "Graded"
    },
    {
      id: 14,
      student: "Jacob Angel",
      url: "https://e1675ka.github.io/JacobAssignment/?authuser=0",
      grade: "Graded"
    },
    {
      id: 15,
      student: "Mark David Chomba",
      url: "https://mdcartel.github.io/medspage/?authuser=0",
      grade: "Graded"
    },
    {
      id: 16,
      student: "Ian Mbugua",
      url: "https://ianmbugua123.github.io/IYF-Project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 17,
      student: "Antony Makau Mutiso",
      url: "https://tonysilver153.github.io/KETAS-website/?authuser=0",
      grade: "Graded"
    },
    {
      id: 18,
      student: "Amadi Marion",
      url: "https://mariona1.github.io/coffeepage/?authuser=0",
      grade: "Graded"
    },
    {
      id: 19,
      student: "Veronicah Nyakiringa",
      url: "https://vetchwan54.github.io/verofinal/?authuser=0",
      grade: "Graded"
    },
    {
      id: 20,
      student: "Tracy Okwaro",
      url: "https://treycee.github.io/Book-haven/?authuser=0",
      grade: "Graded"
    },
    {
      id: 21,
      student: "Arnold Mramba Daniel",
      url: "https://dantechronicles.github.io/Project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 22,
      student: "Stephen Kagiri",
      url: "https://colliechalice.github.io/dj-chalice/?authuser=0",
      grade: "Graded"
    },
    {
      id: 23,
      student: "Aurelia Adhiambo Otieno",
      url: "https://aureliaotty.github.io/Auto_Apex-Company/?authuser=0",
      grade: "Graded"
    },
    {
      id: 24,
      student: "Daniel Bruce Otieno",
      url: "https://dantechronicles.github.io/Project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 25,
      student: "Felix Kagecha Kimani",
      url: "https://felodev98.github.io/uwezo-clinic/?authuser=0",
      grade: "Graded"
    },
    {
      id: 26,
      student: "Meshack Obure Mandere",
      url: "https://obure-meshack.github.io/Mesh.github.io/?authuser=0",
      grade: "Graded"
    },
    {
      id: 27,
      student: "Naida Miloyo Kasiva Malemba",
      url: "https://naida-creator.github.io/?authuser=0",
      grade: "Graded"
    },
    {
      id: 28,
      student: "Jackson Wachira",
      url: "https://med-connect-project1.vercel.app/?authuser=0",
      grade: "Graded"
    },
    {
      id: 29,
      student: "Kipngetich Onesmus",
      url: "https://onesmuskipz.github.io/Cheersway-Commerce/?authuser=0",
      grade: "Graded"
    },
    {
      id: 30,
      student: "Fidel Oluoch",
      url: "https://fidel-oluoch.github.io/project-viper-fidel-oluoch/?authuser=0",
      grade: "Graded"
    },
    {
      id: 31,
      student: "Grace Wanjiru Wangari",
      url: "https://gracewanjiru-w.github.io/project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 32,
      student: "Francis Njau",
      url: "https://njauxd.github.io/XD-TECH/?authuser=0",
      grade: "Graded"
    },
    {
      id: 33,
      student: "Nicholas Kiilu Mbuya",
      url: "https://nicholaskiilu.github.io/kale/?authuser=0",
      grade: "Graded"
    },
    {
      id: 34,
      student: "Sharon Atieno",
      url: "https://shazz-one.github.io/salon/?authuser=0",
      grade: "Graded"
    },
    {
      id: 35,
      student: "Kevin Wambugu",
      url: "https://vodosky.github.io/project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 36,
      student: "Abigael Chepkirui",
      url: "https://abigael-d001.github.io/Pinloc-Surveyor2025/?authuser=0",
      grade: "Graded"
    },
    {
      id: 37,
      student: "Priyal Sumaria Kanyokiri",
      url: "https://sumtech01.github.io/TRAVEL/?authuser=0",
      grade: "Graded"
    }
  ,
    {
      id: 38,
      student: "Morris Murimi Kimani",
      url: "https://m216576.github.io/white-meat/?authuser=0",
      grade: "Graded"
    },
    {
      id: 39,
      student: "William Ang'ani",
      url: "https://wi-cypto.github.io/bussiness/?authuser=0",
      grade: "Graded"
    },
    {
      id: 40,
      student: "Arnold Ndonga",
      url: "https://arnoldndonga.github.io/Ponamed/?authuser=0",
      grade: "Graded"
    },
    {
      id: 41,
      student: "Julius Omollo Keya",
      url: "https://juliuskeya.github.io/keya1/?authuser=0",
      grade: "Graded"
    },
    {
      id: 42,
      student: "Gilbert Cheruiyot Koskei",
      url: "https://gkosky17.github.io/Gillo/?authuser=0",
      grade: "Graded"
    },
    {
      id: 43,
      student: "Roy Warungu Maina",
      url: "https://the-troy.github.io/Final-Project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 44,
      student: "Mutinda Grace Mukeni",
      url: "https://gracious-mukeni.github.io/CSI-limited/?authuser=0",
      grade: "Graded"
    },
    {
      id: 45,
      student: "John Kibe Njuguna",
      url: "https://jkibe-njuguna.github.io/Insurance-web-project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 46,
      student: "Damaris Ng'endo Nduta",
      url: "https://damarnduta.github.io/Elite-Group/?authuser=0",
      grade: "Graded"
    },
    {
      id: 47,
      student: "Dak Chot Biel",
      url: "https://dakjokhealthcarehospital.netlify.app/?authuser=0",
      grade: "Graded"
    },
    {
      id: 48,
      student: "Ashley Jepchirchir",
      url: "https://jepchirchirgit.github.io/iyf2025/?authuser=0",
      grade: "Graded"
    },
    {
      id: 49,
      student: "Omondi Frankline Ouma",
      url: "https://frankmemorialhospital.netlify.app/?authuser=0",
      grade: "Graded"
    },
    {
      id: 50,
      student: "Evans Ndagwe",
      url: "https://ndagwe.github.io/Skill-Boost/?authuser=0",
      grade: "Graded"
    },
    {
      id: 51,
      student: "Esther Wairimu Warigia",
      url: "https://wairimu1-eww.github.io/Flybetter/?authuser=0",
      grade: "Graded"
    },
    {
      id: 52,
      student: "Lucas Kagiri",
      url: "https://luca3-prog.github.io/fresh-project/?authuser=0",
      grade: "Graded"
    },
    {
      id: 53,
      student: "Stephany Atieno",
      url: "https://stephanyatieno3943.github.io/E-sheba-Healthcare/?authuser=0",
      grade: "Graded"
    },
    {
      id: 54,
      student: "Ismail Chituyi Oloo",
      url: "https://ismailchituyi.github.io/isma/?authuser=0",
      grade: "Graded"
    },
    {
      id: 55,
      student: "Clara Adho Isacko",
      url: "https://isacko218.github.io/clinic/?authuser=0",
      grade: "Graded"
    },
    {
      id: 56,
      student: "Salome Roba Elema",
      url: "https://salo6224.github.io/hospital/?authuser=0",
      grade: "Graded"
    }
  ];

  // Filter projects based on search term
  const filteredProjects = useMemo(() => 
    projects.filter(project =>
      project.student.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [searchTerm, projects]
  );

  // Paginate filtered projects
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    return filteredProjects.slice(startIndex, startIndex + projectsPerPage);
  }, [filteredProjects, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Handle page change
  const handlePageChange = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

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
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page when searching
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Enhanced Layout */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {paginatedProjects.length > 0 ? (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Project Preview with Desktop View */}
                    <div className="w-full h-[300px] relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                      {/* Browser Top Bar */}
                      <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center absolute top-0 left-0 right-0 z-10">
                        <div className="flex space-x-2">
                          <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                          <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                      </div>
                      
                      {/* Iframe Container */}
                      <div className="absolute inset-0 pt-12 bg-white">
                        <iframe
                          src={project.url}
                          className="w-[300%] h-[300%] origin-top-left scale-[0.33] transform-gpu"
                          style={{
                            transformOrigin: 'top left',
                            transform: 'scale(0.33)',
                          }}
                          title={`${project.student}'s Project - ${project.student}`}
                          loading="eager"
                          allow="fullscreen"
                        />
                      </div>
        
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-md"
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

              {/* Pagination Controls */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <span className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </>
          ) : (
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
      </section>
    </div>
  );
};

export default ProjectsPage;