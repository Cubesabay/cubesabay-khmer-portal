import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Download, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  {
    icon: Download,
    title: "ទាញយក Minecraft",
    description: "ទាញយក Minecraft Java Edition ឬ Bedrock Edition",
    detail: "Java: minecraft.net | Bedrock: play.google.com/store"
  },
  {
    icon: Copy,
    title: "Copy Server IP",
    description: "ចម្លង Server IP: cubesabay.apsara.lol",
    detail: "ចុចលើប៊ូតុង Copy ខាងក្រោម"
  },
  {
    icon: Play,
    title: "ចូលលេង",
    description: "បើក Minecraft និងចូលរួមជាមួយយើង!",
    detail: "Add Server > Paste IP > Join!"
  }
];

const HowToJoinSection = () => {
  const { toast } = useToast();
  const serverIP = "cubesabay.apsara.lol";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast({
      title: "បានចម្លងរួច!",
      description: "Server IP បានចម្លងទៅ clipboard រួចហើយ",
    });
  };

  return (
    <section id="how-to-join" className="py-20 bg-gaming-surface">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-koulen font-bold text-foreground mb-4">
            របៀបចូលរួម
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            ជំហានងាយៗក្នុងការចូលរួមជាមួយ CubeSabay community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gaming animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-koulen font-bold text-secondary-foreground">
                    {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-koulen font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground font-inter mb-2">
                  {step.description}
                </p>
                
                <p className="text-sm font-inter text-primary/80">
                  {step.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Server IP Copy Card */}
        <Card className="max-w-md mx-auto bg-gradient-card border-primary/20 shadow-gaming">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-koulen font-bold text-foreground mb-4">
              Server IP
            </h3>
            <div className="bg-gaming-surface p-4 rounded-lg border border-border mb-4">
              <code className="text-lg font-inter text-primary font-mono">
                {serverIP}
              </code>
            </div>
            <Button 
              onClick={copyIP}
              className="w-full bg-primary hover:bg-primary/90 shadow-glow animate-glow"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Server IP
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HowToJoinSection;