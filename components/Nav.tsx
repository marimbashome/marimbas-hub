'use client'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import LogoIcon from './LogoIcon'

export default function Nav() {
  const { lang, t, toggleLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 900) setMobileOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${mobileOpen ? ' mobile-open' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}>
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
        <button className="nav-mobile" aria-label="Menú" onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="nav-mobile-menu">
          <ul>
            <li><a href="#about" onClick={closeMenu}>{t('nav_about')}</a></li>
            <li><a href="#experience" onClick={closeMenu}>{t('nav_exp')}</a></li>
            <li><a href="#tech" onClick={closeMenu}>{t('nav_prod')}</a></li>
            <li><a href="#properties" onClick={closeMenu}>{t('nav_dest')}</a></li>
            <li><a href="#owners" onClick={closeMenu}>{t('nav_owners')}</a></li>
            <li><a href="https://book.marimbashome.com" className="nav-cta" onClick={closeMenu}>{t('nav_cta')}</a></li>
            <li><button onClick={() => { toggleLang(); closeMenu() }} className="lang-toggle" aria-label="Switch language">{lang === 'es' ? 'EN' : 'ES'}</button></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
