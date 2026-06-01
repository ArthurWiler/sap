/* ============ ATIVIDADES TAB ============ */
function AtividadesTab({
  data,
  selectedIdx,
  onSelect,
  onOpenEditor,
  onOpenStatusModal,
}) {
  const medidas = data.medidas || [];
  const emptyRows = 5;

  return (
    <div style={{ padding: "4px 0" }}>
      <div className="med-table-wrap" data-tour-id="med-table">
        <table className="med-table">
          <thead>
            <tr>
              <th className="row-cb"></th>
              <th>Nº</th>
              <th>GrpCódi...</th>
              <th>Cód...</th>
              <th>Texto do código da medida</th>
              <th>Texto medida</th>
              <th>Tx...</th>
              <th>Status do us...</th>
              <th>Data planj.iní...</th>
              <th>Fim planejado</th>
              <th>Responsável</th>
              <th>Concluído por</th>
              <th>Data conclusão</th>
              <th>Criado por</th>
              <th>Criado em</th>
              <th>Criad...</th>
              <th>Modificado por</th>
              <th>Modificado em</th>
              <th style={{ width: "30px" }}></th>
            </tr>
          </thead>
          <tbody>
            {medidas.map((m, i) => (
              <tr
                key={m.id}
                className={selectedIdx === i ? "selected" : ""}
                onClick={() => onSelect(i)}
                data-tour-id={i === 0 ? "med-row-0" : undefined}
              >
                <td className="row-cb">
                  <input
                    type="checkbox"
                    checked={selectedIdx === i}
                    readOnly
                  />
                </td>
                <td>{m.n}</td>
                <td>{m.grpCodigo}</td>
                <td>{m.codigo}</td>
                <td className="truncate">{m.texto}</td>
                <td>{m.textoMedida}</td>
                <td
                  className="pencil-cell"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEditor(m);
                  }}
                  data-tour-id={i === 0 ? "med-pencil-text" : undefined}
                  title="Modificar texto descritivo da medida"
                >
                  <Icon name="edit" size={13} />
                </td>
                <td>{m.statusUsuario}</td>
                <td>{m.dataPlanIni}</td>
                <td>{m.fimPlanejado}</td>
                <td>{m.responsavel}</td>
                <td>{m.concluidoPor}</td>
                <td>{m.dataConclusao}</td>
                <td>{m.criadoPor}</td>
                <td>{m.criadoEm}</td>
                <td>{m.criadoHora}</td>
                <td>{m.modificadoPor}</td>
                <td>{m.modificadoEm}</td>
                <td></td>
              </tr>
            ))}
            {Array.from({ length: emptyRows }).map((_, i) => (
              <tr key={"e" + i} className="empty-row">
                <td className="row-cb">
                  <input type="checkbox" disabled />
                </td>
                <td className="empty-num">0</td>
                <td colSpan={17}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="med-toolbar">
          <div className="tool-icon" title="Detalhe">
            <Icon name="search" size={14} />
          </div>
          <div className="tool-icon" title="Visão">
            <Icon name="table" size={14} />
          </div>
          <div className="tool-icon" title="Layout">
            <Icon name="list" size={14} />
          </div>
          <div className="tool-icon" title="Remover">
            <Icon name="info" size={14} />
          </div>
          <div className="tool-icon" title="Mover para cima">
            <Icon name="back-prev" size={14} />
          </div>
          <div className="tool-icon" title="Mover para baixo">
            <Icon name="fwd" size={14} />
          </div>
          <div className="tool-icon" title="Personalizar">
            <Icon name="edit" size={14} />
          </div>
          <div style={{ flex: "0 0 24px" }} />
          <div
            className={
              "tool-icon" + (selectedIdx == null ? " disabled" : "")
            }
            title="Concluir / Definir status da medida"
            onClick={() => selectedIdx != null && onOpenStatusModal()}
            data-tour-id="med-pencil-status"
            style={{ background: "#fbeaea", color: "#c8412c" }}
          >
            <Icon name="edit" size={14} />
          </div>
          <div className="tool-icon" title="Informação">
            <Icon name="info" size={14} />
          </div>
          <div className="pager-info">
            <span>Entrada:</span>{" "}
            <strong>{(selectedIdx ?? 0) + 1}</strong>
            <span>de:</span> <strong>{medidas.length}</strong>
            <div className="tool-icon" title="Primeira">
              <Icon name="back-prev" size={13} />
            </div>
            <div className="tool-icon" title="Anterior">
              <Icon name="back-prev" size={13} />
            </div>
            <div className="tool-icon" title="Próxima">
              <Icon name="fwd" size={13} />
            </div>
            <div className="tool-icon" title="Última">
              <Icon name="fwd" size={13} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

