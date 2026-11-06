import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import styles from './CTA.module.css';

interface CTAProps {
  onOpenDemoModal: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenDemoModal }) => {
  return (
    <section className={styles.cta}>
      <div className={styles.shape1} />
      <div className={styles.shape2} />
      
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Pronto para modernizar a gestão pública do seu município?
        </motion.h2>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Fale com nossa equipe de especialistas, solicite uma demonstração gratuita das nossas soluções e veja como a tecnologia pode simplificar o seu dia a dia.
        </motion.p>
        
        <motion.button 
          className={styles.button}
          onClick={onOpenDemoModal}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Calendar size={18} />
          Agendar Demonstração Gratuita
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
