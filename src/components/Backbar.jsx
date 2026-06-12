import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useSectionNav from '../useSectionNav'

export default function Backbar({ nextTo, nextLabel }) {
  const { t } = useTranslation()
  const go = useSectionNav()
  return (
    <div className="backbar">
      <div className="wrap">
        <a onClick={go('work')}>{t('back_all')}</a>
        <Link to={nextTo}>{nextLabel} →</Link>
      </div>
    </div>
  )
}
