import { useKonamiCode } from "@/hooks/use-konami-code";
import { motion, AnimatePresence } from "framer-motion";

export function KonamiOverlay() {
  const konamiActive = useKonamiCode();

  return (
    <AnimatePresence>
      {konamiActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-[#e63946] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-4">
              ACCESS GRANTED
            </h1>
            <p className="text-white/80 text-lg font-medium">
              The Uchiha bloodline recognizes a true developer.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
