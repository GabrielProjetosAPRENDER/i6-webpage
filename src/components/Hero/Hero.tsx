import React from 'react';
import { 
  GraduationCap, ShieldCheck, ArrowRight, CheckCircle2, 
  Smartphone, Building2, Lock, Award, BookOpen, Sparkles
} from 'lucide-react';
import styles from './Hero.module.css';

interface HeroProps {
  onOpenDemoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  return (
    <>
      <section id="home-hero" className={styles.hero}>
        <div className={styles.ambientLight} />
        <div className={styles.gridPattern} />

        <div className={styles.container}>
          {/* Institutional Badge */}
          <div className={styles.govBadge}>
            <Building2 size={15} />
            <span>Tecnologia de Ponta para Prefeituras & Redes Municipais</span>
          </div>

          {/* Main Headline */}
          <h1 className={styles.heroTitle}>
            A infraestrutura digital completa para a <span className={styles.titleHighlight}>Educação Pública Municipal</span>.
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            Softwares modernos, rápidos e intuitivos para gestão escolar regular (<strong>Gestor Educ</strong>) e regulação do atendimento inclusivo (<strong>AVAEE GD</strong>), 100% alinhados às diretrizes do MEC e do INEP.
          </p>

          {/* Action Buttons */}
          <div className={styles.heroActions}>
            <button 
              onClick={onOpenDemoModal} 
              className={styles.btnPrimary}
              aria-label="Solicitar Demonstração para Município"
            >
              Solicitar Demonstração para Meu Município
              <ArrowRight size={18} />
            </button>
            <a href="#/solucoes" className={styles.btnSecondary}>
              Conhecer as Plataformas
            </a>
          </div>

          {/* Trust Badges Row */}
          <div className={styles.trustProofRow}>
            <div className={styles.trustItem}>
              <Award size={16} className={styles.trustIcon} />
              <span>Registro de Software no INPI</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 size={16} className={styles.trustIcon} />
              <span>Padrão Oficial Educacenso & INEP</span>
            </div>
            <div className={styles.trustItem}>
              <Lock size={16} className={styles.trustIcon} />
              <span>Conformidade com a LGPD</span>
            </div>
            <div className={styles.trustItem}>
              <Smartphone size={16} className={styles.trustIcon} />
              <span>Diário com Sincronização Offline</span>
            </div>
          </div>

          {/* High-Precision Vector Dashboard Cockpit (No blurry/leaked raster screenshots) */}
          <div className={styles.showcaseFrame}>
            <div className={styles.browserTopBar}>
              <div className={styles.windowControls}>
                <span className={`${styles.controlDot} ${styles.dotRed}`} />
                <span className={`${styles.controlDot} ${styles.dotYellow}`} />
                <span className={`${styles.controlDot} ${styles.dotGreen}`} />
              </div>
              <div className={styles.browserAddress}>
                <Lock size={12} color="#10B981" />
                <span>painel.i6systems.com.br/secretaria-educacao</span>
              </div>
              <div className={styles.liveSyncBadge}>
                <span className={styles.pulseDot} />
                <span>Sincronização Ativa</span>
              </div>
            </div>

            {/* Vector UI Mockup Container */}
            <div className={styles.cockpitBody}>
              {/* Cockpit Top Bar */}
              <div className={styles.cockpitNav}>
                <div className={styles.cockpitTitleGroup}>
                  <div className={styles.cockpitLogoBox}>
                    <GraduationCap size={20} color="#2563EB" />
                  </div>
                  <div>
                    <div className={styles.cockpitSystemName}>Gestor Educ • Visão Consolidada</div>
                    <div className={styles.cockpitMunicipality}>Secretaria Municipal de Educação</div>
                  </div>
                </div>
                <div className={styles.cockpitStatusPill}>
                  <Sparkles size={13} color="#2563EB" />
                  <span>Ano Letivo 2026 • 100% em Dia</span>
                </div>
              </div>

              {/* KPI Cards Row */}
              <div className={styles.kpiRow}>
                <div className={styles.kpiCard}>
                  <div className={styles.kpiLabel}>Escolas da Rede</div>
                  <div className={styles.kpiValue}>18</div>
                  <div className={styles.kpiHint}>100% integradas online/offline</div>
                </div>
                <div className={styles.kpiCard}>
                  <div className={styles.kpiLabel}>Alunos Matriculados</div>
                  <div className={styles.kpiValue}>12.450</div>
                  <div className={styles.kpiHint}>Dados validados para o INEP</div>
                </div>
                <div className={styles.kpiCard}>
                  <div className={styles.kpiLabel}>Frequência Média</div>
                  <div className={`${styles.kpiValue} ${styles.textSuccess}`}>94.8%</div>
                  <div className={styles.kpiHint}>Chamadas digitais diárias</div>
                </div>
                <div className={styles.kpiCard}>
                  <div className={styles.kpiLabel}>Auditoria Educacenso</div>
                  <div className={`${styles.kpiValue} ${styles.textBlue}`}>0 Erros</div>
                  <div className={styles.kpiHint}>Repasses do FUNDEB blindados</div>
                </div>
              </div>

              {/* Cockpit Visual Grid */}
              <div className={styles.cockpitGrid}>
                {/* Left: Diários & Frequência */}
                <div className={styles.cockpitPanel}>
                  <div className={styles.panelHeader}>
                    <div className={styles.panelTitle}>
                      <Smartphone size={16} color="#2563EB" />
                      <span>Diário Digital Mobile dos Professores</span>
                    </div>
                    <span className={styles.panelBadgeGreen}>Sincronizado</span>
                  </div>

                  <div className={styles.panelList}>
                    <div className={styles.panelListItem}>
                      <div className={styles.itemIconBox}>
                        <BookOpen size={15} color="#2563EB" />
                      </div>
                      <div className={styles.itemText}>
                        <div className={styles.itemTitle}>5º Ano B • EMEF Cecília Meireles</div>
                        <div className={styles.itemSub}>Chamada realizada offline às 07:45 • 28 presentes</div>
                      </div>
                      <span className={styles.badgeDone}>Concluído</span>
                    </div>

                    <div className={styles.panelListItem}>
                      <div className={styles.itemIconBox}>
                        <BookOpen size={15} color="#2563EB" />
                      </div>
                      <div className={styles.itemText}>
                        <div className={styles.itemTitle}>8º Ano A • EMEF Tiradentes</div>
                        <div className={styles.itemSub}>Lançamento de notas bimestrais • 32 alunos</div>
                      </div>
                      <span className={styles.badgeDone}>Concluído</span>
                    </div>

                    <div className={styles.panelListItem}>
                      <div className={styles.itemIconBox}>
                        <BookOpen size={15} color="#2563EB" />
                      </div>
                      <div className={styles.itemText}>
                        <div className={styles.itemTitle}>1º Ano C • Creche Pequeno Príncipe</div>
                        <div className={styles.itemSub}>Registro de ocorrência pedagógica e presença</div>
                      </div>
                      <span className={styles.badgeDone}>Concluído</span>
                    </div>
                  </div>
                </div>

                {/* Right: Validação INEP & Transporte */}
                <div className={styles.cockpitPanel}>
                  <div className={styles.panelHeader}>
                    <div className={styles.panelTitle}>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span>Conformidade Educacenso (INEP)</span>
                    </div>
                    <span className={styles.panelBadgeBlue}>Auditado</span>
                  </div>

                  <div className={styles.auditBox}>
                    <div className={styles.auditScore}>
                      <div className={styles.scoreNumber}>100%</div>
                      <div className={styles.scoreText}>
                        <strong>Apto para Exportação</strong>
                        <span>Sem duplicidade de NIS, certidões ou turmas incompletas.</span>
                      </div>
                    </div>
                    <div className={styles.auditBarWrapper}>
                      <div className={styles.auditBarFill} style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div className={styles.auditStatsGrid}>
                    <div className={styles.auditStatItem}>
                      <span className={styles.auditStatNum}>480</span>
                      <span className={styles.auditStatLabel}>Docentes Alocados</span>
                    </div>
                    <div className={styles.auditStatItem}>
                      <span className={styles.auditStatNum}>34</span>
                      <span className={styles.auditStatLabel}>Rotas de Ônibus</span>
                    </div>
                    <div className={styles.auditStatItem}>
                      <span className={styles.auditStatNum}>R$ 0</span>
                      <span className={styles.auditStatLabel}>Perda de Repasse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Flagship Platforms Section (Under Hero) */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Ecossistema Integrado i6 Systems</span>
            <h2 className={styles.sectionTitle}>Plataformas Desenvolvidas para Redes Municipais</h2>
            <p className={styles.sectionSubtitle}>
              Duas soluções complementares para modernizar a gestão de toda a rede e estruturar o atendimento especializado inclusivo com total segurança.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {/* Pillar 1: Gestor Educ */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <div className={`${styles.pillarIconBox} ${styles.iconBoxBlue}`}>
                  <GraduationCap size={28} />
                </div>
                <div>
                  <div className={styles.pillarCategory}>Educação Regular & ADM</div>
                  <h3 className={styles.pillarTitle}>Gestor Educ</h3>
                </div>
              </div>

              <p className={styles.pillarDescription}>
                A espinha dorsal da rede municipal. Centraliza matrículas, remanejamento automático, turmas, transporte escolar e indicadores de evasão com diário móvel que funciona sem internet.
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.checkIconBlue} />
                  <span>Diário digital para professores lançarem chamada e notas no celular mesmo sem rede.</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.checkIconBlue} />
                  <span>Validação prévia das turmas para o Educacenso (INEP), blindando os repasses do FUNDEB.</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.checkIconBlue} />
                  <span>Gestão de rotas de transporte escolar, controle de frotas e acervo da biblioteca.</span>
                </div>
              </div>

              <div className={styles.pillarAction}>
                <a href="#/gestor" className={`${styles.pillarLink} ${styles.linkBlue}`}>
                  Conhecer o Gestor Educ
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Pillar 2: AVAEE GD (Teal / Emerald Theme for Inclusion & Healthcare) */}
            <div className={`${styles.pillarCard} ${styles.pillarCardAvaee}`}>
              <div className={styles.pillarHeader}>
                <div className={`${styles.pillarIconBox} ${styles.iconBoxTeal}`}>
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <div className={styles.pillarCategory}>Educação Especial Inclusiva</div>
                  <h3 className={styles.pillarTitle}>AVAEE GD</h3>
                </div>
              </div>

              <p className={styles.pillarDescription}>
                A plataforma de gestão do Atendimento Educacional Especializado (AEE) e regulação de vagas no CAEE com Semáforo Pedagógico, fila única transparente e prontuário multiprofissional.
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.checkIconTeal} />
                  <span>Ficha pedagógica em 13 eixos com cálculo automático do Semáforo de Prioridade.</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.checkIconTeal} />
                  <span>Fila única de regulação por especialidade: Psicologia, Fonoaudiologia e Terapia Ocupacional.</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.checkIconTeal} />
                  <span>Prontuário com duplo sigilo, evolução de PDI e rotatividade de vagas com transparência.</span>
                </div>
              </div>

              <div className={styles.pillarAction}>
                <a href="#/avaee" className={`${styles.pillarLink} ${styles.linkTeal}`}>
                  Conhecer o AVAEE GD
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
