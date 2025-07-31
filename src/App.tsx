import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import SeoAgent from "./pages/work/SeoAgent";
import DementiaCare from "./pages/work/DementiaCare";
import RecruitmentAgent from "./pages/work/RecruitmentAgent";
import RevitAgent from "./pages/work/RevitAgent";
import NirogGyanMessaging from "./pages/work/NirogGyanMessaging";
import Healthcare from "./pages/industries/Healthcare";
import HealthcareAIAgent from "./pages/industries/healthcare/HealthcareAIAgent";
import IntelligentHealthcareDocumentation from "./pages/industries/healthcare/IntelligentHealthcareDocumentation";
import PersonalizedMedicinePlatform from "./pages/industries/healthcare/PersonalizedMedicinePlatform";
import MedicalImagingIntelligence from "./pages/industries/healthcare/MedicalImagingIntelligence";
import AcceleratedDrugDiscovery from "./pages/healthcare/AcceleratedDrugDiscovery";
import ClinicalDecisionSupport from "./pages/healthcare/ClinicalDecisionSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/seo-agent" element={<SeoAgent />} />
          <Route path="/work/revit-agent" element={<RevitAgent />} />
          <Route path="/work/nirog-gyan-messaging" element={<NirogGyanMessaging />} />
          <Route path="/work/dementia-care" element={<DementiaCare />} />
          <Route path="/work/recruitment-agent" element={<RecruitmentAgent />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/healthcare/ai-agent" element={<HealthcareAIAgent />} />
          <Route path="/industries/healthcare/documentation" element={<IntelligentHealthcareDocumentation />} />
          <Route path="/industries/healthcare/personalized-medicine" element={<PersonalizedMedicinePlatform />} />
          <Route path="/industries/healthcare/medical-imaging" element={<MedicalImagingIntelligence />} />
          <Route path="/healthcare/drug-discovery" element={<AcceleratedDrugDiscovery />} />
          <Route path="/healthcare/clinical-decision" element={<ClinicalDecisionSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
