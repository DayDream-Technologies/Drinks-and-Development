import { Link, useLocation } from 'react-router-dom'
import { content } from '../content'

const nav = [
  { path: '/', label: 'Home' },
  { path: '/past-events', label: 'Past Events' },
]

export function Header() {
  const location = useLocation()

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="header-logo-link" aria-label="Drinks and Development home">
          <img
            src="/Drinks-and-development-logo.jpg"
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
          </ul>
        </nav>
      </div>
    </header>
  )
}
