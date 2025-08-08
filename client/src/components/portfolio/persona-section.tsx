import { motion } from "framer-motion";
import { AboutSection } from "./about-section";
import { TechStack } from "./tech-stack";
import { ExperienceTimeline } from "./experience-timeline";
import { ProjectsGallery } from "./projects-gallery";

interface PersonaSectionProps {
  persona: 'software' | 'data';
  isMobile: boolean;
}

export function PersonaSection({ persona, isMobile }: PersonaSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="scroll-snap-container"
    >
      <AboutSection persona={persona} isMobile={isMobile} />
      <TechStack persona={persona} isMobile={isMobile} />
      <ExperienceTimeline persona={persona} isMobile={isMobile} />
      <ProjectsGallery persona={persona} isMobile={isMobile} />
    </motion.div>
  );
}
