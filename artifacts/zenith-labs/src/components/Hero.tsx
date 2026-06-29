import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#e63946]/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#e63946]/3 blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1a1a1a] bg-[#0a0a0a]"
          >
            <span className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
            <span className="text-xs text-gray-500 font-medium">System Online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="amoled-hero-text text-white mb-2"
          >
            Develop.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="amoled-hero-text text-white mb-2"
          >
            Deploy.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="amoled-hero-text text-gradient-red mb-8"
          >
            Dominate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-500 text-lg md:text-xl max-w-xl mb-8 font-medium"
          >
            Where code becomes art. Founded by{" "}
            <span className="text-white font-semibold">
              EZIHE CHIGORZIRIM
              <span className="text-[#e63946] ml-1">
                {"\u096D"}{"\u02E4"}{"\u20B2"}{"\u0BFC"}{"\u20DD"}{"\uD801"}{"\uDF49"}{"\uD801"}{"\uDF3B"}
                {"EZIHE"}{"\uD801"}{"\uDF3B"}{"\u0BFC"}{"\u20DD"}{"\u02E4"}{"\u096D"}
              </span>
            </span>{" "}
            — a developer who believes in absolute power through software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col gap-4 w-full max-w-sm"
          >
            <a
              href="https://wa.me/2349035659542"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-sm tracking-wider rounded-full hover:bg-[#128C7E] transition-colors duration-300 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle size={20} />
              DM ON WHATSAPP FOR FASTER RESPONSE
            </a>
            <div className="flex gap-3">
              <button
                onClick={() => scrollTo("#projects")}
                className="flex-1 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-[#e63946] hover:text-white transition-colors duration-200 text-sm"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="flex-1 px-6 py-3 border border-[#333] text-gray-300 font-medium rounded-full hover:border-[#e63946] hover:text-white transition-colors duration-200 text-sm bg-transparent"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Interactive Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] cursor-none"
          >
            {/* Rotating border ring */}
            <div className="absolute -inset-3 rounded-[2rem] border-2 border-[#e63946]/30 animate-[spin_8s_linear_infinite]" />
            <div className="absolute -inset-5 rounded-[2.5rem] border border-[#e63946]/10 animate-[spin_12s_linear_infinite_reverse]" />

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e63946]/20 to-transparent blur-xl opacity-50" />

            {/* Card */}
            <div
              className="relative w-full h-full rounded-3xl overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a]"
              style={{ transform: "translateZ(75px)" }}
            >
              <img
                src="/richard-photo.png"
                alt="Ezihe Chigorzirim - Richard"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Name badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-md rounded-xl px-4 py-3 border border-[#e63946]/20">
                  <p className="text-white font-bold text-sm">
                    EZIHE CHIGORZIRIM
                  </p>
                  <p className="text-gray-400 text-xs font-mono">
                    Full Stack Developer · Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#e63946] flex items-center justify-center"
              style={{ transform: "translateZ(100px)" }}
            >
              <div className="w-3 h-3 rounded-full border border-white/50 sharingan-spin" />
            </div>
            <div
              className="absolute -bottom-2 -left-6 px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-[10px] text-gray-400 font-mono"
              style={{ transform: "translateZ(90px)" }}
            >
              Available for hire
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs font-medium tracking-wider">SCROLL</span>
        <div className="w-px h-8 bg-gray-700" />
      </motion.div>
    </section>
  );
}
