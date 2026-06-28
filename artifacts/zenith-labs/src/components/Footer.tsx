export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-primary/20 relative overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_bottom,transparent_50%,rgba(220,20,60,1)_50%)] bg-[length:100%_4px]" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-xs md:text-sm font-mono tracking-widest mb-2">
            © 2025 𖤍𒋲ᬼ⃟𓁹 ZENITH LABS 𓁹༉ᬼ⃟𒋲𖤍
          </p>
          <p className="text-primary text-xs font-mono tracking-widest">
            EZIHE CHIGORZIRIM (RICHARD)
          </p>
        </div>

        <div className="glass-card px-4 py-2 border border-primary/30 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-white">
            1,337 VISITORS ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
