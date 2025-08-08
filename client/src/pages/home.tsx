import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AvatarStage } from "@/components/three/avatar-stage";
import { FloatingParticles } from "@/components/three/floating-particles";
import { PersonaSection } from "@/components/portfolio/persona-section";
import { ContactDrawer } from "@/components/portfolio/contact-drawer";
import { useIsMobile } from "@/hooks/use-mobile";

type ViewState = 'gateway' | 'software' | 'data';

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewState>('gateway');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const isMobile = useIsMobile();

  const handlePersonaSelect = (persona: 'software' | 'data') => {
    setCurrentView(persona);
    // Smooth scroll to top when switching personas
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGateway = () => {
    setCurrentView('gateway');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Enable/disable scroll snap based on view
    if (currentView !== 'gateway') {
      document.body.style.scrollSnapType = 'y mandatory';
    } else {
      document.body.style.scrollSnapType = 'none';
    }

    return () => {
      document.body.style.scrollSnapType = 'none';
    };
  }, [currentView]);

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-50 overflow-x-hidden">
      <FloatingParticles />
      
      {/* Back to Personas Button */}
      <AnimatePresence>
        {currentView !== 'gateway' && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleBackToGateway}
            className="fixed top-6 left-6 z-50 glass-card rounded-full p-3 hover:glow-blue transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-arrow-left text-blue-400 group-hover:text-blue-300 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Gateway Section */}
      <AnimatePresence mode="wait">
        {currentView === 'gateway' && (
          <motion.section
            key="gateway"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
          >
            <div className="text-center z-10 w-full px-6">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold mb-4 text-green-400 whitespace-nowrap"
                style={{ textShadow: '0 0 30px rgb(34 197 94)' }}
              >
                Abdul Rafay Ahmed Khan
              </motion.h1>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-slate-300 mb-16"
              >
                Choose A Role
              </motion.p>

              <AvatarStage 
                onPersonaSelect={handlePersonaSelect}
                isMobile={isMobile}
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Persona Sections */}
      <AnimatePresence mode="wait">
        {currentView !== 'gateway' && (
          <PersonaSection
            key={currentView}
            persona={currentView as 'software' | 'data'}
            isMobile={isMobile}
          />
        )}
      </AnimatePresence>

      {/* Contact Drawer */}
      <ContactDrawer 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Floating Contact Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        style={{ 
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
          filter: 'drop-shadow(0 0 10px rgb(34 197 94))'
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-envelope text-white text-xl" />
      </motion.button>
    </div>
  );
}
