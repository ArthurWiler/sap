# Guia de Treinamentos - `index.html`

Este documento explica como **adicionar**, **editar** e **remover** treinamentos e submódulos no arquivo `index.html`, e onde encontrar cada peça do código.

> **Onde edito?** Tudo neste guia mora dentro do bloco `<script type="text/babel">` em `index.html`. As referências de linha são aproximadas (mudam conforme você edita), use os títulos de seção (`/* ============ XXX ============ */`) como âncoras.

---

## Sumário

1. [Mapa do arquivo](#1-mapa-do-arquivo)
2. [Editar um treinamento existente](#2-editar-um-treinamento-existente)
3. [Adicionar um novo treinamento](#3-adicionar-um-novo-treinamento)
4. [Editar submódulos](#4-editar-submódulos)
5. [Criar um tour guiado (passo a passo com indicadores)](#5-criar-um-tour-guiado-passo-a-passo-com-indicadores)
6. [Referência: data-tour-id disponíveis](#6-referência-data-tour-id-disponíveis)
7. [Eventos do tour (waitFor)](#7-eventos-do-tour-waitfor)
8. [Persistência do progresso](#8-persistência-do-progresso)
9. [Gerador de dados aleatórios](#9-gerador-de-dados-aleatórios)
10. [Receitas rápidas (copy-paste)](#10-receitas-rápidas-copy-paste)

---

## 1. Mapa do projeto

O projeto agora está dividido em vários arquivos para facilitar manutenção. **Esta é a estrutura nova (multi-arquivo)** - a versão antiga em arquivo único ainda funciona da mesma forma, só está consolidada em `index.html`.

```
multi/
├── index.html              ← carrega CSS + 24 JS na ordem certa
├── styles.css              ← todo o CSS
└── js/
    ├── 00-header.js                    Destructuring de React (useState, useMemo, etc.)
    ├── data.js                         Gerador de dataset (NOMES_*, BAIRROS, CIDADES_MG,
    │                                   DISJUNTORES, MED_TEMPLATES, generateDataset, generateMedidas)
    ├── progress.js                     loadProgress, saveProgress, trainingProgress, totalProgress
    ├── trainings.js                    Array TRAININGS + auto-fill de submódulos
    ├── icons.js                        Componente <Icon/>
    ├── components-common.js            Field, Select, Radio, Check
    ├── components-progress-bar.js      ProgressBar
    ├── components-tour.js              TourBanner, TourSpotlight
    ├── home-bar.js                     HomeTopBar
    ├── modal-status.js                 DefinirStatusModal
    ├── modal-selecionar-objeto.js      SelecionarObjetoModal
    ├── dropdown-servicos.js            ServicosParaObjetoMenu
    ├── screen-home.js                  HomePage
    ├── screen-nota-input.js            NotaInputPage
    ├── screen-tab-contents.js          DadosSolicitacaoTab, DadosComplementaresTab, DadosCompContent
    ├── screen-atividades.js            AtividadesTab
    ├── screen-acoes.js                 AcoesTab
    ├── screen-nota-detail.js           NotaDetailPage
    ├── screen-solicitacao.js           SolicitacaoPage
    ├── screen-text-editor.js           ModificarTextoMedidaPage
    ├── screen-training-index.js        TrainingIndexPage
    ├── screen-submodule-index.js       SubmoduleIndexPage
    ├── tour-steps.js                   Objeto TOUR_STEPS - passos guiados
    └── app.js                          function App + ReactDOM.createRoot (carrega por último)
```

### Como os arquivos se enxergam

Cada `.js` é carregado como `<script type="text/babel">` em `index.html`. **Babel standalone transpila cada um para um script clássico**, então as declarações de topo (`const`, `function`) ficam acessíveis globalmente após a execução - desde que o arquivo que **define** algo seja carregado antes do arquivo que **usa**. A ordem no `index.html` respeita essa regra.

**Onde editar o quê:**

| Quero editar… | Vou em… |
|---|---|
| Adicionar/remover/editar treinamentos | `js/trainings.js` |
| Adicionar/editar passos do tour (SAP) | `js/tour-steps.js` |
| Adicionar/editar slides de submódulos teóricos | `js/decks.json` |
| Listas de nomes/cidades/disjuntores (dados aleatórios) | `js/data.js` |
| Linhas da tabela de Atividades | `js/data.js` → `MED_TEMPLATES` |
| Componente `Icon` (adicionar SVG novo) | `js/icons.js` |
| Estilo visual (cores, espaçamentos, layout) | `styles.css` |
| Componentes reutilizáveis (Field, Select, etc.) | `js/components-common.js` |
| Aba específica da nota SAP | `js/screen-atividades.js`, `js/screen-acoes.js`, etc. |
| Tela de Solicitação (campos com tourId) | `js/screen-solicitacao.js` |
| Tela de slides (deck) | `js/screen-deck.js` |
| Roteamento e estado global | `js/app.js` |

### Dois tipos de submódulos

- **`type: undefined` (padrão)** - submódulo SAP: abre a tela de detalhes da nota e executa o tour guiado definido em `tour-steps.js`.
- **`type: "deck"`** - submódulo teórico: abre uma sequência de slides definida em `decks.json`. Sem tour guiado, sem dados SAP - só conteúdo educacional.

Para criar um submódulo teórico, marque `type: "deck"` no array `submodules` do treinamento (em `trainings.js`) e adicione uma entrada com o `id` correspondente em `decks.json`.

Estrutura de uma entrada em `decks.json`:

```json
{
  "carga-i-pedidos": {
    "title": "Entrada de pedidos",
    "slides": [
      {
        "title": "Bem-vindo!",
        "body": "Texto explicativo do slide…",
        "image": null,
        "imageAlt": "Descrição da imagem (placeholder mostrado quando image é null)"
      }
    ]
  }
}
```

- `image: null` → mostra placeholder cinza com `imageAlt` como legenda.
- `image: "url-ou-caminho"` → renderiza a imagem real.

### Tipos de slides

Cada slide tem um campo opcional `type`:

- **`"info"` (padrão)** - slide com título, corpo de texto, opcionalmente bullets e imagem. Use para conteúdo expositivo.
- **`"quiz"`** - slide interativo com pergunta e múltiplas opções. O usuário pode errar quantas vezes quiser. Ao acertar, todas as opções mostram explicação individual (correta + incorretas). Botão "Próximo" só ativa após acertar.

Estrutura de um slide info com bullets:

```json
{
  "title": "Os 3 códigos da área de Conexão BT",
  "bullets": [
    "COBT - Ligação Nova ou Alteração de Carga em BT",
    "PSRP - Remoção de Poste ou Rede",
    "PSIP - Obras de Iluminação Pública"
  ],
  "body": "Texto adicional opcional após os bullets.",
  "image": null,
  "imageAlt": "Tabela: COBT / PSRP / PSIP"
}
```

Estrutura de um slide quiz:

```json
{
  "type": "quiz",
  "question": "Qual código corresponde a remoção de poste?",
  "context": "Texto opcional com contexto extra (aparece em destaque acima das opções).",
  "options": [
    {
      "text": "COBT",
      "correct": false,
      "explanation": "COBT é usado apenas para LN/AC em BT - não cobre remoção."
    },
    {
      "text": "PSRP",
      "correct": true,
      "explanation": "Correto. PSRP é o código específico para Remoção de Poste ou Rede."
    }
  ],
  "summary": "Texto opcional que aparece abaixo das opções após acertar."
}
```

**Regras do quiz:**

- Exatamente uma opção deve ter `correct: true`.
- `explanation` é opcional mas recomendado em todas as opções - aparecem só após o acerto.
- O usuário pode errar quantas vezes quiser; cada erro reaviva animação de shake.
- Próximo só fica habilitado após o acerto.
- No final do deck, se houver pelo menos um quiz não respondido corretamente, o usuário fica preso na pergunta (consistente com a regra de bloqueio).

### Servindo localmente

Babel standalone com `<script src="...">` precisa de **HTTP** (não funciona com `file://` por causa de CORS). Para testar localmente:

```bash
cd multi/
python3 -m http.server 8000
# abre http://localhost:8000
```

Em produção (GitHub Pages, Firebase, servidor interno), serve igual.

---

## 2. Editar um treinamento existente

Vá até o array `TRAININGS` (procure por `const TRAININGS = [`). Cada item é um objeto com os campos:

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | string | sim | Identificador único. **Não use espaços nem acentos.** Será usado pra construir os IDs dos submódulos (`{id}-sub1`, etc.) e como chave no progresso. |
| `title` | string | sim | Título exibido no card e no breadcrumb da página de submódulos. |
| `desc` | string | sim | Descrição curta exibida no card (1–3 linhas). |
| `available` | boolean | sim | `true` = card clicável. `false` = card cinza com selo "Em breve". |
| `difficulty` | string | sim | Exatamente `"Iniciante"`, `"Intermediário"` ou `"Avançado"`. Controla o agrupamento e a cor do dot. |
| `platform` | string | sim | `"web"` ou `"desktop"`. Se `"desktop"`, mostra o selo **DESKTOP** no card. |
| `hasSubmodules` | boolean | opcional | Mostra o chip verde "Submódulos" no card. **Auto-preenchido como `true`** pelo loop em `TRAININGS.forEach`, então normalmente não precisa setar. |
| `tags` | array de strings | sim | Tags coloridas mostradas abaixo da descrição. |
| `submodules` | array | opcional | Lista de submódulos (veja seção 4). **Se você não definir, são auto-gerados sub1/sub2/sub3** pelo loop em `TRAININGS.forEach`. |

### Exemplo de edição

Para mudar o título do treinamento "Treinamento documental":

```js
{
  id: "documental",
  title: "Gestão Documental Completa",  // ← editado
  desc: "Procedimento atualizado para...",  // ← editado
  available: true,  // ← liberado
  difficulty: "Intermediário",
  platform: "web",
  hasSubmodules: true,
  tags: ["Intermediário","Documentação","Processos"]
}
```

> **Importante:** se você mudar o `id`, o progresso salvo no `localStorage` para o id antigo é perdido (vira "órfão"). Para resetar progresso, abra DevTools e rode `localStorage.removeItem("cemig-training-progress-v1")`.

---

## 3. Adicionar um novo treinamento

Adicione um novo objeto ao array `TRAININGS`:

```js
const TRAININGS = [
  // ... outros treinamentos ...
  {
    id: "meu-treinamento",
    title: "Meu Treinamento Novo",
    desc: "Descrição do que o usuário vai aprender neste módulo.",
    available: true,
    difficulty: "Intermediário",
    platform: "web",
    tags: ["Intermediário", "Tag2", "Tag3"]
  }
];
```

Pronto. O treinamento vai aparecer:

- Agrupado pela dificuldade
- Com 3 submódulos auto-gerados (`meu-treinamento-sub1`, `-sub2`, `-sub3`)
- Com chip "Submódulos"
- Com progress bar `0/3`

> Se `available: true`, o card fica clicável. Os 3 submódulos auto-gerados têm `available: false` por padrão (mostram "Em breve") - para liberar, defina `submodules` explicitamente como na seção 4.

---

## 4. Editar submódulos

Por padrão, **todo treinamento ganha 3 submódulos automáticos** chamados `sub1`, `sub2`, `sub3` (todos bloqueados, exceto `navegacao-basica-sub1`). Esse comportamento está no loop logo após `TRAININGS`:

```js
TRAININGS.forEach(t => {
  if (!t.submodules) {
    t.submodules = [
      { id: t.id + "-sub1", title: "sub1", desc: "Submódulo 1 - descreva aqui.", available: t.id === "navegacao-basica" },
      { id: t.id + "-sub2", title: "sub2", desc: "Submódulo 2 - descreva aqui.", available: false },
      { id: t.id + "-sub3", title: "sub3", desc: "Submódulo 3 - descreva aqui.", available: false }
    ];
  }
  t.hasSubmodules = true;
});
```

**Para customizar**, adicione `submodules: [...]` diretamente ao objeto do treinamento - o `if (!t.submodules)` impede que o auto-fill sobrescreva.

### Campos de um submódulo

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `id` | string | sim | Identificador único. **Convenção:** `{trainingId}-{nome}`. É a chave usada em `TOUR_STEPS` e no progresso. |
| `title` | string | sim | Título exibido na linha do submódulo. |
| `desc` | string | sim | Descrição curta. |
| `available` | boolean | sim | `true` = linha clicável. `false` = mostra "Em breve". |

### Exemplo

Customizando os submódulos do "Tratamento de notas":

```js
{
  id: "tratamento-notas",
  title: "Tratamento de notas",
  // ... outros campos ...
  submodules: [
    { id: "tratamento-notas-revisar", title: "Revisar dados da nota",
      desc: "Identificar campos a corrigir antes da aprovação.", available: true },
    { id: "tratamento-notas-anexar", title: "Anexar documentação",
      desc: "Upload e classificação de anexos GEDEX.", available: true },
    { id: "tratamento-notas-encaminhar", title: "Encaminhar para análise",
      desc: "Fluxo de workflow e definição de responsável.", available: false }
  ]
}
```

Você pode ter **mais ou menos que 3** submódulos - o array tem tamanho livre.

---

## 5. Criar um tour guiado (passo a passo com indicadores)

Tours são definidos no objeto `TOUR_STEPS`, indexado pelo `id` do submódulo:

```js
const TOUR_STEPS = {
  "meu-treinamento-sub1": {
    title: "sub1 - Título exibido na faixa de treinamento",
    steps: [
      { target: null, title: "Bem-vindo!", body: "Vamos aprender X.", advanceOn: "next" },
      { target: "tab-atividades", title: "Aba Atividades",
        body: "Clique aqui para ver as medidas.",
        advanceOn: "click",
        waitFor: { type: "tab-change", tab: "atividades" } }
      // ... mais passos ...
    ]
  }
};
```

> **Importante:** A chave em `TOUR_STEPS` deve coincidir **exatamente** com o `id` do submódulo. Se o `id` for `tratamento-notas-revisar`, a chave precisa ser `"tratamento-notas-revisar"`.

> Submódulos **sem entrada** em `TOUR_STEPS` ainda funcionam - eles abrem direto na tela `nota-detail` sem tutorial. Útil para um submódulo de "exploração livre".

### 5.1. Estrutura de um passo (`step`)

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `target` | string ou `null` | sim | `data-tour-id` do elemento a destacar. Se `null`, mostra tooltip centralizado (use em passos de intro/final). |
| `title` | string | sim | Título do tooltip (negrito grande). |
| `body` | string | sim | Texto descritivo (1–4 linhas). |
| `advanceOn` | `"click"` ou `"next"` | sim | `"click"` = avança quando o usuário clica no elemento destacado; `"next"` = avança ao clicar no botão "Avançar". |
| `waitFor` | objeto | opcional | Quando definido, avança automaticamente quando esse evento dispara (veja seção 7). Use **em conjunto com `advanceOn: "click"`** para garantir que o avanço só aconteça depois que o sistema realmente reagiu (ex.: a aba mudou de fato). |

### 5.2. Quando usar `waitFor`?

- **Sem `waitFor`**: o tour avança no clique do DOM. Funciona pra elementos simples (uma aba, um botão).
- **Com `waitFor`**: o tour só avança após a ação completar no React. Use quando o efeito do clique demora um instante (abrir modal, trocar de tela, esperar resposta).

**Regra geral:** se o clique muda o estado do React (modal abre, aba troca), use `waitFor`. Se é só um avanço sequencial, deixe sem.

### 5.3. Quais eventos eu posso usar em `waitFor`?

Veja a seção 7.

### 5.4. Ícones disponíveis

Os tooltips e a UI usam o componente `<Icon name="..."/>`. Nomes disponíveis (lista completa no `switch` de `Icon`):

```
search, help, bell, user, chevron-down, chevron-right, arrow-left,
menu, edit, info, check, save, print, people, back-prev, fwd, list,
tab-solic, tab-people, tab-pin, tab-doc, tab-arrow, tab-cog, tab-cost,
table, doc-attach, external, play, lock, refresh, monitor, layers, x, cursor
```

---

## 6. Referência: `data-tour-id` disponíveis

Estes são todos os IDs já presentes no código que você pode usar em `target` dos seus tours. Se precisar de um elemento que ainda não tem ID, **adicione o atributo no JSX** (procure pelo componente da tela e acrescente `data-tour-id="meu-id"`).

### 6.1. Aba principal `NotaDetailPage`

| ID | Elemento | Tela em que aparece |
|---|---|---|
| `tab-solicitacao` | Aba "Dados Solicitação" | Detalhe da nota |
| `tab-complementares` | Aba "Dados Complementares" | Detalhe da nota |
| `tab-atividades` | Aba "Atividades" | Detalhe da nota |
| `tab-acoes` | Aba "Ações" | Detalhe da nota |
| `servicos-para-objeto` | Botão "Serviços para objeto" (toolbar) | Detalhe da nota |

### 6.2. Aba "Dados Complementares"

| ID | Elemento |
|---|---|
| `solicitacao-link` | Link clicável com o número da Solicitação |

### 6.2.1. Tela de detalhes da Solicitação

| ID | Elemento | Seção da tela |
|---|---|---|
| `parc_neg` | Bloco "Parc.negóc." (número + nome) | Dados da solicitação |
| `inst_cliente` | Campo "Instalação" | Dados da solicitação |
| `nome_solic` | Campo "Nome do solicitante" | Dados para comunicação |
| `munic` | Campo "Cidade" | Endereço |
| `bairro` | Campo "Bairro" | Endereço |
| `ender` | Campo "Rua" | Endereço |
| `complemento` | Bloco "Compl:" (dois inputs) | Endereço |
| `ref` | Campo "Referência / Bairro" | Endereço |
| `localiz` | Select "Loc.Física" | Características |
| `loc_consumo` | Select "Tp.loc.consumo" | Características |
| `ramo_atv` | Bloco "Ramo Atividade" | Características |
| `class_subclass` | Bloco "Classe/Sub.Classe" | Características |
| `grp` | Select "Grupo" | Características |
| `tp_lig` | Select "Tipo de ligação" | Características |
| `disjunt` | Bloco "Disjuntor" (código + descrição) | Características |
| `tp_solicit` | Campo "Tipo Solicitação" | Características |
| `qtd_geral` | Campo "Quantidade disjuntor geral" | Informações do disjuntor geral |
| `disj_ger` | Campo "Disjuntor Geral" | Informações do disjuntor geral |

> Esses IDs foram adicionados via prop `tourId` nos componentes `Field` e `Select` (ou `data-tour-id` direto em `div.ffield` para blocos com múltiplos inputs). Para acrescentar mais campos da tela de Solicitação ao tour, basta passar `tourId="meu-novo-id"` ao `<Field>` ou `<Select>` correspondente.

### 6.3. Aba "Atividades"

| ID | Elemento |
|---|---|
| `med-table` | Container da tabela de medidas |
| `med-row-0` | Primeira linha da tabela (medida selecionada por padrão) |
| `med-pencil-text` | Ícone de lápis na coluna **Tx** da primeira linha (abre o editor de texto) |
| `med-pencil-status` | Ícone de lápis vermelho na toolbar inferior (abre modal "Definir status do usuário") |

### 6.4. Aba "Ações"

| ID | Elemento |
|---|---|
| `acoes-header` | Subheader com `Nº: 12 ZEO-NTC 0019 ...` |
| `acoes-table` | Container da tabela de ações |

### 6.5. Modal "Definir status do usuário"

| ID | Elemento |
|---|---|
| `status-modal-body` | Corpo do modal (com as duas tabelas) |
| `status-confirm` | Ícone de check verde no rodapé do modal |

### 6.6. Como adicionar um novo `data-tour-id`

No componente onde fica o elemento, adicione o atributo:

```jsx
<button data-tour-id="meu-botao" onClick={...}>
  Texto do botão
</button>
```

Depois use `target: "meu-botao"` no seu passo do tour.

> **Dica:** o seletor procura `[data-tour-id="X"]` no DOM. Se o elemento estiver dentro de um modal que abre depois, o tour espera **até 20 tentativas** (≈1,6s) antes de desistir. Para elementos que demoram mais, abra-os manualmente no `App` antes de iniciar o passo.

> **Auto-scroll:** quando o spotlight aponta para um elemento fora da viewport (acima do topo ou nos 200px finais), o tour usa `scrollIntoView({block:"center"})` automaticamente, espera 250ms para o scroll terminar e re-mede o rect. Isso garante que tooltip + spotlight fiquem sempre visíveis em telas longas como a de Solicitação.

---

## 7. Eventos do tour (`waitFor`)

Os componentes disparam eventos via `onTourEvent` durante a navegação. Use esses eventos no campo `waitFor` dos seus passos.

### Eventos disponíveis hoje

| Evento | Disparado quando | Exemplo de uso |
|---|---|---|
| `{ type: "tab-change", tab: "atividades" }` | Usuário troca a aba principal | `waitFor: { type: "tab-change", tab: "atividades" }` |
| `{ type: "tab-change", tab: "complementares" }` | Idem | `waitFor: { type: "tab-change", tab: "complementares" }` |
| `{ type: "medida-selected", idx: 0 }` | Usuário clica numa linha da tabela de medidas | `waitFor: { type: "medida-selected", idx: 0 }` |
| `{ type: "open-status-modal" }` | Modal de status é aberto | `waitFor: { type: "open-status-modal" }` |
| `{ type: "confirm-status" }` | Usuário confirma o status no modal | `waitFor: { type: "confirm-status" }` |
| `{ type: "open-servicos-menu" }` | Dropdown "Serviços para objeto" é aberto | `waitFor: { type: "open-servicos-menu" }` |
| `{ type: "open-selecionar-objeto" }` | Modal "Selecionar um objeto" é aberto | `waitFor: { type: "open-selecionar-objeto" }` |
| `{ type: "open-solicitacao" }` | Usuário clicou no link da Solicitação | `waitFor: { type: "open-solicitacao" }` |

### Como o `waitFor` decide se avança

O matching é feito por **comparação rasa de chaves**: todas as chaves do `waitFor` precisam coincidir com as do evento.

```js
// Evento disparado:
{ type: "medida-selected", idx: 0 }

// waitFor que casa:
{ type: "medida-selected", idx: 0 }    // ✅ avança
{ type: "medida-selected" }            // ✅ avança (matcha qualquer idx)
{ type: "tab-change" }                 // ❌ não avança
{ type: "medida-selected", idx: 5 }    // ❌ não avança (idx errado)
```

### Adicionando um novo evento

1. No componente onde acontece a interação, dispare o evento:
   ```js
   onTourEvent && onTourEvent({ type: "meu-evento-novo", algumDado: 42 });
   ```
2. No passo do tour, escute:
   ```js
   { target: "...", advanceOn: "click",
     waitFor: { type: "meu-evento-novo", algumDado: 42 } }
   ```

---

## 8. Persistência do progresso

- Chave do `localStorage`: `cemig-training-progress-v1` (constante `PROGRESS_KEY`).
- Formato: `{ [trainingId]: { [submoduleId]: true, ... }, ... }`
- Funções utilitárias: `loadProgress()`, `saveProgress(p)`, `trainingProgress(progress, training)`, `totalProgress(progress)`.
- Um submódulo é marcado como concluído em dois momentos:
  1. Ao **completar o tour** (clicar "Concluir" no último passo).
  2. Ao **sair do fluxo SAP** com o botão "← Treinamentos" do subbar (função `exitFlow` no `App`).

### Resetar o progresso (DevTools console)

```js
localStorage.removeItem("cemig-training-progress-v1");
location.reload();
```

### Marcar tudo como concluído (para testes)

```js
const all = {};
// (precisa do array TRAININGS - abra a aba Console e cole isto após o site carregar)
TRAININGS.forEach(t => {
  all[t.id] = {};
  t.submodules.forEach(s => { all[t.id][s.id] = true; });
});
localStorage.setItem("cemig-training-progress-v1", JSON.stringify(all));
location.reload();
```

---

## 9. Gerador de dados aleatórios

A função `generateDataset(seedKey)` produz **um dataset coerente** a partir de uma seed (o número da nota digitado). Mesma seed → mesmo dataset (determinístico).

### Onde os campos são definidos

| Campo no dataset | Vem de | Como customizar |
|---|---|---|
| `nomeSolic`, `nomeParc` | `NOMES_F` / `NOMES_M` (gênero aleatório) | Edite as listas no topo do bloco. |
| `cidade` | `CIDADES_MG` | Adicione/remova nomes do array. |
| `bairro` | `BAIRROS` | Idem. |
| `cep` | `CEPS` | Idem. |
| `rua` | `RUA_PREFIX` + `SOBRENOMES_RUA` | Duas listas combinadas. |
| `disjuntorCod` / `disjuntorDesc` | `DISJUNTORES` | Array de `{cod, desc}`. |
| `mercado` | `MERCADOS` | Array de strings. |
| `statusP1` / `statusP2` | `STATUS_NOTA` | Array de `{p1, p2}`. |
| `statusSolic` | `STATUS_SOLIC` | Array de strings. |
| `tipoLig` | `TIPOS_LIG` | `["Monofásico","Bifásico","Trifásico"]`. |
| `medidas` | `MED_TEMPLATES` + `generateMedidas()` | Veja abaixo. |

### Editar as linhas da tabela de Medidas

A tabela da aba "Atividades" tem 11 linhas. As linhas vêm do array `MED_TEMPLATES`:

```js
const MED_TEMPLATES = [
  { cod: "0019", grp: "ZEO-NTC", desc: "Analisar Documentação MT/BT" },
  // ... mais 10 ...
];
```

Cada template é combinado com dados aleatórios (datas, responsáveis) em `generateMedidas()` para virar uma linha completa.

**Para adicionar uma linha:** acrescente um objeto a `MED_TEMPLATES`.

**Para mudar a descrição da medida:** edite o campo `desc` no template correspondente.

### Botão "Regenerar"

O ícone de refresh no header da nota chama `regenerate()`, que aplica um salt aleatório à seed para gerar um dataset diferente **sem mudar o número visível da nota**. Útil para treinadores mostrarem variações.

---

## 10. Receitas rápidas (copy-paste)

### Receita A - Adicionar um novo treinamento básico (sem tour)

No array `TRAININGS`:

```js
{
  id: "ic-cep",
  title: "Treinamento IC e CEP",
  desc: "Procedimentos de inspeção de campo e CEP no SAP.",
  available: true,
  difficulty: "Intermediário",
  platform: "web",
  tags: ["Intermediário","Inspeção","Campo"]
}
```

Pronto - vai aparecer com 3 submódulos `sub1/sub2/sub3` bloqueados.

### Receita B - Liberar um submódulo existente

Adicione `submodules` explícito ao treinamento:

```js
{
  id: "documental",
  // ... outros campos ...
  submodules: [
    { id: "documental-sub1", title: "sub1", desc: "Submódulo 1 - descreva aqui.", available: true },  // ← liberado
    { id: "documental-sub2", title: "sub2", desc: "Submódulo 2 - descreva aqui.", available: false },
    { id: "documental-sub3", title: "sub3", desc: "Submódulo 3 - descreva aqui.", available: false }
  ]
}
```

### Receita C - Criar um tour completo para um submódulo

Em `TOUR_STEPS`:

```js
"documental-sub1": {
  title: "sub1 - Acessar lista de documentos",
  steps: [
    {
      target: null,
      title: "Bem-vindo!",
      body: "Vamos aprender a acessar a lista de documentos anexos.",
      advanceOn: "next"
    },
    {
      target: "tab-complementares",
      title: "Aba Dados Complementares",
      body: "Clique na aba para abrir os dados técnicos.",
      advanceOn: "click",
      waitFor: { type: "tab-change", tab: "complementares" }
    },
    {
      target: null,
      title: "Concluído!",
      body: "Você completou o submódulo.",
      advanceOn: "next"
    }
  ]
}
```

### Receita D - Adicionar um novo `data-tour-id` a um botão existente

Encontre o componente (ex.: `AcoesTab`) e o botão (ex.: o ícone de calendário), e acrescente:

```jsx
<div className="tool-icon" title="Calendário" data-tour-id="acoes-calendario">
  <Icon name="table" size={14}/>
</div>
```

Depois use `target: "acoes-calendario"` no seu passo do tour.

### Receita E - Tour que abre um modal e destaca algo dentro dele

```js
{
  target: "med-pencil-status",
  title: "Abra o modal de status",
  body: "Clique no lápis vermelho.",
  advanceOn: "click",
  waitFor: { type: "open-status-modal" }
},
{
  target: "status-confirm",        // ← elemento dentro do modal
  title: "Confirme",
  body: "Clique no ícone de check verde para salvar.",
  advanceOn: "click",
  waitFor: { type: "confirm-status" }
}
```

O sistema de spotlight espera até 1,6s pelo elemento aparecer no DOM - tempo suficiente para o modal renderizar.

---

## Checklist de revisão antes de subir mudanças

- [ ] Cada `id` de treinamento é único e sem espaços/acentos
- [ ] Toda dificuldade é exatamente `"Iniciante"`, `"Intermediário"` ou `"Avançado"`
- [ ] Treinamentos com tour têm a chave em `TOUR_STEPS` **igual** ao `id` do submódulo
- [ ] `target` dos passos referencia `data-tour-id` que existem no DOM
- [ ] Passos com `advanceOn: "click"` num elemento que troca de estado têm `waitFor` definido
- [ ] Resetei o `localStorage` para testar do zero (`localStorage.removeItem("cemig-training-progress-v1")`)
- [ ] Abri em uma janela anônima/incógnito para validar sem cache
