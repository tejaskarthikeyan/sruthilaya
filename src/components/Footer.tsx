import { Instagram, Youtube, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "What We Do", href: "#services" },
    { label: "Our Stages", href: "#stages" },
    { label: "BEATS Concert", href: "#beats" },
  ];

  const moreInfo = [
    { label: "Gallery", href: "#gallery" },
    { label: "Bookings", href: "#bookings" },
    { label: "Auditions", href: "#contact" },
    { label: "Team", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-t from-black-deep to-background border-t border-border relative" style={{ backgroundImage: 'var(--bg-pattern)' }}>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Brand */}
          <div className="lg:col-span-1">
           <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
             <img src="/logo.png" alt="Sruthilaya Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="text-xl font-bold font-oswald text-foreground tracking-wide">Sruthilaya</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed font-inter">
             The Official Music Club of Anna University - bringing the energy of live performance 
             to audiences across Chennai and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-black-deep transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-black-deep transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:sruthilaya.au@gmail.com" className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-black-deep transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-inter text-gold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h3 className="text-lg font-semibold font-inter text-gold mb-4">More Info</h3>
            <ul className="space-y-3">
              {moreInfo.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold font-inter text-gold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">Email us at</p>
                  <a href="mailto:sruthilaya.au@gmail.com" className="text-foreground hover:text-gold transition-colors">
                    sruthilaya.au@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">Located at</p>
                  <p className="text-foreground">Anna University, Chennai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Sruthilaya - The Official Music Club of Anna University. All rights reserved.
          </p>
          <p className="text-gold italic mt-2">
            "The Energy of Live Performance — That's Sruthilaya."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;