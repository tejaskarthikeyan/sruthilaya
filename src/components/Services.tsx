import { Film, Globe, Music4, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Cinematic Covers",
      description: "Captivating covers of Tamil, Hindi, and English film songs that resonate with audiences.",
      image: "bg-gradient-to-br from-red-900/20 to-red-600/10"
    },
    {
      icon: Globe,
      title: "Western Styles",
      description: "From energetic pop tracks to soulful R&B and powerful rock performances.",
      image: "bg-gradient-to-br from-blue-900/20 to-blue-600/10"
    },
    {
      icon: Music4,
      title: "Original Compositions",
      description: "Maaja Feels, Adiye Maayavi and more original compositions coming up!",
      image: "bg-gradient-to-br from-purple-900/20 to-purple-600/10"
    },
    {
      icon: Users,
      title: "Cultural Sets",
      description: "Traditional performances perfectly crafted for cultural events and celebrations.",
      image: "bg-gradient-to-br from-green-900/20 to-green-600/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black-card to-background relative" style={{ backgroundImage: 'var(--bg-pattern)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-foreground mb-6 tracking-wide">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-inter">
            Our versatile musical repertoire spans across various genres and languages, 
            offering something special for every occasion and audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 ${service.image} border border-border hover:border-gold/30 transition-all duration-500 hover:transform hover:scale-105`}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold to-gold-dark rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-black-deep" />
                    </div>
                    <h3 className="text-2xl font-bold font-inter text-gold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-foreground leading-relaxed text-lg font-inter">
                    {service.description}
                  </p>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-gold-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;