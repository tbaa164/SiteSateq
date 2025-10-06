import React, { useEffect, useRef } from 'react';

// Liste des images Hero à précharger et rendre en arrière-plan
const HERO_IMAGES = [
  '/logos/barriere.jpg',
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
  // Images de la section Actualités
  '/logos/verifone1.png',
  '/logos/signatureaustria.png',
  '/logos/conventionintouch.png',
  '/logos/S2m.png',
  // Images des terminaux TPE
  '/logos/TPEF20FP.png',
  '/logos/TPEVerifone.png',
  '/logos/TPEMPOS.png'
];

/**
 * Ce composant force le rendu des images Hero en arrière-plan
 * en les ajoutant au DOM de manière invisible pour s'assurer qu'elles sont 
 * complètement chargées et mises en cache par le navigateur
 */
const HeroImagesRenderer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force le rendu de toutes les images Hero dans un conteneur caché
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.style.width = '1px';
      img.style.height = '1px';
      img.style.opacity = '0.01'; // Presque invisible mais toujours rendu
      img.style.position = 'absolute';
      img.style.pointerEvents = 'none';
      
      if (containerRef.current) {
        containerRef.current.appendChild(img);
      }
    });

    return () => {
      // Nettoyage des images lors du démontage du composant
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        left: '-9999px',
        top: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        opacity: 0.01,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
};

export default HeroImagesRenderer;