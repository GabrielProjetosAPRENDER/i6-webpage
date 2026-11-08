import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, ArrowRight,
  Brain, Activity, FileText, Users, ShieldCheck,
  HeartHandshake, Clock, AlertTriangle,
  Lock, Eye, CheckCircle2
} from 'lucide-react';
import styles from './Avaee.module.css';
import avaeeLogo from '../../assets/images/avaee_logo.png';

interface AvaeeProps {
  onOpenDemoModal: () => void;
}

type AvaeeTab = 'ficha' | 'semaforo' | 'prontuario';
type PriorityFilter = 'todos' | 'vermelho' | 'amarelo' | 'verde';
type SigiloMode = 'clinica' | 'pedagogica';

export const Avaee: React.FC<AvaeeProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<AvaeeTab>('semaforo');
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>('todos');
  const [sigiloMode, setSigiloMode] = useState<SigiloMode>('clinica');
  const [selectedBlock, setSelectedBlock] = useState<number>(4);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Synthetic student queue data (Strictly anonymized, zero leaked data)
  const queueCases = [
    { id: 'CAEE-089', name: 'Lucas M.', school: 'E.M. Darcy Ribeiro', priority: 'vermelho', specialty: 'Psicologia & TO', days: 4, desc: 'Desregulação sensorial severa em sala de aula. Intervenção prioritária.' },
    { id: 'CAEE-092', name: 'Beatriz S.', school: 'E.M. Castro Alves', priority: 'amarelo', specialty: 'Fonoaudiologia', days: 11, desc: 'Dificuldade acentuada de processamento auditivo e fala.' },
    { id: 'CAEE-095', name: 'Gabriel P.', school: 'E.M. Monteiro Lobato', priority: 'verde', specialty: 'AEE / SRM', days: 14, desc: 'Adaptação de material didático e apoio na Sala de Recursos.' },
    { id: 'CAEE-098', name: 'Mariana K.', school: 'E.M. Paulo Freire', priority: 'vermelho', specialty: 'Neuropediatria / Psicologia', days: 2, desc: 'Suspeita TEA Nível 3, crise comportamental frequente.' }
  ];

  const filteredCases = priorityFilter === 'todos' 
    ? queueCases 
    : queueCases.filter(c => c.priority === priorityFilter);

  const screeningBlocks = [
    { num: 1, title: 'Identificação & Dados do Estudante', desc: 'Dados civis, matrícula, turno e escola regular de origem.' },
    { num: 4, title: 'Aspectos Sensoriais & Motores', desc: 'Acuidade visual, auditiva, equilíbrio, esquema corporal e motricidade fina.' },
    { num: 7, title: 'Comunicação & Linguagem', desc: 'Compreensão oral, fala espontânea, intenção comunicativa e escrita.' },
    { num: 10, title: 'Intervenções Prévias da Escola', desc: 'Estratégias pedagógicas já testadas pelo professor regente em sala de aula.' },
    { num: 13, title: 'Parecer Conclusivo da Coordenação', desc: 'Indicação do especialista solicitado e justificativa técnica da urgência.' }
  ];

  const pillars = [
    {
      icon: <FileText size={26} />,
      title: 'Ficha Padronizada em 13 Blocos',
      badge: 'Escola Regular',
      desc: 'O Coordenador Pedagógico preenche a ficha oficial padronizada direto no sistema. Elimina ofícios em papel solto e registra objetivamente aspectos de aprendizagem, comunicação e histórico de intervenções prévias da escola.'
    },
    {
      icon: <AlertTriangle size={26} />,
      title: 'Semáforo Pedagógico de Prioridade',
      badge: 'Triagem Objetiva',
      desc: 'Classificação técnica automática em três níveis de criticidade (🟢 Baixa Necessidade, 🟡 Investigação Prioritária, 🔴 Urgência Máxima), acabando com pedidos informais e direcionando as vagas aos casos mais graves.'
    },
    {
      icon: <Clock size={26} />,
      title: 'Fila Única Transparente do CAEE',
      badge: 'Regulação de Vagas',
      desc: 'Gestão da fila de espera municipal categorizada por especialidade. Garante transparência para a Secretaria de Educação, Ministério Público e famílias, com tempo de convocação auditável.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Prontuário com Duplo Sigilo & PDI',
      badge: 'Equipe Multiprofissional',
      desc: 'A equipe de saúde registra anotações clínicas com sigilo médico ético, enquanto os planos pedagógicos (PDI) e adaptações curriculares são compartilhados com o professor da sala comum.'
    }
  ];

  const specialties = [
    {
      icon: <Brain size={24} />,
      title: 'Psicologia Escolar & Clínica',
      desc: 'Triagem inicial, anamnese do estudante, escuta familiar e intervenção comportamental.'
    },
    {
      icon: <Activity size={24} />,
      title: 'Fonoaudiologia',
      desc: 'Diagnóstico e reabilitação da comunicação, linguagem oral, deglutição e processamento auditivo.'
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Terapia Ocupacional (TO)',
      desc: 'Integração sensorial, estímulo à coordenação motora e desenvolvimento da autonomia.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Psicopedagogia',
      desc: 'Investigação profunda de barreiras cognitivas, dislexia, discalculia e rotas pedagógicas personalizadas.'
    },
    {
      icon: <Users size={24} />,
      title: 'Professores de AEE (SRM)',
      desc: 'Adaptação de materiais curriculares, tecnologia assistiva e atendimento na Sala de Recursos.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Regulação Central do CAEE',
      desc: 'Painel mestre para a Secretaria distribuir grades horárias, monitorar altas e rotatividade da fila.'
    }
  ];

  const faqs = [
    {
      q: 'Como o AVAEE GD garante o sigilo ético e atende à LGPD?',
      a: 'O sistema opera com controle rígido de duplo sigilo (Art. 14 da LGPD). Dados de saúde, hipóteses de CID e anotações confidenciais dos terapeutas são visíveis apenas ao profissional de saúde e à equipe do CAEE. A escola comum e os professores têm acesso restrito ao PDI (Plano de Desenvolvimento Individual), que contém apenas as adaptações pedagógicas necessárias para o cotidiano escolar.'
    },
    {
      q: 'Como funciona a rotatividade de vagas no CAEE?',
      a: 'O atendimento no CAEE não é vitalício. Cada estudante recebe um plano de intervenção por ciclo com metas claras no PDI. Ao atingir os marcos terapêuticos estipulados, o especialista concede a alta ou transiciona o estudante para acompanhamento na Sala de Recursos Multifuncionais (SRM), liberando automaticamente a vaga na grade horária para o próximo da fila única.'
    },
    {
      q: 'O sistema substitui o trabalho da escola regular ou do professor?',
      a: 'Não. O AVAEE GD conecta a escola regular ao Centro de Atendimento Especializado (CAEE). O coordenador escolar faz a solicitação formal no sistema, a equipe multidisciplinar atende no contraturno escolar e as orientações práticas retornam ao professor para aplicação em sala de aula.'
    },
    {
      q: 'O que o Semáforo Pedagógico analisa para definir a prioridade?',
      a: 'O algoritmo do Semáforo cruza os indicadores preenchidos na Ficha de 13 Blocos: grau de prejuízo no convívio escolar, presença de desregulação sensorial grave, barreiras severas de comunicação e tempo decorrido sem suporte especializado, gerando a pontuação técnica que classifica o caso em Verde, Amarelo ou Vermelho.'
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
              <img src={avaeeLogo} alt="AVAEE GD" className={styles.badgeLogo} />
              <span>AVAEE GD • Regulação da Educação Especial Inclusiva</span>
            </div>

            <h1 className={styles.heroTitle}>
              Regulação técnica de vagas e inclusão escolar com <span className={styles.titleHighlight}>total transparência</span>.
            </h1>

            <p className={styles.heroSubtitle}>
              A plataforma oficial que conecta escolas regulares, coordenação do CAEE e especialistas (Psicologia, Fonoaudiologia, Terapia Ocupacional e AEE) com Ficha Padronizada em 13 Blocos, Semáforo Pedagógico de criticidade e fila única.
            </p>

            <div className={styles.heroActions}>
              <button onClick={onOpenDemoModal} className={styles.btnPrimary}>
                Solicitar Demonstração para Meu Município
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Interactive Live SaaS Cockpit (AVAEE GD) */}
          <div className={styles.cockpitContainer}>
            <div className={styles.cockpitWindow}>
              {/* Window Header */}
              <div className={styles.windowHeader}>
                <div className={styles.windowDots}>
                  <div className={styles.dotRed} />
                  <div className={styles.dotYellow} />
                  <div className={styles.dotGreen} />
                </div>
                <div className={styles.windowBrand}>
                  <img src={avaeeLogo} alt="AVAEE GD" className={styles.cockpitLogoImg} />
                  <span>AVAEE GD • Plataforma CAEE</span>
                </div>
                <div className={styles.windowAddressBar}>
                  <ShieldCheck size={13} color="#45B5A5" />
                  <span>avaee.i6systems.com.br/caee/regulacao</span>
                </div>
                <div className={styles.windowMetaStatus}>
                  <span className={styles.pulseDot} />
                  <span>Central CAEE Ativa</span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className={styles.cockpitTabs}>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'semaforo' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('semaforo')}
                >
                  <AlertTriangle size={16} />
                  <span>Semáforo Pedagógico & Fila Única</span>
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'ficha' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('ficha')}
                >
                  <FileText size={16} />
                  <span>Ficha Padronizada (13 Blocos)</span>
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'prontuario' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('prontuario')}
                >
                  <ShieldCheck size={16} />
                  <span>Prontuário com Duplo Sigilo & PDI</span>
                </button>
              </div>

              {/* Cockpit Body */}
              <div className={styles.cockpitBody}>
                {/* TAB 1: SEMÁFORO & FILA ÚNICA */}
                {activeTab === 'semaforo' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>Central de Regulação de Vagas • CAEE Municipal</h3>
                        <p className={styles.viewSub}>Triagem técnica contínua baseada em criticidade • 184 estudantes atendidos na rede</p>
                      </div>
                      <div className={styles.filterButtonGroup}>
                        <button 
                          className={`${styles.filterBtn} ${priorityFilter === 'todos' ? styles.filterBtnActive : ''}`}
                          onClick={() => setPriorityFilter('todos')}
                        >
                          Todos (82)
                        </button>
                        <button 
                          className={`${styles.filterBtn} ${priorityFilter === 'vermelho' ? styles.filterBtnRedActive : ''}`}
                          onClick={() => setPriorityFilter('vermelho')}
                        >
                          🔴 Urgência (12)
                        </button>
                        <button 
                          className={`${styles.filterBtn} ${priorityFilter === 'amarelo' ? styles.filterBtnYellowActive : ''}`}
                          onClick={() => setPriorityFilter('amarelo')}
                        >
                          🟡 Prioritário (28)
                        </button>
                        <button 
                          className={`${styles.filterBtn} ${priorityFilter === 'verde' ? styles.filterBtnGreenActive : ''}`}
                          onClick={() => setPriorityFilter('verde')}
                        >
                          🟢 Acompanhamento (42)
                        </button>
                      </div>
                    </div>

                    {/* Queue Case Cards */}
                    <div className={styles.queueTable}>
                      <div className={styles.tableHeaderRow}>
                        <span>Protocolo & Estudante</span>
                        <span>Unidade Solicitante</span>
                        <span>Especialidade Requisitada</span>
                        <span>Tempo em Espera</span>
                        <span>Status</span>
                      </div>
                      {filteredCases.map(item => (
                        <div key={item.id} className={styles.tableDataRow}>
                          <div className={styles.caseStudentCell}>
                            <span className={styles.caseIdBadge}>{item.id}</span>
                            <div>
                              <strong>{item.name}</strong>
                              <span className={styles.caseDescHint}>{item.desc}</span>
                            </div>
                          </div>
                          <span className={styles.cellMuted}>{item.school}</span>
                          <span className={styles.cellBold}>{item.specialty}</span>
                          <span className={styles.cellMuted}>{item.days} dias</span>
                          <div>
                            {item.priority === 'vermelho' && (
                              <span className={styles.badgeUrgent}>🔴 Prioridade Máxima</span>
                            )}
                            {item.priority === 'amarelo' && (
                              <span className={styles.badgeWarning}>🟡 Em Triagem</span>
                            )}
                            {item.priority === 'verde' && (
                              <span className={styles.badgeRegular}>🟢 Sala de Recursos</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Specialties Strip */}
                    <div className={styles.specialtyMetricsStrip}>
                      <div className={styles.specMiniCard}>
                        <Brain size={16} color="#0D9488" />
                        <div>
                          <strong>Psicologia Clínica</strong>
                          <span>18 vagas ativas • 6 na fila</span>
                        </div>
                      </div>
                      <div className={styles.specMiniCard}>
                        <Activity size={16} color="#0D9488" />
                        <div>
                          <strong>Fonoaudiologia</strong>
                          <span>14 vagas ativas • 4 na fila</span>
                        </div>
                      </div>
                      <div className={styles.specMiniCard}>
                        <HeartHandshake size={16} color="#0D9488" />
                        <div>
                          <strong>Terapia Ocupacional</strong>
                          <span>12 vagas ativas • 5 na fila</span>
                        </div>
                      </div>
                      <div className={styles.specMiniCard}>
                        <FileText size={16} color="#0D9488" />
                        <div>
                          <strong>Psicopedagogia</strong>
                          <span>16 vagas ativas • 3 na fila</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: FICHA EM 13 BLOCOS */}
                {activeTab === 'ficha' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>Ficha Padronizada de Encaminhamento (13 Blocos)</h3>
                        <p className={styles.viewSub}>Instrumento técnico preenchido pela coordenação da escola regular para acionar o CAEE</p>
                      </div>
                      <div className={styles.standardBadge}>
                        <CheckCircle2 size={15} color="#0D9488" />
                        <span>Padrão Homologado SEMED</span>
                      </div>
                    </div>

                    <div className={styles.blocksExplorer}>
                      <div className={styles.blocksSidebar}>
                        {screeningBlocks.map(block => (
                          <button 
                            key={block.num}
                            className={`${styles.blockNavBtn} ${selectedBlock === block.num ? styles.blockNavBtnActive : ''}`}
                            onClick={() => setSelectedBlock(block.num)}
                          >
                            <span className={styles.blockNumBadge}>Bloco {block.num.toString().padStart(2, '0')}</span>
                            <span className={styles.blockNavTitle}>{block.title}</span>
                          </button>
                        ))}
                      </div>

                      <div className={styles.blockDetailView}>
                        <div className={styles.blockDetailHeader}>
                          <span className={styles.blockDetailTag}>Bloco Selecionado • Campo Oficial</span>
                          <h4>Bloco {selectedBlock.toString().padStart(2, '0')}: {screeningBlocks.find(b => b.num === selectedBlock)?.title}</h4>
                          <p>{screeningBlocks.find(b => b.num === selectedBlock)?.desc}</p>
                        </div>

                        {selectedBlock === 4 && (
                          <div className={styles.blockQuestionsMock}>
                            <div className={styles.questionItem}>
                              <label>Apresenta hipersensibilidade a ruídos intensos ou toques?</label>
                              <div className={styles.radioGroupMock}>
                                <span className={styles.radioActive}>Sim, acentuada (tampa ouvidos em momentos de alarme ou gritaria)</span>
                              </div>
                            </div>
                            <div className={styles.questionItem}>
                              <label>Coordenação motora fina no manuseio de lápis e tesoura:</label>
                              <div className={styles.radioGroupMock}>
                                <span className={styles.radioActive}>Apresenta preensão palmar imatura para a faixa etária</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedBlock !== 4 && (
                          <div className={styles.blockQuestionsMock}>
                            <div className={styles.questionItem}>
                              <label>Registro estruturado de observações pedagógicas em sala de aula:</label>
                              <div className={styles.textareaMock}>
                                "Estudante demonstra potencial de raciocínio lógico em jogos visuais, mas necessita de apoio intensivo para leitura de enunciados longos e regulação de tempo."
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: PRONTUÁRIO DUPLO SIGILO */}
                {activeTab === 'prontuario' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>Prontuário Multiprofissional com Duplo Sigilo & PDI</h3>
                        <p className={styles.viewSub}>Estudante: Lucas M. • 4º Ano A • Protocolo CAEE-089 (LGPD Art. 14)</p>
                      </div>
                      <div className={styles.sigiloToggleGroup}>
                        <button 
                          className={`${styles.sigiloBtn} ${sigiloMode === 'clinica' ? styles.sigiloBtnActive : ''}`}
                          onClick={() => setSigiloMode('clinica')}
                        >
                          <Lock size={14} />
                          <span>Visão Clínica Sigilosa (Saúde)</span>
                        </button>
                        <button 
                          className={`${styles.sigiloBtn} ${sigiloMode === 'pedagogica' ? styles.sigiloBtnActive : ''}`}
                          onClick={() => setSigiloMode('pedagogica')}
                        >
                          <Eye size={14} />
                          <span>Visão Pedagógica Compartilhada (PDI)</span>
                        </button>
                      </div>
                    </div>

                    {sigiloMode === 'clinica' ? (
                      <div className={styles.clinicalPanel}>
                        <div className={styles.sigiloWarningBox}>
                          <Lock size={16} color="#DC2626" />
                          <span><strong>Área Restrita aos Terapeutas (Psicólogo / Fono / TO):</strong> Informações clínicas protegidas por sigilo profissional e LGPD. Não visíveis para professores da sala comum.</span>
                        </div>
                        <div className={styles.clinicalNotes}>
                          <div className={styles.noteCard}>
                            <span className={styles.noteDate}>04/11/2026 • Sessão 06 (Psicologia Clínica)</span>
                            <h5>Evolução Comportamental e Vínculo Terapêutico</h5>
                            <p>Estudante demonstrou maior tolerância à troca de atividades dirigidas. Utilizados suportes visuais de rotina com redução de episódios de desregulação. Orientação realizada com os responsáveis para manutenção de rotinas previsíveis no domicílio.</p>
                          </div>
                          <div className={styles.noteCard}>
                            <span className={styles.noteDate}>28/10/2026 • Avaliação Sensorial (Terapia Ocupacional)</span>
                            <h5>Perfil de Modulação Sensorial</h5>
                            <p>Identificada busca proprioceptiva e defensividade tátil leve. Recomendadas pausas sensoriais de 5 minutos a cada bloco de 45 minutos de aula regular.</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.pedagogicalPanel}>
                        <div className={styles.pedagogyNoticeBox}>
                          <Eye size={16} color="#0D9488" />
                          <span><strong>Documento Compartilhado com o Professor Regente:</strong> PDI com adaptações práticas para o dia a dia da sala de aula comum.</span>
                        </div>
                        <div className={styles.pdiGrid}>
                          <div className={styles.pdiItem}>
                            <strong>Adaptação Curricular & Avaliações</strong>
                            <p>Provas com fonte ampliada (tamanho 16), tempo adicional de 30 minutos e leitura mediada dos enunciados pelo professor de apoio.</p>
                          </div>
                          <div className={styles.pdiItem}>
                            <strong>Recursos de Acessibilidade & Sala de Recursos</strong>
                            <p>Atendimento 2 vezes por semana no contraturno na Sala de Recursos Multifuncionais (SRM) com foco em alfabetização matemática e tecnologia assistiva.</p>
                          </div>
                          <div className={styles.pdiItem}>
                            <strong>Estratégia de Regulação em Sala</strong>
                            <p>Posicionamento do aluno na primeira fileira, longe de janelas com ruídos externos e permissão para uso de abafador auricular em eventos ruidosos.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Os 4 Pilares do AVAEE GD</span>
            <h2 className={styles.sectionTitle}>Como transformamos a Educação Especial no seu município</h2>
            <p className={styles.sectionSubtitle}>
              Da triagem inicial na escola regular até o atendimento clínico no CAEE com transparência absoluta.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <div className={styles.pillarHeader}>
                  <div className={styles.pillarIconBox}>{pillar.icon}</div>
                  <span className={styles.pillarBadge}>{pillar.badge}</span>
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className={styles.specialtiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Equipe Multiprofissional</span>
            <h2 className={styles.sectionTitle}>Especialidades integradas no mesmo sistema</h2>
            <p className={styles.sectionSubtitle}>
              Cada terapeuta gerencia sua agenda, prontuários e altas com total rastreabilidade.
            </p>
          </div>

          <div className={styles.specialtiesGrid}>
            {specialties.map((spec, idx) => (
              <div key={idx} className={styles.specCard}>
                <div className={styles.specIconBox}>{spec.icon}</div>
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
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Tire Suas Dúvidas</span>
            <h2 className={styles.sectionTitle}>Perguntas frequentes sobre o AVAEE GD</h2>
            <p className={styles.sectionSubtitle}>Transparência sobre funcionamento técnico, LGPD e rotatividade de vagas.</p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
                  <button 
                    className={styles.faqQuestion} 
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Garanta inclusão real e regulação técnica no seu município</h2>
            <p className={styles.ctaSubtitle}>
              Agende uma apresentação técnica exclusiva do AVAEE GD com nossa equipe de especialistas.
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

export default Avaee;
