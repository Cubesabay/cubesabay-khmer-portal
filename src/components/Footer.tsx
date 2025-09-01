import { MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gaming-surface border-t border-border py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-koulen text-2xl font-bold text-foreground mb-2">
              CubeSabay
            </h3>
            <p className="text-sm font-inter text-muted-foreground">
              © 2025 CubeSabay. All Rights Reserved.
            </p>
            <p className="text-xs font-inter text-muted-foreground mt-1">
              ទាំងអស់នេះត្រូវបានធ្វើឡើងដោយ community សម្រាប់ community
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://discord.gg/cubesabay', '_blank')}
              className="text-muted-foreground hover:text-primary"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Discord
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://facebook.com/cubesabay', '_blank')}
              className="text-muted-foreground hover:text-primary"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Facebook
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs font-inter text-muted-foreground max-w-2xl mx-auto">
            CubeSabay គឺជា Minecraft server ឯករាជ្យមួយ។ យើងមិនមានទំនាក់ទំនងជាមួយ Mojang Studios ឬ Microsoft ទេ។
            Minecraft គឺជាម៉ាកយីហោរបស់ Mojang Studios។
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;