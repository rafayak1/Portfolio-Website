import { motion } from "framer-motion";
import { useState } from "react";

interface AvatarStageProps {
  onPersonaSelect: (persona: 'software' | 'data') => void;
  isMobile: boolean;
}

export function AvatarStage({ onPersonaSelect, isMobile }: AvatarStageProps) {
  const [hoveredAvatar, setHoveredAvatar] = useState<string | null>(null);

  const handleAvatarClick = (persona: 'software' | 'data') => {
    // Add particle burst effect
    const avatar = document.querySelector(`[data-persona="${persona}"]`);
    if (avatar) {
      avatar.classList.add('animate-pulse');
      setTimeout(() => {
        avatar.classList.remove('animate-pulse');
        onPersonaSelect(persona);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center">
      {/* Software Engineer Avatar */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="avatar-container cursor-pointer group"
        data-persona="software"
        onClick={() => handleAvatarClick('software')}
        onMouseEnter={() => setHoveredAvatar('software')}
        onMouseLeave={() => setHoveredAvatar(null)}
      >
        <motion.div
          className="relative transform-gpu transition-all duration-500"
          whileHover={{ scale: 1.1, y: -15 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 glass-card rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group-hover:glow-blue transition-all duration-500">
            {/* Floating Code Lines */}
            <div className="absolute inset-0 opacity-30">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                className="absolute top-4 left-4 text-green-400 text-xs"
              >
                const magic = () =&gt; &#123;
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-8 right-6 text-blue-400 text-xs"
              >
                return ai.power();
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-6 text-violet-400 text-xs"
              >
                &#125;;
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-4 right-4 text-cyan-400 text-xs"
              >
                // ✨ Beautiful code
              </motion.div>
            </div>
            
            <motion.i
              className="fas fa-code text-6xl text-blue-400 mb-4"
              animate={{
                scale: hoveredAvatar === 'software' ? [1, 1.1, 1] : 1,
                rotate: hoveredAvatar === 'software' ? [0, 5, -5, 0] : 0,
              }}
              transition={{ duration: 0.6, repeat: hoveredAvatar === 'software' ? Infinity : 0 }}
            />
            <h3 className="text-xl font-semibold text-slate-50">Software</h3>
            <p className="text-sm text-slate-300 mt-2">AI-Powered Products</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Data Engineer Avatar */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="avatar-container cursor-pointer group"
        data-persona="data"
        onClick={() => handleAvatarClick('data')}
        onMouseEnter={() => setHoveredAvatar('data')}
        onMouseLeave={() => setHoveredAvatar(null)}
      >
        <motion.div
          className="relative transform-gpu transition-all duration-500"
          whileHover={{ scale: 1.1, y: -15 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 glass-card rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group-hover:glow-violet transition-all duration-500 border-violet-500/30">
            {/* Floating Data Cubes */}
            <div className="absolute inset-0 opacity-40">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [45, 90, 45],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                className="absolute top-6 left-6 w-3 h-3 bg-emerald-400 rounded"
              />
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [30, 60, 30],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
                className="absolute top-12 right-8 w-2 h-2 bg-blue-400 rounded"
              />
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [60, 120, 60],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
                className="absolute bottom-12 left-8 w-2.5 h-2.5 bg-violet-400 rounded"
              />
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [90, 180, 90],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                className="absolute bottom-6 right-6 w-2 h-2 bg-cyan-400 rounded"
              />
            </div>
            
            <motion.i
              className="fas fa-chart-line text-6xl text-violet-400 mb-4"
              animate={{
                scale: hoveredAvatar === 'data' ? [1, 1.1, 1] : 1,
                rotate: hoveredAvatar === 'data' ? [0, -5, 5, 0] : 0,
              }}
              transition={{ duration: 0.6, repeat: hoveredAvatar === 'data' ? Infinity : 0 }}
            />
            <h3 className="text-xl font-semibold text-slate-50">Data</h3>
            <p className="text-sm text-slate-300 mt-2">Realtime Insights</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
