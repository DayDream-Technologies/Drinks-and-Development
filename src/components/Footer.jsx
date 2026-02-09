import { content } from '../content'

export function Footer() {
  const { location, copyright, developedBy, developerName, developerUrl } = content.footer

  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <p className="footer-location">{location}</p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} {copyright}
        </p>
        <p className="footer-credit">
          {developedBy}{' '}
          <a
            href={developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit-link"
          >
            {developerName}
          </a>
        </p>
      </div>
    </footer>
  )
}
