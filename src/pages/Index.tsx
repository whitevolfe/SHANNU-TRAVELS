import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AirlinePartners from "@/components/AirlinePartners";
import Services from "@/components/Services";
import Milestones from "@/components/Milestones";
import AwardGallery from "@/components/AwardGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AirlinePartners />
      <Services />
      <Milestones />
      <AwardGallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
