/* ============ DEFINIR STATUS MODAL ============ */
const STATUS_NUMERADOS = [
  { num: "10", abr: "ABER", txt: "Aberta", selected: true },
  { num: "20", abr: "ANDM", txt: "Andamento" },
  { num: "30", abr: "CONC", txt: "Concluída" },
  { num: "40", abr: "ENCE", txt: "Encerrada" },
  { num: "50", abr: "CANC", txt: "Cancelada" },
];
const STATUS_SEM_NUMERO = [
  { abr: "AFRD", txt: "Afastamento de Rede" },
  { abr: "CCCE", txt: "Com COOD. e com ERD" },
  { abr: "CCSE", txt: "Com COOD e sem ERD" },
  { abr: "COBR", txt: "Com Obras" },
  { abr: "COIF", txt: "Com Inversão de Fluxo" },
  { abr: "CORE", txt: "Correção pela Expansão" },
];

function DefinirStatusModal({ medida, onClose, onConfirm }) {
  const [selectedNum, setSelectedNum] = useState("10");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: 520 }}
      >
        <div className="modal-header">
          <h3>Definir status do usuário</h3>
          <span className="modal-close" onClick={onClose}>
            <Icon name="x" size={16} />
          </span>
        </div>
        <div className="modal-body" data-tour-id="status-modal-body">
          <div className="modal-section-title">
            Status usuário com número status
          </div>
          <table className="modal-table">
            <thead>
              <tr>
                <th style={{ width: 30 }}>X</th>
                <th style={{ width: 40 }}>Nº</th>
                <th style={{ width: 60 }}>Abr...</th>
                <th>Txt.status</th>
              </tr>
            </thead>
            <tbody>
              {STATUS_NUMERADOS.map((s) => (
                <tr
                  key={s.num}
                  className={selectedNum === s.num ? "selected" : ""}
                  onClick={() => setSelectedNum(s.num)}
                >
                  <td className="row-radio">
                    <input
                      type="radio"
                      checked={selectedNum === s.num}
                      readOnly
                    />
                  </td>
                  <td>{s.num}</td>
                  <td>{s.abr}</td>
                  <td>{s.txt}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="modal-section-title">
            Status usuário sem número status
          </div>
          <table className="modal-table">
            <thead>
              <tr>
                <th style={{ width: 30 }}>X</th>
                <th style={{ width: 60 }}>Abr...</th>
                <th>Txt.status</th>
              </tr>
            </thead>
            <tbody>
              {STATUS_SEM_NUMERO.map((s) => (
                <tr key={s.abr}>
                  <td className="row-radio">
                    <input type="checkbox" readOnly />
                  </td>
                  <td>{s.abr}</td>
                  <td>{s.txt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <span
            className="icon-action confirm"
            onClick={onConfirm}
            title="Confirmar"
            data-tour-id="status-confirm"
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

