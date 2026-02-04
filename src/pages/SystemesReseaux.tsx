import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const SystemesReseaux = () => {
  useEffect(() => {
    document.title = "Systèmes & Réseaux de sécurité - SATEQ Digital Group";
  }, []);

  // État pour le carrousel des réalisations
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  // Fonction pour faire défiler automatiquement les slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 md:px-6 py-8">
        {/* Hero Section - With Background Image - Hauteur augmentée pour mobile */}
        <div className="relative overflow-hidden rounded-2xl mb-12 py-16 px-4 bg-cover bg-center h-[300px] sm:h-[220px] flex items-center justify-center" style={{ backgroundImage: 'url(/logos/systemereseauxHeaderNew.jpg)' }}>
          {/* Overlay to ensure text readability - plus foncé sur mobile */}
          <div className="absolute inset-0 bg-black/50 sm:bg-black/30"></div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large Circle */}
            <motion.div
              className="absolute w-[200px] h-[200px] rounded-full bg-primary/10 blur-2xl"
              animate={{
                x: ['-10%', '5%', '-5%'],
                y: ['5%', '-10%', '8%'],
                scale: [0.9, 1.1, 0.95]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{ top: '10%', right: '5%' }}
            />
            
            {/* Medium Circle */}
            <motion.div
              className="absolute w-[150px] h-[150px] rounded-full bg-green-400/10 blur-xl"
              animate={{
                x: ['5%', '-8%', '10%'],
                y: ['8%', '15%', '-5%'],
                scale: [1, 0.8, 1.1]
              }}
              transition={{ 
                duration: 18, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{ bottom: '15%', left: '10%' }}
            />
            
            {/* Small Circles (Reduced) */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-[50px] h-[50px] rounded-full bg-${i % 2 === 0 ? 'primary' : 'green-500'}/5 blur-md`}
                animate={{
                  x: [
                    `${-20 + i * 10}%`, 
                    `${10 - i * 8}%`, 
                    `${5 + i * 5}%`
                  ],
                  y: [
                    `${-10 + i * 8}%`, 
                    `${20 - i * 5}%`, 
                    `${-15 + i * 10}%`
                  ],
                }}
                transition={{ 
                  duration: 10 + i * 2, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                style={{ 
                  top: `${15 + i * 10}%`, 
                  left: `${10 + i * 12}%`,
                  opacity: 0.7
                }}
              />
            ))}
            
            {/* Grid Lines */}
            <div className="absolute inset-0" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', 
                  backgroundSize: '30px 30px' 
                }} 
            />
          </div>
          
          {/* Hero Content - Improved for background image and mobile display */}
          <motion.div 
            className="relative text-center z-10 max-w-full px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-2xl md:text-5xl font-bold mb-2 md:mb-3 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-green-400 break-words sm:whitespace-nowrap">Systèmes & Réseaux</span> <span className="text-white break-words sm:whitespace-nowrap">de sécurité</span>
            </motion.h1>
            <motion.p 
              className="text-sm md:text-lg text-white mx-auto px-2 whitespace-normal sm:whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Solutions complètes de sécurité électronique pour la protection de vos infrastructures et de vos données
            </motion.p>
          </motion.div>
        </div>

        {/* Services List - Compact Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Systèmes informatiques
            </h2>
            
            <div className="space-y-3 flex-1">
              <motion.div 
                className="border-l-4 border-green-600 bg-white p-4 hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  Infrastructures
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Conception, ingénierie et réalisation de solutions sécurisées
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-gray-700 bg-white p-4 hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  Matériels
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Serveurs, ordinateurs, périphériques avec maintenance et support technique
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-green-600 bg-white p-4 hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  Crypto et cybersécurité
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Systèmes dédiés avec équipements de cryptage avancés
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Process Steps - Modern Image Section */}
          <motion.div 
            className="h-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/logos/ingenierie.jpg" 
                alt="Notre processus d'ingénierie" 
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Processus Section - Same layout as Systèmes informatiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Processus
            </h2>
            
            <div className="space-y-3 flex-1">
              <motion.div 
                className="border-l-4 border-green-600 bg-white p-4 hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  Électricité MT/BT / Énergie Solaire
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Câblages, installations solaires et circuits de climatisation
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-gray-700 bg-white p-4 hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  Télécommunications
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Téléphonie VoIP avec conférences audio et visio professionnelles
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-green-600 bg-white p-4 hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  Contrôle d'accès & Vidéosurveillance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sécurité électronique intégrant contrôle et vidéosurveillance complète
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Images Grid à droite - 2x2 plus compact */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num}
                  className="relative overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src={`/logos/processus${num}.png`} 
                    alt={`Processus ${num}`} 
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Carousel en pleine largeur comme dans l'image */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Exemples de réalisations
          </h2>
          
          <div className="relative overflow-hidden rounded-lg shadow-lg h-[450px] w-full">
            {/* Image Carousel */}
            <div className="relative w-full h-full">
              {[1, 2, 3, 4, 5].map((num, index) => (
                <div 
                  key={num}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img 
                    src={`/logos/InfrastructureDatacenter${num}.jpg`} 
                    alt={`Infrastructure Datacenter ${num}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  
                    <p className="text-white text-lg opacity-90">Systèmes de sécurité et infrastructure professionnelle</p>
                    
                    {/* Dots indicators - styled like in the screenshot */}
                    <div className="mt-4 flex space-x-2">
                      {[...Array(totalSlides)].map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`w-3 h-3 rounded-full ${
                            i === currentSlide ? "bg-white" : "bg-white/40"
                          }`}
                          aria-label={`Go to slide ${i+1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section - Modern Design */}
        <motion.div 
          className="bg-white rounded-2xl p-8 mb-16 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 relative">
            <span className="relative">
              Nos partenaires technologiques
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full -mb-3"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <motion.div 
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex justify-center"
              whileHover={{ y: -5 }}
            >
              <img 
                src="/logos/CryptoAg.jpg" 
                alt="CRYPTO AG" 
                className="h-24 object-contain filter group-hover:brightness-110 transition-all"
              />
            </motion.div>
            
            <motion.div 
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex justify-center"
              whileHover={{ y: -5 }}
            >
              <img 
                src="/logos/ixcom.jpg" 
                alt="IXCOM" 
                className="h-24 object-contain filter group-hover:brightness-110 transition-all"
              />
            </motion.div>
            
            <motion.div 
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex justify-center"
              whileHover={{ y: -5 }}
            >
              <img 
                src="/logos/technopoint.jpg" 
                alt="tecjnopoint" 
                className="h-24 object-contain filter group-hover:brightness-110 transition-all"
              />
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default SystemesReseaux;