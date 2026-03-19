'use client'
import { useI18n } from '@/lib/i18n'
import LogoIcon from './LogoIcon'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <LogoIcon size={28} />
            <span className="footer-brand-text">Marimbas Home</span>
          </div>
          <div className="footer-sub">{t('footer_sub')}</div>
        </div>
        <ul className="footer-links">
          <li><a href="https://book.marimbashome.com">Reservar</a></li>
          <li><a href="https://guestapp.marimbashome.com">Check-in</a></li>
          <li><a href="https://minibar.marimbashome.com">Minibar</a></li>
          <li><a href="mailto:enrique.miceli@gmail.com">Contacto</a></li>
        </ul>
      </div>
      <div className="footer-bottom">© 2015–2026 Marimbas Home. Todos los derechos reservados.</div>
    </footer>
  )
}
