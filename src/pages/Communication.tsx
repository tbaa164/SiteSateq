import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Communication = () => {
  useEffect(() => {
    document.title = "Communication - SATEQ Digital Group";
  }, []);
  
  const services = [{
    title: "PLV (Publicité sur Lieu de Vente)",
    description: "Supports publicitaires pour optimiser votre présence en magasin",
    icon: "🏪"
  }, {
    title: "Affiches",
    description: "Impression grand format pour vos campagnes d'affichage",
    icon: "📋"
  }, {
    title: "Enseignes",
    description: "Signalétique professionnelle pour votre entreprise",
    icon: "🏢"
  }, {
    title: "Flyers",
    description: "Supports de communication pour vos événements",
    icon: "📄"
  }, {
    title: "Plaquettes",
    description: "Brochures commerciales et catalogues produits",
    icon: "📖"
  }, {
    title: "Goodies et Cadeaux",
    description: "Objets publicitaires personnalisés",
    icon: "🎁"
  }, {
    title: "Agenda et Bloc-notes",
    description: "Supports de bureau personnalisés",
    icon: "📅"
  }];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with communication1 background */}
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
                src="/logos/commu.png" 
                alt="Communication Digitale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-black/70 mix-blend-multiply"></div>
            </motion.div>
          </div>
          
          {/* Overlay avec dégradé pour meilleure lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
          
          {/* Contenu Hero */}
          <div className="relative min-h-[40vh] flex items-center">
            <div className="container mx-auto px-6 py-6">
              <div className="w-full flex flex-col items-end">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
               
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="pt-6"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight text-right">
                      COMMUNIQUER
                    </h1>
                  </motion.div>
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

        {/* Main Content with communication2 */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground border-l-4 border-accent pl-4">
                  Notre <span className="text-primary">Agence de Communication</span>
                </h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">SATEQ DIGITAL</span> a développé une activité d'Agence de Communication  <span className="font-semibold text-foreground">(IXCOM) </span> pour accompagner ses clients dans le développement de leur stratégie de communication et dans la promotion de leur image de marque.
                  </p>
                  
                  <p className="leading-relaxed">
                    Nos ateliers produisent tous types de supports publicitaires:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {[
                      "PLV",
                      "Affiches",
                      "Enseignes",
                      "Flyers",
                      "Plaquettes commerciales",
                      "Goodies & Cadeaux d'affaires",
                      "Agendas & Bloc-notes",
                      "Objets personnalisés"
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                
              </motion.div>
              
              {/* Right Image - with both communication2 and ixcom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-xl"
                style={{ maxHeight: "300px", display: "flex", justifyContent: "center", position: "relative" }}
              >
                {/* Communication2 (sphère marketing) */}
                <img 
                  src="/logos/communication2.png" 
                  alt="Communication SATEQ Digital" 
                  className="w-auto h-auto object-contain z-10"
                  style={{ maxHeight: "90%" }}
                />
                
                {/* IXCOM image placée en haut à gauche */}
                <div className="absolute top-4 left-4 z-20" style={{ maxWidth: "30%" }}>
                  <img
                    src="/logos/ixcom.jpg"
                    alt="IXCOM"
                    className="w-full h-auto object-contain rounded-md shadow-md"
                  />
                </div>
                
                {/* Overlay décoratif */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Points décoratifs */}
                <motion.div 
                  className="absolute top-4 right-4 w-16 h-16 rounded-full bg-accent/20"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-accent/20"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
};

export default Communication;