import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Formation = () => {
  useEffect(() => {
    document.title = "Centre de Formation - SATEQ Digital Group";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with formation3 background */}
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
                src="/logos/formation3.png" 
                alt="Centre de formation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-black/60 mix-blend-multiply"></div>
            </motion.div>
          </div>
          
          {/* Overlay avec dégradé pour meilleure lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
          
          {/* Contenu Hero */}
          <div className="relative min-h-[50vh] flex items-center">
            <div className="container mx-auto px-6 py-12">
              <div className="max-w-2xl">
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
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

        {/* Main Content - Optimisé pour l'espace */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground border-l-4 border-primary pl-4">
                  <span className="text-primary">SATEQ DIGITAL ACADEMY</span> :
                </h2>
                
                <div className="space-y-4">
                  {[
                    "Formation sur les TICs & la Transformation Digitale",
                    "Séminaires de Certification sur les technologies avancées et les outils de développement numérique",
                    "Etudes & Conseils sur la mise en place de Réseaux et Points Multiservices",
                    "Séminaires de Management & Gestion de Projets",
                    "Séminaires de Marketing & Développement Personnel"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="flex-shrink-0 pt-1">
                        <motion.div 
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        ></motion.div>
                      </div>
                      <p className="text-foreground group-hover:text-primary transition-colors duration-300">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <motion.img 
                    src="/logos/formation4.jpg"
                    alt="SATEQ Digital Academy"
                    className="h-24 w-auto object-contain"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>

              {/* Right Image - formation2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/logos/formation2.jpg" 
                  alt="Formation SATEQ Digital" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay décoratif */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Cadre décoratif */}
                <div className="absolute inset-0 border-[3px] border-white/20 m-4 rounded-lg pointer-events-none"></div>
                
                {/* Points décoratifs */}
                <motion.div 
                  className="absolute top-4 right-4 w-16 h-16 rounded-full bg-green-500/20"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-green-500/20"
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

        {/* Nos avantages - Version compacte */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-8">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-center text-foreground mb-6">
                Pourquoi Choisir <span className="text-primary">SATEQ Digital Academy</span> ?
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                // Expertise
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "Expertise Reconnue",
                  description: "Formateurs certifiés"
                },
                // Innovation
                {
                  icon: (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Innovation",
                  description: "Technologies modernes"
                },
                // Certification
                {
                  icon: (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Certifications",
                  description: "Reconnus internationalement"
                },
                // Accompagnement
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Accompagnement",
                  description: "Suivi personnalisé"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-card rounded-xl border border-primary/10 hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Formation;