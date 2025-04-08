
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PresentationPage from "./pages/PresentationPage";
import TeamMemberPage from "./pages/TeamMemberPage";
import { LanguageProvider } from "./hooks/useLanguage";

// Enhanced ScrollToTop component to handle scrolling to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Always scroll to top when pathname changes
    window.scrollTo(0, 0);
    
    // Add focus to the main content for better accessibility during presentations
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
    }
  }, [pathname, navigationType]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/presentation/:eventId" element={<PresentationPage />} />
            <Route path="/team/:id" element={<TeamMemberPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
