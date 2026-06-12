import { useTranslation } from 'react-i18next'

const items = [
  { icon: '⬡', title: 'str1_title', body: 'str1_p' },
  { icon: '⌥', title: 'str2_title', body: 'str2_p' },
  { icon: '◈', title: 'str3_title', body: 'str3_p' },
  { icon: '✦', title: 'str4_title', body: 'str4_p' },
]

export default function StrengthsStrip() {
  const { t } = useTranslation()
  return (
    <div className="strengths">
      <div className="str-in">
        {items.map((it) => (
          <div className="str-item" key={it.title}>
            <div className="str-icon">{it.icon}</div>
            <b>{t(it.title)}</b>
            <p>{t(it.body)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
