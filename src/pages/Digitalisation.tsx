import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Digitalisation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Digitalisation
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in delay-200">
            Transformez votre entreprise avec nos solutions digitales innovantes
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/15 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nos Solutions Digitales
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos services pour accélérer votre transformation numérique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/numerisation-services">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary to-primary/80 text-white border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Numérisation de services</h3>
                  <p className="text-white/90">
                    Solutions complètes pour digitaliser vos processus métier et améliorer l'efficacité opérationnelle
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/plateformes-monetiques">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent to-accent/80 text-white border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Plateformes monétiques</h3>
                  <p className="text-white/90">
                    Solutions de paiement sécurisées et innovantes pour moderniser vos transactions financières
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous pour découvrir comment nos solutions peuvent accélérer votre transformation digitale
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 hover:scale-105 transform">
            Nous contacter
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Digitalisation;