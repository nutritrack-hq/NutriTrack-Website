import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:flex sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="mb-4 text-center text-sm text-gray-500 sm:mb-0 sm:text-left">© {new Date().getFullYear()} NutriTrack. All rights reserved.</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <Link className="px-3 py-2 text-md text-gray-600 hover:text-gray-900" to="/">Home</Link>
            <Link className="px-3 py-2 text-md text-gray-600 hover:text-gray-900" to="/contact-us">Contact</Link>
            <Link className="px-3 py-2 text-md text-gray-600 hover:text-gray-900" to="/privacy">Privacy</Link>
            <Link className="px-3 py-2 text-md text-gray-600 hover:text-gray-900" to="/terms-of-service">Terms of Service</Link>
            <Link className="px-3 py-2 text-md text-gray-600 hover:text-gray-900" to="/support-center">Support Center</Link>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/nutritrack.co"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://www.tiktok.com/@nutritrack.co"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
