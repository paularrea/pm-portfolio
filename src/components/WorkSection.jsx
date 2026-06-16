import { useTranslation } from 'react-i18next'
import CaseCard from './CaseCard'

function EcommerceWireframe() {
  return (
    <div className="wf-wrap">
      <div className="bw-badge"><i></i>ECOMMERCE BOOKING WIDGET</div>
      <div className="wf">
        <div className="wf-bar">
          <div className="wf-dot"></div><div className="wf-dot"></div><div className="wf-dot"></div>
          <div className="wf-url">yourschool.com — embedded</div>
        </div>
        <div className="wf-body">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--slate)', letterSpacing: '.08em', marginBottom: '8px', textTransform: 'uppercase' }}>Browse catalog</div>
          <div className="wf-cats">
            <div className="wf-cat hl"><div className="sk"></div></div>
            <div className="wf-cat"><div className="sk"></div></div>
            <div className="wf-cat"><div className="sk"></div></div>
            <div className="wf-cat"><div className="sk"></div></div>
          </div>
          <div className="wf-prod">
            <div className="wf-thumb"></div>
            <div className="wf-pdesc">
              <div className="sk" style={{ height: '9px', width: '75%' }}></div>
              <div className="sk" style={{ height: '7px', width: '55%' }}></div>
              <div className="wf-price">30,00 €</div>
            </div>
          </div>
          <div className="wf-counter"><span>−</span><b>2 pax</b><span>+</span></div>
          <div className="wf-cal">
            <div className="wf-cal-head"><span>April 2025</span><span>◂ ▸</span></div>
            <div className="wf-days">
              <div className="wf-day na">28</div><div className="wf-day na">29</div><div className="wf-day na">30</div>
              <div className="wf-day">1</div><div className="wf-day avail">2</div><div className="wf-day">3</div><div className="wf-day">4</div>
              <div className="wf-day avail">7</div><div className="wf-day avail">8</div><div className="wf-day sel">9</div><div className="wf-day avail">10</div><div className="wf-day avail">11</div>
            </div>
          </div>
          <div className="wf-steps" style={{ marginBottom: '8px' }}>
            <div className="wf-step on"></div><div className="wf-step on"></div><div className="wf-step on"></div>
            <div className="wf-step"></div><div className="wf-step"></div><div className="wf-step"></div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--buoy)', letterSpacing: '.06em', marginBottom: '7px' }}>STEP 3 / 6 — PICK DATES &amp; SLOTS</div>
          <div className="wf-cta">SELECT DATES →</div>
        </div>
      </div>
    </div>
  )
}

function FormsWireframe() {
  return (
    <div className="fb-wrap">
      <div className="bw-badge"><i></i>FORMS APP</div>
      <div className="fb">
        <div className="fb-bar">
          <div className="fb-tab on">Builder</div>
          <div className="fb-tab">Preview</div>
          <div className="fb-tab">Logic</div>
        </div>
        <div className="fb-layout">
          <div className="fb-sidebar">
            <div className="lbl">Fields</div>
            <div className="fb-ftype"><i></i> Checkbox</div>
            <div className="fb-ftype"><i style={{ borderRadius: '99px' }}></i> Dropdown</div>
            <div className="fb-ftype"><i></i> Long Text</div>
            <div className="fb-ftype"><i></i> Yes/No</div>
            <div className="fb-ftype"><i></i> Signature</div>
            <div style={{ marginTop: '8px' }} className="lbl">Channel</div>
            <div className="fb-ftype" style={{ fontSize: '9px' }}>☑ Show POS</div>
            <div className="fb-ftype" style={{ fontSize: '9px' }}>☑ Show eCom</div>
            <div className="fb-ftype" style={{ fontSize: '9px' }}>☐ Req POS</div>
          </div>
          <div className="fb-canvas">
            <div className="fb-fname">Liability Waiver</div>
            <div className="fb-fdesc">v3 · immutable once signed</div>
            <div className="fb-field sel">
              <div className="flbl">First Name <span>REQUIRED ★</span></div>
              <div className="fb-input-mock"></div>
            </div>
            <div className="fb-field">
              <div className="flbl">Wetsuit Size</div>
              <div className="fb-input-mock"></div>
            </div>
            <div className="fb-field">
              <div className="flbl">I accept the terms <span>SIGN</span></div>
              <div className="fb-input-mock" style={{ background: 'var(--paper-2)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorkSection() {
  const { t } = useTranslation()
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="eyebrow">Selected work</div>
        <h2 className="sec-title">{t('work_title')}</h2>
        <p className="sec-sub">{t('work_sub')}</p>

        <CaseCard
          to="/work/ecommerce"
          num="card1_num"
          title="card1_title"
          desc="card1_desc"
          tags={['Sole PM', 'Ember → React', '6 types · 4 shipped', 'Q4 2025 – Q2 2026']}
        >
          <EcommerceWireframe />
        </CaseCard>

        <CaseCard
          to="/work/forms"
          num="card2_num"
          title="card2_title"
          desc="card2_desc"
          tags={['Platform thinking', '3 ADRs', '2023 – ongoing', 'POC-validated']}
        >
          <FormsWireframe />
        </CaseCard>
      </div>
    </section>
  )
}
