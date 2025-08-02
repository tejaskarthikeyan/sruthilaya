import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, CheckCircle, Music, Mic, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingsNew = () => {
  const navigate = useNavigate();

  const bookingTypes = [
    {
      icon: GraduationCap,
      title: "College/School Fests",
      description: "Energetic performances tailored for educational institution events",
      features: [
        "Custom setlists",
        "Sound equipment consultation", 
        "Flexible performance duration"
      ]
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional entertainment for company functions and celebrations",
      features: [
        "Corporate-friendly setlist",
        "Professional conduct",
        "Technical requirements handling"
      ]
    },
    {
      icon: Music,
      title: "Private Gigs",
      description: "Intimate performances for personal celebrations and private events",
      features: [
        "Personalized song selection",
        "Flexible venue setup",
        "Customized performance style"
      ]
    },
    {
      icon: Mic,
      title: "Music Jams",
      description: "Collaborative music sessions and informal jam experiences",
      features: [
        "Interactive performances",
        "Audience participation",
        "Spontaneous musical moments"
      ]
    }
  ];

  const handleAuditionClick = () => {
    navigate('/auditions');
  };

  return (
    <section id="bookings" className="py-20 bg-gradient-to-b from-background to-black-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bookings & Collaborations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Looking to bring the Sruthilaya magic to your event? We offer performances tailored 
            to various occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {bookingTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-card to-black-muted p-8 rounded-2xl border border-border hover:border-gold/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-gold-dark rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-black-deep" />
                  </div>
                  <h3 className="text-2xl font-bold text-gold">
                    {type.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  {type.description}
                </p>

                <div className="space-y-3 mb-8">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="gold" className="w-full">
                  Enquire Now
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 border border-gold/20 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <Headphones className="w-8 h-8 text-gold mr-3" />
              <h3 className="text-2xl font-bold text-gold">
                Other Services
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Recording Sessions • Music Workshops • Collaborative Projects
            </p>
            <Button variant="gold-outline" size="lg">
              Discuss Your Event
            </Button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reach Out Section */}
          <div className="bg-gradient-to-br from-card to-black-muted p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-gold mb-6">
              Reach Out to Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mr-4">
                  <span className="text-black-deep">📧</span>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email us at</p>
                  <a href="mailto:sruthilaya.au@gmail.com" className="text-gold font-semibold hover:underline">
                    sruthilaya.au@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mr-4">
                  <span className="text-black-deep">💬</span>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">WhatsApp us at</p>
                  <a href="https://wa.me/919952989309" className="text-gold font-semibold hover:underline">
                    +91 99529 89309
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Auditions Section */}
          <div className="bg-gradient-to-br from-card to-black-muted p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-gold mb-6">
              Join Sruthilaya
            </h3>
            <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 border border-gold/20 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-gold font-semibold mb-1">Auditions</h4>
                  <p className="text-muted-foreground text-sm">Apply to join our musical family!</p>
                </div>
                <Button variant="gold" size="sm" onClick={handleAuditionClick}>
                  Audition Form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingsNew;