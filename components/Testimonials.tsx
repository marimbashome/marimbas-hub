'use client'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import FadeUp from './FadeUp'

const keys = ['t1', 't2', 't3']

export default function Testimonials() {
  const { t } = useI18n()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => setCurrent((p) => (p + 1) % keys.length), 6000)
    return () => clearInterval(iv)
  }, [])

  return (
    <FadeUp className="testimonial">
      <div className="testimonial-inner">
        <div className="testimonial-stars">★ ★ ★ ★ ★</div>
        <div className="testimonial-slides">
          {keys.map((k, i) => (
            <div key={k} className={`testimonial-slide${i === current ? ' active' : ''}`}>
              <div className="testimonial-quote">{t(`${k}_quote`)}</div>
              <div className="testimonial-author">{t(`${k}_author`)}</div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {keys.map((_, i) => (
            <button key={i} className={`testimonial-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </FadeUp>
  )
}
