'use client'
import { useEffect, useRef, ReactNode } from 'react'

export default function FadeUp({ children, className = '', delay }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }) },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  const delayClass = delay ? ` d${delay}` : ''
  return <div ref={ref} className={`fade-up${delayClass} ${className}`}>{children}</div>
}
