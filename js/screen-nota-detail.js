/* ============ NOTA DETAIL ============ */
function NotaDetailPage({
  data,
  onBack,
  onOpenSolicitacao,
  onRegenerate,
  onOpenTextEditor,
  initialTab,
  // tour controls
  tour,
  onTourEvent,
}) {
  const [mainTab, setMainTab] = useState(initialTab || "solicitacao");
  const [subTab, setSubTab] = useState("dados-comp");
  const [selectedMedidaIdx, setSelectedMedidaIdx] = useState(0);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showServicosMenu, setShowServicosMenu] = useState(false);
  const [showCriarSubmenu, setShowCriarSubmenu] = useState(false);
  const [showSelObjModal, setShowSelObjModal] = useState(false);
  const [servicosBtnRect, setServicosBtnRect] = useState(null);

  const handleTabClick = (tab) => {
    setMainTab(tab);
    onTourEvent && onTourEvent({ type: "tab-change", tab });
  };

  const handleSelectMedida = (idx) => {
    setSelectedMedidaIdx(idx);
    onTourEvent && onTourEvent({ type: "medida-selected", idx });
  };

  const handleOpenStatusModal = () => {
    setShowStatusModal(true);
    onTourEvent && onTourEvent({ type: "open-status-modal" });
  };

  const handleOpenServicos = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setServicosBtnRect({ left: rect.left, top: rect.bottom + 4 });
    setShowServicosMenu(true);
    setShowCriarSubmenu(false);
    onTourEvent && onTourEvent({ type: "open-servicos-menu" });
  };

  const handleOpenSelObj = () => {
    setShowServicosMenu(false);
    setShowCriarSubmenu(false);
    setShowSelObjModal(true);
    onTourEvent && onTourEvent({ type: "open-selecionar-objeto" });
  };

  const handleOpenTextEditor = (medida) => {
    onOpenTextEditor && onOpenTextEditor(medida);
  };

  const handleOpenSolicitacaoLink = () => {
    onTourEvent && onTourEvent({ type: "open-solicitacao" });
    onOpenSolicitacao && onOpenSolicitacao();
  };

  return (
    <Fragment>
      {/* Header */}
      <div className="det-header">
        <div className="back-arrow" onClick={onBack} title="Voltar">
          <Icon name="arrow-left" size={18} />
        </div>
        <div
          className="sap-logo"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--sap-blue-logo)",
            color: "white",
            fontWeight: 700,
            fontSize: 13,
            width: 44,
            height: 22,
            letterSpacing: "0.5px",
            transform: "skewX(-12deg)",
            borderRadius: 1,
          }}
        >
          <span style={{ transform: "skewX(12deg)" }}>SAP</span>
        </div>
        <div className="det-title">
          Modificar nota serviço: Solic de Obra ZCUM01{" "}
          <Icon name="chevron-down" size={14} />
        </div>
        <div className="spacer" />
        {onRegenerate && (
          <div
            className="icon-btn"
            onClick={onRegenerate}
            title="Gerar novos valores aleatórios"
            style={{ color: "var(--link)" }}
          >
            <Icon name="refresh" size={18} />
          </div>
        )}
        <div className="icon-btn">
          <Icon name="search" size={18} />
        </div>
        <div className="icon-btn">
          <Icon name="help" size={18} />
        </div>
        <div className="icon-btn">
          <Icon name="bell" size={18} />
        </div>
        <div className="avatar">
          <Icon name="user" size={18} />
        </div>
      </div>

      {/* Toolbar */}
      <div className="det-toolbar">
        <button className="menu-btn">
          Menu <Icon name="chevron-down" size={12} />
        </button>
        <div className="tool-icon" title="Exibir">
          <Icon name="search" size={16} />
        </div>
        <div className="tool-icon" title="Salvar">
          <Icon name="save" size={16} />
        </div>
        <div className="tool-icon" title="Voltar">
          <Icon name="back-prev" size={16} />
        </div>
        <div className="tool-icon" title="Avançar">
          <Icon name="fwd" size={16} />
        </div>
        <div className="tool-icon" title="Tabela">
          <Icon name="list" size={16} />
        </div>
        <button className="tool-btn">
          <Icon name="people" size={14} /> Parceiro
        </button>
        <div className="tool-icon">
          <Icon name="external" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="doc-attach" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="edit" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="list" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="print" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="info" size={16} />
        </div>
        <button className="tool-btn">
          <Icon name="info" size={14} /> Status
        </button>
        <button className="tool-btn">Organização...</button>
        <button className="tool-btn">Seleção de contrato</button>
        <button
          className="tool-btn"
          data-tour-id="servicos-para-objeto"
          onClick={handleOpenServicos}
        >
          Serviços para objeto <Icon name="chevron-down" size={12} />
        </button>
        <div className="right">
          <div className="tool-icon">
            <Icon name="info" size={16} />
          </div>
          <span className="sair-btn" onClick={onBack}>
            Sair
          </span>
        </div>
      </div>

      <div className="det-body">
        {/* Header Fields */}
        <div className="header-fields">
          <div className="label">Nota:</div>
          <div className="value-row">
            <input
              className="sap-input w-md"
              value={data.notaNumero}
              readOnly
            />
            <input
              className="sap-input w-sm"
              value={data.notaTipo}
              readOnly
            />
            <a className="sap-link">{data.notaTipoDesc}</a>
            <span className="icon-small">
              <Icon name="edit" size={14} />
            </span>
          </div>
          <div className="label">Status da nota:</div>
          <div className="value-row">
            <input
              className="sap-input w-md"
              value={data.statusP1}
              readOnly
            />
            <span className="icon-small">
              <Icon name="info" size={14} />
            </span>
            <input
              className="sap-input w-md"
              value={data.statusP2}
              readOnly
            />
            <span className="icon-small">
              <Icon name="check" size={14} />
            </span>
          </div>
          <div className="label">Ordem:</div>
          <div className="value-row">
            <input className="sap-input w-md" value="" readOnly />
            <span className="icon-small">
              <Icon name="external" size={14} />
            </span>
          </div>
        </div>

        {/* Main tabs */}
        <div className="main-tabs">
          <div
            className={
              "tab" + (mainTab === "solicitacao" ? " active" : "")
            }
            onClick={() => handleTabClick("solicitacao")}
            data-tour-id="tab-solicitacao"
          >
            <span className="tab-icon">
              <Icon name="tab-solic" size={14} />
            </span>{" "}
            Dados Solicitação
          </div>
          <div
            className={
              "tab" + (mainTab === "solicitante" ? " active" : "")
            }
            onClick={() => handleTabClick("solicitante")}
          >
            <span className="tab-icon">
              <Icon name="tab-people" size={14} />
            </span>{" "}
            Dados Solicitante
          </div>
          <div
            className={
              "tab" + (mainTab === "localizacao" ? " active" : "")
            }
            onClick={() => handleTabClick("localizacao")}
          >
            <span className="tab-icon">
              <Icon name="tab-pin" size={14} />
            </span>{" "}
            Localização
          </div>
          <div
            className={
              "tab" + (mainTab === "complementares" ? " active" : "")
            }
            onClick={() => handleTabClick("complementares")}
            data-tour-id="tab-complementares"
          >
            <span className="tab-icon">
              <Icon name="tab-doc" size={14} />
            </span>{" "}
            Dados Complementares
          </div>
          <div
            className={
              "tab" + (mainTab === "atividades" ? " active" : "")
            }
            onClick={() => handleTabClick("atividades")}
            data-tour-id="tab-atividades"
          >
            <span className="tab-icon">
              <Icon name="tab-arrow" size={14} />
            </span>{" "}
            Atividades
          </div>
          <div
            className={"tab" + (mainTab === "acoes" ? " active" : "")}
            onClick={() => handleTabClick("acoes")}
            data-tour-id="tab-acoes"
          >
            <span className="tab-icon">
              <Icon name="tab-cog" size={14} />
            </span>{" "}
            Ações
          </div>
          <div
            className={"tab" + (mainTab === "coletores" ? " active" : "")}
            onClick={() => handleTabClick("coletores")}
          >
            <span className="tab-icon">
              <Icon name="tab-cost" size={14} />
            </span>{" "}
            Coletores de Custo
          </div>
        </div>

        {/* Tab content */}
        {mainTab === "solicitacao" && <DadosSolicitacaoTab data={data} />}
        {mainTab === "complementares" && (
          <DadosComplementaresTab
            data={data}
            subTab={subTab}
            onSubTab={setSubTab}
            onOpenSolicitacao={handleOpenSolicitacaoLink}
          />
        )}
        {mainTab === "atividades" && (
          <AtividadesTab
            data={data}
            selectedIdx={selectedMedidaIdx}
            onSelect={handleSelectMedida}
            onOpenEditor={handleOpenTextEditor}
            onOpenStatusModal={handleOpenStatusModal}
          />
        )}
        {mainTab === "acoes" && (
          <AcoesTab data={data} selectedIdx={selectedMedidaIdx} />
        )}
        {mainTab !== "solicitacao" &&
          mainTab !== "complementares" &&
          mainTab !== "atividades" &&
          mainTab !== "acoes" && (
            <div
              style={{
                padding: "24px 12px",
                color: "var(--text-secondary)",
                fontSize: 13,
              }}
            >
              <em>
                Conteúdo da aba não implementado nesta demonstração
                visual.
              </em>
            </div>
          )}
      </div>

      <div className="det-footer">
        <button className="sap-btn primary">Gravar</button>
        <button className="sap-btn">Cancelar</button>
      </div>

      {/* === Modals & menus === */}
      {showServicosMenu && (
        <ServicosParaObjetoMenu
          anchorRect={servicosBtnRect}
          showCriarSubmenu={showCriarSubmenu}
          onCriarHover={() => setShowCriarSubmenu(true)}
          onCriarLeave={() => setShowCriarSubmenu(false)}
          onClickServicos={handleOpenSelObj}
          onClose={() => {
            setShowServicosMenu(false);
            setShowCriarSubmenu(false);
          }}
        />
      )}
      {showSelObjModal && (
        <SelecionarObjetoModal
          data={data}
          onClose={() => setShowSelObjModal(false)}
          onConfirm={() => setShowSelObjModal(false)}
        />
      )}
      {showStatusModal && (
        <DefinirStatusModal
          medida={data.medidas[selectedMedidaIdx]}
          onClose={() => setShowStatusModal(false)}
          onConfirm={() => {
            setShowStatusModal(false);
            onTourEvent && onTourEvent({ type: "confirm-status" });
          }}
        />
      )}
    </Fragment>
  );
}

