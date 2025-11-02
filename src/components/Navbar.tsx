import { gaEvent } from '../analytics'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          {/* Placeholder logo */}
          <img src="/logo-green.jpg" className="h-10 w-10 rounded" />
          <span className="text-lg font-semibold text-gray-900">NutriTrack</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">Home</Link>

          <Link to="/contact-us" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact </Link>
          <a
            href="https://testflight.apple.com/join/uhsJJhnK"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (import.meta.env.PROD) {
                gaEvent('click', {
                  label: 'Download Beta Link',
                  location: 'Navbar',
                });
              }
            }}
            className="rounded-md bg-main px-3 py-2 text-sm font-semibold text-white hover:bg-main-dark"
          >
            Download Beta
          </a>
        </nav>
      </div>
    </header>
  )
}
