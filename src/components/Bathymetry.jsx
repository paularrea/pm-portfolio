// Bathymetric chart background for the hero — REAL Barcelona / Mediterranean
// depth contours from EMODnet Bathymetry 2022 (50–2000 m isobaths). The raw
// shapefile was clipped to the Barcelona box, projected (east→x, north→−y,
// map aspect preserved) and simplified into src/data/bathymetry.json. The BCN
// marker sits at Barcelona's real coordinate on the coast.
//
// On pointer devices each contour vertex is pushed radially away from the
// cursor within a falloff radius — closer points move more — eased every
// frame so the motion stays smooth and calm. Touch / reduced-motion get the
// static chart.

import { useEffect, useRef } from 'react'
import bathy from '../data/bathymetry.json'

// Smooth open path through points via Catmull-Rom → cubic bezier.
function smoothOpen(pts) {
  const n = pts.length
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`
  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[i - 1 < 0 ? 0 : i - 1]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2 > n - 1 ? n - 1 : i + 2]
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += `C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`
  }
  return d
}

// real isobaths (each: depth `e` in metres + projected viewBox points)
const CONTOURS = bathy.contours.map((c) => c.pts)
const DEPTHS = bathy.contours.map((c) => c.e)
const COAST = bathy.coast || [] // real OSM shoreline, same projection
const MARKER = bathy.bcn // Barcelona, snapped onto the real coastline
// every line is cursor-interactive; coast lines are the last COAST.length entries
const LINES = CONTOURS.concat(COAST)
const COAST_START = CONTOURS.length

// shallower isobaths read a touch stronger, deep ones fade — soft tonal ink
const opacityFor = (e) => (0.95 - 0.4 * Math.min(e / 2000, 1)).toFixed(3)

// --- component --------------------------------------------------------------

export function HeroBathy() {
  const svgRef = useRef(null)
  const driftRef = useRef(null)
  const pathRefs = useRef([])

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const pointerFine = window.matchMedia('(pointer: fine)').matches

    const els = pathRefs.current
    const off = LINES.map((line) => line.map(() => [0, 0])) // eased per-vertex offsets
    const RADIUS = 240
    const STRENGTH = 26
    const EASE = 0.085
    // whole-block horizontal drift tied to scroll: down → left, up → back to rest
    const DRIFT_K = 0.05
    const DRIFT_MAX = 60
    const DRIFT_EASE = 0.045

    let mx = 0, my = 0, active = false, running = false, raf = 0
    let driftX = 0, driftTarget = 0

    const tick = () => {
      // ease the block drift every frame
      driftX += (driftTarget - driftX) * DRIFT_EASE
      const driftBusy = Math.abs(driftTarget - driftX) > 0.1
      if (driftRef.current) driftRef.current.setAttribute('transform', `translate(${driftX.toFixed(2)} 0)`)

      let cursor = null
      if (active) {
        const m = svg.getScreenCTM()
        if (m) {
          const pt = new DOMPoint(mx, my).matrixTransform(m.inverse())
          cursor = [pt.x - driftX, pt.y] // map into the drifted block's local space
        }
      }
      let moving = false
      for (let r = 0; r < LINES.length; r++) {
        const line = LINES[r]
        const o = off[r]
        for (let i = 0; i < line.length; i++) {
          let tx = 0, ty = 0
          if (cursor) {
            const dx = line[i][0] - cursor[0]
            const dy = line[i][1] - cursor[1]
            const d = Math.hypot(dx, dy)
            if (d > 0.001 && d < RADIUS) {
              const f = 1 - d / RADIUS
              const push = STRENGTH * f * f // closer pushes harder
              tx = (dx / d) * push
              ty = (dy / d) * push
            }
          }
          o[i][0] += (tx - o[i][0]) * EASE
          o[i][1] += (ty - o[i][1]) * EASE
          if (Math.abs(o[i][0]) > 0.04 || Math.abs(o[i][1]) > 0.04) moving = true
        }
      }
      if (moving || active) {
        for (let r = 0; r < LINES.length; r++) {
          const line = LINES[r]
          const o = off[r]
          const pts = line.map((p, i) => [p[0] + o[i][0], p[1] + o[i][1]])
          els[r] && els[r].setAttribute('d', smoothOpen(pts))
        }
      }
      if (active || moving || driftBusy) {
        raf = requestAnimationFrame(tick)
      } else {
        running = false
      }
    }
    const start = () => {
      if (!running) {
        running = true
        raf = requestAnimationFrame(tick)
      }
    }
    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      active = true
      start()
    }
    const onLeave = () => {
      active = false // offsets ease back to rest, then the loop stops
    }
    const onScroll = () => {
      driftTarget = -Math.min(window.scrollY * DRIFT_K, DRIFT_MAX)
      start()
    }

    if (pointerFine) {
      window.addEventListener('pointermove', onMove, { passive: true })
      document.addEventListener('mouseleave', onLeave)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // sync to current scroll position on mount
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="bathy" aria-hidden="true">
      <svg ref={svgRef} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g ref={driftRef}>
          <g fill="none">
            {LINES.map((line, i) => {
              const coast = i >= COAST_START
              return (
                <path
                  key={i}
                  ref={(el) => (pathRefs.current[i] = el)}
                  d={smoothOpen(line)}
                  stroke="#DAD5C9"
                  strokeWidth={coast ? 1.2 : 1}
                  strokeOpacity={coast ? 0.95 : opacityFor(DEPTHS[i])}
                />
              )
            })}
          </g>
          <circle className="bcn-pulse" cx={MARKER[0]} cy={MARKER[1]} r="5" />
          <circle cx={MARKER[0]} cy={MARKER[1]} r="5" fill="#FF5532" opacity=".85" />
          <g className="bx-coord" fontFamily="IBM Plex Mono,monospace" fontSize="11" textAnchor="end" fill="#0E1B2A" fillOpacity=".32">
            <text x={MARKER[0] - 14} y={MARKER[1] - 4}>BCN · BARCELONA</text>
            <text x={MARKER[0] - 14} y={MARKER[1] + 11}>41.38° N · 2.17° E</text>
          </g>
        </g>
      </svg>
    </div>
  )
}

export function CaseBathy({ drift = 'drift' }) {
  return (
    <div className="bathy" aria-hidden="true">
      <svg viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid slice" fill="none">
        <g stroke="#0E1B2A" strokeOpacity=".12" strokeWidth="1.3" className={drift}>
          <path d="M-80 320 C 240 260 460 380 760 305 S 1200 225 1480 305" />
          <path d="M-80 370 C 260 320 480 430 780 360 S 1220 280 1480 355" />
        </g>
      </svg>
    </div>
  )
}
