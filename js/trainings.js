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
    id: "analise-fundiaria",
    title: "Treinamento fundiário",
    desc: "Capacitação em processos fundiários, incluindo critérios de análise e informações técnicas.",
    available: true,
    difficulty: "Intermediário",
    platform: "web",
    hasSubmodules: true,
    tags: ["Intermediário", "Processos", "Documentação"],
  },
  {
    id: "analise-documental",
    title: "Treinamento documental",
    desc: "Capacitação na análise documental e análise de informações técnicas.",
    available: true,
    difficulty: "Intermediário",
    platform: "web",
    hasSubmodules: true,
    tags: ["Intermediário", "Processos", "Documentação"],
  },
  {
    id: "analise-ambiental",
    title: "Treinamento ambiental",
    desc: "Aprenda os procedimentos relacionados à gestão ambiental e documentação necessária.",
    available: true,
    difficulty: "Intermediário",
    platform: "web",
    hasSubmodules: true,
    tags: ["Intermediário", "Processos", "Documentação"],
  },
  {
    id: "carga-i",
    title: "Tipos de pedidos e medidas",
    desc: "Introdução aos principais conceitos e fundamentos necessários para atuação nos processos de carga.",
    available: true,
    difficulty: "Iniciante",
    platform: "web",
    hasSubmodules: true,
    tags: ["Iniciante", "Carga", "Fundamentos"],
  },
  {
    id: "carga-ii",
    title: "Aplicações e normas",
    desc: "Aprofundamento em aplicações avançadas e nas principais normas e diretrizes relacionadas aos processos de carga.",
    available: true,
    difficulty: "Avançado",
    platform: "web",
    hasSubmodules: true,
    tags: ["Avançado", "Carga", "Normas"],
  },
  {
    id: "rede-i",
    title: "Análise de rede I",
    desc: "Introdução à análise de redes elétricas, cobrindo conceitos básicos de carga, normas e metodologias essenciais.",
    available: true,
    difficulty: "Iniciante",
    platform: "web",
    hasSubmodules: true,
    tags: ["Iniciante", "Carga", "Normas"],
  },
  {
    id: "rede-ii",
    title: "Análise de rede II",
    desc: "Aprofundamento na análise de redes, com foco em metodologias avançadas, interpretação de resultados e aplicação das normas técnicas.",
    available: true,
    difficulty: "Intermediário",
    platform: "web",
    hasSubmodules: true,
    tags: ["Intermediário", "Carga", "Normas"],
  },
  {
    id: "conexao-bt-classificacao",
    title: "Classificação dos pedidos",
    desc: "Aprenda a classificar corretamente cada solicitação de conexão em baixa tensão segundo o POP PE/EM. Inclui códigos de serviço SAP, módulos de análise e as regras práticas com exemplos e quizzes.",
    available: true,
    difficulty: "Intermediário",
    platform: "web",
    tags: ["Intermediário", "Conexão BT", "POP", "Medida 0020"],
  },
  {
    id: "analise-doc-bt-etapas",
    title: "Fundamentos da Análise Documental",
    desc: "Conheça as etapas da análise documental em solicitações de baixa tensão: documentação geral, específica e casos especiais.",
    available: true,
    difficulty: "Iniciante",
    platform: "web",
    tags: ["Iniciante", "Documentação"],
  },
];

