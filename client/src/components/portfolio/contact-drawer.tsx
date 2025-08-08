import { motion, AnimatePresence } from "framer-motion";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactItem {
  type: string;
  label: string;
  value: string;
  icon: string;
  color: string;
  href: string;
}

export function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const contactItems: ContactItem[] = [
    {
      type: "Email",
      label: "rafay.ahmedkhan@colorado.edu",
      value: "Send email",
      icon: "fas fa-envelope",
      color: "violet",
      href: "mailto:rafay.ahmedkhan@colorado.edu",
    },
    {
      type: "LinkedIn",
      label: "Connect with me",
      value: "Professional network",
      icon: "fab fa-linkedin",
      color: "cyan",
  href: "https://linkedin.com/in/rafaykhan11",
    },
    {
      type: "GitHub",
      label: "View my code",
      value: "Open source projects",
      icon: "fab fa-github",
      color: "emerald",
  href: "https://github.com/rafayak1",
    },
    {
      type: "Live Demo",
      label: "See my work",
      value: "Interactive showcase",
      icon: "fas fa-external-link-alt",
      color: "orange",
  href: "https://raasta.com.pk",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-96 max-w-[90vw] glass-card border-l border-slate-700 z-50"
          >
            <div className="p-8 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <motion.h3
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-slate-50"
                >
                  Get In Touch
                </motion.h3>
                
                <motion.button
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-50 transition-colors p-2"
                >
                  <i className="fas fa-times text-xl" />
                </motion.button>
              </div>
              
              {/* Contact Items */}
              <div className="space-y-4 flex-1">
                {contactItems.map((item, index) => (
                  <motion.a
                    key={item.type}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.4 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="contact-item flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 bg-${item.color}-500/20 rounded-xl flex items-center justify-center group-hover:bg-${item.color}-500/30 transition-colors`}
                    >
                      <i className={`${item.icon} text-${item.color}-400`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <p className="text-slate-300 text-sm">{item.type}</p>
                      <p className="text-slate-50 font-medium">{item.label}</p>
                      <p className="text-slate-400 text-xs">{item.value}</p>
                    </div>
                    
                    <motion.i
                      className="fas fa-arrow-right text-slate-400 group-hover:text-slate-300"
                      whileHover={{ x: 5 }}
                    />
                  </motion.a>
                ))}
              </div>
              
              {/* Footer removed per request */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
