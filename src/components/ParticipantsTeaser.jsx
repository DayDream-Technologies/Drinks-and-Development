import { Link } from 'react-router-dom'
import { content } from '../content'
import { ScrollReveal } from './ScrollReveal'

function TeaserItems({ organizations, clone = false }) {
  return (
    <ul className="participants-teaser-list" aria-hidden={clone ? 'true' : undefined}>
      {organizations.map((org) => (
        <li key={`${org.id}${clone ? '-clone' : ''}`} className="participants-teaser-item">
          {org.logo && (
            <img
              src={`${import.meta.env.BASE_URL}${org.logo}`}
              alt=""
              className="participants-teaser-logo"
            />
          )}
          <span>{org.name}</span>
        </li>
      ))}
    </ul>
  )
}

export function ParticipantsTeaser() {
  const copy = content.participants || {}
  const title = copy.teaserTitle ?? copy.title ?? 'Active Participants'
  const intro = copy.teaserIntro ?? copy.intro ?? ''
  const cta = copy.teaserCta ?? 'Meet our participants'
  const organizations = copy.organizations ?? []

  return (
    <section className="participants-teaser section-bg" id="participants">
      <ScrollReveal variant="up" className="section-inner">
        <h2 className="participants-teaser-title">{title}</h2>
        <p className="participants-teaser-intro">{intro}</p>
      </ScrollReveal>
      {organizations.length > 0 && (
        <div className="participants-teaser-marquee" aria-label="Active participant organizations">
          <div className="participants-teaser-track">
            <TeaserItems organizations={organizations} />
            <TeaserItems organizations={organizations} clone />
          </div>
        </div>
      )}
      <ScrollReveal variant="up" className="section-inner">
        <Link to="/participants" className="btn btn-primary participants-teaser-cta">
          {cta}
        </Link>
      </ScrollReveal>
    </section>
  )
}
