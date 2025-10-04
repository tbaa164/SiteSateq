import React from 'react';
import NewsCard, { NewsItem } from '@/components/NewsCard';

const sampleNews: NewsItem[] = [
  {
    id: '1',
    title: 'SATEQ DIGITAL devient Distributeur des TPE VERIFONE en Afrique',
    date: '5 mars 2023',
    category: 'Partenariat',
    image: '/placeholder.svg', 
    excerpt: 'SATEQ DIGITAL annonce un partenariat stratégique avec VERIFONE pour la distribution des terminaux de paiement électronique en Afrique.'
  },
  {
    id: '2',
    title: 'Terminal de paiement électronique : qu\'est-ce que c\'est ?',
    date: '5 février 2023',
    category: 'Guide',
    excerpt: 'Découvrez tout ce que vous devez savoir sur les terminaux de paiement électronique et leur fonctionnement.'
  },
  {
    id: '3',
    title: 'Transformation digitale',
    date: '7 janvier 2023',
    category: 'Innovation',
    excerpt: 'Comment la transformation digitale révolutionne les entreprises en Afrique et crée de nouvelles opportunités.'
  },
  {
    id: '4',
    title: 'Innovation en milieu rural',
    date: '15 décembre 2022',
    category: 'Développement',
    excerpt: 'SATEQ déploie des solutions innovantes pour connecter les zones rurales africaines.'
  },
  {
    id: '5',
    title: 'Formation aux métiers du numérique',
    date: '3 novembre 2022',
    category: 'Formation',
    excerpt: 'Lancement de notre nouveau programme de formation aux métiers du numérique.'
  }
];

const NewsExample: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <NewsCard news={sampleNews} />
    </div>
  );
};

export default NewsExample;