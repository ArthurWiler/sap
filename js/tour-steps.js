/* ============ SUBMODULE TOURS ============ */
/* Tour steps for each guided submodule. Each step has:
- target: data-tour-id selector (or null for intro screen)
- title, body: tooltip content
- advanceOn: "click" (user clicks the highlighted element) or "next" (button)
- waitFor: optional event from onTourEvent that advances the step
*/
const TOUR_STEPS = {
  "navegacao-basica-details": {
    title: "Acessar Solicitação via Dados Complementares",
    steps: [
      {
        target: null,
        title: "Bem-vindo!",
        body: "Vamos aprender a navegar até os detalhes da Solicitação através da aba Dados Complementares. Clique em Avançar para começar.",
        advanceOn: "next",
      },
      {
        target: "tab-complementares",
        title: "Aba Dados Complementares",
        body: "Clique na aba Dados Complementares para visualizar os dados técnicos da nota.",
        advanceOn: "click",
        waitFor: { type: "tab-change", tab: "complementares" },
      },
      {
        target: "solicitacao-link",
        title: "Link da Solicitação",
        body: "Aqui você encontra o número da Solicitação vinculada a esta nota. Clique nele para abrir os detalhes.",
        advanceOn: "click",
        waitFor: { type: "open-solicitacao" },
      },
      {
        target: null,
        title: "Solicitação aberta",
        body: "Pronto! Você acessou a tela de detalhes da Solicitação. Agora vamos conhecer cada um dos campos principais.",
        advanceOn: "next",
      },
      {
        target: "parc_neg",
        title: "Parceiro de negócios",
        body: "Identificação principal do cliente na CEMIG. Cada cliente possui apenas um parceiro de negócios, vinculado ao CPF ou CNPJ informado no cadastro.",
        advanceOn: "next",
      },
      {
        target: "nome_solic",
        title: "Nome do solicitante",
        body: "Nome do responsável pela solicitação. Deve ser exatamente igual ao que consta na documentação apresentada.",
        advanceOn: "next",
      },
      {
        target: "inst_cliente",
        title: "Instalação",
        body: "Número da instalação vinculado ao parceiro de negócios. Um novo número é gerado para cada solicitação, mas alterações podem ser feitas usando a mesma instalação já existente.",
        advanceOn: "next",
      },
      {
        target: "munic",
        title: "Município",
        body: "Cidade onde está localizada a instalação do cliente.",
        advanceOn: "next",
      },
      {
        target: "ender",
        title: "Endereço",
        body: "Localização completa da instalação, conforme informado pelo solicitante.",
        advanceOn: "next",
      },
      {
        target: "ref",
        title: "Referência",
        body: "Informação adicional para facilitar a identificação do endereço da instalação.",
        advanceOn: "next",
      },
      {
        target: "bairro",
        title: "Bairro",
        body: "Bairro onde está situada a instalação do cliente.",
        advanceOn: "next",
      },
      {
        target: "complemento",
        title: "Complemento",
        body: "Detalhes extras do endereço, como bloco, apartamento ou ponto de referência.",
        advanceOn: "next",
      },
      {
        target: "localiz",
        title: "Loc. Física",
        body: "Indica se a instalação está localizada em área urbana ou rural.",
        advanceOn: "next",
      },
      {
        target: "loc_consumo",
        title: "Tipo do local de consumo",
        body: "Classificação do consumo do cliente: residencial, comercial, industrial, entre outros.",
        advanceOn: "next",
      },
      {
        target: "ramo_atv",
        title: "Ramo de atividade",
        body: "Código da atividade exercida pelo cliente, vinculado ao tipo de consumo informado.",
        advanceOn: "next",
      },
      {
        target: "grp",
        title: "Grupo",
        body: "Grupo de faturamento do cliente, classificado em BT (baixa tensão), MT (média tensão) ou AT (alta tensão).",
        advanceOn: "next",
      },
      {
        target: "class_subclass",
        title: "Classe/Subclasse",
        body: "Especificação detalhada da atividade do cliente, vinculada ao ramo de atividade.",
        advanceOn: "next",
      },
      {
        target: "tp_solicit",
        title: "Tipo Solicitação",
        body: "Classificação do pedido: LN (Ligação nova), AC (Alteração de carga), LP (Ligação provisória), OIP (Obra de iluminação pública), TR (Trifásico desligado há mais de 6 meses), ML (Mudança de local).",
        advanceOn: "next",
      },
      {
        target: "tp_lig",
        title: "Tipo de ligação",
        body: "Número de fases da ligação solicitada pelo cliente.",
        advanceOn: "next",
      },
      {
        target: "disjunt",
        title: "Disjuntor",
        body: "Disjuntor solicitado pelo cliente, conforme normas ND 5.1/5.2. Uma mesma nota pode conter mais de um disjuntor.",
        advanceOn: "next",
      },
      {
        target: "disj_ger",
        title: "Disjuntor geral",
        body: "Disjuntor principal da instalação, também padronizado pelas normas técnicas. Pode haver mais de um em uma mesma nota.",
        advanceOn: "next",
      },
      {
        target: "qtd_geral",
        title: "Quantidade de disjuntor geral",
        body: "Número de disjuntores gerais incluídos no pedido. É comum em solicitações que envolvem vários blocos ou prédios.",
        advanceOn: "next",
      },
      {
        target: null,
        title: "Concluído!",
        body: "Você conheceu os campos principais da tela de Solicitação. Clique em Concluir para finalizar este submódulo.",
        advanceOn: "next",
      },
    ],
  },
  "navegacao-basica-med_status": {
    title: "Conclusão de medidas",
    steps: [
      {
        target: null,
        title: "Bem-vindo!",
        body: "Vamos aprender a abrir a janela de conclusão (status) de uma medida. Clique em Avançar para começar.",
        advanceOn: "next",
      },
      {
        target: "tab-atividades",
        title: "Aba Atividades",
        body: "Clique na aba Atividades para ver a lista de medidas associadas à nota.",
        advanceOn: "click",
        waitFor: { type: "tab-change", tab: "atividades" },
      },
      {
        target: "med-row-0",
        title: "Selecione uma medida",
        body: "Clique na primeira linha da tabela para selecionar a medida que deseja concluir.",
        advanceOn: "click",
        waitFor: { type: "medida-selected", idx: 0 },
      },
      {
        target: "med-pencil-status",
        title: "Ícone de conclusão",
        body: "Com a medida selecionada, clique no ícone do lápis (em vermelho) na barra inferior para abrir a janela de conclusão.",
        advanceOn: "click",
        waitFor: { type: "open-status-modal" },
      },
      {
        target: "status-modal-body",
        title: "Definir status do usuário",
        body: "Esta é a janela onde você define o status da medida. Selecione o status desejado e confirme com o ✓ verde.",
        advanceOn: "next",
      },
      {
        target: null,
        title: "Concluído!",
        body: "Você aprendeu a abrir a janela de conclusão de medidas. Para finalizar, basta confirmar a escolha do status.",
        advanceOn: "next",
      },
    ],
  },
  "navegacao-basica-acoes": {
    title: "Verificar e cadastrar ações em uma medida",
    steps: [
      {
        target: null,
        title: "Bem-vindo!",
        body: "Vamos aprender a verificar as ações vinculadas a uma medida. Clique em Avançar para começar.",
        advanceOn: "next",
      },
      {
        target: "tab-atividades",
        title: "Aba Atividades",
        body: "Acesse a aba Atividades para ver a lista de medidas.",
        advanceOn: "click",
        waitFor: { type: "tab-change", tab: "atividades" },
      },
      {
        target: "med-row-0",
        title: "Selecione uma medida",
        body: "Clique na primeira medida para selecioná-la. As ações que serão exibidas a seguir pertencem a esta medida.",
        advanceOn: "click",
        waitFor: { type: "medida-selected", idx: 0 },
      },
      {
        target: "tab-acoes",
        title: "Aba Ações",
        body: "Agora clique na aba Ações para visualizar todas as ações vinculadas à medida selecionada.",
        advanceOn: "click",
        waitFor: { type: "tab-change", tab: "acoes" },
      },
      {
        target: "acoes-header",
        title: "Cabeçalho da Ação",
        body: "O cabeçalho mostra o código da medida selecionada (Nº, grupo, código e descrição).",
        advanceOn: "next",
      },
      {
        target: "acoes-table",
        title: "Tabela de Ações",
        body: "Esta tabela lista todas as ações daquela medida, com colunas como Ação, Responsável Técnico, Contrato, Datas, Status e Observações.",
        advanceOn: "next",
      },
      {
        target: null,
        title: "Concluído!",
        body: "Você aprendeu a navegar entre Atividades e Ações para verificar o detalhe de uma medida.",
        advanceOn: "next",
      },
    ],
  },

  "rede-i-carga-kw": {
    title: "Onde fica a carga declarada (kW)",
    steps: [
      {
        target: null,
        title: "Onde está a carga no SAP",
        body: "Vou te mostrar exatamente onde encontrar a carga declarada na tela de Solicitação. Clique em Avançar.",
        advanceOn: "next",
      },
      {
        target: "carga-kw",
        title: "Carga Instalada ou Demanda (kW)",
        body: 'Este é o campo principal de carga declarada — fica na seção "Informações do disjuntor geral" da Solicitação. É o valor que o cliente informou, antes da diversificação aplicada pela simulação.',
        advanceOn: "next",
      },
      {
        target: "disjunt",
        title: "Disjuntor solicitado",
        body: "Aqui é o disjuntor escolhido pelo cliente. A carga acima precisa ser compatível com a faixa de proteção deste disjuntor, conforme a ND 5.1.",
        advanceOn: "next",
      },
      {
        target: null,
        title: "Pronto!",
        body: "Você viu onde estão a carga declarada e o disjuntor no SAP. Clique em Voltar ao treinamento para continuar a partir do mesmo slide.",
        advanceOn: "next",
      },
    ],
  },

  "rede-i-disjuntor": {
    title: "Onde fica o dispositivo de proteção",
    steps: [
      {
        target: null,
        title: "Disjuntor do cliente no SAP",
        body: "Vou te mostrar onde encontrar o disjuntor escolhido pelo cliente e o disjuntor geral, quando existir.",
        advanceOn: "next",
      },
      {
        target: "disjunt",
        title: "Disjuntor da UC",
        body: "Disjuntor solicitado pelo cliente. Precisa estar dentro da faixa de proteção da ND 5.1 e ser coerente com a carga declarada.",
        advanceOn: "next",
      },
      {
        target: "qtd_geral",
        title: "Quantidade de disjuntor geral",
        body: "Quando o atendimento envolve disjuntor geral (padrões coletivos, p. ex.), a quantidade aparece aqui. Pode estar vazio se o pedido não exige disjuntor geral.",
        advanceOn: "next",
      },
      {
        target: "disj_ger",
        title: "Disjuntor Geral",
        body: "Modelo do disjuntor geral, quando aplicável. Também segue a faixa de proteção definida em norma.",
        advanceOn: "next",
      },
      {
        target: null,
        title: "Pronto!",
        body: "Você localizou os campos de proteção. Clique em Voltar ao treinamento para continuar a partir do mesmo slide.",
        advanceOn: "next",
      },
    ],
  },

  "rede-i-demanda": {
    title: "Onde a demanda calculada aparece",
    steps: [
      {
        target: null,
        title: "Demanda calculada",
        body: "A demanda calculada é resultado do método da ND 5.1. Vou te mostrar onde ela e a carga aparecem na Solicitação.",
        advanceOn: "next",
      },
      {
        target: "carga-kw",
        title: "Carga Instalada ou Demanda (kW)",
        body: "Este campo carrega a carga declarada ou a demanda calculada, conforme o caso. Em muitos pedidos, vem direto preenchido a partir do formulário de carga apresentado pelo cliente.",
        advanceOn: "next",
      },
      {
        target: "tp_lig",
        title: "Tipo de ligação",
        body: "O tipo de ligação (mono, bi ou trifásico) afeta o cálculo da demanda. Confira sempre a coerência entre os três campos: tipo de ligação, disjuntor e carga.",
        advanceOn: "next",
      },
      {
        target: null,
        title: "Pronto!",
        body: "Esses são os campos da Solicitação relacionados à demanda. Volte ao treinamento para continuar.",
        advanceOn: "next",
      },
    ],
  },
};
