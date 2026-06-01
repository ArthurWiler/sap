/* ============ DATA GENERATOR ============ */
/* Generates a coherent dataset for a "nota" — used across all screens. */

const NOMES_F = [
  "MARIA CLARA COSTA",
  "ANA BEATRIZ SILVA",
  "JULIANA PEREIRA",
  "FERNANDA OLIVEIRA",
  "CAMILA SANTOS",
  "PATRÍCIA LIMA",
  "RAQUEL FERREIRA",
  "TATIANA RODRIGUES",
  "LUCIANA MARTINS",
  "ADRIANA SOUZA",
  "BEATRIZ ALVES",
  "CARLA RIBEIRO",
  "DANIELA NUNES",
  "ELAINE BARBOSA",
  "FABIANA PINTO",
];
const NOMES_M = [
  "ARTHUR HENRIQUE LIMA",
  "BRUNO CARVALHO",
  "CARLOS EDUARDO ROCHA",
  "DIEGO PEREIRA",
  "EDUARDO SANTOS",
  "FELIPE OLIVEIRA",
  "GUILHERME COSTA",
  "HENRIQUE ALVES",
  "IGOR FERREIRA",
  "JOÃO PAULO MOREIRA",
  "LEONARDO SILVA",
  "MARCELO RIBEIRO",
  "NICOLAS NUNES",
  "OTÁVIO PINTO",
  "PAULO ROBERTO DIAS",
];
const SOBRENOMES_RUA = [
  "WEMERSON DOS SANTOS FARIA",
  "JOSÉ DE ALENCAR",
  "ANTÔNIO CARLOS MAGALHÃES",
  "JOAQUIM NABUCO",
  "DA INDEPENDÊNCIA",
  "DOS PIONEIROS",
  "MARIA EDUARDA",
  "BARÃO DO RIO BRANCO",
  "CASTRO ALVES",
  "RUI BARBOSA",
  "JÚLIO DE CASTILHOS",
  "SETE DE SETEMBRO",
  "DAS ACÁCIAS",
  "DAS PALMEIRAS",
  "MONTE CASTELO",
];
const BAIRROS = [
  "SANTA FELICIDADE",
  "CENTRO",
  "JARDIM AMÉRICA",
  "SÃO BENEDITO",
  "BOA VISTA",
  "CIDADE JARDIM",
  "JARDIM EUROPA",
  "SANTA EFIGÊNIA",
  "SÃO PEDRO",
  "VILA NOVA",
  "PLANALTO",
  "SANTA TEREZINHA",
  "NOVA SUÍÇA",
  "SANTO ANTÔNIO",
  "FUNCIONÁRIOS",
];
const CIDADES_MG = [
  "SETE LAGOAS",
  "BELO HORIZONTE",
  "CONTAGEM",
  "BETIM",
  "UBERLÂNDIA",
  "JUIZ DE FORA",
  "MONTES CLAROS",
  "UBERABA",
  "GOVERNADOR VALADARES",
  "IPATINGA",
  "DIVINÓPOLIS",
  "SANTA LUZIA",
  "IBIRITÉ",
  "POÇOS DE CALDAS",
  "PATOS DE MINAS",
];
const CEPS = [
  "35703-570",
  "30130-010",
  "32010-010",
  "32600-000",
  "38400-000",
  "36010-000",
  "39400-000",
  "38010-000",
  "35020-000",
  "35160-000",
  "35500-000",
  "33010-000",
  "32400-000",
  "37700-000",
  "38700-000",
];

