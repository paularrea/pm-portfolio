import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CaseBathy } from '../components/Bathymetry'
import Backbar from '../components/Backbar'
import Reveal from '../components/Reveal'

const html = (t, key) => ({ dangerouslySetInnerHTML: { __html: t(key) } })

export default function EcommerceCase() {
  const { t } = useTranslation()
  return (
    <main>
      <Backbar nextTo="/work/forms" nextLabel={t('ec.back_next')} />

      <header className="cs-hero">
        <CaseBathy drift="drift" />
        <div className="wrap">
          <div className="cs-kicker"><span className="dot"></span>{t('ec.kicker')}</div>
          <h1 className="cs-title">{t('ec.title')}</h1>
          <p className="cs-lede">{t('ec.lede')}</p>
          <div className="meta-grid">
            <div className="meta-cell"><div className="lbl">{t('ec.meta_role_l')}</div><b>{t('ec.meta_role_v')}</b></div>
            <div className="meta-cell"><div className="lbl">{t('ec.meta_time_l')}</div><b>{t('ec.meta_time_v')}</b></div>
            <div className="meta-cell"><div className="lbl">{t('ec.meta_team_l')}</div><b>{t('ec.meta_team_v')}</b></div>
            <div className="meta-cell"><div className="lbl">{t('ec.meta_stack_l')}</div><b>{t('ec.meta_stack_v')}</b></div>
          </div>
        </div>
      </header>

      <section className="cs-section">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">{t('ec.s1_eyebrow')}</div>
            <h2 className="cs-h">{t('ec.s1_h')}</h2>
          </div>
          <div className="cs-body">
            <p {...html(t, 'ec.s1_p1')} />
            <p {...html(t, 'ec.s1_p2')} />
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="eyebrow">{t('ec.s2_eyebrow')}</div>
          <h2 className="cs-h">{t('ec.s2_h')}</h2>
          <p className="cs-body">{t('ec.s2_body')}</p>
          <div className="stat-grid">
            <Reveal className="stat"><b>24<sup>+</sup></b><span>{t('ec.stat1_s')}</span></Reveal>
            <Reveal className="stat"><b>5</b><span>{t('ec.stat2_s')}</span></Reveal>
            <Reveal className="stat"><b>250<sup>+</sup></b><span>{t('ec.stat3_s')}</span></Reveal>
            <Reveal className="stat"><b>1</b><span>{t('ec.stat4_s')}</span></Reveal>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="eyebrow">{t('ec.s3_eyebrow')}</div>
          <h2 className="cs-h">{t('ec.s3_h')}</h2>
          <Reveal className="tl">
            <div className="tl-row"><div className="tl-q">Q4 2025</div><div className="tl-v">v0</div><div className="tl-s" {...html(t, 'ec.tl1_s')} /></div>
            <div className="tl-row"><div className="tl-q">Q1 2026</div><div className="tl-v">v1</div><div className="tl-s" {...html(t, 'ec.tl2_s')} /></div>
            <div className="tl-row"><div className="tl-q">Q1 2026</div><div className="tl-v">v2</div><div className="tl-s" {...html(t, 'ec.tl3_s')} /></div>
            <div className="tl-row"><div className="tl-q">Q2 2026</div><div className="tl-v">v3</div><div className="tl-s" {...html(t, 'ec.tl4_s')} /></div>
            <div className="tl-row"><div className="tl-q">Q2 2026</div><div className="tl-v">v4 · Launch</div><div className="tl-s" {...html(t, 'ec.tl5_s')} /></div>
          </Reveal>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="eyebrow">{t('ec.s4_eyebrow')}</div>
          <h2 className="cs-h">{t('ec.s4_h')}</h2>
          <div className="cs-body"><p>{t('ec.s4_intro')}</p></div>

          <Reveal className="callout">
            <div className="lbl">{t('ec.c1_l')}</div>
            <p>{t('ec.c1_p')}</p>
          </Reveal>

          <Reveal className="callout">
            <div className="lbl">{t('ec.c3_l')}</div>
            <p>{t('ec.c3_p')}</p>
          </Reveal>
          <Reveal className="quote" {...html(t, 'ec.quote')} />
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <div className="eyebrow">{t('ec.s5_eyebrow')}</div>
          <h2 className="cs-h">{t('ec.s5_h')}</h2>
          <p className="cs-body">{t('ec.s5_body')}</p>
          <div className="loop">
            <Reveal className="loop-step"><div className="lbl">Step 1</div><b>{t('ec.loop1_b')}</b><p>{t('ec.loop1_p')}</p></Reveal>
            <Reveal className="loop-step"><div className="lbl">Step 2</div><b>{t('ec.loop2_b')}</b><p>{t('ec.loop2_p')}</p></Reveal>
            <Reveal className="loop-step"><div className="lbl">Step 3</div><b>{t('ec.loop3_b')}</b><p>{t('ec.loop3_p')}</p></Reveal>
            <Reveal className="loop-step"><div className="lbl">Step 4</div><b>{t('ec.loop4_b')}</b><p>{t('ec.loop4_p')}</p></Reveal>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">{t('ec.s6_eyebrow')}</div>
            <h2 className="cs-h">{t('ec.s6_h')}</h2>
          </div>
          <div className="cs-body">
            <p>{t('ec.s6_p1')}</p>
            <p {...html(t, 'ec.s6_p2')} />
            <p>{t('ec.s6_p3')}</p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          <Reveal className="honesty">
            <div className="lbl">{t('ec.s7_l')}</div>
            <ul>
              <li {...html(t, 'ec.s7_li1')} />
              <li {...html(t, 'ec.s7_li2')} />
              <li {...html(t, 'ec.s7_li3')} />
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="next-case"><div className="wrap"><Link to="/work/forms"><div className="nc-lbl">{t('ec.next_lbl')}</div><div className="nx">{t('ec.next_nx')}</div></Link></div></div>
    </main>
  )
}
