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
//
// Sincronizado contra ese archivo el 2026-09-17: antes faltaban la retención
// real de identificaciones y selfies, los datos de verificación de antecedentes,
// el registro de llamadas, el hosting y Google como encargados, y la sección de
// seguridad. Al tocar es.json §privacy hay que volver a pasar por aquí.
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
      ['Datos básicos:', 'nombre completo, correo electrónico, teléfono, país de origen, contacto de emergencia (nombre y teléfono), horarios estimados de llegada y salida, solicitudes especiales y datos de la reservación (fechas, propiedad, número de personas).'],
      ['Datos que solo se recogen con tu consentimiento explícito:', 'cuando el módulo de verificación de identidad está activo para tu reservación, podemos solicitar fotografía de tu identificación oficial (pasaporte, licencia de conducir, INE/IFE) y/o fotografía facial (selfie).'],
      ['Datos automáticos:', 'dirección IP, agente del navegador, preferencia de idioma, marcas de tiempo de consentimiento y datos de firma digital.'],
      ['Datos derivados de la verificación de antecedentes:', 'cuando aplica, generamos un puntaje interno de riesgo para la reservación combinando el cruce de tu nombre contra listas oficiales de sanciones (OFAC, ONU y personas políticamente expuestas, todas consultadas localmente sin transmitir tu nombre a terceros), la revisión de si tu correo apareció en filtraciones públicas conocidas, la validación de formato y reputación del teléfono, la búsqueda de noticias adversas relevantes para la seguridad y el análisis técnico de las fotos de identificación y selfie (metadatos y prueba de vida). Estos resultados son internos y no se comparten con terceros.'],
      ['Llamadas al teléfono de la casa:', 'si llamas al teléfono de atención guardamos el número desde el que llamaste, la fecha y hora, la duración y si la llamada fue contestada. No grabamos ni escuchamos el contenido. Tu nombre y el número que diste al reservar se publican en la libreta de contactos de ese teléfono para reconocerte cuando llamas.'],
    ],
  },
  {
    titulo: '3. Para qué los usamos',
    parrafos: [
      'Verificar la identidad del huésped y gestionar la estancia (check-in digital, códigos de acceso, guía de la propiedad), conforme a las regulaciones mexicanas de hospedaje (NOM-010-TUR-2001).',
      'Comunicarnos contigo antes, durante y después de tu estancia, incluidas las instrucciones de llegada y el contacto de emergencia.',
      'Cumplir las leyes y obligaciones aplicables en México, Estados Unidos y la Unión Europea, incluidas las derivadas de listas oficiales de sanciones, y las obligaciones fiscales y de registro de hospedaje.',
      'Seguridad y prevención de fraude para proteger a nuestros huéspedes y las propiedades, con una evaluación interna de riesgo basada en datos públicos y bases de datos oficiales.',
      'Atender el teléfono de la casa sabiendo quién llama y dar seguimiento a lo que se pidió durante la estancia.',
      'Mejorar nuestro servicio mediante estadísticas agregadas.',
    ],
  },
  {
    titulo: '4. Base legal',
    parrafos: [
      ['México (LFPDPPP):', 'el tratamiento de los datos básicos se sustenta en la necesidad contractual de la reservación y en el interés legítimo. Los datos sensibles o biométricos (fotos de identificación, selfies) se tratan con tu consentimiento expreso. Este aviso es el Aviso de Privacidad Integral que exigen los artículos 15 y 16 de la LFPDPPP; la autoridad supervisora es el INAI.'],
      ['Unión Europea (RGPD):', 'necesidad contractual (art. 6.1.b) para los datos básicos y consentimiento explícito (art. 9.2.a) para los biométricos, además del interés legítimo en la seguridad de las propiedades. México no cuenta con decisión de adecuación de la UE: las transferencias se amparan en Cláusulas Contractuales Tipo. Puedes retirar tu consentimiento en cualquier momento, sin afectar la licitud del tratamiento previo.'],
      ['California (CCPA):', 'no vendemos ni compartimos datos personales con fines comerciales de terceros. Tienes derecho a saber qué recopilamos, a pedir su eliminación y a no ser discriminado por ejercerlo.'],
    ],
  },
  {
    titulo: '5. Con quién compartimos',
    parrafos: [
      'No vendemos, alquilamos ni comercializamos tus datos personales. Los compartimos solo en estos casos:',
      'Con autoridades, cuando la ley lo exige.',
      'Con nuestro proveedor de infraestructura (Supabase, Inc. / AWS), que los procesa bajo contrato de tratamiento de datos.',
      'Con las plataformas de reservación (Airbnb, Booking.com, Vrbo) como parte del contrato de tu reservación, y con procesadores de pago cuando reservas de forma directa.',
      'Con Google LLC (Gemini API), únicamente para el análisis técnico de las fotos de identificación y selfie (autenticidad y prueba de vida), sin que el proveedor retenga las imágenes.',
      'Con Google LLC (Google Contacts), únicamente para publicar tu nombre y el número que diste al reservar en la libreta del teléfono de atención. No se envía nada más: ni tu correo, ni tu documento de identidad, ni tu historial, ni evaluación alguna.',
      'Las consultas a listas oficiales de sanciones y bases públicas se hacen localmente, sin transmitir tu información fuera de nuestros sistemas.',
    ],
  },
  {
    titulo: '6. Cuánto tiempo los conservamos',
    parrafos: [
      ['Fotografía facial (selfie), si se recogió:', 'se elimina 2 años (730 días) después de tu check-out más reciente. Si tienes una reserva activa o futura, el plazo se pausa hasta que termine esa estancia. El plazo se sustenta en la prevención de fraude y la seguridad de huéspedes y propiedades, y es proporcional al periodo en que pueden surgir disputas, contracargos o incidentes ligados a una estancia.'],
      ['Fotografía de identificación oficial, si se recogió:', 'se conserva mientras sea necesaria para la prevención de fraude y la seguridad de huéspedes y propiedades —incluida la detección de reincidencia y la defensa ante reclamaciones tardías—, sin plazo fijo de eliminación automática. Revisamos periódicamente esa necesidad y la eliminamos cuando deja de existir. Puedes pedir su eliminación en cualquier momento con tus derechos ARCO/RGPD, y se borrará salvo que una obligación legal o un caso abierto exija conservarla.'],
      ['Datos básicos (nombre, contacto, país):', '1 año después del check-out, para cumplimiento fiscal y legal.'],
      ['Firma digital y registros de consentimiento:', '3 años, para auditoría legal.'],
      ['Registro de llamadas:', 'pasados 2 años desde tu última estancia deja de usarse: tus llamadas ya no se muestran en ninguna pantalla ni generan avisos, y el registro queda bloqueado. Tu tarjeta en la libreta de contactos se conserva mientras seas huésped y sale de la libreta en cuanto lo pidas.'],
      ['Excepción por incidente:', 'si durante o después de tu estancia se registra un daño grave, un incidente de responsabilidad civil o una disputa formal, los datos se conservan hasta la resolución completa del caso y 5 años después, para protección legal de ambas partes.'],
    ],
  },
  {
    titulo: '7. Seguridad de los datos',
    parrafos: [
      'Tus datos viajan y se guardan cifrados con protocolos estándar de la industria (TLS 1.2 o superior en tránsito, AES-256 en reposo). Aplicamos control de acceso por roles, registro de auditoría y revisiones de seguridad periódicas. Los documentos de identidad y las fotografías se guardan en almacenamiento cifrado con acceso restringido.',
    ],
  },
  {
    titulo: '8. Tus derechos',
    parrafos: [
      ['México — derechos ARCO:', 'puedes solicitar el Acceso, la Rectificación, la Cancelación o la Oposición sobre tus datos. Escríbenos a privacy@marimbashome.com con tu nombre completo y los datos de tu reservación. Si no quedas conforme, puedes presentar una queja ante el INAI (www.inai.org.mx).'],
      ['Unión Europea — RGPD:', 'acceso, rectificación, supresión, limitación del tratamiento, portabilidad, oposición y retirada del consentimiento, además del derecho a reclamar ante la autoridad de protección de datos de tu país.'],
      ['California — CCPA:', 'derecho a saber, a eliminar, a no participar en una venta futura y a no ser discriminado. No vendemos información personal.'],
      ['Plazos de respuesta:', 'respondemos dentro del plazo que marca cada ley: 20 días hábiles en México, 30 días para el RGPD y 45 días para el CCPA.'],
    ],
  },
  {
    titulo: '9. Cookies y analítica',
    parrafos: [
      'Este sitio utiliza Google Analytics 4 en modo sin cookies: el consentimiento de almacenamiento analítico y publicitario se manda denegado por omisión (Consent Mode), así que la medición viaja en solicitudes agregadas y no se escriben cookies de analítica, de seguimiento ni publicitarias.',
      'Por esa configuración, este sitio no requiere banner de consentimiento de cookies para su analítica.',
    ],
  },
  {
    titulo: '10. Cambios a este aviso',
    parrafos: [
      'Cualquier cambio a este aviso se publicará en esta misma página. Última actualización: 16 de junio de 2026 (v3).',
    ],
  },
]

export default function PrivacidadPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--linen, #f4ede1)', padding: '48px 24px' }}>
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
        <p style={{ color: 'var(--charcoal-light, #4a423c)', fontSize: 14, marginBottom: 40 }}>
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
          <Link href="/" style={{ color: 'var(--copper-dark, #a55540)', fontWeight: 600 }}>
            ← Volver a marimbashome.com
          </Link>
        </div>
      </div>
    </main>
  )
}
