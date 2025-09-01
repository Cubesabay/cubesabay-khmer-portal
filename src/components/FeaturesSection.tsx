import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, DollarSign, Star, Calendar, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Cross-Play",
    description: "Play on both Java & Bedrock editions",
    khmer: "លេងបានទាំង Java និង Bedrock"
  },
  {
    icon: Shield,
    title: "Land Claim",
    description: "Protect your land and your buildings",
    khmer: "ការពារដីរបស់អ្នក និងអគារ"
  },
  {
    icon: DollarSign,
    title: "Player Economy",
    description: "Create shops and trade with others",
    khmer: "បង្កើតហាង និងធ្វើអាជីវកម្ម"
  },
  {
    icon: Star,
    title: "Custom Ranks",
    description: "Get special perks by ranking up",
    khmer: "ទទួលបាន perks ពិសេស"
  },
  {
    icon: Calendar,
    title: "Weekly Events",
    description: "Join weekly events for cool rewards",
    khmer: "ចូលរួមកម្មវិធី សប្តាហ៍"
  },
  {
    icon: Users,
    title: "Khmer Community",
    description: "A friendly and active community",
    khmer: "សហគមន៍ខ្មែរដ៏សកម្ម"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-koulen font-bold text-foreground mb-4">
            លក្ខណៈពិសេស
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            រកមើលលក្ខណៈពិសេសគ្រប់យ៉ាងដែលធ្វើឱ្យ CubeSabay ក្លាយជា server ល្អបំផុត
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gaming hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-koulen font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground font-inter mb-2">
                  {feature.description}
                </p>
                
                <p className="text-sm font-inter text-primary">
                  {feature.khmer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;