import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useMagnetic = (triggerRadius = 60, strength = 0.35) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const elX = rect.left + rect.width / 2;
      const elY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const distX = mouseX - elX;
      const distY = mouseY - elY;
      const dist = Math.hypot(distX, distY);

      if (dist < triggerRadius) {
        // Calculate dynamic pull based on distance
        const pullX = distX * strength;
        const pullY = distY * strength;

        gsap.to(el, {
          x: pullX,
          y: pullY,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else {
        // Reset to original position
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
          overwrite: 'auto'
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (el) {
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [triggerRadius, strength]);

  return ref;
};

export default useMagnetic;
