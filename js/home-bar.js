/* ============ HOME HEADER (shared) ============ */
function HomeTopBar() {
  return (
    <div className="home-header">
      <div className="sap-logo">
        <span>SAP</span>
      </div>
      <div className="page-title">
        Página inicial <Icon name="chevron-down" size={14} />
      </div>
      <div className="spacer" />
      <div className="icon-btn" title="Pesquisar">
        <Icon name="search" size={18} />
      </div>
      <div className="icon-btn" title="Ajuda">
        <Icon name="help" size={18} />
      </div>
      <div className="icon-btn" title="Notificações">
        <Icon name="bell" size={18} />
      </div>
      <div className="avatar" title="Usuário">
        <Icon name="user" size={18} />
      </div>
    </div>
  );
}

