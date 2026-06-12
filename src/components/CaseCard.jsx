import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Link styled as the reveal-on-scroll case card.
export default function CaseCard({ to, num, title, desc, tags, children }) {
  const { t } = useTranslation()
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setShown(true)
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Link ref={ref} to={to} className={`case-card reveal${shown ? ' in' : ''}`}>
      <div className="cc-visual">{children}</div>
      <div className="cc-body">
        <div className="cc-num">{t(num)}</div>
        <div className="cc-title">{t(title)}</div>
        <p className="cc-desc">{t(desc)}</p>
        <div className="cc-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="cc-go">{t('read')} →</span>
      </div>
    </Link>
  )
}
