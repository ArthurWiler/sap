/* ============ HOME PAGE ============ */
function HomePage({ onOpenModificar, onBackToIndex }) {
  return (
    <Fragment>
      <HomeTopBar />
      <div className="home-subbar">
        <div className="hamburger" title="Menu">
          <Icon name="menu" size={18} />
        </div>
        <div className="home-tab">Minha página inicial</div>
        <div className="home-tab-sep" />
        <div style={{ flex: 1 }} />
        {onBackToIndex && (
          <span
            onClick={onBackToIndex}
            style={{
              color: "var(--link)",
              fontSize: 13,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              alignSelf: "center",
            }}
            title="Voltar ao índice de treinamentos"
          >
            <Icon name="arrow-left" size={13} /> Treinamentos
          </span>
        )}
      </div>
      <div className="home-body">
        <h1 className="home-section-title">Carga - Relatório e edição</h1>
        <div className="tile-row">
          <div className="tile" onClick={onOpenModificar}>
            <div>
              <div className="tile-title">Modificar nota de serviço</div>
            </div>
          </div>
          <div className="tile">
            <div>
              <div className="tile-title">Exibir nota de serviço</div>
            </div>
          </div>
          <div className="tile">
            <div>
              <div className="tile-title">Modificar medidas</div>
            </div>
          </div>
          <div className="tile">
            <div>
              <div className="tile-title">
                Relatorio Geral de Notas de Serviço
              </div>
              <div className="tile-sub">SGO</div>
            </div>
            <div className="tile-foot">ZSGO40</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

