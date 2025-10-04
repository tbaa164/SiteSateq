import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: Array<{
    id: number | string;
    name: string;
    index: number;
  }>;
  title: string;
  itemsPerPage?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  renderItem: (item: { name: string; index: number; }) => JSX.Element;
}

const Carousel = ({
  items,
  title,
  itemsPerPage = 6,
  autoPlay = true,
  autoPlayInterval = 5000,
  renderItem
}: CarouselProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const maxPage = Math.ceil(items.length / itemsPerPage) - 1;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  // Reset when items change
  useEffect(() => {
    setCurrentPage(0);
  }, [items]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered || isTouched) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev < maxPage ? prev + 1 : 0));
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, autoPlayInterval, maxPage, isHovered, isTouched]);

  // Reset touch detection after 3 seconds of inactivity
  useEffect(() => {
    if (!isTouched) return;
    
    const timer = setTimeout(() => {
      setIsTouched(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [isTouched]);

  const nextPage = () => {
    setIsTouched(true);
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : 0));
  };

  const prevPage = () => {
    setIsTouched(true);
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : maxPage));
  };

  const goToPage = (page: number) => {
    setIsTouched(true);
    setCurrentPage(page);
  };

  // Calculate visible items
  const visibleItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div
      className="relative mx-auto max-w-5xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
        {title}
      </h3>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {visibleItems.map((item, i) => (
            <div
              key={item.id}
              className={`animate-scale-in opacity-0 stagger-delay-${i + 1}`}
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'forwards' 
              }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white/80 backdrop-blur-sm text-primary p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 z-10"
          aria-label="Précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white/80 backdrop-blur-sm text-primary p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 z-10"
          aria-label="Suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Page Indicators */}
      {maxPage > 0 && (
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(maxPage + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? 'bg-primary scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;