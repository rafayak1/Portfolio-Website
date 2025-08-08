import { motion } from "framer-motion";

export function FloatingParticles() {
  const particles = [
    { id: 1, size: 'w-2 h-2', color: 'bg-blue-400', delay: 0, position: 'top-20 left-20' },
    { id: 2, size: 'w-1 h-1', color: 'bg-violet-400', delay: 1, position: 'top-40 right-32' },
    { id: 3, size: 'w-1.5 h-1.5', color: 'bg-cyan-400', delay: 2, position: 'bottom-32 left-40' },
    { id: 4, size: 'w-1 h-1', color: 'bg-blue-300', delay: 0.5, position: 'top-60 left-1/2' },
    { id: 5, size: 'w-2 h-2', color: 'bg-violet-300', delay: 1.5, position: 'bottom-20 right-20' },
    { id: 6, size: 'w-1 h-1', color: 'bg-emerald-400', delay: 0.8, position: 'top-32 right-1/4' },
    { id: 7, size: 'w-1.5 h-1.5', color: 'bg-cyan-300', delay: 2.2, position: 'bottom-40 left-1/3' },
    { id: 8, size: 'w-1 h-1', color: 'bg-blue-500', delay: 1.2, position: 'top-1/2 right-12' },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.size} ${particle.color} ${particle.position} rounded-full`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
