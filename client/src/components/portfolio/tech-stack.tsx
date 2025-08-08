import { motion } from "framer-motion";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface TechStackProps {
  persona: 'software' | 'data';
  isMobile: boolean;
}

interface TechItem {
  name: string;
  icon: string;
  color: string;
  delay: number;
}

export function TechStack({ persona, isMobile }: TechStackProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const softwareTech: TechItem[] = [
    { name: "Python", icon: "fab fa-python", color: "blue", delay: 0 },
    { name: "JavaScript", icon: "fab fa-js-square", color: "yellow", delay: 0.1 },
    { name: "React", icon: "fab fa-react", color: "cyan", delay: 0.2 },
    { name: "Flask", icon: "fas fa-flask", color: "green", delay: 0.3 },
    { name: "Django", icon: "fab fa-python", color: "emerald", delay: 0.4 },
    { name: "SQL", icon: "fas fa-database", color: "blue", delay: 0.5 },
  ];

  const dataTech: TechItem[] = [
    { name: "Python", icon: "fab fa-python", color: "blue", delay: 0 },
    { name: "Spark", icon: "fas fa-fire", color: "orange", delay: 0.1 },
    { name: "Airflow", icon: "fas fa-wind", color: "cyan", delay: 0.2 },
    { name: "BigQuery", icon: "fas fa-cloud", color: "green", delay: 0.3 },
    { name: "Tableau", icon: "fas fa-chart-bar", color: "blue", delay: 0.4 },
    { name: "Docker", icon: "fab fa-docker", color: "purple", delay: 0.5 },
  ];

  const techStack = persona === 'software' ? softwareTech : dataTech;
  const gradient = persona === 'software' ? "from-blue-400 to-violet-400" : "from-violet-400 to-cyan-400";

  const handleTechHover = (techName: string) => {
    setHoveredTech(techName);
    // Trigger particle burst effect
    console.log(`Tech ${techName} hovered - particle effect triggered`);
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 scroll-snap-section"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl font-bold mb-16 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          Tech Stack
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={isVisible ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: tech.delay }}
              className="tech-item group cursor-pointer"
              onMouseEnter={() => handleTechHover(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`glass-card rounded-2xl p-6 hover:border-${tech.color}-500/50 transition-all duration-300 hover:glow-${tech.color.includes('yellow') ? 'blue' : tech.color}`}
              >
                <motion.i
                  className={`${tech.icon} text-4xl text-${tech.color}-400 mb-4`}
                  animate={{
                    rotate: hoveredTech === tech.name ? [0, 10, -10, 0] : 0,
                    scale: hoveredTech === tech.name ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.6, repeat: hoveredTech === tech.name ? 2 : 0 }}
                />
                <p className="text-slate-300 font-medium">{tech.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
