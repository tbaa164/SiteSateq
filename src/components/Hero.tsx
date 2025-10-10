import { useLanguage } from "@/contexts/LanguageContext";
import Header from "./Header";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <div className="relative">
      <div className="min-h-screen bg-background">
        {/* Hero Section - Hauteur réduite sur mobile pour éliminer l'espace vide */}
        <section className="relative h-60 sm:h-64 lg:h-79 overflow-hidden">
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

        {/* Image carte avec effet moderne et animé */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-full lg:w-2/3 flex items-center justify-end pr-8">
          <div className="relative group animate-float">
            {/* Effet de lueur et dégradé en arrière-plan - visibilité réduite sur mobile */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 sm:from-primary/30 via-accent/10 sm:via-accent/40 to-orange-400/5 sm:to-orange-400/30 rounded-xl blur-xl transform scale-110 animate-pulse opacity-20 sm:opacity-100"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 sm:from-green-500/20 via-accent/0 to-orange-500/5 sm:to-orange-500/20 rounded-xl blur-md transform scale-105 animate-gradient-x opacity-20 sm:opacity-100"></div>
            
          
            <div className="relative transform hover:scale-105 transition-all duration-700 ease-out">
              {/* <img 
                src="/logos/femmeCarte.png" 
                alt="Femme avec carte bancaire" 
                className="h-48 lg:h-64 w-auto object-contain drop-shadow-2xl animate-float"
              /> */}
              
              {/* Effet de reflet animé */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 rounded-lg opacity-0 group-hover:opacity-100 transform translate-x-full -translate-y-full animate-shine"></div>
            </div>
            
            {/* Éléments décoratifs - visibilité réduite sur mobile */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/5 sm:bg-accent/20 rounded-full blur-md -z-10 animate-pulse opacity-20 sm:opacity-100" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 sm:bg-primary/20 rounded-full blur-md -z-10 animate-pulse opacity-20 sm:opacity-100" style={{ animationDelay: '1.2s' }}></div>
            
            {/* Cercles décoratifs supprimés à cet endroit, déplacés près du texte */}
          </div>
        </div>

        {/* Texte au premier plan - Optimisé pour afficher l'image de fond sur mobile */}
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-start items-start pt-0 pb-0 sm:justify-center sm:pt-0 text-white">
          {/* Suppression du conteneur arrière-plan noir pour mobile */}
          
          {/* Cercles décoratifs près du texte - visibilité réduite de 80% sur mobile */}
          <div className="absolute left-4 top-0 w-10 h-10 bg-accent/20 sm:bg-accent rounded-full blur-sm animate-orbit-fast animate-pulse z-20 opacity-20 sm:opacity-100" style={{ animationDelay: '0s' }}></div>
          <div className="absolute left-20 bottom-0 w-8 h-8 bg-primary/20 sm:bg-primary rounded-full blur-sm animate-orbit-fast animate-pulse z-20 opacity-20 sm:opacity-100" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-40 top-1/3 w-6 h-6 bg-orange-400/20 sm:bg-orange-400 rounded-full blur-sm animate-orbit-fast animate-pulse z-20 opacity-20 sm:opacity-100" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Background sombre supprimé pour afficher l'image de fond */}
          
          {/* Titre avec style spécifique pour mobile - Ombres modérées pour meilleure luminosité */}
          <h1 className="text-[22px] md:text-4xl font-bold mb-1 sm:mb-4 drop-shadow-lg sm:drop-shadow-lg mt-0 sm:mt-0 pt-0 sm:pt-0 relative z-10 text-shadow-mobile sm:text-shadow-none leading-tight">
            <span className="inline-block font-extrabold text-white">LES</span> <span className="font-extrabold text-white">TECHNOLOGIES DIGITALES</span>
          </h1>
          <h2 className="text-[22px] md:text-4xl font-bold mb-2 sm:mb-6 drop-shadow-lg sm:drop-shadow-lg relative z-10 text-shadow-mobile sm:text-shadow-none leading-tight">
            <span className="text-white">AU SERVICE DE L'ÉCONOMIE NUMÉRIQUE EN AFRIQUE</span>
          </h2>
          <div className="space-y-0.5 sm:space-y-3 text-sm sm:text-2xl drop-shadow-lg sm:drop-shadow-none relative z-10 mb-1 sm:mb-0">
            <p className="text-white bg-black/30 sm:bg-transparent px-3 py-1 sm:py-1 sm:p-0 rounded-md backdrop-blur-sm sm:backdrop-blur-none block shadow-lg sm:shadow-none text-shadow-mobile sm:text-shadow-none"><span className="font-bold sm:font-semibold">RÉSEAUX, IDENTITÉ & PAIEMENT ÉLECTRONIQUE</span></p>
            <p className="text-white bg-black/30 sm:bg-transparent px-3 py-1 sm:py-1 sm:p-0 rounded-md backdrop-blur-sm sm:backdrop-blur-none block shadow-lg sm:shadow-none text-shadow-mobile sm:text-shadow-none"><span className="font-bold sm:font-semibold">COMMUNICATION D'ENTREPRISE</span></p>
          </div>
        </div>
      </section>

      {/* Enhanced Description Section with improved design - Full Width Layout, réduit espacement en haut pour mobile */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-2 sm:py-4 mt-0 sm:mt-4">
        <div className="container mx-auto px-2 md:px-3 lg:px-4 xl:px-0">
          <div className="w-full mx-auto relative">
            {/* Decorative elements - Positioned wider */}
            <div className="absolute -top-8 -left-12 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 right-6 w-24 h-24 bg-orange-400/5 rounded-full blur-xl"></div>
            
            {/* Main content with full width layout */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative z-10">
              {/* Wider headline with more horizontal space */}
              <div className="mb-3 relative flex items-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 leading-snug max-w-full">
                  <span className="text-primary font-bold">SATEQ DIGITAL</span> permet à ses clients de moderniser leurs procédés en optimisant les infrastructures réseaux et systèmes de production.
                </h3>
              </div>
              
              {/* Features with better horizontal spacing */}
              <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:gap-8">
                {/* Feature 1 - expanded horizontally */}
                <div className="flex gap-3 items-center group hover:bg-green-50/30 p-3 rounded-lg transition-all duration-300 w-full">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-colors">
                    <svg className="w-5 h-5 text-primary font-bold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm md:text-base font-medium leading-tight">
                      Intègre une <span className="text-primary font-semibold">sécurité électronique maximale</span> sur les données informatiques et les plateformes monétiques.
                    </p>
                  </div>
                </div>

                {/* Feature 2 - expanded horizontally */}
                <div className="flex gap-3 items-center group hover:bg-green-50/30 p-3 rounded-lg transition-all duration-300 w-full">
                  <div className="w-10 h-10 rounded-full bg-orange-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400/40 transition-colors">
                    <svg className="w-5 h-5 text-orange-600 font-bold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm md:text-base font-medium leading-tight">
                      Associe <span className="text-orange-500 font-semibold">compétence, recherche et innovation</span> pour le développement des systèmes numériques.
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
                    <p className="max-w-full">
                      Notre entreprise, <strong>Société Africaine de Technologies et d'Équipements (SATEQ)</strong> créée en 2009, a engagé une stratégie de gestion digitale de projets structurants pour notre continent. Nos solutions intègrent l'environnement trouvé sur site en développant une économie verte dans toutes les infrastructures et systèmes de production.
                    </p>
                    <p className="max-w-full">
                      Des experts IT de haut niveau ont pu développer des applications innovantes, adaptées à l'écosystème numérique des pays africains, surtout dans les zones rurales dépourvues d'électricité et d'internet.
                    </p>
                    <p className="max-w-full">
                      Grâce à un réseau de partenaires à l'échelle internationale, nous avons pu concevoir et réaliser des solutions certifiées sur l'identité numérique et les paiements électroniques.
                    </p>
                    <p className="max-w-full">
                      C'est pourquoi nous comptons des références dans l'administration, les multinationales, le secteur privé formel et informel ainsi que les associations que nous accompagnons dans plusieurs projets de numérisation de leurs membres.
                    </p>
                    <p className="max-w-full">
                      Tous nos équipements et solutions sont garantis par nos soins, nos ingénieurs assurant les formations aux utilisateurs avec un call center pour le service après-vente.
                    </p>
                    
                    {/* Signature */}
                    <div className="pt-6 mt-2 text-right">
                      <p className="font-bold text-gray-800">A.Tidiane WANE</p>
                      <p className="text-gray-800">Administrateur Général</p>
                    </div>
                  </div>
                </div>
                
                {/* Image à droite - remontée légèrement */}
                <div className="lg:w-1/4 lg:-mt-7 flex items-start">
                  <img 
                    src="/logos/MrWane.jpg" 
                    alt="Monsieur Wane - Directeur Général" 
                    className="w-full rounded-lg shadow-md transform scale-90 origin-top"
                    style={{ maxHeight: "90%" }}
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