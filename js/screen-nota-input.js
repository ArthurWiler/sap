/* ============ NOTA INPUT ============ */
function NotaInputPage({
  onBack,
  onSubmit,
  initialValue = "1252714058",
}) {
  const [value, setValue] = useState(initialValue);
  const handle = () => {
    if (value.trim()) onSubmit(value.trim());
  };
  return (
    <Fragment>
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
          Modificar nota serviço: tela inicial
        </div>
        <div className="spacer" />
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
      <div className="nota-input-screen">
        <div className="nota-card">
          <h2>Modificar nota de serviço</h2>
          <p>Informe o número da nota que deseja modificar.</p>
          <label htmlFor="nota">Nota</label>
          <input
            id="nota"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handle();
            }}
            autoFocus
          />
          <div className="actions">
            <button className="sap-btn" onClick={onBack}>
              Cancelar
            </button>
            <button className="sap-btn primary" onClick={handle}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

