const services = [
  {
    title: "Informatique & Réseaux",
    items: ["Système Datacenter", "Infrastructures Télécoms", "Sécurité électronique"],
    color: "text-primary"
  },
  {
    title: "Identité Numérique & Cartes",
    items: ["Carte d'Identification", "Carte Privative", "Carte Bancaire"],
    color: "text-primary"
  },
  {
    title: "Plateformes & Terminaux",
    items: ["Monétique", "Terminal Paiement Electronique", "Wallet"],
    color: "text-primary"
  },
  {
    title: "Communication & Formation",
    items: ["Web Marketing", "Supports de communication", "SATEQ Digital Academy"],
    color: "text-primary"
  }
];

export default function Products() {
  return (
    <section id="produits" className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-6">
              {/* Title with underline */}
              <div className="relative pb-4">
                <h3 className="text-lg font-bold text-accent mb-4">
                  {service.title}
                </h3>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>
              </div>
              
              {/* Service Items */}
              <div className="space-y-4">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className={`${service.color} font-medium text-sm`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Learn More Button */}
              <button className="text-accent font-medium text-sm border-b border-accent hover:text-accent/80 transition-colors">
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}