import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Laptop, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Solucoes.module.css';

gsap.registerPlugin(ScrollTrigger);

export const Solucoes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const solutions = [
    {
      id: 'gestor',
      icon: <GraduationCap size={32} />,
      title: 'Gestor Educ',
      tagline: 'Gestao Escolar & Administrativa Integrada',
      description: 'Sistema completo para gestao de redes publicas municipais. Centraliza o prontuario dos alunos, matriculas, diario de classe digital com funcionamento offline para professores e validacao de dados para o Educacenso (INEP).',
      link: '#/gestor',
      badgeColor: '#2563EB',
      benefits: [
        'Diario de classe digital com sincronizacao offline',
        'Matriculas, remanejamento e enturmacoes automaticas',
        'Dashboard executivo com indicadores de frequencia e evasao',
        'Validador inteligente para exportacao ao Educacenso (INEP)'
      ]
    },
    {
      id: 'avaee',
      icon: <ShieldCheck size={32} />,
      title: 'AVAEE GD',
      tagline: 'Educacao Especial Inclusiva & Gestao do CAEE',
      description: 'Plataforma oficial para regulacao de vagas e acompanhamento de estudantes na Educacao Especial. Interliga Escolas Regulares, Centro de Atendimento (CAEE) e Equipe Multiprofissional (Psicologia, Fono, TO, Psicopedagogia) com Semaforo Pedagogico de Prioridade.',
      link: '#/avaee',
      badgeColor: '#059669',
      benefits: [
        'Ficha pedagogica padronizada em 13 eixos estruturados',
        'Semaforo automatico de prioridade e matriz de criticidade',
        'Fila unica transparente por especialidade no CAEE',
        'Prontuario multiprofissional com sigilo e conformidade LGPD'
      ]
    }
  ];

  const futureSolutions = [
    {
      title: 'Saude Municipal',
      tagline: 'Gestao de Saude Publica Integrada',
      description: 'Em breve: Uma solucao completa para agendamento de consultas, prontuario eletronico dos cidadaos e controle de estoque de medicamentos.'
    },
    {
      title: 'Portal do Cidadao',
      tagline: 'Servicos municipais a um clique',
      description: 'Em breve: Centralizacao de taxas, certidoes, protocolos e ouvidoria, facilitando o dialogo do cidadao com a prefeitura.'
    }
  ];

  useEffect(() => {
    // 1. Solution card reveal
    const cardsCtx = gsap.context(() => {
      gsap.fromTo(`.${styles.solutionCard}`,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.solutionsList}`,
            start: 'top 80%'
          }
        }
      );

      // 2. Future cards staggered fade
      gsap.fromTo(`.${styles.futureCard}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: `.${styles.futureGrid}`,
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
              <Laptop size={12} />
              Solucoes Tecnologicas
            </span>
            <h1 className={styles.heroTitle}>Softwares modernos para a gestao publica</h1>
            <p className={styles.heroSubtitle}>
              Sistemas robustos criados com foco na facilidade de uso, seguranca e transformacao digital dos municipios.
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
                  <div className={styles.iconWrapper} style={{ color: item.badgeColor, background: `${item.badgeColor}15` }}>
                    {item.icon}
                  </div>
                  <div className={styles.headerText}>
                    <div className={styles.badgeFlag} style={{ color: item.badgeColor, borderColor: `${item.badgeColor}40` }}>
                      Solucao Oficial i6 Systems
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
                          <span className={styles.checkIcon}>✓</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.bodyRight}>
                    <div className={styles.actionBox}>
                      <span className={styles.actionTitle}>Interessado nesta solucao?</span>
                      <p className={styles.actionDesc}>Veja todos os modulos e funcionamento detalhado.</p>
                      <a href={item.link} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Ver Detalhes do Produto
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future roadmap solutions */}
          <div className={styles.futureSection}>
            <div className={styles.futureHeader}>
              <span className={styles.tagline}>Visao de Futuro</span>
              <h2 className={styles.sectionTitle}>Novos lancamentos em desenvolvimento</h2>
              <p className={styles.sectionSubtitle}>
                A expansao do ecossistema i6 Systems para conectar todas as areas da administracao municipal.
              </p>
            </div>

            <div className={styles.futureGrid}>
              {futureSolutions.map((future, idx) => (
                <div key={idx} className={styles.futureCard}>
                  <div className={styles.futureBadge}>Em Desenvolvimento</div>
                  <h3>{future.title}</h3>
                  <p className={styles.futureTagline}>{future.tagline}</p>
                  <p className={styles.futureDesc}>{future.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solucoes;
