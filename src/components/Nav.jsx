import { useTranslation } from 'react-i18next'
import useSectionNav from '../useSectionNav'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const go = useSectionNav()

  return (
    <nav>
      <div className="nav-in">
        <a className="brand" onClick={go('home')}>
          <i></i>PAU LARREA
        </a>
        <div className="nav-links">
          <a className="sec-link" onClick={go('work')}>{t('nav_work')}</a>
          <a className="sec-link" onClick={go('approach')}>{t('nav_approach')}</a>
          <a className="sec-link" onClick={go('experience')}>{t('nav_exp')}</a>
          <a className="sec-link" onClick={go('contact')}>{t('nav_contact')}</a>
          <div className="lang-sw">
            <button
              className={`lang-btn${i18n.language === 'en' ? ' active' : ''}`}
              onClick={() => i18n.changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn${i18n.language === 'es' ? ' active' : ''}`}
              onClick={() => i18n.changeLanguage('es')}
            >
              ES
            </button>
          </div>
          <a className="btn" href="/pau_larrea_cv.pdf" download>{t('btn_cv')}</a>
        </div>
      </div>
    </nav>
  )
}
