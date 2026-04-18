'use client'
import { useI18n } from '@/lib/i18n'
import FadeUp from './FadeUp'

export default function Channels() {
  const { t } = useI18n()
  return (
    <FadeUp className="channels">
      <div className="channels-inner">
        <div className="channels-label">
          <span className="channels-label-line" aria-hidden="true" />
          <span>{t('channels_label')}</span>
          <span className="channels-label-line" aria-hidden="true" />
        </div>
        <div className="channels-logos">
          <div className="channel-logo">airbnb</div>
          <span className="channel-sep" aria-hidden="true">·</span>
          <div className="channel-logo">Booking<span>.com</span></div>
          <span className="channel-sep" aria-hidden="true">·</span>
          <div className="channel-logo">VRBO</div>
          <span className="channel-sep" aria-hidden="true">·</span>
          <div className="channel-logo">HomeExchange</div>
          <span className="channel-sep" aria-hidden="true">·</span>
          <div className="channel-logo">marimbashome<span>.com</span></div>
        </div>
      </div>
    </FadeUp>
  )
}
