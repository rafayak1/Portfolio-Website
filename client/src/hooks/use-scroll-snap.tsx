import { useEffect } from "react";

export function useScrollSnap(enabled: boolean = true) {
  useEffect(() => {
    if (enabled) {
      document.body.style.scrollSnapType = 'y mandatory';
      
      // Add scroll snap to all sections
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.style.scrollSnapAlign = 'start';
      });
    } else {
      document.body.style.scrollSnapType = 'none';
    }

    return () => {
      document.body.style.scrollSnapType = 'none';
    };
  }, [enabled]);
}
