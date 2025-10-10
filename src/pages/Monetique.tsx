import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Monetique = () => {
  useEffect(() => {
    document.title = "Monétique - SATEQ Digital Group";
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with monetique1 background */}
        <section className="relative overflow-hidden">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0">
            <motion.div
              className="w-full h-full"
              animate={{ 
                scale: [1, 1.03, 1],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <img 
                src="/logos/monetique1.png" 
                alt="Solutions Monétiques" 
                className="w-full h-full object-cover brightness-90 sm:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 sm:from-primary/80 via-primary/75 sm:via-primary/60 to-black/80 sm:to-black/70 mix-blend-multiply"></div>
            </motion.div>
          </div>
          
          {/* Overlay avec dégradé pour meilleure lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 sm:from-black/40 via-black/40 sm:via-black/30 to-black/20 sm:to-transparent"></div>
          
          {/* Effet de vignette pour mobile uniquement */}
          <div className="absolute inset-0 sm:hidden bg-radial-gradient"></div>
          
          {/* Contenu Hero avec titre et sous-titres */}
          <div className="relative min-h-[50vh] sm:min-h-[40vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-6">
              <div className="max-w-2xl">
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-shadow-sm">
                    Monétique
                  </h1>
                  <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2">
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></div>
                      <p className="text-lg md:text-xl lg:text-2xl font-semibold text-green-300 text-shadow-sm">Paiement de services</p>
                    </div>
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></div>
                      <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-shadow-sm">Cartes bancaires & Terminaux</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Vague décorative au bas de la section hero */}
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

        {/* Section de contenu principal avec le texte et les images */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Texte à gauche */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-primary mb-3">Solutions monétiques intégrées</h2>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  <span className="font-bold text-foreground">SATEQ DIGITAL</span> s'est spécialisée dans la digitalisation et le développement de plateformes numériques.
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Notre <span className="font-semibold">Card Management System (CMS)</span> peut assurer le transfert d'argent, le paiement électronique et les services de livraison géolocalisée qui se sont beaucoup développés ces dernières années, surtout avec la situation post-Covid. Une application <span className="font-semibold">SPAY</span> pilote toutes les transactions monétiques.
                </p>
              </motion.div>
              
              {/* Image principale (Card Management System - Solution complète) */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden shadow-lg"
                >
                  <img 
                    src="/logos/monetique2.jpg" 
                    alt="Card Management System - Solution complète" 
                    className="w-full object-contain"
                    style={{ maxHeight: "380px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
                </motion.div>
                <p className="mt-3 text-center text-sm md:text-base font-semibold text-foreground/80">Card Management System - Solution complète</p>
                <motion.div 
                  className="absolute top-6 -right-6 w-16 h-16 rounded-full bg-primary/20 hidden lg:block"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
              </div>
            </div>
          </div>
        </section>
              {/* Section supprimée : image déplacée dans le bloc principal */}
       
      </main>

      <Footer />
    </div>
  );
};

export default Monetique;