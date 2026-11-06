import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Database, Code2, Globe2 } from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import MunicipalSimulator from '../../components/MunicipalSimulator/MunicipalSimulator';
import CTA from '../../components/CTA/CTA';
import styles from './Home.module.css';

interface HomeProps {
  onOpenDemoModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenDemoModal }) => {
  const techStack = [
    {
      icon: <Code2 size={24} />,
      name: 'React & TypeScript',
      desc: 'Interfaces dinamicas, rapidas e tipagem robusta para sistemas sem quebras.'
    },
    {
      icon: <Cpu size={24} />,
      name: 'APIs Escalaveis',
      desc: 'Backend resiliente projetado para suportar altos volumes de acessos diarios.'
    },
    {
      icon: <Database size={24} />,
      name: 'Banco de Dados Seguro',
      desc: 'Modelagem relacional otimizada com backups frequentes e seguranca total.'
    },
    {
      icon: <Cloud size={24} />,
      name: 'Cloud AWS',
      desc: 'Hospedagem elastica que se adapta a demanda de acessos do seu municipio.'
    }
  ];

  return (
    <>
      <Hero onOpenDemoModal={onOpenDemoModal} />
      
      <Features />

      <MunicipalSimulator onOpenDemoModal={onOpenDemoModal} />

      {/* Technologies Section */}
      <section className={styles.techSection}>
        <div className="container">
          <div className={styles.techHeader}>
            <span className={styles.techBadge}>
              <Globe2 size={12} />
              Infraestrutura & Tecnologia
            </span>
            <h2 className={styles.techTitle}>Tecnologia de ponta para a gestao publica</h2>
            <p className={styles.techSubtitle}>
              Utilizamos as mesmas tecnologias adotadas pelas maiores empresas de software do mundo para entregar seguranca, velocidade e estabilidade.
            </p>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((tech, index) => (
              <motion.div 
                key={index} 
                className={styles.techCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(37, 99, 235, 0.2)' }}
              >
                <div className={styles.techIconWrapper}>
                  {tech.icon}
                </div>
                <h3 className={styles.techCardName}>{tech.name}</h3>
                <p className={styles.techCardDesc}>{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA onOpenDemoModal={onOpenDemoModal} />
    </>
  );
};

export default Home;
