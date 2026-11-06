import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, TrendingUp, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import styles from './Features.module.css';

export const Features: React.FC = () => {
  const differentials = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Inovação sob Medida',
      description: 'Criamos softwares modernos, intuitivos e totalmente alinhados às necessidades específicas da administração pública.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Simplificação de Processos',
      description: 'Eliminamos a burocracia, reduzimos o retrabalho e organizamos fluxos administrativos em poucos cliques.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Eficiência Comprovada',
      description: 'Aumentamos a produtividade das equipes municipais e reduzimos custos operacionais com sistemas inteligentes.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Segurança & Compliance',
      description: 'Proteção de dados rigorosa em nuvem de alta disponibilidade, em total conformidade com a LGPD.'
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Suporte & Parceria Real',
      description: 'Acompanhamento contínuo e humanizado com implantação assistida e treinamento prático para sua equipe.'
    },
    {
      icon: <Eye size={24} />,
      title: 'Transparência Total',
      description: 'Facilitamos o acesso à informação com painéis de controle modernos para prestar contas com clareza.'
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 } as const
    }
  };

  return (
    <section id="diferenciais" className={`${styles.features} section-padding`}>
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className={`${styles.header} text-center`}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className={styles.badge}>Por que a i6 Systems?</span>
          <h2 className={styles.title}>Nossos diferenciais de valor</h2>
          <p className={styles.subtitle}>
            Trabalhamos focados em gerar impacto real no dia a dia da administração pública e na qualidade de vida dos cidadãos.
          </p>
        </motion.div>

        {/* Differentials 3-column Grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {differentials.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
