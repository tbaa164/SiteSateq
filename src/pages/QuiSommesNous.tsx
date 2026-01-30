import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const QuiSommesNous = () => {
  useEffect(() => {
    document.title = "Qui sommes-nous ? - SATEQ Digital Group";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-green-500">
          {/* Fond avec motif digital */}
          <div 
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" 
            style={{ 
              backgroundSize: '20px 20px',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          {/* Éléments décoratifs animés */}
          <div className="absolute left-1/4 top-1/3 w-12 h-12 bg-orange-400/70 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute right-1/4 bottom-1/3 w-16 h-16 bg-green-400/70 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          
          {/* Contenu Hero */}
          <div className="relative min-h-[40vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 py-12">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                    Qui sommes-nous ?
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Découvrez notre histoire, notre expertise et notre engagement dans la transformation numérique
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Vague décorative */}
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

        {/* Section 1 - SATEQ DIGITAL GROUP */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/logos/somme1.png" 
                    alt="SATEQ Digital Group - Transformation numérique" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Contenu */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="space-y-6">
                  <div>
                    <div className="inline-block mb-3">
                      <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">Notre Histoire</span>
                      <div className="h-1 w-16 bg-orange-500 rounded-full mt-1"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      La Société Africaine de Technologie et d'Équipements
                    </h2>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      (SATEQ DIGITAL GROUP)
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-base md:text-lg">
                      Créée en <span className="font-semibold text-green-700">2009</span>, SATEQ accompagne la transformation numérique des administrations publiques et du secteur privé.
                    </p>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <p className="text-base md:text-lg font-medium text-gray-800">
                        Partenaire technologique de confiance, nous offrons des solutions de sécurisation de données et des systèmes qui renforcent durablement leur performance.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2 - SATEQ DIGITAL */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Contenu */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1"
              >
                <div className="space-y-6">
                  <div>
                    <div className="inline-block mb-3">
                      <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">Notre Expertise</span>
                      <div className="h-1 w-16 bg-orange-500 rounded-full mt-1"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      SATEQ DIGITAL
                    </h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div className="bg-white border-l-4 border-orange-500 p-4 rounded-r-lg shadow-sm">
                      <p className="text-base md:text-lg font-medium">
                        Nous intégrons des <span className="font-semibold text-green-700">dispositifs de sécurité électronique avancée</span> qui garantissent le fontionnement des systèmes critiques dans des environnements transactionnels certifiés <span className="font-semibold">Crypto & PCI DSS</span>.
                      </p>
                    </div>
                    
                    <p className="text-base md:text-lg">
                      En plus de développer des <span className="font-semibold text-green-700">outils d'aide à la décision</span>, nous assistons nos clients à mettre en œuvre une <span className="font-semibold text-orange-600">communication visuelle cohérente</span> qui renforce leur image de marque.
                    </p>
                  </div>

                  {/* Points clés */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="font-semibold text-green-700">Sécurité</span>
                      </div>
                      <p className="text-sm text-gray-600">Crypto & PCI DSS</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span className="font-semibold text-orange-600">Innovation</span>
                      </div>
                      <p className="text-sm text-gray-600">Outils décisionnels</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/logos/somme2.png" 
                    alt="SATEQ Digital - Sécurité électronique" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Stats/Trust */}
        <section className="py-12 bg-gradient-to-r from-green-700 to-green-600">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">2009</div>
                <div className="text-sm md:text-base text-white/90">Année de création</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-sm md:text-base text-white/90">Années d'expérience</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm md:text-base text-white/90">Clients satisfaits</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm md:text-base text-white/90">Support technique</div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuiSommesNous;
