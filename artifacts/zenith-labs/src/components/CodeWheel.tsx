import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "<React />" },
  { name: "Node.js", icon: "require('node')" },
  { name: "TypeScript", icon: "type T = any" },
  { name: "Python", icon: "print('py')" },
  { name: "PostgreSQL", icon: "SELECT *" },
  { name: "MongoDB", icon: "db.find()" },
  { name: "Docker", icon: "docker run" },
  { name: "Git", icon: "git commit" },
  { name: "GraphQL", icon: "query {}" },
  { name: "Redis", icon: "SET key" },
  { name: "AWS", icon: "aws s3" },
  { name: "AI/ML", icon: "model.fit()" },
];

export default function CodeWheel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startAngle, setStartAngle] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const wheelRadius = 280;
  const anglePerItem = 360 / technologies.length;

  const getItemStyle = (index: number) => {
    const angle = index * anglePerItem - 90;
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * wheelRadius;
    const y = Math.sin(rad) * wheelRadius;
    const isActive = index === activeIndex;
    return {
      transform: `translate(${x}px, ${y}px)`,
      opacity: isActive ? 1 : 0.4,
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!wheelRef.current) return;
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    setIsDragging(true);
    setStartAngle(angle);
    setStartRotation(rotation);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !wheelRef.current) return;
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    const diff = angle - startAngle;
    const newRotation = startRotation + diff;
    setRotation(newRotation);

    const normalizedRotation = ((newRotation % 360) + 360) % 360;
    const newActiveIndex = Math.round(normalizedRotation / anglePerItem) % technologies.length;
    setActiveIndex(newActiveIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!wheelRef.current) return;
    const touch = e.touches[0];
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
    setIsDragging(true);
    setStartAngle(angle);
    setStartRotation(rotation);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !wheelRef.current) return;
    const touch = e.touches[0];
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
    const diff = angle - startAngle;
    const newRotation = startRotation + diff;
    setRotation(newRotation);

    const normalizedRotation = ((newRotation % 360) + 360) % 360;
    const newActiveIndex = Math.round(normalizedRotation / anglePerItem) % technologies.length;
    setActiveIndex(newActiveIndex);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  const activeTech = technologies[activeIndex];

  return (
    <section className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="amoled-section-title text-white mb-4"
          >
            Tech Stack
          </motion.h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Drag or spin the wheel to explore the technologies I wield.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Active tech display */}
          <motion.div
            key={activeTech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-[#e63946] mb-2 font-mono">
              {activeTech.name}
            </div>
            <div className="text-gray-500 font-mono text-sm">
              {activeTech.icon}
            </div>
          </motion.div>

          {/* Wheel */}
          <div
            ref={wheelRef}
            className="relative w-[560px] h-[560px] max-w-[90vw] max-h-[90vw] cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-[#1a1a1a]" />
            <div
              className="absolute inset-2 rounded-full border border-[#1a1a1a]"
              style={{ transform: `rotate(${rotation}deg)` }}
            />

            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#0a0a0a] border border-[#e63946] flex items-center justify-center z-10">
              <div className="w-8 h-8 rounded-full border-2 border-[#e63946] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#e63946] sharingan-spin" />
              </div>
            </div>

            {/* Items */}
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  ...getItemStyle(i),
                  transform: `translate(-50%, -50%) ${getItemStyle(i).transform}`,
                }}
                whileHover={{ scale: 1.2 }}
              >
                <div
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-[#e63946] text-white shadow-[0_0_30px_rgba(230,57,70,0.4)]"
                      : "bg-[#111] text-gray-400 border border-[#1a1a1a]"
                  }`}
                >
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-gray-600 text-sm">
            Drag to spin · {technologies.length} technologies
          </p>
        </div>
      </div>
    </section>
  );
}
