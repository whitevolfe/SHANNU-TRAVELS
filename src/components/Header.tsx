import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SHANNU TRAVELS
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Terms of Use</a>
          </nav>

          <Button variant="default" className="bg-primary hover:bg-primary-dark">
            <Phone className="mr-2 h-4 w-4" />
            027-2222719
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
