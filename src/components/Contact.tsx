import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, User, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const teamMembers = [
    {
      name: "Shobhika",
      role: "President", 
      phone: "+91 99529 89309"
    },
    {
      name: "Tejas Karthikeyan",
      role: "Vice President",
      phone: "+91 98846 60729"
    },
    {
      name: "Varshini", 
      role: "Vice President",
      phone: "+91 93422 79385"
    },
    {
      name: "Shabareesh",
      role: "Marketing Head",
      phone: "+91 73388 92328"
    },
    {
      name: "Irfaan K",
      role: "General Secretary",
      phone: "+91 88254 48171"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl text-black-deep">📞</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Interested in booking us or learning more about Sruthilaya? Our team is ready to 
            answer your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-8">
              Reach Out to Us
            </h3>
            
            <form className="space-y-6">
              <Input 
                placeholder="Your Name"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
              <Input 
                type="email"
                placeholder="Your Email"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
              <Input 
                placeholder="Subject"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
              <Textarea 
                placeholder="Your Message"
                rows={6}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground resize-none"
              />
              <Button variant="gold" size="lg" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="mt-8 space-y-4">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 text-gold mr-3" />
                <span>sruthilaya.au@gmail.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 text-gold mr-3" />
                <span>Anna University, Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-8">
              Our Team
            </h3>
            
            <div className="space-y-4 mb-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mr-4">
                      <User className="w-5 h-5 text-black-deep" />
                    </div>
                    <div>
                      <h4 className="text-gold font-semibold">{member.name}</h4>
                      <p className="text-muted-foreground text-sm">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Auditions */}
            <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 border border-gold/20 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-gold font-semibold mb-1">Auditions</h4>
                  <p className="text-muted-foreground text-sm">Apply to join Sruthilaya!</p>
                </div>
                <Button variant="gold" size="sm">
                  Audition Form
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-semibold text-gold mb-4">
                Follow Us
              </h4>
              <p className="text-muted-foreground mb-6">
                Stay connected with us on social media for updates on our latest performances and events.
              </p>
              <div className="flex space-x-4">
                <Button variant="gold-outline" size="sm" className="w-12 h-12 rounded-full p-0">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="gold-outline" size="sm" className="w-12 h-12 rounded-full p-0">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;