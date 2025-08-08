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

  const softwareTech = {
    "Programming Languages": [
      { name: "Python", icon: "fab fa-python", color: "green", delay: 0 },
      { name: "JavaScript", icon: "fab fa-js-square", color: "green", delay: 0.1 },
      { name: "SQL", icon: "fas fa-database", color: "green", delay: 0.2 },
      { name: "C++", icon: "fas fa-code", color: "green", delay: 0.3 },
    ],
    "Databases": [
      { name: "PostgreSQL", icon: "fas fa-database", color: "green", delay: 0.4 },
      { name: "Neo4J", icon: "fas fa-project-diagram", color: "green", delay: 0.5 },
      { name: "MySQL", icon: "fas fa-database", color: "green", delay: 0.6 },
      { name: "Snowflake", icon: "fas fa-snowflake", color: "green", delay: 0.7 },
    ],
    "Development": [
      { name: "React.js", icon: "fab fa-react", color: "green", delay: 0.8 },
      { name: "Flask", icon: "fas fa-flask", color: "green", delay: 0.9 },
      { name: "Django", icon: "fab fa-python", color: "green", delay: 1.0 },
      { name: "RESTful APIs", icon: "fas fa-exchange-alt", color: "green", delay: 1.1 },
    ],
    "DevOps & Testing": [
      { name: "Docker", icon: "fab fa-docker", color: "green", delay: 1.2 },
      { name: "Git", icon: "fab fa-git-alt", color: "green", delay: 1.3 },
      { name: "Pytest", icon: "fas fa-vial", color: "green", delay: 1.4 },
      { name: "Cloud VMs", icon: "fas fa-cloud", color: "green", delay: 1.5 },
    ]
  };

  const dataTech = {
    "Languages": [
      { name: "Python", icon: "fab fa-python", color: "green", delay: 0 },
      { name: "SQL", icon: "fas fa-database", color: "green", delay: 0.1 },
      { name: "R", icon: "fab fa-r-project", color: "green", delay: 0.2 },
    ],
    "Data & ML": [
      { name: "Pandas", icon: "fas fa-table", color: "green", delay: 0.3 },
      { name: "NumPy", icon: "fas fa-calculator", color: "green", delay: 0.4 },
      { name: "PySpark", icon: "fas fa-fire", color: "green", delay: 0.5 },
      { name: "PyTorch", icon: "fas fa-brain", color: "green", delay: 0.6 },
      { name: "Tableau", icon: "fas fa-chart-bar", color: "green", delay: 0.7 },
      { name: "Power BI", icon: "fas fa-chart-pie", color: "green", delay: 0.8 },
    ],
    "Platforms/Cloud": [
      { name: "Apache Spark", icon: "fas fa-fire", color: "green", delay: 0.9 },
      { name: "Airflow", icon: "fas fa-wind", color: "green", delay: 1.0 },
      { name: "BigQuery", icon: "fas fa-cloud", color: "green", delay: 1.1 },
      { name: "Docker", icon: "fab fa-docker", color: "green", delay: 1.2 },
      { name: "AWS", icon: "fab fa-aws", color: "green", delay: 1.3 },
      { name: "GCP", icon: "fab fa-google", color: "green", delay: 1.4 },
    ],
    "Databases/Tools": [
      { name: "PostgreSQL", icon: "fas fa-database", color: "green", delay: 1.5 },
      { name: "MySQL", icon: "fas fa-database", color: "green", delay: 1.6 },
      { name: "Snowflake", icon: "fas fa-snowflake", color: "green", delay: 1.7 },
      { name: "Neo4j", icon: "fas fa-project-diagram", color: "green", delay: 1.8 },
      { name: "Git", icon: "fab fa-git-alt", color: "green", delay: 1.9 },
    ]
  };

  const techStack = persona === 'software' ? softwareTech : dataTech;
  const gradient = "from-green-400 to-green-600";

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
          className="text-5xl font-bold mb-16 text-green-400"
          style={{ textShadow: '0 0 20px rgb(34 197 94)' }}
        >
          Tech Stack
        </motion.h2>
        
        <div className="space-y-12">
          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <motion.h3
                initial={{ x: -20, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.2 }}
                className="text-xl font-bold text-green-400 mb-4 terminal-bullet"
                style={{ textShadow: '0 0 10px rgb(34 197 94)' }}
              >
                <span className="mr-3">▶</span>{category}
              </motion.h3>
              
      <div className="flex flex-wrap justify-center gap-6">
                {technologies.map((tech: TechItem, techIndex: number) => (
                  <motion.div
                    key={tech.name}
                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: tech.delay }}
        className="tech-item group cursor-pointer w-36 sm:w-40"
                    onMouseEnter={() => handleTechHover(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card rounded-xl p-4 text-center hover:glow-green transition-all duration-300"
                      style={{
                        boxShadow: hoveredTech === tech.name 
                          ? '0 0 20px rgba(34, 197, 94, 0.4)' 
                          : '0 0 10px rgba(34, 197, 94, 0.1)'
                      }}
                    >
                      <motion.i
                        className={`${tech.icon} text-3xl mb-2 text-green-400`}
                        animate={{
                          textShadow: hoveredTech === tech.name 
                            ? '0 0 15px rgb(34 197 94)' 
                            : '0 0 5px rgb(34 197 94)'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <motion.h4
                        className="text-sm font-medium text-green-300"
                        animate={{
                          scale: hoveredTech === tech.name ? 1.05 : 1,
                          textShadow: hoveredTech === tech.name 
                            ? '0 0 10px rgb(34 197 94)' 
                            : '0 0 0px rgb(34 197 94)'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech.name}
                      </motion.h4>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
