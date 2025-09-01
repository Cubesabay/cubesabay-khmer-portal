import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Server, Users, Wifi, WifiOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ServerStatusData {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  version?: string;
}

const ServerStatus = () => {
  const [serverData, setServerData] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const serverIP = "cubesabay.apsara.lol";

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server status:", error);
        setServerData({ online: false });
      } finally {
        setLoading(false);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast({
      title: "បានចម្លងរួច!",
      description: "Server IP បានចម្លងទៅ clipboard រួចហើយ",
    });
  };

  return (
    <section className="py-20 bg-gaming-surface">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-koulen font-bold text-foreground mb-4">
            Server Status
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            ពិនិត្យមើលស្ថានភាព server និងចំនួនអ្នកលេងដែលកំពុងលេង
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-gradient-card border-border shadow-card-gaming">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Server className="w-6 h-6 text-primary" />
                <span className="text-xl font-koulen font-bold text-foreground">
                  {serverIP}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={copyIP}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy IP
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Status */}
              <div className="flex items-center gap-3 p-4 rounded-lg bg-gaming-surface border border-border">
                {loading ? (
                  <div className="w-3 h-3 rounded-full bg-muted animate-pulse"></div>
                ) : serverData?.online ? (
                  <>
                    <Wifi className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-inter text-muted-foreground">Status</p>
                      <p className="font-koulen text-lg text-primary">🟢 Online</p>
                    </div>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-5 h-5 text-destructive" />
                    <div>
                      <p className="text-sm font-inter text-muted-foreground">Status</p>
                      <p className="font-koulen text-lg text-destructive">🔴 Offline</p>
                    </div>
                  </>
                )}
              </div>

              {/* Players */}
              <div className="flex items-center gap-3 p-4 rounded-lg bg-gaming-surface border border-border">
                <Users className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm font-inter text-muted-foreground">Players</p>
                  <p className="font-koulen text-lg text-foreground">
                    {loading ? "..." : serverData?.online ? 
                      `${serverData.players?.online || 0}/${serverData.players?.max || 100}` 
                      : "0/100"
                    }
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServerStatus;