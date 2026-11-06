import React from 'react';
import { motion } from 'framer-motion';
import { School, Eye, Network, LayoutGrid, MessageSquare, FileCheck } from 'lucide-react';
import styles from './Benefits.module.css';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: <School size={30} />,
      title: 'Gestão Escolar',
      description: 'Controle total sobre matrículas, turmas, notas e frequência escolar de forma digital.'
    },
    {
      icon: <Eye size={30} />,
      title: 'Supervisão em tempo real',
      description: 'Acompanhe o desempenho das escolas e turmas com relatórios analíticos imediatos.'
    },
    {
      icon: <Network size={30} />,
      title: 'Tecnologia que conecta',
      description: 'Superando as barreiras físicas ao interligar alunos, professores, pais e gestores em rede.'
    },
    {
      icon: <LayoutGrid size={30} />,
      title: 'Organização inteligente',
      description: 'Otimização de rotinas diárias com tarefas automatizadas e agenda digital integrada.'
    },
    {
      icon: <MessageSquare size={30} />,
      title: 'Comunicação integrada',
      description: 'Centralize avisos, ocorrências e conversas importantes de maneira fluida e segura.'
    },
    {
      icon: <FileCheck size={30} />,
      title: 'Transparência',
      description: 'Facilidade no acesso aos indicadores escolares e financeiros, criando confiança mútua.'
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 } as const
    }
  };

  return (
    <section id="beneficios" className={`${styles.benefits} section-padding`}>
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className={`${styles.header} text-center`}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className={styles.badge}>Diferenciais</span>
          <h2 className={styles.title}>Por que escolher o Gestor?</h2>
          <p className={styles.subtitle}>
            Oferecemos uma plataforma completa construída sob medida para simplificar e inovar a educação da sua rede.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefitsList.map((benefit, index) => (
            <motion.div 
              key={index} 
              className={styles.benefitItem}
              variants={itemVariants}
            >
              <div className={styles.iconOuter}>
                <div className={styles.iconInner}>
                  {benefit.icon}
                </div>
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Benefits;
