import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [{
  name: "VERIFONE",
  logo: "Verifone.jpg",
  color: "#4CAF50", // Vert
  description: "Terminaux de paiement"
}, {
  name: "IXCOM",
  logo: "ixcom.jpg",
  color: "#2196F3", // Bleu
  description: "Infrastructures réseaux"
}, {
  name: "ENTRUST",
  logo: "entrust.jpg",
  color: "#009688", // Bleu-vert
  description: "Solutions identité & cartes"
}, {
  name: "CryptoAg",
  logo: "CryptoAg.jpg",
  color: "#FFC107", // Jaune
  description: "Solution de cryptage"
}, {
  name: "Austriacard",
  logo: "austriacard.png",
  color: "#E91E63", // Rose
  description: "...."
}, {
  name: "S2M",
  logo: "s2mlogo.png",
  color: "#607D8B", // Bleu-gris
  description: "...."
}, {
  name: "M2M",
  logo: "m2mlogo.png",
  color: "#3F51B5", // Indigo
  description: "...."
}, {
  name: "Feitian",
  logo: "feitian.png",
  color: "#FF5722", // Deep Orange
  description: "...."
}, {
  name: "Toppan",
  logo: "toppan.jpeg",
  color: "#9C27B0", // Purple
  description: "...."
}, {
  name: "InTouch",
  logo: "intouchlogo.png",
  color: "#00BCD4", // Cyan
  description: "...."
}];

export default function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 1,
      dragFree: true,
      inViewThreshold: 0.5,
      breakpoints: {
        '(min-width: 640px)': { slidesToScroll: 2 },
        '(min-width: 768px)': { slidesToScroll: 3 },
        '(min-width: 1024px)': { slidesToScroll: 4 },
        '(min-width: 1280px)': { slidesToScroll: 5 }
      }
    },
    [Autoplay({ delay: 3500, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Auto-restart autoplay after manual interaction
      emblaApi.on('pointerUp', () => {
        const plugins = emblaApi.plugins();
        const autoplay = plugins?.autoplay;
        if (autoplay && typeof autoplay.play === 'function') {
          autoplay.play();
        }
      });
    }
  }, [emblaApi]);

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-8 bg-orange-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Nos Partenaires 
            </h2>
            <div className="h-1 w-8 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-orange-500 text-sm md:text-base whitespace-nowrap overflow-x-auto no-scrollbar w-full px-2">
            Nous collaborons avec les leaders mondiaux de la technologie pour offrir les meilleures solutions du marché.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8" ref={emblaRef}>
            <div className="flex">
              {partners.map((partner, index) => (
                <div key={index} className="flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] px-2 py-1">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center p-4 h-full transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:scale-105 group cursor-pointer">
                    {/* Partner Logo */}
                    <div className="w-28 h-20 flex items-center justify-center mb-4 overflow-hidden group-hover:transform group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={`/logos/${partner.logo}`} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain filter drop-shadow-sm" 
                        onError={(e) => {
                          // Fallback en cas d'échec de chargement de l'image
                          e.currentTarget.style.display = 'none';
                          // Accéder au div fallback via un ref ou un id serait préférable
                          const fallbackDiv = e.currentTarget.parentElement?.querySelector('div');
                          if (fallbackDiv) {
                            (fallbackDiv as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      <div 
                        className="w-full h-full rounded-lg items-center justify-center hidden" 
                        style={{ backgroundColor: `${partner.color}20` }}
                      >
                        <span className="font-bold" style={{ color: partner.color }}>{partner.name.substring(0, 3)}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-muted-foreground text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.min(6, Math.ceil(partners.length / 4)) }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/30 transition-colors duration-300"
            />
          ))}
          <div className="w-4 h-2 rounded-full bg-primary transition-colors duration-300 animate-pulse"></div>
          {Array.from({ length: Math.min(6, Math.ceil(partners.length / 4)) }).map((_, index) => (
            <div
              key={index + 10}
              className="w-2 h-2 rounded-full bg-primary/30 transition-colors duration-300"
            />
          ))}
        </div>
        
     
      </div>
    </section>
  );
}