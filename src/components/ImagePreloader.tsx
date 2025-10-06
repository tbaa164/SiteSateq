import { useEffect } from 'react';

// Liste des images à précharger immédiatement
const CRITICAL_IMAGES = [
  // Images d'arrière-plan des Hero sections de chaque page
  '/src/assets/tech-background.jpg',
  '/src/assets/tech-solutions.jpg',
  '/src/assets/director-hero.png',
  '/src/assets/team-work.jpg',
  // Logos et images importantes
  '/public/logos/MrWane.jpg',
  '/public/logos/LOGO-SATEQ-DIGITAL.jpg',
  '/public/logos/logosite.png',
  // Images de la page d'accueil
  '/public/logos/systemereseauxHeaderNew.jpg',
  '/public/logos/femmeCarte.png',
  '/public/logos/barriere.jpg',
  '/public/logos/ingenierie.jpg',
  // Images des sections monétiques
  '/public/logos/monetique1.png',
  '/public/logos/monetique2.jpg',
  '/public/logos/monetique3.png',
  // Images terminaux et cartes
  '/public/logos/terminaux1.png',
  '/public/logos/terminaux2.jpg',
  '/public/logos/terminaux3.jpg',
  '/public/logos/quatrecartes.jpg',
  // Images formation
  '/public/logos/formation1.png',
  '/public/logos/formation2.jpg',
  '/public/logos/formation3.png',
  // Images digitalisation
  '/public/logos/digitalisation1.png',
  '/public/logos/digi.jpg',
  // Images communications
  '/public/logos/commu.png',
  '/public/logos/communication2.png',
  // Images actualités
  '/public/logos/actu1.jpg',
  '/public/logos/actu2.jpg',
  '/public/logos/actu3.png',
  '/public/logos/actu4.png'
];

/**
 * Composant qui précharge toutes les images critiques dès le chargement de l'application
 */
export default function ImagePreloader() {
  useEffect(() => {
    // Fonction pour précharger une image
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Précharger immédiatement les images les plus critiques
    CRITICAL_IMAGES.forEach(src => {
      preloadImage(src);
    });

    return () => {
      // Nettoyage si nécessaire
    };
  }, []);

  // Ce composant ne rend rien visuellement
  return null;
}