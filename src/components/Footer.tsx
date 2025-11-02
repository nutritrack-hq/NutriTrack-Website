import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} NutriTrack. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link className="text-md text-gray-600 hover:text-gray-900" to="/">Home</Link>
          <Link className="text-md text-gray-600 hover:text-gray-900" to="/contact-us">Contact</Link>
          <Link className="text-md text-gray-600 hover:text-gray-900" to="/privacy">Privacy</Link>
          <Link className="text-md text-gray-600 hover:text-gray-900" to="/terms-of-service">Terms of Service</Link>
          <Link className="text-md text-gray-600 hover:text-gray-900" to="/support-center">Support Center</Link>
          <a
            href="https://www.instagram.com/nutritrack.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://www.tiktok.com/@nutritrack.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
            aria-label="TikTok"
          >

            <i className="fab fa-tiktok text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
