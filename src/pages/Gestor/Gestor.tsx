import React, { useState } from 'react';
import { 
  Smartphone, ArrowRight, BarChart3, Users, 
  CheckCircle2, ShieldCheck, 
  ChevronDown, ChevronUp, Bus, Utensils, 
  Wifi, WifiOff, FileCheck2, Award
} from 'lucide-react';
import styles from './Gestor.module.css';
import gestorLogo from '../../assets/images/gestor_logo.png';

interface GestorProps {
  onOpenDemoModal: () => void;
}

type TabKey = 'diario' | 'censo' | 'transporte' | 'merenda';

export const Gestor: React.FC<GestorProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('diario');
  const [isSynced, setIsSynced] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Interactive student attendance simulation
  const [students, setStudents] = useState([
    { id: 1, name: 'Lucas Gabriel Silveira', status: 'presente' },
    { id: 2, name: 'Beatriz Vasconcelos', status: 'presente' },
    { id: 3, name: 'Arthur Henrique Costa', status: 'ausente' },
    { id: 4, name: 'Mariana Lima Duarte', status: 'presente' }
  ]);

  const toggleStudentStatus = (id: number) => {
    setStudents(prev => prev.map(s => {
      if (s.id !== id) return s;
      const nextStatus = s.status === 'presente' ? 'ausente' : s.status === 'ausente' ? 'justificada' : 'presente';
      return { ...s, status: nextStatus };
    }));
  };

  const modules = [
    {
      id: 'diario',
      icon: <Smartphone size={24} />,
      title: 'Diário de Classe Mobile (100% Offline)',
      badge: 'Para Professores',
      desc: 'Chamada ágil, lançamento de notas e plano de aula com habilidades da BNCC direto no smartphone do professor. Opera perfeitamente em escolas rurais sem sinal de internet e sincroniza de forma transparente assim que reconectar.',
      highlights: [
        { label: 'Chamada Tátil em 30 Segundos', desc: 'Interface ergonômica que devolve tempo pedagógico para a sala de aula.' },
        { label: 'Habilidades da BNCC Integradas', desc: 'Associe objetivos curriculares de cada aula com apenas um toque.' }
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
      q: 'O diário de classe realmente funciona em escolas da zona rural sem sinal?',
      a: 'Sim, 100%. O aplicativo foi construído com arquitetura offline-first (PWA e banco local IndexDB/SQLite). O professor abre o aplicativo, faz a chamada diária, lança conteúdos e avaliações mesmo sem nenhum sinal de telefone ou Wi-Fi. Quando o dispositivo detecta conexão (ao chegar em casa ou na secretaria), os dados são sincronizados de forma atômica e segura com o banco central.'
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
              Conecte a Secretaria de Educação, diretores escolares, professores e famílias. Diário móvel 100% offline, logística de transporte escolar rural, gestão nutricional PNAE e auditoria preventiva do Educacenso para blindar o FUNDEB.
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
                <div className={styles.windowDots}>
                  <div className={styles.dotRed} />
                  <div className={styles.dotYellow} />
                  <div className={styles.dotGreen} />
                </div>
                <div className={styles.windowBrand}>
                  <img src={gestorLogo} alt="Gestor Educ" className={styles.cockpitLogoImg} />
                  <span>Gestor Educ • SEMED Digital</span>
                </div>
                <div className={styles.windowAddressBar}>
                  <ShieldCheck size={13} color="#10B981" />
                  <span>gestor.i6systems.com.br/municipio/painel</span>
                </div>
                <div className={styles.windowMetaStatus}>
                  <span className={styles.pulseDot} />
                  <span>Rede Municipal Conectada</span>
                </div>
              </div>

              {/* Navigation Tabs for Cockpit */}
              <div className={styles.cockpitTabs}>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'diario' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('diario')}
                >
                  <Smartphone size={16} />
                  <span>Diário Mobile Offline</span>
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'censo' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('censo')}
                >
                  <FileCheck2 size={16} />
                  <span>Pré-Validador Educacenso</span>
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'transporte' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('transporte')}
                >
                  <Bus size={16} />
                  <span>Transporte & Rotas Rurais</span>
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'merenda' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('merenda')}
                >
                  <Utensils size={16} />
                  <span>PNAE • Merenda Escolar</span>
                </button>
              </div>

              {/* Cockpit Dynamic Body */}
              <div className={styles.cockpitBody}>
                {/* TAB 1: DIÁRIO MOBILE OFFLINE */}
                {activeTab === 'diario' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>E.M. Darcy Ribeiro • 5º Ano B (Matutino)</h3>
                        <p className={styles.viewSub}>Professor: Carlos Eduardo • Componente Curricular: Matemática</p>
                      </div>
                      <div className={styles.syncControlBox}>
                        <div className={styles.syncStatusBadge}>
                          {isSynced ? (
                            <>
                              <Wifi size={14} color="#10B981" />
                              <span className={styles.colorSuccessText}>Sincronizado na Nuvem</span>
                            </>
                          ) : (
                            <>
                              <WifiOff size={14} color="#D97706" />
                              <span className={styles.colorWarningText}>Operando em Modo Offline (PWA)</span>
                            </>
                          )}
                        </div>
                        <button 
                          className={styles.syncActionBtn}
                          onClick={() => setIsSynced(!isSynced)}
                        >
                          {isSynced ? 'Simular Perda de Sinal' : 'Simular Sincronização Wi-Fi'}
                        </button>
                      </div>
                    </div>

                    <div className={styles.bnccNoticeBar}>
                      <span className={styles.bnccTag}>BNCC • EF05MA08</span>
                      <span>Resolver e elaborar problemas de multiplicação e divisão com números naturais usando estimativas e cálculo mental.</span>
                    </div>

                    {/* Interactive Attendance List */}
                    <div className={styles.attendanceTable}>
                      <div className={styles.tableHeaderRow}>
                        <span>Nº Chamada & Nome do Estudante</span>
                        <span>Situação de Frequência (Clique para alternar)</span>
                      </div>
                      {students.map(student => (
                        <div key={student.id} className={styles.tableDataRow}>
                          <div className={styles.studentCell}>
                            <span className={styles.studentIdBadge}>{student.id.toString().padStart(2, '0')}</span>
                            <span className={styles.studentNameText}>{student.name}</span>
                          </div>
                          <button 
                            className={`${styles.statusToggleBtn} ${
                              student.status === 'presente' ? styles.statusBtnPresent :
                              student.status === 'ausente' ? styles.statusBtnAbsent : styles.statusBtnJustified
                            }`}
                            onClick={() => toggleStudentStatus(student.id)}
                            title="Clique para alternar entre Presente, Ausente e Justificada"
                          >
                            {student.status === 'presente' && '✓ Presente'}
                            {student.status === 'ausente' && '✕ Falta Registrada'}
                            {student.status === 'justificada' && '⏱ Falta Justificada'}
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className={styles.cockpitFooterBar}>
                      <span>Taxa de Presença Hoje: <strong>75%</strong></span>
                      <span>Registros seguros no dispositivo • Zero perda de dados</span>
                    </div>
                  </div>
                )}

                {/* TAB 2: PRÉ-VALIDADOR EDUCACENSO INEP */}
                {activeTab === 'censo' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>Auditoria de Conformidade do Censo Escolar (INEP)</h3>
                        <p className={styles.viewSub}>Base cadastral de 18 Escolas Municipais • Proteção das Complementações do FUNDEB</p>
                      </div>
                      <div className={styles.exportBadgeReady}>
                        <CheckCircle2 size={16} color="#10B981" />
                        <span>0 Inconsistências • Apto para Exportar TXT</span>
                      </div>
                    </div>

                    <div className={styles.auditGridMetrics}>
                      <div className={styles.metricCard}>
                        <span className={styles.metricLabel}>Total de Alunos Auditados</span>
                        <strong className={styles.metricValue}>12.450</strong>
                        <span className={styles.metricSub}>100% com CPF e NIS validados</span>
                      </div>
                      <div className={styles.metricCard}>
                        <span className={styles.metricLabel}>Docentes Alocados em Turmas</span>
                        <strong className={styles.metricValue}>520 Professores</strong>
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

                {/* TAB 4: PNAE MERENDA NUTRICIONAL */}
                {activeTab === 'merenda' && (
                  <div className={styles.tabContent}>
                    <div className={styles.cockpitTopBar}>
                      <div>
                        <h3 className={styles.viewTitle}>Cardápio Semanal PNAE • Semana 14 (Ensino Fundamental)</h3>
                        <p className={styles.viewSub}>Elaborado por: Nutricionista Mariana Duarte (CRN-7 12480) • Conformidade FNDE</p>
                      </div>
                      <div className={styles.pnaeBadge}>
                        <Award size={15} color="#10B981" />
                        <span>Fórmula Nutricional Aprovada</span>
                      </div>
                    </div>

                    <div className={styles.nutritionGrid}>
                      <div className={styles.dishCard}>
                        <span className={styles.dishDay}>Segunda-Feira • Prato Principal</span>
                        <h4 className={styles.dishTitle}>Frango Desfiado com Legumes & Arroz com Feijão</h4>
                        <p className={styles.dishDesc}>Acompanhamento: Cenoura, chuchu cozido e Laranja fresca de sobremesa (Agricultura Familiar).</p>
                        <div className={styles.nutriTags}>
                          <span>420 kcal</span>
                          <span>18.5g Proteína</span>
                          <span>4.2mg Ferro</span>
                          <span>26mg Vitamina C</span>
                        </div>
                      </div>

                      <div className={styles.pantryStockBox}>
                        <h4 className={styles.stockTitle}>Controle de Despensa da Unidade</h4>
                        <div className={styles.stockRow}>
                          <span>Arroz Parboilizado (Lote 2026-B)</span>
                          <strong className={styles.colorSuccessText}>160 kg em estoque</strong>
                        </div>
                        <div className={styles.stockRow}>
                          <span>Feijão Carioquinha Tipo 1</span>
                          <strong className={styles.colorSuccessText}>90 kg em estoque</strong>
                        </div>
                        <div className={styles.stockRow}>
                          <span>Leite em Pó Integral</span>
                          <strong className={styles.colorSuccessText}>45 kg em estoque</strong>
                        </div>
                        <div className={styles.stockRow}>
                          <span>Polpa de Fruta Regional</span>
                          <strong className={styles.colorSuccessText}>35 kg (Agricultura Familiar)</strong>
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
                  <strong>Diário Digital 100% Offline</strong>
                  <span>Chamadas e notas lançadas no celular pelo professor, sincronizadas com 1 toque ao ter conexão.</span>
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
