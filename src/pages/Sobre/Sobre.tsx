import React from 'react';
import { 
  Building2, ShieldCheck, CheckCircle2, 
  MapPin, Award, Smartphone, HeartHandshake,
  ArrowRight, Sparkles, Scale, GraduationCap,
  Database, BookOpen, FileCheck2, UserCheck, Mail
} from 'lucide-react';
import styles from './Sobre.module.css';

interface SobreProps {
  onOpenDemoModal?: () => void;
}

export const Sobre: React.FC<SobreProps> = ({ onOpenDemoModal }) => {
  const triad = [
    {
      icon: <Database size={26} />,
      badge: 'Tecnologia & Dados',
      title: 'Engenharia de Software & Big Data',
      desc: 'Arquiteturas modernas desenvolvidas por cientistas da computação e especialistas em dados. Banco de dados com isolamento multi-tenant por schema no PostgreSQL, sincronização offline-first (PWA) e pré-auditoria automatizada do Educacenso (INEP).',
      tag: 'Eder Jesus • Gabriel Fernandes • Eliel Lima'
    },
    {
      icon: <BookOpen size={26} />,
      badge: 'Pedagogia Aplicada',
      title: 'Vivência Real no Chão da Escola',
      desc: 'Sistemas estruturados por quem vive o dia a dia pedagógico da rede pública. Orientação educacional aplicada na concepção de fluxos ergonômicos para o Diário Mobile e nos 13 blocos de triagem do AVAEE GD.',
      tag: 'Vitor Hugo Almeida • Pedagogo'
    },
    {
      icon: <Scale size={26} />,
      badge: 'Segurança Jurídica',
      title: 'Direito Público & Compliance LGPD',
      desc: 'Assessoria jurídica contínua em direito educacional e administrativo. Conformidade estrita com o Artigo 14 da LGPD para proteção integral de menores, duplo sigilo clínico/pedagógico e segurança em contratos públicos.',
      tag: 'Sayron Thiago Dantas • Advogado'
    }
  ];

  const principles = [
    {
      icon: <Smartphone size={26} />,
      title: 'Tecnologia que Funciona no Brasil Real',
      desc: 'Desenvolvemos soluções com arquitetura offline-first. Nossos diários e sistemas operam perfeitamente em salas de aula e escolas da zona rural sem sinal de internet, sincronizando quando houver conexão.'
    },
    {
      icon: <FileCheck2 size={26} />,
      title: 'Blindagem de Recursos Públicos (FUNDEB)',
      desc: 'Erros de digitação no Censo Escolar geram perdas severas de repasses. Criamos mecanismos de validação prévia contínua que eliminam inconsistências cadastrais antes dos prazos oficiais do INEP.'
    },
    {
      icon: <HeartHandshake size={26} />,
      title: 'Inclusão com Eficiência e Transparência',
      desc: 'Com o AVAEE GD, criamos uma plataforma pioneira para regular as filas do CAEE e do AEE por especialidade (Psicologia, Fonoaudiologia, Terapia Ocupacional), substituindo pedidos informais por critérios técnicos.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Segurança Jurídica & Registro no INPI',
      desc: 'Nossos sistemas contam com registro de programa de computador no INPI (Processo 512026008933-6), certificação digital ICP-Brasil via SERPRO e total auditoria para promotorias e Tribunais de Contas.'
    }
  ];

  const milestones = [
    {
      title: 'Gestor Educ',
      category: 'Gestão Escolar & Diário Mobile',
      desc: 'Matrículas digitalizadas, controle de capacidade por turma, frotas de transporte escolar e diário móvel offline para os docentes da rede municipal.'
    },
    {
      title: 'AVAEE GD',
      category: 'Educação Especial Inclusiva & CAEE',
      desc: 'Regulação de vagas, Semáforo Pedagógico de criticidade e prontuário multiprofissional com duplo sigilo para atendimento de alunos com neurodivergência e deficiência.'
    },
    {
      title: 'Presença & Implantação Assistida',
      category: 'Capacitação na Ponta',
      desc: 'Acompanhamento direto da nossa equipe técnica nos municípios parceiros, treinando gestores, coordenadores escolares e professores na prática.'
    }
  ];

  return (
    <div className={styles.sobrePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.gridOverlay} />
        <div className={styles.glow} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <Sparkles size={13} />
              Sobre a i6 Systems
            </span>
            <h1 className={styles.heroTitle}>
              Tecnologia de ponta construída para a <span className={styles.titleHighlight}>realidade da gestão pública</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              Fundada no final de 2025 e consolidada institucionalmente em 2026, a i6 Systems é uma GovTech maranhense especializada em modernizar secretarias municipais de educação com engenharia de dados, vivência pedagógica e rigor jurídico.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos - Seção de Identidade e Origem */}
      <section className={styles.identitySection}>
        <div className="container">
          <div className={styles.identityGrid}>
            <div className={styles.identityText}>
              <span className={styles.sectionBadge}>Nossa Origem & Trajetória</span>
              <h2 className={styles.sectionTitle}>
                Nascemos para acabar com o abismo entre a tecnologia moderna e as prefeituras.
              </h2>
              <p className={styles.paragraph}>
                A <strong>i6 Systems</strong> (CNPJ: <code>50.542.946/0001-58</code>), sediada em <strong>Gonçalves Dias - MA</strong>, nasceu no final de 2025 da união estratégica de profissionais com vivências complementares: cientistas da computação e engenheiros de dados com experiência corporativa, pedagogos da rede pública e operadores do direito administrativo.
              </p>
              <p className={styles.paragraph}>
                Ao longo de 2026, consolidamos nossa maturidade estatal e regulatória: registramos oficialmente nossos programas de computador no <strong>INPI</strong> (Processo nº <code>512026008933-6</code> sob a Lei nº 9.609/98), firmamos certificação digital com o <strong>SERPRO</strong> (Serviço Federal de Processamento de Dados) nos padrões da ICP-Brasil e alinhamos nossos algoritmos aos parâmetros do Educacenso (INEP/MEC) e da LGPD (Lei nº 13.709/18).
              </p>
              <div className={styles.quoteBox}>
                "Não criamos softwares genéricos de prateleira. Desenvolvemos ferramentas desenhadas para a realidade de quem está na sala de aula, na secretaria da escola e na mesa do secretário municipal."
              </div>
            </div>

            {/* Institutional Summary Card */}
            <div className={styles.institutionCard}>
              <div className={styles.instCardHeader}>
                <Building2 size={24} className={styles.instIcon} />
                <div>
                  <h3 className={styles.instTitle}>i6 Systems Ltda.</h3>
                  <span className={styles.instSubtitle}>GovTech & Soluções em Software</span>
                </div>
              </div>

              <div className={styles.instDetailsList}>
                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><MapPin size={16} /></div>
                  <div>
                    <strong>Sede Operacional</strong>
                    <span>Trav. 1º de Maio, 211, Centro — Gonçalves Dias - MA</span>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><Award size={16} /></div>
                  <div>
                    <strong>Registro no INPI</strong>
                    <span>Processo nº 512026008933-6 (Lei 9.609/98)</span>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><ShieldCheck size={16} /></div>
                  <div>
                    <strong>Certificação Federal</strong>
                    <span>SERPRO • ICP-Brasil (Pessoa Jurídica A1)</span>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><GraduationCap size={16} /></div>
                  <div>
                    <strong>Foco Estratégico</strong>
                    <span>Educação Regular (Gestor Educ) & Especial (AVAEE GD)</span>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><Mail size={16} /></div>
                  <div>
                    <strong>Canal Oficial</strong>
                    <span>contato@i6systems.com.br</span>
                  </div>
                </div>
              </div>

              <div className={styles.instCardFooter}>
                <span>CNPJ: 50.542.946/0001-58</span>
                <span className={styles.activeTag}>● Empresa Ativa & Homologada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tríade de Autoridade (Equipe Multidisciplinar Autora) */}
      <section className={styles.triadSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Nossos Fundamentos</span>
            <h2 className={styles.sectionTitle}>A Tríade que Torna a i6 Systems Única</h2>
            <p className={styles.sectionSubtitle}>
              Softwares eficientes para o setor público só nascem quando tecnologia de ponta, pedagogia de campo e segurança jurídica caminham juntas.
            </p>
          </div>

          <div className={styles.triadGrid}>
            {triad.map((col, idx) => (
              <div key={idx} className={styles.triadCard}>
                <div className={styles.triadIconBox}>{col.icon}</div>
                <span className={styles.triadBadge}>{col.badge}</span>
                <h3 className={styles.triadTitle}>{col.title}</h3>
                <p className={styles.triadDesc}>{col.desc}</p>
                <div className={styles.triadFooterTag}>
                  <UserCheck size={14} color="#2563EB" />
                  <span>{col.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Princípios Fundamentais (Nossos Diferenciais de Valor) */}
      <section className={styles.principlesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Nossos Princípios</span>
            <h2 className={styles.sectionTitle}>Como pensamos e construímos cada sistema</h2>
            <p className={styles.sectionSubtitle}>
              Diretrizes inegociáveis que norteiam desde a primeira linha de código até o suporte diário aos servidores.
            </p>
          </div>

          <div className={styles.principlesGrid}>
            {principles.map((item, idx) => (
              <div key={idx} className={styles.principleCard}>
                <div className={styles.principleIconBox}>{item.icon}</div>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Duas Soluções que Definem Nosso Trabalho */}
      <section className={styles.ecosystemSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Ecossistema Integrado</span>
            <h2 className={styles.sectionTitle}>As Soluções que Levamos aos Municípios</h2>
            <p className={styles.sectionSubtitle}>
              Ferramentas completas pensadas para as duas maiores prioridades estratégicas da educação municipal.
            </p>
          </div>

          <div className={styles.milestonesGrid}>
            {milestones.map((ms, idx) => (
              <div key={idx} className={styles.milestoneCard}>
                <div className={styles.milestoneCategory}>{ms.category}</div>
                <h3 className={styles.milestoneTitle}>{ms.title}</h3>
                <p className={styles.milestoneDesc}>{ms.desc}</p>
                <div className={styles.milestoneFooter}>
                  <CheckCircle2 size={16} color="#10B981" />
                  <span>Em Operação</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Leve a i6 Systems para a sua cidade</h2>
            <p className={styles.ctaSubtitle}>
              Converse diretamente com nossos especialistas e veja como implantar o Gestor Educ e o AVAEE GD na sua rede municipal.
            </p>
            <button onClick={onOpenDemoModal} className={styles.btnPrimaryLg}>
              Solicitar Apresentação Técnica
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
