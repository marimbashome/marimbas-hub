'use client'
import { useI18n } from '@/lib/i18n'
import ArrowIcon from './ArrowIcon'
import FadeUp from './FadeUp'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-image" />
        <div className="hero-bg-overlay" />
      </div>
      <FadeUp className="hero-content">
        <div className="hero-badge">
          <span className="hero-dot"></span>
          <span>{t('hero_badge')}</span>
        </div>
        <h1>{t('hero_h1_pre')}<em>{t('hero_h1_em')}</em>{t('hero_h1_post')}</h1>
        <p className="hero-sub">{t('hero_sub')}</p>
        <div className="hero-actions">
          <a href="https://book.marimbashome.com" className="btn btn-copper">
            <span>{t('hero_btn1')}</span>
            <ArrowIcon />
          </a>
          <a href="#properties" className="btn btn-ghost">{t('hero_btn2')}</a>
        </div>
        <div className="trust-bar">
          <div className="trust-item">
            <div className="trust-num">5,000+</div>
            <div className="trust-label">{t('trust1_label')}</div>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <div className="trust-num">10</div>
            <div className="trust-label">{t('trust2_label')}</div>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <div className="trust-num">28</div>
            <div className="trust-label">{t('trust3_label')}</div>
          </div>
        </div>
      </FadeUp>
      <a href="#about" className="hero-scroll" aria-label="Scroll to content">
        <span className="hero-scroll-line" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </a>
    </section>
  )
}
