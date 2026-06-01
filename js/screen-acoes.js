/* ============ AÇÕES TAB ============ */
function AcoesTab({ data, selectedIdx }) {
  const medida = data.medidas?.[selectedIdx];

  return (
    <div style={{ padding: "4px 0" }}>
      {medida && (
        <div className="acoes-subheader" data-tour-id="acoes-header">
          <span className="label">Nº:</span>
          <strong>{(selectedIdx ?? 0) + 12}</strong>
          <span>{medida.grpCodigo}</span>
          <span>{medida.codigo}</span>
          <span>{medida.texto.replace("...", "").trim()}</span>
        </div>
      )}
      <div className="acoes-table-wrap" data-tour-id="acoes-table">
        <table className="acoes-table">
          <thead>
            <tr>
              <th className="row-radio"></th>
              <th>Ação</th>
              <th>US Real</th>
              <th>Resp. Téc</th>
              <th>MOP</th>
              <th>Contrato</th>
              <th>Cod.Contratada/Sub</th>
              <th>Contratada/Subcontratada</th>
              <th>Início Previsto</th>
              <th>Duração (dias)</th>
              <th>Término previsto</th>
              <th>Término real</th>
              <th>% executado</th>
              <th>Motivo atraso</th>
              <th>Observação</th>
              <th>Medida</th>
              <th>Seq</th>
              <th>Data</th>
              <th>Responsável</th>
              <th>ID da ação</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }).map((_, i) => (
              <tr key={i}>
                <td className="row-radio">
                  <input type="radio" disabled />
                </td>
                <td colSpan={7}></td>
                <td className="inicio-cell"></td>
                <td colSpan={11}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", gap: 4, padding: "6px 0" }}>
        <div className="tool-icon" title="Remover">
          <Icon name="info" size={14} />
        </div>
        <div className="tool-icon" title="Calendário">
          <Icon name="table" size={14} />
        </div>
        <div className="tool-icon" title="Editar">
          <Icon name="edit" size={14} />
        </div>
      </div>
    </div>
  );
}