const TIPOS_LOC = [
  "Urbano Áereo",
  "Urbano Subterrâneo",
  "Rural Aéreo",
  "Rural Subterrâneo",
];
const TP_LOC_CONSUMO = [
  "CS Casa",
  "CS Apto",
  "CR Casa",
  "CR Apto",
  "CC Comércio",
  "IN Indústria",
];
const GRUPOS = ["BT", "MT"];
const TRAFOS = ["Coletivo", "Exclusivo", "Compartilhado"];
const TIPOS_LIG = ["Monofásico", "Bifásico", "Trifásico"];
const DISJUNTORES = [
  { cod: "A040", desc: "MONOPOLAR 40A" },
  { cod: "A050", desc: "MONOPOLAR 50A" },
  { cod: "A060", desc: "MONOPOLAR 630" },
  { cod: "A063", desc: "MONOPOLAR 63A" },
  { cod: "A070", desc: "MONOPOLAR 70A" },
  { cod: "B040", desc: "BIPOLAR 40A" },
  { cod: "B050", desc: "BIPOLAR 50A" },
  { cod: "B060", desc: "BIPOLAR 60A" },
  { cod: "B063", desc: "BIPOLAR 63A" },
  { cod: "T040", desc: "TRIPOLAR 40A" },
  { cod: "T063", desc: "TRIPOLAR 63A" },
  { cod: "T080", desc: "TRIPOLAR 80A" },
  { cod: "T100", desc: "TRIPOLAR 100A" },
  { cod: "T120", desc: "TRIPOLAR 120A" },
  { cod: "T125", desc: "TRIPOLAR 125" },
  { cod: "T150", desc: "TRIPOLAR 150A" },
  { cod: "T175", desc: "TRIPOLAR 175A" },
  { cod: "T200", desc: "TRIPOLAR 200A" },
  { cod: "T225", desc: "TRIPOLAR 225A" },
  { cod: "T250", desc: "TRIPOLAR 250A" },
  { cod: "T300", desc: "TRIPOLAR 300A" },
  { cod: "T315", desc: "TRIPOLAR 315A" },
  { cod: "T320", desc: "TRIPOLAR 320A" },
  { cod: "T400", desc: "TRIPOLAR 400A" },
  { cod: "T450", desc: "TRIPOLAR 450A" },
  { cod: "T500", desc: "TRIPOLAR 500A" },
  { cod: "T600", desc: "TRIPOLAR 600A" },
  { cod: "T630", desc: "TRIPOLAR 630A" },
  { cod: "T700", desc: "TRIPOLAR 700A" },
  { cod: "T800", desc: "TRIPOLAR 800A" },
  { cod: "T1000", desc: "TRIPOLAR 1000A" },
  { cod: "T1200", desc: "TRIPOLAR 1200A" },
  { cod: "T1500", desc: "TRIPOLAR 1500A" },
  { cod: "T1800", desc: "TRIPOLAR 1800A" },
  { cod: "T2100", desc: "TRIPOLAR 2100A" },
];
const TIPOS_SERV = [
  { cod: "A01", desc: "Analisar Carga Rede Aérea" },
  { cod: "A02", desc: "Analisar Carga Rede Subterrânea" },
  { cod: "A03", desc: "Aumento de Carga" },
  { cod: "A04", desc: "Religação" },
  { cod: "A05", desc: "Mudança de Titularidade" },
];
const MERCADOS = [
  "URBANO_AEREO",
  "URBANO_SUB",
  "RURAL_AEREO",
  "RURAL_SUB",
];
const STATUS_NOTA = [
  { p1: "MEAB MSPN", p2: "CANC" },
  { p1: "MEAB ABER", p2: "ATEN" },
  { p1: "MEAB ENCB", p2: "CONC" },
  { p1: "MEAB ANAL", p2: "PEND" },
];
const STATUS_SOLIC = [
  "Liberado para geração de dados mestres",
  "Aguardando análise técnica",
  "Em execução",
  "Concluído pendente faturamento",
  "Aguardando documentação do cliente",
];
const MODALIDADES_AC = [
  "Distribuidora",
  "Permissionária",
  "Concessionária",
];
const SIM_NAO = ["Sim", "Não"];
const RUA_PREFIX = ["RUA", "AV", "TRAVESSA", "ALAMEDA", "PRAÇA"];

