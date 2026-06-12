import { useTranslation } from 'react-i18next'
import Footer from './Footer'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="eyebrow">Contact</div>
        <h2><span>{t('contact_title')}</span></h2>
        <p className="c-sub">{t('contact_sub')}</p>
        <a className="c-mail" href="mailto:paularrea12@gmail.com">paularrea12@gmail.com</a>
        <div className="c-actions">
          <a className="btn accent" href="https://www.linkedin.com/in/pau-larrea" target="_blank" rel="noopener">{t('btn_li')}</a>
          <a className="btn" href="mailto:paularrea12@gmail.com">{t('btn_email')}</a>
          <a className="btn" href="/pau_larrea_cv.pdf" download>{t('btn_cv')}</a>
        </div>
        <Footer />
      </div>
    </section>
  )
}
