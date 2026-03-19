'use client'
import { useI18n } from '@/lib/i18n'
import FadeUp from './FadeUp'
import ArrowIcon from './ArrowIcon'

const benefits = [
  { title: 'own1_title', text: 'own1_text' },
  { title: 'own2_title', text: 'own2_text' },
  { title: 'own3_title', text: 'own3_text' },
  { title: 'own4_title', text: 'own4_text' },
]

export default function Owners() {
  const { t } = useI18n()
  return (
    <section className="owners" id="owners">
      <div className="owners-inner">
        <FadeUp className="owners-grid">
          <div>
            <div className="section-label" style={{ color: 'var(--chiapas)' }}>{t('own_label')}</div>
            <h2>{t('own_title')}</h2>
            <p className="section-desc" style={{ marginBottom: 32 }}>{t('own_desc')}</p>
            <a href="mailto:enrique.miceli@gmail.com" className="btn btn-slate">
              {t('own_btn')} <ArrowIcon />
            </a>
          </div>
          <div>
            {benefits.map((b) => (
              <div className="owner-benefit" key={b.title}>
                <div className="owner-check">✓</div>
                <div className="owner-text">
                  <strong>{t(b.title)}</strong>{t(b.text)}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
