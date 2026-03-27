import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "@/components/wedding/Navbar";
import HeroSection from "@/components/wedding/HeroSection";
import SaveTheDate from "@/components/wedding/SaveTheDate";
import InvitationMessage from "@/components/wedding/InvitationMessage";
import VenueSection from "@/components/wedding/VenueSection";
import Gallery from "@/components/wedding/Gallery";
import FamilyBlessings from "@/components/wedding/FamilyBlessings";
import Footer from "@/components/wedding/Footer";
import MusicToggle from "@/components/wedding/MusicToggle";
import FloatingPetals from "@/components/wedding/FloatingPetals";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasStartedRef = useRef(false);

  const startMusic = useCallback(() => {
    if (hasStartedRef.current) return;
    
    if (!audioRef.current) {
      const audio = new Audio(`${import.meta.env.BASE_URL}wedding-music.mp3`);
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
    }

    audioRef.current.play().then(() => {
      setIsPlaying(true);
      hasStartedRef.current = true;
    }).catch(() => {
      // Browser blocked it, will retry on next interaction
    });
  }, []);

  useEffect(() => {
    // Try autoplay immediately
    startMusic();

    // Also listen for first interaction to start music
    const handler = () => {
      startMusic();
      // Clean up after successful start
      if (hasStartedRef.current) {
        window.removeEventListener("click", handler);
        window.removeEventListener("touchstart", handler);
        window.removeEventListener("scroll", handler);
      }
    };

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
      window.removeEventListener("scroll", handler);
    };
  }, [startMusic]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <MusicToggle audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <FloatingPetals />
      <HeroSection />
      <SaveTheDate />
      <InvitationMessage />
      <VenueSection />
      <Gallery />
      <FamilyBlessings />
      <Footer />
    </div>
  );
};

export default Index;
