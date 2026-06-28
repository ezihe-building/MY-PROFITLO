import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(80);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500`}
      animate={{ y: isCollapsed ? 60 : 0 }}
    >
      <div className="glass-card border border-primary/30 rounded-full px-4 py-2 flex items-center gap-4 w-[300px] md:w-[400px] shadow-[0_0_15px_rgba(220,20,60,0.15)] bg-black/80 backdrop-blur-xl">
        
        {/* Play/Pause */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-primary/50 shrink-0"
        >
          {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
        </button>

        {/* Track Info & Progress */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-mono text-white truncate max-w-[150px]">CYBERPUNK_THEME.WAV</span>
            <span className="text-[9px] font-mono text-primary animate-pulse">
              {isPlaying ? "PLAYING" : "PAUSED"}
            </span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer">
            <div 
              className="h-full bg-primary relative" 
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_5px_white]" />
            </div>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <div className="hidden md:block w-16 h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer">
            <div 
              className="h-full bg-gray-400 hover:bg-primary transition-colors" 
              style={{ width: `${isMuted ? 0 : volume}%` }}
            />
          </div>
        </div>

        {/* Collapse toggle */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-6 bg-black/80 border border-primary/30 border-b-0 rounded-t-lg flex items-center justify-center text-gray-500 hover:text-primary transition-colors glass-card"
        >
          {isCollapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </motion.div>
  );
}
