'use client';


import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  // Top performers first (sorted by score)
  const students = [
    "Tyra Nyambura",
    "Ashley Bura Omolo",
    "Isaac Iliwa Omuse",
    "Jacktone Many",
    "Maxwel Odhiambo",
    "Gabriel Lemuya Esma",
    "Kipkirui Shadrack Ngeno",
    "Winfred Mwikali",
    "Brian Omondi Amol",
    "Nicholas Ndung'u Njiiri",
    "Peter Mogunde Mboya",
    "Kendrick Osia",
    "Ryder Anyira Alumasa",
    "Jacob Angel",
    "Mark David Chomba",
    "Ian Mbugua",
    "Antony Makau Mutiso",
    "Amadi Marion",
    "Veronicah Nyakiringa",
    "Tracy Okwaro",
    "Arnold Mramba Daniel",
    "Stephen Kagiri",
    "Aurelia Adhiambo Otieno",
    "Daniel Bruce Otieno",
    "Felix Kagecha Kimani",
    "Meshack Obure Mandere",
    "Naida Miloyo Kasiva Malemba",
    "Jackson Wachira",
    "Kipngetich Onesmus",
    "Fidel Oluoch",
    "Francis Njau",
    "Nicholas Kiilu Mbuya",
    "Sharon Atieno",
    "Kevin Wambugu",
    "Abigael Chepkirui",
    "Priyal Sumaria Kanyokiri",
    "Morris Murimi Kimani",
    "William Ang'ani",
    "Arnold Ndonga",
    "Julius Omollo Keya",
    "Gilbert Cheruiyot Koskei",
    "Roy Warungu Maina",
    "Mutinda Grace Mukeni",
    "John Kibe Njuguna",
    "Damaris Ng'endo Nduta",
    "Dak Chot Biel",
    "Grace Wanjiru Wangari",
    "Ashley Jepchirchir",
    "Omondi Frankline Ouma",
    "Evans Ndagwe",
    "Collins Ogwago Onyango",
    "Esther Wairimu Warigia",
    "Lucas Kagiri",
    "Stephany Atieno",
    "Ismail Chituyi Oloo",
    "Victor Munene",
    "Clara Adho Isacko",
    "Salome Roba Elema",
    "Sholet Adongo",
    "Mangeni Shalom Bukheri",
    "Neema Therenja",
    "Tanui Frankline Kipruto",
    "Nzabakiza Patrick",
    "Ted John",
    "Rachel Auma Okumu",
    "Vivian Achieng Otieno",
    "Immanuel Mwangi",
    "Kenedie Munene",
    "Elvis Nyongesa",
    "Dennis Mugo Njeru",
    "Susan Katuve",
    "Samwel Mwenda Kibui",
    "Otieno Kevin Ochieng",
    "Karanja Margaret Nyambura",
    "Phentan Awuor Oguta",
    "Eunice Wanjiru Maina",
    "Serphine Atieno Odongo",
    "Derrick Onyango Odhiambo",
    "Glorian Odanga",
    "John Mutheu Kioko",
    "Nyambura Margaret",
    "Denis Kinyua",
    "Dickson Otieno",
    "Francis Karanja",
    "Faith Were Achieng",
    "Marko Celestine Nyaboke",
    "Clinton Thuo Muthoni",
    "Moses Thuo Wachira",
    "Moses Okoth Okongo",
    "Joy Waithera Maina",
    "Anthony Makau",
    "Lilian Ondigo",
    "Faith Waithera Njuguna",
    "Mungai Githiri Kibue",
    "Braxston Gordon Omeke",
    "Dancan Onserio",
    "Vincent Ombwudu Mbuku",
    "Spencer Wainaina",
    "Kevin Hemron",
    "Ann Njeri",
    "Mercy Wanjiru",
    "Benard Kitonga",
    "Victor Ochieng",
    "John Waithanji",
    "Doreen Gacheri",
    "Hope Nkatha",
    "Martin Kareu Irungu",
    "Dakis Wany",
    "Kennedy Kimani",
    "Rosahia Wanga",
    "Onesmas Warui Njeri",
    "Naomi Asule",
    "MaxChris Munene",
    "Kelvin Kimeu Mueni",
    "Judy Wangui Githinji",
    "Henry Kemmon Gerald",
    "Elvis Otieno",
    "Chul loang Chuol"
  ];
  // Filter students based on search term
  const filteredStudents = useMemo(() => 
    students.filter(student =>
      student.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [searchTerm, students]
  );

  // Paginate filtered students
  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * studentsPerPage;
    return filteredStudents.slice(startIndex, startIndex + studentsPerPage);
  }, [filteredStudents, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  // Handle page change
  const handlePageChange = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

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
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
            />
          </div>
        </div>
      </section>

      {/* Students List */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {paginatedStudents.length > 0 ? (
            <>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {paginatedStudents.map((student, index) => (
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
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No students found
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

export default StudentsPage;