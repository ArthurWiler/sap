   /* ============ TRAINING INDEX ============ */
   const TRAININGS = [
     {
       id: "navegacao-basica",
       title: "Navegação básica no SAP",
       desc: "Aprenda a utilizar as principais funcionalidades do sistema, incluindo Página Inicial, Modificação de Notas de Serviço e navegação entre abas.",
       available: true,
       difficulty: "Iniciante",
       platform: "web",
       tags: ["Iniciante", "Navegação"],
     },
     {
       id: "navegacao-intermediaria",
       title: "Navegação intermediária no SAP",
       desc: "Aprofunde-se em buscas avançadas, filtros, variantes de tela e atalhos de produtividade no SAP Fiori.",
       available: false,
       difficulty: "Intermediário",
       platform: "web",
       tags: ["Intermediário", "Navegação"],
     },
     {
       id: "navegacao-avancada",
       title: "Navegação avançada no SAP",
       desc: "Explore funcionalidades avançadas: transações múltiplas, navegação cruzada entre módulos e personalização de layout.",
       available: false,
       difficulty: "Avançado",
       platform: "web",
       tags: ["Avançado", "Navegação"],
     },
     {
       id: "navegacao-ccs",
       title: "Navegação no SAP CCS (Desktop)",
       desc: "Domine a navegação no SAP CCS desktop, incluindo telas SAPGUI, transações específicas e fluxos exclusivos do cliente.",
       available: false,
       difficulty: "Avançado",
       platform: "desktop",
       tags: ["Avançado", "CCS", "Desktop"],
     },
     {
       id: "tratamento-notas",
       title: "Tratamento de notas",
       desc: "Simule o fluxo completo de análise e tratamento de notas, incluindo revisão de informações, atualizações e registro de ações.",
       available: false,
       difficulty: "Avançado",
       platform: "web",
       hasSubmodules: true,
       tags: ["Avançado", "Tratamento"],
     },
     {
       id: "medidas",
       title: "Criação de medidas no SAP",
       desc: "Aprenda a identificar, selecionar e cadastrar corretamente as medidas no SAP, compreendendo os critérios e regras aplicáveis a cada situação.",
       available: false,
       difficulty: "Avançado",
       platform: "web",
       hasSubmodules: true,
       tags: ["Avançado", "Medidas"],
     },
     {
       id: "deletar-acoes-iw52",
       title: "Deletar ações na IW52",
       desc: "Aprenda a gerenciar ações em ordens de serviço, seguindo regras e critérios de validação internos.",
       available: false,
       difficulty: "Avançado",
       platform: "web",
       hasSubmodules: true,
       tags: ["Avançado", "IW52", "Ações"],
     },
     {
       id: "fundiario",
       title: "Treinamento fundiário",
       desc: "Capacitação em processos fundiários, incluindo envio de documentos, preenchimento de informações técnicas e conclusão de solicitações.",
       available: false,
       difficulty: "Avançado",
       platform: "web",
       hasSubmodules: true,
       tags: ["Avançado", "Processos", "Documentação"],
     },
     {
       id: "ambiental",
       title: "Treinamento ambiental",
       desc: "Aprenda os procedimentos relacionados à gestão ambiental, documentação necessária e etapas para finalização de demandas.",
       available: false,
       difficulty: "Avançado",
       platform: "web",
       hasSubmodules: true,
       tags: ["Avançado", "Processos", "Documentação"],
     },
     {
       id: "documental",
       title: "Treinamento documental",
       desc: "Orientações para envio, conferência e organização de documentos, garantindo conformidade e correta tramitação dos processos.",
       available: false,
       difficulty: "Intermediário",
       platform: "web",
       hasSubmodules: true,
       tags: ["Intermediário", "Documentação", "Processos"],
     },
     {
       id: "carga-i",
       title: "Treinamento carga – Conceitos básicos",
       desc: "Introdução aos principais conceitos e fundamentos necessários para atuação nos processos de carga.",
       available: true,
       difficulty: "Iniciante",
       platform: "web",
       hasSubmodules: true,
       tags: ["Iniciante", "Carga", "Fundamentos"],
     },
     {
       id: "carga-ii",
       title: "Treinamento carga – Aplicações práticas",
       desc: "Desenvolva habilidades práticas para execução das rotinas de carga em cenários reais de operação.",
       available: false,
       difficulty: "Intermediário",
       platform: "web",
       hasSubmodules: true,
       tags: ["Intermediário", "Carga", "Aplicações"],
     },
     {
       id: "carga-iii",
       title: "Treinamento carga – Aplicações e normas",
       desc: "Aprofundamento em aplicações avançadas e nas principais normas e diretrizes relacionadas aos processos de carga.",
       available: false,
       difficulty: "Avançado",
       platform: "web",
       hasSubmodules: true,
       tags: ["Avançado", "Carga", "Normas"],
     },
     {
       id: "conexao-bt-classificacao",
       title: "Análise de Conexão BT — Classificação",
       desc: "Aprenda a classificar corretamente cada solicitação de conexão em baixa tensão segundo o POP PE/EM. Inclui códigos de serviço SAP, módulos de análise e as regras práticas com exemplos e quizzes.",
       available: true,
       difficulty: "Intermediário",
       platform: "web",
       tags: ["Intermediário", "Conexão BT", "POP", "Medida 0020"],
     },
   ];

   /* Sort order: difficulty asc, then by available (available first within same level) */
   const DIFFICULTY_ORDER = { Iniciante: 0, Intermediário: 1, Avançado: 2 };
   const SORTED_TRAININGS = [...TRAININGS].sort((a, b) => {
     const d =
       DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty];
     if (d !== 0) return d;
     if (a.available !== b.available) return a.available ? -1 : 1;
     return 0;
   });

   TRAININGS.forEach((t) => {
     switch (t.id) {
       case "navegacao-basica":
         t.submodules = [
           {
             id: `${t.id}-details`,
             title: "Detalhes da Solicitação no SAP",
             desc: "Aprenda a acessar e interpretar os detalhes da nota através da aba de Solicitação no SAP.",
             available: true,
           },
           {
             id: `${t.id}-med_status`,
             title: "Fechamento de Medidas",
             desc: "Entenda como realizar o fechamento de medidas dentro do SAP de forma correta e segura.",
             available: true,
           },
           {
             id: `${t.id}-acoes`,
             title: "Cadastro de Ações em Medidas",
             desc: "Veja como consultar e cadastrar ações vinculadas a uma medida no SAP.",
             available: true,
           },
         ];
         break;

       case "carga-i":
         t.submodules = [
           {
             id: `${t.id}-pedidos`,
             title: "Entrada de pedidos",
             desc: "Apresentação dos diversos tipos de pedidos.",
             available: true,
             type: "deck",
           },
           {
             id: `${t.id}-criacao`,
             title: "Criação de Medidas",
             desc: "Aprenda o processo completo de cadastro de medidas no SAP.",
             available: false,
             type: "deck",
           },
         ];
         break;

       case "conexao-bt-classificacao":
         t.submodules = [
           {
             id: `${t.id}-codigos`,
             title: "Códigos de serviço SAP",
             desc: "COBT, PSRP, PSIP — como identificar o código correto e o que fazer quando está errado (medida 0592).",
             available: true,
             type: "deck",
           },
           {
             id: `${t.id}-modulos`,
             title: "Módulos de classificação",
             desc: "Os 4 módulos do POP (cliente individual, ligação provisória, empreendimentos coletivos, situações especiais) e seus critérios.",
             available: true,
             type: "deck",
           },
           {
             id: `${t.id}-regras-mod1-2`,
             title: "Regras práticas — Módulos 1 e 2",
             desc: "Casos 1–6 da tabela do POP: ligações individuais, religação e ligação provisória.",
             available: true,
             type: "deck",
           },
           {
             id: `${t.id}-regras-mod3`,
             title: "Regras práticas — Módulo 3",
             desc: "Casos 7–12: empreendimentos coletivos, acima de 75 kW, atendimento híbrido, múltiplas torres e loteamentos.",
             available: true,
             type: "deck",
           },
           {
             id: `${t.id}-regras-mod4`,
             title: "Regras práticas — Módulo 4",
             desc: "Situações especiais: remoção de poste/rede (PSRP) e iluminação pública (PSIP).",
             available: true,
             type: "deck",
           },
           {
             id: `${t.id}-revisao`,
             title: "Revisão geral — Quiz",
             desc: "Coloque seu conhecimento à prova com 10 casos da tabela do POP em formato de quiz.",
             available: true,
             type: "deck",
           },
         ];
         break;
     }

     // Marca somente quem realmente possui submódulos
     t.hasSubmodules = !!t.submodules?.length;
   });

