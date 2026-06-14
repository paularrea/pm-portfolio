import { useTranslation } from 'react-i18next'
import { HeroBathy } from './Bathymetry'
import useSectionNav from '../useSectionNav'
import profile from '../assets/profile.jpg'

export default function Hero() {
  const { t } = useTranslation()
  const go = useSectionNav()

  return (
    <header className="hero">
      <HeroBathy />
      <div className="hero-in">
        <div className="hero-top">
          <p className="hero-intro" dangerouslySetInnerHTML={{ __html: t('hero_intro') }} />
          <div className="hero-photo">
            <img src={profile} alt="Pau Larrea" />
          </div>
        </div>
        <h1 className="hero-name">
          <span className="nl">Pau</span>
          <span className="nl">Larrea<em>.</em></span>
        </h1>
        <div className="hero-foot">
          <div className="hero-role" dangerouslySetInnerHTML={{ __html: t('hero_role') }} />
          <div className="hero-ctas">
            <a className="btn solid" onClick={go('work')}>{t('nav_work')}</a>
            <a className="btn" href="mailto:paularrea12@gmail.com">{t('btn_email')}</a>
          </div>
        </div>
      </div>
    </header>
  )
}
