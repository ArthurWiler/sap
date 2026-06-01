/* ============ MODIFICAR TEXTO DESCRITIVO PARA MEDIDA (Editor) ============ */
function ModificarTextoMedidaPage({ medida, onBack }) {
  const rulerStr =
    "....+....1....+....2....+....3....+....4....+....5....+....6....+......";
  // a brazil-style timestamp
  const ts = new Date().toLocaleString("pt-BR").replace(",", "");
  const timestampLine = ts + " BRAZIL (E261211)";

  return (
    <div className="text-editor-page">
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
          Modificar Texto descritivo para medida:{" "}
          {medida?.id || "0012471495190001"} ld...
          <Icon name="chevron-down" size={14} />
        </div>
        <div className="spacer" />
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

      <div className="text-editor-toolbar">
        <button className="tool-btn">
          Menu <Icon name="chevron-down" size={12} />
        </button>
        <div className="tool-icon">
          <Icon name="search" size={16} />
        </div>
        <button className="tool-btn">Inserir</button>
        <button className="tool-btn">Linha</button>
        <button className="tool-btn">Formatar</button>
        <button className="tool-btn">Página</button>
        <div className="tool-icon">
          <Icon name="doc-attach" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="external" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="table" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="info" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="info" size={16} />
        </div>
        <button className="tool-btn">
          Serviços para objeto <Icon name="chevron-down" size={12} />
        </button>
        <div style={{ flex: 1 }} />
        <div className="tool-icon">
          <Icon name="search" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="search" size={16} />
        </div>
        <div className="tool-icon">
          <Icon name="print" size={16} />
        </div>
        <span
          className="sair-btn"
          style={{
            color: "var(--link)",
            cursor: "pointer",
            padding: "0 8px",
          }}
          onClick={onBack}
        >
          Sair
        </span>
      </div>

      <div className="text-editor-body">
        <table className="editor-table">
          <thead>
            <tr>
              <th className="col-f">F...</th>
              <th className="col-l">L...</th>
              <th>Txt.linha</th>
              <th className="col-r">L...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ruler-cell"></td>
              <td className="marker"></td>
              <td className="ruler-cell">{rulerStr}</td>
              <td className="ruler-cell"></td>
            </tr>
            <tr>
              <td></td>
              <td className="marker"></td>
              <td className="text-line">{timestampLine}</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="marker">*</td>
              <td></td>
              <td></td>
            </tr>
            {Array.from({ length: 28 }).map((_, i) => (
              <tr key={i} className="empty-line">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="editor-status-line">
          ---------------- PM_QMEL --------------------- Linhas 1 - 2 / 2
          -------------
        </div>
      </div>

      <div className="det-footer">
        <button className="sap-btn primary">Parágrafo</button>
      </div>
    </div>
  );
}

