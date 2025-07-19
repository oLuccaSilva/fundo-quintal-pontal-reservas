import { useEffect } from 'react'

// Performance optimization component
export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Reduce motion for users who prefer it
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    const handleReduceMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01s')
        document.documentElement.style.setProperty('--transition-duration', '0.01s')
      } else {
        document.documentElement.style.setProperty('--animation-duration', '0.8s')
        document.documentElement.style.setProperty('--transition-duration', '0.3s')
      }
    }

    // Set initial values
    handleReduceMotion({ matches: mediaQuery.matches } as MediaQueryListEvent)
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleReduceMotion)
    
    return () => {
      mediaQuery.removeEventListener('change', handleReduceMotion)
    }
  }, [])

  useEffect(() => {
    // Optimize scroll performance
    let ticking = false
    
    const updateScrollValue = () => {
      const scrolled = window.scrollY
      document.documentElement.style.setProperty('--scroll', `${scrolled}px`)
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollValue)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', requestTick)
    }
  }, [])

  return null
}