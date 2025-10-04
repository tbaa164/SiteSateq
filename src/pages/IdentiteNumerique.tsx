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
              src="/logos/Carte1.jpg" 
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
        {/* Cartes numérisées - Section compacte */}
        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Les systèmes de <span className="text-primary">CARTES</span> numérisées
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informations principales */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-2 bg-gradient-to-b from-primary to-blue-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-800">Types de cartes</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start px-3 py-2 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-800 font-medium">Carte d'identité - Permis de conduire - Carte grise</p>
                  </div>
                  <div className="flex items-start px-3 py-2 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-800 font-medium">Cartes privatives - Cartes bancaires - Badges multifonctions</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border-l-4 border-primary">
                    <p className="font-medium text-blue-800">
                      Avec ses partenaires, <span className="font-bold">SATEQ DIGITAL</span> peut fournir des cartes polycarbonate avec une puce intégrant l'identité civile et la biométrie du Titulaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image de carte */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center">
              <img 
                src="/logos/identité1.png" 
                alt="Exemple de carte d'identité académique" 
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-all mb-4"
              />
              <p className="text-center text-gray-600 text-sm mt-2">
                Exemple de carte d'identité avec informations personnelles sécurisées et QR code
              </p>
            </div>
          </div>
        </div>
        
        {/* Utilisations et applications */}
        <div className="max-w-7xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6">Applications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Carte 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="h-2 bg-gradient-to-r from-blue-700 to-blue-400"></div>
                <CardContent className="pt-6">
                  <h4 className="text-lg font-semibold mb-2 text-blue-700">Sécurité de Bâtiments</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                      <span>Vidéosurveillance, Sécurité Incendie</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                      <span>Contrôle d'accès électronique</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                      <span>Badges Employés et Visiteurs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Carte 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="h-2 bg-gradient-to-r from-green-700 to-green-400"></div>
                <CardContent className="pt-6">
                  <h4 className="text-lg font-semibold mb-2 text-green-700">Services ID Gouvernementaux</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                      <span>Cartes d'Identité Nationale et Passeports Biométriques</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                      <span>Permis de Conduire et Carte Grise (véhicules, motocycles)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                      <span>Carte étudiant, Carte retraité, Carte de santé</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Carte 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="h-2 bg-gradient-to-r from-amber-600 to-amber-400"></div>
                <CardContent className="pt-6">
                  <h4 className="text-lg font-semibold mb-2 text-amber-700">Services Financiers Digitaux</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                      <span>Authentification électronique (KYC)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                      <span>Cartes de Retrait/Paiement (bancaire, privatif QR-Code)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                      <span>Mobile Money (Transfert d'Argent, Paiement TPE, Paiement Online)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IdentiteNumerique;