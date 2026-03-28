import { useRef, useEffect, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);

  const startMusic = useCallback(() => {
    if (hasStartedRef.current) return;

    if (!audioRef.current) {
      const audio = new Audio(`${import.meta.env.BASE_URL}wedding-music.mp3`);
      audio.loop = true;
      audio.onended = () => audio.play();
      audio.volume = 0.3;
      audioRef.current = audio;
    }

    audioRef.current.play().then(() => {
      hasStartedRef.current = true;
    }).catch(() => {
      // Browser blocked it, will retry on next interaction
    });
  }, []);

  useEffect(() => {
    startMusic();

    const events = ["click", "touchstart", "pointerdown", "mousedown", "keydown"];

    const handler = () => {
      startMusic();
      if (hasStartedRef.current) {
        events.forEach(e => window.removeEventListener(e, handler));
      }
    };

    events.forEach(e => window.addEventListener(e, handler));

    return () => {
      events.forEach(e => window.removeEventListener(e, handler));
    };
  }, [startMusic]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
