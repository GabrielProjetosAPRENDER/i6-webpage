import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useTilt = (maxRotate = 10, scale = 1.02) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set perspective on the parent element for 3D rendering
    if (el.parentElement) {
      el.parentElement.style.perspective = '1000px';
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      // Get mouse position relative to card center
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;

      // Calculate percentage offsets
      const percentX = mouseX / (width / 2);
      const percentY = mouseY / (height / 2);

      // Calculate degrees of rotation (note: rotating around Y axis is driven by horizontal offset, X axis by vertical offset)
      const rotateX = -percentY * maxRotate;
      const rotateY = percentX * maxRotate;

      gsap.to(el, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
        transformPerspective: 1000,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [maxRotate, scale]);

  return ref;
};

export default useTilt;
