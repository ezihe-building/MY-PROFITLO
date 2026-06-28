export function Skills() {
  const skills = [
    { title: "Problem Solver", icon: "⚡" },
    { title: "Full Stack Development", icon: "🔥" },
    { title: "Modern UI Design", icon: "✨" },
    { title: "Backend Development", icon: "💻" },
    { title: "API Integration", icon: "🔗" },
    { title: "Database Design", icon: "🗄️" },
    { title: "Responsive Design", icon: "📱" },
    { title: "AI Assisted Dev", icon: "🤖" }
  ];

  return (
    <section id="skills" className="py-24 relative bg-black/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-white mb-2 glow-text">
            ᬼ⃟ SKILLS & EXPERTISE ᬼ⃟
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow-box" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="glass-card p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-primary transition-all duration-300 group scroll-reveal opacity-0 scale-95"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
