import { ScrollReveal } from './ScrollReveal'

/**
 * Full-width image banner between sections. Uses placeholder URLs by default;
 * replace with your own image paths as needed.
 */
export function ImageBanner({ src, alt = '', caption, className = '' }) {
  return (
    <section className={`image-banner ${className}`} aria-hidden={!alt}>
      <ScrollReveal variant="fade" className="image-banner-inner">
        <img src={src} alt={alt} className="image-banner-img" />
        {caption && <p className="image-banner-caption">{caption}</p>}
      </ScrollReveal>
    </section>
  )
}
