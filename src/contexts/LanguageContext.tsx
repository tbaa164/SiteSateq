import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'Présentation',
    'nav.director': 'Mot du Directeur',
    'nav.references': 'Références',
    'nav.solutions': 'Solutions',
    'nav.digitalization': 'Digitalisation',
    'nav.services': 'Numérisation de services',
    'nav.platforms': 'Plateformes monétiques',
    'nav.products': 'Produits',
    'nav.systems': 'Systèmes et réseaux',
    'nav.cards': 'Cartes',
    'nav.training': 'Formation',
    'nav.news': 'Actualités',
    'nav.communication': 'Communication',

    // Hero
    'hero.title': 'Technologies Digitales',
    'hero.subtitle': 'pour l\'Afrique',
    'hero.description': 'SATEQ DIGITAL accompagne votre transformation numérique avec des solutions innovantes adaptées au continent africain.',
    'hero.cta': 'Découvrir nos solutions',

    // Stats
    'stats.projects': 'Projets réalisés',
    'stats.partners': 'Partenaires de confiance',
    'stats.experience': 'Années d\'expérience',
    'stats.satisfaction': 'Satisfaction client',

    // News
    'news.title': 'Actualités & Innovations',
    'news.subtitle': 'Restez informé de nos dernières réalisations et innovations technologiques',

    // Partners
    'partners.title': 'Nos Partenaires',
    'partners.subtitle': 'Des collaborations stratégiques pour votre réussite',

    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à transformer votre entreprise ?',
    'contact.description': 'Notre équipe d\'experts est à votre disposition pour vous accompagner dans votre projet de transformation digitale.',
    'contact.cta': 'Nous contacter',

    // Footer
    'footer.company': 'SATEQ DIGITAL',
    'footer.description': 'Votre partenaire pour la transformation digitale en Afrique.',
    'footer.quickLinks': 'Liens rapides',
    'footer.services': 'Nos services',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',

    // Formation
    'formation.title': 'Formation',
    'formation.subtitle': 'Développez vos compétences digitales',
    'formation.description': 'Nos programmes de formation vous permettent de maîtriser les dernières technologies.',

    // Actualités
    'news.page.title': 'Actualités',
    'news.page.subtitle': 'Découvrez nos dernières nouvelles et innovations',
    'news.card1.title': 'Innovation Technologique',
    'news.card1.description': 'Découvrez nos dernières innovations en matière de solutions digitales pour l\'Afrique.',
    'news.card2.title': 'Partenariats Stratégiques',
    'news.card2.description': 'Nos nouveaux partenariats pour renforcer notre présence sur le continent.',
    'news.card3.title': 'Projets Réalisés',
    'news.card3.description': 'Retour sur nos projets récents et leurs impacts positifs.',
    'news.card4.title': 'Formation & Expertise',
    'news.card4.description': 'Nos programmes de formation et développement des compétences.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.director': 'Director\'s Message',
    'nav.references': 'References',
    'nav.solutions': 'Solutions',
    'nav.digitalization': 'Digitalization',
    'nav.services': 'Service Digitization',
    'nav.platforms': 'Payment Platforms',
    'nav.products': 'Products',
    'nav.systems': 'Systems & Networks',
    'nav.cards': 'Cards',
    'nav.training': 'Training',
    'nav.news': 'News',
    'nav.communication': 'Communication',

    // Hero
    'hero.title': 'Digital Technologies',
    'hero.subtitle': 'for Africa',
    'hero.description': 'SATEQ DIGITAL supports your digital transformation with innovative solutions adapted to the African continent.',
    'hero.cta': 'Discover our solutions',

    // Stats
    'stats.projects': 'Completed projects',
    'stats.partners': 'Trusted partners',
    'stats.experience': 'Years of experience',
    'stats.satisfaction': 'Customer satisfaction',

    // News
    'news.title': 'News & Innovations',
    'news.subtitle': 'Stay informed about our latest achievements and technological innovations',

    // Partners
    'partners.title': 'Our Partners',
    'partners.subtitle': 'Strategic collaborations for your success',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to transform your business?',
    'contact.description': 'Our team of experts is at your disposal to support you in your digital transformation project.',
    'contact.cta': 'Contact us',

    // Footer
    'footer.company': 'SATEQ DIGITAL',
    'footer.description': 'Your partner for digital transformation in Africa.',
    'footer.quickLinks': 'Quick links',
    'footer.services': 'Our services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    // Formation
    'formation.title': 'Training',
    'formation.subtitle': 'Develop your digital skills',
    'formation.description': 'Our training programs allow you to master the latest technologies.',

    // Actualités
    'news.page.title': 'News',
    'news.page.subtitle': 'Discover our latest news and innovations',
    'news.card1.title': 'Technological Innovation',
    'news.card1.description': 'Discover our latest innovations in digital solutions for Africa.',
    'news.card2.title': 'Strategic Partnerships',
    'news.card2.description': 'Our new partnerships to strengthen our presence on the continent.',
    'news.card3.title': 'Completed Projects',
    'news.card3.description': 'Review of our recent projects and their positive impacts.',
    'news.card4.title': 'Training & Expertise',
    'news.card4.description': 'Our training programs and skill development.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};