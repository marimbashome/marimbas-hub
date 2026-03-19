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
              <div className="exp-icon" style={{ background: 'rgba(198,123,92,0.1)' }}>📱</div>
              <h3>{t('exp1_h')}</h3>
              <p>{t('exp1_p')}</p>
              <a href="https://guestapp.marimbashome.com" className="exp-link">
                {t('exp1_link')} <ArrowIcon />
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="exp-card" data-c="slate">
              <div className="exp-icon" style={{ background: 'rgba(74,111,165,0.1)' }}>🍷</div>
              <h3>{t('exp2_h')}</h3>
              <p>{t('exp2_p')}</p>
              <a href="https://minibar.marimbashome.com" className="exp-link">
                {t('exp2_link')} <ArrowIcon />
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={3}>
            <div className="exp-card" data-c="sage">
              <div className="exp-icon" style={{ background: 'rgba(150,206,180,0.15)' }}>🛎️</div>
              <h3>{t('exp3_h')}</h3>
              <p>{t('exp3_p')}</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
