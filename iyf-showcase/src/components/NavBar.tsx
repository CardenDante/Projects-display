'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white z-50">
      <div className="mx-auto border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="IYF Academy Logo"
                width={145}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <nav className="flex items-center space-x-8">
                <Link href="/" className="text-sm font-medium text-gray-700 hover:text-green-600">
                  Home
                </Link>
                <Link href="/projects" className="text-sm font-medium text-gray-700 hover:text-green-600">
                  Projects
                </Link>
                <Link href="/students" className="text-sm font-medium text-gray-700 hover:text-green-600">
                  Students
                </Link>
                <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-green-600">
                  About
                </Link>
              </nav>
            </div>

            {/* Contact Button */}
            <a
              href="https://freeacademy.iyfkenya.org/register"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
            >
              Join Us
            </a>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <nav className="flex flex-col space-y-1 px-4 py-2">
              <Link 
                href="/" 
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/students" 
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Students
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a
              href="https://freeacademy.iyfkenya.org/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 rounded-full bg-green-600 px-4 py-1.5 text-center text-sm font-medium text-white hover:bg-green-700"
            >
              Join Us
            </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;