import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Laptop } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Solucoes.module.css';

import gestorLogo from '../../assets/images/gestor_logo.png';
import avaeeLogo from '../../assets/images/avaee_logo.png';

gsap.registerPlugin(ScrollTrigger);

export const Solucoes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const solutions = [
    {
      id: 'gestor',
      logo: gestorLogo,
      title: 'Gestor Educ',
      tagline: 'Gestão Escolar Regular & Administrativa',
      description: 'Plataforma oficial para modernização de redes municipais de ensino. Centraliza matrículas, diário de classe mobile 100% offline para os docentes, roteirização de transporte escolar rural, gestão nutricional do PNAE e pré-validação cadastral para o Educacenso (INEP/FUNDEB).',
      link: '#/gestor',
      badgeColor: '#002C55',
      accentColor: '#2563EB',
      benefits: [
        'Diário de classe mobile com operação 100% offline',
        'Pré-validação e auditoria prévia do Censo Escolar (INEP)',
        'Mapeamento de frotas e transporte escolar rural',
        'PNAE com fichas técnicas e cálculo per capita de nutrientes'
      ]
    },
    {
      id: 'avaee',
      logo: avaeeLogo,
      title: 'AVAEE GD',
      tagline: 'Educação Especial Inclusiva & Regulação do CAEE',
      description: 'Sistema especializado para a regulação de vagas e acompanhamento clínico e pedagógico no CAEE. Conecta a escola regular, Sala de Recursos Multifuncionais (SRM) e a equipe multiprofissional (Psicologia, Fonoaudiologia, Terapia Ocupacional e Psicopedagogia) com Semáforo Pedagógico de criticidade e fila única.',
      link: '#/avaee',
      badgeColor: '#213258',
      accentColor: '#45B5A5',
      benefits: [
        'Ficha padronizada de triagem escolar em 13 blocos',
        'Semáforo pedagógico automático de prioridade',
        'Fila única transparente por especialidade clínica',
        'Prontuário com duplo sigilo profissional (LGPD Art. 14)'
      ]
    }
  ];

  useEffect(() => {
    const cardsCtx = gsap.context(() => {
      gsap.fromTo(`.${styles.solutionCard}`,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.solutionsList}`,
            start: 'top 85%'
          }
        }
      );
    }, containerRef);

    return () => {
      cardsCtx.revert();
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.solucoesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.gridOverlay} />
        <div className={styles.glow} />
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroBadge}>
              <Laptop size={13} />
              Plataformas Oficiais i6 Systems
            </span>
            <h1 className={styles.heroTitle}>Softwares modernos construídos para a gestão pública</h1>
            <p className={styles.heroSubtitle}>
              Soluções integradas desenvolvidas para atender as duas maiores prioridades estratégicas da educação municipal: a gestão da rede regular e a regulação inclusiva da educação especial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className={styles.listSection}>
        <div className="container">
          <div className={styles.solutionsList}>
            {solutions.map((item) => (
              <div 
                key={item.id}
                className={styles.solutionCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.logoWrapper}>
                    <img 
                      src={item.logo} 
                      alt={item.title} 
                      className={styles.brandLogoImg} 
                    />
                  </div>
                  <div className={styles.headerText}>
                    <div className={styles.badgeFlag} style={{ color: item.accentColor, borderColor: `${item.accentColor}40` }}>
                      Solução Oficial i6 Systems
                    </div>
                    <h3>{item.title}</h3>
                    <p className={styles.tagline}>{item.tagline}</p>
                  </div>
                </div>
                
                <div className={styles.cardBody}>
                  <div className={styles.bodyLeft}>
                    <p className={styles.description}>{item.description}</p>
                    <div className={styles.benefitsGrid}>
                      {item.benefits.map((b, bIdx) => (
                        <div key={bIdx} className={styles.benefitItem}>
                          <span className={styles.checkIcon} style={{ color: item.accentColor }}>✓</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.bodyRight}>
                    <div className={styles.actionBox}>
                      <span className={styles.actionTitle}>Conheça os recursos</span>
                      <p className={styles.actionDesc}>Veja módulos, fluxos de trabalho e telas do software.</p>
                      <a href={item.link} className={styles.btnAction} style={{ background: item.badgeColor }}>
                        Acessar Página do {item.title}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solucoes;
