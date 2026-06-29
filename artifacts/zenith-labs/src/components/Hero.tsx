import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50"
        >
          <span className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
          <span className="text-xs text-gray-500 font-medium">System Online</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="vercel-hero-text text-black mb-2"
        >
          Develop.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="vercel-hero-text text-black mb-2"
        >
          Deploy.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="vercel-hero-text text-gradient mb-8"
        >
          Dominate.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-500 text-lg md:text-xl max-w-xl mb-12 font-medium"
        >
          Where code becomes art. Founded by EZIHE CHIGORZIRIM — a developer who believes in absolute power through software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-[#e63946] transition-colors duration-200 text-sm"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-[#e63946] hover:text-[#e63946] transition-colors duration-200 text-sm bg-white"
          >
            Hire Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs font-medium tracking-wider">SCROLL</span>
        <div className="w-px h-8 bg-gray-300" />
      </motion.div>
    </section>
  );
}
