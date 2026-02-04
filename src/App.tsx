import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import RouteScrollRestorer from "./components/RouteScrollRestorer";
import RoutePreloader from "./components/RoutePreloader";
import ImagePreloader from "./components/ImagePreloader";
import HeroImagesRenderer from "./components/HeroImagesRenderer";
import NewsImagesPreloader from "./components/NewsImagesPreloader";
import TPEImagesPreloader from "./components/TPEImagesPreloader";
import Index from "./pages/Index";

import References from "./pages/References";
import NumerisationServices from "./pages/NumerisationServices";
import PlateformesMonetiques from "./pages/PlateformesMonetiques";
import Produits from "./pages/Produits";
import SystemesReseaux from "./pages/SystemesReseaux";
import Cartes from "./pages/Cartes";
import Terminaux from "./pages/Terminaux";
import Formation from "./pages/Formation";
import QuiSommesNous from "./pages/QuiSommesNous";
import VisionMissionAmbition from "./pages/VisionMissionAmbition";
import NosValeurs from "./pages/NosValeurs";
import PourquoiNousChoisir from "./pages/PourquoiNousChoisir";
import Communication from "./pages/Communication";
import StrategieCommunication from "./pages/StrategieCommunication";
import SupportsPublicitaires from "./pages/SupportsPublicitaires";
import Evenementiel from "./pages/Evenementiel";
import IdentiteNumerique from "./pages/IdentiteNumerique";
import Monetique from "./pages/Monetique";
import Maintenance from "./pages/Maintenance";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
  <ScrollToTop />
  <RouteScrollRestorer />
  <RoutePreloader />
  <ImagePreloader />
  <HeroImagesRenderer />
  <NewsImagesPreloader />
  <TPEImagesPreloader />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/vision-mission-ambition" element={<VisionMissionAmbition />} />
          <Route path="/nos-valeurs" element={<NosValeurs />} />
          <Route path="/pourquoi-nous-choisir" element={<PourquoiNousChoisir />} />
          {/* Route supprimée : mot-directeur */}
          <Route path="/references" element={<References />} />
          <Route path="/digitalisation" element={<NumerisationServices />} /> {/* Redirect to NumerisationServices */}
          <Route path="/numerisation-services" element={<NumerisationServices />} />
          <Route path="/plateformes-monetiques" element={<PlateformesMonetiques />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/systemes-reseaux" element={<SystemesReseaux />} />
          <Route path="/cartes" element={<Cartes />} />
          <Route path="/terminaux" element={<Terminaux />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/strategie-communication" element={<StrategieCommunication />} />
          <Route path="/supports-publicitaires" element={<SupportsPublicitaires />} />
          <Route path="/evenementiel" element={<Evenementiel />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/identite-numerique" element={<IdentiteNumerique />} />
          <Route path="/monetique" element={<Monetique />} />
        
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
