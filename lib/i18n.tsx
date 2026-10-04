'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type Lang = 'es' | 'en'

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  nav_about: { es: 'Nosotros', en: 'About' },
  nav_exp: { es: 'Experiencia', en: 'Experience' },
  nav_dest: { es: 'Chiapas', en: 'Chiapas' },
  nav_owners: { es: 'Propietarios', en: 'Owners' },
  nav_cta: { es: 'Reservar', en: 'Book Now' },
  // Hero
  hero_badge: { es: 'Más de 5,000 estancias desde 2015', en: 'Over 5,000 stays since 2015' },
  hero_h1_pre: { es: 'Tu próximo ', en: 'Your next ' },
  hero_h1_em: { es: 'hogar', en: 'home' },
  hero_h1_post: { es: ' en México te\u00a0espera', en: ' in Mexico is\u00a0waiting' },
  hero_sub: {
    es: 'Espacios con carácter en Chiapas. Check-in sin fricciones, atención de gente real, y todo listo para que te sientas en casa desde que llegas.',
    en: 'Spaces with character in Chiapas. Frictionless check-in, real people, and everything ready so you feel at home from the moment you arrive.',
  },
  hero_btn1: { es: 'Buscar Disponibilidad', en: 'Check Availability' },
  hero_btn2: { es: 'Explora Chiapas', en: 'Explore Chiapas' },
  trust1_label: { es: 'Estancias completadas', en: 'Stays completed' },
  trust2_label: { es: 'Años de experiencia', en: 'Years of experience' },
  trust3_label: { es: 'Espacios disponibles', en: 'Spaces available' },
  // Channels
  channels_label: { es: 'Nos encuentras en', en: 'Find us on' },
  // About
  about_label: { es: 'Quiénes Somos', en: 'Who We Are' },
  about_title: { es: 'Hospitalidad con el ritmo de\u00a0la\u00a0marimba', en: 'Hospitality with the rhythm of\u00a0the\u00a0marimba' },
  about_p1: {
    es: 'Marimbas Home nació en 2015 con una idea sencilla: que cada huésped se sienta bienvenido de verdad. Hoy recibimos viajeros en Chiapas, la tierra de la marimba.',
    en: 'Marimbas Home was born in 2015 with a simple idea: that every guest should feel truly welcome. Today we host travelers in Chiapas, the land of the marimba.',
  },
  about_p2: {
    es: 'Nuestro nombre viene de la marimba chiapaneca — el instrumento que llena de calidez cualquier espacio. Eso es lo que buscamos: que llegues a un lugar que suena a hogar.',
    en: 'Our name comes from the Chiapan marimba — the instrument that fills any space with warmth. That\'s exactly what we aim for: a place that feels like home.',
  },
  guest_fav_pre: {
    es: 'Varias de nuestras propiedades son ',
    en: 'Several of our properties are ',
  },
  guest_fav_post: {
    es: ' en Airbnb — un reconocimiento que solo recibe el top 5% por calificaciones, reseñas y confiabilidad.',
    en: ' on Airbnb — a recognition given only to the top 5% for ratings, reviews, and reliability.',
  },
  card_title: { es: 'Lo que nos distingue', en: 'What sets us apart' },
  card_sub: { es: 'Por qué miles de huéspedes regresan con nosotros.', en: 'Why thousands of guests come back to us.' },
  p1_title: { es: 'Llegas, abres y listo', en: 'Arrive, open, done' },
  p1_text: { es: 'Check-in 100% digital. Sin esperas, sin llaves, sin coordinaciones.', en: '100% digital check-in. No waiting, no keys, no hassle.' },
  p2_title: { es: 'Atención real, no un bot', en: 'Real people, not a bot' },
  p2_text: { es: 'Equipo local que responde rápido y conoce cada propiedad.', en: 'Local team that responds fast and knows every property.' },
  p3_title: { es: 'Limpieza verificada', en: 'Verified cleanliness' },
  p3_text: { es: 'Protocolo profesional con evidencia fotográfica antes de cada llegada.', en: 'Professional protocol with photo evidence before every arrival.' },
  p4_title: { es: 'Ubicaciones con carácter', en: 'Locations with character' },
  p4_text: { es: 'Tuxtla, Berriozábal, Coita — cada zona tiene su magia.', en: 'Tuxtla, Berriozábal, Coita — each with its own magic.' },
  // Experience
  exp_label: { es: 'Tu Experiencia', en: 'Your Experience' },
  exp_title: { es: 'Cada detalle está pensado antes de que\u00a0llegues', en: 'Every detail is planned before you\u00a0arrive' },
  exp_desc: {
    es: 'Reservar es solo el primer paso. Lo que sigue es una estancia donde todo funciona — sin sorpresas, sin complicaciones.',
    en: 'Booking is just the first step. What follows is a stay where everything works — no surprises, no hassles.',
  },
  exp1_h: { es: 'Llegada sin fricción', en: 'Frictionless arrival' },
  exp1_p: {
    es: 'Antes de llegar recibes un link con todo: instrucciones de acceso, código de entrada, WiFi y guía del barrio. Llegas directo a disfrutar.',
    en: 'Before arriving you get a link with everything: access instructions, entry code, WiFi, and a neighborhood guide. You go straight to enjoying.',
  },
  exp1_link: { es: 'Conocer el check-in', en: 'Learn about check-in' },
  exp2_h: { es: 'Minibar con productos locales', en: 'Minibar with local products' },
  exp2_p: {
    es: 'Muchas de nuestras propiedades tienen minibar con snacks, bebidas y productos locales. Toma lo que quieras y paga fácil desde tu celular — sin efectivo, sin complicaciones.',
    en: 'Many of our properties have a minibar with snacks, drinks and local products. Take what you want and pay easily from your phone — no cash, no hassle.',
  },
  exp3_h: { es: 'Soporte cercano', en: 'Close support' },
  exp3_p: {
    es: '¿Toalla extra? ¿Recomendaciones? ¿Algo inesperado? Nuestro equipo está a un mensaje. Y sí, somos personas reales.',
    en: 'Extra towel? Recommendations? Something unexpected? Our team is a message away. And yes, we\'re real people.',
  },
  // Testimonials
  t1_quote: {
    es: 'Todos los anfitriones fueron muy amables, tuvimos un detalle y nos ayudaron perfectamente, siempre atentos y eficaces, la zona muy céntrica, nos gustó estar allí, todo estuvo cómodo!',
    en: 'All the hosts were very kind; we had a small issue and they helped us perfectly, always attentive and efficient. The area is very central, we loved staying there, everything was comfortable!',
  },
  t1_author: { es: '— Huésped en Tuxtla Gutiérrez, julio 2026', en: '— Guest in Tuxtla Gutiérrez, July 2026' },
  t2_quote: {
    es: 'Todo estuvo excelente, muy buena comunicación. Gracias, sin duda nos volveríamos a hospedar',
    en: 'Everything was excellent, very good communication. Thank you, we would definitely stay again',
  },
  t2_author: { es: '— Huésped en Coita, julio 2026', en: '— Guest in Coita, July 2026' },
  t3_quote: {
    es: 'Excelente lugar, todo te queda a la vuelta de la esquina prácticamente, muy seguro y limpio. claro que volvería a hospedarme aquí.',
    en: 'Excellent place, practically everything is around the corner, very safe and clean. Of course I would stay here again.',
  },
  t3_author: { es: '— Huésped en Tuxtla Gutiérrez, abril 2026', en: '— Guest in Tuxtla Gutiérrez, April 2026' },
  // Properties
  dest_label: { es: 'Nuestro Destino', en: 'Our Destination' },
  dest_title: { es: 'Chiapas, con el ritmo del sureste', en: 'Chiapas, at the pace of the southeast' },
  dest_desc: {
    es: 'Del centro de Tuxtla a la calma de Berriozábal y Coita: casas, lofts y estudios listos para ti.',
    en: 'From downtown Tuxtla to the calm of Berriozábal and Coita: houses, lofts and studios ready for you.',
  },
  chiapas_name: { es: 'Chiapas', en: 'Chiapas' },
  chiapas_desc: {
    es: 'Casas con jardín, aires frescos y el ritmo pausado del sureste mexicano. Ideales para familias, viajes largos, o para desconectar del ruido.',
    en: 'Houses with gardens, fresh air and the slow rhythm of southeastern Mexico. Ideal for families, long stays, or disconnecting from the noise.',
  },
  dest_btn: { es: 'Explorar Todos los Espacios', en: 'Explore All Spaces' },
  // Owners
  own_label: { es: 'Para Propietarios', en: 'For Property Owners' },
  own_title: { es: 'Tu propiedad genera, nosotros la operamos', en: 'Your property earns, we operate it' },
  own_desc: {
    es: 'Si tienes un departamento o casa que quieres rentar por temporada, nos encargamos de todo. Tú solo recibes tu estado de cuenta.',
    en: 'If you have an apartment or house you want to rent short-term, we handle everything. You just receive your monthly statement.',
  },
  own_btn: { es: 'Platiquemos', en: 'Let\'s Talk' },
  own1_title: { es: 'Fotografía y listings profesionales', en: 'Professional photography and listings' },
  own1_text: {
    es: 'Tu propiedad presentada en Airbnb y canal directo con fotos que venden.',
    en: 'Your property listed on Airbnb and direct channels with photos that sell.',
  },
  own2_title: { es: 'Precios que maximizan tu ingreso', en: 'Prices that maximize your income' },
  own2_text: {
    es: 'Tarifas ajustadas automáticamente según demanda, temporada y competencia local.',
    en: 'Rates automatically adjusted by demand, seasonality, and local competition.',
  },
  own3_title: { es: 'Operación completa sin que muevas un dedo', en: 'Full operation without lifting a finger' },
  own3_text: {
    es: 'Limpieza, mantenimiento, atención a huéspedes, y resolución de incidentes.',
    en: 'Cleaning, maintenance, guest support, and incident resolution.',
  },
  own4_title: { es: 'Cuentas claras cada mes', en: 'Clear accounts every month' },
  own4_text: {
    es: 'Estado de cuenta mensual con tu ocupación, ingresos y gastos. Sin sorpresas.',
    en: 'Monthly statement with your occupancy, income, and expenses. No surprises.',
  },
  // Properties - tags & stats
  tag_lofts: { es: 'Lofts y estudios', en: 'Lofts & studios' },
  tag_casas: { es: 'Casas Completas', en: 'Full Houses' },
  tag_jardin: { es: 'Jardín & Terraza', en: 'Garden & Terrace' },
  stat_spaces: { es: 'Espacios', en: 'Spaces' },
  stat_guests: { es: 'Huéspedes', en: 'Guests' },
  stat_per_night: { es: 'Por noche', en: 'Per night' },
  // Footer
  footer_sub: { es: 'Estancias en Chiapas · Desde 2015', en: 'Stays in Chiapas · Since 2015' },
  footer_book: { es: 'Reservar', en: 'Book' },
  footer_checkin: { es: 'Check-in', en: 'Check-in' },
  footer_contact: { es: 'Contacto', en: 'Contact' },
  footer_copy: { es: `© 2015–${new Date().getFullYear()} Marimbas Home. Todos los derechos reservados.`, en: `© 2015–${new Date().getFullYear()} Marimbas Home. All rights reserved.` },
}

interface I18nContextType {
  lang: Lang
  t: (key: string) => string
  toggleLang: () => void
}

const I18nContext = createContext<I18nContextType>({
  lang: 'es',
  t: (key: string) => key,
  toggleLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const t = useCallback(
    (key: string) => translations[key]?.[lang] || key,
    [lang]
  )

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }, [])

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
