import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-50 overflow-hidden"
    >
      {/* Background Glow / Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Build{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Modern
            </span>
            <br /> Web Experiences
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
            Elevate your brand with sleek, fast, and responsive websites. 
            Our stack blends <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">Vite</span>, 
            and <span className="font-semibold text-pink-600 dark:text-pink-400">TailwindCSS</span>{" "}
            to craft designs that don’t just look good, but perform beautifully on any device.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-5">
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transition"
            >
              🚀 Get Started
            </motion.a>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-600 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              Learn More →
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          {/* <img
            src="https://illustrations.popsy.co/white/responsive-design.svg"
            alt="Hero Illustration"
            className="w-96 sm:w-[28rem] md:w-[32rem] drop-shadow-2xl"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}
