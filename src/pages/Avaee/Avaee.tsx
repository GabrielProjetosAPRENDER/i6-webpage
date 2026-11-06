import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, ArrowRight,
  Brain, Activity, FileText, Users, ShieldCheck,
  HeartHandshake, Sparkles, Clock, AlertTriangle
} from 'lucide-react';
import styles from './Avaee.module.css';

interface AvaeeProps {
  onOpenDemoModal: () => void;
}

export const Avaee: React.FC<AvaeeProps> = ({ onOpenDemoModal }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const pillars = [
    {
      icon: <FileText size={26} />,
      title: 'Ficha Pedagógica Padronizada (13 Blocos)',
      badge: 'Escola Regular',
      desc: 'O Coordenador Escolar preenche a ficha oficial padronizada direto no sistema. Elimina formulários de papel soltos e registra observações de aprendizagem, comunicação, interação social e intervenções prévias da escola.'
    },
    {
      icon: <AlertTriangle size={26} />,
      title: 'Semáforo Pedagógico de Prioridade',
      badge: 'Triagem Objetiva',
      desc: 'Classificação automática em três níveis de criticidade (🟢 Baixa Necessidade, 🟡 Necessita Investigação, 🔴 Prioridade Máxima), orientando a triagem da Psicologia e da equipe técnica sem decisões subjetivas.'
    },
    {
      icon: <Clock size={26} />,
      title: 'Fila Única Transparente do CAEE',
      badge: 'Regulação de Vagas',
      desc: 'Gestão da fila de espera municipal categorizada por especialidade. Acaba com pedidos de favor ou perdas de prazo, garantindo transparência para a Secretaria de Educação e famílias.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Prontuário Eletrônico & Rotatividade',
      badge: 'Equipe Multiprofissional',
      desc: 'Cada especialista acompanha sua grade de horários, registra evoluções do PDI com duplo sigilo profissional (LGPD) e conclui tratamentos liberando vagas automaticamente para a fila.'
    }
  ];

  const specialties = [
    {
      icon: <Brain size={24} />,
      title: 'Psicologia Escolar',
      desc: 'Triagem inicial, anamnese do estudante e entrevista familiar para diagnóstico de necessidades.'
    },
    {
      icon: <Activity size={24} />,
      title: 'Fonoaudiologia',
      desc: 'Intervenção no desenvolvimento da fala, linguagem oral e processamento auditivo central.'
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Terapia Ocupacional (TO)',
      desc: 'Integração sensorial, estímulo à coordenação motora e autonomia nas atividades diárias.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Psicopedagogia',
      desc: 'Investigação profunda de dislexia, discalculia e desenho de rotas pedagógicas personalizadas.'
    },
    {
      icon: <Users size={24} />,
      title: 'Professores de AEE',
      desc: 'Adaptação de materiais, tecnologia assistiva e suporte direto à Sala de Recursos Multifuncionais.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Coordenação CAEE',
      desc: 'Painel mestre de regulação de filas, distribuição de grades horárias e relatórios para a Secretaria.'
    }
  ];

  const faqs = [
    {
      q: 'Como o AVAEE GD garante o sigilo e atende à LGPD?',
      a: 'O sistema possui controle rigoroso de perfis e duplo sigilo. Dados de saúde e anotações clínicas de menores são restritos ao profissional responsável. A coordenação e a escola têm acesso apenas aos pareceres pedagógicos e status de encaminhamento, garantindo conformidade com a LGPD.'
    },
    {
      q: 'Como funciona a rotatividade de vagas no CAEE?',
      a: 'Cada plano de atendimento possui metas claras estabelecidas no PDI (Plano de Desenvolvimento Individual) e duração pré-determinada de ciclo. Quando o aluno recebe alta do atendimento ou encerra o ciclo terapêutico, o sistema libera a vaga na grade do especialista e convoca o próximo da fila única.'
    },
    {
      q: 'O sistema substitui o trabalho da escola regular ou do professor?',
      a: 'Não. O AVAEE GD integra a escola regular com o Centro de Atendimento Especializado (CAEE). O coordenador escolar faz a solicitação padronizada, a equipe multidisciplinar atende no contraturno e as orientações pedagógicas retornam para a escola para apoiar o professor em sala de aula.'
    },
    {
      q: 'Quanto tempo leva para implantar o AVAEE GD na prefeitura?',
      a: 'A implantação ocorre entre 7 e 14 dias úteis, incluindo o cadastramento das unidades escolares, configuração das especialidades ativas no CAEE e treinamento prático para coordenadores escolares e terapeutas.'
    }
  ];

  return (
    <div className={styles.avaeePage}>
      {/* Product Hero */}
      <section className={styles.heroSection}>
        <div className={styles.gridOverlay} />
        <div className={styles.glow} />

        <div className="container">
          <div className={styles.heroHeader}>
            <div className={styles.productBadge}>
              <Sparkles size={14} />
              <span>AVAEE GD • Gestão do Atendimento Educacional Especializado</span>
            </div>

            <h1 className={styles.heroTitle}>
              Regulação de vagas e inclusão escolar com <span className={styles.titleHighlight}>total transparência</span>.
            </h1>

            <p className={styles.heroSubtitle}>
              A plataforma oficial que conecta escolas regulares, coordenação do CAEE e especialistas (Psicologia, Fonoaudiologia, Terapia Ocupacional e AEE) com Ficha Padronizada em 13 eixos, Semáforo Pedagógico e fila única.
            </p>

            <div className={styles.heroActions}>
              <button onClick={onOpenDemoModal} className={styles.btnPrimary}>
                Solicitar Demonstração para Meu Município
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* High-Precision Vector Mockup do AVAEE GD (Clean Emerald/Teal, Zero Leaked Data) */}
          <div className={styles.cockpitFrame}>
            <div className={styles.browserTopBar}>
              <div className={styles.windowControls}>
                <span className={`${styles.controlDot} ${styles.dotRed}`} />
                <span className={`${styles.controlDot} ${styles.dotYellow}`} />
                <span className={`${styles.controlDot} ${styles.dotGreen}`} />
              </div>
              <div className={styles.browserAddress}>
                <span>avaee.i6systems.com.br/caee/regulacao</span>
              </div>
              <div className={styles.liveBadge}>
                <span className={styles.pulseDot} />
                <span>Central CAEE Ativa</span>
              </div>
            </div>

            {/* Vector UI Body */}
            <div className={styles.cockpitBody}>
              {/* Top Stats Strip */}
              <div className={styles.statsStrip}>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Estudantes em Atendimento</span>
                  <strong className={styles.statNumber}>184 Alunos</strong>
                  <span className={styles.statSub}>Grades Ativas nos Centros</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Semáforo Prioridade Máxima</span>
                  <strong className={`${styles.statNumber} ${styles.colorAlert}`}>12 Casos</strong>
                  <span className={styles.statSub}>Triagem Técnica Concluída</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Tempo Médio de Espera</span>
                  <strong className={`${styles.statNumber} ${styles.colorSuccess}`}>14 Dias</strong>
                  <span className={styles.statSub}>Redução de 84% com Regulação</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Rotatividade de Vagas</span>
                  <strong className={`${styles.statNumber} ${styles.colorTeal}`}>100%</strong>
                  <span className={styles.statSub}>Vagas liberadas após alta PDI</span>
                </div>
              </div>

              {/* Split Panels */}
              <div className={styles.cockpitSplit}>
                {/* Left: Semáforo Pedagógico & Ficha 13 Eixos */}
                <div className={styles.subCard}>
                  <div className={styles.subCardHeader}>
                    <AlertTriangle size={16} color="#059669" />
                    <span>Semáforo Pedagógico • Ficha de Encaminhamento (13 Eixos)</span>
                  </div>

                  <div className={styles.trafficLightList}>
                    <div className={styles.trafficItem}>
                      <div className={`${styles.trafficDot} ${styles.dotGreenTraffic}`} />
                      <div className={styles.trafficInfo}>
                        <strong>🟢 Baixa Necessidade Pedagógica</strong>
                        <span>Adaptação curricular em sala comum com apoio da Sala de Recursos.</span>
                      </div>
                      <span className={styles.trafficCount}>42 Alunos</span>
                    </div>

                    <div className={styles.trafficItem}>
                      <div className={`${styles.trafficDot} ${styles.dotYellowTraffic}`} />
                      <div className={styles.trafficInfo}>
                        <strong>🟡 Necessita Investigação Técnica</strong>
                        <span>Anamnese inicial com Psicóloga agendada na unidade escolar.</span>
                      </div>
                      <span className={styles.trafficCount}>28 Alunos</span>
                    </div>

                    <div className={styles.trafficItem}>
                      <div className={`${styles.trafficDot} ${styles.dotRedTraffic}`} />
                      <div className={styles.trafficInfo}>
                        <strong>🔴 Prioridade Máxima CAEE</strong>
                        <span>Vulnerabilidade e barreira severa. Convocação prioritária para vaga.</span>
                      </div>
                      <span className={styles.trafficCount}>12 Alunos</span>
                    </div>
                  </div>
                </div>

                {/* Right: Fila Única Transparente por Especialidade */}
                <div className={styles.subCard}>
                  <div className={styles.subCardHeader}>
                    <Clock size={16} color="#059669" />
                    <span>Fila Única Transparente por Especialidade</span>
                  </div>

                  <div className={styles.queueGrid}>
                    <div className={styles.queueRow}>
                      <div className={styles.queueSpec}>
                        <Brain size={16} color="#059669" />
                        <span>Psicologia Clínica & Escolar</span>
                      </div>
                      <div className={styles.queueMetrics}>
                        <span className={styles.pillActive}>18 Atendimentos</span>
                        <span className={styles.pillQueue}>6 na Fila</span>
                      </div>
                    </div>

                    <div className={styles.queueRow}>
                      <div className={styles.queueSpec}>
                        <Activity size={16} color="#059669" />
                        <span>Fonoaudiologia</span>
                      </div>
                      <div className={styles.queueMetrics}>
                        <span className={styles.pillActive}>14 Atendimentos</span>
                        <span className={styles.pillQueue}>4 na Fila</span>
                      </div>
                    </div>

                    <div className={styles.queueRow}>
                      <div className={styles.queueSpec}>
                        <HeartHandshake size={16} color="#059669" />
                        <span>Terapia Ocupacional</span>
                      </div>
                      <div className={styles.queueMetrics}>
                        <span className={styles.pillActive}>16 Atendimentos</span>
                        <span className={styles.pillQueue}>5 na Fila</span>
                      </div>
                    </div>

                    <div className={styles.queueRow}>
                      <div className={styles.queueSpec}>
                        <FileText size={16} color="#059669" />
                        <span>Psicopedagogia</span>
                      </div>
                      <div className={styles.queueMetrics}>
                        <span className={styles.pillActive}>12 Atendimentos</span>
                        <span className={styles.pillQueue}>3 na Fila</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars of AVAEE GD */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Pilares da Plataforma</span>
            <h2 className={styles.sectionTitle}>Como o AVAEE GD organiza a Educação Especial</h2>
            <p className={styles.sectionSubtitle}>
              Tecnologia construída especificamente para superar as dificuldades de encaminhamento, triagem e regulação da rede municipal.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {pillars.map((p, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <div className={styles.pillarBadge}>{p.badge}</div>
                <div className={styles.pillarIconBox}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multiprofessional Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Integração e-Multi / CAEE</span>
            <h2 className={styles.sectionTitle}>Especialidades Integradas no Sistema</h2>
            <p className={styles.sectionSubtitle}>
              Cada profissional conta com ambiente próprio para gestão de horários, faltas e registros de evolução clínica e pedagógica.
            </p>
          </div>

          <div className={styles.specialtiesGrid}>
            {specialties.map((spec, index) => (
              <div key={index} className={styles.specialtyCard}>
                <div className={styles.specIcon}>{spec.icon}</div>
                <h3 className={styles.specTitle}>{spec.title}</h3>
                <p className={styles.specDesc}>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeader}>
            <span className={styles.sectionBadge}>Tire suas Dúvidas</span>
            <h2 className={styles.sectionTitleCenter}>Perguntas Frequentes sobre o AVAEE GD</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeFaq === index ? styles.faqOpen : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className={styles.faqQuestion}>
                  <h3>{faq.q}</h3>
                  {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {activeFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Estruture a regulação da Educação Especial no seu município</h2>
            <p className={styles.ctaSubtitle}>
              Garanta fila única transparente, conformidade com a LGPD e agilidade no atendimento de alunos com deficiência ou neurodivergência.
            </p>
            <button onClick={onOpenDemoModal} className={styles.btnPrimaryLg}>
              Solicitar Demonstração para Meu Município
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avaee;
