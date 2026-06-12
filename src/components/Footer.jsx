import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <>
      <div className="giant">PAU LARREA</div>
      <div className="foot-meta">
        <span>{t('footer_copy')}</span>
        <span>{t('footer_role')}</span>
        <span>{t('footer_tag')}</span>
      </div>
    </>
  )
}
