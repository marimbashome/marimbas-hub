import type { MetadataRoute } from 'next'

// Con www: el ápice responde 307 y manda aquí. Apuntar el canónico, los
// idiomas alternos y el mapa del sitio a una dirección que primero redirige
// diluye la señal en vez de declarar el destino final.
const siteUrl = 'https://www.marimbashome.com'

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
      url: `${siteUrl}/privacy.html`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      // Blog is served via Vercel rewrite to the marimbas-blog project.
      // Included here so Google crawls /blog via this sitemap.
      url: `${siteUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