/* PRNG seedable (Mulberry32) */
function makeRng(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6d2b79f5) >>> 0;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}
function hashStr(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];
const padNum = (n, len) => String(n).padStart(len, "0");
const randDigits = (rng, len) => {
  let s = "";
  for (let i = 0; i < len; i++) s += Math.floor(rng() * 10);
  return s;
};
const formatDateBR = (d) => {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = d.getFullYear();
  return `${dd}.${mm}.${yy}`;
};
const slugifyName = (nome) =>
  nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .join("");

/**
 * Build a full dataset deterministically from a seed key (e.g. nota number).
 * Same seed → same dataset, every time.
 */
function generateDataset(seedKey) {
  const rng = makeRng(hashStr(String(seedKey)));

  const isFem = rng() < 0.55;
  const nome = pick(rng, isFem ? NOMES_F : NOMES_M);
  const slug = slugifyName(nome);

  const tipoServ = pick(rng, TIPOS_SERV);
  const statusNota = pick(rng, STATUS_NOTA);
  const statusSolic = pick(rng, STATUS_SOLIC);
  const disj = pick(rng, DISJUNTORES);
  const tipoLig = pick(rng, TIPOS_LIG);
  const grupo = pick(rng, GRUPOS);
  const trafo = pick(rng, TRAFOS);
  const tpLoc = pick(rng, TP_LOC_CONSUMO);
  const locFis = pick(rng, TIPOS_LOC);
  const mercado = pick(rng, MERCADOS);
  const modalidadeAC = pick(rng, MODALIDADES_AC);

  const cidade = pick(rng, CIDADES_MG);
  const bairro = pick(rng, BAIRROS);
  const cep = pick(rng, CEPS);
  const ruaNome = pick(rng, SOBRENOMES_RUA);
  const ruaPref = pick(rng, RUA_PREFIX);
  const numCasa = String(Math.floor(rng() * 999) + 1);

  // Reference date: between today-180d and today+30d
  const today = new Date(2026, 4, 25); // May 25 2026 (matches our cutoff context)
  const dtOffset = Math.floor(rng() * 210) - 30;
  const dtStatus = new Date(today.getTime() + dtOffset * 86400000);

  const possuiCadunico = pick(rng, SIM_NAO);
  const cadAtualizado = pick(rng, SIM_NAO);
  const padraoPronto = pick(rng, SIM_NAO);

  // Disjuntor geral radio choice
  const disjOpt = ["com", "sem", "estimado", "projeto"][
    Math.floor(rng() * 4)
  ];

  // Latitude/longitude near Sete Lagoas / Belo Horizonte
  const lat = -(19 + rng() * 2).toFixed(7);
  const lng = -(43 + rng() * 2).toFixed(7);

  // Cargas/medidas
  const cargaKw = (rng() * 50).toFixed(1).replace(".", ",");
  const consumoEst = String(Math.floor(rng() * 800));

  return {
    seedKey: String(seedKey),
    // Nota
    notaNumero: String(seedKey),
    notaTipo: "EO",
    notaTipoDesc: "Consumidor de BT",
    statusP1: statusNota.p1,
    statusP2: statusNota.p2,
    tipoNota: "ZCUM01 - Solic de Obra",
    dataCriacao: formatDateBR(dtStatus),

    // Dados Comp (image 3)
    modalidade: "CEMIG",
    mercado,
    nivelTensaoUC: pick(rng, ["BT", "MT"]),
    tipoAtendimento: String(Math.floor(rng() * 5)),
    enquadramentoReg: String(Math.floor(rng() * 4)),
    tipoObra: String(Math.floor(rng() * 6)),
    universalizacao: String(Math.floor(rng() * 2)),
    programa: String(Math.floor(rng() * 3)),
    tensaoObjetivo: pick(rng, ["127/220", "220/380", "13800"]),
    microObjetivo: pick(rng, ["LIG-N", "LIG-A", "REL", "TRF"]),
    objetivo: pick(rng, ["NOVA", "AMPL", "SUBS", "RELI"]),
    objetivoCompl: pick(rng, ["URB", "RUR", "COM", "RES"]),
    tipoObraAneel: pick(rng, ["EXT", "REF", "NOV", "AMP"]),

    // Solicitação
    solicitacaoNum: randDigits(rng, 8),
    tipoServCod: tipoServ.cod,
    tipoServDesc: tipoServ.desc,
    statusSolic,
    parcNegoc: randDigits(rng, 10),
    nomeParc: nome,
    dtStatus: formatDateBR(dtStatus),
    instalacao: randDigits(rng, 10),
    objetoLigacao: randDigits(rng, 10),
    notaServico: String(seedKey),
    protocolo: randDigits(rng, 10),

    // Endereço
    regiao: "MG",
    cidade,
    cep,
    bairro,
    rua: `${ruaPref} ${ruaNome}`,
    numero: numCasa,
    compl1: pick(rng, [
      "AD",
      "AP",
      "BN",
      "BO",
      "CD",
      "CH",
      "CJ",
      "CO",
      "CS",
      "CT",
      "CX",
      "FD",
      "FR",
      "FZ",
      "GO",
    ]),
    compl2: pick(rng, ["1", "2", "3", "4", "5", " "]),
    bloco1: pick(rng, ["BL", "FR", "KM", "LP", "NR", "QD", "SE", "TR"]),
    bloco2: String(Math.floor(rng() * 30) + 1),
    lat,
    lng,

    // Comunicação
    nomeSolic: nome,
    tel:
      rng() < 0.4
        ? ""
        : `(31) ${randDigits(rng, 4)}-${randDigits(rng, 4)}`,
    cel: `31${randDigits(rng, 9)}`,
    email1: `${slug}${randDigits(rng, 3)}@gmail.com`,
    email2: `${slug}${randDigits(rng, 3)}@gmail.com`,
    assuntoNS: `${slug}${randDigits(rng, 3)}@gmail.com`,

    // Características
    locFis,
    progElet: String(Math.floor(rng() * 4)),
    grupo,
    tpLocConsumo: tpLoc,
    ramoAtividade: "X" + padNum(Math.floor(rng() * 999) + 1, 3),
    classeSubClasse: padNum(Math.floor(rng() * 9000) + 1000, 4),
    trafo,
    tipoLig,
    disjuntorCod: disj.cod,
    disjuntorDesc: disj.desc,
    tipoSolicitacao: pick(rng, ["AC", "ML", "TR", "LN", "LP", "OIP"]),
    assentIrreg: pick(rng, SIM_NAO),

    // Outras informações
    possuiCadunico,
    cadAtualizado,
    transfereTSEE: rng() < 0.5 ? "Sim" : "Não",
    possuiLaudoMed: rng() < 0.2,
    possuiVE: rng() < 0.15,
    padraoGratuito: rng() < 0.3,

    // Disjuntor geral
    numCaixas: String(Math.floor(rng() * 3) + 1),
    tipoUsuario: pick(rng, [
      "Consumidor sem geração distribuída",
      "Consumidor com microgeração",
      "Consumidor com minigeração",
    ]),
    disjOpt,
    qtdDisjGeral:
      disjOpt === "com" ? String(Math.floor(rng() * 3) + 1) : "",
    disjGeralVal: disjOpt === "com" ? pick(rng, DISJUNTORES).cod : "",
    cargaKw,
    atendHibrido: rng() < 0.3,

    // Previsão
    padraoPronto,

    // Aprovação
    artProjeto: rng() < 0.5 ? "ART" + randDigits(rng, 7) : "",
    artExecucao: rng() < 0.3 ? "ART" + randDigits(rng, 7) : "",

    // Análise de carga
    modalidadeAC,

    // Outros dados
    classGrandes: rng() < 0.2 ? pick(rng, ["A", "B", "C"]) : "",
    consumoEstimado: consumoEst,

    // === Atividades / Medidas ===
    medidas: generateMedidas(rng, seedKey),
  };
}

