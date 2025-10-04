import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import RouteScrollRestorer from "./components/RouteScrollRestorer";
import Index from "./pages/Index";

import References from "./pages/References";
import NumerisationServices from "./pages/NumerisationServices";
import PlateformesMonetiques from "./pages/PlateformesMonetiques";
import Produits from "./pages/Produits";
import SystemesReseaux from "./pages/SystemesReseaux";
import Cartes from "./pages/Cartes";
import Terminaux from "./pages/Terminaux";
import Actualites from "./pages/Actualites";
import Formation from "./pages/Formation";
import Communication from "./pages/Communication";
import VoipCallCenter from "./pages/VoipCallCenter";
import IdentiteNumerique from "./pages/IdentiteNumerique";
import Monetique from "./pages/Monetique";
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
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Route supprimée : mot-directeur */}
          <Route path="/references" element={<References />} />
          <Route path="/digitalisation" element={<NumerisationServices />} /> {/* Redirect to NumerisationServices */}
          <Route path="/numerisation-services" element={<NumerisationServices />} />
          <Route path="/plateformes-monetiques" element={<PlateformesMonetiques />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/systemes-reseaux" element={<SystemesReseaux />} />
          <Route path="/cartes" element={<Cartes />} />
          <Route path="/terminaux" element={<Terminaux />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:id" element={<Actualites />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/voip-call-center" element={<VoipCallCenter />} />
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
