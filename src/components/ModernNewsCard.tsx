import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface NewsItemType {
  id: string;
  title: string;
  date: string;
  category?: string;
  image?: string;
  excerpt?: string;
  link?: string;
}

// Sample news data
const sampleNewsItems: NewsItemType[] = [
  {
    id: '1',
    title: 'SATEQ DIGITAL devient Distributeur des TPE VERIFONE en Afrique',
    date: '5 mars 2023',
    category: 'Partenariat',
  },
  {
    id: '2',
    title: 'Terminal de paiement électronique : qu\'est-ce que c\'est ?',
    date: '5 février 2023',
    category: 'Guide',
  },
  {
    id: '3',
    title: 'Transformation digitale',
    date: '7 janvier 2023',
    category: 'Innovation',
  },
  {
    id: '4',
    title: 'Innovation en milieu rural',
    date: '15 décembre 2022',
    category: 'Développement',
  }
];

const ModernNewsCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header with dots indicator */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">Actualités</h3>
        <div className="flex space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-orange-300"></div>
          <div className="w-2 h-2 rounded-full bg-orange-200"></div>
        </div>
      </div>
      
      {/* News items with custom scrollbar */}
      <div className="relative">
        <div className="px-4 pb-6 space-y-3 max-h-[350px] overflow-y-auto 
                      scrollbar-thin scrollbar-thumb-orange-200 scrollbar-track-transparent
                      scrollbar-thumb-rounded-full pr-4">
          {sampleNewsItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl p-4 border border-gray-100 
                        hover:shadow-md hover:border-orange-100 
                        transform transition-all duration-300 hover:-translate-y-1
                        cursor-pointer group"
            >
              <h4 className="font-semibold text-gray-800 mb-2 leading-snug line-clamp-2">{item.title}</h4>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-600">
                  {item.date}
                </span>
                
                {item.category && (
                  <span className="text-xs font-medium text-gray-500">
                    {item.category}
                  </span>
                )}
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Custom scroll indicator */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 h-20 w-1">
          <div className="w-1 h-full rounded-full bg-gray-200 overflow-hidden">
            <div className="w-full h-8 bg-orange-200 rounded-full transform translate-y-8 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Footer with link */}
      <div className="p-4 border-t border-gray-100">
        <a 
          href="/actualites" 
          className="flex items-center justify-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
        >
          Voir toutes les actualités
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ModernNewsCard;