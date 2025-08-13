import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "What We Do", href: "#services" },
    { label: "Our Stages", href: "#stages" },
    { label: "BEATS", href: "#beats" },
    { label: "Bookings", href: "#bookings" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-0">
              <img src="/logo.png" alt="Sruthilaya Logo" className="h-11 w-auto mr-[-20px]" />
              <img src="/sruthilaya-text.png" alt="Sruthilaya Text" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <Button variant="gold-outline" size="sm" className="ml-4">
              <a href="https://www.instagram.com/sruthilaya_au/?hl=en">
              Follow Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border">
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground hover:text-gold transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="gold-outline" size="sm" className="w-full mt-4">
                <Instagram className="w-4 h-4 mr-1" />
                Follow Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;