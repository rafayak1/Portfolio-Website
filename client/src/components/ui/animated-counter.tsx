import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  isVisible: boolean;
  delay?: number;
  duration?: number;
}

export function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "", 
  isVisible, 
  delay = 0,
  duration = 2 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const timeout = setTimeout(() => {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay, duration]);

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className="tabular-nums"
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
}
