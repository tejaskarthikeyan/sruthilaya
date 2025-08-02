import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stages from "@/components/Stages";
import Beats from "@/components/Beats";
import Gallery from "@/components/Gallery";
import Bookings from "@/components/Bookings";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stages />
      <Beats />
      <Gallery />
      <Bookings />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
