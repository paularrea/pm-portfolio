// Decorative bathymetric chart background for the hero — styled after a real
// coastal depth map (Barcelona / Mediterranean): contour lines run roughly
// parallel to a diagonal coast, bunching at the continental-slope band and
// spreading on the shelf and deep plain. The BCN marker sits up on the coast.
//
// On pointer devices each contour vertex is pushed radially away from the
// cursor within a falloff radius — closer points move more — eased every
// frame so the motion stays smooth and calm. Touch / reduced-motion get the
// static chart.

import { useEffect, useRef } from 'react'

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

// Barcelona / Mediterranean coast. A diagonal coastline runs from the
// lower-left up to the upper-right; the land side (upper-left) is left clear
// and the sea fills toward the lower-right, where depth contours stack
// parallel to the coast — wide on the shelf, tight across the continental
// slope band, then spreading on the deep plain. Depth 0 is the coastline,
// where the Barcelona marker sits.
const COAST_A = [120, 1000] // shoreline anchor, bottom-left corner
const COAST_D = [0.79394, -0.60799] // along-coast unit vector (toward upper-right)
const COAST_N = [0.60799, 0.79394] // seaward normal (toward lower-right, deeper)
const COAST_L = 1400 // coastline length across the viewBox

// point on contour `i` at along-coast parameter t (0 = anchor, 1 = far end)
function coastPoint(t, depthOffset, wobble) {
  const cx = COAST_A[0] + COAST_D[0] * COAST_L * t
  const cy = COAST_A[1] + COAST_D[1] * COAST_L * t
  const off = depthOffset + wobble
  return [cx + COAST_N[0] * off, cy + COAST_N[1] * off]
}

function makeContours() {
  const N = 16
  const ts = []
  for (let t = -0.9; t <= 1.9; t += 0.045) ts.push(t)

  // the first contour is depth 0 — the shoreline that runs through the BCN
  // marker; the rest pack seaward (lower-right), leaving the left side clear.
  const OFF_START = 0
  const OFF_GAP = 54

  // shared coastline shape keeps every contour roughly parallel (no crossing) —
  // multi-scale undulations echo the real, organic shoreline
  const shape = (t) =>
    55 * Math.sin(t * 3.0 + 0.5) +
    28 * Math.sin(t * 5.7 + 1.9) +
    14 * Math.sin(t * 9.5 + 0.3) +
    7 * Math.sin(t * 15 + 1.1)

  return Array.from({ length: N }, (_, i) => {
    const off = OFF_START + i * OFF_GAP
    const depth = i / (N - 1) // 0 at the coast → 1 in the deep
    const amp = depth * 50 // deeper contours grow wavier, like the canyon offshore
    return ts.map((t) => {
      const w =
        shape(t) +
        amp * (0.55 * Math.sin(t * 4.8 + i * 0.3) + 0.45 * Math.sin(t * 8.3 + i * 0.22)) +
        6 * Math.sin(t * 4.5 + i * 0.5)
      return coastPoint(t, off, w)
    })
  })
}

const CONTOURS = makeContours()

// Barcelona marker sits exactly on the first contour (depth 0 / shoreline):
// pick the vertex of CONTOURS[0] nearest a pleasing spot up on the coast.
const MARKER = (() => {
  const line = CONTOURS[0]
  let best = line[0]
  let bd = Infinity
  for (const p of line) {
    const d = Math.hypot(p[0] - 950, p[1] - 350)
    if (d < bd) { bd = d; best = p }
  }
  return best
})()

// --- component --------------------------------------------------------------

export function HeroBathy() {
  const svgRef = useRef(null)
  const pathRefs = useRef([])

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return // touch → static

    const els = pathRefs.current
    const off = CONTOURS.map((line) => line.map(() => [0, 0])) // eased per-vertex offsets
    const RADIUS = 240
    const STRENGTH = 26
    const EASE = 0.085

    let mx = 0, my = 0, active = false, running = false, raf = 0

    const tick = () => {
      let cursor = null
      if (active) {
        const m = svg.getScreenCTM()
        if (m) {
          const pt = new DOMPoint(mx, my).matrixTransform(m.inverse())
          cursor = [pt.x, pt.y]
        }
      }
      let moving = false
      for (let r = 0; r < CONTOURS.length; r++) {
        const line = CONTOURS[r]
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
        for (let r = 0; r < CONTOURS.length; r++) {
          const line = CONTOURS[r]
          const o = off[r]
          const pts = line.map((p, i) => [p[0] + o[i][0], p[1] + o[i][1]])
          els[r] && els[r].setAttribute('d', smoothOpen(pts))
        }
      }
      if (active || moving) {
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

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="bathy" aria-hidden="true">
      <svg ref={svgRef} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#0E1B2A" strokeWidth="1.3" fill="none">
          {CONTOURS.map((line, i) => (
            <path
              key={i}
              ref={(el) => (pathRefs.current[i] = el)}
              d={smoothOpen(line)}
              strokeOpacity={(0.32 - i * 0.009).toFixed(3)}
            />
          ))}
        </g>
        <circle cx={MARKER[0]} cy={MARKER[1]} r="5" fill="#FF5532" opacity=".85" />
        <g className="bx-coord" fontFamily="IBM Plex Mono,monospace" fontSize="11" textAnchor="end" fill="#0E1B2A" fillOpacity=".32">
          <text x={MARKER[0] - 14} y={MARKER[1] - 4}>BCN · BARCELONA</text>
          <text x={MARKER[0] - 14} y={MARKER[1] + 11}>41.38° N · 2.17° E</text>
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
