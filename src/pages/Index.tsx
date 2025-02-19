
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SacredSites from "@/components/SacredSites";
import HerbsSection from "@/components/HerbsSection";
import About from "@/pages/About";
import Booking from "@/pages/Booking";
import DocumentarySeries from "@/components/DocumentarySeries";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SacredSites />
      <HerbsSection />

      <section id="about">
        <About />
      </section>

      <section id="booking">
        <Booking />
      </section>

      <section id="documentary-series">
        <DocumentarySeries />
      </section>
    </>
  );
};

export default Index;
