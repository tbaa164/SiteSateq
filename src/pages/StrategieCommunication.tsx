import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const StrategieCommunication = () => {
  useEffect(() => {
    document.title = "Stratégie de communication - SATEQ Digital Group";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-orange-500">
          <div 
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" 
            style={{ 
              backgroundSize: '20px 20px',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          <div className="relative min-h-[40vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 py-12">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                    Stratégie de communication
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Développez votre présence et votre impact avec une stratégie sur mesure
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
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

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  En cours de réalisation...
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cette page présentera prochainement nos services de conseil en stratégie de communication, 
                  notre accompagnement dans la définition de votre positionnement et le développement 
                  de votre présence digitale et traditionnelle.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StrategieCommunication;
