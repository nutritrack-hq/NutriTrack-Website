import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { gaEvent } from "../analytics"
import { Helmet } from "react-helmet-async"
import { motion, type Variants } from "framer-motion"

export default function Landing() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>MacroAura — Track Your Nutrition, Build Better Habits</title>
        <meta
          name="description"
          content="MacroAura helps you log meals, analyze macros, and build better nutrition habits with personalized insights. Simple, privacy-first, and built for real life."
        />
        <link rel="canonical" href="https://www.macroaura.com/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.macroaura.com/" />
        <meta property="og:title" content="MacroAura — Track Your Nutrition, Build Better Habits" />
        <meta property="og:description" content="MacroAura helps you log meals, analyze macros, and build better nutrition habits with personalized insights. Simple, privacy-first, and built for real life." />
        <meta property="og:image" content="https://www.macroaura.com/logo-green.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:title" content="MacroAura — Track Your Nutrition, Build Better Habits" />
        <meta name="twitter:description" content="MacroAura helps you log meals, analyze macros, and build better nutrition habits with personalized insights. Simple, privacy-first, and built for real life." />
        <meta name="twitter:image" content="https://www.macroaura.com/logo-green.jpg" />
        {/* JSON-LD Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MacroAura",
              "url": "https://www.macroaura.com/",
              "logo": "https://www.macroaura.com/logo-green.jpg",
              "description": "MacroAura helps you log meals, analyze macros, and build better nutrition habits with personalized insights.",
              "sameAs": [
                "https://twitter.com/macroaura.co",
                "https://www.instagram.com/macroaura.co"
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-surface text-gray-900 font-sans selection:bg-main/20 selection:text-main-dark overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-20 pb-20 sm:pt-32 sm:pb-32 lg:pb-40 overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-main/10 rounded-full blur-3xl opacity-70"
            />
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-3xl opacity-70"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 text-center lg:text-left">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="inline-flex items-center rounded-full border border-main/30 bg-white/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-main-dark mb-8 shadow-sm"
                >
                  <span className="flex h-2 w-2 rounded-full bg-main mr-2 animate-pulse"></span>
                  Now available in Beta
                </motion.div>
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="text-5xl font-display font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl mb-6 leading-tight"
                >
                  Track nutrition, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-main-dark">
                    build habits.
                  </span>
                </motion.h1>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  MacroAura helps you log meals, analyze macros, and stay
                  consistent with personalized insights. Simple, fast, and built
                  for real life.
                </motion.p>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <a
                    href="https://testflight.apple.com/join/uhsJJhnK"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
                  >
                    <i className="fab fa-apple mr-2 text-xl"></i>
                    Download Beta
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-gray-900 shadow-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1"
                  >
                    Learn more
                  </a>
                </motion.div>

              </div>

              <div className="relative mt-16 lg:mt-0 lg:col-span-6 lg:flex lg:items-center justify-center">
                <div className="relative mx-auto w-4/6 max-w-[500px] lg:max-w-none">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative z-10 rounded-[2.5rem] p-2 "
                  >
                    <div className="rounded-[2rem] overflow-hidden">
                      <img
                        src="app-home.png"
                        className="w-full h-auto"
                        alt='MacroAura App Interface'
                      />
                    </div>
                  </motion.div>
                  {/* Decorative elements behind phone */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-main/20 to-accent/20 rounded-full blur-3xl opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-white relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-sm font-bold text-main tracking-widest uppercase mb-3"
              >
                Features
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-3xl font-display font-bold text-gray-900 sm:text-4xl"
              >
                Everything you need to stay on track
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mt-4 text-xl text-gray-600"
              >
                Powerful tools wrapped in a simple, intuitive interface designed for daily use.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  title: "Fast meal logging",
                  desc: "Save time with quick-add foods and recent meals.",
                  icon: "fa-bolt"
                },
                {
                  title: "Macro insights",
                  desc: "Understand protein, carbs, fats, and calories at a glance.",
                  icon: "fa-chart-pie"
                },
                {
                  title: "Habit streaks",
                  desc: "Stay motivated with daily goals and streak tracking.",
                  icon: "fa-fire"
                },
                {
                  title: "Personalized targets",
                  desc: "Calibrated to your goals: cut, bulk, or maintain.",
                  icon: "fa-bullseye"
                },
                {
                  title: "Privacy-first",
                  desc: "Your data stays yours. Export or delete anytime.",
                  icon: "fa-lock"
                },
                {
                  title: "Cross-device sync",
                  desc: "Use it on web and mobile, seamlessly.",
                  icon: "fa-sync"
                },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeInUp}
                  className="relative group rounded-3xl bg-surface p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100"
                >
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white text-main shadow-sm mb-6 group-hover:bg-main group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <i className={`fas ${f.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>



        {/* How it Works */}
        <section className="py-32 overflow-hidden bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-3xl font-display font-bold text-gray-900 sm:text-5xl"
              >
                Hit your goals, <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-main-dark">one meal at a time</span>
              </motion.h2>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block -translate-x-1/2"></div>

              <div className="space-y-32">
                {/* Step 1 */}
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="lg:text-right"
                  >

                    <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Log meals your way</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Snap barcodes, speak your foods, or tap quick-add. Logging has never been easier or faster.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 lg:mt-0 relative group"
                  >
                    <div className="relative rounded-3xl bg-white  transform transition-transform group-hover:scale-[1.02] duration-500 rotate-1">
                      <img src="/app-img-diary.png" alt="Track calories" className="w-3/5 rounded-2xl" />
                    </div>
                  </motion.div>
                </div>

                {/* Step 2 */}
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1 mt-12 lg:mt-0 relative group"
                  >
                    <div className="relative rounded-3xl  transform transition-transform group-hover:scale-[1.02] duration-500 rotate-1 ">
                      <img src="/app-home.png" alt="Follow progress" className="w-3/5 rounded-2xl" />
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="order-1 lg:order-2 lg:text-left"
                  >

                    <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">See your progress clearly</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Charts, streaks, and insights that keep you on track without stressing perfection.
                    </p>
                  </motion.div>
                </div>

                {/* Step 3 */}
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="lg:text-right"
                  >

                    <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Smarter eating, simplified</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Discover what fuels you best and get meal ideas tailored to your lifestyle.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 lg:mt-0 relative group"
                  >
                    <div className="relative rounded-3xl  transform transition-transform group-hover:scale-[1.02] duration-500 rotate-1">
                      <img src="/app-img-search.png" alt="Search foods" className="w-3/5 rounded-2xl" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-24 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-[3rem] bg-gray-900 px-6 py-24 shadow-2xl sm:px-12 sm:py-32 lg:px-16 text-center"
            >
              <div className="relative z-10">
                <h2 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl mb-6">
                  Start tracking today
                </h2>
                <p className="mx-auto max-w-2xl text-xl text-gray-300 mb-10">
                  Join others building sustainable nutrition habits with MacroAura.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://testflight.apple.com/join/uhsJJhnK"
                    className="rounded-full bg-main px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-main-dark hover:shadow-xl"
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
                  </motion.a>
                </div>
              </div>

              {/* Decorative background */}
              <div className="absolute top-0 left-0 -z-10 h-full w-full">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[-20%] left-[20%] h-96 w-96 rounded-full bg-main/20 blur-[100px]"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-[-20%] right-[20%] h-96 w-96 rounded-full bg-accent/20 blur-[100px]"
                />
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
