import { useKonamiCode } from "@/hooks/use-konami-code";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export function KonamiOverlay() {
  const konamiActive = useKonamiCode();

  useEffect(() => {
    if (konamiActive) {
      document.body.classList.add("glitch-active");
    } else {
      document.body.classList.remove("glitch-active");
    }
  }, [konamiActive]);

  return (
    <AnimatePresence>
      {konamiActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] pointer-events-none flex items-center justify-center bg-red-900/20 mix-blend-overlay"
        >
          <div className="text-6xl md:text-9xl font-black text-white glow-text tracking-widest animate-pulse font-mono">
            ACCESS GRANTED
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
