import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isDarkSide = location === "/darkside";
  const isAboutRichard = location === "/about-richard";
  const isMainPage = !isDarkSide && !isAboutRichard;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-none">
            <div className="w-7 h-7 rounded-full border-2 border-[#e63946] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#e63946] sharingan-spin opacity-80" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              ZENITH LABS
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {isMainPage && navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <Link href="/about-richard">
              <span className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#e63946] transition-colors duration-200 font-medium cursor-none">
                <User size={14} />
                Richard
              </span>
            </Link>
            <Link href="/darkside">
              <span className="text-sm text-gray-400 hover:text-[#e63946] transition-colors duration-200 font-medium cursor-none">
                Dark Side
              </span>
            </Link>
            {isMainPage && (
              <button
                onClick={() => scrollTo("#contact")}
                className="px-4 py-1.5 text-sm font-medium bg-white text-black rounded-full hover:bg-[#e63946] hover:text-white transition-colors duration-200"
              >
                Hire Me
              </button>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-black pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {isMainPage && navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-lg font-medium text-gray-300 hover:text-[#e63946] transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <Link href="/about-richard">
                <span className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-[#e63946] transition-colors">
                  <User size={18} />
                  About Richard
                </span>
              </Link>
              <Link href="/darkside">
                <span className="text-lg font-medium text-gray-300 hover:text-[#e63946] transition-colors">
                  Dark Side
                </span>
              </Link>
              {isMainPage && (
                <button
                  onClick={() => scrollTo("#contact")}
                  className="mt-4 w-full py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-[#e63946] hover:text-white transition-colors"
                >
                  Hire Me
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
