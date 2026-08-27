import { Link } from 'react-router-dom'
import { content } from '../content'
import { ScrollReveal } from './ScrollReveal'

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
        {organizations.length > 0 && (
          <ul className="participants-teaser-list">
            {organizations.map((org) => (
              <li key={org.id} className="participants-teaser-item">
                {org.name}
              </li>
            ))}
          </ul>
        )}
        <Link to="/participants" className="btn btn-primary participants-teaser-cta">
          {cta}
        </Link>
      </ScrollReveal>
    </section>
  )
}
