'use client'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import FadeUp from './FadeUp'

const slides = [
  { key: 't1', initials: 'MC', tone: 'copper' as const },
  { key: 't2', initials: 'AR', tone: 'slate' as const },
  { key: 't3', initials: 'LS', tone: 'sage' as const },
]

export default function Testimonials() {
  const { t } = useI18n()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000)
    return () => clearInterval(iv)
  }, [])

  return (
    <FadeUp className="testimonial">
      <div className="testimonial-mark" aria-hidden="true">&ldquo;</div>
      <div className="testimonial-inner">
        <div className="testimonial-stars" aria-label="5 stars">★ ★ ★ ★ ★</div>
        <div className="testimonial-slides">
          {slides.map((s, i) => (
            <div key={s.key} className={`testimonial-slide${i === current ? ' active' : ''}`}>
              <div className="testimonial-quote">{t(`${s.key}_quote`)}</div>
              <div className="testimonial-author-row">
                <div className={`testimonial-avatar tone-${s.tone}`}>{s.initials}</div>
                <div className="testimonial-author">{t(`${s.key}_author`)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots" role="tablist">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              aria-selected={i === current}
            />
          ))}
        </div>
      </div>
      </FadeUp>
  )
}
