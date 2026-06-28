import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("zenith-visited");
    if (hasVisited) {
      setSkip(true);
      onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    if (skip) return;

    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 4500),
      setTimeout(() => setStep(4), 5500),
      setTimeout(() => setStep(5), 6500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [skip]);

  if (skip) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Ambient Effects */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black" />
        
        <div className="z-10 text-center flex flex-col items-center justify-center min-h-[300px]">
          {step >= 0 && step < 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg md:text-2xl text-gray-400 font-mono tracking-widest"
            >
              {step === 0 && "> Some people write code..."}
              {step === 1 && "> I build digital experiences."}
              {step === 2 && "> Welcome to the world of..."}
            </motion.p>
          )}

          {step >= 3 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white glow-text tracking-[0.2em] mb-4 text-center leading-tight">
                <span className="text-primary text-xl md:text-4xl align-middle mx-2">𖤍𒋲ᬼ⃟𓁹</span>
                ZENITH LABS
                <span className="text-primary text-xl md:text-4xl align-middle mx-2">𓁹༉ᬼ⃟𒋲𖤍</span>
              </h1>
              
              {step >= 4 && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gray-400 tracking-[0.3em] text-sm md:text-lg mb-12"
                >
                  FOUNDER: EZIHE CHIGORZIRIM (RICHARD)
                </motion.p>
              )}

              {step >= 5 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    localStorage.setItem("zenith-visited", "true");
                    onComplete();
                  }}
                  className="px-8 py-3 border border-primary text-primary font-mono tracking-widest hover:bg-primary hover:text-white transition-all duration-300 glow-box relative overflow-hidden group"
                >
                  <span className="relative z-10">ENTER SYSTEM</span>
                  <div className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </motion.button>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
