import React from 'react';
import { 
  Building2, ShieldCheck, CheckCircle2, 
  MapPin, Award, Smartphone, HeartHandshake,
  ArrowRight, Sparkles, Scale, GraduationCap
} from 'lucide-react';
import styles from './Sobre.module.css';

interface SobreProps {
  onOpenDemoModal?: () => void;
}

export const Sobre: React.FC<SobreProps> = ({ onOpenDemoModal }) => {
  const principles = [
    {
      icon: <Smartphone size={26} />,
      title: 'Tecnologia que Funciona no Brasil Real',
      desc: 'Desenvolvemos soluções com arquitetura offline-first. Nossos diários e sistemas operam perfeitamente em salas de aula e escolas da zona rural sem sinal de internet, sincronizando quando houver conexão.'
    },
    {
      icon: <Scale size={26} />,
      title: 'Blindagem de Recursos Públicos (FUNDEB)',
      desc: 'Erros de digitação no Censo Escolar geram perdas milionárias de repasses. Criamos mecanismos de validação prévia contínua que eliminam inconsistências cadastrais antes dos prazos do INEP.'
    },
    {
      icon: <HeartHandshake size={26} />,
      title: 'Inclusão com Eficiência e Transparência',
      desc: 'Com o AVAEE GD, criamos uma plataforma pioneira para regular as filas do CAEE e do AEE por especialidade (Psicologia, Fonoaudiologia, Terapia Ocupacional), substituindo pedidos informais por critérios técnicos.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Segurança Jurídica & LGPD Rigorosa',
      desc: 'Nossos sistemas contam com controle de acesso por perfil, rastreabilidade de logs de auditoria e registro de programa de computador no INPI, garantindo sigilo absoluto dos dados de menores e servidores.'
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
              Somos uma GovTech maranhense especializada em engenharia de dados e desenvolvimento de software para modernizar secretarias municipais de educação com velocidade, segurança e transparência.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos - Seção de Identidade e Origem */}
      <section className={styles.identitySection}>
        <div className="container">
          <div className={styles.identityGrid}>
            <div className={styles.identityText}>
              <span className={styles.sectionBadge}>Nossa Origem</span>
              <h2 className={styles.sectionTitle}>
                Nascemos para acabar com o abismo entre a tecnologia moderna e as prefeituras.
              </h2>
              <p className={styles.paragraph}>
                A <strong>i6 Systems</strong> (CNPJ: <code>50.542.946/0001-58</code>), sediada em São Luís - MA, nasceu de uma constatação clara: a maioria dos municípios brasileiros ainda está presa a dois extremos ineficientes. De um lado, softwares antigos dos anos 2000, pesados, caros e que travam constantemente; do outro, pilhas de papéis soltos e dezenas de planilhas desorganizadas que colocam em risco os repasses federais e atrasam o atendimento ao cidadão.
              </p>
              <p className={styles.paragraph}>
                Unimos profissionais com sólida experiência em <strong>Ciência da Computação, Engenharia de Dados e Arquitetura de Software</strong> em grandes corporações do país para levar o mesmo nível de excelência técnica às administrações públicas municipais.
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
                  <h3 className={styles.instTitle}>i6 Systems</h3>
                  <span className={styles.instSubtitle}>GovTech & Soluções em Software</span>
                </div>
              </div>

              <div className={styles.instDetailsList}>
                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><MapPin size={16} /></div>
                  <div>
                    <strong>Sede Operacional</strong>
                    <span>São Luís - Maranhão</span>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><Award size={16} /></div>
                  <div>
                    <strong>Propriedade Intelectual</strong>
                    <span>Softwares com Registro no INPI</span>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><ShieldCheck size={16} /></div>
                  <div>
                    <strong>Segurança & Compliance</strong>
                    <span>100% em Conformidade com a LGPD</span>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div className={styles.instItemIcon}><GraduationCap size={16} /></div>
                  <div>
                    <strong>Foco Setorial</strong>
                    <span>Educação Pública Regular & Especial (AEE/CAEE)</span>
                  </div>
                </div>
              </div>

              <div className={styles.instCardFooter}>
                <span>CNPJ: 50.542.946/0001-58</span>
                <span className={styles.activeTag}>● Empresa Ativa</span>
              </div>
            </div>
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
