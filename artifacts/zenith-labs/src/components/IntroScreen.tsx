import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1800),
      setTimeout(() => setStep(2), 3600),
      setTimeout(() => setStep(3), 5000),
      setTimeout(() => setStep(4), 6200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    localStorage.setItem("zenith-intro-seen", "true");
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e63946]/5 blur-[200px]" />
        </div>

        <div className="z-10 text-center flex flex-col items-center justify-center min-h-[300px] px-6">
          {step < 3 && (
            <motion.p
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg md:text-2xl text-gray-500 font-mono tracking-wider"
            >
              {step === 0 && "> Some people write code..."}
              {step === 1 && "> I build digital experiences."}
              {step === 2 && "> Welcome to the world of..."}
              <span className="typing-cursor" />
            </motion.p>
          )}

          {step >= 3 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 leading-none">
                ZENITH LABS
              </h1>
              {step >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-6"
                >
                  <p className="text-gray-400 tracking-widest text-sm md:text-base font-medium">
                    FOUNDER: EZIHE CHIGORZIRIM (RICHARD)
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnter}
                    className="mt-4 px-8 py-3 bg-white text-black font-semibold text-sm tracking-wider rounded-full hover:bg-[#e63946] hover:text-white transition-all duration-300 shadow-lg"
                  >
                    ENTER
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
