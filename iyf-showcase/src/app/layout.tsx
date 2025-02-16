// src/app/layout.tsx
import type { Metadata } from 'next';
import NavBar from '../components/NavBar';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IYF Academy - Programming Projects Showcase',
  description: 'Explore innovative projects from Season 7 of IYF Free Weekend Academy. Discover web development, React, and JavaScript projects created by talented students.',
  metadataBase: new URL('https://programming-iyf.harak-a.xyz'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "IYF Academy",
              "url": "https://programming-iyf.harak-a.xyz",
              "description": "IYF Free Weekend Academy provides comprehensive programming education through weekend sessions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Developer Lane",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254 700 000 000",
                "contactType": "customer service"
              }
            })
          }}
        />
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
