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
