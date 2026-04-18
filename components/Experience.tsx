'use client'
import { useI18n } from '@/lib/i18n'
import FadeUp from './FadeUp'
import ArrowIcon from './ArrowIcon'

export default function Experience() {
  const { t } = useI18n()
  return (
    <section className="section experience" id="experience">
      <div className="section-inner">
        <FadeUp>
          <div className="section-label">{t('exp_label')}</div>
          <h2 className="section-title">{t('exp_title')}</h2>
          <p className="section-desc">{t('exp_desc')}</p>
        </FadeUp>
        <div className="exp-grid">
          <FadeUp delay={1}>
            <div className="exp-card" data-c="copper">
              <div className="exp-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h3>{t('exp1_h')}</h3>
              <p>{t('exp1_p')}</p>
              <a href="https://guestapp.marimbashome.com" className="exp-link">
                {t('exp1_link')} <ArrowIcon />
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="exp-card" data-c="slate">
              <div className="exp-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 22h8"/><path d="M12 11v11"/><path d="M19 3H5l-1 8a8 8 0 0 0 16 0Z"/></svg>
              </div>
              <h3>{t('exp2_h')}</h3>
              <p>{t('exp2_p')}</p>
              <a href="https://minibar.marimbashome.com" className="exp-link">
                {t('exp2_link')} <ArrowIcon />
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={3}>
            <div className="exp-card" data-c="sage">
              <div className="exp-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V10l7-6 7 6v11"/><path d="M9 21v-6h6v6"/></svg>
              </div>
              <h3>{t('exp3_h')}</h3>
              <p>{t('exp3_p')}</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
