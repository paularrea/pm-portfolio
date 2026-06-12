import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Replicates the original single-page nav behaviour: if we're not on the
// home route, navigate there first, then smooth-scroll to the target section.
export default function useSectionNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback(
    (target) => (e) => {
      if (e) e.preventDefault()
      const onHome = location.pathname === '/'

      const scrollToTarget = () => {
        if (target === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }
        const sec = document.getElementById(target)
        if (sec) sec.scrollIntoView({ behavior: 'smooth' })
      }

      if (!onHome) {
        navigate('/')
        // wait for the home route to mount before scrolling
        setTimeout(scrollToTarget, 80)
      } else {
        scrollToTarget()
      }
    },
    [location.pathname, navigate]
  )
}
