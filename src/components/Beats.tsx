import { Button } from "@/components/ui/button";
import { Calendar, Music, Sparkles } from "lucide-react";

const Beats = () => {
  const scrollToContact = () => {
    const element = document.getElementById("bookings");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beats"
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/beats-back.jpg'), var(--bg-pattern)`,
        backgroundSize: "cover, cover, 60px 60px",
        backgroundPosition: "center, center, center",
        backgroundAttachment: "fixed, fixed, local",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-oswald text-foreground mb-6 tracking-wide">
              BEATS Concert
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our flagship 2-hour concert that brings together the very best of
              Sruthilaya's musical talent.
            </p>

            <div className="inline-flex items-center bg-gradient-to-r from-gold to-gold-dark text-black-deep px-6 py-3 rounded-full font-semibold mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              100% Live – 100% Energy
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Original compositions that showcase our creative talents",
                "Carefully crafted mashups blending popular songs",
                "Tamil/Hindi/English cinema song renditions",
                "Special fusion sets that blend different musical traditions",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <Music className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button
              variant="gold"
              size="lg"
              className="text-lg px-8 py-6 font-inter font-semibold"
              onClick={scrollToContact}
            >
              Learn More About BEATS
            </Button>
          </div>

          {/* YouTube Video Embed */}
          <div className="relative">
            <div className="bg-gradient-to-br from-card to-black-deep rounded-2xl p-8 border border-border">
              <div className="aspect-video rounded-xl mb-6 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/_YefACuLKSk?rel=0"
                  title="Sruthilaya BEATS Concert"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="bg-gradient-to-r from-gold to-gold-dark p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black-deep mb-2">
                  The BEATS Experience
                </h3>
                <p className="text-black-deep/80">
                  A full production concert featuring our complete ensemble that
                  will take your audience on an unforgettable musical journey.
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-gold to-gold-dark p-4 rounded-xl">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-black-deep mr-2" />
                <span className="text-black-deep font-semibold">
                  Annual Event
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beats;
