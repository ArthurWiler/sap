/* ============ TAB CONTENTS ============ */
function DadosSolicitacaoTab({ data }) {
  return (
    <div
      style={{
        padding: "12px 4px",
        color: "var(--text-secondary)",
        fontSize: 13,
      }}
    >
      <div className="section">
        <div className="section-title">Dados da Solicitação</div>
        <div className="form-grid">
          <div className="field-row">
            <div className="label">Tipo de nota:</div>
            <input
              className="sap-input w-md"
              value={data.tipoNota}
              readOnly
              style={{ width: 200 }}
            />
          </div>
          <div className="field-row">
            <div className="label">Data de criação:</div>
            <input
              className="sap-input w-md"
              value={data.dataCriacao}
              readOnly
            />
          </div>
          <div className="field-row">
            <div className="label">Centro responsável:</div>
            <input className="sap-input w-md" value="" readOnly />
          </div>
          <div className="field-row">
            <div className="label">Local de instalação:</div>
            <input className="sap-input w-md" value="" readOnly />
          </div>
          <div className="field-row">
            <div className="label">Grupo de planejamento:</div>
            <input className="sap-input w-md" value="" readOnly />
          </div>
          <div className="field-row">
            <div className="label">Início desejado:</div>
            <input className="sap-input w-md" value="" readOnly />
          </div>
        </div>
        <p style={{ marginTop: 24, fontStyle: "italic" }}>
          Clique na aba <strong>Dados Complementares</strong> acima para
          continuar o fluxo.
        </p>
      </div>
    </div>
  );
}

function DadosComplementaresTab({
  data,
  subTab,
  onSubTab,
  onOpenSolicitacao,
}) {
  return (
    <Fragment>
      <div className="sub-tabs">
        <div
          className={"stab" + (subTab === "dados-comp" ? " active" : "")}
          onClick={() => onSubTab("dados-comp")}
        >
          Dados Comp
        </div>
        <div
          className={"stab" + (subTab === "custos" ? " active" : "")}
          onClick={() => onSubTab("custos")}
        >
          Custos
        </div>
        <div
          className={"stab" + (subTab === "obras-part" ? " active" : "")}
          onClick={() => onSubTab("obras-part")}
        >
          Obras part.
        </div>
        <div
          className={"stab" + (subTab === "dados-tec" ? " active" : "")}
          onClick={() => onSubTab("dados-tec")}
        >
          Dados Téc.
        </div>
        <div
          className={
            "stab" + (subTab === "licencas-ext" ? " active" : "")
          }
          onClick={() => onSubTab("licencas-ext")}
        >
          Licenças Ext
        </div>
        <div
          className={
            "stab" + (subTab === "autoriz-exec" ? " active" : "")
          }
          onClick={() => onSubTab("autoriz-exec")}
        >
          Autoriz Exec.
        </div>
        <div
          className={"stab" + (subTab === "mao-obra" ? " active" : "")}
          onClick={() => onSubTab("mao-obra")}
        >
          Mão de Obra (US)
        </div>
        <div
          className={"stab" + (subTab === "relatorios" ? " active" : "")}
          onClick={() => onSubTab("relatorios")}
        >
          Relatórios e Workflow
        </div>
      </div>

      {subTab === "dados-comp" ? (
        <DadosCompContent
          data={data}
          onOpenSolicitacao={onOpenSolicitacao}
        />
      ) : (
        <div
          style={{
            padding: "24px 12px",
            color: "var(--text-secondary)",
            fontSize: 13,
          }}
        >
          <em>
            Conteúdo desta sub-aba não implementado nesta demonstração
            visual.
          </em>
        </div>
      )}
    </Fragment>
  );
}

