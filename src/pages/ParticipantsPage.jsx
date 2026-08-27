import { Link } from 'react-router-dom'
import { content } from '../content'
import { ScrollReveal } from '../components/ScrollReveal'

const SKIP_WORDS = new Set(['of', 'the', 'and', 'a', 'an'])

function orgInitials(name) {
  const letters = name
    .split(/\s+/)
    .filter((word) => !SKIP_WORDS.has(word.toLowerCase()))
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

  return letters || name.slice(0, 2).toUpperCase()
}

export function ParticipantsPage() {
  const copy = content.participants || {}
  const title = copy.title ?? 'Active Participants'
  const intro =
    copy.intro ?? 'These organizations regularly attend Drinks and Development meetups in Grand Rapids.'
  const visitWebsite = copy.visitWebsite ?? 'Visit website'
  const organizations = copy.organizations ?? []

  return (
    <main className="participants-page">
      <section className="participants-intro section-bg">
        <ScrollReveal variant="up" className="section-inner">
          <h1 className="participants-title">{title}</h1>
          <p className="participants-intro-text">{intro}</p>
          <Link to="/" className="btn btn-primary participants-back">
            Back to Home
          </Link>
        </ScrollReveal>
      </section>
      <section className="participants-grid-section section-bg">
        <ScrollReveal variant="up" className="section-inner-wide">
          <ul className="participants-grid">
            {organizations.map((org, i) => (
              <li key={org.id}>
                <ScrollReveal variant="up" delay={i * 80} className="participant-card">
                  <div className="participant-card-logo-wrap">
                    {org.logo ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${org.logo}`}
                        alt={`${org.name} logo`}
                        className="participant-card-logo"
                      />
                    ) : (
                      <span className="participant-card-lettermark" aria-hidden="true">
                        {orgInitials(org.name)}
                      </span>
                    )}
                  </div>
                  <div className="participant-card-body">
                    <h2 className="participant-card-title">{org.name}</h2>
                    <p className="participant-card-tagline">{org.tagline}</p>
                    {org.about && <p className="participant-card-about">{org.about}</p>}
                    <a
                      href={org.website}
                      className="participant-card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {visitWebsite}
                    </a>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>
    </main>
  )
}
