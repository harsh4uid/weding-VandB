import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/wedding-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Optional: try to auto-play on load, but catch the promise rejection if the browser blocks it.
    const attemptPlay = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked by browser. User must interact first.");
      }
    };
    
    // Add event listener to play on first interaction if autoplay failed
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        attemptPlay();
      }
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    document.addEventListener("scroll", handleFirstInteraction);
    
    attemptPlay();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-wedding-dark-maroon/80 backdrop-blur-md border border-wedding-gold/30 text-wedding-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:bg-wedding-maroon transition-all duration-300"
      aria-label="Toggle background music"
    >
      {isPlaying ? <Volume2 size={24} className="animate-pulse" /> : <VolumeX size={24} />}
    </motion.button>
  );
};

export default MusicToggle;
