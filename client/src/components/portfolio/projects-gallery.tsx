import { motion } from "framer-motion";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import databuffImage from "@assets/80fadb14dafb36ce23513171477d2437bf2defc43f3205a8661e9546547bc5f2_1754629809767.png";

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
  github?: string;
  demo?: string;
}

export function ProjectsGallery({ persona, isMobile }: ProjectsGalleryProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const softwareProjects: Project[] = [
    {
      title: "DataBuff",
      description: "An AI-powered data preprocessing platform where users chat with 'BuffBot' to transform raw datasets into insights using natural language commands.",
      image: databuffImage,
      tags: ["Flask", "React", "AI", "Google Cloud", "OAuth", "Pandas", "OpenRouter"],
      hover: "🤖 AI-powered data magic...",
      github: "https://github.com/rafayak1/bda-project",
    },
    {
      title: "Raasta Trip Booking",
      description: "A dynamic trip booking platform with smart search filters, handling 10,000+ records with optimized performance for seamless user experience.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Django", "PostgreSQL", "RESTful APIs", "Search Optimization", "Database Design"],
      hover: "✈️ Book your next adventure...",
      demo: "https://raasta.com.pk/",
    },
  ];

  const dataProjects: Project[] = [
    {
      title: "DataBuff",
      description: "An AI-powered data preprocessing platform where users chat with 'BuffBot' to transform raw datasets into insights using natural language commands.",
      image: databuffImage,
      tags: ["Flask", "AI", "Data Science", "Pandas", "Visualization", "Google Cloud", "Firestore"],
      hover: "🤖 AI-powered data magic...",
      github: "https://github.com/rafayak1/bda-project",
    },
    {
      title: "MetaPulse",
      description: "A production-grade data pipeline processing 1.2M NYC taxi records through automated ETL workflows with real-time dashboard insights.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Airflow", "PostgreSQL", "Docker", "Metabase", "ETL", "Data Warehouse", "DAGs"],
      hover: "📊 Processing 1.2M trips...",
      github: "https://github.com/rafayak1/metapulse",
    },
    {
      title: "AWS Data Pipeline",
      description: "An end-to-end serverless data pipeline orchestrating data ingestion, transformation, and analytics using AWS cloud-native services.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["AWS", "Lambda", "Athena", "Step Functions", "Python", "Serverless", "Cloud Architecture"],
      hover: "☁️ AWS cloud architecture...",
      github: "https://github.com/rafayak1/aws-data-pipeline",
    },
    {
      title: "Sentiment Analysis",
      description: "A comprehensive machine learning study comparing multiple models for sentiment classification with detailed performance analysis.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Machine Learning", "NLP", "Python", "Jupyter", "Model Comparison", "Classification"],
      hover: "🧠 ML sentiment analysis...",
      github: "https://github.com/rafayak1/Sentiment-Analysis-using-ML-Models",
    },
    {
      title: "E-Commerce EDA",
      description: "A comprehensive exploratory data analysis uncovering customer behavior patterns and sales trends through statistical modeling and visualization.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Data Analysis", "EDA", "Python", "Pandas", "Statistical Modeling", "Business Intelligence"],
      hover: "📈 E-commerce insights...",
      github: "https://github.com/rafayak1/Data-Science-Project",
    },
    {
      title: "NYC Accidents Visualization",
      description: "An interactive web dashboard visualizing NYC motor vehicle collision hotspots and trends with real-time filtering capabilities.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Streamlit", "Visualization", "Python", "Interactive Dashboard", "Geospatial Analysis", "Public Safety"],
      hover: "🗽 NYC data visualization...",
      github: "https://github.com/rafayak1/NYC_Accidents_Visualization",
    },
  ];

  const projects = persona === 'software' ? softwareProjects : dataProjects;
  const gradient = "from-green-400 to-green-600";

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={isVisible ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className={`glass-card rounded-2xl overflow-hidden hover:glow-${persona === 'software' ? 'blue' : 'violet'} transition-all duration-300`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
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
                
                <div className="p-4">
                  <motion.h3
                    className="text-lg font-semibold text-slate-50 mb-2"
                    layoutId={`title-${project.title}`}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-slate-300 mb-4 text-sm line-clamp-3"
                    layoutId={`description-${project.title}`}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    layoutId={`tags-${project.title}`}
                  >
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className={`${
                          persona === 'software' 
                            ? tagIndex === 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-violet-500/20 text-violet-400'
                            : tagIndex === 0 ? 'bg-violet-500/20 text-violet-400' : 'bg-cyan-500/20 text-cyan-400'
                        } px-2 py-1 rounded-full text-xs`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-slate-400 text-xs px-2 py-1">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </motion.div>
                  
                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-2"
                    initial={{ y: 10, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <i className="fab fa-github" />
                        GitHub
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 bg-gradient-to-r ${persona === 'software' ? 'from-blue-500 to-violet-500' : 'from-violet-500 to-cyan-500'} hover:from-blue-600 hover:to-violet-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2`}
                      >
                        <i className="fas fa-external-link-alt" />
                        Live Demo
                      </motion.a>
                    )}
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
