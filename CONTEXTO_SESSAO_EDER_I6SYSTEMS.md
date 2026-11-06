# 📋 DOCUMENTO MESTRE DE CONTEXTO E HANDOFF — i6 SYSTEMS & EDER JESUS

> **COMO USAR ESTE ARQUIVO:**  
> Se esta sessão expirar ou você estiver iniciando uma nova conversa no Antigravity, **basta copiar e colar este arquivo ou arrastá-lo para o chat** com a mensagem:  
> *"Leia este arquivo de contexto e retome exatamente de onde paramos."*

---

## 👤 1. Identidade e Perfil do Usuário

* **Nome:** Eder Jesus (`Edzxra` | GitHub: [`Eder-Jesus`](https://github.com/Eder-Jesus))
* **E-mail de Contato / Vercel:** `atomicplays@hotmail.com`
* **E-mail do GitHub No-Reply (Membro Vercel):** `eder-jesus@users.noreply.github.com`
* **Localização:** São Paulo, SP — Brasil (com raízes operacionais da empresa em São Luís - MA)
* **Formação Acadêmica:** Bacharelado em Ciência da Computação pela **SPTech (São Paulo Tech School)** | Técnico em TI pela **Etec Jaraguá**
* **Atuação Profissional:**
  * 🏢 **Co-proprietário & Sócio-Administrador da i6 Systems:** GovTech e Software House especializada em modernização da gestão pública municipal e educação especial inclusiva.
  * 💳 **Engenheiro de Dados & Analista de BI Pleno no Grupo Elo:** Arquitetura Medallion (Bronze/Silver/Gold), pipelines de dados em Python integrando Salesforce Omni-Channel, Sprinklr e HugMe; procedures analíticas de alta performance em T-SQL (~120x mais rápidas).
  * 🏥 Histórico prévio em **Dasa Empresas** (Inteligência Comercial), **A5 Solutions** (Java/Spring Boot) e **Accenture** (Big Data & Analytics: Hive, Impala, MongoDB, Tableau).
* **Alta Performance & Esports:**
  * 🎯 **VALORANT:** **Peak Radiante** (Top 500 do servidor brasileiro) e atualmente patente **Imortal**.
  * 🏆 **Fortnite:** Ex-jogador competitivo com histórico de premiações oficiais em dinheiro (**earnings**).
  * 🎮 **League of Legends:** Jogador casual.
* **Dinâmica de Trabalho do Assistente:**
  * O assistente atua como **Tech Lead / Principal Full-Stack Engineer & Product Designer**, com total autonomia técnica para arquitetar, diagnosticar, corrigir código e publicar builds.
  * Respeitar rigorosamente os momentos de foco e jogos competitivos sem travar o computador.
  * Tom de comunicação direto, informal, transparente e em português brasileiro.

---

## 🏛️ 2. O Ecossistema i6 Systems (A Arquitetura de Produtos)

A **i6 Systems** (CNPJ: `50.542.946/0001-58`, São Luís - MA) é uma GovTech que oferece soluções integradas para prefeituras e secretarias municipais de educação, com **dois produtos comerciais estruturantes**:

```
                      ┌──────────────────────────────────────┐
                      │              i6 SYSTEMS              │
                      │   Suíte Integrada de Gestão Pública  │
                      └──────────────────┬───────────────────┘
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
   ╔═════════════════════════════╗               ╔═════════════════════════════╗
   ║        GESTOR EDUC          ║               ║          AVAEE GD           ║
   ║   (Educação Regular & ADM)  ║               ║    (Educação Especial AEE)  ║
   ╠═════════════════════════════╣               ╠═════════════════════════════╣
   ║ • Matrículas & Capacidade   ║               ║ • Ficha Pedagógica 13 Blocos║
   ║ • Diário Mobile 100% Offline║               ║ • Semáforo de Criticidade   ║
   ║ • Auditoria Educacenso INEP ║               ║ • Regulação de Vagas CAEE   ║
   ║ • Frotas e Transporte       ║               ║ • Prontuário Multiprofissao ║
   ║ • Biblioteca & Sala Leitura ║               ║ • Duplo Sigilo & LGPD       ║
   ╚═════════════════════════════╝               ╚═════════════════════════════╝
```

---

## 💻 3. Estado Atual dos Códigos e Landing Page (`webpage-gestor`)

A landing page oficial da **i6 Systems** foi completamente reformulada a partir das diretrizes de design de produto e feedback direto:

### A. Substituição Total de Imagens Borradas por Mockups Vetoriais Interativos (HTML/CSS)
* **Zero Vazamento de Dados:** Todas as capturas de tela rasas (`dashboard_general.png`, `dashboard_schools.png`, `dashboard_curriculum.png`) que mostravam nomes reais/falsos de escolas ou dados municipais borrados foram eliminadas.
* **Vetor Nativo de Alta Fidelidade:** Os módulos foram substituídos por painéis vetoriais responsivos com métricas municipais (18 Escolas, 12.450 Alunos, 94.8% Frequência, 0 Erros Educacenso), nítidos em qualquer resolução (Full HD, 4K, Retina).

### B. Gestor Educ (`src/pages/Gestor/Gestor.tsx` & `Gestor.module.css`)
* Estética GovTech cristalina e luminosa (fundo branco, azul institucional `#2563EB`, ardósia escura `#0F172A`).
* Seis cartões de arquitetura técnica:
  1. **Diário Mobile 100% Offline:** Sincronização automática para professores da zona rural.
  2. **Auditoria Prévia do Censo Escolar (INEP/FUNDEB):** Validador em tempo real que impede erros de cadastro e perda de verbas federais.
  3. **Gestão Inteligente de Vagas e Matrículas:** Fila auditável e enturmação automática por capacidade.
  4. **Logística de Transporte Escolar:** Rotas rurais mapeadas, controle de combustível e frotas.
  5. **Biblioteca & Acervo Escolar:** Empréstimos, devoluções e catalogação por código de barras.
  6. **Painel Executivo da Secretaria:** Visão consolidada em tempo real para o Secretário de Educação.

### C. AVAEE GD (`src/pages/Avaee/Avaee.tsx` & `Avaee.module.css`)
* **Fim do "Roxinho Cagado":** A paleta de cores roxa/violeta foi totalmente banida. Foi aplicada a paleta **GovTech Esmeralda / Teal** (`#059669` / `#047857`) com ardósia institucional, alinhada à saúde e regulação educacional.
* **Regras Reais do Sistema AVAEE:**
  1. **Ficha Padronizada em 13 Blocos:** Triagem estruturada preenchida pela escola regular.
  2. **Semáforo Pedagógico de Criticidade:** Vermelho (Urgente/Intervenção Imediata), Amarelo (Prioritário/Acompanhamento) e Verde (Estável).
  3. **Fila Única Transparente para o CAEE:** Regulação por especialidade (Psicologia, Fonoaudiologia, Psicopedagogia, Terapia Ocupacional, Assistência Social).
  4. **Prontuário Multiprofissional com Duplo Sigilo & PDI:** Anotações clínicas visíveis apenas aos terapeutas; plano pedagógico individual compartilhado com a escola regular.
* Mockup interativo vetorial renderizando a fila de espera e o semáforo em tempo real.

### D. Home & Hero (`src/components/Hero/Hero.tsx` & `Hero.module.css`)
* Eliminado o texto informal "Dois Carros-Chefe"; substituído por "Plataformas Integradas para a Educação Pública Municipal".
* Mockup de Cockpit Municipal vetorial no Hero.
* O **Simulador Municipal de Alunos** foi preservado e destacado (estimativa de horas economizadas e FUNDEB protegido).

### E. Nova Página "Sobre a i6 Systems" (`src/pages/Sobre/Sobre.tsx` & `Sobre.module.css`)
* Totalmente reescrita para refletir a história autêntica da empresa:
  * Fundada por cientistas da computação e engenheiros de dados maranhenses e paulistas.
  * Sede operacional em São Luís - MA.
  * CNPJ registrado: `50.542.946/0001-58`.
  * Softwares registrados no **INPI**, em conformidade integral com a **LGPD**.
  * Princípios claros: Tecnologia para o Brasil Real (Offline-First), Blindagem do FUNDEB, Inclusão com Regulação Técnica e Presença Física na Ponta com Treinamento Assistido.
  * Botão de ação conectado diretamente ao modal de demonstração técnica (`onOpenDemoModal`).

---

## ☁️ 4. Infraestrutura de Deploy no Vercel

* **Organização / Team na Vercel:** `ideia-software`
* **Projeto:** `i6-systems`
* **Repositório GitHub:** `Eder-Jesus/webpage-gestor`
* **Branch:** `main`
* **Últimos Commits Publicados:**
  * `86deb2f`: *feat: revamp Sobre page with authentic i6 Systems GovTech identity and wire modal*
  * `730f83b`: *feat: complete visual overhaul with crisp vector GovTech mockups, zero leaked data, and emerald theme for AVAEE*
* **Status do Deploy:** **🟢 Success / Ready** (`Deployment has completed`)
* **URLs de Produção Ativas:**
  * **URL Canônica do Time:** [`https://i6-systems-ideia-software.vercel.app`](https://i6-systems-ideia-software.vercel.app)
  * **Deploy Específico (Sobre + AVAEE + Gestor):** [`https://i6-systems-952tfh5c8-ideia-software.vercel.app`](https://i6-systems-952tfh5c8-ideia-software.vercel.app)

### ⚠️ Regra Crítica sobre Deploys "🔴 Blocked" no Vercel:
* Commits devem SEMPRE ser assinados com o e-mail:
  ```bash
  git config user.name "Eder-Jesus"
  git config user.email "eder-jesus@users.noreply.github.com"
  ```
  Isso garante que o Vercel reconheça o commit como vindo do assento de `atomicplays-7946`.

---

## 🛡️ 5. Manutenção do Ambiente Local & Suporte Realizado

1. **Desativação do OneDrive:** As pastas locais foram desconectadas do backup compulsório na nuvem para manter a integridade dos arquivos locais em `C:\Users\atomi\Desktop`.
2. **Remoção de Adwares / PUPs:** Processos e tarefas do *Premier Opinion* e *Weather Zero* foram expurgados do sistema.
3. **LinkedIn & Transição de Carreira:** Análise do perfil realizada com foco no posicionamento de Sócio/Tech Lead da i6 Systems e Engenheiro de Dados Pleno.

---

## 📌 6. Próximos Passos Recomendados

1. [ ] **Inspeção Visual das Rotas no Ar:**
   * Home: `https://i6-systems-ideia-software.vercel.app/#/`
   * Gestor: `https://i6-systems-ideia-software.vercel.app/#/gestor`
   * AVAEE: `https://i6-systems-ideia-software.vercel.app/#/avaee`
   * Sobre: `https://i6-systems-ideia-software.vercel.app/#/sobre`
   * Contato: `https://i6-systems-ideia-software.vercel.app/#/contato`
2. [ ] **Domínio Próprio:** Conectar `i6systems.com.br` no painel da Vercel quando estiver pronto para formalizar o lançamento.
3. [ ] **Segurança de Tokens:** Revogar o Personal Access Token (`ghp_...`) no GitHub caso não sejam feitas mais alterações imediatas.

---

*Última atualização: 05/11/2026. Documento mantido para restauração imediata de contexto em novas sessões.*
