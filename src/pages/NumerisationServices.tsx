import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NumerisationServices = () => {
  const domains = [
    "Administration, Finance publique",
    "Éducation, Santé, Gestion RH",
    "Banques, Assurances",
    "Commerce, Industrie, Artisanat, Culture",
    "Events, Sport, Associations, Tontines, etc …"
  ];
  
  // Pour le titre de la page
  useEffect(() => {
    document.title = "Numérisation de Services - SATEQ Digital Group";
  }, []);
  
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Réduit en hauteur */}
      <section className="relative overflow-hidden">
        {/* Image d'arrière-plan avec animation automatique */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <div className="w-full h-full relative">
              <img 
                src="/logos/digitalisation1.png" 
                alt="Numérisation de services" 
                className="w-full h-full object-cover brightness-90 sm:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 sm:from-primary/90 via-primary/85 sm:via-primary/70 to-black/60 sm:to-transparent mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Overlay avec dégradé - plus sombre sur mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 sm:from-black/40 via-black/50 sm:via-black/30 to-black/30 sm:to-transparent"></div>
        
        {/* Effet de vignette pour mobile uniquement */}
        <div className="absolute inset-0 sm:hidden bg-radial-gradient"></div>
        
        {/* Contenu Hero - Hauteur adaptée pour mobile/desktop */}
        <div className="relative h-[60vh] sm:h-[50vh] min-h-[350px] sm:min-h-[300px] flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Numérisation <span className="text-green-400">de Services</span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg text-white mb-5 sm:mb-6 max-w-md text-shadow-mobile"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transformez vos processus métier avec nos solutions digitales innovantes.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
               
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Vague décorative au bas de la section hero - Plus petite */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,32L60,32C120,32,240,32,360,32C480,32,600,32,720,32C840,32,960,32,1080,32C1200,32,1320,32,1380,32L1440,32L1440,60L1380,60C1320,60,1200,60,1080,60C960,60,840,60,720,60C600,60,480,60,360,60C240,60,120,60,60,60L0,60Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content - Hauteur et espacement réduits */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary">Transformez</span> votre entreprise avec nos solutions digitales
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-green-500 mx-auto mb-4"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </div>
        
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            {/* Left Content */}
            <div className="flex flex-col justify-start pt-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm p-8 relative overflow-hidden group">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-400/5 rounded-full blur-2xl group-hover:scale-105 transition-transform" />
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 leading-snug">
                  SATEQ DIGITAL modernise les services en numérisant les procédés dans plusieurs
                  secteurs :
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
                  {domains.map((domain, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0">
                        <motion.div 
                          className="w-3.5 h-3.5 bg-green-500 rounded-full shadow-sm shadow-green-500/30"
                          whileHover={{ scale: 1.5 }}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                      </div>
                      <p className="text-[15px] md:text-base text-gray-700 group-hover:text-primary transition-colors duration-300 font-medium tracking-tight">
                        {domain}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Image digitalisation2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-xl overflow-hidden shadow-lg max-w-md mx-auto lg:ml-auto border border-gray-100 bg-white/70 backdrop-blur-sm"
              whileHover={{ scale: 1.03 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/logos/digi.jpg" 
                  alt="Numérisation de services" 
                  className="w-full h-full object-contain p-4" 
                  loading="lazy"
                />
                
                {/* Overlay effet de brillance sur hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Points décoratifs plus visibles */}
                <motion.div 
                  className="absolute top-4 right-4 w-16 h-16 rounded-full bg-green-500/25"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-6 left-6 w-14 h-14 rounded-full bg-blue-500/25"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.7, 0.4],
                    x: [0, -15, 0],
                    y: [0, 15, 0] 
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

    

      <Footer />
    </div>;
};
export default NumerisationServices;