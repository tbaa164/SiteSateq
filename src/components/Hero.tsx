import { useLanguage } from "@/contexts/LanguageContext";
import Header from "./Header";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <div className="relative">
      <div className="min-h-screen bg-background">
        {/* Hero Section - Hauteur réduite sur mobile pour éliminer l'espace vide */}
        <section className="relative h-64 sm:h-64 lg:h-79 overflow-hidden">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0">
            <img 
              src="/logos/barriere.jpg" 
              alt="Technologies Digitales" 
              className="w-full h-full object-cover"
            />
            {/* Overlay optimisé pour meilleure lisibilité sur mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/25 sm:from-primary/15 via-black/10 sm:via-transparent to-black/25 sm:to-black/15 mix-blend-multiply"></div>
          
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 sm:from-black/30 to-transparent"></div>
          </div>
          
          {/* Fond extrêmement léger pour contraste */}
          <div className="absolute inset-0 bg-black/5"></div>

        {/* Image carte - effets réduits pour une meilleure lisibilité */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-full lg:w-2/3 flex items-center justify-end pr-8">
          <div className="relative">
            {/* Effets de lueur simplifiés */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-orange-400/5 rounded-xl blur-xl opacity-10"></div>
            
            <div className="relative">
              {/* Image supprimée pour éviter les distractions */}
              
              {/* Effet de reflet simplifié */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/0"></div>
            </div>
            
            {/* Éléments décoratifs simplifiés */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-md -z-10 opacity-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-full blur-md -z-10 opacity-10"></div>
          </div>
        </div>

        {/* Texte au premier plan - Optimisé pour afficher l'image de fond sur mobile */}
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-start pt-0 pb-0 sm:justify-center sm:pt-0 text-white">
          {/* Suppression du conteneur arrière-plan noir pour mobile */}
          
          {/* Éléments décoratifs complètement supprimés pour une lecture plus claire */}
          
          {/* Background transparent pour afficher l'image de fond */}
          
          {/* Titre avec style spécifique pour mobile - Ombres modérées pour meilleure luminosité */}
          <h1 className="text-[22px] md:text-4xl font-bold mb-1 sm:mb-4 mt-0 sm:mt-0 pt-0 sm:pt-0 relative z-10 leading-tight">
            <span className="inline-block text-green-500">Société Africaine de Technologie et d'EQuipements</span>
          </h1>
          <h2 className="text-[22px] md:text-3xl font-normal mb-1 sm:mb-6 relative z-10 leading-tight">
            <span className="text-orange-500">La solution digitale au coeur de l'économie africaine</span>
          </h2>
        </div>
      </section>
 {/* Enhanced Description Section with improved design - Full Width Layout, réduit espacement en haut pour mobile */}
      {/* Enhanced Description Section with improved design - Full Width Layout, réduit espacement en haut pour mobile */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-2 sm:py-4 mt-0 sm:mt-4">
        <div className="container mx-auto px-2 md:px-3 lg:px-4 xl:px-0">
          <div className="w-full mx-auto relative">
            {/* Éléments décoratifs minimisés pour plus de simplicité */}
            <div className="absolute -top-8 -left-12 w-20 h-20 bg-primary/5 rounded-full blur-xl opacity-30"></div>
            
            {/* Main content with full width layout */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative z-10">
              {/* Wider headline with more horizontal space */}
              <div className="mb-3 relative flex items-center">
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-snug max-w-full">
                  <span className="text-primary">SATEQ DIGITAL</span> permet à ses clients de moderniser leurs procédés en optimisant les infrastructures réseaux et systèmes de production.
                </h3>
              </div>
              
              {/* Features with better horizontal spacing */}
              <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:gap-8">
                {/* Feature 1 - simplifié */}
                <div className="flex gap-3 items-center p-3 rounded-lg w-full">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm md:text-base leading-tight">
                      Intègre une <span className="text-primary">sécurité électronique maximale</span> sur les données informatiques et les plateformes monétiques.
                    </p>
                  </div>
                </div>

                {/* Feature 2 - simplifié */}
                <div className="flex gap-3 items-center p-3 rounded-lg w-full">
                  <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm md:text-base leading-tight">
                      Associe <span className="text-orange-500">compétence, recherche et innovation</span> pour le développement des systèmes numériques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mot du Directeur Général Section - Full width layout */}
            <div className="mt-5 mb-5 bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 relative z-10">
              {/* Titre avec barre verte */}
              <div className="flex items-center mb-5">
                <div className="w-2 h-8 bg-primary rounded-full mr-3"></div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-primary">
                  Mot du Directeur Général
                </h2>
              </div>
              
              {/* Contenu principal avec flex */}
              <div className="flex flex-col lg:flex-row gap-8 relative">
                {/* Texte à gauche */}
                <div className="lg:w-3/4 pr-4">
                  <div className="space-y-4 text-gray-700 text-sm lg:text-base">
                    <p className="max-w-full text-justify">
                      Il est clairement admis par tous, que les technologies numériques ont radicalement transformé la gouvernance mondiale. Aucun secteur n'est épargné : les Etats, les entreprises et les populations au quotidien.
                    </p>
                    <p className="max-w-full text-justify">
                      Si bien qu'aujourd'hui, ce sont des systèmes électroniques et des plateformes digitales qui régissent l'économie mondiale et la circulation des biens et des personnes. Les systèmes d'identification par biométrie ou QR-Code, la carte bancaire, le mobile money et les réseaux sociaux ont fini de changer complètement le mode de vie de notre société.
                    </p>
                    <p className="max-w-full text-justify">
                      Attention, toutes ces technologies avancées engendrent de nouveaux défis.
                      La sécurité et la préservation des ressources et de nos valeurs constituent des enjeux majeurs qui doivent préoccuper tous les pays, surtout en Afrique.
                    </p>
                    <p className="max-w-full text-justify">
                      Partout, les entreprises et les Etats cherchent solution pour leur protection et le bien-être des populations devenues plus exigeantes en matière de sécurité, d'éducation, de liberté, de transparence et de développement économique et social.
                    </p>
                    <p className="max-w-full text-justify">
                      C'est pourquoi notre Groupe SATEQ DIGITAL s'est spécialisé dans l'intégration de solutions innovantes et durables, orientées vers la transformation digitale, l'optimisation des infrastructures et réseaux, la sécurité électronique, les plateformes monétiques et la communication visuelle à forte valeur ajoutée.
                    </p>
                    
                    {/* Signature */}
                    <div className="pt-1 mt-0 text-right">
                      <img src="/logos/signature.png" alt="A.Tidiane WANE" className="ml-auto h-14 md:h-16 mb-1" />
                      <p className="text-gray-800">Ingénieur, Administrateur General</p>
                    </div>
                  </div>
                </div>
                
                {/* Image à droite - même hauteur que le texte */}
                <div className="lg:w-1/4 flex items-stretch">
                  <img 
                    src="/logos/MrWane.png" 
                    alt="Monsieur Wane - Directeur Général" 
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}