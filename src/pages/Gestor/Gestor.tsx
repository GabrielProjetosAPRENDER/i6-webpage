import React, { useState } from 'react';
import { 
  Smartphone, ArrowRight, BarChart, Users, 
  MapPin, BookOpen, FileText, CheckCircle2, 
  Sparkles, ShieldCheck, ChevronDown, ChevronUp
} from 'lucide-react';
import styles from './Gestor.module.css';

interface GestorProps {
  onOpenDemoModal: () => void;
}

export const Gestor: React.FC<GestorProps> = ({ onOpenDemoModal }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const modules = [
    {
      id: 'diario',
      icon: <Smartphone size={24} />,
      title: 'Diário de Classe Mobile (100% Offline)',
      badge: 'Para Professores',
      desc: 'Chamada rápida, lançamento de notas e plano de aula direto no celular do professor. Funciona totalmente sem internet nas salas de aula e sincroniza automaticamente assim que houver conexão.',
      highlights: [
        { label: 'Chamada em 30 Segundos', desc: 'Interface tátil e rápida que economiza tempo de aula dos docentes.' },
        { label: 'Sincronização Segura', desc: 'Nenhum dado é perdido mesmo em escolas rurais sem sinal de celular.' }
      ],
      previewType: 'mobile'
    },
    {
      id: 'censo',
      icon: <FileText size={24} />,
      title: 'Validação & Exportação Educacenso (INEP)',
      badge: 'Proteção do FUNDEB',
      desc: 'Módulo inteligente que audita as turmas, matrículas e alocação de docentes em tempo real, alertando sobre qualquer pendência de CPF, NIS ou certidão antes do prazo final do INEP.',
      highlights: [
        { label: 'Auditoria Preventiva', desc: 'Identifica inconsistências antes do envio oficial, protegendo verbas municipais.' },
        { label: 'Exportação em 1 Clique', desc: 'Gera o arquivo padronizado para importação direta no sistema do Censo.' }
      ],
      previewType: 'audit'
    },
    {
      id: 'alunos',
      icon: <Users size={24} />,
      title: 'Gestão Unificada de Matrículas & Turmas',
      badge: 'Secretaria Escolar',
      desc: 'Centralize o histórico escolar, transferências, remanejamento automático e controle de capacidade das salas em uma única base de dados da prefeitura.',
      highlights: [
        { label: 'Prontuário Digital do Aluno', desc: 'Ficha completa com notas, frequência e histórico arquivado com segurança.' },
        { label: 'Remanejamento Rápido', desc: 'Controle de vagas por escola e turno sem filas na porta da instituição.' }
      ],
      previewType: 'students'
    },
    {
      id: 'transporte',
      icon: <MapPin size={24} />,
      title: 'Transporte Escolar & Rotas Rurais',
      badge: 'Logística Municipal',
      desc: 'Mapeamento de linhas de ônibus, controle de quilometragem, prestadores de serviço e acompanhamento dos alunos atendidos nas regiões rurais do município.',
      highlights: [
        { label: 'Roteirização Inteligente', desc: 'Controle de paradas, motoristas habilitados e veículos autorizados.' },
        { label: 'Otimização de Custos', desc: 'Redução de gastos com combustível e comprovação de atendimento.' }
      ],
      previewType: 'transport'
    },
    {
      id: 'biblioteca',
      icon: <BookOpen size={24} />,
      title: 'Biblioteca Escolar & Acervo Didático',
      badge: 'Gestão de Recursos',
      desc: 'Inventário completo dos livros didáticos e títulos literários de todas as escolas da rede municipal, com controle rigoroso de empréstimos e devoluções.',
      highlights: [
        { label: 'Controle de Perdas', desc: 'Avisos automáticos de prazo e histórico por aluno e turma.' },
        { label: 'Redistribuição de Livros', desc: 'Remanejamento de acervo entre escolas conforme a necessidade.' }
      ],
      previewType: 'library'
    },
    {
      id: 'dashboard',
      icon: <BarChart size={24} />,
      title: 'Painel Executivo da Secretaria de Educação',
      badge: 'Tomada de Decisão',
      desc: 'Visão panorâmica para prefeitos e secretários: taxas de frequência em tempo real, índices de evasão por bairro e controle de cumprimento dos dias letivos.',
      highlights: [
        { label: 'Indicadores em Tempo Real', desc: 'Dados consolidados sem precisar aguardar relatórios impressos.' },
        { label: 'Alertas de Evasão', desc: 'Identificação precoce de faltas consecutivas para busca ativa escolar.' }
      ],
      previewType: 'dashboard'
    }
  ];

  const faqs = [
    {
      q: 'O diário de classe realmente funciona sem internet?',
      a: 'Sim. O aplicativo para os professores foi desenvolvido com tecnologia de armazenamento local offline. O professor abre o aplicativo, faz a chamada diária e lança conteúdos mesmo sem sinal. Quando o aparelho detecta sinal Wi-Fi ou dados móveis, os dados são sincronizados automaticamente com o banco central da prefeitura.'
    },
    {
      q: 'Como o Gestor Educ auxilia na proteção das verbas do FUNDEB?',
      a: 'Os repasses do FUNDEB dependem diretamente da precisão das matrículas registradas no Educacenso (INEP). O Gestor Educ possui um motor de validação prévia que varre todas as escolas da rede procurando inconsistências cadastrais (CPFs faltantes, duplicidades, turmas sem docentes) e aponta a correção antes do fechamento do Censo, evitando perdas de verbas.'
    },
    {
      q: 'Quanto tempo leva para implantar o sistema no município?',
      a: 'A implantação inicial da base de dados e o treinamento da equipe da Secretaria de Educação costumam levar entre 7 e 15 dias úteis, com migração assistida de dados legados ou planilhas existentes.'
    },
    {
      q: 'O sistema atende aos requisitos da Lei Geral de Proteção de Dados (LGPD)?',
      a: 'Totalmente. Dados de menores de idade, matrículas e históricos escolares possuem camadas restritas de permissão por cargo (secretário, diretor, coordenador, professor), com rastreabilidade completa de auditoria de acessos.'
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
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>Gestor Educ • Plataforma de Gestão Escolar Integrada</span>
            </div>
            <h1 className={styles.heroTitle}>
              A modernização completa da <span className={styles.titleHighlight}>Educação Municipal</span> em um único sistema.
            </h1>
            <p className={styles.heroSubtitle}>
              Conecte a Secretaria de Educação, diretores, professores e alunos. Diário de classe 100% offline, matrículas unificadas e auditoria do Educacenso (INEP) para blindar repasses do FUNDEB.
            </p>
            <div className={styles.heroCtaGrid}>
              <button onClick={onOpenDemoModal} className={styles.btnPrimary}>
                Solicitar Demonstração para Meu Município
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* High-Precision Vector Mockup (Clean, crisp, no leaked data) */}
          <div className={styles.mockupWrapper}>
            <div className={styles.mockupWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowDots}>
                  <div className={styles.dotRed} />
                  <div className={styles.dotYellow} />
                  <div className={styles.dotGreen} />
                </div>
                <span className={styles.windowTitle}>i6 Systems • Painel Central do Gestor Educ</span>
                <span className={styles.statusOnline}>● Sistema Conectado</span>
              </div>

              {/* Vector UI Body */}
              <div className={styles.mockupBody}>
                {/* Quick stats strip */}
                <div className={styles.statsStrip}>
                  <div className={styles.statBox}>
                    <span className={styles.statLabel}>Rede Escolar</span>
                    <strong className={styles.statNumber}>18 Unidades</strong>
                    <span className={styles.statSub}>100% Sincronizadas</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statLabel}>Matrículas Ativas</span>
                    <strong className={styles.statNumber}>12.450 Alunos</strong>
                    <span className={styles.statSub}>Ano Letivo Regular</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statLabel}>Frequência Hoje</span>
                    <strong className={`${styles.statNumber} ${styles.colorSuccess}`}>95.2%</strong>
                    <span className={styles.statSub}>Lançamentos Mobile</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statLabel}>Auditoria Censo INEP</span>
                    <strong className={`${styles.statNumber} ${styles.colorBlue}`}>0 Pendências</strong>
                    <span className={styles.statSub}>Pronto para envio</span>
                  </div>
                </div>

                {/* Dashboard Inner Split */}
                <div className={styles.dashboardSplit}>
                  {/* Left: Mobile Attendance Monitoring */}
                  <div className={styles.subCard}>
                    <div className={styles.subCardHeader}>
                      <Smartphone size={16} color="#2563EB" />
                      <span>Diário Mobile • Chamadas em Tempo Real</span>
                    </div>
                    <div className={styles.entryRow}>
                      <div className={styles.entryInfo}>
                        <strong>5º Ano A • EMEF Paulo Freire</strong>
                        <span>Profª Maria Eduarda • 28 presentes de 30</span>
                      </div>
                      <span className={styles.pillGreen}>Lançado Offline</span>
                    </div>
                    <div className={styles.entryRow}>
                      <div className={styles.entryInfo}>
                        <strong>9º Ano B • EMEF Castro Alves</strong>
                        <span>Profº Carlos Silva • 34 presentes de 35</span>
                      </div>
                      <span className={styles.pillGreen}>Lançado Offline</span>
                    </div>
                    <div className={styles.entryRow}>
                      <div className={styles.entryInfo}>
                        <strong>3º Ano C • EMEF Monteiro Lobato</strong>
                        <span>Profª Juliana Santos • 26 presentes de 26</span>
                      </div>
                      <span className={styles.pillGreen}>Lançado Offline</span>
                    </div>
                  </div>

                  {/* Right: Educacenso Protection Indicator */}
                  <div className={styles.subCard}>
                    <div className={styles.subCardHeader}>
                      <ShieldCheck size={16} color="#10B981" />
                      <span>Proteção de Repasses (FUNDEB / INEP)</span>
                    </div>
                    <div className={styles.auditIndicator}>
                      <div className={styles.auditHeaderRow}>
                        <span className={styles.auditLabelText}>Validação das 18 Escolas</span>
                        <span className={styles.auditPercentage}>100% Validado</span>
                      </div>
                      <div className={styles.progressBarBg}>
                        <div className={styles.progressBarFill} style={{ width: '100%' }} />
                      </div>
                    </div>
                    <div className={styles.checklistGrid}>
                      <div className={styles.checklistItem}>
                        <CheckCircle2 size={15} color="#10B981" />
                        <span>CPFs e NIS validados</span>
                      </div>
                      <div className={styles.checklistItem}>
                        <CheckCircle2 size={15} color="#10B981" />
                        <span>Docentes e turmas alocados</span>
                      </div>
                      <div className={styles.checklistItem}>
                        <CheckCircle2 size={15} color="#10B981" />
                        <span>Fórmula FUNDEB protegida</span>
                      </div>
                      <div className={styles.checklistItem}>
                        <CheckCircle2 size={15} color="#10B981" />
                        <span>Censo Escolar sem retrabalho</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <strong>Risco de Perda de Verbas</strong>
                  <span>Inconsistências no Educacenso (INEP) descobertas de última hora colocam repasses do FUNDEB em risco.</span>
                </li>
                <li>
                  <strong>Filas Físicas de Matrícula</strong>
                  <span>Pais e responsáveis enfrentam filas na porta das escolas para garantir vaga dos filhos.</span>
                </li>
                <li>
                  <strong>Informações Descentralizadas</strong>
                  <span>Frequência, notas e dados de transporte ficam espalhados em dezenas de planilhas desatualizadas.</span>
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
                  <strong>Auditoria Contínua do Censo</strong>
                  <span>Validador prévio que garante zero inconsistências no INEP e protege integralmente o FUNDEB.</span>
                </li>
                <li>
                  <strong>Matrícula Rápida & Transparente</strong>
                  <span>Inscrições e remanejamentos informatizados sem filas, com controle de capacidade por sala.</span>
                </li>
                <li>
                  <strong>Dados em Tempo Real</strong>
                  <span>Secretaria de Educação acompanha frequência e índices de evasão instantaneamente pelo painel.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Showcase (Clean Vector Cards, Zero Leaked Screenshots) */}
      <section className={styles.modulesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Estrutura Completa</span>
            <h2 className={styles.sectionTitle}>Módulos desenhados para a realidade municipal</h2>
            <p className={styles.sectionSubtitle}>Cada ferramenta foi pensada para resolver um gargalo real da rotina das escolas e da secretaria.</p>
          </div>

          <div className={styles.moduleShowcaseList}>
            {modules.map((mod, idx) => (
              <div 
                key={mod.id}
                className={`${styles.moduleShowcaseItem} ${idx % 2 === 0 ? styles.layoutNormal : styles.layoutReverse}`}
              >
                <div className={styles.moduleTextContent}>
                  <div className={styles.moduleBadgeTag}>{mod.badge}</div>
                  <h3 className={styles.moduleTitle}>{mod.title}</h3>
                  <p className={styles.moduleDesc}>{mod.desc}</p>
                  
                  <div className={styles.highlightsContainer}>
                    {mod.highlights.map((hl, hlIdx) => (
                      <div key={hlIdx} className={styles.highlightItem}>
                        <CheckCircle2 size={18} className={styles.highlightIcon} />
                        <div>
                          <strong>{hl.label}</strong>
                          <p>{hl.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Vector Feature Representation Card */}
                <div className={styles.moduleMediaFrame}>
                  <div className={styles.vectorCardMock}>
                    <div className={styles.vectorCardTop}>
                      <div className={styles.vectorCardIconBox}>{mod.icon}</div>
                      <div>
                        <div className={styles.vectorCardSystem}>Gestor Educ • Módulo Ativo</div>
                        <div className={styles.vectorCardTitle}>{mod.title}</div>
                      </div>
                    </div>

                    <div className={styles.vectorCardContent}>
                      {mod.previewType === 'mobile' && (
                        <div className={styles.previewMobileBox}>
                          <div className={styles.phoneScreen}>
                            <div className={styles.phoneBar}>Diário Escolar • Offline</div>
                            <div className={styles.phoneItem}>
                              <span>Chamada: 5º Ano A</span>
                              <strong className={styles.colorSuccess}>28/30 Presentes</strong>
                            </div>
                            <div className={styles.phoneItem}>
                              <span>Conteúdo: Frações</span>
                              <span>Registrado</span>
                            </div>
                            <div className={styles.phoneBtn}>Sincronizar com a Rede</div>
                          </div>
                        </div>
                      )}

                      {mod.previewType === 'audit' && (
                        <div className={styles.previewAuditBox}>
                          <div className={styles.auditStatusTag}>Status: Apto para Exportação</div>
                          <div className={styles.auditLine}>
                            <span>Conformidade Censo INEP:</span>
                            <strong>100% OK</strong>
                          </div>
                          <div className={styles.auditLine}>
                            <span>Divergências Cadastrais:</span>
                            <strong className={styles.colorSuccess}>0 Erros</strong>
                          </div>
                          <div className={styles.auditLine}>
                            <span>Repasses FUNDEB:</span>
                            <strong>Blindados</strong>
                          </div>
                        </div>
                      )}

                      {mod.previewType === 'students' && (
                        <div className={styles.previewStudentBox}>
                          <div className={styles.studentBadge}>Prontuário Digital Unificado</div>
                          <div className={styles.studentField}>
                            <span>Matrícula:</span> <strong>2026-MUNI-0491</strong>
                          </div>
                          <div className={styles.studentField}>
                            <span>Frequência Anual:</span> <strong className={styles.colorSuccess}>96.4%</strong>
                          </div>
                          <div className={styles.studentField}>
                            <span>Histórico:</span> <strong>Regular • Sem Pendências</strong>
                          </div>
                        </div>
                      )}

                      {mod.previewType === 'transport' && (
                        <div className={styles.previewTransportBox}>
                          <div className={styles.transportTag}>Logística & Frotas Escolares</div>
                          <div className={styles.transportStat}>
                            <span>Linhas Ativas:</span> <strong>34 Rotas Rurais</strong>
                          </div>
                          <div className={styles.transportStat}>
                            <span>Alunos Atendidos:</span> <strong>1.840 Estudantes</strong>
                          </div>
                        </div>
                      )}

                      {mod.previewType === 'library' && (
                        <div className={styles.previewLibraryBox}>
                          <div className={styles.libraryTag}>Inventário de Livros Didáticos</div>
                          <div className={styles.libraryStat}>
                            <span>Acervo Catalogado:</span> <strong>4.820 Exemplares</strong>
                          </div>
                          <div className={styles.libraryStat}>
                            <span>Devoluções em Dia:</span> <strong className={styles.colorSuccess}>98.2%</strong>
                          </div>
                        </div>
                      )}

                      {mod.previewType === 'dashboard' && (
                        <div className={styles.previewDashBox}>
                          <div className={styles.dashTag}>Telemetria em Tempo Real</div>
                          <div className={styles.dashStat}>
                            <span>Frequência Geral:</span> <strong className={styles.colorSuccess}>95.2%</strong>
                          </div>
                          <div className={styles.dashStat}>
                            <span>Escolas Ativas:</span> <strong>18 Unidades</strong>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeader}>
            <span className={styles.sectionBadge}>Perguntas Frequentes</span>
            <h2 className={styles.sectionTitleCenter}>Dúvidas sobre o Gestor Educ</h2>
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
            <h2 className={styles.ctaTitle}>Modernize a gestão escolar do seu município</h2>
            <p className={styles.ctaSubtitle}>
              Agende uma apresentação técnica exclusiva para a Secretaria de Educação e conheça a plataforma em detalhes.
            </p>
            <button onClick={onOpenDemoModal} className={styles.btnPrimaryLg}>
              Solicitar Demonstração Gratuita
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gestor;
