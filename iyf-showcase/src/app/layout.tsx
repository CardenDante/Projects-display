// src/app/layout.tsx
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Computer Programming Class',
  description: 'IYF Free Weekend Academy Season 7 Projects Showcase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <NavBar />
          <main className="flex-grow">{children}</main>
          
          <footer className="bg-white border-t">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center">
                {/* Logo */}
                <Link href="/" className="mb-8">
                  <Image
                    src="/logo.png"
                    alt="IYF Academy Logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </Link>

                {/* Navigation */}
                <nav className="mb-8">
                  <ul className="flex flex-wrap justify-center gap-8">
                    <li>
                      <Link 
                        href="/" 
                        className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/projects" 
                        className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/students" 
                        className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                      >
                        Students
                      </Link>
                    </li>
                    <li>
                      <a 
                        href="https://freeacademy.iyfkenya.org/register" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                      >
                        Join Us
                      </a>
                    </li>
                  </ul>
                </nav>

                {/* Social & Contact */}
                <div className="flex items-center gap-4 mb-8">
                  <a 
                    href="https://github.com/IYF-Programming-Class"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>

                {/* Copyright */}
                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} IYF Free Weekend Academy
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}