import { motion } from "framer-motion";
import { Terminal, Code, Cpu, MessageSquare, Layout, Bot } from "lucide-react";

export function About() {
  const roles = [
    { icon: <Terminal size={20} />, title: "Software Developer" },
    { icon: <Code size={20} />, title: "Full Stack Developer" },
    { icon: <Layout size={20} />, title: "Web App Developer" },
    { icon: <MessageSquare size={20} />, title: "WhatsApp Bot Dev" },
    { icon: <Cpu size={20} />, title: "UI/UX Designer" },
    { icon: <Bot size={20} />, title: "AI Workflow Builder" },
  ];

  const missionText = "I don't just build software. I build digital experiences that people remember.".split(". ");

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-white mb-2 glow-text">
            𓁹 ABOUT THE FOUNDER 𓁹
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow-box" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-reveal opacity-0 -translate-x-10 transition-all duration-1000 delay-200">
            <h3 className="text-2xl text-white font-mono tracking-widest border-l-2 border-primary pl-4">
              EZIHE CHIGORZIRIM <br/>
              <span className="text-primary text-sm">(RICHARD)</span>
            </h3>
            <p className="text-gray-400 font-mono flex items-center gap-2">
              <span className="text-primary">LOCATION:</span> NIGERIA 🇳🇬
            </p>
            
            <div className="mt-8 space-y-4 font-serif text-xl md:text-2xl italic text-gray-300 leading-relaxed">
              {missionText.map((sentence, i) => (
                <p key={i} className="mb-2">
                  {sentence}{sentence && i < missionText.length - 1 ? "." : ""}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 scroll-reveal opacity-0 translate-x-10 transition-all duration-1000 delay-300">
            {roles.map((role, i) => (
              <div 
                key={i} 
                className="glass-card p-4 flex flex-col items-center justify-center text-center gap-3 hover:-translate-y-1 transition-transform duration-300 hover:border-primary/50 group"
              >
                <div className="text-gray-500 group-hover:text-primary transition-colors duration-300">
                  {role.icon}
                </div>
                <span className="text-sm font-mono text-gray-300 group-hover:text-white">
                  {role.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
