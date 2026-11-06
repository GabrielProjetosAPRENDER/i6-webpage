import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Building, Users, Activity } from 'lucide-react';
import styles from './Numbers.module.css';

interface CounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ 
  value, 
  decimals = 0, 
  prefix = '', 
  suffix = '', 
  duration = 1500 
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = progress * value;
      setCount(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  const formattedCount = count.toFixed(decimals).replace('.', ',');

  return (
    <span ref={elementRef}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
};

export const Numbers: React.FC = () => {
  const stats = [
    {
      icon: <Calendar size={24} />,
      counter: <Counter value={10} prefix="+" suffix=" Anos" />,
      label: 'Experiência no Setor'
    },
    {
      icon: <Building size={24} />,
      counter: <Counter value={40} prefix="+" />,
      label: 'Municípios Atendidos'
    },
    {
      icon: <Users size={24} />,
      counter: <Counter value={150} suffix=" mil+" />,
      label: 'Cidadãos Impactados'
    },
    {
      icon: <Activity size={24} />,
      counter: <Counter value={99.9} decimals={1} suffix="%" />,
      label: 'Uptime das Soluções'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 } as const
    }
  };

  return (
    <section className={`${styles.numbers} section-padding`}>
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />
      
      <div className="container">
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <div className={styles.iconWrapper}>
                {stat.icon}
              </div>
              <div className={styles.number}>
                {stat.counter}
              </div>
              <div className={styles.label}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Numbers;
