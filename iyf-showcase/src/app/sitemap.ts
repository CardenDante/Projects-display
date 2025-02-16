import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://programming-iyf.harak-a.xyz'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/students`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`, 
      lastModified: new Date(),
    },
  ]
}
