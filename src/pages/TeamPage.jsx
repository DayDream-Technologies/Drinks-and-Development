import { Link } from 'react-router-dom'
import { content } from '../content'
import { ScrollReveal } from '../components/ScrollReveal'

function memberInitials(name) {
  return name
    .split(/\s+/)
    .filter((word) => !['of', 'the', 'and', 'de'].includes(word.toLowerCase()))
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function TeamPage() {
  const copy = content.team || {}
  const title = copy.title ?? 'Our Team'
  const intro = copy.intro ?? 'The board members who lead Drinks and Development.'
  const linkedInLabel = copy.linkedInLabel ?? 'LinkedIn'
  const members = copy.members ?? []

  return (
    <main className="team-page">
      <section className="team-intro section-bg">
        <ScrollReveal variant="up" className="section-inner">
          <h1 className="team-title">{title}</h1>
          <p className="team-intro-text">{intro}</p>
          <Link to="/" className="btn btn-primary team-back">
            Back to Home
          </Link>
        </ScrollReveal>
      </section>
      <section className="team-grid-section section-bg">
        <ScrollReveal variant="up" className="section-inner-wide">
          <ul className="team-grid">
            {members.map((member, i) => (
              <li key={member.id}>
                <ScrollReveal variant="up" delay={i * 80} className="team-card">
                  <div className="team-card-photo-wrap">
                    {member.photo ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${member.photo}`}
                        alt={member.name}
                        className="team-card-photo"
                      />
                    ) : (
                      <span className="team-card-lettermark" aria-hidden="true">
                        {memberInitials(member.name)}
                      </span>
                    )}
                  </div>
                  <div className="team-card-body">
                    <h2 className="team-card-name">{member.name}</h2>
                    {member.title && <p className="team-card-role">{member.title}</p>}
                    {(Array.isArray(member.about) ? member.about : [member.about])
                      .filter(Boolean)
                      .map((paragraph) => (
                        <p key={paragraph.slice(0, 48)} className="team-card-bio">
                          {paragraph}
                        </p>
                      ))}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="team-card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkedInLabel}
                      </a>
                    )}
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
