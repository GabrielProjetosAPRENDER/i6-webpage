import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import styles from './Modules.module.css';
import dashboardGeneral from '../../assets/images/dashboard_general.png';
import dashboardSchools from '../../assets/images/dashboard_schools.png';
import dashboardCurriculum from '../../assets/images/dashboard_curriculum.png';

interface ModulesProps {
  onOpenDemoModal: () => void;
}

export const Modules: React.FC<ModulesProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'general' | 'schools' | 'curriculum'>('general');

  const tabImages = {
    general: dashboardGeneral,
    schools: dashboardSchools,
    curriculum: dashboardCurriculum
  };

  const tabLabels = [
    { id: 'general' as const, label: 'Visão Geral' },
    { id: 'schools' as const, label: 'Escolas' },
    { id: 'curriculum' as const, label: 'Pedagógico' }
  ];
  const checklistItems = [
    {
      title: 'Portal do Aluno e Professor',
      desc: 'Ambiente virtual intuitivo para envio de tarefas, notas, frequências e materiais de estudo.'
    },
    {
      title: 'Secretaria e Matrículas Online',
      desc: 'Automatize o processo de matrícula, emissão de boletins, históricos e gestão de documentos.'
    },
    {
      title: 'Painel do Gestor e Supervisor',
      desc: 'Visualize em tempo real gráficos e relatórios gerenciais sobre o desempenho de toda a rede de ensino.'
    },
    {
      title: 'Comunicação Multicanal',
      desc: 'Envio rápido de notificações, avisos urgentes e comunicados oficiais direto nos dispositivos móveis.'
    }
  ];

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 } as const
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15, delay: 0.2 } as const
    }
  };

  return (
    <section id="modulos" className={`${styles.modules} section-padding`}>
      <div className={`${styles.container} container`}>
        {/* Left Column: Image Mockup with Tabs */}
        <motion.div 
          className={styles.leftColumn}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className={styles.tabsContainer}>
            {tabLabels.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabButtonActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.bgShape} />
          <div className={styles.imageWrapper}>
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeTab}
                src={tabImages[activeTab]} 
                alt={`Painel real do sistema GESTOR - ${activeTab}`} 
                className={styles.previewImage}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Column: Text & Features Checklist */}
        <motion.div 
          className={styles.rightColumn}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className={styles.badge}>Plataforma</span>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>Conectar pessoas.</span>
            <span className={styles.titleLine}>Organizar processos.</span>
            <span className={`${styles.titleLine} styles.titleHighlight`}>Transformar a educação.</span>
          </h2>
          
          <p className={styles.description}>
            O GESTOR une todos os setores da instituição de ensino em um único ecossistema inteligente, gerando produtividade e otimizando o tempo de todos os envolvidos.
          </p>

          <div className={styles.checklist}>
            {checklistItems.map((item, index) => (
              <div key={index} className={styles.checklistItem}>
                <span className={styles.checkIcon}>
                  <Check size={16} strokeWidth={3} />
                </span>
                <div className={styles.itemText}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.itemDesc}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <motion.button 
            className={styles.ctaButton}
            onClick={onOpenDemoModal}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar Demonstração
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
export default Modules;
