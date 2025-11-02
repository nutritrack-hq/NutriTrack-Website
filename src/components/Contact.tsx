import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Contact() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Navbar />

            <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <p className="mt-2 text-sm text-gray-500">We’re here to help you make the most of NutriTrack.</p>

                <section className="prose prose-gray mt-6 max-w-none">
                    <h2 className="text-2xl font-semibold mb-3">1. Technical Support</h2>
                    <p>
                        Need help using NutriTrack? Visit our{" "}
                        <Link to="/support-center" className="text-brand underline">
                            Support Center
                        </Link>{" "}
                        for FAQs, troubleshooting guides, and step-by-step tips. If you can’t find your answer, our support
                        team is happy to assist — just email{" "}
                        <a href="mailto:support@nutritrack-app.com" className="text-brand underline">
                            support@nutritrack-app.com
                        </a>
                        .
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-3">2. Feedback & Suggestions</h2>
                    <p>
                        Have an idea, feature request, or success story to share? We’d love to hear how NutriTrack has
                        helped you stay on track or how we can make it better for everyone. You can send feedback directly
                        to{" "}
                        <a href="mailto:feedback@nutritrack-app.com" className="text-brand underline">
                            feedback@nutritrack-app.com
                        </a>
                        .
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-3">3. Marketing & Partnerships</h2>
                    <p>
                        For media inquiries, collaborations, or partnership opportunities, please contact our marketing
                        team at{" "}
                        <a href="mailto:marketing@nutritrack-app.com" className="text-brand underline">
                            marketing@nutritrack-app.com
                        </a>
                        .
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-3">4. Connect With Us</h2>
                    <p>
                        Follow NutriTrack for the latest updates, nutrition tips, and feature announcements:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>
                            <a
                                href="https://www.instagram.com/nutritrack.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand underline"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.tiktok.com/@nutritrack.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand underline"
                            >
                                TikTok
                            </a>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-3">5. Business Address</h2>
                    <p>
                        NutriTrack LLC<br />
                        Boise, Idaho, USA
                    </p>
                </section>

                <div className="mt-8">
                    <Link to="/" className="text-sm font-semibold text-main hover:text-main-dark">
                        ← Back to Home
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    )
}
