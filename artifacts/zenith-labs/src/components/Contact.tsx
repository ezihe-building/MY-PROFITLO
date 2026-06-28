import { MessageCircle, Mail, Github, Video } from "lucide-react";

export function Contact() {
  const contacts = [
    { icon: <MessageCircle />, label: "WHATSAPP", href: "https://wa.me/+2348012345678" },
    { icon: <Mail />, label: "EMAIL", href: "mailto:richard@zenithlabs.dev" },
    { icon: <Github />, label: "GITHUB", href: "https://github.com/richard-zenith" },
    { icon: <Video />, label: "TIKTOK", href: "https://tiktok.com/@zenithlabs" }
  ];

  return (
    <section id="contact" className="py-32 relative bg-black/60 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-white mb-6 glow-text">
            𖤍 LET'S BUILD SOMETHING INCREDIBLE 𖤍
          </h2>
          <p className="text-gray-400 font-mono tracking-widest mb-16">
            Available for freelance projects and collaborations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass-card border border-white/10 hover:border-primary hover:bg-primary/5 transition-all duration-300 group hover:glow-box"
            >
              <span className="text-gray-400 group-hover:text-primary transition-colors">
                {contact.icon}
              </span>
              <span className="text-sm font-mono tracking-widest text-gray-200 group-hover:text-white transition-colors">
                {contact.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
