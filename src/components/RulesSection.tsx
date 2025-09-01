import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const rules = [
  {
    type: "allowed",
    icon: CheckCircle,
    text: "Be respectful to all players",
    khmer: "គួរតែគោរពអ្នកលេងទាំងអស់"
  },
  {
    type: "forbidden",
    icon: XCircle,
    text: "No Cheating or Hacking",
    khmer: "ហាមបន្លំ ឬ hack"
  },
  {
    type: "allowed",
    icon: CheckCircle,
    text: "Keep the server environment clean",
    khmer: "រក្សាបរិស្ថាន server ឱ្យស្អាត"
  },
  {
    type: "forbidden",
    icon: XCircle,
    text: "Do not grief or destroy others' builds",
    khmer: "ហាមបំផ្លាញអគាររបស់អ្នកដទៃ"
  }
];

const RulesSection = () => {
  return (
    <section id="rules" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-koulen font-bold text-foreground mb-4">
            ច្បាប់ Server
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            ច្បាប់សំខាន់ៗដែលអ្នកត្រូវតែគោរពដើម្បីរក្សាបរិយាកាសល្អនៅក្នុង server
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-card border-border shadow-card-gaming">
            <CardContent className="p-8">
              <div className="space-y-6">
                {rules.map((rule, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gaming-surface border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <rule.icon 
                      className={`w-6 h-6 flex-shrink-0 mt-1 ${
                        rule.type === 'allowed' 
                          ? 'text-primary' 
                          : 'text-destructive'
                      }`} 
                    />
                    <div className="flex-1">
                      <p className="font-inter font-medium text-foreground mb-1">
                        {rule.text}
                      </p>
                      <p className="text-sm font-inter text-muted-foreground">
                        {rule.khmer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm font-inter text-foreground text-center">
                  <span className="font-semibold">សំខាន់:</span> ការមិនគោរពច្បាប់ទាំងនេះអាចនាំឱ្យ account របស់អ្នកត្រូវបាន ban ពី server
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;