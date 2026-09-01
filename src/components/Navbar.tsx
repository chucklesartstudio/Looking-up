import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Ballard Estate', href: '#two-walks' },
  { label: 'Colaba', href: '#two-walks' },
  { label: '400001', href: '#400001' },
  { label: 'Walks', href: '#walks' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
        <button
          className="navbar-logo"
          onClick={() => {
            setMenuOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Daniel Sequeira
        </button>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button className="nav-link" onClick={() => handleNav(link.href)}>
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button className="nav-cta" onClick={() => handleNav('#walks')}>
              Book a Walk
            </button>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              className="mobile-nav-link"
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </button>
          ))}
          <button
            className="nav-cta"
            onClick={() => handleNav('#walks')}
            style={{ marginTop: '8px' }}
          >
            Book a Walk
          </button>
        </div>
      )}
    </>
  )
}
