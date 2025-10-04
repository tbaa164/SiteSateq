import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PlateformesMonetiques = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
                Monétique
              </h1>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 animate-fade-in delay-200">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-xl text-white font-medium">Paiement de services</p>
                </div>
                <div className="flex items-center space-x-4 animate-fade-in delay-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-xl text-white font-medium">Cartes bancaires & Terminaux</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in delay-500">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Solutions Innovantes</h3>
                    <p className="text-white/80">Plateformes de paiement sécurisées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-yellow-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/15 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="space-y-8">
                <p className="text-lg text-foreground leading-relaxed">
                  SATEQ DIGITAL s'est spécialisée dans la digitalisation et le développement de plateformes numériques.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Notre Card Management System (CMS) peut assurer le transfert d'argent, le paiement électronique et les services de livraison géolocalisée qui se sont beaucoup développés ces dernières années, surtout avec la situation post-Covid. Une application SPAY pilote toutes les transactions monétiques.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="animate-fade-in delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-2xl">
                  <div className="aspect-video bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-center text-muted-foreground">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Système de Gestion</h3>
                      <p className="text-sm">Plateforme complète de paiement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-fade-in">
              Nos Plateformes en Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
              Des interfaces intuitives pour tous vos besoins monétiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="animate-fade-in group" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z"/>
                          </svg>
                        </div>
                        <p className="text-lg font-bold text-foreground">Image {index}</p>
                        <p className="text-sm text-muted-foreground">Interface Mobile</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-foreground mb-2">Plateforme {index}</h3>
                      <p className="text-sm text-muted-foreground">Solution de paiement intégrée</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlateformesMonetiques;