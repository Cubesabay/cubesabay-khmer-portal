import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-koulen font-bold text-foreground mb-6">
          សូមស្វាគមន៍មកកាន់ <span className="text-transparent bg-gradient-accent bg-clip-text">CubeSabay</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-inter text-muted-foreground mb-8 max-w-2xl mx-auto">
          The best Minecraft Survival SMP server for the Khmer community 🇰🇭
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('how-to-join')}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-inter font-semibold px-8 py-3 text-lg shadow-gaming animate-glow"
          >
            ចូលរួមឥឡូវនេះ!
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold px-8 py-3 text-lg"
            onClick={() => window.open('https://discord.gg/cubesabay', '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            ចូល Discord
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;