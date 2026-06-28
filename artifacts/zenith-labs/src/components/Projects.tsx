import dashboardImg from "@assets/screenshots/empirebot001_vercel_app.png";

export function Projects() {
  const projects = [
    {
      title: "ZENITH DASHBOARD",
      description: "A real-time analytics dashboard with AI insights providing deep data intelligence.",
      tech: "React, Node.js, PostgreSQL, AI",
      img: "/projects/dashboard.png"
    },
    {
      title: "REAPER BOT",
      description: "Advanced WhatsApp automation bot with 50+ features for premium users.",
      tech: "Node.js, WhatsApp Web API, MongoDB",
      img: "/projects/reaper.png"
    },
    {
      title: "CIPHER UI",
      description: "Next-gen glassmorphism design system for premium web applications.",
      tech: "React, Tailwind, Framer Motion",
      img: "/projects/cipher.png"
    },
    {
      title: "NEXUS PORTFOLIO",
      description: "The template engine behind this cinematic portfolio experience.",
      tech: "React, Vite, TypeScript",
      img: "/projects/nexus.png"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-white mb-2 glow-text">
            𒋲 PROJECTS 𒋲
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow-box" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="glass-card group overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 scroll-reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden border-b border-white/10 group-hover:border-primary/30 transition-colors">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white tracking-widest mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-xs text-primary font-mono tracking-widest block mb-2">TECH STACK</span>
                  <p className="text-gray-300 text-sm font-mono">{project.tech}</p>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="px-6 py-2 bg-primary/10 border border-primary text-primary text-sm font-mono tracking-widest hover:bg-primary hover:text-white transition-colors">
                    DEMO
                  </a>
                  <a href="#" className="px-6 py-2 border border-white/20 text-gray-300 text-sm font-mono tracking-widest hover:border-white transition-colors">
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