const DIFFICULTY_ORDER = { Iniciante: 0, Intermediário: 1, Avançado: 2 };
const SORTED_TRAININGS = [...TRAININGS].sort((a, b) => {
  const d = DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty];
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

    case "analise-documental":
      t.submodules = [
        {
          id: `${t.id}-introducao`,
          title: "Introdução à Análise Documental",
          desc: "Conheça os objetivos da análise documental, sua importância para o processo de conexão e os principais tipos de solicitações avaliadas pela equipe.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-LN`,
          title: "Ligação Nova",
          desc: "Aprenda a analisar a documentação exigida para pedidos de ligação nova, identificando requisitos, variações e possíveis pendências.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-AC`,
          title: "Aumento de Carga",
          desc: "Conheça os documentos necessários para solicitações de aumento de carga e os critérios utilizados para validação de cada processo.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-empreendimento`,
          title: "Empreendimentos",
          desc: "Entenda os requisitos documentais aplicáveis a empreendimentos e as particularidades desse tipo de solicitação.",
          available: true,
          type: "deck",
        },
      ];
      break;

    case "analise-fundiaria":
      t.submodules = [
        {
          id: `${t.id}-introducao`,
          title: "Introdução à Análise Fundiária",
          desc: "Conheça o objetivo da análise fundiária e sua importância na validação de solicitações de conexão e regularização.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-documentos`,
          title: "Documentação Fundiária",
          desc: "Aprenda a identificar e validar os documentos utilizados para comprovação de posse, propriedade e ocupação dos imóveis.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-casos`,
          title: "Casos Especiais",
          desc: "Conheça situações fundiárias que exigem tratamento diferenciado e os procedimentos adotados em cada cenário.",
          available: true,
          type: "deck",
        },
      ];
      break;

    case "analise-ambiental":
      t.submodules = [
        {
          id: `${t.id}-introducao`,
          title: "Introdução à Análise Ambiental",
          desc: "Conheça o papel da análise ambiental no processo de conexão e os principais requisitos avaliados pela equipe.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-documentos`,
          title: "Documentação Ambiental",
          desc: "Aprenda a identificar e validar licenças, autorizações e demais documentos ambientais exigidos para cada solicitação.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-casos`,
          title: "Casos Especiais",
          desc: "Entenda como tratar situações que envolvem restrições ambientais, condicionantes ou documentações específicas.",
          available: true,
          type: "deck",
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

    case "rede-i":
      t.submodules = [
        {
          id: `${t.id}-introducao`,
          title: "Introdução à Análise de Rede Elétrica",
          desc: "Conheça o papel da análise de redes, seus objetivos, aplicações e a importância desse processo para o atendimento das solicitações de conexão.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-onde`,
          title: "Onde é feita a análise",
          desc: "Conheça os sistemas, ferramentas e ambientes utilizados pela equipe para realizar as análises de rede e consultar informações técnicas.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-dados`,
          title: "Dados utilizados na análise",
          desc: "Conheça os principais dados técnicos, documentos e informações da rede elétrica que devem ser observados e avaliados durante a análise.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-regras`,
          title: "Regras e critérios técnicos",
          desc: "Entenda os critérios, normas e premissas técnicas que orientam a elaboração dos estudos e a definição das soluções de atendimento.",
          available: true,
          type: "deck",
        },
      ];
      break;

    case "rede-ii":
      t.submodules = [
        {
          id: `${t.id}-intermediario`,
          title: "Análise de Rede Elétrica - BT",
          desc: "Aprenda os principais critérios utilizados nas análises de rede em baixa tensão e como eles impactam a viabilidade das solicitações.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-criterios-i`,
          title: "Motores",
          desc: "Entenda como avaliar a conexão de motores à rede elétrica, identificando situações que exigem reforços ou adequações.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-criterios-ii`,
          title: "Compatibilidade disjuntor-rede",
          desc: "Aprenda a verificar a compatibilidade entre os dispositivos de proteção e as características da rede elétrica existente.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-criterios-iii`,
          title: "Topologia da rede de baixa tensão",
          desc: "Conheça como a configuração da rede influencia a análise técnica e quais aspectos devem ser observados durante a avaliação.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-regras`,
          title: "Análise de Média Tensão",
          desc: "Entenda quando a análise de média tensão é necessária, quais são os responsáveis pelo processo e os critérios envolvidos.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-norma`,
          title: "Relação com as normas CEMIG",
          desc: "Conheça os principais requisitos normativos que fundamentam as decisões e critérios adotados nas análises de rede.",
          available: true,
          type: "deck",
        },
      ];
      break;

    case "carga-ii":
      t.submodules = [
        {
          id: `${t.id}-ln-urbana`,
          title: "Ligação nova - área urbana",
          desc: "Documentos necessários, variações permitidas e não permitidas, casos específicos urbanos.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-ln-rural`,
          title: "Ligação nova - área rural",
          desc: "Documentos de posse e propriedade, coerência territorial, casos específicos rurais.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-ac`,
          title: "Alteração de carga",
          desc: "Exigências documentais para AC, variações permitidas e situações que exigem correção.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-emp-rural`,
          title: "Empreendimento rural",
          desc: "Documentos para empreendimentos rurais: comprovação de área, atividade e regularidade.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-emp-urbano`,
          title: "Empreendimento urbano",
          desc: "Documentos para empreendimentos urbanos: regularidade do imóvel e coerência dos dados.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-hibrido`,
          title: "Ligação nova - cenário híbrido",
          desc: "Solicitações que combinam elementos urbanos e rurais, exigindo análise mais criteriosa.",
          available: true,
          type: "deck",
        },
      ];
      break;

    case "analise-doc-bt-etapas":
      t.submodules = [
        {
          id: `${t.id}-introducao`,
          title: "Introdução à análise documental",
          desc: "Objetivo da etapa, como ela se organiza, e a hierarquia entre conferências gerais, específicas e especiais.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-geral`,
          title: "Documentação geral",
          desc: "Dados básicos, documentos de posse, regularidade urbana e rural, identificação de pedidos com e sem RT.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-especifica`,
          title: "Documentação específica",
          desc: "Variações por tipo de pedido: remoção de poste, ligação provisória, RT, procuração, irrigação, parcelamento, Termo de Opção BT e tarifa monômia.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-especial`,
          title: "Casos especiais",
          desc: "Situações com restrição legal: parcelamento irregular, análise ambiental, APP, reserva legal, territórios indígenas e quilombolas.",
          available: true,
          type: "deck",
        },
      ];
      break;

    case "conexao-bt-classificacao":
      t.submodules = [
        {
          id: `${t.id}-codigos`,
          title: "Códigos de serviço SAP",
          desc: "COBT, PSRP, PSIP - como identificar o código correto e o que fazer quando está errado (medida 0592).",
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
          title: "Regras práticas - Módulos 1 e 2",
          desc: "Casos 1–6 da tabela do POP: ligações individuais, religação e ligação provisória.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-regras-mod3`,
          title: "Regras práticas - Módulo 3",
          desc: "Casos 7–12: empreendimentos coletivos, acima de 75 kW, atendimento híbrido, múltiplas torres e loteamentos.",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-regras-mod4`,
          title: "Regras práticas - Módulo 4",
          desc: "Situações especiais: remoção de poste/rede (PSRP) e iluminação pública (PSIP).",
          available: true,
          type: "deck",
        },
        {
          id: `${t.id}-revisao`,
          title: "Revisão geral - Quiz",
          desc: "Coloque seu conhecimento à prova com 10 casos da tabela do POP em formato de quiz.",
          available: true,
          type: "deck",
        },
      ];
      break;
  }

  t.hasSubmodules = !!t.submodules?.length;
});

const REFERENCES = [
  {
    title: "POP Analisar Carga - BT",
    description:
      "Metodologia de análise documental para as solicitações de carga com conexão em baixa tensão (BT)",
    file: "docs/POP Analisar Carga - BT.pdf",
  },
  {
    title: "POP Análise de Documentação - BT",
    description:
      "Metodologia de análise de carga para as solicitações de conexão em baixa tensão (BT)",
    file: "docs/POP Análise de Documentação - BT.pdf",
  },
  {
    title: "Norma CEMIG ND 5.2",
    description:
      "Fornecimento de Energia Elétrica em Tensão Secundária Rede de Distribuição Aérea – Edificações Coletivas",
    file: "docs/ND 5.2.pdf",
  },
  {
    title: "Norma CEMIG ND 5.1",
    description:
      "Fornecimento de Energia Elétrica em Tensão Secundária Rede de Distribuição Aérea – Edificações Individuais",
    file: "docs/ND 5.1.pdf",
  },
];
