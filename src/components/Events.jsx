import { content } from '../content'
import { GOOGLE_CALENDAR_ID } from '../config'
import { ScrollReveal } from './ScrollReveal'

const EMBED_BASE = 'https://calendar.google.com/calendar/embed'

function calendarEmbedSrc(calendarId) {
  if (!calendarId || !calendarId.trim()) return null
  const encoded = encodeURIComponent(calendarId.trim())
  return `${EMBED_BASE}?src=${encoded}&ctz=America/New_York`
}

export function Events() {
  const { title, description } = content.events
  const src = calendarEmbedSrc(GOOGLE_CALENDAR_ID)

  return (
    <section className="events section-bg" id="events">
      <ScrollReveal variant="up" className="section-inner-wide">
        <h2 className="events-title">{title}</h2>
        <p className="events-description">{description}</p>
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
        ) : (
          <div className="events-placeholder">
            <p>Add your Google Calendar ID in <code>src/config.js</code> to show upcoming events here.</p>
          </div>
        )}
      </ScrollReveal>
    </section>
  )
}
