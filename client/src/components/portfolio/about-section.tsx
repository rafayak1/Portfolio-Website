import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profileImage from "@assets/Screenshot 2022-06-29 at 3.33.40 AM_1754628874300.png";
import dataResumeUrl from "@assets/Data_Resume.pdf";
import softwareResumeUrl from "@assets/SWE_Resume.pdf";

interface AboutSectionProps {
  persona: 'software' | 'data';
  isMobile: boolean;
}

export function AboutSection({ persona, isMobile }: AboutSectionProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const viewBtnRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const prevActiveElementRef = useRef<HTMLElement | null>(null);
  const [escClosing, setEscClosing] = useState(false);
  const escTimeoutRef = useRef<number | null>(null);

  // Focus trap + Esc to close
  useEffect(() => {
    if (!isResumeOpen) return;

    prevActiveElementRef.current = (document.activeElement as HTMLElement) || null;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input[type="text"]:not([disabled])',
      'input[type="radio"]:not([disabled])',
      'input[type="checkbox"]:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    const focusFirstElement = () => {
      const container = modalRef.current;
      if (!container) return;
      const focusables = Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors)).filter(
        (el) => el.offsetParent !== null || el === container,
      );
      if (focusables.length > 0) {
        focusables[0].focus();
      } else {
        container.focus();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        // Pulse the backdrop quickly to give feedback, then close
        setEscClosing(true);
        if (escTimeoutRef.current) {
          clearTimeout(escTimeoutRef.current);
        }
        escTimeoutRef.current = window.setTimeout(() => {
          setIsResumeOpen(false);
          setEscClosing(false);
        }, 180);
        return;
      }
      if (e.key === 'Tab') {
        const container = modalRef.current;
        if (!container) return;
        const focusables = Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors)).filter(
          (el) => el.offsetParent !== null,
        );
        if (focusables.length === 0) {
          e.preventDefault();
          container.focus();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    const raf = requestAnimationFrame(focusFirstElement);
    document.addEventListener('keydown', onKeyDown, true);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKeyDown, true);
      if (escTimeoutRef.current) {
        clearTimeout(escTimeoutRef.current);
        escTimeoutRef.current = null;
      }
      // Restore focus to the trigger if possible
      if (viewBtnRef.current) {
        viewBtnRef.current.focus();
      } else if (prevActiveElementRef.current) {
        prevActiveElementRef.current.focus();
      }
    };
  }, [isResumeOpen]);

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
            className="text-5xl font-bold text-green-400"
            style={{ textShadow: '0 0 20px rgb(34 197 94)' }}
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
                className={`bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30 ${badge.text === '4.0 CGPA' ? 'animate-pulse-glow' : ''}`}
              >
                <span className={`text-green-300 ${badge.text === '4.0 CGPA' ? 'font-bold' : ''}`}>
                  {badge.icon} {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Resume Actions */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="pt-4 flex flex-wrap gap-4"
          >
            {/* View Resume (opens modal) */}
            <motion.button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 0 25px rgba(34, 197, 94, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-4 bg-transparent text-green-300 font-bold text-lg rounded-xl transition-all duration-300 border border-green-400/50 shadow-lg hover:text-black hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-400/30"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)', boxShadow: '0 4px 12px rgba(34, 197, 94, 0.2)' }}
              ref={viewBtnRef}
            >
              <i className="fas fa-eye" />
              <span>View {persona === 'software' ? 'Software' : 'Data'} Resume</span>
            </motion.button>

            {/* Download Resume */}
            <motion.a
              href={persona === 'software' ? softwareResumeUrl : dataResumeUrl}
              download={persona === 'software' ? "Rafay_SWE_Resume.pdf" : "Rafay_Data_Resume.pdf"}
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 0 25px rgba(34, 197, 94, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold text-lg rounded-xl transition-all duration-300 border border-green-400/30 shadow-lg"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)', boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)' }}
            >
              <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="text-2xl">📄</motion.div>
              <span>Download {persona === 'software' ? 'Software' : 'Data'} Resume</span>
              <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="text-xl">⬇️</motion.div>
            </motion.a>
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
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-2xl" />
        </motion.div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={escClosing ? { opacity: [1, 0.8, 1] } : { opacity: 1 }}
              transition={escClosing ? { duration: 0.18 } : undefined}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
            />

            {/* Modal container */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <motion.div
                className="relative w-full max-w-5xl h-[80vh] bg-slate-900/95 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 glass-card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="resume-modal-title"
                tabIndex={-1}
                ref={modalRef}
              >
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-3 bg-slate-900/80 border-b border-slate-700 z-10">
                  <div className="flex items-center gap-3 text-slate-300">
                    <i className="fas fa-file-pdf text-red-400" />
                    <span id="resume-modal-title" className="text-sm">{persona === 'software' ? 'Software' : 'Data'} Resume</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={persona === 'software' ? softwareResumeUrl : dataResumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200"
                    >
                      Open in new tab
                    </a>
                    <button
                      onClick={() => setIsResumeOpen(false)}
                      className="p-2 rounded-md hover:bg-slate-800 text-slate-300"
                      aria-label="Close resume"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>

                {/* PDF content */}
                <div className="w-full h-full pt-10">
                  <iframe
                    title="Resume"
                    src={(persona === 'software' ? softwareResumeUrl : dataResumeUrl) + '#view=FitH'}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
