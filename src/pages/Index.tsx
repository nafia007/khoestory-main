
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SacredSites from "@/components/SacredSites";
import HerbsSection from "@/components/HerbsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SacredSites />
      <HerbsSection />
    </div>
  );
};

export default Index;
