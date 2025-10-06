import React, { useEffect } from 'react';

/**
 * Composant spécifique pour précharger les images des terminaux TPE
 * Assure un affichage sans latence des images TPE sur la page des terminaux
 */
const TPEImagesPreloader = () => {
  useEffect(() => {
    // Liste des chemins d'images des TPE à précharger
    const tpeImages = [
      '/logos/TPEF20FP.png',     // TPE biométrique
      '/logos/TPEVerifone.png',  // TPE bancaire certifié
      '/logos/TPEMPOS.png',      // Mini TPE mobile
    ];
    
    // Préchargement agressif avec mise en cache forcée
    const preloadTpeImages = () => {
      // Crée un conteneur hors écran
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '-9999px';
      container.style.width = '1px';
      container.style.height = '1px';
      container.style.overflow = 'hidden';
      document.body.appendChild(container);
      
      // Précharge et force le rendu de chaque image
      tpeImages.forEach(imagePath => {
        const img = new Image();
        img.src = imagePath;
        
        // Force le navigateur à télécharger et décoder complètement l'image
        img.style.width = '1px';
        img.style.height = '1px';
        container.appendChild(img);
        
        // Force le navigateur à traiter l'image (astuce pour assurer le décodage)
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 1;
          canvas.height = 1;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, 1, 1);
            // Une fois que l'image est décodée dans le canvas, elle est complètement mise en cache
          }
        };
      });
      
      // Nettoyage après quelques secondes
      setTimeout(() => {
        if (document.body.contains(container)) {
          document.body.removeChild(container);
        }
      }, 5000);
    };
    
    // Exécute le préchargement immédiatement
    preloadTpeImages();
    
    // Nettoyage si le composant est démonté
    return () => {
      const hiddenContainer = document.querySelector('div[style*="-9999px"]');
      if (hiddenContainer && document.body.contains(hiddenContainer)) {
        document.body.removeChild(hiddenContainer);
      }
    };
  }, []);
  
  return null; // Ce composant ne rend rien visuellement
};

export default TPEImagesPreloader;