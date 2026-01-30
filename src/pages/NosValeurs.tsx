import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const NosValeurs = () => {
  useEffect(() => {
    document.title = "Nos Valeurs - SATEQ Digital Group";
  }, []);

  const valeurs = [
    {
      numero: "1",
      titre: "Intégrité",
      description: "Nous agissons avec éthique, transparence et responsabilité dans la gestion des données, des systèmes et des relations avec nos clients et partenaires."
    },
    {
      numero: "2",
      titre: "Discipline",
      description: "Nous appliquons avec rigueur les procédures, les normes et les standards, garants de la sécurité, de la qualité et de la continuité opérationnelle."
    },
    {
      numero: "3",
      titre: "Compétence",
      description: "Nous développons et mobilisons une expertise technique de haut niveau, soutenue par la formation continue et la veille technologique."
    },
    {
      numero: "4",
      titre: "Innovation",
      description: "Nous anticipons les évolutions du numérique pour concevoir des solutions modernes, évolutives et adaptées aux enjeux actuels et futurs."
    },
    {
      numero: "5",
      titre: "Engagement",
      description: "Nous nous engageons pleinement aux côtés de nos clients, de nos partenaires et de nos équipes, avec un sens élevé des responsabilités, une implication durable et une volonté constante de tenir nos promesses, au-delà des obligations contractuelles."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-green-500">
          <div 
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" 
            style={{ 
              backgroundSize: '20px 20px',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          <div className="relative min-h-[45vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 py-12">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Nos Valeurs
                  </h1>
                  <div className="h-1.5 w-24 bg-orange-500 rounded-full"></div>
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl">
                    Chez SATEQ, nos valeurs constituent le socle de notre identité et guident chacune de nos décisions, de nos actions et de nos engagements au quotidien.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full">
              <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,32L60,32C120,32,240,32,360,32C480,32,600,32,720,32C840,32,960,32,1080,32C1200,32,1320,32,1380,32L1440,32L1440,60L1380,60C1320,60,1200,60,1080,60C960,60,840,60,720,60C600,60,480,60,360,60C240,60,120,60,60,60L0,60Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Section Valeurs */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8 md:space-y-12">
                {valeurs.map((valeur, index) => (
                  <motion.div
                    key={valeur.numero}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={`flex flex-col md:flex-row gap-6 items-start ${
                      index % 2 === 0 ? '' : 'md:flex-row-reverse'
                    }`}>
                      {/* Numéro */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <span className="text-3xl md:text-4xl font-bold text-white">
                              {valeur.numero}
                            </span>
                          </div>
                          {/* Ligne de connexion pour desktop */}
                          {index < valeurs.length - 1 && (
                            <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-green-500 to-transparent"></div>
                          )}
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="flex-grow">
                        <div className={`relative bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border-2 ${
                          index % 2 === 0 ? 'border-l-8 border-l-green-500 border-gray-100' : 'border-r-8 border-r-orange-500 border-gray-100'
                        } hover:shadow-xl transition-all duration-300 group`}>
                          {/* Décoration d'angle */}
                          <div className={`absolute top-0 ${
                            index % 2 === 0 ? 'left-0' : 'right-0'
                          } w-2 h-2 bg-green-500 rounded-full`}></div>
                          
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className={index % 2 === 0 ? 'text-green-700' : 'text-orange-600'}>
                              {valeur.titre}
                            </span>
                            <span className="text-xl text-gray-400 font-normal">:</span>
                          </h3>
                          
                          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            {valeur.description}
                          </p>

                          {/* Effet de survol */}
                          <div className={`absolute bottom-0 ${
                            index % 2 === 0 ? 'left-0' : 'right-0'
                          } w-0 h-1 bg-gradient-to-r ${
                            index % 2 === 0 ? 'from-green-500 to-green-600' : 'from-orange-500 to-orange-600'
                          } group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA finale */}
        <section className="py-16 bg-gradient-to-br from-gray-100 to-green-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-4 border-green-500">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Des valeurs au cœur de notre action
                  </h2>
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-16 bg-green-500"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <div className="h-px w-16 bg-green-500"></div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Ces cinq piliers fondamentaux façonnent notre culture d'entreprise et garantissent l'excellence de nos services auprès de nos clients et partenaires.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default NosValeurs;
