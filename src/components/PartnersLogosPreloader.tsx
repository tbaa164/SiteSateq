import { useEffect } from 'react';

// Liste des logos de partenaires à précharger
const PARTNER_LOGOS = [
  'Verifone.jpg',
  'ixcom.jpg',
  'entrust.jpg',
  'schneider.jpg',
  'CryptoAg.jpg',
  'SeeTeec.jpg',
  'sewacardindustrie.jpg',
  'technopoint.jpg',
  'TNexa.jpg',
  'S2m.png',
  'signatureaustria.png',
  'conventionintouch.png',
  // Ajouter d'autres logos qui pourraient apparaître dans différents carrousels
  'agricole.png',
  'digi.jpg',
  'ingenierie.jpg',
  'Intouch.jpg'
];

/**
 * Composant qui précharge tous les logos des partenaires dès le chargement initial
 * pour éliminer la latence lors de l'affichage du carrousel
 */
const PartnersLogosPreloader = () => {
  useEffect(() => {
    // Préchargement très agressif des logos
    const preloadAllLogos = async () => {
      // Création d'un conteneur hors écran pour forcer le rendu complet
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.width = '1px';
      container.style.height = '1px';
      container.style.opacity = '0.01';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '-1';
      container.style.overflow = 'hidden';
      document.body.appendChild(container);

      // Précharger chaque logo avec une promesse
      const preloadPromises = PARTNER_LOGOS.map(logoName => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            // Force le décodage et le rendu complet de l'image
            const canvas = document.createElement('canvas');
            canvas.width = 150;
            canvas.height = 100;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(img, 0, 0, 150, 100);
            }
            
            // Ajoute l'image au DOM pour garantir qu'elle est dans le cache du navigateur
            img.style.width = '100px';
            img.style.height = 'auto';
            img.style.position = 'absolute';
            img.style.opacity = '0.01';
            img.className = 'partner-logo'; // Ajout de la classe CSS optimisée
            container.appendChild(img);
            
            resolve(logoName);
          };
          
          img.onerror = () => {
            console.log(`Échec du préchargement: ${logoName}`);
            reject(logoName);
          };
          
          // Charge l'image avec le chemin exact utilisé dans l'application
          img.src = `/logos/${logoName}`;
        });
      });

      // Attendre que toutes les images soient préchargées
      try {
        await Promise.allSettled(preloadPromises);
        console.log('Tous les logos partenaires préchargés avec succès');
      } catch (err) {
        console.error('Erreur lors du préchargement des logos:', err);
      }
      
      // Garder les images en cache plus longtemps pour les sections qui peuvent être visitées plus tard
      setTimeout(() => {
        if (document.body.contains(container)) {
          document.body.removeChild(container);
        }
      }, 15000); // Temps augmenté pour s'assurer que les images sont correctement mises en cache
    };

    // Exécute le préchargement dès que possible
    preloadAllLogos();
  }, []);

  // Ce composant ne rend rien visuellement
  return null;
};

export default PartnersLogosPreloader;