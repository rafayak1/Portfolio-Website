import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
  className="fixed bottom-4 left-4 z-40"
    >
      <a
        href="https://github.com/rafayak1/Portfolio-Website/tree/final"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors shadow-lg"
        aria-label="Made by Rafay - view source on GitHub"
      >
        <span className="text-sm">Made by Rafay</span>
        <i className="fab fa-github text-lg" />
      </a>
    </motion.div>
  );
}
