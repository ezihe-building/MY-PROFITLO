import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="w-full flex justify-center items-center py-16 opacity-50">
      <span className="text-primary text-sm md:text-base tracking-[0.3em] font-light">
        𖤍𒋲ᬼ⃟𓁹 <span className="hidden md:inline">━━━━━━━━━━━━━━━━━━━━</span> <span className="md:hidden">━━━━━━</span> 𓁹༉ᬼ⃟𒋲𖤍
      </span>
    </div>
  );
}
