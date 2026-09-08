import { Link } from 'react-router-dom'
import { content } from '../content'
import { ScrollReveal } from '../components/ScrollReveal'
import { PastEventsMap } from '../components/PastEventsMap'

function SponsorLink({ sponsor }) {
  if (sponsor.to) {
    return (
      <Link to={sponsor.to} className="past-event-card-sponsor-link">
        {sponsor.name}
      </Link>
    )
  }

  return (
    <a
      href={sponsor.href}
      className="past-event-card-sponsor-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {sponsor.name}
    </a>
  )
}

export function PastEventsPage() {
  const copy = content.pastEvents || {}
  const title = copy.title ?? 'Past Events'
  const intro = copy.intro ?? 'Meetups we’ve hosted around Grand Rapids and West Michigan.'
  const sponsoredBy = copy.sponsoredBy ?? 'Sponsored by'
  const events = copy.events ?? []

  return (
    <main className="past-events-page">
      <section className="past-events-intro section-bg">
        <ScrollReveal variant="up" className="section-inner">
          <h1 className="past-events-title">{title}</h1>
          <p className="past-events-intro-text">{intro}</p>
          <Link to="/" className="btn btn-primary past-events-back">
            Back to Home
          </Link>
        </ScrollReveal>
      </section>
      <section className="past-events-map-section section-bg">
        <div className="section-inner-wide">
          <PastEventsMap events={events} />
        </div>
      </section>
      <section className="past-events-grid-section section-bg">
        <ScrollReveal variant="up" className="section-inner-wide">
          <ul className="past-events-grid">
            {events.map((event, i) => (
              <li key={event.id} id={`event-${event.id}`}>
                <ScrollReveal variant="up" delay={i * 80} className="past-event-card">
                  <div className="past-event-card-image-wrap">
                    <img
                      src={`${import.meta.env.BASE_URL}${event.image}`}
                      alt={`Drinks and Development meetup at ${event.location}`}
                      className="past-event-card-image"
                    />
                  </div>
                  <div className="past-event-card-body">
                    <h2 className="past-event-card-title">{event.location}</h2>
                    {event.address && <p className="past-event-card-meta">{event.address}</p>}
                    {event.sponsors?.length > 0 && (
                      <p className="past-event-card-sponsors">
                        {sponsoredBy}{' '}
                        {event.sponsors.map((sponsor, index) => (
                          <span key={sponsor.name}>
                            {index > 0 && ' and '}
                            <SponsorLink sponsor={sponsor} />
                          </span>
                        ))}
                      </p>
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
