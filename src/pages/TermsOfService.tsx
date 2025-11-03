import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export default function TermsOfService() {
    return (
        <>
            <Helmet>
                <title>Terms of Service • NutriTrack</title>
                <meta
                    name="description"
                    content="Read the NutriTrack Terms of Service covering eligibility, account use, acceptable use, third‑party services, health disclaimers, and dispute resolution."
                />
                <link rel="canonical" href="https://www.nutritrack-app.com/terms-of-service" />
                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nutritrack-app.com/terms-of-service" />
                <meta property="og:title" content="Terms of Service • NutriTrack" />
                <meta property="og:description" content="Read the NutriTrack Terms of Service covering eligibility, account use, acceptable use, third‑party services, health disclaimers, and dispute resolution." />
                <meta property="og:image" content="https://www.nutritrack-app.com/logo-green.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="NutriTrack" />
                <meta property="og:locale" content="en_US" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Terms of Service • NutriTrack" />
                <meta name="twitter:description" content="Read the NutriTrack Terms of Service covering eligibility, account use, acceptable use, third‑party services, health disclaimers, and dispute resolution." />
                <meta name="twitter:image" content="https://www.nutritrack-app.com/logo-green.jpg" />
                {/* JSON-LD: TermsOfService */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TermsOfService",
                        "name": "NutriTrack Terms of Service",
                        "url": "https://www.nutritrack-app.com/terms-of-service",
                        "datePublished": "2025-11-01",
                        "inLanguage": "en",
                        "publisher": {
                            "@type": "Organization",
                            "name": "NutriTrack",
                            "url": "https://www.nutritrack-app.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.nutritrack-app.com/logo-green.jpg"
                            }
                        },
                        "description": "Terms governing the use of NutriTrack apps and website."
                    })}
                </script>
            </Helmet>
            <div className="min-h-screen bg-white text-gray-900">
                <Navbar />

                <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
                    <h1 className="text-3xl font-bold">Terms of Service</h1>
                    <p className="mt-2 text-sm text-gray-500">Last updated: November 1, 2025</p>
                    <nav aria-label="Table of contents" className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm">
                        <ul className="grid gap-2 sm:grid-cols-2">
                            <li><a href="#eligibility" className="text-brand underline">1. Eligibility</a></li>
                            <li><a href="#account-registration" className="text-brand underline">2. Account Registration</a></li>
                            <li><a href="#app-usage" className="text-brand underline">3. App Usage</a></li>
                            <li><a href="#future-subscriptions" className="text-brand underline">4. Future Subscriptions</a></li>
                            <li><a href="#health-disclaimer" className="text-brand underline">5. Health Disclaimer</a></li>
                            <li><a href="#third-party-services" className="text-brand underline">6. Third‑Party Services</a></li>
                            <li><a href="#data-privacy" className="text-brand underline">7. Data &amp; Privacy</a></li>
                            <li><a href="#intellectual-property" className="text-brand underline">8. Intellectual Property</a></li>
                            <li><a href="#termination" className="text-brand underline">9. Termination</a></li>
                            <li><a href="#limitation" className="text-brand underline">10. Limitation of Liability</a></li>
                            <li><a href="#dispute" className="text-brand underline">11. Dispute Resolution &amp; Arbitration</a></li>
                            <li><a href="#governing-law" className="text-brand underline">12. Governing Law</a></li>
                            <li><a href="#changes" className="text-brand underline">13. Changes to These Terms</a></li>
                            <li><a href="#contact-us" className="text-brand underline">14. Contact Us</a></li>
                        </ul>
                    </nav>

                    <section className="prose prose-gray mt-6 max-w-none">
                        <h2 className="text-2xl font-semibold mt-8 mb-3" id="overview">Overview</h2>
                        <p className="text-zinc-600 mb-6">Effective Date: November 1, 2025</p>

                        <p className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 mb-6">
                            Welcome to NutriTrack! These Terms of Service govern your use of the NutriTrack mobile
                            application and website operated by NutriTrack LLC. By creating
                            an account or using the app, you agree to these Terms.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="eligibility">1. Eligibility</h2>
                        <p>
                            NutriTrack is intended for individuals aged 18 or older. By using the app, you confirm that you are
                            at least 18 years old and legally capable of entering into this agreement.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="account-registration">2. Account Registration</h2>
                        <p>
                            You must create an account using a valid email or Apple ID. You are responsible for maintaining the
                            confidentiality of your login information and for all activity under your account. Only one
                            individual may use an account, though you may access it from multiple devices.
                        </p>
                        <p>
                            We reserve the right to suspend or terminate accounts involved in suspicious activity, including
                            spamming, unauthorized API usage, or violating these Terms.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="app-usage">3. App Usage</h2>
                        <p>
                            NutriTrack helps users log meals, calories, and fitness progress. You may not use the app for any
                            unlawful purpose, attempt to reverse engineer or copy its source code, or use automated systems to
                            overload or interfere with the Service.
                        </p>
                        <p>
                            We may modify or discontinue certain features at any time without notice. You may delete your
                            account at any time via in-app settings or by contacting{" "}
                            <a href="mailto:privacy@nutritrack-app.com" className="text-brand underline">
                                privacy@nutritrack-app.com
                            </a>.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="future-subscriptions">4. Future Subscriptions</h2>
                        <p>
                            NutriTrack is currently free to use. We may introduce premium or subscription-based features in the
                            future. Users will be notified before any paid features are activated, and all payments will be
                            handled securely through the App Store or other approved payment platforms.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="health-disclaimer">5. Health Disclaimer</h2>
                        <p>
                            NutriTrack provides calorie and nutrition information for educational and informational purposes
                            only. It is <strong>not</strong> a medical service, and we do not provide medical advice or
                            diagnosis. Always consult a qualified healthcare professional before making dietary or fitness
                            changes. Never disregard professional medical advice based on information from NutriTrack.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="third-party-services">6. Third‑Party Services</h2>
                        <p>
                            We use trusted third-party services to power NutriTrack, including Firebase (authentication and
                            analytics), Google Analytics, Apple HealthKit, and Formspree. NutriTrack also uses the{" "}
                            <strong>FatSecret Platform API</strong> to provide nutritional information. NutriTrack LLC is not
                            responsible for the accuracy or completeness of third-party data.
                        </p>
                        <p>
                            Your use of these features is also subject to each provider’s privacy policy and terms of service.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="data-privacy">7. Data &amp; Privacy</h2>
                        <p>
                            Your data is processed in accordance with our{" "}
                            <Link to="/privacy" className="text-brand underline">
                                Privacy Policy
                            </Link>
                            . You may export your weight logs or request deletion of your account data at any time.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="intellectual-property">8. Intellectual Property</h2>
                        <p>
                            All content, code, and design elements in NutriTrack are owned by NutriTrack LLC and protected by
                            copyright and intellectual property laws. You may not copy, reproduce, or distribute any part of
                            the app without written permission.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="termination">9. Termination</h2>
                        <p>
                            We may suspend or terminate your account at any time for conduct that violates these Terms or
                            disrupts the Service. You may stop using NutriTrack at any time. Upon termination, your access to
                            the Service will be revoked, but you can request deletion of any stored data.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="limitation">10. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, NutriTrack LLC and its affiliates shall not be liable for
                            any indirect, incidental, consequential, or special damages arising from your use of the Service,
                            including data loss or inaccurate information, even if advised of the possibility of such damages.
                        </p>
                        <p>
                            Our total liability to you for any claims arising out of these Terms or your use of the app will
                            not exceed $100 or the amount you paid (if any) for the Service in the last 12 months, whichever is
                            greater.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="dispute">11. Dispute Resolution &amp; Arbitration</h2>
                        <p>
                            Any dispute or claim arising out of or relating to these Terms shall be resolved by binding
                            arbitration in Ada County, Idaho, under the rules of the American Arbitration Association. You
                            agree to waive the right to a jury trial and to participate in class actions or representative
                            proceedings.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="governing-law">12. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of the State of Idaho, without regard to conflict of law
                            principles. Any disputes not subject to arbitration shall be heard in the courts of Ada County,
                            Idaho.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="changes">13. Changes to These Terms</h2>
                        <p>
                            We may modify these Terms at any time to reflect updates to our app or legal obligations. Updated
                            terms will be posted here with a new effective date. Continued use of NutriTrack after changes take
                            effect means you agree to the revised Terms.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-3" id="contact-us">14. Contact Us</h2>
                        <p>
                            For questions about these Terms, contact us at{" "}
                            <a href="mailto:privacy@nutritrack-app.com" className="text-brand underline">
                                privacy@nutritrack-app.com
                            </a>
                            .
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
        </>
    )
}
