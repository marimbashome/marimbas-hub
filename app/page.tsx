import { I18nProvider } from '@/lib/i18n'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Channels from '@/components/Channels'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Products from '@/components/Products'
import Properties from '@/components/Properties'
import Owners from '@/components/Owners'
import Footer from '@/components/Footer'
import { contarPropiedades } from '@/lib/inventario'

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
      <Products />
      <Properties />
      <Owners />
      <Footer />
    </I18nProvider>
  )
}
