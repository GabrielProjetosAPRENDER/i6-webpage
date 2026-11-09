import React, { useState } from 'react';
import { 
  Smartphone, ArrowRight, BarChart3, Users, 
  CheckCircle2, ShieldCheck, 
  ChevronDown, ChevronUp, Bus, Utensils, 
  FileCheck2,
  School, GraduationCap, AlertCircle, Clock,
  AlertTriangle, BookOpen
} from 'lucide-react';
import styles from './Gestor.module.css';
import gestorLogo from '../../assets/images/gestor_logo.png';

interface GestorProps {
  onOpenDemoModal: () => void;
}

type TabKey = 'semed' | 'diario' | 'transporte' | 'censo';

export const Gestor: React.FC<GestorProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('semed');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Interactive student attendance simulation
  const [students, setStudents] = useState([
    { id: 1, initials: 'LG', name: 'Lucas Gabriel Silveira', status: 'presente', faltas: 0 },
    { id: 2, initials: 'BV', name: 'Beatriz Vasconcelos', status: 'presente', faltas: 1 },
    { id: 3, initials: 'AH', name: 'Arthur Henrique Costa', status: 'ausente', faltas: 3 },
    { id: 4, initials: 'ML', name: 'Mariana Lima Duarte', status: 'presente', faltas: 0 }
  ]);

  const toggleStudentStatus = (id: number) => {
    setStudents(prev => prev.map(s => {
      if (s.id !== id) return s;
      const nextStatus = s.status === 'presente' ? 'ausente' : s.status === 'ausente' ? 'justificada' : 'presente';
      return { ...s, status: nextStatus };
    }));
  };

  const presentCount = students.filter(s => s.status === 'presente').length;
  const presenceRate = Math.round((presentCount / students.length) * 100);

  const modules = [
    {
      id: 'diario',
      icon: <BookOpen size={24} />,
      title: 'Diário de Classe & Matriz BNCC',
      badge: 'Para Professores',
      desc: 'Chamada ágil, lançamento de notas e plano de aula com habilidades da BNCC direto no sistema. Interface ergonômica que simplifica o trabalho docente e gera relatórios automáticos de aprendizagem para a coordenação.',
      highlights: [
        { label: 'Chamada Tátil em Poucos Cliques', desc: 'Interface ergonômica que devolve tempo pedagógico para a sala de aula.' },
        { label: 'Habilidades da BNCC Integradas', desc: 'Associe objetivos curriculares oficiais a cada aula registrada.' }
      ]
    },
    {
      id: 'censo',
      icon: <FileCheck2 size={24} />,
      title: 'Pré-Validação & Exportação do Educacenso (INEP)',
      badge: 'Blindagem do FUNDEB',
      desc: 'Auditoria contínua da base cadastral da rede municipal. Detecta inconsistências de CPF, NIS, filiação e laudos da educação especial antes do fechamento do INEP, eliminando o risco de bloqueio de repasses federais.',
      highlights: [
        { label: 'Auditoria Preventiva em Tempo Real', desc: 'Identifica campos incompletos antes dos prazos oficiais do governo federal.' },
        { label: 'Exportação TXT Oficial em 1 Clique', desc: 'Arquivo homologado para importação direta no sistema do Educacenso.' }
      ]
    },
    {
      id: 'transporte',
      icon: <Bus size={24} />,
      title: 'Transporte Escolar & Rotas Rurais',
      badge: 'Logística Municipal',
      desc: 'Mapeamento detalhado de itinerários, veículos da frota municipal e terceirizados, motoristas credenciados e vinculação precisa de cada aluno à sua parada de ônibus.',
      highlights: [
        { label: 'Roteirização Georreferenciada', desc: 'Redução drástica de gastos com combustível e rotas duplicadas.' },
        { label: 'Segurança e Comprovação', desc: 'Registro formal dos estudantes atendidos para prestação de contas aos órgãos de controle.' }
      ]
    },
    {
      id: 'merenda',
      icon: <Utensils size={24} />,
      title: 'PNAE • Cardápio & Nutrição Inteligente',
      badge: 'Alimentação Escolar',
      desc: 'Elaboração de cardápios semanais pelas nutricionistas da secretaria com cálculo per capita de calorias, proteínas, ferro e micronutrientes, em total conformidade com as normas do FNDE.',
      highlights: [
        { label: 'Ficha Técnica Padronizada', desc: 'Cálculo automatizado de nutrientes e controle do estoque de despensas escolares.' },
        { label: 'Conformidade FNDE/PNAE', desc: 'Gera relatórios técnicos prontos para inspeções do Conselho de Alimentação Escolar (CAE).' }
      ]
    },
    {
      id: 'matriculas',
      icon: <Users size={24} />,
      title: 'Pré-Matrícula Digital & Fila de Espera',
      badge: 'Secretaria Escolar',
      desc: 'Centralize solicitações públicas de vagas online com critérios objetivos de pontuação socioeconômica e proximidade residencial (zoneamento escolar), acabando com filas na porta das unidades.',
      highlights: [
        { label: 'Enturmação por Capacidade', desc: 'Distribuição inteligente de estudantes respeitando o limite físico das salas.' },
        { label: 'Histórico Escolar Digital', desc: 'Prontuário unificado do estudante desde a creche até o 9º ano.' }
      ]
    },
    {
      id: 'dashboard',
      icon: <BarChart3 size={24} />,
      title: 'Painel Executivo & BI da Secretaria',
      badge: 'Gestão Estratégica',
      desc: 'Cockpit analítico para Secretários e Prefeitos: acompanhamento de frequência diária da rede, previsão de metas do IDEB, alertas precoces de evasão para Busca Ativa (Selo UNICEF).',
      highlights: [
        { label: 'Indicadores em Tempo Real', desc: 'Monitore todas as escolas do município sem depender de relatórios em papel.' },
        { label: 'Busca Ativa Automatizada', desc: 'Disparo de alertas preventivos após 3 faltas consecutivas sem justificativa.' }
      ]
    }
  ];

  const faqs = [
    {
      q: 'Como o Gestor Educ integra as habilidades da BNCC ao diário do professor?',
      a: 'O sistema possui a matriz completa da Base Nacional Comum Curricular (BNCC) pré-carregada por ano e componente curricular. Ao lançar os conteúdos das aulas e avaliações, o docente vincula diretamente os códigos de habilidades trabalhados, gerando relatórios pedagógicos automáticos para a coordenação e supervisão escolar.'
    },
    {
      q: 'Como o Gestor Educ protege os repasses do FUNDEB do município?',
      a: 'Os repasses do FUNDEB (VAAF, VAAT e VAAR) dependem estritamente da acurácia dos dados enviados ao Censo Escolar (INEP). O motor de pré-validação do Gestor Educ audita continuamente o banco municipal identificando inconsistências comuns — como CPFs ausentes, falta de alocação de docentes em turmas ativas e estudantes da educação especial sem laudo formalizado (que garantem contagem dupla no cálculo do FUNDEB) — permitindo a correção antes da data de corte do Censo.'
    },
    {
      q: 'Como funciona o controle de rotas de transporte escolar rural?',
      a: 'O módulo de transporte gerencia veículos próprios e terceirizados, motoristas, pontos de parada e alunos vinculados a cada itinerário. O sistema calcula a quilometragem percorrida por rota, prevenindo custos abusivos de combustível e fornecendo dados exatos para auditorias do Tribunal de Contas do Estado (TCE).'
    },
    {
      q: 'O sistema atende aos padrões de sigilo e à LGPD?',
      a: 'Sim, rigorosamente. O banco de dados adota isolamento multi-tenant por schema (cada município opera em um namespace independente no PostgreSQL). Dados de menores de idade, matrículas e relatórios socioeconômicos contam com controle de acesso em três camadas baseado em perfis (RBAC), registro de logs de auditoria e conformidade com o Artigo 14 da LGPD.'
    }
  ];

  return (
    <div className={styles.gestorPage}>
      {/* Product Hero */}
      <section className={styles.heroSection}>
        <div className={styles.gridOverlay} />
        <div className={styles.glow} />
        
        <div className="container">
          <div className={styles.heroHeader}>
            <div className={styles.productBadge}>
              <img src={gestorLogo} alt="Gestor Educ" className={styles.badgeLogo} />
              <span>Gestor Educ • Suíte Integrada de Gestão Municipal</span>
            </div>
            <h1 className={styles.heroTitle}>
              A modernização completa da <span className={styles.titleHighlight}>Educação Municipal</span> em um único ecossistema.
            </h1>
            <p className={styles.heroSubtitle}>
              Conecte a Secretaria de Educação, diretores escolares, professores e famílias. Diário eletrônico integrado à BNCC, logística de transporte escolar rural, gestão nutricional PNAE e auditoria preventiva do Educacenso para blindar o FUNDEB.
            </p>
            <div className={styles.heroCtaGrid}>
              <button onClick={onOpenDemoModal} className={styles.btnPrimary}>
                Solicitar Demonstração para Meu Município
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Interactive Live SaaS Cockpit (Elite GovTech Standard) */}
          <div className={styles.cockpitContainer}>
            <div className={styles.cockpitWindow}>
              {/* Cockpit Window Header */}
              <div className={styles.windowHeader}>
                <div className={styles.windowBrand}>
                  <img src={gestorLogo} alt="Gestor Educ" className={styles.cockpitLogoImg} />
                  <div>
                    <span className={styles.brandTitle}>Gestor Educ • Suíte Integrada de Gestão Municipal (SEMED)</span>
                    <span className={styles.brandNetwork}>Rede Municipal de Ensino • Gonçalves Dias - MA</span>
                  </div>
                </div>

                <div className={styles.windowRightMeta}>
                  <div className={styles.operacionalBadge}>
                    <span className={styles.greenDotSmall} />
                    <span>Rede Municipal Conectada</span>
                  </div>
                  <span className={styles.roleTag}>Painel da Secretaria</span>
                </div>
              </div>

              {/* Navigation Tabs for Cockpit */}
              <div className={styles.cockpitTabs}>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'semed' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('semed')}
                >
                  <BarChart3 size={16} />
                  <span>Painel Geral SEMED</span>
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'diario' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('diario')}
                >
                  <BookOpen size={16} />
                  <span>Diário Escolar & BNCC</span>
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'transporte' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('transporte')}
                >
                  <Bus size={16} />
                  <span>Transporte & Rotas Rurais</span>
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'censo' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('censo')}
                >
                  <FileCheck2 size={16} />
                  <span>Auditoria Censo INEP</span>
                </button>
              </div>

              {/* Cockpit Dynamic Body */}
              <div className={styles.cockpitBody}>
                {/* TAB 1: PAINEL GERAL SEMED (VISÃO EXECUTIVA) */}
                {activeTab === 'semed' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>Secretaria Municipal de Educação • Painel Integrado</h3>
                        <p className={styles.viewSub}>Monitoramento em tempo real de todas as 18 unidades escolares municipais</p>
                      </div>
                      <div className={styles.semedLiveBadge}>
                        <Clock size={14} />
                        <span>Ano Letivo 2026 • 2º Bimestre Ativo</span>
                      </div>
                    </div>

                    {/* Executive KPIs Grid */}
                    <div className={styles.kpiCardsGrid}>
                      <div className={styles.kpiCardItem}>
                        <div className={styles.kpiIconBoxBlue}>
                          <Users size={20} />
                        </div>
                        <div className={styles.kpiInfo}>
                          <span className={styles.kpiLabel}>Alunos Matriculados</span>
                          <strong className={styles.kpiValue}>3.420</strong>
                          <span className={styles.kpiTrendPos}>+4.2% frequência regular</span>
                        </div>
                      </div>

                      <div className={styles.kpiCardItem}>
                        <div className={styles.kpiIconBoxGreen}>
                          <School size={20} />
                        </div>
                        <div className={styles.kpiInfo}>
                          <span className={styles.kpiLabel}>Escolas Municipais</span>
                          <strong className={styles.kpiValue}>18</strong>
                          <span className={styles.kpiSubGreen}>100% integradas ao sistema</span>
                        </div>
                      </div>

                      <div className={styles.kpiCardItem}>
                        <div className={styles.kpiIconBoxPurple}>
                          <GraduationCap size={20} />
                        </div>
                        <div className={styles.kpiInfo}>
                          <span className={styles.kpiLabel}>Docentes Ativos</span>
                          <strong className={styles.kpiValue}>186</strong>
                          <span className={styles.kpiSubPurple}>Diários digitais atualizados</span>
                        </div>
                      </div>

                      <div className={styles.kpiCardItem}>
                        <div className={styles.kpiIconBoxAmber}>
                          <Clock size={20} />
                        </div>
                        <div className={styles.kpiInfo}>
                          <span className={styles.kpiLabel}>Frequência Média</span>
                          <strong className={styles.kpiValue}>94.2%</strong>
                          <span className={styles.kpiTrendPos}>Meta IDEB alcançada</span>
                        </div>
                      </div>
                    </div>

                    {/* Alert Card: Busca Ativa UNICEF */}
                    <div className={styles.unicefAlertCard}>
                      <div className={styles.unicefAlertHeader}>
                        <div className={styles.unicefBadge}>
                          <AlertTriangle size={14} />
                          <span>Monitoramento Preventivo de Evasão (Busca Ativa UNICEF)</span>
                        </div>
                        <span className={styles.unicefStat}>14 Alunos sob acompanhamento</span>
                      </div>
                      <p className={styles.unicefDesc}>
                        O algoritmo do Gestor Educ detectou 14 estudantes com 3 ou mais faltas injustificadas na rede esta semana. As fichas de intervenção domiciliar já foram encaminhadas automaticamente aos coordenadores escolares.
                      </p>
                      <div className={styles.unicefProgressWrapper}>
                        <div className={styles.unicefProgressBar} style={{ width: '96.2%' }} />
                      </div>
                      <div className={styles.unicefFooter}>
                        <span>Índice de Permanência Escolar na Rede: <strong>96.2%</strong></span>
                        <span className={styles.unicefActionHint}>Ação preventiva em curso</span>
                      </div>
                    </div>

                    {/* Operational Modules Cards */}
                    <div className={styles.opsGrid}>
                      <div className={styles.opsCard}>
                        <div className={styles.opsCardHeader}>
                          <Smartphone size={18} className={styles.opsIconBlue} />
                          <strong>Diários Mobile</strong>
                        </div>
                        <p>186 turmas com chamadas e planos de aula sincronizados hoje.</p>
                      </div>

                      <div className={styles.opsCard}>
                        <div className={styles.opsCardHeader}>
                          <Utensils size={18} className={styles.opsIconGreen} />
                          <strong>PNAE Nutricional</strong>
                        </div>
                        <p>Cardápios semanais com conformidade per capita do FNDE aprovados.</p>
                      </div>

                      <div className={styles.opsCard}>
                        <div className={styles.opsCardHeader}>
                          <Bus size={18} className={styles.opsIconAmber} />
                          <strong>Transporte Rural</strong>
                        </div>
                        <p>12 rotas municipais ativas operando com pontualidade na zona rural.</p>
                      </div>

                      <div className={styles.opsCard}>
                        <div className={styles.opsCardHeader}>
                          <FileCheck2 size={18} className={styles.opsIconPurple} />
                          <strong>Censo Escolar</strong>
                        </div>
                        <p>Base cadastral 100% blindada para as complementações do FUNDEB.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: DIÁRIO ESCOLAR & BNCC (TRYOUT DOCENTE) */}
                {activeTab === 'diario' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>E.M. Darcy Ribeiro • 5º Ano B (Matutino)</h3>
                        <p className={styles.viewSub}>Professor: Carlos Eduardo • Componente Curricular: Matemática</p>
                      </div>
                      <div className={styles.syncControlBox}>
                        <div className={styles.syncStatusBadge}>
                          <CheckCircle2 size={14} color="#10B981" />
                          <span className={styles.colorSuccessText}>Registro em Tempo Real • Nuvem SEMED</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.bnccNoticeBar}>
                      <span className={styles.bnccTag}>BNCC • EF05MA08</span>
                      <span>Resolver e elaborar problemas de multiplicação e divisão com números naturais usando estimativas e cálculo mental.</span>
                    </div>

                    {/* Interactive Student Attendance Roster (Authentic Teacher View) */}
                    <div className={styles.rosterTableWrapper}>
                      <table className={styles.rosterTable}>
                        <thead>
                          <tr>
                            <th>Nº &amp; NOME DO ESTUDANTE</th>
                            <th>HISTÓRICO DA SEMANA</th>
                            <th>SITUAÇÃO DE FREQUÊNCIA (CLIQUE PARA ALTERNAR)</th>
                            <th style={{ textAlign: 'right' }}>SITUAÇÃO CENSO</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map(student => (
                            <tr key={student.id} className={styles.rosterRow}>
                              <td>
                                <div className={styles.rosterStudentCell}>
                                  <span className={styles.rosterCallBadge}>#{student.id.toString().padStart(2, '0')}</span>
                                  <div className={`${styles.rosterAvatar} ${
                                    student.status === 'presente' ? styles.avatarPresent :
                                    student.status === 'ausente' ? styles.avatarAbsent : styles.avatarJustified
                                  }`}>
                                    {student.initials}
                                  </div>
                                  <div>
                                    <strong className={styles.rosterStudentName}>{student.name}</strong>
                                    <span className={styles.rosterMatricula}>Matrícula: 2026.0{student.id}42</span>
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className={styles.historyDotsRow} title="Frequência nos últimos 5 dias letivos">
                                  <span className={styles.dotP}>P</span>
                                  <span className={styles.dotP}>P</span>
                                  <span className={styles.dotP}>P</span>
                                  <span className={student.status === 'ausente' ? styles.dotF : styles.dotP}>
                                    {student.status === 'ausente' ? 'F' : 'P'}
                                  </span>
                                  <span className={
                                    student.status === 'presente' ? styles.dotP :
                                    student.status === 'ausente' ? styles.dotF : styles.dotJ
                                  }>
                                    {student.status === 'presente' ? 'P' : student.status === 'ausente' ? 'F' : 'J'}
                                  </span>
                                </div>
                              </td>

                              <td>
                                <button 
                                  className={`${styles.modernStatusBtn} ${
                                    student.status === 'presente' ? styles.btnStatePresent :
                                    student.status === 'ausente' ? styles.btnStateAbsent : styles.btnStateJustified
                                  }`}
                                  onClick={() => toggleStudentStatus(student.id)}
                                  title="Clique para alternar presença"
                                >
                                  {student.status === 'presente' && '✓ Presente em Sala'}
                                  {student.status === 'ausente' && '✕ Falta Registrada'}
                                  {student.status === 'justificada' && '⏱ Falta Justificada'}
                                </button>
                              </td>

                              <td style={{ textAlign: 'right' }}>
                                <span className={styles.censoOkBadge}>Regular • 100% INEP</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Real-time Dynamic Feedback Bar */}
                    <div className={styles.liveFeedbackBar}>
                      <div className={styles.liveMetricLeft}>
                        <span>Frequência da Turma Hoje:</span>
                        <strong className={presenceRate >= 75 ? styles.rateHigh : styles.rateLow}>
                          {presenceRate}% ({presentCount}/{students.length} presentes)
                        </strong>
                      </div>
                      <div className={styles.liveMetricRight}>
                        <ShieldCheck size={14} color="#10B981" />
                        <span>Registro Oficial SEMED • Conformidade Curricular BNCC</span>
                      </div>
                    </div>

                    {/* Intelligent Absenteeism Warning */}
                    {students.some(s => s.status === 'ausente') && (
                      <div className={styles.smartWarningBox}>
                        <AlertCircle size={16} color="#DC2626" />
                        <span>
                          <strong>Alerta Automático de Infrequência:</strong> O aluno com falta registrada acumulou infrequência na semana. O Gestor Educ envia notificação preventiva imediata para a coordenação pedagógica (Busca Ativa UNICEF).
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 3: TRANSPORTE ESCOLAR & ROTAS RURAIS */}
                {activeTab === 'transporte' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>Rota 04 • Linha Assentamento Santa Maria ➔ Sede</h3>
                        <p className={styles.viewSub}>Veículo: Micro-ônibus Volare V8L (Pref. 14) • Motorista: José Alencar</p>
                      </div>
                      <div className={styles.capacityBadge}>
                        <span>Capacidade: 28 passageiros</span>
                        <strong>24 Alunos Vinculados</strong>
                      </div>
                    </div>

                    <div className={styles.transportRouteTimeline}>
                      <div className={styles.timelineItem}>
                        <div className={styles.timelinePoint} />
                        <div className={styles.timelineInfo}>
                          <strong>06:15 • Parada 01: Povoado Santa Luzia</strong>
                          <span>6 alunos embarcados • 08 km percorridos</span>
                        </div>
                      </div>
                      <div className={styles.timelineItem}>
                        <div className={styles.timelinePoint} />
                        <div className={styles.timelineInfo}>
                          <strong>06:30 • Parada 02: Entrada Fazenda Boa Esperança</strong>
                          <span>5 alunos embarcados • 16 km percorridos</span>
                        </div>
                      </div>
                      <div className={styles.timelineItem}>
                        <div className={styles.timelinePoint} />
                        <div className={styles.timelineInfo}>
                          <strong>06:45 • Parada 03: Entroncamento da Linha 2</strong>
                          <span>13 alunos embarcados • 27 km percorridos</span>
                        </div>
                      </div>
                      <div className={styles.timelineItem}>
                        <div className={`${styles.timelinePoint} ${styles.pointTerminal}`} />
                        <div className={styles.timelineInfo}>
                          <strong>07:05 • Destino: E.M. Darcy Ribeiro & E.M. Castro Alves</strong>
                          <span>24 alunos desembarcados com pontualidade • 38 km totais</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: AUDITORIA CENSO ESCOLAR INEP */}
                {activeTab === 'censo' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>Auditoria de Conformidade do Censo Escolar (INEP)</h3>
                        <p className={styles.viewSub}>Base cadastral de 18 Escolas Municipais • Proteção das Complementações do FUNDEB</p>
                      </div>
                      <div className={styles.exportBadgeReady}>
                        <CheckCircle2 size={16} color="#10B981" />
                        <span>99.4% Conforme • Apto para Exportar TXT</span>
                      </div>
                    </div>

                    <div className={styles.auditGridMetrics}>
                      <div className={styles.metricCard}>
                        <span className={styles.metricLabel}>Total de Alunos Auditados</span>
                        <strong className={styles.metricValue}>3.420 Alunos</strong>
                        <span className={styles.metricSub}>100% com CPF e certidão validados</span>
                      </div>
                      <div className={styles.metricCard}>
                        <span className={styles.metricLabel}>Docentes Alocados em Turmas</span>
                        <strong className={styles.metricValue}>186 Professores</strong>
                        <span className={styles.metricSub}>Carga horária regularizada</span>
                      </div>
                      <div className={styles.metricCard}>
                        <span className={styles.metricLabel}>Alunos da Ed. Especial (Laudos)</span>
                        <strong className={styles.metricValue}>184 Alunos</strong>
                        <span className={styles.metricSub}>Dupla contagem no FUNDEB garantida</span>
                      </div>
                    </div>

                    <div className={styles.auditChecklist}>
                      <div className={styles.auditCheckItem}>
                        <CheckCircle2 size={18} color="#10B981" />
                        <div>
                          <strong>Filiação e Dados Civis Padronizados</strong>
                          <p>Nenhum nome com abreviações não conformes ou dados faltantes de certidão.</p>
                        </div>
                      </div>
                      <div className={styles.auditCheckItem}>
                        <CheckCircle2 size={18} color="#10B981" />
                        <div>
                          <strong>Matrícula Inicial e Transporte Informado</strong>
                          <p>Alunos que usam transporte escolar declarados para recebimento do PNATE.</p>
                        </div>
                      </div>
                      <div className={styles.auditCheckItem}>
                        <CheckCircle2 size={18} color="#10B981" />
                        <div>
                          <strong>Blindagem de Recursos do FUNDEB</strong>
                          <p>Conformidade cadastral rigorosa com os critérios do Censo INEP (VAAF, VAAT e VAAR), prevenindo retenções de repasse.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antes x Depois Section */}
      <section className={styles.compareSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Eficiência Comprovada</span>
            <h2 className={styles.sectionTitle}>Como a i6 Systems transforma a gestão escolar</h2>
            <p className={styles.sectionSubtitle}>Compare a rotina de prefeituras presas a formulários manuais com a agilidade do Gestor Educ.</p>
          </div>

          <div className={styles.compareGrid}>
            {/* Antes */}
            <div className={styles.compareColumnLeft}>
              <div className={styles.compareHeader}>
                <span className={styles.badgeAlert}>Sem o Gestor Educ</span>
                <h3>Gestão Tradicional / Manual</h3>
              </div>
              <ul className={styles.compareList}>
                <li>
                  <strong>Diários Impressos em Papel</strong>
                  <span>Professores gastam horas preenchendo cadernetas que demoram semanas para chegar à secretaria.</span>
                </li>
                <li>
                  <strong>Risco de Perda de Verbas Federais</strong>
                  <span>Inconsistências no Educacenso descobertas de última hora colocam repasses do FUNDEB em risco.</span>
                </li>
                <li>
                  <strong>Transporte Rural sem Controle</strong>
                  <span>Rotas sobrepostas e frotas sem prestação de contas exata da quilometragem percorrida.</span>
                </li>
                <li>
                  <strong>Merenda sem Controle de Nutrientes</strong>
                  <span>Dificuldade para comprovar cardápios nutricionais exigidos pelo FNDE e fiscalizados pelo CAE.</span>
                </li>
              </ul>
            </div>

            {/* Depois */}
            <div className={styles.compareColumnRight}>
              <div className={styles.compareHeader}>
                <span className={styles.badgeSuccess}>Com o Gestor Educ</span>
                <h3>Gestão Pública Digital i6</h3>
              </div>
              <ul className={styles.compareList}>
                <li>
                  <strong>Diário Escolar Digital & BNCC</strong>
                  <span>Chamadas e notas lançadas diretamente pelo professor, com vinculação imediata às habilidades da BNCC.</span>
                </li>
                <li>
                  <strong>Auditoria Contínua do Censo INEP</strong>
                  <span>Validador prévio que garante zero inconsistências e protege integralmente o FUNDEB.</span>
                </li>
                <li>
                  <strong>Rotas e Frotas Georreferenciadas</strong>
                  <span>Controle total de veículos, itinerários rurais e alunos vinculados a cada parada.</span>
                </li>
                <li>
                  <strong>PNAE Nutricional com Ficha Técnica</strong>
                  <span>Cálculo automatizado de nutrientes e controle rigoroso de estoque da agricultura familiar.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Showcase */}
      <section className={styles.modulesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Estrutura Completa</span>
            <h2 className={styles.sectionTitle}>Módulos desenhados para a realidade municipal</h2>
            <p className={styles.sectionSubtitle}>Cada ferramenta foi pensada para resolver um gargalo real da rotina das escolas e da secretaria.</p>
          </div>

          <div className={styles.modulesGrid}>
            {modules.map((mod) => (
              <div key={mod.id} className={styles.moduleCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconBox}>{mod.icon}</div>
                  <span className={styles.cardBadge}>{mod.badge}</span>
                </div>
                <h3 className={styles.cardTitle}>{mod.title}</h3>
                <p className={styles.cardDesc}>{mod.desc}</p>
                <div className={styles.cardHighlights}>
                  {mod.highlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className={styles.hlRow}>
                      <CheckCircle2 size={16} className={styles.hlIcon} />
                      <div>
                        <strong>{hl.label}</strong>
                        <span>{hl.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
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
            <h2 className={styles.sectionTitle}>Perguntas frequentes sobre o Gestor Educ</h2>
            <p className={styles.sectionSubtitle}>Respostas diretas sobre implantação, infraestrutura e segurança jurídica.</p>
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
            <h2 className={styles.ctaTitle}>Leve o Gestor Educ para a sua cidade</h2>
            <p className={styles.ctaSubtitle}>
              Agende uma apresentação técnica exclusiva com nossos especialistas e veja a plataforma operando na prática.
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

export default Gestor;
