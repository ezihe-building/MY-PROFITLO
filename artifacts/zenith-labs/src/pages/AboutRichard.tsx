import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Gamepad2, Code, Tv, Moon, Music, Heart, Zap, Trophy, Headphones } from "lucide-react";
import { useMusic } from "@/contexts/MusicContext";

/* Image Slider Component */
function ImageSlider({ images, title }: { images: { src: string; caption: string }[]; title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-16">
      <p className="text-center text-gray-500 text-xs font-mono tracking-wider uppercase mb-4">{title}</p>
      <div className="relative aspect-video rounded-xl overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index].src}
            alt={images[index].caption}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white text-sm font-medium">{images[index].caption}</p>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-[#e63946]" : "bg-[#333]"}`}
          />
        ))}
      </div>
    </div>
  );
}

const animeImages = [
  { src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=450&fit=crop", caption: "The Uchiha way. Absolute power, zero excuses." },
  { src: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&h=450&fit=crop", caption: "Late night anime binge > sleep. Always." },
  { src: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&h=450&fit=crop", caption: "Shonen energy. Never give up on the code." },
  { src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop", caption: "The will of fire burns in every commit." },
];

const codmImages = [
  { src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop", caption: "Legendary ranked. 1v5 clutch moments." },
  { src: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop", caption: "Battle Royale final circle. Heart pounding." },
  { src: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=800&h=450&fit=crop", caption: "Sniper elite. One shot, one kill." },
  { src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=450&fit=crop", caption: "Sweaty lobbies at 2AM. Pure adrenaline." },
];

const funFacts = [
  { icon: Moon, label: "Night Owl", text: "My best code is written between 11PM and 4AM. The world is quiet. The bugs are loud." },
  { icon: Gamepad2, label: "CODM Grinder", text: "Legendary rank every season. MP and BR. If you see me in ranked, run." },
  { icon: Tv, label: "Anime Addict", text: "Naruto, AOT, JJK, Demon Slayer. Madara Uchiha is the GOAT. Fight me." },
  { icon: Code, label: "Code First", text: "Started coding at 15. Haven't stopped since. Python was my first love." },
  { icon: Music, label: "Vibe Coder", text: "Can't code without music. Afrobeats, slowed funk, anime OSTs — everything hits different." },
  { icon: Heart, label: "Naija Boy", text: "Proudly Nigerian. Lagos energy in every line of code. Representing 234 worldwide." },
  { icon: Zap, label: "Fast Learner", text: "Saw React once. Built a portfolio the next day. Stack Overflow is my second home." },
  { icon: Trophy, label: "Competitive", text: "Everything is a competition. Coding, gaming, life. If I'm not winning, I'm learning." },
  { icon: Headphones, label: "Always Plugged", text: "Music in one ear, code in the other. That's the workflow." },
];

export default function AboutRichard() {
  const { isPlaying } = useMusic();
  const [activeTab, setActiveTab] = useState<"anime" | "gaming" | "code">("anime");

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-2 text-white font-semibold text-sm tracking-tight cursor-none">
              <ChevronLeft size={16} className="text-[#e63946]" />
              <span className="text-[#e63946]">ZENITH</span> LABS
            </span>
          </Link>
          <div className="flex items-center gap-3">
            {isPlaying && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-[#e63946]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e63946] animate-pulse" />
                Skyfall playing
              </span>
            )}
            <span className="text-xs font-mono text-gray-500">ABOUT RICHARD</span>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6 max-w-[1000px] mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e63946] to-[#8b0000] mx-auto mb-6 flex items-center justify-center">
            <Code size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-3">
            Ezihe Chigorzirim
          </h1>
          <p className="text-[#e63946] font-mono text-sm tracking-wider mb-4">
            (RICHARD) · FULL STACK DEV · ANIME HEAD · GAMER · NIGHT OWL
          </p>
          <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed">
            Just a guy from Nigeria who fell in love with code, got obsessed with anime,
            and spends way too much time on CODM. Building ZENITH LABS one line at a time.
          </p>
        </motion.div>

        {/* Personality Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24"
        >
          {funFacts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-5 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl hover:border-[#e63946] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#111] flex items-center justify-center group-hover:bg-[#e63946]/10 transition-colors">
                    <Icon size={18} className="text-gray-400 group-hover:text-[#e63946] transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-white">{fact.label}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{fact.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tabbed Slideshow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex justify-center gap-4 mb-8">
            {(["anime", "gaming", "code"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#e63946] text-white"
                    : "bg-[#111] text-gray-400 hover:text-white border border-[#1a1a1a]"
                }`}
              >
                {tab === "anime" && "Anime Vibes"}
                {tab === "gaming" && "CODM Moments"}
                {tab === "code" && "Code Life"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "anime" && (
              <motion.div key="anime" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <ImageSlider images={animeImages} title="Anime Life" />
              </motion.div>
            )}
            {activeTab === "gaming" && (
              <motion.div key="gaming" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <ImageSlider images={codmImages} title="CODM Grind" />
              </motion.div>
            )}
            {activeTab === "code" && (
              <motion.div key="code" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="max-w-2xl mx-auto p-8 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl text-center">
                  <Code size={40} className="text-[#e63946] mx-auto mb-4" />
                  <p className="text-gray-400 font-mono text-sm leading-loose">
                    const richard = {'{'}<br/>
                    &nbsp;&nbsp;location: &quot;Nigeria 🇳🇬&quot;,<br/>
                    &nbsp;&nbsp;stack: [&quot;React&quot;, &quot;Node&quot;, &quot;Python&quot;, &quot;AI&quot;],<br/>
                    &nbsp;&nbsp;anime: &quot;Madara Uchiha stan&quot;,<br/>
                    &nbsp;&nbsp;game: &quot;CODM Legendary&quot;,<br/>
                    &nbsp;&nbsp;hours: &quot;2AM - 6AM peak performance&quot;,<br/>
                    &nbsp;&nbsp;music: &quot;Skyfall on loop&quot;,<br/>
                    &nbsp;&nbsp;vibe: &quot;Build first, sleep later&quot;<br/>
                    {'}'};
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-20"
        >
          <div className="border-l-2 border-[#e63946] pl-6 max-w-xl mx-auto text-left">
            <p className="text-xl md:text-2xl font-bold text-white mb-3 italic">
              "Wake up. Code. Game. Watch anime. Sleep (maybe). Repeat."
            </p>
            <p className="text-[#e63946] font-mono text-xs tracking-wider">
              — MY ACTUAL DAILY ROUTINE
            </p>
          </div>
        </motion.div>

        {/* Return */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/">
            <span className="inline-flex items-center gap-2 px-8 py-3 border border-[#e63946] text-[#e63946] font-semibold rounded-full hover:bg-[#e63946] hover:text-white transition-all duration-300 cursor-none">
              <ChevronLeft size={18} />
              Back to ZENITH
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-gray-700 text-xs font-mono">
            Built by a guy who drinks energy drinks and writes code — EZIHE CHIGORZIRIM
          </p>
        </div>
      </footer>
    </div>
  );
}
