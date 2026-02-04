import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Maintenance() {
  const [selectedImage, setSelectedImage] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Services de <span className="text-red-500">maintenance</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  SATEQ offre des <strong className="text-gray-900">services de dépannage et d'entretien</strong> de matériels chez le client, des services réparation ateliers et la maintenance programmée pour les systèmes logiciels et les équipements (serveurs, ordinateurs, imprimantes, copieurs, armoires réseaux, télécoms, climatisation).
                </p>

                <div className="border-l-4 border-green-600 pl-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Le Contrat de maintenance peut se faire sous la forme de :
                  </h2>
                </div>

                <div className="space-y-4">
                  <motion.div 
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-green-600"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Forfait sur Devis, incluant Pièces & Main d'oeuvre
                    </p>
                  </motion.div>

                  <motion.div 
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Contrat de prestation 12 mois <span className="mx-2 text-gray-400">→</span> Code « Priority Access »
                    </p>
                  </motion.div>

                  <motion.div 
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-700"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                    <div className="text-gray-700">
                      <p className="mb-2">
                        Toutes les deux formules incluent la Garantie annuelle et le Support Hotline 8H/24 – 5J/7
                      </p>
                      <p className="text-green-700 font-semibold">
                        <span className="mx-2 text-gray-400">→</span> Call Center H8J5
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Main Image + Thumbnails */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Main Display Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <motion.img
                  key={selectedImage}
                  src={`/logos/maintenance${selectedImage}.jpg`}
                  alt={`Service de maintenance ${selectedImage}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm font-medium">
                    Services de maintenance professionnels
                  </p>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((num) => (
                  <motion.button
                    key={num}
                    onClick={() => setSelectedImage(num)}
                    className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 aspect-[4/3] ${
                      selectedImage === num 
                        ? 'ring-4 ring-green-600 scale-105' 
                        : 'ring-2 ring-gray-200 hover:ring-green-400'
                    }`}
                    whileHover={{ scale: selectedImage === num ? 1.05 : 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={`/logos/maintenance${num}.jpg`}
                      alt={`Miniature ${num}`}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        selectedImage === num ? 'brightness-100' : 'brightness-75 hover:brightness-90'
                      }`}
                    />
                    {selectedImage === num && (
                      <div className="absolute inset-0 border-2 border-green-600 pointer-events-none" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-green-50 to-orange-50 rounded-xl p-8 border border-green-100"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Besoin d'un contrat de maintenance ?
                </h3>
                <p className="text-gray-600">
                  Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins
                </p>
              </div>
              <a 
                href="#contact"
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 whitespace-nowrap"
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
