/* ============ SERVIÇOS PARA OBJETO DROPDOWN ============ */
function ServicosParaObjetoMenu({
  anchorRect,
  showCriarSubmenu,
  onCriarHover,
  onCriarLeave,
  onClickServicos,
  onClose,
}) {
  if (!anchorRect) return null;

  const menuStyle = {
    left: anchorRect.left,
    top: anchorRect.top,
  };
  // submenu opens to the right
  const submenuStyle = {
    left: anchorRect.left + 220,
    top: anchorRect.top,
  };

  return (
    <Fragment>
      <div className="menu-overlay" onClick={onClose} />
      <div className="dropdown-panel" style={menuStyle}>
        <div className="dropdown-item" onMouseEnter={onCriarHover}>
          <span>Criar...</span>
          <Icon name="chevron-right" size={12} />
        </div>
        <div className="dropdown-item disabled">Lista de anexos</div>
        <div className="dropdown-item">Nota pessoal</div>
        <div className="dropdown-item">
          <span>Enviar</span>
          <Icon name="chevron-right" size={12} />
        </div>
        <div className="dropdown-section-label">Ligações</div>
        <div className="dropdown-item">
          <span>Workflow</span>
          <Icon name="chevron-right" size={12} />
        </div>
        <div className="dropdown-item" onClick={onClickServicos}>
          Meus objetos
        </div>
        <div className="dropdown-separator" />
        <div className="dropdown-item">Ajuda para serviços de objeto</div>
      </div>

      {showCriarSubmenu && (
        <div
          className="dropdown-panel"
          style={submenuStyle}
          onMouseLeave={onCriarLeave}
        >
          <div className="dropdown-item">Criar anexo</div>
          <div className="dropdown-item">Criar nota</div>
          <div className="dropdown-item">
            Criar documento externo (URL)
          </div>
          <div className="dropdown-item">Arquivar Business Document</div>
          <div className="dropdown-item disabled">
            Entrar código de barras
          </div>
        </div>
      )}
    </Fragment>
  );
}

