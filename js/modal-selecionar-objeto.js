/* ============ SELECIONAR UM OBJETO MODAL ============ */
function SelecionarObjetoModal({ data, onClose, onConfirm }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const items = useMemo(() => {
    const base =
      "00" + (data.notaNumero || "").padStart(10, "0").slice(-10);
    const medidasIds = (data.medidas || [])
      .slice(0, 8)
      .map((_, i) => base + "190" + String(i + 1).padStart(3, "0"));
    return [
      {
        tipo: "Nota de serviço",
        nome:
          "00" +
          (data.notaNumero || "").padStart(10, "0").slice(-10).slice(2),
      },
      ...medidasIds.map((id) => ({ tipo: "Medidas", nome: id })),
      { tipo: "Medidas", nome: "VER NOTA >>>>" },
    ];
  }, [data]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: 520, maxWidth: 560 }}
      >
        <div className="modal-header">
          <h3>Selecionar um objeto</h3>
          <span className="modal-close" onClick={onClose}>
            <Icon name="x" size={16} />
          </span>
        </div>
        <div className="modal-body">
          <div className="info-note">
            <span className="info-mark">i</span>
            <span>
              : Selecionar para executar a função selecionada um objeto de
              aplicação e pressionar 'Avançar'.
            </span>
          </div>
          <table className="modal-table">
            <thead>
              <tr>
                <th style={{ width: 30 }}></th>
                <th>Tipo de objeto</th>
                <th>Nome do objeto</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, i) => (
                <tr
                  key={i}
                  className={selectedIdx === i ? "selected" : ""}
                  onClick={() => setSelectedIdx(i)}
                >
                  <td className="row-radio">
                    <input
                      type="radio"
                      checked={selectedIdx === i}
                      readOnly
                    />
                  </td>
                  <td>{it.tipo}</td>
                  <td>{it.nome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <span
            className="icon-action confirm"
            onClick={onConfirm}
            title="Avançar"
          >
            <Icon name="check" size={18} />
          </span>
          <span
            className="icon-action cancel"
            onClick={onClose}
            title="Cancelar"
          >
            <Icon name="x" size={18} />
          </span>
        </div>
      </div>
    </div>
  );
}

