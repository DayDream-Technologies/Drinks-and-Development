import { content } from '../content'
import { LINKEDIN_GROUP_URL } from '../config'

export function Hero() {
  const { headline, tagline, ctaLinkedIn } = content.hero

  return (
    <header className="hero" role="banner">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <img
          src="/Drinks-and-development-logo.jpg"
          alt="Drinks and Development"
          className="hero-logo animate-hero-logo"
        />
        <h1 className="hero-headline animate-hero-text">{headline}</h1>
        <p className="hero-tagline animate-hero-text animate-hero-text-2">{tagline}</p>
        <a
          href={LINKEDIN_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hero-cta animate-hero-text animate-hero-text-3"
        >
          {ctaLinkedIn}
        </a>
      </div>
    </header>
  )
}
