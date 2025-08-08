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
  description: string[];
  tags: string[];
  icon: string;
  metrics?: { value: number; label: string; suffix?: string }[];
}

export function ExperienceTimeline({ persona, isMobile }: ExperienceTimelineProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const softwareExperience: Experience[] = [
    {
      company: "Meta",
      role: "Data Engineer Intern",
      description: [
        "Built and deployed scalable batch pipelines using dbt, Apache Spark, Apache Airflow, and Apache Hive to process over 2B records daily",
        "Collaborated with research scientists to productionize LLM features, improving model recall by 9% and reducing query latency by 35%", 
        "Developed interactive dashboards using Tableau and advanced SQL, decreasing manual query time by 70% for 50+ internal users",
        "Built and launched an AI-powered onboarding assistant, reducing onboarding time by 60% across 7+ teams"
      ],
      tags: ["LLM Features", "ML Engineering", "Data Pipelines"],
      icon: "fab fa-meta",
      metrics: [
        { value: 9, label: "Model Recall Improvement", suffix: "%" },
        { value: 35, label: "Query Latency Reduction", suffix: "%" },
        { value: 70, label: "Manual Query Time Reduction", suffix: "%" },
        { value: 60, label: "Onboarding Time Reduction", suffix: "%" },
      ],
    },
    {
      company: "Volga Partners",
      role: "Software Engineer",
      description: [
        "Engineered an AI SaaS product, Amethyst, utilizing LangChain and OpenAI LLMs, efficiently processing up to 10,000+ user queries daily",
        "Collaborated with a cross-functional team following Agile methodologies (Scrum) to deliver modular data import and Q&A features",
        "Solved performance bottlenecks by implementing caching mechanisms and optimizing database queries, leading to a 25% reduction in UI load times",
        "Automated performance monitoring and error logging, improving system reliability and reducing downtime by 30%"
      ],
      tags: ["AI SaaS", "Performance Optimization", "Agile Development"],
      icon: "fas fa-rocket",
      metrics: [
        { value: 10000, label: "Daily Queries", suffix: "+" },
        { value: 25, label: "UI Load Time Reduction", suffix: "%" },
        { value: 30, label: "Downtime Reduction", suffix: "%" },
      ],
    },
  ];

  const dataExperience: Experience[] = [
    {
      company: "Meta",
      role: "Data Engineer Intern",
      description: [
        "Built and deployed scalable batch pipelines using dbt, Apache Spark, Apache Airflow, and Apache Hive to process TBs of records daily",
        "Collaborated with research scientists to productionize LLM features, improving model recall by 9% and reducing query latency by 35%",
        "Developed interactive dashboards using Tableau and advanced SQL to expose model outputs and metrics, decreasing manual query time by 70%", 
        "Built and launched an AI-powered onboarding assistant for an internal platform, reducing onboarding time by 60% across 7+ teams"
      ],
      tags: ["Big Data", "ML Pipelines", "Research Collaboration"],
      icon: "fab fa-meta",
      metrics: [
        { value: 9, label: "LLM Recall Improvement", suffix: "%" },
        { value: 35, label: "Query Latency Reduction", suffix: "%" },
        { value: 70, label: "Manual Query Time Reduction", suffix: "%" },
        { value: 60, label: "Onboarding Time Reduction", suffix: "%" },
      ],
    },
    {
      company: "Infolyze Solutions",
      role: "Data Engineer",
      description: [
        "Engineered scalable data infrastructures for 6 client projects using Python, Google Cloud, and AWS, processing over 10 GB of data daily",
        "Optimized ETL processes with Apache Airflow, reducing data integration time by 30%", 
        "Implemented advanced data processing systems using Apache Spark on Databricks, enhancing data retrieval speeds by 20%",
        "Automated data validation on BigQuery with Python-driven checks, reducing manual validation by 50% and increasing client satisfaction by 40%"
      ],
      tags: ["ETL Optimization", "Cloud Infrastructure", "Client Solutions"],
      icon: "fas fa-chart-line",
      metrics: [
        { value: 30, label: "Integration Time Reduction", suffix: "%" },
        { value: 20, label: "Retrieval Speed Boost", suffix: "%" },
        { value: 50, label: "Manual Validation Reduction", suffix: "%" },
        { value: 40, label: "Client Satisfaction Increase", suffix: "%" },
      ],
    },
    {
      company: "AI Community of Pakistan",
      role: "President Academics",
      description: [
        "Led 30+ volunteers across multiple academic teams",
        "Organized 5 seminars with prominent AI industry leaders", 
        "Conducted 3 coding competitions on HackerRank attracting 250+ nationwide participants"
      ],
      tags: ["Leadership", "Community", "AI Education"],
      icon: "fas fa-users",
      metrics: [
        { value: 30, label: "Team Members Led", suffix: "+" },
        { value: 5, label: "AI Seminars Organized", suffix: "" },
        { value: 250, label: "Competition Participants", suffix: "+" },
      ],
    },
  ];

  const dataExperienceWithAI = [
    ...dataExperience,
    {
      company: "AI Community of Pakistan",
      role: "President Academics",
      description: [
        "Led 30+ volunteers across multiple academic teams",
        "Organized 5 seminars with prominent AI industry leaders", 
        "Conducted 3 coding competitions on HackerRank attracting 250+ nationwide participants"
      ],
      tags: ["Leadership", "Community", "AI Education"],
      icon: "fas fa-users",
      metrics: [
        { value: 30, label: "Team Members Led", suffix: "+" },
        { value: 5, label: "AI Seminars Organized", suffix: "" },
        { value: 250, label: "Competition Participants", suffix: "+" },
      ],
    },
  ];

  const experiences = persona === 'software' ? softwareExperience : dataExperienceWithAI;
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
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="mb-4"
                  >
                    {exp.description.map((bullet, bulletIndex) => (
                      <motion.div
                        key={bulletIndex}
                        initial={{ x: -10, opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + bulletIndex * 0.1 }}
                        className="flex items-start mb-2 text-sm"
                      >
                        <span className="terminal-bullet mr-3 mt-1 text-xs">▶</span>
                        <span className="text-slate-300 leading-relaxed">{bullet}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {exp.metrics && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4"
                    >
                      {exp.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-xl md:text-2xl font-bold text-slate-50">
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
