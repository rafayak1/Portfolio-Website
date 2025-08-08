import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface CommunityExperienceProps {
  persona: 'software' | 'data';
  isMobile: boolean;
}

interface CommunityItem {
  organization: string;
  role: string;
  description: string[];
  tags: string[];
  icon: string;
  metrics?: { value: number; label: string; suffix?: string }[];
}

export function CommunityExperience({ persona, isMobile }: CommunityExperienceProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const communityExperience: CommunityItem[] = [
    {
      organization: "AI Community of Pakistan",
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
          className="text-5xl font-bold text-center mb-16 text-green-400"
          style={{ textShadow: '0 0 20px rgb(34 197 94)' }}
        >
          Community Experience
        </motion.h2>
        
        <div className="space-y-8">
          {communityExperience.map((exp, index) => (
            <motion.div
              key={exp.organization}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="community-card glass-card rounded-2xl p-8 hover:glow-green transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center"
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
                    {exp.organization}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="text-green-400 mb-4"
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
                      className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4"
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
                      <motion.span
                        key={tag}
                        initial={{ scale: 0 }}
                        animate={isVisible ? { scale: 1 } : { scale: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + 0.7 + tagIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30"
                      >
                        {tag}
                      </motion.span>
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