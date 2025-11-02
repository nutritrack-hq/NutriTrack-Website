import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="prose prose-gray mt-6 max-w-none">
          <h1 className="text-4xl font-bold mb-4">NutriTrack Privacy Policy</h1>
          <p className="text-zinc-600 mb-6">Effective Date: November 1, 2025</p>

          <p className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 mb-6">
            We collect the data you give us (account info, food and weight logs, calories burned) to help you
            track your progress. We don’t sell your data. Everything is deleted if you delete your account.
            Must be 18+ to use.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">1. Who We Are</h2>
          <p>
            NutriTrack provides a mobile app that helps you log food, calories, and fitness progress.
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:privacy@nutritrack-app.com" className="text-brand underline">
              privacy@nutritrack-app.com
            </a>.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">2. What We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>First and last name, and email (when creating an account)</li>
            <li>Age, gender, height, weight, activity level, and fitness goals</li>
            <li>Food logs and the types of foods you eat</li>
            <li>Weight logs and goal weight</li>
            <li>Calories burned (via Apple HealthKit, if enabled)</li>
            <li>Basic app usage and crash analytics (via Firebase and Google Analytics)</li>
          </ul>

          <p className="mt-4">
            We do <strong>not</strong> collect precise location data or sensitive device identifiers.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">3. How We Use Data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide, maintain, and personalize your account</li>
            <li>To calculate calories, macros, and display progress tracking</li>
            <li>To store your food and weight logs until you delete them</li>
            <li>To analyze usage and improve app performance</li>
            <li>To ensure security and detect bugs or abuse</li>
          </ul>

          <p className="mt-4">
            Our legal basis for processing this data is your <strong>consent</strong> (when you create an
            account) and our <strong>legitimate interest</strong> in improving NutriTrack’s functionality.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">4. Sharing</h2>
          <p>
            We don’t sell or rent your data. We only share it with trusted service providers who help us run
            the app and website securely, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Firebase (authentication, database, crash reporting)</li>
            <li>Google Analytics (usage metrics)</li>
            <li>Apple HealthKit (if you grant access)</li>
            <li>Formspree (for contact form submissions)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-3">5. Data Retention</h2>
          <p>
            Your account, food logs, and weight logs are kept while you use the app. If you delete your
            account, all personal data is removed from our active systems. Backup copies are permanently
            deleted within 90 days.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">6. Security</h2>
          <p>
            We use encryption, authentication, and secure storage to protect your data. No system is 100%
            secure, but we take steps to keep your information safe. Data is stored on servers located in the
            United States.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">7. Your Rights</h2>
          <p>
            Depending on your state, you may have rights to access, correct, or delete your personal data. You
            may also request a copy of your information or ask us not to share it. NutriTrack does not sell or
            share data for advertising purposes.
          </p>
          <p>
            To exercise these rights, email{" "}
            <a href="mailto:privacy@nutritrack-app.com" className="text-brand underline">
              privacy@nutritrack-app.com
            </a>.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">8. Cookies and Do Not Track</h2>
          <p>
            Our website uses cookies for essential and analytical purposes only. You can disable cookies in
            your browser settings. We do not respond to “Do Not Track” signals because our tracking is limited
            to basic analytics.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">9. Children</h2>
          <p>
            NutriTrack is intended for users aged 18 and older. We do not knowingly collect data from anyone
            under 18. If we learn that a user under 18 has created an account, we will delete it immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">10. Data Transfers</h2>
          <p>
            Your information is processed and stored in the United States. If data is transferred across
            regions, we ensure adequate safeguards consistent with applicable data protection laws.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">11. Changes</h2>
          <p>
            We may update this Privacy Policy occasionally to reflect new features or legal requirements. Any
            updates will appear here with a new effective date.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">12. Contact</h2>
          <p>
            Questions or concerns? Contact us at{" "}
            <a href="mailto:privacy@nutritrack-app.com" className="text-brand underline">
              contact@nutritrack-app.com
            </a>
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
