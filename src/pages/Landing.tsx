import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { gaEvent } from "../analytics"

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">Track your nutrition, build better habits.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              NutriTrack helps you log meals, analyze macros, and stay
              consistent with personalized insights. Simple, fast, and built
              for real life.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://testflight.apple.com/join/uhsJJhnK" target='_blank' rel="noopener noreferrer" className="rounded-md bg-main px-3 py-2 text-sm font-semibold text-white hover:bg-main-dark">Download Beta</a>
            </div>

          </div>

          <div className="relative">
            {/* Fallback placeholder visual */}
            <img src="flyer-green.png" className="aspect-[4/3] w-full   " />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Why NutriTrack?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Fast meal logging",
              desc: "Save time with quick-add foods and recent meals.",
            },
            {
              title: "Macro insights",
              desc: "Understand protein, carbs, fats, and calories at a glance.",
            },
            {
              title: "Habit streaks",
              desc: "Stay motivated with daily goals and streak tracking.",
            },
            {
              title: "Personalized targets",
              desc: "Calibrated to your goals: cut, bulk, or maintain.",
            },
            {
              title: "Privacy-first",
              desc: "Your data stays yours. Export or delete anytime.",
            },
            {
              title: "Cross-device sync",
              desc: "Use it on web and mobile, seamlessly.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 h-8 w-8 rounded">
                <img src="/logo-green.jpg" className="h-8 w-8 rounded" />
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* 1-2-3 Section */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:mt-28 sm:px-6">
        <h2 className="text-center text-3xl sm:text-5xl font-extrabold bg-gradient-to-r  from-[#FF7F11] via-main to-main-dark bg-clip-text text-transparent">
          Hit your goals, one meal at a time.
        </h2>

        <div className="mt-14 grid gap-12 lg:gap-16">
          {/* Step 1 */}
          <div className="group relative rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden">
            <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-main text-white font-bold text-lg">1</div>
            <div className="grid md:grid-cols-2 items-center">
              <div className="bg-main/20 flex items-center justify-center p-6">
                <img src="/app-img-diary.png" alt="Track calories" className="w-64 max-w-full " />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold">Log meals your way</h3>
                <p className="mt-3 text-gray-600 text-lg">
                  Snap barcodes, speak your foods, or tap quick-add. Logging has never been easier.
                </p>
              </div>

            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden">
            <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-main text-white font-bold text-lg">2</div>
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 order-2 md:order-1">
                <h3 className="text-2xl font-semibold">See your progress clearly</h3>
                <p className="mt-3 text-gray-600 text-lg">
                  Charts, streaks, and insights that keep you on track without stressing perfection.
                </p>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center p-6 bg-[#FF7F11]/20">
                <img
                  src="/app-img-home.png"
                  alt="Follow progress"
                  className="w-80 max-w-full rounded-2xl "
                />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden">
            <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-main text-white font-bold text-lg">3</div>
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 order-2 md:order-2">
                <h3 className="text-2xl font-semibold">Smarter eating, simplified</h3>
                <p className="mt-3 text-gray-600 text-lg">
                  Discover what fuels you best and get meal ideas tailored to your lifestyle.
                </p>
              </div>
              <div className=" order-1 md:order-1 flex items-center justify-center p-6 bg-[#FF69B4]/20">
                <img src="/app-img-search.png" alt="Search foods" className="w-64 max-w-full " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="rounded-2xl bg-main px-6 py-10 text-white sm:px-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Start tracking today</h2>
            <p className="mt-2 text-white/90">
              Join others building sustainable nutrition habits with NutriTrack.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* <a
                href="#/"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black "
              >
                Create Free Account
              </a> */}
              <a
                href="https://testflight.apple.com/join/uhsJJhnK"
                className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black"
                onClick={() => {
                  if (import.meta.env.PROD) {
                    gaEvent('click', {
                      label: 'Join Beta Link',
                      location: 'CTA Section',
                    });
                  }
                }}
              >
                Join our Beta
              </a>
            </div>
          </div>
        </div>
      </section >
      <div className="mt-16" />
      <Footer />
    </div >
  )
}
