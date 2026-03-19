import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marimbas Home — Tu Hogar en México',
  description:
    'Departamentos y casas para tu próxima estancia en Ciudad de México y Chiapas. Más de 5,000 huéspedes confían en Marimbas Home desde 2015.',
  openGraph: {
    title: 'Marimbas Home — Tu Hogar en México',
    description:
      'Espacios con carácter en CDMX y Chiapas. Check-in digital, atención personal, más de 10 años de experiencia.',
    type: 'website',
    url: 'https://marimbashome.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
