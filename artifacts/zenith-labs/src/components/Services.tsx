export function Services() {
  const services = [
    "Website Development",
    "Full Stack Applications",
    "Telegram Bots",
    "Dashboard Systems",
    "Portfolio Websites",
    "Gaming Websites",
    "AI Integrations",
    "Custom Software"
  ];

  return (
    <section id="services" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-white mb-2 glow-text">
            𖤍 SERVICES 𖤍
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow-box" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="glass-card p-8 border border-white/5 hover:border-primary/50 transition-all duration-500 hover:glow-box hover:-translate-y-2 group relative overflow-hidden scroll-reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <div className="text-2xl text-primary/40 group-hover:text-primary font-mono mb-4 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-gray-200 group-hover:text-white tracking-wider">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
