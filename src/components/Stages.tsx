import { MapPin } from "lucide-react";

const Stages = () => {
  const venues = [
    "BEATS", "Techofes", "Agni", "MIT Vibez", "Sampradha",
    "MOP Vaishnav", "Shasun Jain", "Marina Mall", "Phoenix", "Ampa",
    "Forum Vijaya", "Equitas Bank", "Atti Startup Gig", "Open Mics"
  ];

  return (
    <section id="stages" className="py-20 bg-gradient-to-b from-background to-black-card relative" style={{ backgroundImage: 'var(--bg-pattern)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gold to-gold-dark rounded-full mb-6">
            <MapPin className="w-6 h-6 text-black-deep" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-foreground mb-6 tracking-wide">
            Where We've Performed
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-4 font-inter">
            Over the years, we've had the privilege of performing at prestigious venues and 
            events across the city.
          </p>
          <p className="text-sm text-muted-foreground italic font-inter">
            Music is the universal language that brings people together. We speak this language fluently.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {venues.map((venue, index) => (
            <div 
              key={index}
              className={`px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 font-inter ${
                venue === "BEATS" || venue === "Atti Startup Gig" 
                  ? "bg-gradient-to-r from-gold to-gold-dark text-black-deep border-gold font-semibold" 
                  : "bg-card border-border text-foreground hover:border-gold/50 hover:bg-gold/10"
              }`}
            >
              {venue}
            </div>
          ))}
        </div>

        <div className="text-center">
          <blockquote className="text-xl md:text-2xl text-gold italic font-medium mb-8 max-w-4xl mx-auto font-inter">
            "From intimate gatherings to massive festivals, our music has resonated across countless venues."
          </blockquote>
          <p className="text-muted-foreground max-w-3xl mx-auto font-inter">
            Each performance represents a unique musical journey we've shared with our audience. 
            We're constantly adding new venues to our musical map as we continue to grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stages;