/* ============ MEDIDAS GENERATOR ============ */
const GRP_CODIGOS = [
  "ZEO-NTC",
  "ZEO-EXP",
  "ZEO-RLC",
  "ZEO-PRJ",
  "ZEO-VIS",
];
const STATUS_USUARIOS = [
  "CANC CTEC",
  "CANC",
  "CANC SOBR",
  "CANC CORE",
  "CONC CTEC",
  "CONC",
  "ENCE",
  "ABER",
  "ANDM",
  "PEND",
];
const RESPONSAVEIS_MED = [
  "PE-NTC",
  "LE-EXP",
  "LE-RLC",
  "PE-EXP",
  "WF-BATCH",
  "PE-NCT",
];
const CRIADO_POR_OPTS = [
  "E267680",
  "E261211",
  "E260497",
  "E236271",
  "ALEREMOTE",
];
const MED_TEMPLATES = [
  { cod: "0019", grp: "ZEO-NTC", desc: "Analisar Documentação MT/BT" },
  { cod: "0800", grp: "ZEO-EXP", desc: "Análise Ambiental" },
  { cod: "0514", grp: "ZEO-RLC", desc: "Comunicar Deferimento da..." },
  { cod: "0020", grp: "ZEO-NTC", desc: "Analisar Carga MT/BT Orça..." },
  { cod: "0550", grp: "ZEO-RLC", desc: "Encaminhar Orçamento Co..." },
  { cod: "0557", grp: "ZEO-RLC", desc: "Realizar Vistoria/Conexão ..." },
  { cod: "0083", grp: "ZEO-EXP", desc: "Corrigir /Completar inform..." },
  { cod: "0019", grp: "ZEO-NTC", desc: "Analisar Documentação MT/BT" },
  {
    cod: "0080",
    grp: "ZEO-EXP",
    desc: "Elaborar Orçamento de Conexão",
    textoMedida: "VER NOTA >>>>",
  },
  {
    cod: "0070",
    grp: "ZEO-EXP",
    desc: "Elaborar Solução de Cone...",
    textoMedida: "OK",
  },
  { cod: "0590", grp: "ZEO-RLC", desc: "Encaminhar Orçamento Conexão" },
];

