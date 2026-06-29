import { motion } from "framer-motion";
import { Globe, Layers, MessageCircle, BarChart3, Palette, Gamepad2, Sparkles, Settings } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Beautiful, responsive, high-performance websites." },
  { icon: Layers, title: "Full Stack Applications", desc: "End-to-end web apps with React, Node, and databases." },
  { icon: MessageCircle, title: "Telegram Bots", desc: "Smart automation bots with advanced features." },
  { icon: BarChart3, title: "Dashboard Systems", desc: "Real-time analytics and admin dashboards." },
  { icon: Palette, title: "Portfolio Websites", desc: "Cinematic, unforgettable personal portfolios." },
  { icon: Gamepad2, title: "Gaming Websites", desc: "Interactive, immersive gaming experiences." },
  { icon: Sparkles, title: "AI Integrations", desc: "GPT, Claude, and custom AI workflows." },
  { icon: Settings, title: "Custom Software", desc: "Bespoke solutions for unique problems." },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="amoled-section-title text-white mb-4"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-lg mx-auto"
          >
            Premium digital craftsmanship. Every project is treated like a battle worth winning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="amoled-card p-6 group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111] flex items-center justify-center mb-4 group-hover:bg-[#e63946]/10 transition-colors">
                  <Icon size={20} className="text-gray-400 group-hover:text-[#e63946] transition-colors" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
