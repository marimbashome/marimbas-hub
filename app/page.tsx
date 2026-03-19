'use client'

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

export default function Home() {
  return (
    <I18nProvider>
      <Nav />
      <Hero />
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
