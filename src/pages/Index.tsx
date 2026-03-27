import { useRef, useEffect, useCallback } from "react";
import Navbar from "@/components/wedding/Navbar";
import HeroSection from "@/components/wedding/HeroSection";
import SaveTheDate from "@/components/wedding/SaveTheDate";
import InvitationMessage from "@/components/wedding/InvitationMessage";
import VenueSection from "@/components/wedding/VenueSection";
import Gallery from "@/components/wedding/Gallery";
import FamilyBlessings from "@/components/wedding/FamilyBlessings";
import Footer from "@/components/wedding/Footer";
import FloatingPetals from "@/components/wedding/FloatingPetals";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
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
      hasStartedRef.current = true;
    }).catch(() => {
      // Browser blocked it, will retry on next interaction
    });
  }, []);

  useEffect(() => {
    startMusic();

    const handler = () => {
      startMusic();
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
