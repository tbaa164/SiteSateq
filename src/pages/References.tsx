import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/ui/carousel-logos";
import { useCountAnimation } from "@/hooks/useCountAnimation";

const References = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animation pour l'effet de parallaxe
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.4; // Vitesse de l'effet de parallaxe
        heroRef.current.style.backgroundPosition = `center ${translateY}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const partnerLogos = [
    { id: 1, name: "ixcom", index: 1 },
    { id: 2, name: "TechnoPoint", index: 2 },
    { id: 3, name: "SEWACARD", index: 3 },
    { id: 4, name: "Entrust Datacard", index: 4 },
    { id: 5, name: "WideInt", index: 5 },
    { id: 6, name: "nexa technologies", index: 6 },
    { id: 7, name: "MS SOLUTIONS", index: 7 },
    { id: 8, name: "Verifone", index: 8 },
    { id: 9, name: "Schneider Electric", index: 9 },
    { id: 10, name: "CRYPTOAG", index: 10 },
    { id: 11, name: "elexo", index: 11 },
    { id: 12, name: "SeeTec", index: 12 }
  ];

  const clientLogos = [
    { id: 13, name: "Assemblée nationale du Sénégal", index: 13 },
    { id: 14, name: "Ministère de la Justice", index: 14 },
    { id: 15, name: "DER", index: 15 },
    { id: 16, name: "senelec", index: 16 },
    { id: 17, name: "IPRES", index: 17 },
    { id: 18, name: "Caisse de Sécurité Sociale", index: 18 },
    { id: 19, name: "Orange Money", index: 19 },
    { id: 20, name: "Wizall Money", index: 20 },
    { id: 21, name: "La Banque Agricole", index: 21 },
    { id: 22, name: "FONGAD Invest", index: 22 },
    { id: 23, name: "ONEA", index: 23 },
    { id: 24, name: "ARTP", index: 24 }
  ];

  const LogoCard = ({ name, index }: { name: string; index: number }) => (
    <div className="group relative bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 flex flex-col items-center justify-center h-full overflow-hidden">
      {/* Logo Image Placeholder with Shine Effect */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-2 group-hover:from-primary/20 group-hover:to-accent/30 transition-all duration-500 overflow-hidden">
        <span className="text-primary font-semibold text-sm relative z-10">Image {index}</span>
        
        {/* Shine Animation Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:animate-shine"></div>
        
        {/* Subtle Floating Animation */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent/20 blur-sm animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-primary/20 blur-sm animate-pulse" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}></div>
      </div>
      
      {/* Logo Name with Hover Underline Effect */}
      <p className="text-sm font-medium text-foreground text-center leading-tight relative">
        {name}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
      </p>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </div>
  );

  // État pour gérer la visibilité des statistiques
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Observer pour activer l'animation des statistiques au défilement
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  // Utiliser le hook d'animation pour les compteurs de statistiques
  const referencesCount = useCountAnimation({ target: 24, isVisible: statsVisible });
  const partnersCount = useCountAnimation({ target: 12, isVisible: statsVisible });
  const yearsCount = useCountAnimation({ target: 15, isVisible: statsVisible });
  const satisfactionCount = useCountAnimation({ target: 100, isVisible: statsVisible });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section avec parallaxe */}
      <section 
        ref={heroRef}
        className="relative py-16 overflow-hidden bg-gradient-to-r from-primary to-accent"
        style={{ backgroundSize: '200% 200%' }}
      >
        {/* Éléments de décoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 right-1/3 w-20 h-20 rounded-full bg-white/15 blur-xl animate-float"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-reveal">
            Nos références
          </h1>
          <div className="w-32 h-1.5 bg-white/30 mx-auto rounded-full mb-6 text-reveal-delay-1"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-reveal-delay-2">
            Découvrez les partenaires et clients qui nous font confiance dans notre mission de transformation digitale
          </p>
        </div>
      </section>

      {/* Partners Section avec Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slide-in">
              Références Partenaires
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: '0.2s' }}>
              Nos partenaires technologiques de confiance qui nous permettent d'offrir des solutions innovantes
            </p>
          </div>
          
          <Carousel 
            items={partnerLogos}
            title="Partenaires Technologiques"
            renderItem={({ name, index }) => <LogoCard name={name} index={index} />}
            itemsPerPage={6}
          />
        </div>
      </section>

      {/* Clients Section avec Carousel */}
      <section className="py-12 bg-gradient-to-br from-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slide-in">
              Références Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: '0.2s' }}>
              Les organisations qui ont choisi SATEQ pour leur transformation numérique
            </p>
          </div>
          
          <Carousel 
            items={clientLogos}
            title="Nos Clients"
            renderItem={({ name, index }) => <LogoCard name={name} index={index} />}
            itemsPerPage={6}
          />
        </div>
      </section>

      {/* Stats Section avec animation de comptage */}
      <section 
        ref={statsRef}
        className="py-12 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden"
      >
        {/* Éléments de design d'arrière-plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-count-up">{referencesCount}+</div>
              <div className="text-white/90 font-medium">Références</div>
            </div>
            <div className="p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-count-up">{partnersCount}+</div>
              <div className="text-white/90 font-medium">Partenaires</div>
            </div>
            <div className="p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-count-up">{yearsCount}+</div>
              <div className="text-white/90 font-medium">Années</div>
            </div>
            <div className="p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-count-up">{satisfactionCount}%</div>
              <div className="text-white/90 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default References;