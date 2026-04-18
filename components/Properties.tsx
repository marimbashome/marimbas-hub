'use client'
import { useI18n } from '@/lib/i18n'
import FadeUp from './FadeUp'
import ArrowIcon from './ArrowIcon'

export default function Properties() {
  const { t } = useI18n()
  return (
    <section className="section properties" id="properties">
      <div className="section-inner">
        <FadeUp>
          <div className="section-label">{t('dest_label')}</div>
          <h2 className="section-title">{t('dest_title')}</h2>
          <p className="section-desc">{t('dest_desc')}</p>
        </FadeUp>
        <div className="prop-grid">
          <FadeUp delay={1}>
            <a href="https://book.marimbashome.com" className="prop-zone" data-zone="cdmx">
              <div className="prop-zone-image" aria-hidden="true" style={{ backgroundImage: 'url(/images/cdmx.jpg)' }} />
              <div className="prop-zone-gradient" aria-hidden="true" />
              <div className="prop-zone-inner">
                <div className="prop-zone-pin">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>México</span>
                </div>
                <div className="prop-zone-name">{t('cdmx_name')}</div>
                <div className="prop-zone-desc">{t('cdmx_desc')}</div>
                <div className="prop-highlights">
                  <span className="prop-tag">La Condesa</span>
                  <span className="prop-tag">Lofts &amp; Studios</span>
                  <span className="prop-tag">{t('tag_pet_friendly')}</span>
                  <span className="prop-tag">{t('tag_wifi')}</span>
                </div>
                <div className="prop-stats">
                  <div className="prop-stat"><div className="prop-stat-num">4+</div><div className="prop-stat-label">{t('stat_spaces')}</div></div>
                  <div className="prop-stat"><div className="prop-stat-num">2–4</div><div className="prop-stat-label">{t('stat_guests')}</div></div>
                  <div className="prop-stat"><div className="prop-stat-num">$800+</div><div className="prop-stat-label">{t('stat_per_night')}</div></div>
                </div>
                <span className="prop-zone-cta">
                  {t('hero_btn1')} <ArrowIcon />
                </span>
              </div>
            </a>
          </FadeUp>
          <FadeUp delay={2}>
            <a href="https://book.marimbashome.com" className="prop-zone" data-zone="chiapas">
              <div className="prop-zone-image" aria-hidden="true" style={{ backgroundImage: 'url(/images/chiapas.jpg)' }} />
              <div className="prop-zone-gradient" aria-hidden="true" />
              <div className="prop-zone-inner">
                <div className="prop-zone-pin">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Chiapas</span>
                </div>
                <div className="prop-zone-name">{t('chiapas_name')}</div>
                <div className="prop-zone-desc">{t('chiapas_desc')}</div>
                <div className="prop-highlights">
                  <span className="prop-tag">Tuxtla Gutiérrez</span>
                  <span className="prop-tag">Berriozábal</span>
                  <span className="prop-tag">Coita</span>
                  <span className="prop-tag">{t('tag_casas')}</span>
                  <span className="prop-tag">{t('tag_jardin')}</span>
                </div>
                <div className="prop-stats">
                  <div className="prop-stat"><div className="prop-stat-num">20+</div><div className="prop-stat-label">{t('stat_spaces')}</div></div>
                  <div className="prop-stat"><div className="prop-stat-num">2–8</div><div className="prop-stat-label">{t('stat_guests')}</div></div>
                  <div className="prop-stat"><div className="prop-stat-num">$210+</div><div className="prop-stat-label">{t('stat_per_night')}</div></div>
                </div>
                <span className="prop-zone-cta">
                  {t('hero_btn1')} <ArrowIcon />
                </span>
              </div>
            </a>
          </FadeUp>
        </div>
        <FadeUp>
          <div style={{ textAlign: 'center' as const, marginTop: 56 }}>
            <a href="https://book.marimbashome.com" className="btn btn-copper" style={{ fontSize: 16, padding: '16px 40px' }}>
              {t('dest_btn')} <ArrowIcon />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
