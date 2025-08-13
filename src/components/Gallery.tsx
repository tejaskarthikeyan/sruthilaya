import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
  background: string;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [shuffledAllItems, setShuffledAllItems] = useState<GalleryItem[]>([]);

  const itemsPerPage = 6;
  const categories = ["All", "BEATS", "College Fests", "Corporate", "Open Mics", "Studios"];

  const beatsImages: GalleryItem[] = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    category: "BEATS",
    title: `BEATS Moment ${i + 1}`,
    image: `/beats/${i + 1}.jpg`,
    background: `/beats/${i + 1}.jpg`,
  }));

  const collegeFestsImages: GalleryItem[] = Array.from({ length: 10 }, (_, i) => ({
    id: 300 + i + 1,
    category: "College Fests",
    title: `College Fest ${i + 1}`,
    image: `/college-fests/${i + 1}.jpg`,
    background: `/college-fests/${i + 1}.jpg`,
  }));

  const corporateImages: GalleryItem[] = Array.from({ length: 7 }, (_, i) => ({
    id: 200 + i + 1,
    category: "Corporate",
    title: `Corporate Event ${i + 1}`,
    image: `/corporate/${i + 1}.jpg`,
    background: `/corporate/${i + 1}.jpg`,
  }));

  const openMicsImages: GalleryItem[] = Array.from({ length: 5 }, (_, i) => ({
    id: 400 + i + 1,
    category: "Open Mics",
    title: `Open Mic ${i + 1}`,
    image: `/open-mics/${i + 1}.jpg`,
    background: `/open-mics/${i + 1}.jpg`,
  }));

  const studiosImages: GalleryItem[] = [
    {
      id: 500,
      category: "Studios",
      title: "Recording Session",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      background: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    },
  ];

  const allGalleryItems: GalleryItem[] = [
    ...beatsImages,
    ...collegeFestsImages,
    ...corporateImages,
    ...openMicsImages,
    ...studiosImages,
  ];

  const shuffleArray = (array: GalleryItem[]): GalleryItem[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (activeCategory === "All") {
      setShuffledAllItems(shuffleArray(allGalleryItems));
      setCurrentPage(0);
    }
  }, [activeCategory]);

  const filteredItems: GalleryItem[] =
    activeCategory === "All"
      ? shuffledAllItems
      : allGalleryItems.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const openModal = (indexOnPage: number) => {
    setSelectedImageIndex(currentPage * itemsPerPage + indexOnPage);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
    document.body.style.overflow = "";
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const showPrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedImageIndex]);

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-black-muted to-background relative"
      style={{ backgroundImage: "var(--bg-pattern)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-oswald text-foreground mb-6 tracking-wide">
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
              className={`px-6 py-2 rounded-full transition-all duration-300 font-inter ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-gold/10 hover:border-gold"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-500 hover:scale-105"
                onClick={() => openModal(index)}
              >
                <div
                  className="aspect-[4/3] relative"
                  style={{
                    backgroundImage: `url(${item.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover relative z-10"
                    draggable={false}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold font-inter text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gold text-sm font-inter">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (currentPage > 0) {
                if (activeCategory === "All") {
                  setShuffledAllItems(shuffleArray(allGalleryItems));
                }
                setCurrentPage(currentPage - 1);
              }
            }}
            disabled={currentPage === 0}
            className="absolute -bottom-16 left-1/2 transform -translate-x-16 w-12 h-12 rounded-full border-gold text-gold hover:bg-gold hover:text-black-deep disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (currentPage < totalPages - 1) {
                if (activeCategory === "All") {
                  setShuffledAllItems(shuffleArray(allGalleryItems));
                }
                setCurrentPage(currentPage + 1);
              }
            }}
            disabled={currentPage === totalPages - 1}
            className="absolute -bottom-16 left-1/2 transform translate-x-4 w-12 h-12 rounded-full border-gold text-gold hover:bg-gold hover:text-black-deep disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center transition-opacity"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          <button
            className="absolute left-6 text-white text-4xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          {filteredItems[selectedImageIndex] && (
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-w-[85%] max-h-[75%] rounded-xl shadow-2xl transition-transform duration-300 scale-95 animate-[zoomIn_0.3s_ease]"
              style={{ marginTop: "2rem" }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          )}

          <button
            className="absolute right-6 text-white text-4xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
