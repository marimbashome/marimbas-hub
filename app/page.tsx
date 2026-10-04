import type { Metadata } from 'next'
import { I18nProvider } from '@/lib/i18n'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Channels from '@/components/Channels'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Properties from '@/components/Properties'
import Owners from '@/components/Owners'
import Footer from '@/components/Footer'
import { contarPropiedades } from '@/lib/inventario'
import { siteUrl } from '@/lib/site'

// El canónico del home vive AQUÍ, no en el layout: un `alternates` en el layout
// lo heredarían todas las páginas hijas y /privacidad declaraba el home como su
// canónico (Google la descartaba). Solo el home usa el canónico del home.
export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
    // Sin alternante 'en': apuntaba a esta misma dirección, que desde el
    // servidor solo sirve español (el cambio de idioma es un botón que actúa en
    // el navegador y nunca cambia la URL). Declarar una traducción que los
    // buscadores no pueden ver es una promesa falsa; se declara lo que hay.
    languages: {
      'es-MX': siteUrl,
      'x-default': siteUrl,
    },
  },
}

// Se rehace cada 6 horas para que el conteo de propiedades no se congele.
export const revalidate = 21600

export default async function Home() {
  const propiedades = await contarPropiedades()

  return (
    <I18nProvider>
      <Nav />
      <Hero propiedades={propiedades} />
      <Channels />
      <About />
      <Experience />
      <Testimonials />
      <Properties propiedades={propiedades} />
      <Owners />
      <Footer />
    </I18nProvider>
  )
}
