import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Liste des composants/pages à précharger
const routesToPreload = [
  () => import('../pages/Index'),
  () => import('../pages/Actualites'),
  () => import('../pages/Cartes'),
  () => import('../pages/Communication'),
  () => import('../pages/Digitalisation'),
  () => import('../pages/Formation'),
  () => import('../pages/IdentiteNumerique'),
  () => import('../pages/Monetique'),
  () => import('../pages/PlateformesMonetiques'),
  () => import('../pages/Produits'),
  () => import('../pages/References'),
  () => import('../pages/SystemesReseaux'),
  () => import('../pages/Terminaux'),
  () => import('../pages/VoipCallCenter'),
  () => import('../components/Hero'),
];

export default function RoutePreloader() {
  const location = useLocation();

  useEffect(() => {
    // Précharge toutes les routes après le premier rendu de la page actuelle
    const timer = setTimeout(() => {
      routesToPreload.forEach(route => {
        // Précharger en arrière-plan
        route();
      });
    }, 1000); // Commence le préchargement après 1 seconde
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null; // Ce composant ne rend rien visuellement
}