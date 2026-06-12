// Decorative bathymetric contour background used in the hero and case heroes.

export function HeroBathy() {
  return (
    <div className="bathy" aria-hidden="true">
      <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#0E1B2A" strokeOpacity=".13" strokeWidth="1.4" className="drift">
          <path d="M-80 720 C 180 660 380 780 660 705 S 1100 620 1480 700" />
          <path d="M-80 760 C 200 710 400 820 680 750 S 1120 670 1480 745" />
          <path d="M-80 800 C 220 760 420 860 700 795 S 1140 720 1480 790" />
          <path d="M-80 840 C 240 810 440 890 720 840 S 1160 768 1480 835" />
        </g>
        <g stroke="#0E1B2A" strokeOpacity=".1" strokeWidth="1.2" className="drift2">
          <path d="M-80 250 C 240 185 460 310 760 235 S 1190 155 1480 230" />
          <path d="M-80 300 C 260 245 480 360 780 290 S 1210 210 1480 280" />
          <path d="M-80 350 C 280 305 500 410 800 345 S 1230 265 1480 330" />
        </g>
        <g stroke="#0E1B2A" strokeOpacity=".08" strokeWidth="1" className="drift3">
          <ellipse cx="1100" cy="490" rx="310" ry="125" />
          <ellipse cx="1100" cy="490" rx="225" ry="88" />
          <ellipse cx="1100" cy="490" rx="145" ry="54" />
          <ellipse cx="260" cy="130" rx="275" ry="108" />
          <ellipse cx="260" cy="130" rx="190" ry="70" />
        </g>
        <circle cx="1100" cy="490" r="5" fill="#FF5532" opacity=".8" className="drift3" />
        <g fontFamily="IBM Plex Mono,monospace" fontSize="11" fill="#0E1B2A" fillOpacity=".3" className="drift2">
          <text x="916" y="466">41.38° N · 2.17° E</text>
          <text x="916" y="481">BCN · BARCELONA</text>
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
