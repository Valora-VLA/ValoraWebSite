import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Index from "./pages/Index";
import Community from "./pages/Community";
import SupportPage from "./pages/SupportPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toasters globais */}
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Index />} />

          {/* Novas rotas */}
          <Route path="/community" element={<Community />} />
          <Route path="/supportpage" element={<SupportPage />} />

          {/* Rota padrão (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
