import { useEffect, useRef, useState } from 'react'

const defaultOptions = {
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1,
  once: true,
}

/**
 * Adds a class when the element enters the viewport for scroll-triggered animations.
 * @param {Object} options - IntersectionObserver options + { once: boolean }
 * @returns {[React.RefObject, boolean]} - ref to attach to element, and isVisible state
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const { once, rootMargin, threshold } = { ...defaultOptions, ...options }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return [ref, isVisible]
}
