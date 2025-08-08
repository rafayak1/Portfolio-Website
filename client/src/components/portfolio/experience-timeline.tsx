import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface ExperienceTimelineProps {
  persona: 'software' | 'data';
  isMobile: boolean;
}

interface Experience {
  company: string;
  role: string;
  description: string;
  tags: string[];
  icon: string;
  metrics?: { value: number; label: string; suffix?: string }[];
}

export function ExperienceTimeline({ persona, isMobile }: ExperienceTimelineProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const softwareExperience: Experience[] = [
    {
      company: "Meta",
      role: "Software Engineer Intern",
      description: "Collaborated with researchers to launch new LLM features while reducing query latency by approximately 35%.",
      tags: ["LLM Optimization", "Research Collaboration"],
      icon: "fab fa-meta",
      metrics: [
        { value: 35, label: "Query Latency Reduction", suffix: "%" },
      ],
    },
    {
      company: "Volga Partners",
      role: "Software Engineer",
      description: "Engineered an AI SaaS that handles 10,000+ user queries daily and cut UI load time by approximately 25%.",
      tags: ["AI SaaS", "Performance Optimization"],
      icon: "fas fa-rocket",
      metrics: [
        { value: 10000, label: "Daily Queries", suffix: "+" },
        { value: 25, label: "UI Load Time Reduction", suffix: "%" },
      ],
    },
  ];

  const dataExperience: Experience[] = [
    {
      company: "Meta",
      role: "Data Engineer Intern",
      description: "Built batch pipelines processing terabytes daily, improved LLM recall by 9% while cutting query latency by 35%.",
      tags: ["Big Data", "Pipeline Engineering"],
      icon: "fab fa-meta",
      metrics: [
        { value: 9, label: "LLM Recall Improvement", suffix: "%" },
        { value: 35, label: "Query Latency Reduction", suffix: "%" },
      ],
    },
    {
      company: "Infolyze Solutions",
      role: "Data Engineer",
      description: "Optimized ETL for six client projects, trimming integration time by 30% and boosting retrieval speed by 20%.",
      tags: ["ETL Optimization", "Client Solutions"],
      icon: "fas fa-chart-line",
      metrics: [
        { value: 30, label: "Integration Time Reduction", suffix: "%" },
        { value: 20, label: "Retrieval Speed Boost", suffix: "%" },
      ],
    },
  ];

  const experiences = persona === 'software' ? softwareExperience : dataExperience;
  const gradient = persona === 'software' ? "from-blue-400 to-violet-400" : "from-violet-400 to-cyan-400";

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 scroll-snap-section"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl font-bold mb-16 text-center bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="experience-card glass-card rounded-2xl p-8 hover:glow-blue transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${
                    persona === 'software' 
                      ? index === 0 ? 'from-blue-500 to-violet-500' : 'from-violet-500 to-cyan-500'
                      : index === 0 ? 'from-violet-500 to-cyan-500' : 'from-cyan-500 to-blue-500'
                  } rounded-xl flex items-center justify-center`}
                >
                  <i className={`${exp.icon} text-2xl text-white`} />
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="text-2xl font-semibold text-slate-50 mb-2"
                  >
                    {exp.company}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className={`${persona === 'software' ? 'text-blue-400' : 'text-violet-400'} mb-4`}
                  >
                    {exp.role}
                  </motion.p>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="text-slate-300 mb-4"
                  >
                    {exp.description}
                  </motion.p>
                  
                  {exp.metrics && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      className="flex gap-6 mb-4"
                    >
                      {exp.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-slate-50">
                            <AnimatedCounter
                              value={metric.value}
                              suffix={metric.suffix}
                              isVisible={isVisible}
                              delay={index * 0.2 + metricIndex * 0.1}
                            />
                          </div>
                          <div className="text-xs text-slate-400">{metric.label}</div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    className="flex gap-4"
                  >
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`${
                          persona === 'software' 
                            ? tagIndex === 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-violet-500/20 text-violet-400'
                            : tagIndex === 0 ? 'bg-violet-500/20 text-violet-400' : 'bg-cyan-500/20 text-cyan-400'
                        } px-3 py-1 rounded-full text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
