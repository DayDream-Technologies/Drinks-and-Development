import { Link, useLocation } from 'react-router-dom'
import { content } from '../content'

const nav = [
  { path: '/past-events', label: 'Past Events' },
]

function scrollToEvents(e) {
  e?.preventDefault()
  document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })
}

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="header-logo-link" aria-label="Drinks and Development home">
          <img
            src={`${import.meta.env.BASE_URL}Drinks-and-development-logo-icon.JPG`}
            alt=""
            className="header-logo"
          />
          <span className="header-title">{content.hero.headline}</span>
        </Link>
        <nav className="header-nav" aria-label="Main">
          <ul className="header-nav-list">
            {nav.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`header-nav-link ${location.pathname === path ? 'is-active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              {isHome ? (
                <a
                  href="#events"
                  className="header-nav-link header-nav-link--cta"
                  onClick={scrollToEvents}
                >
                  Upcoming Events
                </a>
              ) : (
                <Link to="/#events" className="header-nav-link header-nav-link--cta">
                  Upcoming Events
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
