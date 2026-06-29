import { motion } from "framer-motion";
import { MessageCircle, Mail, Github, Video } from "lucide-react";

const contacts = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/2349035659542", color: "#25D366" },
  { icon: Mail, label: "Email", href: "mailto:richardezihe72@gmail.com", color: "#EA4335" },
  { icon: Github, label: "GitHub", href: "https://github.com/ezihe-build", color: "#333333" },
  { icon: Video, label: "TikTok", href: "https://tiktok.com/@vx.edites02", color: "#000000" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
        >
          Let's Build Something{" "}
          <span className="text-[#e63946]">Incredible.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-lg max-w-lg mx-auto mb-16"
        >
          Available for freelance projects and collaborations. Let's create something that changes the game.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={i}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full hover:border-[#e63946] hover:bg-[#111] transition-all duration-300 group"
              >
                <Icon size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {contact.label}
                </span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-gray-600 text-sm"
        >
          <p>Based in Nigeria 🇳🇬 · Working Worldwide 🌍</p>
        </motion.div>
      </div>
    </section>
  );
}
