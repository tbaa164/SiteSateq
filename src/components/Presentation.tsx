import { CheckCircle } from "lucide-react";

export default function Presentation() {
  const benefits = [
    "Solutions technologiques adaptées au marché africain",
    "Accompagnement personnalisé de A à Z",
    "Équipe d'experts certifiés et expérimentés",
    "Support technique disponible 24h/7j"
  ];

  return (
    <section id="presentation" className="section-container bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="section-title">
              Votre Partenaire Digital 
              <span className="text-accent"> de Confiance</span>
            </h2>
            
            <p className="section-subtitle">
              SATEQ Digital Group permet à ses clients de numériser leurs procédés en optimisant les 
              infrastructures réseaux et systèmes de communication pour une efficacité accrue.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary w-6 h-6 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="#produits" className="btn-primary">
                Découvrir nos services
              </a>
              <a href="#contact" className="btn-outline">
                Nous contacter
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto">
                  S
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Innovation & Excellence
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-muted-foreground">Années d'expérience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">500+</div>
                    <div className="text-muted-foreground">Clients satisfaits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}