import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const IdentiteNumerique = () => {
  useEffect(() => {
    document.title = "Identité Numérique - SATEQ Digital Group";
  }, []);
  
  return (
  <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section avec animation */}
      <section className="relative h-[40vh] md:h-[45vh] overflow-hidden bg-gradient-to-r from-emerald-800 via-green-700 to-orange-600">
        {/* Fond avec motif digital */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        {/* Éléments décoratifs animés */}
        <div className="absolute left-1/4 top-1/3 w-12 h-12 bg-orange-400 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute right-1/4 bottom-1/3 w-20 h-20 bg-emerald-500 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute right-[20%] top-1/4 w-16 h-16 bg-white/60 rounded-full blur-lg animate-float" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Éléments en orbite */}
        <div className="absolute left-[20%] top-[40%] hidden lg:block">
          <div className="relative">
            <div className="w-3 h-3 bg-white rounded-full animate-orbit-fast" style={{ animationDelay: '0s' }}></div>
          </div>
        </div>
        <div className="absolute right-[30%] top-[30%] hidden lg:block">
          <div className="relative">
            <div className="w-2 h-2 bg-orange-300 rounded-full animate-orbit-fast" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        {/* Animation de carte d'identité */}
        <div className="absolute right-0 sm:right-[5%] top-1/2 -translate-y-1/2 w-1/4 hidden md:block">
          <div className="relative animate-float group">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 via-orange-400/30 to-white/20 rounded-xl blur-xl transform scale-110 animate-pulse"></div>
            <img 
              src="/logos/digital.png" 
              alt="Carte d'identité numérique" 
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />
            {/* Effet de reflet animé */}
            <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 rounded-lg opacity-0 group-hover:opacity-100 transform translate-x-full -translate-y-full animate-shine"></div>
          </div>
        </div>
        
        {/* Contenu principal du hero */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 text-reveal">
              <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent animate-gradient-text">
                Identité Numérique
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 max-w-xl text-reveal-delay-1">
              Solutions avancées pour la sécurisation et la gestion des identités
            </p>
          </div>
        </div>
      </section>
      
      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction simple */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Nous développons des plateformes d'identité intégrant des applications diverses.
          </p>
        </div>
        
        {/* Applications */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Applications</h2>
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Carte 1 */}
              <div className="border-l-4 border-gray-700 bg-gray-50 p-6 hover:shadow-md transition-all">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Sécurité de Bâtiments</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">—</span>
                    <span>Contrôle d'accès électronique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">—</span>
                    <span>Badges Employés et Visiteurs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">—</span>
                    <span>Vidéosurveillance, Sécurité Incendie</span>
                  </li>
                </ul>
              </div>
              
              {/* Carte 2 */}
              <div className="border-l-4 border-gray-700 bg-gray-50 p-6 hover:shadow-md transition-all">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Services ID Gouvernementaux</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">—</span>
                    <span>Carte d'Identité biométrique, Passeport</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">—</span>
                    <span>Permis de Conduire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">—</span>
                    <span>Carte Grise véhicule et motocycle</span>
                  </li>
                </ul>
              </div>
              
              {/* Carte 3 */}
              <div className="border-l-4 border-gray-700 bg-gray-50 p-6 hover:shadow-md transition-all">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Services Financiers Digitaux</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">—</span>
                    <span>Authentification électronique (KYC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">—</span>
                    <span>Cartes de Retrait/Paiement (bancaire, privatif QR-Code)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">—</span>
                    <span>Mobile Money (Transfert d'Argent, Paiement TPE, Paiement Online)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IdentiteNumerique;