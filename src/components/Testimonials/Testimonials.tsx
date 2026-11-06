import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

export const Testimonials: React.FC = () => {
  const list = [
    {
      name: 'Clara Mendes',
      role: 'Secretária de Educação',
      avatar: 'CM',
      text: 'O GESTOR transformou a comunicação na nossa rede municipal. Os pais agora acompanham de perto e participam muito mais do dia a dia escolar dos alunos.',
      stars: 5
    },
    {
      name: 'Ricardo Santos',
      role: 'Diretor Escolar',
      avatar: 'RS',
      text: 'A supervisão em tempo real me deu a visibilidade e o controle que eu precisava. As decisões agora são baseadas em dados confiáveis de frequência e desempenho.',
      stars: 5
    },
    {
      name: 'Mariana Oliveira',
      role: 'Coordenadora Pedagógica',
      avatar: 'MO',
      text: 'Automatizar matrículas e diários de classe poupou horas preciosas de nossa equipe. A plataforma é leve, bonita e incrivelmente simples de usar.',
      stars: 5
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 } as const
    }
  };

  return (
    <section className={`${styles.testimonials} section-padding`}>
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className={`${styles.header} text-center`}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className={styles.badge}>Depoimentos</span>
          <h2 className={styles.title}>Quem usa, aprova</h2>
          <p className={styles.subtitle}>
            Descubra como redes de ensino e escolas estão alcançando excelência administrativa e pedagógica com o GESTOR.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {list.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              variants={cardVariants}
            >
              <Quote size={40} className={styles.quoteIcon} />
              <div>
                <div className={styles.stars}>
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className={styles.content}>"{item.text}"</p>
              </div>
              <div className={styles.userProfile}>
                <div className={styles.avatar}>
                  {item.avatar}
                </div>
                <div className={styles.userInfo}>
                  <span className={styles.userName}>{item.name}</span>
                  <span className={styles.userRole}>{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonials;
