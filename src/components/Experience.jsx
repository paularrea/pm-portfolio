import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

const rows = [
  { when: '2022 — present', role: 'xp1_role', org: 'xp1_org', desc: 'xp1_desc', meta: ['Jira · Confluence · Figma', 'Claude · GitHub · Slack'] },
  { when: '2020 — 2022', role: 'xp2_role', org: 'xp2_org', desc: 'xp2_desc', meta: ['React · JavaScript', 'Figma · CMS platforms'] },
  { when: 'Education', role: 'xp3_role', org: 'xp3_org', desc: 'xp3_desc', meta: ['ES · CA — native', 'EN — full professional'] },
]

export default function Experience() {
  const { t } = useTranslation()
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="eyebrow">Experience</div>
        <h2 className="sec-title">{t('exp_title')}</h2>
        <div className="xp-border">
          {rows.map((r) => (
            <Reveal className="xp-row" key={r.role + r.when}>
              <div className="xp-when">{r.when}</div>
              <div>
                <div className="xp-role">{t(r.role)}</div>
                <div className="xp-org">{t(r.org)}</div>
                <p className="xp-desc" dangerouslySetInnerHTML={{ __html: t(r.desc) }} />
              </div>
              <div className="xp-meta">
                {r.meta[0]}<br />{r.meta[1]}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
