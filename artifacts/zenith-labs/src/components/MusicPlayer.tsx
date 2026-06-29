import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronDown, ChevronUp, Music } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    audio.loop = true;
    audio.volume = volume / 100;
    audio.addEventListener("loadeddata", () => setIsLoaded(true));
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    });
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeEventListener("loadeddata", () => {});
      audio.removeEventListener("timeupdate", () => {});
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    if (isMuted && Number(e.target.value) > 0) setIsMuted(false);
  };

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
      animate={{ y: isCollapsed ? 70 : 0 }}
    >
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-full px-4 py-2 flex items-center gap-4 shadow-2xl">
        <div className="w-8 h-8 rounded-full bg-[#e63946] flex items-center justify-center shrink-0">
          <Music size={14} className="text-white" />
        </div>

        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#e63946] hover:text-white transition-colors shrink-0"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </button>

        <div className="flex-1 flex flex-col justify-center min-w-[140px]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-medium text-gray-400 truncate max-w-[120px]">
              Skyfall - Adele
            </span>
            <span className="text-[9px] text-[#e63946] font-medium">
              {isPlaying ? "PLAYING" : isLoaded ? "READY" : "LOADING"}
            </span>
          </div>
          <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
            <div className="h-full bg-[#e63946]" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button onClick={() => setIsMuted(!isMuted)} className="text-gray-500 hover:text-white transition-colors">
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="hidden md:block w-16 h-1 bg-[#1a1a1a] rounded-full appearance-none cursor-pointer accent-[#e63946]"
          />
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-500 hover:text-white transition-colors"
        >
          {isCollapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </motion.div>
  );
}
