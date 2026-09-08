import type { Metadata } from 'next'
import Link from 'next/link'
import LogoIcon from '@/components/LogoIcon'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad — Marimbas Home',
  description:
    'Aviso de Privacidad Integral de Marimbas Home conforme a la LFPDPPP mexicana, el RGPD europeo y la CCPA de California.',
}

// Contenido fuente: Aviso de Privacidad Integral v3 (16-jun-2026), el mismo
// que vive en la Guest App (src/messages/es.json §privacy). Fuente única de
// verdad para textos legales; aquí se presenta como página pública estática.
const secciones: { titulo: string; parrafos: (string | string[])[] }[] = [
  {
    titulo: '1. Responsable del tratamiento',
    parrafos: [
      'Marimbas Home — Enrique Miceli, con domicilio en Atlixco 173, Colonia Condesa, Alcaldía Cuauhtémoc, Ciudad de México, CP 06140, México.',
      'Consultas de privacidad: privacy@marimbashome.com',
    ],
  },
  {
    titulo: '2. Datos que recogemos',
    parrafos: [
      ['Datos básicos:', 'nombre, correo electrónico, teléfono, país de residencia y datos de la reservación (fechas, propiedad, número de personas).'],
      ['Datos para el acceso:', 'documento de identidad y, cuando aplica, selfie de verificación — solo para confirmar que quien llega es quien reservó.'],
      ['Datos automáticos:', 'al usar nuestras páginas se registran datos técnicos (tipo de dispositivo, navegador, páginas visitadas) con fines estadísticos.'],
    ],
  },
  {
    titulo: '3. Para qué los usamos',
    parrafos: [
      'Gestionar tu reservación y tu llegada (check-in digital, códigos de acceso, guía de la propiedad).',
      'Comunicarnos contigo antes, durante y después de tu estancia.',
      'Cumplir obligaciones legales y fiscales (registros de hospedaje, facturación).',
      'Mejorar nuestro servicio mediante estadísticas agregadas.',
    ],
  },
  {
    titulo: '4. Base legal',
    parrafos: [
      'México (LFPDPPP): el tratamiento se sustenta en la relación contractual de la reservación y, cuando aplica, en tu consentimiento expreso.',
      'Unión Europea (RGPD): ejecución de contrato (art. 6.1.b), interés legítimo (seguridad de las propiedades) y consentimiento para analítica.',
      'California (CCPA): se informa que no vendemos ni compartimos datos personales con fines comerciales de terceros.',
    ],
  },
  {
    titulo: '5. Con quién compartimos',
    parrafos: [
      'Plataformas de reservación (Airbnb, Booking.com, VRI/Vrbo), procesadores de pago, y proveedores de herramientas operativas (sistema de gestión de propiedades, check-in digital). Cada uno trata los datos únicamente para prestar su servicio.',
    ],
  },
  {
    titulo: '6. Cuánto tiempo los conservamos',
    parrafos: [
      'Documentos de identidad y selfies: solo el tiempo de verificación de la estancia y se eliminan después, salvo obligación legal de retención.',
      'Datos de reservación y facturación: los años que exige la legislación fiscal.',
      'Firmas y registros de consentimiento: mientras dure la relación y los plazos legales aplicables.',
    ],
  },
  {
    titulo: '7. Tus derechos (ARCO)',
    parrafos: [
      'Puedes solicitar en cualquier momento el Acceso, la Rectificación, la Cancelación o la Oposición (derechos ARCO) sobre tus datos, así como la portabilidad o la revocación del consentimiento.',
      'Escríbenos a privacy@marimbashome.com con tu nombre y el correo con el que reservaste; responderemos en un máximo de 20 días hábiles.',
      'Si estás en la Unión Europea, además puedes acudir a la autoridad de control de tu país. En California, al Attorney General si consideras vulnerados tus derechos.',
    ],
  },
  {
    titulo: '8. Cookies y analítica',
    parrafos: [
      'Este sitio utiliza Google Analytics 4 con almacenamiento de cookies desactivado (client_storage: none): las visitas se cuentan de forma agregada y no se usan cookies publicitarias ni de seguimiento.',
      'Por esa configuración, este sitio no requiere banner de consentimiento de cookies para su analítica.',
    ],
  },
  {
    titulo: '9. Cambios a este aviso',
    parrafos: [
      'Cualquier cambio a este aviso se publicará en esta misma página. Última actualización: 16 de junio de 2026 (v3).',
    ],
  },
]

export default function PrivacidadPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--sand, #f4ede1)', padding: '48px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <LogoIcon size={36} />
          <span style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: 20, fontWeight: 700, color: 'var(--deep-forest, #1e3a2f)' }}>
            Marimbas Home
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '2rem', color: 'var(--deep-forest, #1e3a2f)', marginBottom: 8 }}>
          Aviso de Privacidad Integral
        </h1>
        <p style={{ color: 'var(--muted, #6b6b5f)', fontSize: 14, marginBottom: 40 }}>
          Última actualización: 16 de junio de 2026 (v3)
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {secciones.map((s) => (
            <section key={s.titulo}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--deep-forest, #1e3a2f)', marginBottom: 12 }}>{s.titulo}</h2>
              {s.parrafos.map((p, i) =>
                Array.isArray(p) ? (
                  <p key={i} style={{ color: 'var(--charcoal, #2b2b26)', lineHeight: 1.7, marginBottom: 10 }}>
                    <strong>{p[0]}</strong> {p[1]}
                  </p>
                ) : (
                  <p key={i} style={{ color: 'var(--charcoal, #2b2b26)', lineHeight: 1.7, marginBottom: 10 }}>{p}</p>
                ),
              )}
            </section>
          ))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <Link href="/" style={{ color: 'var(--copper, #c26a4f)', fontWeight: 600 }}>
            ← Volver a marimbashome.com
          </Link>
        </div>
      </div>
    </main>
  )
}
