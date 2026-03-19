'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type Lang = 'es' | 'en'

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  nav_about: { es: 'Nosotros', en: 'About' },
  nav_exp: { es: 'Experiencia', en: 'Experience' },
  nav_prod: { es: 'Productos', en: 'Products' },
  nav_dest: { es: 'Destinos', en: 'Destinations' },
  nav_owners: { es: 'Propietarios', en: 'Owners' },
  nav_cta: { es: 'Reservar', en: 'Book Now' },
  // Hero
  hero_badge: { es: 'Más de 5,000 estancias desde 2015', en: 'Over 5,000 stays since 2015' },
  hero_h1_pre: { es: 'Tu próximo ', en: 'Your next ' },
  hero_h1_em: { es: 'hogar', en: 'home' },
  hero_h1_post: { es: ' en México te\u00a0espera', en: ' in Mexico is\u00a0waiting' },
  hero_sub: {
    es: 'Espacios con carácter en Ciudad de México y Chiapas. Check-in sin fricciones, atención de gente real, y todo listo para que te sientas en casa desde que llegas.',
    en: 'Spaces with character in Mexico City and Chiapas. Frictionless check-in, real people, and everything ready so you feel at home from the moment you arrive.',
  },
  hero_btn1: { es: 'Buscar Disponibilidad', en: 'Check Availability' },
  hero_btn2: { es: 'Ver Destinos', en: 'See Destinations' },
  trust1_label: { es: 'Estancias completadas', en: 'Stays completed' },
  trust2_label: { es: 'Años de experiencia', en: 'Years of experience' },
  trust3_label: { es: 'Espacios disponibles', en: 'Spaces available' },
  // Channels
  channels_label: { es: 'Nos encuentras en', en: 'Find us on' },
  // About
  about_label: { es: 'Quiénes Somos', en: 'Who We Are' },
  about_title: { es: 'Hospitalidad con el ritmo de\u00a0la\u00a0marimba', en: 'Hospitality with the rhythm of\u00a0the\u00a0marimba' },
  about_p1: {
    es: 'Marimbas Home nació en 2015 con una idea sencilla: que cada huésped se sienta bienvenido de verdad. Empezamos con un departamento en La Condesa y hoy recibimos viajeros en dos de las regiones más fascinantes de México.',
    en: 'Marimbas Home was born in 2015 with a simple idea: that every guest should feel truly welcome. We started with one apartment in La Condesa and today we host travelers in two of Mexico\'s most fascinating regions.',
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
  p4_text: { es: 'La Condesa, Tuxtla, Berriozábal, Coita — cada zona tiene su magia.', en: 'La Condesa, Tuxtla, Berriozábal, Coita — each with its own magic.' },
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
  exp2_h: { es: 'Minibar en cada espacio', en: 'Minibar in every space' },
  exp2_p: {
    es: 'Cada propiedad tiene un minibar con snacks, bebidas y productos locales. Toma lo que quieras y paga fácil desde tu celular — sin efectivo, sin complicaciones.',
    en: 'Every property has a minibar with snacks, drinks and local products. Take what you want and pay easily from your phone — no cash, no hassle.',
  },
  exp2_link: { es: 'Ver el menú', en: 'See the menu' },
  exp3_h: { es: 'Soporte cercano', en: 'Close support' },
  exp3_p: {
    es: '¿Toalla extra? ¿Recomendaciones? ¿Algo inesperado? Nuestro equipo está a un mensaje. Y sí, somos personas reales.',
    en: 'Extra towel? Recommendations? Something unexpected? Our team is a message away. And yes, we\'re real people.',
  },
  // Testimonials
  t1_quote: {
    es: 'El check-in fue increíblemente fácil, el departamento estaba impecable y la ubicación en Condesa es perfecta. Ya reservamos para volver en diciembre.',
    en: 'The check-in was incredibly easy, the apartment was spotless and the Condesa location is perfect. We already booked to come back in December.',
  },
  t1_author: { es: '— Huésped en Condesa. 4, noviembre 2025', en: '— Guest at Condesa. 4, November 2025' },
  t2_quote: {
    es: 'Nos encantó la casa en Tuxtla. Llegamos tarde y no hubo ningún problema con el acceso. Todo limpio, bien equipado, y el equipo siempre atento por WhatsApp.',
    en: 'We loved the house in Tuxtla. We arrived late and had no issues with access. Everything clean, well-equipped, and the team always responsive on WhatsApp.',
  },
  t2_author: { es: '— Huésped en Tuxtla. Sahily, enero 2026', en: '— Guest at Tuxtla. Sahily, January 2026' },
  t3_quote: {
    es: 'Tercer viaje con Marimbas y siempre es la misma calidad. El minibar es un detalle increíble. Se nota que cuidan cada propiedad como si fuera su casa.',
    en: 'Third trip with Marimbas and it\'s always the same quality. The minibar is an amazing touch. You can tell they care for every property like it\'s their own.',
  },
  t3_author: { es: '— Huésped recurrente, marzo 2026', en: '— Returning guest, March 2026' },
  // Products
  prod_label: { es: 'Nuestros Productos', en: 'Our Products' },
  prod_title: { es: 'Herramientas que usamos todos los días — ahora disponibles para\u00a0ti', en: 'Tools we use every day — now available for\u00a0you' },
  prod_intro: {
    es: 'Construimos software para operar nuestras propias propiedades. Cada herramienta nació de un problema real y está probada con <strong>miles de estancias</strong>. Si administras propiedades, puedes usarlas hoy.',
    en: 'We build software to run our own properties. Every tool was born from a real problem and tested with <strong>thousands of stays</strong>. If you manage properties, you can use them today.',
  },
  prod_bottom_pre: { es: '¿Administras propiedades?', en: 'Manage properties?' },
  prod_bottom_post: { es: ' Cada producto funciona de forma independiente — activa solo lo que necesites.', en: ' Each product works independently — activate only what you need.' },
  prod_bottom_btn: { es: 'Contactar al Equipo', en: 'Contact the Team' },
  // Products - cards
  ga_title: { es: 'Guest App', en: 'Guest App' },
  ga_for: { es: 'Para huéspedes · Plug & Play', en: 'For guests · Plug & Play' },
  ga_p: {
    es: 'Check-in digital, verificación de identidad, instrucciones de llegada y acceso a servicios. Tu huésped llega, abre y listo.',
    en: 'Digital check-in, ID verification, arrival instructions and service access. Your guest arrives, opens and done.',
  },
  ga_btn: { es: 'Ver Demo', en: 'See Demo' },
  mb_title: { es: 'Minibar Digital', en: 'Digital Minibar' },
  mb_for: { es: 'Para huéspedes · Genera ingreso extra', en: 'For guests · Extra revenue' },
  mb_p: {
    es: 'Catálogo de productos por propiedad. El huésped pide desde su celular, tú generas revenue adicional sin inventario fijo.',
    en: 'Product catalog per property. Guest orders from their phone, you generate additional revenue with no fixed inventory.',
  },
  mb_btn: { es: 'Ver Demo', en: 'See Demo' },
  ad_title: { es: 'Admin Dashboard', en: 'Admin Dashboard' },
  ad_for: { es: 'Para administradores · Control total', en: 'For admins · Full control' },
  ad_p: {
    es: 'Revenue, ocupación y métricas en un solo lugar. Ve cómo rinden tus propiedades sin abrir cinco plataformas distintas.',
    en: 'Revenue, occupancy and metrics in one place. See how your properties perform without opening five different platforms.',
  },
  ad_btn: { es: 'Solicitar Acceso', en: 'Request Access' },
  cb_title: { es: 'CleanBot', en: 'CleanBot' },
  cb_for: { es: 'Para operaciones · Automatización', en: 'For operations · Automation' },
  cb_p: {
    es: 'Coordina limpieza automáticamente con cada check-out vía WhatsApp. Asigna turnos, notifica y confirma con foto.',
    en: 'Automatically coordinates cleaning with each check-out via WhatsApp. Assigns shifts, notifies and confirms with photo.',
  },
  cb_btn: { es: 'Solicitar Acceso', en: 'Request Access' },
  badge_live: { es: 'Disponible', en: 'Available' },
  badge_soon: { es: 'Próximamente', en: 'Coming Soon' },
  // Properties
  dest_label: { es: 'Nuestros Destinos', en: 'Our Destinations' },
  dest_title: { es: 'Dos regiones, un mismo estándar', en: 'Two regions, one standard' },
  dest_desc: {
    es: 'Ya sea que busques la energía de la ciudad o la calma del sureste, tenemos un espacio listo para ti.',
    en: 'Whether you\'re looking for city energy or the calm of the southeast, we have a space ready for you.',
  },
  cdmx_name: { es: 'Ciudad de México', en: 'Mexico City' },
  cdmx_desc: {
    es: 'En el corazón de La Condesa — cafés, parques, galerías y vida nocturna a pie de puerta. Departamentos con personalidad en uno de los barrios más deseados de CDMX.',
    en: 'In the heart of La Condesa — cafés, parks, galleries and nightlife at your doorstep. Apartments with personality in one of CDMX\'s most desired neighborhoods.',
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
    es: 'Tu propiedad presentada en Airbnb, Booking y canal directo con fotos que venden.',
    en: 'Your property listed on Airbnb, Booking and direct channels with photos that sell.',
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
  own4_title: { es: 'Transparencia total con tecnología propia', en: 'Total transparency with proprietary tech' },
  own4_text: {
    es: 'Dashboard en tiempo real con tu ocupación, ingresos y gastos. Sin sorpresas.',
    en: 'Real-time dashboard with your occupancy, income, and expenses. No surprises.',
  },
  // Footer
  footer_sub: { es: 'Estancias en CDMX y Chiapas · Desde 2015', en: 'Stays in CDMX and Chiapas · Since 2015' },
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
