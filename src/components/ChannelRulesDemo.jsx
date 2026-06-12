import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const initial = {
  'pos-show': true,
  'pos-req': false,
  'ecom-show': true,
  'ecom-req': true,
  'em-pos-show': true,
  'em-pos-req': false,
}

function Toggle({ on, locked, disabled, onClick }) {
  return (
    <button
      className={`tgl${on ? ' on' : ''}${locked ? ' locked' : ''}`}
      aria-label="Toggle"
      aria-disabled={disabled || undefined}
      onClick={onClick}
    />
  )
}

export default function ChannelRulesDemo() {
  const { t } = useTranslation()
  const [state, setState] = useState(initial)
  const [note, setNote] = useState(null)

  const isOn = (k) => state[k]

  // Rule 1: turning Show OFF forces Required OFF in the same channel.
  const handleShow = (showKey, reqKey, ch) => {
    const next = !state[showKey]
    setState((s) => {
      const updated = { ...s, [showKey]: next }
      if (!next) updated[reqKey] = false
      return updated
    })
    if (!next && state[reqKey]) {
      setNote(t('fm.demo_rule1', { ch }))
    } else {
      setNote(next ? t('fm.demo_visible', { ch }) : t('fm.demo_hidden', { ch }))
    }
  }

  const handleReq = (showKey, reqKey, ch) => {
    if (!state[showKey]) {
      setNote(t('fm.demo_blocked', { ch }))
      return
    }
    const next = !state[reqKey]
    setState((s) => ({ ...s, [reqKey]: next }))
    setNote(next ? t('fm.demo_required', { ch }) : t('fm.demo_optional', { ch }))
  }

  // Rule 2: baseline billing fields are platform-locked in eCommerce.
  const handleLocked = () => {
    setNote(t('fm.demo_rule2'))
  }

  return (
    <div className="demo reveal in">
      <div className="demo-head">
        <div className="lbl">{t('fm.demo_lbl')}</div>
        <span>{t('fm.demo_head')}</span>
      </div>
      <div className="demo-body">
        <div className="demo-field">
          <h4>{t('fm.demo_f1_h')}</h4>
          <div className="f-sub">{t('fm.demo_f1_sub')}</div>
          <div className="tgl-row">
            <span>{t('fm.demo_show_pos')}</span>
            <Toggle on={isOn('pos-show')} onClick={() => handleShow('pos-show', 'pos-req', 'POS')} />
          </div>
          <div className="tgl-row">
            <span>{t('fm.demo_req_pos')}</span>
            <Toggle on={isOn('pos-req')} locked={!isOn('pos-show')} onClick={() => handleReq('pos-show', 'pos-req', 'POS')} />
          </div>
          <div className="tgl-row">
            <span>{t('fm.demo_show_ecom')}</span>
            <Toggle on={isOn('ecom-show')} onClick={() => handleShow('ecom-show', 'ecom-req', 'eCommerce')} />
          </div>
          <div className="tgl-row">
            <span>{t('fm.demo_req_ecom')}</span>
            <Toggle on={isOn('ecom-req')} locked={!isOn('ecom-show')} onClick={() => handleReq('ecom-show', 'ecom-req', 'eCommerce')} />
          </div>
        </div>
        <div className="demo-field">
          <h4>{t('fm.demo_f2_h')}</h4>
          <div className="f-sub">{t('fm.demo_f2_sub')}</div>
          <div className="tgl-row">
            <span>{t('fm.demo_show_ecom')} <span className="lockico">{t('fm.demo_locked')}</span></span>
            <Toggle on locked disabled onClick={handleLocked} />
          </div>
          <div className="tgl-row">
            <span>{t('fm.demo_req_ecom')} <span className="lockico">{t('fm.demo_locked')}</span></span>
            <Toggle on locked disabled onClick={handleLocked} />
          </div>
          <div className="tgl-row">
            <span>{t('fm.demo_show_pos')}</span>
            <Toggle on={isOn('em-pos-show')} onClick={() => handleShow('em-pos-show', 'em-pos-req', 'POS')} />
          </div>
          <div className="tgl-row">
            <span>{t('fm.demo_req_pos')}</span>
            <Toggle on={isOn('em-pos-req')} locked={!isOn('em-pos-show')} onClick={() => handleReq('em-pos-show', 'em-pos-req', 'POS')} />
          </div>
        </div>
        <div className="demo-note" dangerouslySetInnerHTML={{ __html: note ?? t('fm.demo_note_default') }} />
      </div>
    </div>
  )
}
