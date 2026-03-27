import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface MusicToggleProps {
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

const MusicToggle = ({ audioRef, isPlaying, setIsPlaying }: MusicToggleProps) => {
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {
        console.log("Playback failed.");
      });
      setIsPlaying(true);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-wedding-dark-maroon/90 backdrop-blur-md border border-wedding-gold/40 text-wedding-gold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-wedding-maroon transition-all duration-300"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <>
          <Volume2 size={20} className="animate-pulse" />
          <span className="text-xs font-display tracking-widest">MUSIC ON</span>
        </>
      ) : (
        <>
          <VolumeX size={20} />
          <span className="text-xs font-display tracking-widest">MUSIC OFF</span>
        </>
      )}
    </motion.button>
  );
};

export default MusicToggle;
