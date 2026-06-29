import { motion } from "framer-motion";

const milestones = [
  { year: "2018", label: "Started Coding", desc: "First lines of Python and HTML" },
  { year: "2019", label: "First Website", desc: "Built a local business site" },
  { year: "2020", label: "First Bot", desc: "Created a WhatsApp automation bot" },
  { year: "2021", label: "Full Stack", desc: "Mastered React + Node.js stack" },
  { year: "2023", label: "AI Integration", desc: "Started building with GPT and AI APIs" },
  { year: "2025", label: "ZENITH LABS", desc: "Founded the studio. Global impact." },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="amoled-section-title text-white mb-4"
          >
            The Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-lg mx-auto"
          >
            From writing first code to founding a studio. Every step forged in fire.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-[#1a1a1a]" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center"
              >
                <div className="w-3 h-3 rounded-full bg-black border-2 border-[#333] shadow-sm z-10 md:mb-8 shrink-0" />
                <div className="text-center mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-[#e63946] mb-1">{m.year}</div>
                  <div className="font-semibold text-white text-sm mb-1">{m.label}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{m.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
