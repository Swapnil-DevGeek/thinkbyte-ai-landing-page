import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Work from "./pages/Work";
import SeoAgent from "./pages/work/SeoAgent";
import DementiaCare from "./pages/work/DementiaCare";
import RecruitmentAgent from "./pages/work/RecruitmentAgent";
import RevitAgent from "./pages/work/RevitAgent";
import NirogGyanMessaging from "./pages/work/NirogGyanMessaging";

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
          <Route path="/work/seo-agent" element={<SeoAgent />} />
          <Route path="/work/revit-agent" element={<RevitAgent />} />
          <Route path="/work/nirog-gyan-messaging" element={<NirogGyanMessaging />} />
          <Route path="/work/dementia-care" element={<DementiaCare />} />
          <Route path="/work/recruitment-agent" element={<RecruitmentAgent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
