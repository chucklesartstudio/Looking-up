import { useState, useEffect } from 'react'

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = [
  {
    label: 'Looking Up in Ballard Estate',
    target: 'ballard',
    image: `${BASE}ballard-estate.png`,
  },
  {
    label: 'Looking Up in Colaba',
    target: 'colaba',
    image: `${BASE}new-colaba-image.png`,
  },
  {
    label: 'Looking Out at Sea',
    target: 'sea',
    image: `${BASE}Looking-up-Sea.png`,
  },
  {
    label: '400001 and Co.',
    target: '400001',
    image: `${BASE}400001.png`,
  },
  {
    label: 'Walks & Field Notes',
    target: 'field-notes',
    image: `${BASE}walks-field-notes.png`,
  },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight - 80)

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)

    if (el) {
      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        70

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }

  const handleNav = (target: string) => {
    setMenuOpen(false)

    /*
      Ballard, Colaba and Sea all live
      inside the Two Walks section.
    */
    if (
      target === 'ballard' ||
      target === 'colaba' ||
      target === 'sea'
    ) {
      window.dispatchEvent(
        new CustomEvent('looking-up:open-walk', {
          detail: {
            walk: target,
          },
        })
      )

      scrollToSection('two-walks')
      return
    }

    scrollToSection(target)
  }

  return (
    <>
      <nav
        className={`navbar ${
          scrolled ? 'scrolled' : 'transparent'
        }`}
      >
        <button
          className="navbar-logo"
          onClick={() => {
            setMenuOpen(false)

            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Daniel Sequeira
        </button>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                className="nav-link"
                onClick={() =>
                  handleNav(link.target)
                }
              >
                {link.label}
              </button>
            </li>
          ))}

          <li>
            <button
              className="nav-cta"
              onClick={() =>
                handleNav('walks')
              }
            >
              Book a Walk
            </button>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle menu"
        >
          <span
            style={{
              transform: menuOpen
                ? 'rotate(45deg) translate(5px, 5px)'
                : 'none',
            }}
          />

          <span
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />

          <span
            style={{
              transform: menuOpen
                ? 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
            }}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="polaroid-grid">
            {NAV_LINKS.map((link, index) => (
              <button
                key={link.label}
                className={`polaroid polaroid-${index + 1}`}
                onClick={() =>
                  handleNav(link.target)
                }
              >
                <div className="polaroid-image">
                  <img
                    src={link.image}
                    alt={link.label}
                  />
                </div>

                <span className="polaroid-caption">
                  {link.label}
                </span>
              </button>
            ))}
          </div>

          <button
            className="nav-cta menu-book-button"
            onClick={() =>
              handleNav('walks')
            }
          >
            Book a Walk
          </button>
        </div>
      )}
    </>
  )
}
