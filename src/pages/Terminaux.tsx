import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Terminaux = () => {
  // État pour le carrousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Terminaux2, 3, 4, 5
  
  useEffect(() => {
    document.title = "Terminaux - SATEQ Digital Group";
    
    // Défilement automatique des images
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full">
        {/* Hero Section avec image terminaux1 en arrière-plan */}
        <section className="relative w-full bg-gradient-to-b from-gray-900/90 to-primary/90 overflow-hidden">
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/logos/terminaux1.png"
              alt="Terminaux de paiement"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-primary/80 mix-blend-multiply"></div>
          </div>

          {/* Contenu Hero */}
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Les <span className="text-green-400">Terminaux</span> électroniques (TPE)
              </motion.h1>
              
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                Les réseaux de transfert d'argent et les plateformes de paiement de services ont permis le développement de l'inclusion financière et la solidarité économique en Afrique.
                </p>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  Les Téléphones, les Terminaux de paiement (TPE) et leurs applications ont fondamentalement changé l'Economie Numérique et les comportements des populations africaines.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Vague décorative au bas de la section hero */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
              <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Section des types de terminaux */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center">
              <span className="inline-block w-10 h-1 bg-primary mr-3"></span>
              Nos terminaux (TPE)
              <span className="inline-block w-10 h-1 bg-primary ml-3"></span>
            </h2>

            {/* Grille des types de terminaux */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "TPE biométrique",
                  description: "TPE biométrique avec système Android pour une flexibilité maximale",
                  img: "/logos/TPEF20FP.png"
                },
                {
                  title: "TPE bancaire certifié",
                  description: "TPE bancaire certifié GIM/VISA/MASTERCARD",
                  img: "/logos/TPEVerifone.png"
                },
                {
                  title: "Mini TPE mobile",
                  description: "Mini TPE mobile pour les paiements en déplacement",
                  img: "/logos/TPEMPOS.png"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-full h-40 mb-4 mx-auto flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="h-full w-full object-contain p-2" 
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed flex-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Section des avantages */}
            <div className="mb-16">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-6 md:p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="inline-block w-5 h-5 rounded-full bg-green-500 mr-3"></span>
                      TPE Android Multiservices
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      Les Terminaux de Paiement Électronique (TPE) Multiservices sous Android constituent l'évolution majeure des systèmes de paiement pour les commerçants et institutions financières modernes. Ces appareils polyvalents intègrent les dernières technologies pour assurer des transactions sécurisées et rapides.
                    </p>
                    
                    <p className="text-gray-600 mb-6">
                      Nos TPE Android associent les avantages des terminaux de paiement traditionnels aux fonctionnalités avancées d'un écosystème applicatif ouvert, permettant ainsi d'offrir une gamme complète de services à vos clients.
                    </p>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Avantages des TPE SATEQ</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">→</span>
                        <span>Sécurité renforcée conforme aux normes PCI-DSS</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">→</span>
                        <span>Interface utilisateur intuitive et personnalisable</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">→</span>
                        <span>Connexions multiples (4G, WiFi, Bluetooth, Ethernet)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">→</span>
                        <span>Support des paiements sans contact et QR code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">→</span>
                        <span>Gestion à distance via plateforme cloud sécurisée</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="md:w-1/2 bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="inline-block w-5 h-5 rounded-full bg-primary mr-3"></span>
                      Pourquoi choisir nos solutions?
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-primary mb-2">Performance</h4>
                        <p className="text-gray-600">Des terminaux rapides et réactifs pour des transactions fluides, même en période d'affluence</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-primary mb-2">Sécurité</h4>
                        <p className="text-gray-600">Protection des données sensibles avec cryptage de bout en bout et certification PCI-DSS</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-primary mb-2">Polyvalence</h4>
                        <p className="text-gray-600">Support de multiples méthodes de paiement: cartes à puce EMV, sans contact, QR code, mobile wallet</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-primary mb-2">Support</h4>
                        <p className="text-gray-600">Assistance technique 24/7 et mises à jour régulières pour garantir un fonctionnement optimal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carrousel des images */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-md p-8 overflow-hidden">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Nos terminaux en images
              </h3>
              
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                {/* Images du carrousel */}
                {[2, 3, 4, 5].map((num, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <img
                      src={`/logos/terminaux${num}.jpg`}
                      alt={`Terminal de paiement type ${num}`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ))}
                
                {/* Indicateurs du carrousel */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-10">
                  {[...Array(totalSlides)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index ? "bg-primary w-8" : "bg-gray-300"
                      }`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Contrôles du carrousel */}
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-white transition-all z-10"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-white transition-all z-10"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            



          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terminaux;