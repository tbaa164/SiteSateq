import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Produits = () => {
  useEffect(() => {
    document.title = "Produits - SATEQ Digital Group";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-primary">Produits</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de solutions technologiques innovantes
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Product Card 1 */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Solutions Matérielles</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Équipements de pointe pour vos infrastructures technologiques
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Serveurs et systèmes
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Équipements réseau
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Composants spécialisés
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Solutions Logicielles</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Applications et systèmes sur mesure pour optimiser vos processus
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Développement sur mesure
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Intégration système
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Maintenance et support
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Solutions de Sécurité</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Protection avancée pour vos données et infrastructures
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Cybersécurité
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Contrôle d'accès
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Surveillance
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Solutions Cloud</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Infrastructure cloud flexible et évolutive
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Hébergement cloud
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Sauvegarde automatisée
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Haute disponibilité
              </div>
            </div>
          </div>

          {/* Product Card 5 */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Solutions Énergétiques</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Systèmes d'alimentation et d'efficacité énergétique
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Onduleurs et UPS
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Énergie solaire
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Optimisation énergétique
              </div>
            </div>
          </div>

          {/* Product Card 6 */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Support & Services</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Accompagnement expert et support technique dédié
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Support 24/7
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Formation utilisateurs
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Maintenance préventive
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-3xl font-bold text-white mb-6">
            Besoin d'une solution personnalisée ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour analyser vos besoins et vous proposer la solution adaptée à votre entreprise.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">
            Contactez nos experts
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Produits;