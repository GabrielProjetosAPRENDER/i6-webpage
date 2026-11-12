import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { useMagnetic } from '../../hooks/useMagnetic';
import Logo from '../Logo/Logo';

interface NavbarProps {
  onOpenDemoModal: () => void;
  activeRoute: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal, activeRoute }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ctaRef = useMagnetic(50, 0.3) as React.RefObject<HTMLButtonElement | null>;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setIsScrolled(prev => prev ? prev : true);
      } else {
        setIsScrolled(prev => !prev ? prev : false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (route: string) => {
    if (route === '#/') {
      return activeRoute === '#/' || activeRoute === '#' || activeRoute === '';
    }
    return activeRoute.startsWith(route);
  };

  // All pages now feature a luminous light GovTech design, so navbar text is always dark and legible.
  const isDarkHeroPage = false;
  const textThemeClass = styles.darkText;

  return (
    <>
      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${textThemeClass}`} role="banner">
        <div className={styles.container}>
          <a href="#/" className={styles.logoContainer} aria-label="i6 Systems Home" onClick={closeMobileMenu}>
            <Logo lightText={!isScrolled && isDarkHeroPage} size={32} />
          </a>

          {/* Desktop Nav Links */}
          <nav className={styles.navLinks} aria-label="Navegação Principal">
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <a href="#/" className={isActive('#/') ? styles.active : ''}>Home</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#/sobre" className={isActive('#/sobre') ? styles.active : ''}>Sobre</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#/solucoes" className={isActive('#/solucoes') ? styles.active : ''}>Soluções</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#/gestor" className={isActive('#/gestor') ? styles.active : ''}>Gestor Educ</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#/avaee" className={isActive('#/avaee') ? styles.active : ''}>AVAEE GD</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#/contato" className={isActive('#/contato') ? styles.active : ''}>Contato</a>
              </li>
            </ul>
            <motion.button 
              ref={ctaRef}
              className={styles.ctaButton}
              onClick={onOpenDemoModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Solicitar Demonstração"
            >
              Solicitar Demonstração
              <ArrowRight size={15} />
            </motion.button>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button 
            className={styles.hamburger} 
            onClick={toggleMobileMenu}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className={styles.backdrop}
            />
            
            <motion.nav 
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              aria-label="Navegação Mobile"
            >
              <div className={styles.mobileMenuHeader}>
                <Logo lightText={false} size={30} />
                <button className={styles.closeButton} onClick={closeMobileMenu}>
                  <X size={24} />
                </button>
              </div>
              <ul className={styles.mobileMenuList}>
                <li className={styles.mobileMenuItem}>
                  <a href="#/" className={isActive('#/') ? styles.activeMobile : ''} onClick={closeMobileMenu}>Home</a>
                </li>
                <li className={styles.mobileMenuItem}>
                  <a href="#/sobre" className={isActive('#/sobre') ? styles.activeMobile : ''} onClick={closeMobileMenu}>Sobre</a>
                </li>
                <li className={styles.mobileMenuItem}>
                  <a href="#/solucoes" className={isActive('#/solucoes') ? styles.activeMobile : ''} onClick={closeMobileMenu}>Soluções</a>
                </li>
                <li className={styles.mobileMenuItem}>
                  <a href="#/gestor" className={isActive('#/gestor') ? styles.activeMobile : ''} onClick={closeMobileMenu}>Gestor Educ</a>
                </li>
                <li className={styles.mobileMenuItem}>
                  <a href="#/avaee" className={isActive('#/avaee') ? styles.activeMobile : ''} onClick={closeMobileMenu}>AVAEE GD</a>
                </li>
                <li className={styles.mobileMenuItem}>
                  <a href="#/contato" className={isActive('#/contato') ? styles.activeMobile : ''} onClick={closeMobileMenu}>Contato</a>
                </li>
              </ul>
              
              <button 
                className={styles.mobileCtaButton}
                onClick={() => {
                  closeMobileMenu();
                  onOpenDemoModal();
                }}
              >
                Solicitar Demonstração
                <ArrowRight size={15} />
              </button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
