import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Wraps content and adds scroll-reveal animation when it enters the viewport.
 * Use variant for different animation styles: 'up' | 'fade' | 'scale' | 'left' | 'right'
 */
export function ScrollReveal({ children, className = '', variant = 'up', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal()

  const classes = [
    'scroll-reveal',
    `scroll-reveal--${variant}`,
    isVisible && 'scroll-reveal--visible',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={classes} style={{ transitionDelay: delay ? `${delay}ms` : undefined }}>
      {children}
    </div>
  )
}
