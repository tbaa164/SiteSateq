import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Compass, Rocket } from "lucide-react";

const VisionMissionAmbition = () => {
  useEffect(() => {
    document.title = "Vision, Mission, Ambition - SATEQ Digital Group";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section avec image de fond */}
        <section className="relative overflow-hidden h-[50vh] md:h-[60vh]">
          <div className="absolute inset-0">
            <img 
              src="/logos/vision.png" 
              alt="Vision - SATEQ Digital" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/85 via-green-800/75 to-black/70"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                  Vision - Mission - Ambition
                </h1>
                <p className="text-xl md:text-2xl text-green-100 font-light italic">
                  We know, we want, we do.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section principale avec les 3 blocs */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          {/* Élément décoratif en arrière-plan */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="space-y-20 md:space-y-32">
              
              {/* VISION */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="sticky top-24">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg mb-4">
                        <Target className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Notre <span className="text-green-600">VISION</span>
                      </h2>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="bg-gradient-to-br from-green-50 to-white border-l-8 border-green-500 p-8 md:p-10 rounded-r-3xl shadow-xl">
                      <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                        Faire du <span className="font-semibold text-green-700">digital</span> un moteur de <span className="font-semibold text-green-700">croissance</span> pour le développement <span className="font-semibold">économique et social</span> en Afrique.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* MISSION */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row-reverse md:items-start gap-8">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="sticky top-24 md:text-right">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg mb-4">
                        <Compass className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Notre <span className="text-orange-600">MISSION</span>
                      </h2>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="bg-gradient-to-br from-orange-50 to-white border-r-8 border-orange-500 p-8 md:p-10 rounded-l-3xl shadow-xl">
                      <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                        Accompagner nos partenaires dans la <span className="font-semibold text-orange-700">numérisation</span> et l'<span className="font-semibold text-orange-700">optimisation</span> de leurs processus, à travers des <span className="font-semibold">solutions intégrées</span> en informatique, réseaux et sécurité électronique, des plateformes et outils de communication unifiée, adaptés aux <span className="font-semibold">enjeux stratégiques et opérationnels</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AMBITION */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="sticky top-24">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-green-700 shadow-lg mb-4">
                        <Rocket className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Notre <span className="text-green-700">AMBITION</span>
                      </h2>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="bg-gradient-to-br from-green-50 to-white border-l-8 border-green-600 p-8 md:p-10 rounded-r-3xl shadow-xl">
                      <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                        Devenir un <span className="font-semibold text-green-700">leader panafricain</span> dans l'intégration de <span className="font-semibold text-green-700">solutions innovantes et souveraines</span>, capables d'accompagner la performance des <span className="font-semibold">institutions étatiques</span> et la croissance des <span className="font-semibold">entreprises</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section Citation finale */}
        <section className="py-16 bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" 
              style={{ backgroundSize: '30px 30px' }}>
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-16 bg-green-400"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="h-px w-16 bg-green-400"></div>
                </div>
                
                <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-wide">
                  We know, we want, we do.
                </blockquote>
                
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="h-px w-16 bg-green-400"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="h-px w-16 bg-green-400"></div>
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

export default VisionMissionAmbition;
