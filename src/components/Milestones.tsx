import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Milestones = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Celebrating Our Milestones
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-card hover:shadow-hover transition-all">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-gradient-primary rounded-full">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Achievement</p>
                <p className="text-xl font-bold text-primary">Shannu Travels PVT LTD</p>
                <p className="text-lg font-semibold text-foreground mt-4">
                  Outstanding Performance for the year 2024
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card hover:shadow-hover transition-all">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-gradient-primary rounded-full">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Recognition</p>
                <p className="text-xl font-bold text-primary">Excellence Award</p>
                <p className="text-lg font-semibold text-foreground mt-4">
                  Outstanding Performance during the year 2023 (Riyadah)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
