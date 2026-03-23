import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1NXNXMPMS"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q1NXNXMPMS');
          `}
        </Script>
        {/* AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5779958677522085"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
