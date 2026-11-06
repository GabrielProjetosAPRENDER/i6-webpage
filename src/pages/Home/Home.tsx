import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Smartphone, Server, Sparkles } from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import MunicipalSimulator from '../../components/MunicipalSimulator/MunicipalSimulator';
import CTA from '../../components/CTA/CTA';
import styles from './Home.module.css';

interface HomeProps {
  onOpenDemoModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenDemoModal }) => {
  const securityPillars = [
    {
      icon: <Database size={24} />,
      name: 'Multi-Tenant por Schema PostgreSQL',
      desc: 'Isolamento estrito entre prefeituras. Cada município opera em seu próprio namespace de dados, eliminando qualquer risco de vazamento entre redes.'
    },
    {
      icon: <ShieldCheck size={24} />,
      name: 'Blindagem LGPD (Art. 14 - Menores)',
      desc: 'Proteção jurídica integral de dados de crianças e adolescentes, com controle de acesso em 3 camadas e logs de auditoria para o TCE e Promotoria.'
    },
    {
      icon: <Smartphone size={24} />,
      name: 'Arquitetura Offline-First (PWA)',
      desc: 'Sistemas que funcionam no Brasil real. Diários de classe operam em salas rurais sem sinal e sincronizam de forma atômica com o banco central.'
    },
    {
      icon: <Server size={24} />,
      name: 'Alta Disponibilidade & Cloud Escalável',
      desc: 'Infraestrutura moderna e veloz que suporta os picos críticos de matrícula escolar, chamadas diárias e prazos de exportação do Censo INEP.'
    }
  ];

  return (
    <>
      <Hero onOpenDemoModal={onOpenDemoModal} />
      
      <Features />

      <MunicipalSimulator onOpenDemoModal={onOpenDemoModal} />

      {/* Technologies & Governance Architecture Section */}
      <section className={styles.techSection}>
        <div className="container">
          <div className={styles.techHeader}>
            <span className={styles.techBadge}>
              <Sparkles size={12} />
              Segurança, Multi-Tenancy & LGPD
            </span>
            <h2 className={styles.techTitle}>Arquitetura construída para a administração pública</h2>
            <p className={styles.techSubtitle}>
              Soluções desenvolvidas por especialistas em engenharia de dados e sistemas corporativos para garantir velocidade, integridade e blindagem jurídica aos municípios parceiros.
            </p>
          </div>

          <div className={styles.techGrid}>
            {securityPillars.map((tech, index) => (
              <motion.div 
                key={index} 
                className={styles.techCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(37, 99, 235, 0.3)' }}
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
