import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        <div className="w-full h-full relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-primary" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary" />
        </div>
      </div>
      
      <div 
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] transition-all duration-300 ease-out border border-primary rounded-full
          ${isHovering ? 'w-12 h-12 bg-primary/10 scale-150' : 'w-8 h-8 opacity-50 scale-100'}
        `}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
    </>
  );
}
