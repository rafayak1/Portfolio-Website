import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AboutSectionProps {
  persona: 'software' | 'data';
  isMobile: boolean;
}

export function AboutSection({ persona, isMobile }: AboutSectionProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const softwareContent = {
    title: "About Me",
    description: "Master's student in Computer Science at CU-Boulder who loves crafting AI-powered products that feel magical and fast. I believe in building software that doesn't just work—it delights.",
    badges: [
      { icon: "🎓", text: "CU-Boulder", color: "blue" },
      { icon: "🤖", text: "AI Enthusiast", color: "violet" },
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    gradient: "from-blue-400 to-violet-400",
  };

  const dataContent = {
    title: "About Me",
    description: "Master's student in Computer Science at CU-Boulder, focused on turning massive datasets into realtime insights and building reliable pipelines that scale.",
    badges: [
      { icon: "📊", text: "Data Science", color: "violet" },
      { icon: "⚡", text: "Real-time", color: "cyan" },
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    gradient: "from-violet-400 to-cyan-400",
  };

  const content = persona === 'software' ? softwareContent : dataContent;

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 scroll-snap-section"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-5xl font-bold bg-gradient-to-r ${content.gradient} bg-clip-text text-transparent`}
          >
            {content.title}
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-slate-300 leading-relaxed"
          >
            {content.description}
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4"
          >
            {content.badges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`bg-${badge.color}-500/20 px-4 py-2 rounded-full border border-${badge.color}-500/30`}
              >
                <span className={`text-${badge.color}-400`}>
                  {badge.icon} {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={content.image}
            alt={`${persona} workspace`}
            className="rounded-2xl shadow-2xl w-full h-auto"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${persona === 'software' ? 'from-blue-500/20' : 'from-violet-500/20'} to-transparent rounded-2xl`} />
        </motion.div>
      </div>
    </section>
  );
}
