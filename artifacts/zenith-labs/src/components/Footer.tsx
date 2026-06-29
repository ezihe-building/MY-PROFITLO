export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border border-[#e63946] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#e63946] sharingan-spin" />
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">
            ZENITH LABS
          </span>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-xs">
            © 2025 ZENITH LABS — EZIHE CHIGORZIRIM (RICHARD)
          </p>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <span className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
          <span>1,337 VISITORS ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
