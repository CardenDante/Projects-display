// src/app/layout.tsx
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import { Inter } from 'next/font/google';
import './globals.css'

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
          <footer className="bg-white mt-auto">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} IYF Free Weekend Academy. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}