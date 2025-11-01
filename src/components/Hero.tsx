import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-india.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Find the Best LOW-COST Flights for your Destinations!
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
          Shannu Travels - Get the best selection of cheap flight tickets and discount flights to destinations around the world.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all">
            <Phone className="mr-2 h-5 w-5" />
            CONTACT US
          </Button>
        </div>
        <div className="absolute bottom-8 right-8 text-6xl font-bold text-white/30">
          INDIA
        </div>
      </div>
    </section>
  );
};

export default Hero;
