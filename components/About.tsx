'use client'
import { useI18n } from '@/lib/i18n'
import FadeUp from './FadeUp'
import GuestFavBadge from './GuestFavBadge'

export default function About() {
  const { t } = useI18n()
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <FadeUp>
            <div className="section-label">{t('about_label')}</div>
            <h2 className="section-title">{t('about_title')}</h2>
            <p className="section-desc" style={{ marginBottom: 20 }}>{t('about_p1')}</p>
            <p className="section-desc">{t('about_p2')}</p>
            <div className="guest-fav">
              <div className="guest-fav-badge"><GuestFavBadge /></div>
              <div className="guest-fav-text">
                {t('guest_fav_pre')}<strong>Guest Favourites</strong>{t('guest_fav_post')}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={1}>
            <div className="about-card">
              <div className="about-card-border"></div>
              <div className="about-card-title">{t('card_title')}</div>
              <div className="about-card-sub">{t('card_sub')}</div>
              {([
                { icon: '🔑', cls: 'pi-copper', title: 'p1_title', text: 'p1_text' },
                { icon: '💬', cls: 'pi-slate', title: 'p2_title', text: 'p2_text' },
                { icon: '✨', cls: 'pi-sage', title: 'p3_title', text: 'p3_text' },
                { icon: '📍', cls: 'pi-chiapas', title: 'p4_title', text: 'p4_text' },
              ] as const).map((item) => (
                <div className="promise-item" key={item.title}>
                  <div className={`promise-icon ${item.cls}`}>{item.icon}</div>
                  <div className="promise-text">
                    <strong>{t(item.title)}</strong>
                    <span>{t(item.text)}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
