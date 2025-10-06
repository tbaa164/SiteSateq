import { useEffect } from 'react';

// Liste des images à précharger immédiatement - chemins exacts utilisés dans l'application
const CRITICAL_IMAGES = [
  // Images des Hero sections (chemins exacts comme utilisés dans les composants)
  '/logos/barriere.jpg',
  '/logos/MrWane.jpg',
  '/logos/LOGO-SATEQ-DIGITAL.jpg',
  '/logos/systemereseauxHeaderNew.jpg',
  '/logos/terminaux1.png',
  '/logos/digitalisation1.png',
  '/logos/monetique1.png',
  '/logos/formation1.png',
  '/logos/formation3.png',
  '/logos/commu.png',
  '/logos/quatrecartes.jpg',
  '/logos/Carte1.jpg',
  '/logos/identité1.png',
  
  // Images secondaires importantes
  '/logos/ingenierie.jpg',
  '/logos/monetique2.jpg',
  '/logos/monetique3.png',
  '/logos/terminaux2.jpg',
  '/logos/formation2.jpg',
  '/logos/digi.jpg',
  '/logos/communication2.png',
  
  // Images de la section Actualités (TPE et Signatures)
  '/logos/verifone1.png',
  '/logos/signatureaustria.png',
  '/logos/conventionintouch.png',
  '/logos/S2m.png',
  
  // Images des terminaux TPE
  '/logos/TPEF20FP.png',
  '/logos/TPEVerifone.png',
  '/logos/TPEMPOS.png',
  
  // Images additionnelles
  '/logos/logosite.png',
  '/logos/CryptoAg.jpg',
  '/logos/ixcom.jpg',
  '/logos/technopoint.jpg',
  '/logos/formation4.jpg'
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