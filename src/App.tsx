import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResearchPage from "./pages/ResearchPage";
import SoftwarePage from "./pages/SoftwarePage";
import OutreachPage from "./pages/OutreachPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/outreach" element={<OutreachPage />} />
          <Route path="/research/:id" element={<ProjectDetailPage />} />
          <Route path="/software/:id" element={<ProjectDetailPage />} />
          <Route path="/outreach/:id" element={<ProjectDetailPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