function DadosCompContent({ data, onOpenSolicitacao }) {
  return (
    <div>
      {/* === Dados Básicos da Solicitação === */}
      <div className="section">
        <div className="section-title">Dados Básicos da Solicitação</div>
        <div className="form-grid">
          {/* Left column */}
          <div>
            <div className="field-row">
              <div className="label">Modalidade:</div>
              <div className="inline-row">
                <input
                  className="sap-input w-md"
                  value={data.modalidade}
                  readOnly
                />
                <label
                  className="checkbox-row"
                  style={{ marginLeft: 16 }}
                >
                  <span className="sap-checkbox" /> Obra com IP
                </label>
              </div>
            </div>
            <div className="field-row">
              <div className="label">Mercado:</div>
              <div className="inline-row">
                <input
                  className="sap-input w-md highlighted"
                  value={data.mercado}
                  readOnly
                />
                <span className="icon-small">
                  <Icon name="external" size={14} />
                </span>
              </div>
            </div>
            <div className="field-row">
              <div className="label">Nível de Tensão da UC:</div>
              <input
                className="sap-input w-sm"
                value={data.nivelTensaoUC}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Tipo de Atendimento:</div>
              <input
                className="sap-input w-sm"
                value={data.tipoAtendimento}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Enquadramento Regulatório:</div>
              <input
                className="sap-input w-sm"
                value={data.enquadramentoReg}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Tipo de Obra:</div>
              <input
                className="sap-input w-sm"
                value={data.tipoObra}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Universalização:</div>
              <input
                className="sap-input w-sm"
                value={data.universalizacao}
                readOnly
              />
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="field-row">
              <div className="label">Programa:</div>
              <input
                className="sap-input w-sm"
                value={data.programa}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Tensão objetivo:</div>
              <input
                className="sap-input w-md"
                value={data.tensaoObjetivo}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Micro-objetivo:</div>
              <input
                className="sap-input w-md"
                value={data.microObjetivo}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Objetivo:</div>
              <input
                className="sap-input w-md"
                value={data.objetivo}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Objetivo Compleme.:</div>
              <input
                className="sap-input w-md"
                value={data.objetivoCompl}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Tipo de Obra ANEEL:</div>
              <input
                className="sap-input w-md"
                value={data.tipoObraAneel}
                readOnly
              />
            </div>
            <div className="field-row">
              <div className="label">Solicitação:</div>
              <a
                className="sap-link"
                data-tour-id="solicitacao-link"
                onClick={onOpenSolicitacao}
                title="Abrir solicitação"
              >
                {data.solicitacaoNum}
              </a>
            </div>
          </div>
        </div>

        <div className="btn-row">
          <button className="sap-btn">
            Cobertura Financeira Orçamento
          </button>
          <div style={{ flex: 1 }} />
          <button className="sap-btn" disabled>
            <Icon name="edit" size={13} /> Classificar Obra
          </button>
          <button className="sap-btn">
            <Icon name="table" size={13} /> Folha campo
          </button>
          <button className="sap-btn">
            <Icon name="doc-attach" size={13} /> Anexos GEDEX
          </button>
          <button className="sap-btn">
            <Icon name="external" size={13} /> Consultar NS no CCS
          </button>
        </div>
      </div>

      {/* === Dados Complementares da Solicitação === */}
      <div className="section">
        <div className="section-title">
          Dados Complementares da Solicitação
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px 32px",
            maxWidth: 1180,
          }}
        >
          {/* Left side */}
          <div>
            <div
              className="inline-row"
              style={{ marginBottom: 8, gap: 24 }}
            >
              <label className="checkbox-row">
                <span className="sap-checkbox" /> Condição Insegura -
                Risco Iminente
              </label>
              <button className="sap-btn" style={{ marginLeft: "auto" }}>
                <Icon name="edit" size={13} /> Orçamento
              </button>
            </div>

            <div className="field-row">
              <div className="label">Data de referência do preço:</div>
              <input className="sap-input w-md" value="" readOnly />
            </div>
            <div className="field-row">
              <div className="label">Data de validade do orçamento:</div>
              <input className="sap-input w-md" value="" readOnly />
            </div>
            <div className="field-row">
              <div className="label">Prazo de execução:</div>
              <div className="inline-row">
                <input className="sap-input w-sm" value="0" readOnly />
                <label className="checkbox-row" style={{ marginLeft: 8 }}>
                  <span className="sap-checkbox" /> Opção redução para 30
                  dias
                </label>
              </div>
            </div>
            <div className="field-row">
              <div className="label">Data de negociação:</div>
              <input className="sap-input w-md" value="" readOnly />
            </div>
            <div className="field-row">
              <div className="label">Data do compromisso:</div>
              <input className="sap-input w-md" value="" readOnly />
            </div>
            <div className="field-row">
              <div className="label">Prioridade:</div>
              <input className="sap-input w-sm" value="" readOnly />
            </div>
            <div className="field-row">
              <div className="label">Data do compromisso priorizado:</div>
              <input className="sap-input w-md" value="" readOnly />
            </div>
            <div className="field-row">
              <div className="label">Data do arquivo morto:</div>
              <input className="sap-input w-md" value="" readOnly />
            </div>
            <div className="field-row">
              <div className="label">Arquivo morto:</div>
              <input className="sap-input w-xl" value="" readOnly />
            </div>
          </div>

          {/* Right side - Repactuação */}
          <div>
            <div className="repac-label">Repactuação</div>
            <div className="repac-table">
              <div className="col">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="row" />
                ))}
              </div>
              <div className="col">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="row" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Descrição da obra */}
        <div className="desc-row">
          <div className="label">Descrição da obra:</div>
          <div className="desc-area">
            <div>
              <button className="sap-btn" style={{ width: "100%" }}>
                <Icon name="search" size={13} /> Pesquisa
              </button>
            </div>
            <textarea className="desc-textarea" readOnly value="" />
          </div>
        </div>
      </div>
    </div>
  );
}

