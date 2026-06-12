import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

const pillars = [
  { ix: 'A', title: 'p1_title', body: 'p1_body', proof: 'p1_proof' },
  { ix: 'B', title: 'p2_title', body: 'p2_body', proof: 'p2_proof' },
  { ix: 'C', title: 'p3_title', body: 'p3_body', proof: 'p3_proof' },
]

export default function HowIWork() {
  const { t } = useTranslation()
  return (
    <section className="section" id="approach">
      <div className="wrap">
        <div className="eyebrow">How I work</div>
        <h2 className="sec-title">{t('how_title')}</h2>
        <p className="sec-sub">{t('how_sub')}</p>
        <div className="pillars">
          {pillars.map((p) => (
            <Reveal className="pillar" key={p.ix}>
              <div className="p-ix">{p.ix}</div>
              <h3>{t(p.title)}</h3>
              <p>{t(p.body)}</p>
              <div className="p-proof">{t(p.proof)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
