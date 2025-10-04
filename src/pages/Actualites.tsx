import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight, Search, Tag, ArrowLeft, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { NewsItem } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";

const Actualites = () => {
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  const newsCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  // État pour suivre la vue actuelle et l'actualité sélectionnée
  const [currentView, setCurrentView] = useState<'list' | 'article'>(id ? 'article' : 'list');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(id || null);
  
  // État pour s'assurer que les cartes sont visibles
  const [cardsVisible, setCardsVisible] = useState<boolean>(false);
  
  useEffect(() => {
    document.title = "Actualités - SATEQ Digital Group";
    
    // État initial basé sur param d'URL
    if (id) {
      setSelectedNewsId(id);
      setCurrentView('article');
    } else {
      setCurrentView('list');
    }
    
    // Forcer l'affichage des cartes avec un léger délai
    setTimeout(() => {
      setCardsVisible(true);
    }, 100);
    
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all news card elements
    newsCardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, []);

  const newsItems: (NewsItem & { excerpt: string, content?: string, imageAlt?: string }) [] = [
    {
      id: "1",
      title: "SATEQ DIGITAL devient Distributeur des TPE VERIFONE en Afrique",
      excerpt: "Un partenariat stratégique pour développer les solutions de paiement électronique sur le continent africain.",
      date: "5 Mars 2023",
      category: "Partenariat",
      imageAlt: "Partenariat SATEQ DIGITAL avec VERIFONE"
    },
    {
      id: "2",
      title: "AUSTRIACARD SATEQ",
      excerpt: "",
      date: "2025",
      category: "Technologie",
      imageAlt: "Terminal de paiement électronique"
    },
    {
      id: "3",
      title: "Transformation digitale : clés du succès pour les entreprises",
      excerpt: "Les stratégies essentielles pour réussir sa transformation digitale dans un monde en mutation.",
      date: "7 Janvier 2023",
      category: "Digital",
      imageAlt: "Tableau de bord digital d'entreprise"
    },
    {
      id: "4",
      title: "La transformation digitale passe par une évolution profonde du management",
      excerpt: "Comment adapter le management aux enjeux de la transformation digitale moderne.",
      date: "2 Janvier 2023",
      category: "Management",
      imageAlt: "Équipe de management digital"
    }
  ];

  // Nous n'utilisons plus l'objet verifoneArticle - nous mettons le contenu directement dans le JSX
  // pour éviter tout problème potentiel

  const handleNewsClick = (newsId: string) => {
    // Navigation programmatique (fallback si pas de Link)
    navigate(`/actualites/${newsId}`);
  };
  
  const backToNewsList = () => {
    navigate('/actualites');
  };

  // Synchroniser vue si l'ID change (navigation via lien ou bouton back navigateur)
  useEffect(() => {
    if (id) {
      setSelectedNewsId(id);
      setCurrentView('article');
      setCardsVisible(false);
    } else {
      setSelectedNewsId(null);
      setCurrentView('list');
      setCardsVisible(true);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section avec animation - adapté au mode article ou liste */}
        {/* Hero Section - Adaptée en fonction de l'affichage */}
        {currentView === 'list' ? (
          /* Hero original pour la liste d'actualités */
          <section className="relative h-[35vh] overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-green-500">
            {/* Fond avec motif digital et effet parallax */}
            <div 
              className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" 
              style={{ 
                backgroundSize: '20px 20px',
                transform: 'translateZ(0)',
                willChange: 'transform'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Éléments décoratifs animés - réduits en taille */}
            <div className="absolute left-1/4 top-1/3 w-8 h-8 bg-orange-400/70 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute right-1/4 bottom-1/3 w-12 h-12 bg-green-400/70 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute right-[20%] top-1/4 w-10 h-10 bg-white/40 rounded-full blur-lg animate-float" style={{ animationDelay: '0.8s' }}></div>
            
            {/* Contenu principal du hero */}
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center md:items-start relative z-10">
              <div className="max-w-xl text-center md:text-left">
                <div className="mb-1.5">
                  <span className="inline-block px-2.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-xs uppercase tracking-wide">
                    ACTUALITÉS
                  </span>
                </div>
                
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-1.5 text-white text-base md:text-lg font-medium">
                    <span className="text-xs md:text-sm font-normal bg-white/20 rounded px-1.5 py-0.5 mr-1.5">(2025)</span> 
                    1- SATEQ devient le distributeur AUSTRIACARD
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-1.5 text-white text-base md:text-lg font-medium">
                    <span className="text-xs md:text-sm font-normal bg-white/20 rounded px-1.5 py-0.5 mr-1.5">(2025)</span>
                    2- SATEQ signe avec <span className="text-orange-400 font-bold">INTOUCH/BESTICard</span>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-1.5 text-white text-base md:text-lg font-medium">
                    <span className="text-xs md:text-sm font-normal bg-white/20 rounded px-1.5 py-0.5 mr-1.5">(2024)</span>
                    3- SATEQ devient distributeur de <span className="text-orange-400 font-bold">TPE Verifone</span>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-1.5 text-white text-base md:text-lg font-medium">
                    <span className="text-xs md:text-sm font-normal bg-white/20 rounded px-1.5 py-0.5 mr-1.5">(2024)</span>
                    4- SATEQ et <span className="text-orange-400 font-bold">S2M</span> deviennent partenaire en Afrique
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Hero avec image de fond selon l'actualité sélectionnée */
          <section className="relative h-[50vh] overflow-hidden">
            {/* Image de fond plein écran */}
            <div className="absolute inset-0">
              <img 
                src={
                  selectedNewsId === "4" ? "/logos/S2m.png" :
                  selectedNewsId === "3" ? "/logos/conventionintouch.png" : 
                  selectedNewsId === "2" ? "/logos/signatureaustria.png" : 
                  "/logos/actu1.jpg"
                } 
                alt={
                  selectedNewsId === "4" ? "La transformation digitale passe par une évolution profonde du management" :
                  selectedNewsId === "3" ? "Transformation digitale : clés du succès pour les entreprises" :
                  selectedNewsId === "2" ? "AUSTRIACARD SATEQ" : 
                  "SATEQ DIGITAL devient Distributeur des TPE VERIFONE en Afrique"
                } 
                className="w-full h-full object-cover"
              />
              {/* Overlay pour améliorer la lisibilité du texte */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            </div>
            
            {/* Badge ARTICLE */}
            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
              <div className="md:ml-8 md:max-w-2xl">
                <span className="inline-block px-3 py-1 bg-green-600 backdrop-blur-sm rounded-full text-white text-xs uppercase tracking-wide mb-4">
                  ARTICLE
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                  {selectedNewsId === "4" ? (
                    "La transformation digitale passe par une évolution profonde du management"
                  ) : selectedNewsId === "3" ? (
                    "Transformation digitale : clés du succès pour les entreprises"
                  ) : selectedNewsId === "2" ? (
                    "Terminal de paiement électronique : qu'est-ce que c'est ?"
                  ) : (
                    <>SATEQ DIGITAL devient Distributeur des <span className="text-orange-400">TPE VERIFONE</span> en Afrique</>
                  )}
                </h1>
              </div>
            </div>
          </section>
        )}

        {/* Main Content - Conditional rendering based on whether an article is selected */}
        <div className="container mx-auto px-6 py-6">
          {/* Afficher une page ou l'autre, mais pas les deux - approche simplifiée */}
          {currentView === 'list' ? (
            <>
              {/* News Section Title - More compact */}
              <div className="flex items-center space-x-2 mb-5">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Dernières Actualités</h2>
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              </div>

              {/* News Grid Section - More compact */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {cardsVisible && newsItems.map((item, index) => (
                  <Link
                    to={`/actualites/${item.id}`}
                    key={item.id}
                    className="group block cursor-pointer hover-scale transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNewsClick(item.id);
                    }}
                  >
                    <div className="bg-card rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="aspect-square bg-muted/20 flex items-center justify-center relative overflow-hidden">
                        <img
                          src={
                            item.id === '1' ? '/logos/verifone1.png' : 
                            item.id === '2' ? '/logos/signatureaustria.png' : 
                            item.id === '3' ? '/logos/conventionintouch.png' : 
                            item.id === '4' ? '/logos/S2m.png' :
                            `/logos/actu${item.id}${parseInt(item.id) <= 2 ? '.jpg' : '.png'}`
                          }
                          alt={item.imageAlt || item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="py-3 text-center font-bold text-gray-800 bg-white/80 border-t border-gray-100">
                        {item.id === '1' ? 'TPE Verifone' : 
                         item.id === '2' ? 'Signature AUTRIACARD-SATEQ' : 
                         item.id === '3' ? 'Signature INTOUCH-Besticard' : 
                         item.id === '4' ? 'Signature S2M-SATEQ' : ''}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            /* Article Page - Layout similaire à la capture d'écran */
            <div className="flex flex-col md:flex-row gap-8">
              {/* Colonne principale - Article */}
              <div className="w-full md:w-2/3">
                <button
                  onClick={backToNewsList}
                  className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline hover:translate-x-[-2px] transition-transform"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Retour aux actualités
                </button>
                {/* Contenu de l'article */}
                <div className="mb-6">
                  {selectedNewsId === "4" || selectedNewsId === "3" || selectedNewsId === "2" ? (
                    <>
                      <div className="flex flex-col items-center justify-center p-10 text-center">
                        <img 
                          src={
                            selectedNewsId === "4" ? "/logos/S2m.png" :
                            selectedNewsId === "3" ? "/logos/conventionintouch.png" : 
                            "/logos/signatureaustria.png"
                          } 
                          alt={
                            selectedNewsId === "4" ? "Signature S2M-SATEQ" :
                            selectedNewsId === "3" ? "Signature INTOUCH-Besticard" :
                            "Signature AUTRIACARD-SATEQ"
                          }
                          className="max-w-full max-h-96 mb-6 object-contain"
                        />
                        <h2 className="text-2xl font-bold text-primary mb-4">
                          {selectedNewsId === "4" ? "Signature S2M-SATEQ" :
                           selectedNewsId === "3" ? "Signature INTOUCH-Besticard" :
                           "Signature AUTRIACARD-SATEQ"}
                        </h2>
                        <p className="text-muted-foreground">
                          Plus d'informations disponibles prochainement.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-lg font-bold mb-6">
                        Le 1er mars 2023 marque la signature du Contrat pour la grande distribution des terminaux VERIFONE dans plusieurs pays africains. Ces terminaux Verifone sont certifiés VISA, Mastercard et GIM-UEMOA.
                      </p>
                      
                      <p className="mb-6">
                        MS SOLUTIONS et SATEQ DIGITAL ont fini de parapher leur accord après plusieurs mois de négociations techniques et commerciales.
                      </p>
                      
                      <p className="mb-6">
                        Les administrations, les banques, les commerçants et même les petits détaillants trouveront un interlocuteur dynamique pour disposer rapidement de terminaux Verifone par le moyen de l'achat direct, du leasing ou de la location longue durée garantie (LLDG) avec un service de maintenance assuré par des électroniciens professionnels.
                      </p>
                    </>
                  )}
                </div>
                
                {/* Navigation at the bottom */}
                <div className="border-t border-border mt-8 pt-6">
                  <Button 
                    variant="outline" 
                    className="flex items-center" 
                    onClick={backToNewsList}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    <span>Retour aux actualités</span>
                  </Button>
                </div>
              </div>
              
              {/* Colonne latérale - Autres actualités */}
              <div className="w-full md:w-1/3">
                <div className="sticky top-24">
                  <h2 className="text-xl font-bold mb-4">Actualités</h2>
                  
                  {/* Liste verticale d'autres actualités */}
                  <div className="space-y-4">
                    {newsItems.map((item, index) => (
                      <div 
                        key={`sidebar-${item.id}`} 
                        className="group flex gap-3 cursor-pointer hover:bg-muted/30 rounded-lg p-2 transition-colors"
                        onClick={() => handleNewsClick(item.id)}
                      >
                        {/* Petite image */}
                        <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded-md">
                          <img 
                            src={
                              item.id === '1' ? '/logos/verifone1.png' : 
                              item.id === '2' ? '/logos/signatureaustria.png' : 
                              item.id === '3' ? '/logos/conventionintouch.png' : 
                              item.id === '4' ? '/logos/S2m.png' :
                              `/logos/actu${item.id}${parseInt(item.id) <= 2 ? '.jpg' : '.png'}`
                            } 
                            alt={item.imageAlt || item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Contenu */}
                        <div className="flex-grow">
                          <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                            {item.id === '1' ? 'TPE Verifone' : 
                             item.id === '2' ? 'Signature AUTRIACARD-SATEQ' : 
                             item.id === '3' ? 'Signature INTOUCH-Besticard' : 
                             item.id === '4' ? 'Signature S2M-SATEQ' : 
                             item.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>



        {/* Additional News Section with CTA - Compact */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 py-6">
          <div className="container mx-auto px-6">
            <div 
              ref={el => newsCardsRef.current.push(el)}
              className="text-center fade-in-up"
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Suivez Toute Notre <span className="text-primary">Actualité</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Restez informé des dernières innovations, partenariats et développements de SATEQ Digital Group
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Actualites;