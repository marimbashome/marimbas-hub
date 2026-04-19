'use client'
import { useI18n } from '@/lib/i18n'
import FadeUp from './FadeUp'
import ArrowIcon from './ArrowIcon'

const products = [
  { icon: '📱', bg: 'rgba(198,123,92,0.15)', img: '/images/prod-guestapp.jpg', live: true, title: 'ga_title', forL: 'ga_for', desc: 'ga_p', btn: 'ga_btn', href: 'https://guestapp.marimbashome.com', tags: ['Check-in digital','Verificación ID','Guía de llegada','Multi-idioma'] },
  { icon: '🍷', bg: 'rgba(74,111,165,0.15)', img: '/images/prod-minibar.jpg', live: true, title: 'mb_title', forL: 'mb_for', desc: 'mb_p', btn: 'mb_btn', href: 'https://minibar.marimbashome.com', tags: ['Catálogo personalizable','Pedidos en tiempo real','Multi-pago'] },
  { icon: '📊', bg: 'rgba(150,206,180,0.15)', img: '/images/prod-dashboard.jpg', live: false, title: 'ad_title', forL: 'ad_for', desc: 'ad_p', btn: 'ad_btn', href: 'mailto:enrique.miceli@gmail.com?subject=Admin%20Dashboard', tags: ['Revenue en tiempo real','Reportes financieros','Multi-canal'] },
  { icon: '🧹', bg: 'rgba(61,107,53,0.15)', img: '/images/prod-cleanbot.jpg', live: false, title: 'cb_title', forL: 'cb_for', desc: 'cb_p', btn: 'cb_btn', href: 'mailto:enrique.miceli@gmail.com?subject=CleanBot', tags: ['WhatsApp nativo','Asignación automática','Multi-propiedad'] },
]

export default function Products() {
  const { t } = useI18n()
  return (
    <section className="section products" id="tech">
      <div className="section-inner">
        <FadeUp className="products-intro">
          <div>
            <div className="section-label">{t('prod_label')}</div>
            <h2 className="section-title">{t('prod_title')}</h2>
          </div>
          <div className="products-intro-right" dangerouslySetInnerHTML={{ __html: t('prod_intro') }} />
        </FadeUp>
        <div className="prod-grid">
          {products.map((p, i) => (
            <FadeUp key={p.title} delay={i + 1}>
              <div className="prod-card">
                <div className="prod-image" style={{ backgroundImage: `url(${p.img})` }} aria-hidden="true">
                  <div className="prod-image-gradient" />
                  <div className="prod-image-icon" style={{ background: p.bg }}>{p.icon}</div>
                  <span className={`prod-image-badge ${p.live ? 'badge-live' : 'badge-soon'}`}>{t(p.live ? 'badge_live' : 'badge_soon')}</span>
                </div>
                <div className="prod-body">
                  <h3>{t(p.title)}</h3>
                  <div className="prod-for">{t(p.forL)}</div>
                  <p>{t(p.desc)}</p>
                  <div className="prod-tags">{p.tags.map(tag => <span className="prod-tag" key={tag}>{tag}</span>)}</div>
                  <a href={p.href} className={`prod-cta ${p.live ? 'btn-white' : 'btn-outline-light'}`}>
                    {t(p.btn)} {p.live && <ArrowIcon />}
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="products-bottom">
          <p><strong>{t('prod_bottom_pre')}</strong>{t('prod_bottom_post')}</p>
          <a href="https://propietarios.marimbashome.com" className="btn btn-white">
            {t('prod_bottom_btn')} <ArrowIcon />
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
