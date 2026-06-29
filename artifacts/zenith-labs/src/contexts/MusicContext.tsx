import { createContext, useContext, useRef, useCallback, useState, type ReactNode } from "react";

interface MusicContextType {
  playSkyfall: () => void;
  pauseSkyfall: () => void;
  isPlaying: boolean;
}

const MusicContext = createContext<MusicContextType>({
  playSkyfall: () => {},
  pauseSkyfall: () => {},
  isPlaying: false,
});

export function useMusic() {
  return useContext(MusicContext);
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSkyfall = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.src = "/audio/skyfall-adele.mp3";
      audio.loop = true;
      audio.volume = 0.7;
      audioRef.current = audio;
    }
    audioRef.current.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const pauseSkyfall = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  }, []);

  return (
    <MusicContext.Provider value={{ playSkyfall, pauseSkyfall, isPlaying }}>
      {children}
    </MusicContext.Provider>
  );
}