function generateMedidas(rng, seedKey) {
  const baseId = String(seedKey).padStart(10, "0");
  const baseDate = new Date(2026, 0, 23);
  return MED_TEMPLATES.map((m, i) => {
    const planIni = new Date(baseDate.getTime() + i * 3 * 86400000);
    const planFim = new Date(
      planIni.getTime() + (5 + Math.floor(rng() * 8)) * 86400000,
    );
    const concluido = i < 8;
    const criadoPor = pick(rng, CRIADO_POR_OPTS);
    const status = pick(rng, STATUS_USUARIOS);
    return {
      id: baseId + "190" + String(i + 1).padStart(3, "0"),
      n: i + 1,
      grpCodigo: m.grp,
      codigo: m.cod,
      texto: m.desc,
      textoMedida: m.textoMedida || "",
      statusUsuario: status,
      dataPlanIni: formatDateBR(planIni),
      fimPlanejado: formatDateBR(planFim),
      responsavel: pick(rng, RESPONSAVEIS_MED),
      concluidoPor: concluido ? pick(rng, CRIADO_POR_OPTS) : "",
      dataConclusao: concluido
        ? formatDateBR(new Date(planFim.getTime() + 86400000))
        : "",
      criadoPor: pick(rng, CRIADO_POR_OPTS),
      criadoEm: formatDateBR(planIni),
      criadoHora:
        String(8 + Math.floor(rng() * 10)).padStart(2, "0") +
        ":" +
        String(Math.floor(rng() * 60)).padStart(2, "0"),
      modificadoPor: pick(rng, CRIADO_POR_OPTS),
      modificadoEm: formatDateBR(
        new Date(planFim.getTime() + 14 * 86400000),
      ),
      selected: i === 0, // first row pre-selected like the screenshot
    };
  });
}

