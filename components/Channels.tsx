'use client'
import { useI18n } from '@/lib/i18n'
import FadeUp from './FadeUp'

export default function Channels() {
  const { t } = useI18n()
  return (
    <FadeUp className="channels">
      <div className="channels-inner">
        <div className="channels-label">{t('channels_label')}</div>
        <div className="channels-logos">
          <div className="channel-logo">airbnb</div>
          <div className="channel-logo">Booking<span>.com</span></div>
          <div className="channel-logo">VRBO</div>
          <div className="channel-logo">HomeExchange</div>
          <div className="channel-logo">marimbashome<span>.com</span></div>
        </div>
      </div>
    </FadeUp>
  )
}
