import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stages from "@/components/Stages";
import Beats from "@/components/Beats";
import Gallery from "@/components/Gallery";
import BookingsNew from "@/components/BookingsNew";
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
      <BookingsNew />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
