import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import sruthilayaLogo from "@/assets/sruthilaya-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('bookings');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-black-card to-black-muted relative overflow-hidden" style={{ backgroundImage: 'var(--bg-pattern)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Sruthilaya Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <img 
              src={sruthilayaLogo} 
              alt="Sruthilaya Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-oswald text-foreground mb-6 leading-tight tracking-wider">
          Sruthilaya
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          The Official Music Club of Anna University
        </p>
        
        <p className="text-lg md:text-xl text-gold mb-8 italic font-medium">
          "The Energy of Live Performance — That's Sruthilaya."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="gold" size="lg" className="text-lg px-8 py-6 font-inter font-semibold" onClick={scrollToContact}>
            Book Us Now
          </Button>
          <Button variant="gold-outline" size="lg" className="text-lg px-8 py-6 font-inter font-semibold" onClick={scrollToContact}>
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