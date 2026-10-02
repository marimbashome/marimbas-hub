import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

// Regla: cada URL de este mapa debe responder 200 en www.
// - /blog se quitó: redirige (308) a book.marimbashome.com, otro dominio.
// - /privacy.html se quitó: ahora es un 308 a /privacidad; se lista el destino.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about.html`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact.html`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacidad`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
