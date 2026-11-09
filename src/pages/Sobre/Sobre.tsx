import React from 'react';
import { 
  Building2, ShieldCheck, CheckCircle2, 
  MapPin, HeartHandshake,
  ArrowRight, Sparkles, Scale, GraduationCap,
  Database, BookOpen, FileCheck2, Users, Mail, Layers
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
      desc: 'Arquiteturas modernas desenvolvidas com as melhores práticas de engenharia de software e análise de dados. Banco de dados com isolamento multi-tenant seguro no PostgreSQL, matriz curricular BNCC integrada e pré-auditoria automatizada do Educacenso (INEP).',
      tag: 'Engenharia de Software & Ciência de Dados'
    },
    {
      icon: <BookOpen size={26} />,
      badge: 'Pedagogia Aplicada',
      title: 'Vivência Real no Chão da Escola',
      desc: 'Sistemas concebidos por quem conhece profundamente o dia a dia pedagógico da rede pública. Orientação educacional aplicada na definição de fluxos práticos para o Diário Escolar e na triagem em 13 blocos do AVAEE GD.',
      tag: 'Coordenação Pedagógica & Especialistas em AEE'
    },
    {
      icon: <Scale size={26} />,
      badge: 'Governança & Segurança',
      title: 'Gestão Pública & Compliance LGPD',
      desc: 'Alinhamento contínuo às normas educacionais e administrativas. Rigorosa conformidade com o Artigo 14 da LGPD para proteção integral de dados de menores, duplo sigilo clínico/pedagógico e segurança jurídica para o município.',
      tag: 'Governança Pública & Proteção de Dados'
    }
  ];

  const principles = [
    {
      icon: <Layers size={26} />,
      title: 'Soluções Desenhadas para a Gestão Pública',
      desc: 'Desenvolvemos softwares que resolvem gargalos reais da rede municipal: centralização de matrículas, controle de transporte escolar, gestão do PNAE e organização da educação especial.'
    },
    {
      icon: <FileCheck2 size={26} />,
      title: 'Blindagem de Recursos Públicos (FUNDEB)',
      desc: 'Erros de digitação e dados desatualizados no Censo Escolar geram perdas severas de repasses. Criamos mecanismos de validação prévia contínua que eliminam inconsistências cadastrais antes dos prazos oficiais do INEP.'
    },
    {
      icon: <HeartHandshake size={26} />,
      title: 'Inclusão com Eficiência e Transparência',
      desc: 'Com o AVAEE GD, criamos uma plataforma pioneira para regular as filas do CAEE e do AEE por especialidade (Psicologia, Fonoaudiologia, Terapia Ocupacional), substituindo pedidos informais por critérios técnicos e científicos.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Conformidade Regulatória & LGPD',
      desc: 'Plataformas desenvolvidas em total conformidade com as diretrizes do MEC e parâmetros do Censo Escolar, com privacidade por padrão (Privacy by Design) e proteção rigorosa dos dados dos estudantes e servidores municipais.'
    }
  ];

  const milestones = [
    {
      title: 'Gestor Educ',
      category: 'Gestão Escolar & Diário Eletrônico',
      desc: 'Matrículas digitalizadas, controle de capacidade por turma, frotas de transporte escolar e diário eletrônico integrado à BNCC para os docentes da rede municipal.'
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
              <span className={styles.sectionBadge}>Nossa Origem & Propósito</span>
              <h2 className={styles.sectionTitle}>
                Nascemos para conectar tecnologia moderna à realidade prática das prefeituras.
              </h2>
              <p className={styles.paragraph}>
                A <strong>i6 Systems</strong> (CNPJ: <code>50.542.946/0001-58</code>), sediada em <strong>Gonçalves Dias - MA</strong>, nasceu da união de engenheiros de software, especialistas em dados e educadores da rede pública que vivenciam de perto a rotina e os desafios da gestão municipal.
              </p>
              <p className={styles.paragraph}>
                Desenvolvemos soluções que simplificam a administração pública: eliminamos processos burocráticos manuais, prevenimos perdas de repasses do FUNDEB com pré-auditoria do Educacenso (INEP/MEC), unificamos a gestão da rede municipal de ensino e estruturamos a Educação Especial com agilidade e respeito à LGPD.
              </p>
              <div className={styles.quoteBox}>
                "Não criamos softwares genéricos de prateleira. Desenvolvemos ferramentas desenhadas para a realidade de quem está na sala de aula, na secretaria da escola e na tomada de decisão municipal."
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
                  <div className={styles.instItemIcon}><Database size={16} /></div>
                  <div>
                    <strong>Tecnologia & Operação</strong>
                    <span>Arquitetura Multi-Tenant em Nuvem com Isolamento PostgreSQL</span>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><ShieldCheck size={16} /></div>
                  <div>
                    <strong>Conformidade & Segurança</strong>
                    <span>Alinhado ao Educacenso (INEP/MEC) e à LGPD</span>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><GraduationCap size={16} /></div>
                  <div>
                    <strong>Plataformas Oficiais</strong>
                    <span>Gestor Educ (Regular) & AVAEE GD (Especial/AEE)</span>
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
                <span className={styles.activeTag}>● Empresa Ativa e Regular</span>
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
                  <Users size={14} color="#2563EB" />
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
