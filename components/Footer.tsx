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
          <li>
            <a href="https://www.instagram.com/marimbashome" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:'6px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @marimbashome
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">{t('footer_copy')}</div>
    </footer>
  )
}
