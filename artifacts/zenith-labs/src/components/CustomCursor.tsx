import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <div
      className="fixed top-0 left-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] hidden md:block"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#e63946]/60" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#e63946]/60" />
      </div>
    </div>
  );
}
