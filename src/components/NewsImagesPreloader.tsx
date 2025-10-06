import React, { useEffect } from 'react';

/**
 * Composant dédié au préchargement des images des actualités
 * Cela permet un affichage sans latence des images dans la section Actualités
 */
const NewsImagesPreloader = () => {
  useEffect(() => {
    // Liste des images à précharger pour les actualités
    const newsImages = [
      '/logos/verifone1.png',       // TPE Verifone
      '/logos/signatureaustria.png', // Signature AUTRIACARD-SATEQ
      '/logos/conventionintouch.png', // Signature INTOUCH-Besticard
      '/logos/S2m.png',             // Signature S2M-SATEQ
    ];
    
    // Force l'affichage des images avec une taille minimale pour déclencher le rendu
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.width = '1px';
    container.style.height = '1px';
    container.style.opacity = '0.01';
    container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';
    container.setAttribute('aria-hidden', 'true');
    
    // On ajoute directement le container au body pour un préchargement immédiat
    document.body.appendChild(container);
    
    // Crée et rend chaque image
    newsImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.style.width = '1px';
      img.style.height = '1px';
      img.style.objectFit = 'contain';
      container.appendChild(img);
      
      // Force le navigateur à traiter l'image
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, 1, 1);
        canvas.remove();
      };
    });
    
    // Nettoie après le chargement complet
    return () => {
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);
  
  // Ce composant ne rend rien visuellement
  return null;
};

export default NewsImagesPreloader;