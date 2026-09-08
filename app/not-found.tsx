import Link from 'next/link'
import LogoIcon from '@/components/LogoIcon'

export const metadata = {
  title: 'Página no encontrada — Marimbas Home',
}

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '96px 24px 64px' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div
          aria-hidden="true"
          style={{
            width: 64, height: 64, borderRadius: 16, margin: '0 auto 24px',
            background: 'rgba(194,106,79,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 30 }}>🧭</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
          <LogoIcon size={28} />
          <span style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontWeight: 700, color: 'var(--deep-forest, #1e3a2f)' }}>
            Marimbas Home
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.8rem', color: 'var(--deep-forest, #1e3a2f)', marginBottom: 12 }}>
          Esta página no existe
        </h1>
        <p style={{ color: 'var(--charcoal, #2b2b26)', opacity: 0.75, marginBottom: 32, lineHeight: 1.7 }}>
          La dirección que buscas se movió o nunca existió. Pero tu próximo hogar en México sigue en el mismo lugar de siempre.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              padding: '12px 28px', borderRadius: 100, background: 'var(--copper, #c26a4f)', color: '#fff',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}
          >
            Ir al inicio
          </Link>
          <a
            href="https://book.marimbashome.com"
            style={{
              padding: '12px 28px', borderRadius: 100, background: 'transparent', color: 'var(--deep-forest, #1e3a2f)',
              border: '1.5px solid rgba(30,58,47,0.35)', fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}
          >
            Buscar disponibilidad
          </a>
        </div>
      </div>
    </main>
  )
}
