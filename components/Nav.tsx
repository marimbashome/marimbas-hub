'use client'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import LogoIcon from './LogoIcon'

export default function Nav() {
  const { lang, t, toggleLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <LogoIcon />
          <span className="nav-logo-text">Marimbas Home</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">{t('nav_about')}</a></li>
          <li><a href="#experience">{t('nav_exp')}</a></li>
          <li><a href="#tech">{t('nav_prod')}</a></li>
          <li><a href="#properties">{t('nav_dest')}</a></li>
          <li><a href="#owners">{t('nav_owners')}</a></li>
          <li><a href="https://book.marimbashome.com" className="nav-cta">{t('nav_cta')}</a></li>
          <li><button onClick={toggleLang} className="lang-toggle" aria-label="Switch language">{lang === 'es' ? 'EN' : 'ES'}</button></li>
        </ul>
        <button className="nav-mobile" aria-label="Menú"><span></span><span></span><span></span></button>
      </div>
    </nav>
  )
}
