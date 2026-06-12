import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CaseBathy } from '../components/Bathymetry'
import Backbar from '../components/Backbar'
import Reveal from '../components/Reveal'

const html = (t, key) => ({ dangerouslySetInnerHTML: { __html: t(key) } })

export default function FormsCase() {
  const { t } = useTranslation()
  return (
    <main>
      <Backbar nextTo="/work/ecommerce" nextLabel={t('fm.back_next')} />

      <header className="cs-hero">
        <CaseBathy drift="drift2" />
        <div className="wrap">
          <div className="cs-kicker"><span className="dot"></span>{t('fm.kicker')}</div>
          <h1 className="cs-title">{t('fm.title')}</h1>
          <p className="cs-lede">{t('fm.lede')}</p>
          <div className="meta-grid">
            <div className="meta-cell"><div className="lbl">{t('fm.meta_role_l')}</div><b>{t('fm.meta_role_v')}</b></div>
            <div className="meta-cell"><div className="lbl">{t('fm.meta_time_l')}</div><b>{t('fm.meta_time_v')}</b></div>
            <div className="meta-cell"><div className="lbl">{t('fm.meta_status_l')}</div><b>{t('fm.meta_status_v')}</b></div>
            <div className="meta-cell"><div className="lbl">{t('fm.meta_derisk_l')}</div><b>{t('fm.meta_derisk_v')}</b></div>
          </div>
        </div>
      </header>

      <section className="cs-section">
        <div className="wrap">
          <div className="eyebrow">{t('fm.s1_eyebrow')}</div>
          <h2 className="cs-h" style={{ maxWidth: '24ch' }} {...html(t, 'fm.s1_h')} />
          <div className="cs-body">
            <p>{t('fm.s1_p1')}</p>
            <p>{t('fm.s1_p2')}</p>
            <p {...html(t, 'fm.s1_p3')} />
          </div>
          <div className="merge">
            <div>
              <Reveal className="merge-prob"><div className="lbl">{t('fm.probA_l')}</div><b>{t('fm.probA_b')}</b><p>{t('fm.probA_p')}</p></Reveal>
              <Reveal className="merge-prob"><div className="lbl">{t('fm.probB_l')}</div><b>{t('fm.probB_b')}</b><p>{t('fm.probB_p')}</p></Reveal>
            </div>
            <div className="merge-arrow">→</div>
            <Reveal className="merge-result"><div className="lbl">{t('fm.result_l')}</div><b>{t('fm.result_b')}</b><p>{t('fm.result_p')}</p></Reveal>
          </div>
          <Reveal className="callout" style={{ marginTop: '28px' }}>
            <div className="lbl">{t('fm.callout1_l')}</div>
            <p>{t('fm.callout1_p')}</p>
          </Reveal>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="eyebrow">{t('fm.s2_eyebrow')}</div>
          <h2 className="cs-h">{t('fm.s2_h')}</h2>
          <div className="cs-body"><p {...html(t, 'fm.s2_intro')} /></div>
          <div className="cs-body" style={{ marginTop: '20px' }}><p>{t('fm.s2_after')}</p></div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="eyebrow">{t('fm.s3_eyebrow')}</div>
          <h2 className="cs-h">{t('fm.s3_h')}</h2>
          <p className="cs-body">{t('fm.s3_body')}</p>
          <div className="adr-grid">
            <Reveal className="adr"><div className="lbl">ADR-1</div><b>{t('fm.adr1_b')}</b><ul><li>{t('fm.adr1_o1')}</li><li className="pick">{t('fm.adr1_o2')}</li><li>{t('fm.adr1_o3')}</li><li>{t('fm.adr1_o4')}</li></ul><div className="trade" {...html(t, 'fm.adr1_trade')} /></Reveal>
            <Reveal className="adr"><div className="lbl">ADR-2</div><b>{t('fm.adr2_b')}</b><ul><li>{t('fm.adr2_o1')}</li><li className="pick">{t('fm.adr2_o2')}</li><li>{t('fm.adr2_o3')}</li></ul><div className="trade" {...html(t, 'fm.adr2_trade')} /></Reveal>
            <Reveal className="adr"><div className="lbl">ADR-3</div><b>{t('fm.adr3_b')}</b><ul><li>{t('fm.adr3_o1')}</li><li>{t('fm.adr3_o2')}</li><li className="pick">{t('fm.adr3_o3')}</li></ul><div className="trade" {...html(t, 'fm.adr3_trade')} /></Reveal>
          </div>
          <Reveal className="callout" style={{ marginTop: '28px' }}>
            <div className="lbl">{t('fm.callout_data_l')}</div>
            <p {...html(t, 'fm.callout_data_p')} />
          </Reveal>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="eyebrow">{t('fm.s5_eyebrow')}</div>
          <h2 className="cs-h">{t('fm.s5_h')}</h2>
          <Reveal className="phase"><div><div className="ph-v">v1</div><span className="ph-st">{t('fm.ph1_st')}</span></div><div><b>{t('fm.ph1_b')}</b><p>{t('fm.ph1_p')}</p></div></Reveal>
          <Reveal className="phase"><div><div className="ph-v">v2</div><span className="ph-st">{t('fm.ph2_st')}</span></div><div><b>{t('fm.ph2_b')}</b><p>{t('fm.ph2_p')}</p></div></Reveal>
          <Reveal className="phase"><div><div className="ph-v">v3</div><span className="ph-st">{t('fm.ph3_st')}</span></div><div><b>{t('fm.ph3_b')}</b><p>{t('fm.ph3_p')}</p></div></Reveal>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <Reveal className="honesty">
            <div className="lbl">{t('fm.s7_l')}</div>
            <ul>
              <li {...html(t, 'fm.s7_li1')} />
              <li {...html(t, 'fm.s7_li2')} />
              <li {...html(t, 'fm.s7_li3')} />
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="next-case"><div className="wrap"><Link to="/work/ecommerce"><div className="nc-lbl">{t('fm.next_lbl')}</div><div className="nx">{t('fm.next_nx')}</div></Link></div></div>
    </main>
  )
}
