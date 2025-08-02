import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-black-card to-black-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo placeholder - will be replaced with actual Sruthilaya logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gold to-gold-dark rounded-full mb-6">
            <span className="text-2xl font-bold text-black-deep">S</span>
          </div>
          <p className="text-xs text-muted-foreground italic">Sruthilaya Logo Placeholder</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Sruthilaya
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          The Official Music Club of Anna University
        </p>
        
        <p className="text-lg md:text-xl text-gold mb-8 italic font-medium">
          "The Energy of Live Performance — That's Sruthilaya."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="gold" size="lg" className="text-lg px-8 py-6">
            Book Us Now
          </Button>
          <Button variant="gold-outline" size="lg" className="text-lg px-8 py-6">
            Discover More
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-gold-dark rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gold rounded-full opacity-80 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;