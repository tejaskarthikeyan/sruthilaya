import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "BEATS", "College Fests", "Corporate", "Open Mics", "Studios"];
  
  // Using placeholder images for demonstration with different backgrounds for each slide
  const galleryItems = [
    { id: 1, category: "BEATS", title: "BEATS 2023 Main Stage", image: "photo-1605810230434-7631ac76ec81", background: "photo-1540039155733-5bb30b53aa14" },
    { id: 2, category: "College Fests", title: "Techofes Performance", image: "photo-1593110577707-3024f401075e", background: "photo-1470225620780-dba8ba36b745" },
    { id: 3, category: "Corporate", title: "Corporate Event", image: "photo-1519389950473-47ba0277781c", background: "photo-1501281668745-f7f57925c3b4" },
    { id: 4, category: "Open Mics", title: "Open Mic Night", image: "photo-1581090464777-f3220bbe1b8b", background: "photo-1493225457124-a3eb161ffa5f" },
    { id: 5, category: "BEATS", title: "BEATS Crowd Energy", image: "photo-1500673922987-e212871fec22", background: "photo-1516450360452-9312f5e86fc7" },
    { id: 6, category: "Studios", title: "Recording Session", image: "photo-1473177104440-ffee2f376098", background: "photo-1598488035139-bdbb2231ce04" },
    { id: 7, category: "College Fests", title: "MIT Vibez", image: "photo-1605810230434-7631ac76ec81", background: "photo-1571019613454-1cb2f99b2d8b" },
    { id: 8, category: "Corporate", title: "Marina Mall Show", image: "photo-1593110577707-3024f401075e", background: "photo-1445985543470-41fba5c3144a" },
  ];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Photo Gallery
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-gold/10 hover:border-gold"
              }`}
            >
              {category}
            </Button>
          ))}
          <Button variant="outline" className="px-6 py-2 rounded-full border-gold text-gold hover:bg-gold hover:text-black-deep">
            View More →
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.slice(0, 6).map((item, index) => (
              <div 
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:transform hover:scale-105 ${
                  index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                } ${index === 0 || index === 4 ? "lg:col-span-1" : ""}`}
              >
                <div 
                  className="aspect-[4/3] relative"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/${item.background}?w=800&h=600&fit=crop)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                  <img 
                    src={`https://images.unsplash.com/${item.image}?w=800&h=600&fit=crop`}
                    alt={item.title}
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gold text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button 
            variant="outline" 
            size="sm"
            className="absolute -bottom-16 left-1/2 transform -translate-x-16 w-12 h-12 rounded-full border-gold text-gold hover:bg-gold hover:text-black-deep"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="absolute -bottom-16 left-1/2 transform translate-x-4 w-12 h-12 rounded-full border-gold text-gold hover:bg-gold hover:text-black-deep"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;