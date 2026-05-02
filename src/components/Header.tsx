import { useState } from 'react'
import logo from '../assets/white-v2-logo.svg'

const navLinks = [
  { href: '#approach', label: 'Approach' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#faq', label: "FAQ's" },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" aria-label="The Design Guy — home" className="shrink-0">
          <img src={logo} alt="The Design Guy" className="h-8 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brand-gray hover:text-brand-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-brand-gray hover:text-brand-white transition-colors p-1 -mr-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-white/10 bg-brand-dark/95 backdrop-blur-md"
          aria-label="Primary mobile"
        >
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-brand-gray hover:text-brand-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
