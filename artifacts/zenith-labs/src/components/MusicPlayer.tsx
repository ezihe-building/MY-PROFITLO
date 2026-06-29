import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress] = useState(30);
  const [volume] = useState(80);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
      animate={{ y: isCollapsed ? 70 : 0 }}
    >
      <div className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center gap-4 shadow-lg">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#e63946] transition-colors shrink-0"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </button>

        <div className="flex-1 flex flex-col justify-center min-w-[140px]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-medium text-gray-600 truncate max-w-[120px]">
              CYBERPUNK_THEME.WAV
            </span>
            <span className="text-[9px] text-[#e63946] font-medium">
              {isPlaying ? "PLAYING" : "PAUSED"}
            </span>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#e63946]" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button onClick={() => setIsMuted(!isMuted)} className="text-gray-400 hover:text-black transition-colors">
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <div className="hidden md:block w-14 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-400" style={{ width: `${isMuted ? 0 : volume}%` }} />
          </div>
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-400 hover:text-black transition-colors"
        >
          {isCollapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </motion.div>
  );
}
