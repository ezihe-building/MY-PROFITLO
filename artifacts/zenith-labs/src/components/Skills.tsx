import { motion } from "framer-motion";
import { Zap, Layers, Palette, Server, Link2, Database, Smartphone, Brain } from "lucide-react";

const skills = [
  { icon: Zap, title: "Problem Solver", desc: "Finding solutions where others see obstacles" },
  { icon: Layers, title: "Full Stack", desc: "React, Node, Express, Next.js, Vite" },
  { icon: Palette, title: "UI Design", desc: "Figma, Tailwind, glassmorphism, motion" },
  { icon: Server, title: "Backend", desc: "REST APIs, GraphQL, microservices" },
  { icon: Link2, title: "API Integration", desc: "Stripe, OpenAI, WhatsApp, Telegram" },
  { icon: Database, title: "Database", desc: "PostgreSQL, MongoDB, Drizzle ORM" },
  { icon: Smartphone, title: "Responsive", desc: "Mobile-first, PWA, adaptive design" },
  { icon: Brain, title: "AI Dev", desc: "GPT-4, Claude, LangChain, AI workflows" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="amoled-section-title text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-lg mx-auto"
          >
            Weapons of a developer who refuses to settle for average.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="amoled-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#111] flex items-center justify-center mb-4 group-hover:bg-[#e63946] transition-colors duration-300">
                  <Icon size={22} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-1">{skill.title}</h3>
                <p className="text-gray-500 text-sm">{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
