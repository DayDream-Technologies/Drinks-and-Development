import { Link } from 'react-router-dom'
import { content } from '../content'
import { GOOGLE_CALENDAR_ID } from '../config'
import { ScrollReveal } from './ScrollReveal'

const EMBED_BASE = 'https://calendar.google.com/calendar/embed'

function calendarEmbedSrc(calendarId) {
  if (!calendarId || !calendarId.trim()) return null
  const encoded = encodeURIComponent(calendarId.trim())
  return `${EMBED_BASE}?src=${encoded}&ctz=America/New_York`
}

function HostLink({ host }) {
  if (!host) return null
  if (host.to) {
    return (
      <Link to={host.to} className="upcoming-event-host-link">
        {host.name}
      </Link>
    )
  }
  return (
    <a href={host.href} className="upcoming-event-host-link" target="_blank" rel="noopener noreferrer">
      {host.name}
    </a>
  )
}

export function Events() {
  const { title, description, hostedBy = 'Hosted and sponsored by', items = [] } = content.events
  const src = calendarEmbedSrc(GOOGLE_CALENDAR_ID)

  return (
    <section className="events section-bg" id="events">
      <ScrollReveal variant="up" className="section-inner-wide">
        <h2 className="events-title">{title}</h2>
        <p className="events-description">{description}</p>
        {items.length > 0 && (
          <ul className="upcoming-events">
            {items.map((event) => (
              <li key={event.id}>
                <article className="upcoming-event-card">
                  {event.logo && (
                    <div
                      className={`upcoming-event-logo-wrap${event.logoPlate === 'dark' ? ' logo-plate-dark' : ''}`}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${event.logo}`}
                        alt={`${event.host?.name || event.location} logo`}
                        className="upcoming-event-logo"
                      />
                    </div>
                  )}
                  <div className="upcoming-event-body">
                    <p className="upcoming-event-date">{event.date}</p>
                    {event.time && <p className="upcoming-event-time">{event.time}</p>}
                    <h3 className="upcoming-event-location">{event.location}</h3>
                    {event.address &&
                      (event.mapUrl ? (
                        <a
                          href={event.mapUrl}
                          className="upcoming-event-address"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event.address}
                        </a>
                      ) : (
                        <p className="upcoming-event-address">{event.address}</p>
                      ))}
                    {event.host && (
                      <p className="upcoming-event-host">
                        {hostedBy} <HostLink host={event.host} />
                      </p>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
        {src ? (
          <ScrollReveal variant="fade" delay={150} className="events-embed-wrap">
            <iframe
              src={src}
              title="Drinks and Development calendar"
              className="events-iframe"
              frameBorder="0"
              scrolling="no"
            />
          </ScrollReveal>
        ) : items.length === 0 ? (
          <div className="events-placeholder">
            <p className="events-coming-soon">
              More Drinks &amp; Development events are coming soon! In the meantime, check out more
              networking events in Grand Rapids
            </p>
            <a
              href="https://www.daydreamtechnologies.net/gr-events.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary events-cta"
            >
              View GR networking events
            </a>
          </div>
        ) : null}
      </ScrollReveal>
    </section>
  )
}
