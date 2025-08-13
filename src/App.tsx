import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuditionForm from "./pages/AuditionForm";

const queryClient = new QueryClient();

const App = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <source src="/beats.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay for content readability and app content */}
    <div className="relative z-10 bg-black/90 min-h-screen">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auditions" element={<AuditionForm />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  </div>
);

export default App;