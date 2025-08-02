import { Music, Headphones, Heart, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Music,
      title: "Passion for Music",
      description: "Dedicated musicians with a burning passion for creating magic through music."
    },
    {
      icon: Headphones,
      title: "Diverse Genres",
      description: "From classical Indian to Western pop, we perform across a wide spectrum of musical styles."
    },
    {
      icon: Heart,
      title: "Community",
      description: "A family of talented musicians who support and inspire each other."
    },
    {
      icon: Zap,
      title: "Live Energy",
      description: "Every performance delivered with energy, passion and musical excellence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-black-card relative" style={{ backgroundImage: 'var(--bg-pattern)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-foreground mb-6 tracking-wide">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-inter">
            Sruthilaya is a vibrant collective of singers and instrumentalists from Anna University. 
            From soulful melodies to power-packed covers, we perform across genres and languages, 
            creating unforgettable musical moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-8 bg-gradient-to-br from-card to-black-muted rounded-xl border border-border hover:border-gold/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-black-deep" />
                  </div>
                  <h3 className="text-xl font-semibold font-inter text-gold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-inter">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;