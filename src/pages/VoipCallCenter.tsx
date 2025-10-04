import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const VoipCallCenter = () => {
  useEffect(() => {
    document.title = 'Solutions Voix sur IP & Call Center - SATEQ Digital Group';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Solutions Voix sur IP & Call Center</h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">
            En cours de réalisation ...
          </p>
          <p className="mt-6 text-sm text-muted-foreground/70">
            Cette page présentera prochainement nos offres intégrées de téléphonie IP,enregistrements, supervision et intégrations CRM.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default VoipCallCenter;
