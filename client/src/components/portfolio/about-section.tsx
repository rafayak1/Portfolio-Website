import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profileImage from "@assets/Screenshot 2022-06-29 at 3.33.40 AM_1754628874300.png";

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
      { icon: "⭐", text: "4.0 CGPA", color: "yellow" },
      { icon: "🤖", text: "AI Enthusiast", color: "violet" },
    ],
    image: profileImage,
    gradient: "from-blue-400 to-violet-400",
  };

  const dataContent = {
    title: "About Me",
    description: "Master's student in Computer Science at CU-Boulder, focused on turning massive datasets into realtime insights and building reliable pipelines that scale.",
    badges: [
      { icon: "🎓", text: "CU-Boulder", color: "violet" },
      { icon: "⭐", text: "4.0 CGPA", color: "yellow" },
      { icon: "📊", text: "Data Science", color: "cyan" },
    ],
    image: profileImage,
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
            className="flex flex-wrap gap-4"
          >
            {content.badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`bg-${badge.color === 'yellow' ? 'yellow' : badge.color}-500/20 px-4 py-2 rounded-full border border-${badge.color === 'yellow' ? 'yellow' : badge.color}-500/30 ${badge.text === '4.0 CGPA' ? 'animate-pulse-glow' : ''}`}
              >
                <span className={`text-${badge.color === 'yellow' ? 'yellow' : badge.color}-400 ${badge.text === '4.0 CGPA' ? 'font-bold' : ''}`}>
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
