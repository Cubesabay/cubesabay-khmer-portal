import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServerStatus from "@/components/ServerStatus";
import FeaturesSection from "@/components/FeaturesSection";
import HowToJoinSection from "@/components/HowToJoinSection";
import RulesSection from "@/components/RulesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroSection />
      <ServerStatus />
      <FeaturesSection />
      <HowToJoinSection />
      <RulesSection />
      <Footer />
    </div>
  );
};

export default Index;
