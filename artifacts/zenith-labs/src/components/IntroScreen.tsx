import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "> Some people write code...",
  "> I build digital experiences.",
  "> Welcome to the world of...",
];

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [dismissed, setDismissed] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLineIndex(1), 1800);
    const t2 = setTimeout(() => setLineIndex(2), 3600);
    const t3 = setTimeout(() => setShowTitle(true), 5000);
    const t4 = setTimeout(() => setShowButton(true), 6200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleEnter = () => {
    onComplete();
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Ambient red glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e63946]/5 blur-[200px]" />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center justify-center min-h-[300px] px-6">
          {/* Typewriter lines */}
          {!showTitle && (
            <motion.div
              key={lineIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg md:text-2xl text-gray-500 font-mono tracking-wider"
            >
              {LINES[lineIndex]}
              <span className="typing-cursor" />
            </motion.div>
          )}

          {/* Title reveal */}
          <AnimatePresence>
            {showTitle && (
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter mb-3 leading-none">
                  ZENITH LABS
                </h1>

                {showButton && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-5 mt-6"
                  >
                    <p className="text-gray-400 tracking-[0.2em] text-xs md:text-sm font-semibold uppercase">
                      Founder: Ezihe Chigorzirim (Richard)
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={handleEnter}
                      className="px-10 py-3.5 bg-white text-black font-bold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-[#e63946] hover:text-white transition-all duration-300 shadow-lg"
                    >
                      ENTER
                    </motion.button>

                    <p className="text-gray-700 text-xs font-mono mt-1">
                      Skyfall — Adele will play
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
