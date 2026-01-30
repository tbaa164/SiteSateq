import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PourquoiNousChoisir = () => {
  useEffect(() => {
    document.title = "Pourquoi nous choisir ? - SATEQ Digital Group";
  }, []);

  const avantages = [
    {
      titre: "EXPERTISE",
      description: "Une expertise certifiée en transformation digitale, infrastructures IT et plateformes critiques",
      couleur: "gray"
    },
    {
      titre: "EXIGENCE",
      description: "Un haut niveau d'exigence en matière de sécurité, de conformité et de confidentialité des données",
      couleur: "orange"
    },
    {
      titre: "PERFORMANCE",
      description: "Une performance indéfectible et une continuité opérationnelle",
      couleur: "gray"
    },
    {
      titre: "ENGAGEMENT",
      description: "Accompagnement de proximité et engagement fort auprès de nos clients",
      couleur: "orange"
    },
    {
      titre: "INNOVATION",
      description: "Innovation et adaptation technologique. Une approche intégrée de la conception à l'exploitation",
      couleur: "gray"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-green-500 py-16 md:py-20">
          <div 
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" 
            style={{ 
              backgroundSize: '20px 20px',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          ></div>
          
          <div className="relative container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Pourquoi nous choisir ?
              </h1>
              <div className="inline-block">
                <svg className="w-32 h-8" viewBox="0 0 120 20" fill="none">
                  <path d="M0 10 Q10 5, 20 10 T40 10 T60 10 T80 10 T100 10 T120 10" 
                    stroke="#f97316" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Impact avec image */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              
              {/* Texte Impact */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1">
                      <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
                      <div className="w-1 h-8 bg-orange-400 rounded-full"></div>
                      <div className="w-1 h-8 bg-orange-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-orange-500">Notre</span>
                    <br />
                    <span className="text-orange-500">impact</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    Parce que nous ne proposons pas <span className="font-semibold">uniquement</span> des solutions technologiques, nous <span className="font-semibold">accompagnons aussi</span> nos clients dans la durée, avec une <span className="font-semibold">approche globale</span>, <span className="font-semibold text-green-700">sécurisée</span> et <span className="font-semibold text-green-700">orientée vers le résultat</span>.
                  </p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/logos/proposdenous.png" 
                    alt="Équipe SATEQ Digital" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                </div>
                {/* Décoration */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-500/20 rounded-3xl -z-10"></div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section Avantages */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-green-50/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choisir SATEQ, c'est bénéficier de :
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-green-500"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="h-px w-12 bg-green-500"></div>
              </div>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {avantages.map((avantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${index === avantages.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                  >
                    <div className={`h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group ${
                      avantage.couleur === 'orange' 
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white' 
                        : 'bg-gradient-to-br from-gray-700 to-gray-800 text-white'
                    }`}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`h-1 w-12 rounded-full ${
                            avantage.couleur === 'orange' ? 'bg-white' : 'bg-orange-500'
                          }`}></div>
                        </div>
                        
                        <h3 className="text-2xl font-bold tracking-wide">
                          {avantage.titre}
                        </h3>
                        
                        <p className="text-base leading-relaxed opacity-95">
                          {avantage.description}
                        </p>
                      </div>

                      {/* Effet hover */}
                      <div className="mt-6 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-700 p-10 md:p-16 shadow-2xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" 
                    style={{ backgroundSize: '30px 30px' }}>
                  </div>
                </div>
                
                <div className="relative text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Prêt à transformer votre entreprise ?
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                    Rejoignez les organisations qui nous font confiance pour leur transformation digitale.
                  </p>
                  <div className="pt-4">
                    <a 
                      href="#contact" 
                      className="inline-block px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Contactez-nous
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default PourquoiNousChoisir;
