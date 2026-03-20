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
          <li><a href="https://book.marimbashome.com">{t('footer_book')}</a></li>
          <li><a href="https://guestapp.marimbashome.com">{t('footer_checkin')}</a></li>
          <li><a href="https://minibar.marimbashome.com">{t('footer_minibar')}</a></li>
          <li><a href="mailto:reservas@marimbashome.com">{t('footer_contact')}</a></li>
        </ul>
      </div>
      <div className="footer-bottom">{t('footer_copy')}</div>
    </footer>
  )
}
