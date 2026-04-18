import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Marimbas Home — Tu Hogar en México'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #0f2e26 0%, #1a4a3a 50%, #2d6a4f 100%)',
          fontFamily: 'serif',
          color: '#faf7f2',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: 60,
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#e4a33a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0f2e26',
              fontSize: '32px',
              fontWeight: 700,
              fontFamily: 'serif',
            }}
          >
            M
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            Marimbas Home
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          <div
            style={{
              fontSize: '96px',
              fontWeight: 700,
              lineHeight: 1.05,
              fontFamily: 'serif',
              letterSpacing: '-0.02em',
            }}
          >
            Tu Hogar en México
          </div>
          <div
            style={{
              fontSize: '36px',
              fontWeight: 400,
              opacity: 0.92,
              maxWidth: '900px',
              lineHeight: 1.35,
            }}
          >
            Departamentos y casas en CDMX y Chiapas
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 60,
            right: 60,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '24px',
            opacity: 0.85,
          }}
        >
          <div style={{ display: 'flex', gap: '32px' }}>
            <span>⭐ 4.69 rating</span>
            <span>·</span>
            <span>5,000+ huéspedes</span>
            <span>·</span>
            <span>Desde 2015</span>
          </div>
          <div
            style={{
              color: '#e4a33a',
              fontWeight: 600,
            }}
          >
            marimbashome.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
