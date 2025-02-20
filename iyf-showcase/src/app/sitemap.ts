import { MetadataRoute } from 'next'

export default function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://programming-iyf.harak-a.xyz'
  
  return [

    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/students`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alumni`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

// Generate XML sitemap
export async function GET() {
  const sitemapData = await generateSitemap()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapData.map((item: MetadataRoute.Sitemap[0]) => `
        <url>
          <loc>${item.url}</loc>
          ${item.lastModified ? `<lastmod>${new Date(item.lastModified).toISOString()}</lastmod>` : ''}
          ${item.changeFrequency ? `<changefreq>${item.changeFrequency}</changefreq>` : ''}
          ${item.priority ? `<priority>${item.priority}</priority>` : ''}
        </url>

      `).join('')}
    </urlset>`

  return new Response(xml, { 
    headers: {
      'Content-Type': 'application/xml',
    }
  })
}
