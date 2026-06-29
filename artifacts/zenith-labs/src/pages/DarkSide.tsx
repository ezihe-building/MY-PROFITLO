import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Skull, Bug, Zap, Shield, Fingerprint, AlertTriangle, Code2, Terminal, ChevronLeft } from "lucide-react";

/* Matrix Rain Canvas */
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(230, 57, 70, 0.3)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-30" />;
}

/* Scan line overlay */
function ScanLine() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      <div className="scan-line" />
    </div>
  );
}

const darkFeatures = [
  {
    icon: Bug,
    title: "Bug Hunter",
    desc: "I don't just write bugs. I create them on purpose, then hunt them down. The chase is everything.",
    color: "#dc143c",
  },
  {
    icon: Shield,
    title: "Exploit Engineer",
    desc: "Finding vulnerabilities before the bad guys do. White hat by day, understanding the dark by night.",
    color: "#ff1744",
  },
  {
    icon: Zap,
    title: "Virus Architect",
    desc: "Built malware detection systems by understanding how viruses think. Know thy enemy.",
    color: "#e63946",
  },
  {
    icon: Fingerprint,
    title: "Penetration Testing",
    desc: "Breaking into systems (legally) to make them bulletproof. Every crack found is a fortress reinforced.",
    color: "#dc143c",
  },
  {
    icon: Terminal,
    title: "Terminal Sorcerer",
    desc: "The command line is my wand. I cast spells in bash, conjure scripts in Python, summon demons in C.",
    color: "#ff1744",
  },
  {
    icon: Code2,
    title: "Chaos Coder",
    desc: "Beautiful code and ugly code — I speak both fluently. Sometimes you need to break things to build better.",
    color: "#e63946",
  },
];

const corruptionLog = [
  { line: "> Initializing dark mode...", delay: 0 },
  { line: "> Bypassing security protocols...", delay: 0.5 },
  { line: "> Accessing forbidden directories...", delay: 1 },
  { line: "> WARNING: Unauthorized access detected", delay: 1.5 },
  { line: "> Deploying countermeasures...", delay: 2 },
  { line: "> COUNTERMEASURES FAILED", delay: 2.5 },
  { line: "> Welcome to the Dark Side.", delay: 3 },
];

export default function DarkSide() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showEnter, setShowEnter] = useState(false);
  const [entered, setEntered] = useState(false);
  const matrixAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = "/audio/matrix-ultra-slowed.mp3";
    audio.loop = true;
    matrixAudio.current = audio;
    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    corruptionLog.forEach((item, i) => {
      setTimeout(() => setVisibleLines(i + 1), item.delay * 1000 + 500);
    });
    setTimeout(() => setShowEnter(true), 4000);
  }, []);

  const handleEnter = () => {
    if (entered) return;
    setEntered(true);
    if (matrixAudio.current) {
      matrixAudio.current.play().catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <MatrixRain />
      <ScanLine />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-2 text-white font-semibold text-sm tracking-tight cursor-none">
              <ChevronLeft size={16} className="text-[#dc143c]" />
              <span className="text-[#dc143c]">ZENITH</span> LABS
            </span>
          </Link>
          <span className="text-xs font-mono text-[#dc143c] animate-pulse">
            DARK SIDE ACTIVE
          </span>
        </div>
      </nav>

      <div className="pt-32 pb-16 px-6 max-w-[1200px] mx-auto relative z-10">
        {/* Boot sequence */}
        <div className="font-mono text-sm space-y-2 mb-16">
          {corruptionLog.slice(0, visibleLines).map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${
                log.line.includes("WARNING") || log.line.includes("FAILED")
                  ? "text-[#ff1744]"
                  : log.line.includes("Welcome")
                  ? "text-[#dc143c] font-bold"
                  : "text-gray-500"
              }`}
            >
              {log.line}
            </motion.div>
          ))}
        </div>

        {/* ENTER Button */}
        {showEnter && !entered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Skull size={32} className="text-[#dc143c]" />
              <AlertTriangle size={24} className="text-[#ff1744]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
              The{" "}
              <span className="text-gradient-sukuna glitch-text" data-text="Dark Side">
                Dark Side
              </span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto font-mono mb-8">
              Every developer has one. This is where bugs are born, exploits are engineered, and systems are pushed to their breaking point.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="px-10 py-4 bg-[#dc143c] text-white font-bold text-sm tracking-widest rounded-full hover:bg-[#ff1744] transition-all duration-300 shadow-[0_0_40px_rgba(220,20,60,0.4)]"
            >
              ENTER THE DARKNESS
            </motion.button>
            <p className="text-gray-600 text-xs font-mono mt-4">
              MATRIX — Ultra Slowed will play
            </p>
          </motion.div>
        )}

        {/* Main Content */}
        {entered && (
          <>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
              {darkFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="relative group p-6 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#dc143c] transition-all duration-500"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${feature.color}10, transparent 70%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}30` }}
                      >
                        <Icon size={22} style={{ color: feature.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center mb-32 max-w-2xl mx-auto"
            >
              <div className="border-l-2 border-[#dc143c] pl-6">
                <p className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
                  "In the world of code, there is no good or evil. Only those who build, and those who destroy. I do both."
                </p>
                <p className="text-[#dc143c] font-mono text-sm">
                  — EZIHE CHIGORZIRIM (RICHARD)
                </p>
              </div>
            </motion.div>

            {/* Stats / Damage Report */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32"
            >
              {[
                { label: "Bugs Created", value: "∞", sub: "and counting" },
                { label: "Exploits Found", value: "47", sub: "white hat verified" },
                { label: "Systems Broken", value: "128", sub: "then rebuilt stronger" },
                { label: "Dark Projects", value: "13", sub: "classified" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  className="text-center p-6 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#dc143c] mb-1">{stat.value}</div>
                  <div className="text-white text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-600 text-xs">{stat.sub}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Return button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-center pb-20"
            >
              <Link href="/">
                <span className="inline-flex items-center gap-2 px-8 py-3 bg-[#dc143c] text-white font-semibold rounded-full hover:bg-[#ff1744] transition-colors cursor-none">
                  <ChevronLeft size={18} />
                  Return to the Light
                </span>
              </Link>
            </motion.div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-[#1a1a1a] relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-gray-700 text-xs font-mono">
            [CLASSIFIED] ZENITH LABS DARK DIVISION — UNAUTHORIZED ACCESS IS MONITORED
          </p>
        </div>
      </footer>
    </div>
  );
}
