import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

export const CustomCursor: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleTouchStart = () => {
      setIsMobile(true);
      document.body.style.cursor = 'auto';
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    if (isMobile) {
      document.body.style.cursor = 'auto';
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Hide native cursor
    document.body.style.cursor = 'none';

    // Set initial offscreen positions
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Inner dot: Instant tracking
      gsap.to(dot, {
        x: x,
        y: y,
        duration: 0,
        overwrite: 'auto'
      });

      // Outer ring: Slight delay/inertia
      gsap.to(ring, {
        x: x,
        y: y,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const handleMouseEnterInteractive = () => {
      if (!ring || !dot) return;
      gsap.to(ring, {
        scale: 1.6,
        borderColor: 'rgba(37, 99, 235, 0.8)',
        backgroundColor: 'rgba(37, 99, 235, 0.05)',
        duration: 0.2,
        overwrite: 'auto'
      });
      gsap.to(dot, {
        scale: 0.5,
        backgroundColor: 'var(--color-primary)',
        duration: 0.2,
        overwrite: 'auto'
      });
    };

    const handleMouseLeaveInteractive = () => {
      if (!ring || !dot) return;
      gsap.to(ring, {
        scale: 1,
        borderColor: 'rgba(37, 99, 235, 0.4)',
        backgroundColor: 'transparent',
        duration: 0.3,
        overwrite: 'auto'
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: 'var(--color-primary)',
        duration: 0.3,
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Attach listeners to interactive elements
    const attachInteractiveListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .btn');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
        
        // Ensure interactive elements have cursor pointers disabled so our custom cursor is clear
        (el as HTMLElement).style.cursor = 'none';
      });
    };

    attachInteractiveListeners();

    // Create a MutationObserver to watch for dynamic DOM changes (e.g. page changes, modal openings)
    const observer = new MutationObserver(() => {
      attachInteractiveListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div ref={cursorDotRef} className={styles.cursorDot} />
      <div ref={cursorRingRef} className={styles.cursorRing} />
    </>
  );
};

export default CustomCursor;
