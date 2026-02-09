import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Smartphone, MapPin, Send, ArrowRight } from "lucide-react";
const quickLinks = [{
  name: "Digitalisation",
  href: "/numerisation-services"
}, {
  name: "Systèmes et Réseaux",
  href: "/systemes-reseaux"
}, {
  name: "Cartes",
  href: "/cartes"
}, {
  name: "Terminaux",
  href: "/terminaux"
}, {
  name: "Communication",
  href: "/communication"
}, {
  name: "Formation",
  href: "/formation"
}, {
  name: "Actualités",
  href: "/actualites"
}];
const services = [
  {
    name: "Infrastructures & Réseaux",
    href: "/systemes-reseaux"
  },
  {
    name: "Paiement Électronique",
    href: "/monetique"
  },
  {
    name: "Identité Numérique",
    href: "/identite-numerique"
  },
  {
    name: "Communication Entreprise",
    href: "/communication"
  },
  {
    name: "Formation & Support",
    href: "/formation"
  },
  {
    name: "Numérisation de Services",
    href: "/numerisation-services"
  }
];
const socialLinks = [{
  icon: Facebook,
  href: "#",
  name: "Facebook"
}, {
  icon: Twitter,
  href: "#",
  name: "Twitter"
}, {
  icon: Linkedin,
  href: "#",
  name: "LinkedIn"
}, {
  icon: Instagram,
  href: "#",
  name: "Instagram"
}];
export default function Footer() {
  return <footer id="contact" className="bg-[#1E1E1E] text-white">
      {/* Main Footer */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="mb-4 inline-block bg-white rounded-md px-8 py-3 shadow-sm border border-white/40">
                <img 
                  src="/logos/LOGO-SATEQ-DIGITAL.jpg" 
                  alt="SATEQ Digital Group" 
                  className="h-20 w-auto object-contain mx-auto"
                />
              </div>
              
              <p className="text-gray-300 leading-relaxed text-base">
                SATEQ Digital Group est une entreprise spécialisée en ingénierie et transformation digitale.
                Notre mission est d'accompagner les organisations africaines dans leurs projets de modernisation.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                <a href="#" className="group w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-primary/20 transition-all duration-300">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="group w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-primary/20 transition-all duration-300">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="group w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-primary/20 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="group w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-primary/20 transition-all duration-300">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-8 relative">
                Navigation
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {quickLinks.map(link => <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-8 relative">
                Nos Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {services.map(service => <li key={service.name}>
                    <a href={service.href} className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {service.name}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Newsletter & Contact */}
            <div id="contactez-nous" className="space-y-8">
              <h4 className="text-xl font-bold text-white mb-8 relative">
                Contactez-nous
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
              </h4>
              
              {/* Newsletter */}
              

              {/* Contact Info */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <a 
                      href="https://maps.app.goo.gl/AGEE4HrKuqP9Cutn7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group"
                    >
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-primary transition-colors duration-200">
                        Keur Gorgui, Immeuble Cardio24,<br />
                        Dakar, Sénégal
                      </p>
                      <span className="text-xs text-primary mt-1 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 flex items-center">
                        Voir sur Google Maps 
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-gray-300 text-sm">( +221 ) 33 864 57 24</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Smartphone className="w-4 h-4 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-gray-300 text-sm">( +221 ) 77 290 59 85</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  </div>
                  <a href="mailto:contact@sateqdigital.com" className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm">
                    contact@sateqdigital.com
                  </a>
                </div>

                {/* Contact Button */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/5 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-gray-400 text-sm">
              © 2025 SATEQ Digital Group. Tous droits réservés.
            </div>            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm hover:underline">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm hover:underline">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm hover:underline">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
}