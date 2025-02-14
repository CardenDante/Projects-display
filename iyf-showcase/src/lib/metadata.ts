// src/lib/metadata.ts
import type { Metadata } from 'next'

export const siteConfig = {
  name: 'IYF Academy',
  description: 'IYF Free Weekend Academy Season 7 Programming Projects Showcase',
  url: 'https://iyf-academy.com',
  ogImage: 'https://iyf-academy.com/og.jpg',
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'IYF Academy',
    'Programming',
    'Web Development',
    'Student Projects',
    'Coding Bootcamp',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
  ],
  authors: [
    {
      name: 'IYF Academy',
      url: siteConfig.url,
    },
  ],
  creator: 'IYF Academy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@iyfacademy',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

// Page-specific metadata generators
export const generateMetadata = {
  home: (): Metadata => ({
    ...defaultMetadata,
    title: 'Home | Student Projects Showcase',
  }),
  
  projects: (): Metadata => ({
    ...defaultMetadata,
    title: 'Projects | Browse All Projects',
    description: 'Browse through all projects created by IYF Academy Season 7 students',
  }),

  students: (): Metadata => ({
    ...defaultMetadata,
    title: 'Students | Meet Our Developers',
    description: 'Meet the talented students who created these amazing projects',
  }),

  about: (): Metadata => ({
    ...defaultMetadata,
    title: 'About | Learn About IYF Academy',
    description: 'Learn more about IYF Free Weekend Academy and our programming course',
  }),

  project: (title: string): Metadata => ({
    ...defaultMetadata,
    title: `${title} | Project Details`,
    description: `View details and live demo of ${title} project`,
  }),
}