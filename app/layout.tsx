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
  title: 'Marimbas Home \u2014 Tu Hogar en M\u00e9xico',
  description:
    'Departamentos y casas para tu pr\u00f3xima estancia en Ciudad de M\u00e9xico y Chiapas. M\u00e1s de 5,000 hu\u00e9spedes conf\u00edan en Marimbas Home desde 2015.',
  openGraph: {
    title: 'Marimbas Home \u2014 Tu Hogar en M\u00e9xico',
    description:
      'Espacios con car\u00e1cter en CDMX y Chiapas. Check-in digital, atenci\u00f3n personal, m\u00e1s de 10 a\u00f1os de experiencia.',
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
