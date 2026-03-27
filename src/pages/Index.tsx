import { useState, useRef } from "react";
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
import WelcomeSplash from "@/components/wedding/WelcomeSplash";

const Index = () => {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnter = () => {
    // Create and start audio on user click (guaranteed to work)
    const audio = new Audio(`${import.meta.env.BASE_URL}wedding-music.mp3`);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      console.log("Audio play failed");
    });
    setEntered(true);
  };

  return (
    <>
      {!entered && <WelcomeSplash onEnter={handleEnter} />}
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
    </>
  );
};

export default Index;
