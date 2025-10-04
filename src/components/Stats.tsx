import { useState, useEffect, useRef } from 'react';
import { useCountAnimation } from '@/hooks/useCountAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  {
    number: 16,
    display: "16",
    label: "ans d'existence"
  },
  {
    number: 3,
    display: "03",
    label: "Business Units"
  },
  {
    number: 5,
    display: "05",
    label: "milliards FCFA investis"
  },
  {
    number: 50,
    display: "50",
    label: "employés et prestataires"
  },
  {
    number: 22,
    display: "+22",
    label: "projets réalisés"
  }
];

const StatCounter = ({ stat, isVisible }: { stat: typeof stats[0], isVisible: boolean }) => {
  const count = useCountAnimation({ target: stat.number, duration: 2000, isVisible });

  // Préserve le format (zéros en tête ou signe +) défini dans stat.display
  const displayValue = (() => {
    const template = stat.display;
    if (template.startsWith('+')) {
      const numericTemplate = template.slice(1); // ex: '+22' -> '22'
      const width = numericTemplate.length;      // longueur pour le padding
      return `+${String(count).padStart(width, '0')}`;
    }
    const width = template.length; // ex: '03' -> 2
    return String(count).padStart(width, '0');
  })();

  return (
    <div className="space-y-2 text-left">
      <div className="text-5xl md:text-6xl font-bold text-white transition-all duration-300">
        {displayValue}
      </div>
      <p className="text-white text-base font-medium">
        {stat.label}
      </p>
    </div>
  );
};

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className=" mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            SATEQ DIGITAL en chiffres
          </h2>
      
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}