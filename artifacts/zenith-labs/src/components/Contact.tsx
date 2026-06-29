import { motion } from "framer-motion";
import { MessageCircle, Mail, Github, Video } from "lucide-react";

const contacts = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/+2348012345678", color: "#25D366" },
  { icon: Mail, label: "Email", href: "mailto:richard@zenithlabs.dev", color: "#EA4335" },
  { icon: Github, label: "GitHub", href: "https://github.com/richard-zenith", color: "#333333" },
  { icon: Video, label: "TikTok", href: "https://tiktok.com/@zenithlabs", color: "#000000" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Let's Build Something{" "}
          <span className="text-[#e63946]">Incredible.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-lg mx-auto mb-16"
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
                className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#e63946] transition-all duration-300 group"
              >
                <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
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
