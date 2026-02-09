import { Link } from 'react-router-dom'
import { content } from '../content'
import { ScrollReveal } from '../components/ScrollReveal'

// Placeholder past events – replace with real data or a CMS later.
const PLACEHOLDER_EVENTS = [
  {
    id: '1',
    title: 'Summer Meetup 2024',
    date: 'August 15, 2024',
    location: 'Grand Rapids',
    image: '/Drinks-and-development-hero.jpg',
    excerpt: 'A great evening of networking and conversation with local professionals.',
  },
  {
    id: '2',
    title: 'Spring Happy Hour',
    date: 'April 22, 2024',
    location: 'Grand Rapids',
    image: '/Drinks-and-development-logo.jpg',
    excerpt: 'Casual drinks and conversation. New faces always welcome.',
  },
  {
    id: '3',
    title: 'Winter Social',
    date: 'January 10, 2024',
    location: 'Grand Rapids',
    image: '/Drinks-and-development-hero.jpg',
    excerpt: 'Kicked off the year with good company and warm drinks.',
  },
]

export function PastEventsPage() {
  const copy = content.pastEvents || {}
  const title = copy.title ?? 'Past Events'
  const intro = copy.intro ?? 'Highlights from our previous meetups.'

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
      <section className="past-events-grid-section section-bg">
        <ScrollReveal variant="up" className="section-inner-wide">
          <ul className="past-events-grid">
            {PLACEHOLDER_EVENTS.map((event, i) => (
              <li key={event.id}>
                <ScrollReveal variant="up" delay={i * 80} className="past-event-card">
                  <div className="past-event-card-image-wrap">
                    <img
                      src={event.image}
                      alt=""
                      className="past-event-card-image"
                    />
                  </div>
                  <div className="past-event-card-body">
                    <h2 className="past-event-card-title">{event.title}</h2>
                    <p className="past-event-card-meta">
                      {event.date} &middot; {event.location}
                    </p>
                    <p className="past-event-card-excerpt">{event.excerpt}</p>
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
