export function Experience() {
  const journey = [
    "Started Coding",
    "First Website",
    "First Bot",
    "Full Stack",
    "AI Integration",
    "ZENITH LABS Founded"
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-white mb-2 glow-text">
            𓁹 JOURNEY 𓁹
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow-box" />
        </div>

        <div className="relative">
          {/* Path Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-white/10 md:hidden" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-10 md:gap-0 pl-12 md:pl-0">
            {journey.map((node, i) => (
              <div 
                key={i} 
                className="relative flex flex-col items-center group scroll-reveal opacity-0 translate-y-10"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Node Point */}
                <div className="w-4 h-4 rounded-full bg-black border-2 border-primary relative z-10 group-hover:bg-primary transition-colors duration-300 glow-box absolute left-[-42px] top-2 md:static md:mb-6" />
                
                {/* Label */}
                <div className="glass-card p-4 border border-white/5 group-hover:border-primary/50 transition-colors w-48 md:w-32 text-center">
                  <span className="text-xs md:text-sm font-mono text-gray-300 group-hover:text-white block">
                    {node}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
