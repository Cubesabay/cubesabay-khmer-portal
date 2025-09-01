import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Diamond, Star, Flame, Crown, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ranks = [
  {
    id: "vip",
    name: "VIP",
    price: "$2",
    icon: Diamond,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20",
    perks: [
      "[VIP] Prefix",
      "/kit vip command",
      "Set 2 homes",
      "Priority join queue"
    ]
  },
  {
    id: "mvp",
    name: "MVP", 
    price: "$5",
    icon: Star,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    perks: [
      "All VIP perks",
      "[MVP] Prefix",
      "/kit mvp command",
      "Set 5 homes",
      "Access to MVP chat"
    ]
  },
  {
    id: "hero",
    name: "Hero",
    price: "$10",
    icon: Flame,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
    perks: [
      "All MVP perks",
      "[Hero] Prefix",
      "/kit hero command", 
      "/fly in claim land",
      "Exclusive Hero tag"
    ]
  },
  {
    id: "legend",
    name: "Legend",
    price: "$15",
    icon: Crown,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10", 
    borderColor: "border-yellow-400/20",
    perks: [
      "All Hero perks",
      "[Legend] Prefix",
      "/kit legend command",
      "/feed command",
      "Legend crown effect"
    ]
  }
];

const Webstore = () => {
  const [selectedRank, setSelectedRank] = useState<string>("");
  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    proofLink: ""
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleRankSelect = (rankId: string) => {
    setSelectedRank(rankId);
    setShowPurchaseForm(true);
    // Scroll to form
    setTimeout(() => {
      const formElement = document.getElementById('purchase-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      toast({
        title: "Error",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive"
      });
      return;
    }

    if (!selectedRank || !formData.username || !formData.contact || !formData.proofLink) {
      toast({
        title: "Error", 
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would integrate with your Telegram bot API
      const selectedRankData = ranks.find(r => r.id === selectedRank);
      const message = `🛒 New Rank Purchase Request\n\n` +
        `👤 Username: ${formData.username}\n` +
        `💎 Rank: ${selectedRankData?.name} (${selectedRankData?.price})\n` +
        `📱 Contact: ${formData.contact}\n` +
        `🔗 Proof: ${formData.proofLink}\n` +
        `🕐 Time: ${new Date().toLocaleString()}`;

      // This would be your actual Telegram bot webhook URL
      const telegramWebhookURL = "YOUR_TELEGRAM_BOT_WEBHOOK_URL";
      
      // Uncomment when you have actual webhook
      // await fetch(telegramWebhookURL, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ message })
      // });

      toast({
        title: "ការបញ្ជាទិញត្រូវបានស្នើរួចហើយ!",
        description: "យើងនឹងពិនិត្យមើល និងទាក់ទងអ្នកវិញក្នុងពេលឆាប់ៗ"
      });

      // Reset form
      setFormData({ username: "", contact: "", proofLink: "" });
      setSelectedRank("");
      setShowPurchaseForm(false);
      setRecaptchaToken("");

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit purchase request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShoppingCart className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-6xl font-koulen font-bold text-foreground">
                CubeSabay Webstore
              </h1>
            </div>
            <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto">
              Support the server and get exclusive perks!
            </p>
            <p className="text-lg font-inter text-primary mt-4">
              គាំទ្រ server និងទទួលបាន perks ពិសេស!
            </p>
          </div>
        </div>
      </section>

      {/* Rank Cards */}
      <section className="py-20 bg-gaming-surface">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ranks.map((rank, index) => (
              <Card 
                key={rank.id}
                className={`group bg-gradient-card border-border hover:${rank.borderColor} transition-all duration-300 hover:shadow-gaming hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${rank.bgColor} flex items-center justify-center`}>
                    <rank.icon className={`w-8 h-8 ${rank.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-koulen font-bold text-foreground">
                    {rank.name}
                  </CardTitle>
                  <div className="text-3xl font-koulen font-bold text-primary">
                    {rank.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {rank.perks.map((perk, perkIndex) => (
                      <div key={perkIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${rank.color.replace('text-', 'bg-')}`}></div>
                        <span className="text-sm font-inter text-muted-foreground">{perk}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleRankSelect(rank.id)}
                    className="w-full bg-primary hover:bg-primary/90 font-koulen text-lg"
                  >
                    ទិញឥឡូវនេះ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Form */}
      {showPurchaseForm && (
        <section id="purchase-form" className="py-20 bg-background">
          <div className="container max-w-2xl mx-auto px-4">
            <Card className="bg-gradient-card border-border shadow-gaming">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-koulen font-bold text-foreground mb-2">
                  Purchase Form
                </CardTitle>
                <p className="font-inter text-muted-foreground">
                  បំពេញទម្រង់ខាងក្រោមដើម្បីទិញ rank
                </p>
                {selectedRank && (
                  <Badge variant="secondary" className="mx-auto">
                    Selected: {ranks.find(r => r.id === selectedRank)?.name} - {ranks.find(r => r.id === selectedRank)?.price}
                  </Badge>
                )}
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="font-inter font-medium">
                      Minecraft Username *
                    </Label>
                    <Input
                      id="username"
                      placeholder="YourMinecraftName"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      required
                      className="bg-gaming-surface border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rank" className="font-inter font-medium">
                      Select Rank *
                    </Label>
                    <Select value={selectedRank} onValueChange={setSelectedRank}>
                      <SelectTrigger className="bg-gaming-surface border-border">
                        <SelectValue placeholder="Choose a rank" />
                      </SelectTrigger>
                      <SelectContent>
                        {ranks.map((rank) => (
                          <SelectItem key={rank.id} value={rank.id}>
                            {rank.name} - {rank.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact" className="font-inter font-medium">
                      Telegram / Facebook Contact *
                    </Label>
                    <Input
                      id="contact"
                      placeholder="@yourtelegram or facebook.com/yourname"
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      required
                      className="bg-gaming-surface border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="proof" className="font-inter font-medium">
                      Payment Proof Image Link *
                    </Label>
                    <Textarea
                      id="proof"
                      placeholder="Upload your payment proof to ImgBB or similar service and paste the link here"
                      value={formData.proofLink}
                      onChange={(e) => setFormData({...formData, proofLink: e.target.value})}
                      required
                      className="bg-gaming-surface border-border min-h-[80px]"
                    />
                    <p className="text-xs font-inter text-muted-foreground">
                      ការធ្វើបង់ប្រាក់: ABA, ACLEDA, Wing, True Money, ឬ PayPal
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key
                      onChange={(token) => setRecaptchaToken(token || "")}
                      theme="dark"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={!recaptchaToken || isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 font-koulen text-lg py-3 disabled:opacity-50"
                  >
                    {isSubmitting ? "កំពុងបញ្ជូន..." : "យុះយោងការទិញ"}
                  </Button>
                </form>

                <div className="text-center pt-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowPurchaseForm(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Ranks
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Back to Home */}
      <section className="py-12 bg-gaming-surface">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Home className="w-5 h-5 mr-2" />
              ត្រលប់ទៅទំព័រដើម
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webstore;