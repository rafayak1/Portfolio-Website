import { motion } from "framer-motion";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface ProjectsGalleryProps {
  persona: 'software' | 'data';
  isMobile: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  hover?: string;
}

export function ProjectsGallery({ persona, isMobile }: ProjectsGalleryProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const softwareProjects: Project[] = [
    {
      title: "DataBuff",
      description: "Full-stack web app that auto-generates Pandas code for data cleaning with 85%+ test coverage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "React"],
      hover: "🔄 Auto-generating cleaning code...",
    },
    {
      title: "Raasta Trip Booking",
      description: "Travel booking platform with advanced search filters and well-designed PostgreSQL schema.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Django", "PostgreSQL"],
      hover: "✈️ Booking your next adventure...",
    },
  ];

  const dataProjects: Project[] = [
    {
      title: "MetaPulse",
      description: "NYC-Taxi data pipeline and dashboarding system handling 1.2 million trips with real-time analytics.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Spark", "Real-time"],
      hover: "📊 Processing 1.2M trips...",
    },
    {
      title: "DataBuff Analytics",
      description: "Zero-code data science enabler for analysts with automated pipeline generation and visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Zero-Code", "Analytics"],
      hover: "🚀 No-code magic in action...",
    },
  ];

  const projects = persona === 'software' ? softwareProjects : dataProjects;
  const gradient = persona === 'software' ? "from-blue-400 to-violet-400" : "from-violet-400 to-cyan-400";

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 scroll-snap-section"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl font-bold mb-16 text-center bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={isVisible ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="project-card group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`glass-card rounded-2xl overflow-hidden hover:glow-${persona === 'software' ? 'blue' : 'violet'} transition-all duration-300`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: hoveredProject === project.title ? 1 : 0.8, 
                        opacity: hoveredProject === project.title ? 1 : 0 
                      }}
                      className="text-center text-white"
                    >
                      <div className="text-2xl mb-2">🎬</div>
                      <div className="text-sm">{project.hover}</div>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold text-slate-50 mb-2"
                    layoutId={`title-${project.title}`}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-slate-300 mb-4"
                    layoutId={`description-${project.title}`}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div
                    className="flex gap-2"
                    layoutId={`tags-${project.title}`}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className={`${
                          persona === 'software' 
                            ? tagIndex === 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-violet-500/20 text-violet-400'
                            : tagIndex === 0 ? 'bg-violet-500/20 text-violet-400' : 'bg-cyan-500/20 text-cyan-400'
                        } px-3 py-1 rounded-full text-sm`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
