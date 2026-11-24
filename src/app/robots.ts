import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/'], // On cache l'admin et les API aux robots
    },
    sitemap: 'https://lesnuancesduplaisir.vercel.app/sitemap.xml',
  }
}