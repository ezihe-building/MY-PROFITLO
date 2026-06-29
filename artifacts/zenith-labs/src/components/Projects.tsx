import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ZENITH DASHBOARD",
    description: "A real-time analytics dashboard with AI insights providing deep data intelligence for teams.",
    tech: ["React", "Node.js", "PostgreSQL", "AI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "REAPER BOT",
    description: "Advanced WhatsApp automation bot with 50+ features for premium users and businesses.",
    tech: ["Node.js", "WhatsApp API", "MongoDB"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    title: "CIPHER UI",
    description: "Next-gen design system with glassmorphism, animations, and premium component library.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
  },
  {
    title: "NEXUS PORTFOLIO",
    description: "The template engine behind this cinematic portfolio experience. Reusable, customizable.",
    tech: ["React", "Vite", "TypeScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="amoled-section-title text-white mb-4"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-lg mx-auto"
          >
            Real work. Real impact. Every project is forged with the same determination.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="amoled-card overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-2 py-1 bg-[#111] text-gray-400 text-xs font-medium rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-[#e63946] hover:text-white transition-colors">
                    <ExternalLink size={14} />
                    Demo
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#333] text-gray-300 text-sm font-medium rounded-full hover:border-[#e63946] hover:text-white transition-colors bg-transparent">
                    <Github size={14} />
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
