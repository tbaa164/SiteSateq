import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [{
  name: "Burninfo",
  logo: "burninfo.png",
  color: "#4CAF50",
  description: "Client"
}, {
  name: "AMSA",
  logo: "amsa.png",
  color: "#2196F3",
  description: "Client"
}, {
  name: "Senecartours",
  logo: "senecartours.png",
  color: "#009688",
  description: "Client"
}, {
  name: "SETER",
  logo: "seter.png",
  color: "#FFC107",
  description: "Client"
}, {
  name: "ADER",
  logo: "ader.png",
  color: "#E91E63",
  description: "Client"
}, {
  name: "MCTN",
  logo: "mctn.png",
  color: "#607D8B",
  description: "Client"
}, {
  name: "Orange Money",
  logo: "orangemoney.png",
  color: "#FF9800",
  description: "Client"
}, {
  name: "EPS",
  logo: "eps.png",
  color: "#3F51B5",
  description: "Client"
}, {
  name: "Samsung",
  logo: "samsung.png",
  color: "#000080",
  description: "Client"
}, {
  name: "Justice",
  logo: "justice.png",
  color: "#8B4513",
  description: "Client"
}, {
  name: "IPRES",
  logo: "ipres.png",
  color: "#00BCD4",
  description: "Client"
}, {
  name: "Caisse Mali",
  logo: "caissemali.png",
  color: "#4CAF50",
  description: "Client"
}, {
  name: "Senelec",
  logo: "senelec.png",
  color: "#FFEB3B",
  description: "Client"
}, {
  name: "CSS",
  logo: "css.png",
  color: "#2196F3",
  description: "Client"
}, {
  name: "Tchad",
  logo: "tchad.png",
  color: "#009688",
  description: "Client"
}, {
  name: "Fongad",
  logo: "fongad.png",
  color: "#E91E63",
  description: "Client"
}, {
  name: "ONES",
  logo: "ones.png",
  color: "#9C27B0",
  description: "Client"
}, {
  name: "SEA",
  logo: "sea.png",
  color: "#FF5722",
  description: "Client"
}, {
  name: "OLA",
  logo: "ola.png",
  color: "#607D8B",
  description: "Client"
}, {
  name: "Elite",
  logo: "elite.png",
  color: "#3F51B5",
  description: "Client"
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
              Nos Références
            </h2>
            <div className="h-1 w-8 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-orange-500 text-sm md:text-base md:whitespace-nowrap md:overflow-x-auto no-scrollbar w-full px-2">
            Ils nous font confiance pour leurs solutions technologiques et leurs projets de transformation digitale.
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
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center p-2 md:p-4 h-full transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:scale-105 group cursor-pointer">
                    {/* Partner Logo */}
                    <div className="w-full h-28 md:h-32 lg:h-28 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={`/logos/${partner.logo}`} 
                          alt={partner.name} 
                          className={`w-full h-full object-contain filter drop-shadow-sm ${partner.logo === 'mctn.png' ? 'scale-[2.5]' : ''}`}
                          onError={(e) => {
                            // Fallback en cas d'échec de chargement de l'image
                            e.currentTarget.style.display = 'none';
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