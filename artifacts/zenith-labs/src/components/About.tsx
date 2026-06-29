import { motion } from "framer-motion";
import { Terminal, Code, Cpu, MessageSquare, Layout, Bot } from "lucide-react";

const roles = [
  { icon: Terminal, title: "Software Developer" },
  { icon: Code, title: "Full Stack Developer" },
  { icon: Layout, title: "Web App Developer" },
  { icon: MessageSquare, title: "WhatsApp Bot Dev" },
  { icon: Cpu, title: "UI/UX Designer" },
  { icon: Bot, title: "AI Workflow Builder" },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="amoled-section-title text-white mb-4"
          >
            About the Founder
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-lg mx-auto"
          >
            The man behind the code. Nigeria-based. World-class.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              EZIHE CHIGORZIRIM
            </h3>
            <p className="text-[#e63946] font-semibold mb-6 text-sm tracking-wider">
              (RICHARD) · NIGERIA 🇳🇬
            </p>

            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p className="typing-cursor">
                "I don't just build software.
              </p>
              <p>
                I build digital experiences that people remember."
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#1a1a1a] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-[#e63946] sharingan-spin" />
              </div>
              <span className="text-sm text-gray-500 font-medium">
                Inspired by the will of a true visionary
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="amoled-card p-5 flex items-center gap-3 hover:border-[#e63946] group"
                >
                  <Icon size={18} className="text-gray-500 group-hover:text-[#e63946] transition-colors" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {role.title}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
