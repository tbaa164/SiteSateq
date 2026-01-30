import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cartes = () => {
  useEffect(() => {
    document.title = "Cartes - SATEQ Digital Group";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
   
      <section className="relative h-[30vh] md:h-[27vh] overflow-hidden bg-gradient-to-r from-emerald-800 via-green-700 to-orange-600">
        {/* Fond avec motif digital */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 sm:from-black/40 to-transparent"></div>
        
        {/* Éléments décoratifs animés - cachés en mobile, visibles en sm et plus */}
        <div className="absolute left-1/4 top-1/3 hidden sm:block w-10 sm:w-12 h-10 sm:h-12 bg-orange-400 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute right-1/4 bottom-1/3 hidden sm:block w-16 sm:w-20 h-16 sm:h-20 bg-emerald-500 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute right-[20%] top-1/4 hidden sm:block w-12 sm:w-16 h-12 sm:h-16 bg-white/60 rounded-full blur-lg animate-float" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Éléments en orbite */}
        <div className="absolute left-[20%] top-[40%] hidden lg:block">
          <div className="relative">
            <div className="w-3 h-3 bg-white rounded-full animate-orbit-fast" style={{ animationDelay: '0s' }}></div>
          </div>
        </div>
        <div className="absolute right-[30%] top-[30%] hidden lg:block">
          <div className="relative">
            <div className="w-2 h-2 bg-orange-300 rounded-full animate-orbit-fast" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        {/* Contenu principal du hero - optimisé pour mobile */}
        <div className="container mx-auto px-3 sm:px-4 h-full flex flex-col justify-center items-start relative z-10">
          <div className="max-w-[95%] sm:max-w-3xl w-full">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-1 sm:mb-2 text-reveal break-words">
              <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent animate-gradient-text">
                Les <span className="text-green-300">CARTES</span> numérisées
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-full sm:max-w-xl text-reveal-delay-1 whitespace-normal">
              Solutions de cartes innovantes pour tous vos besoins d'identification et de paiement
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-3 sm:px-6 py-6 sm:py-12">
        {/* Section Cartes - Design amélioré */}
        <div className="animate-fade-in max-w-7xl mx-auto">

          {/* Carte principale avec style harmonisé avec IdentiteNumerique.tsx */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Informations principales */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                  <div className="h-8 w-2 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">Types de cartes</h2>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {["Carte d'identification", "Carte privative QR-Code multifonction", "Carte bancaire"].map((item, index) => (
                    <div key={index} className="flex items-start px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-800 text-sm sm:text-base font-medium break-words">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 sm:mt-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-3 sm:p-4 border-l-4 border-green-500">
                    <p className="font-medium text-emerald-800 text-sm sm:text-base">
                      Avec ses partenaires, <span className="font-bold text-emerald-700">SATEQ DIGITAL</span> propose des cartes sécurisées intégrant des puces pour répondre aux besoins spécifiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image de carte - optimisée pour mobile */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col justify-center items-center">
              <img 
                src="/logos/cartehomme.png" 
                alt="Différents types de cartes" 
                className="w-full max-w-full sm:max-w-md h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-all mb-3 sm:mb-4"
              />
              <p className="text-center text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                Solutions de cartes diverses adaptées à vos besoins spécifiques
              </p>
            </div>
          </div>
          
          {/* Caractéristiques techniques */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mt-6 sm:mt-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-2 mb-3 sm:mb-6">
              <div className="h-6 sm:h-8 w-1.5 sm:w-2 bg-gradient-to-b from-orange-500 to-amber-600 rounded-full"></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">Caractéristiques disponibles</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Technologie RFID/NFC intégrée",
                "Sécurisation avancée des données",
                "Compatible avec tous les systèmes",
                "Durabilité et résistance optimale"
              ].map((feature, index) => (
                <div key={index} className="flex items-start px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm sm:text-base text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Utilisations et applications */}
          <div className="max-w-7xl mx-auto mt-6 sm:mt-8">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-6">Nos exemples de cartes</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
                {[
                  { src: "/logos/Carte1.jpg", alt: "Carte d'identification", color: "from-blue-600 to-blue-400", textColor: "text-blue-700", features: ["Identification sécurisée", "Photo intégrée", "QR code personnel"] },
                  { src: "/logos/carte2.jpg", alt: "Carte privative", color: "from-green-600 to-green-400", textColor: "text-green-700", features: ["Identité biométrique", "Paiement QR-Code", "Fonctions supplémentaires"] },
                  { src: "/logos/agricole.png", alt: "Carte bancaire", color: "from-amber-600 to-amber-400", textColor: "text-amber-700", features: ["Paiement international", "Retrait GAB/DAB", "Assurance intégrée"] },
                  { src: "/logos/Intouch.jpg", alt: "Carte entreprise", color: "from-purple-600 to-purple-400", textColor: "text-purple-700", features: ["Identification des employés", "Paiement salaire", "Santé et Sécurité sociale"] }
                ].map((carte, index) => (
                  <div key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in bg-white rounded-xl" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className={`h-1 sm:h-2 bg-gradient-to-r ${carte.color}`}></div>
                    <div className="p-2 sm:p-4">
                      <div className="rounded-lg overflow-hidden mb-2 sm:mb-3">
                        <img
                          src={carte.src}
                          alt={carte.alt}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <h4 className={`text-sm sm:text-lg font-semibold mb-1 sm:mb-2 ${carte.textColor}`}>{carte.alt}</h4>
                      <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                        {carte.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-${carte.color.split(' ')[0].replace('from-', '')} mr-1 sm:mr-2`}></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cartes;
