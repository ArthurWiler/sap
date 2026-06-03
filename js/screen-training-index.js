/* ============ TRAINING INDEX PAGE ============ */
function TrainingIndexPage({ progress, onOpenTraining }) {
  // Group sorted trainings by difficulty
  const groups = useMemo(() => {
    const g = { Iniciante: [], Intermediário: [], Avançado: [] };
    SORTED_TRAININGS.forEach((t) => {
      g[t.difficulty].push(t);
    });
    return g;
  }, []);

  const overall = useMemo(() => totalProgress(progress), [progress]);

  return (
    <div className="training-page">
      <div className="training-topbar">
        <div className="brand">
          <div className="cemig-mark" title="CEMIG">
            <span>C</span>
          </div>
          <span>Treinamentos PE/EM</span>
        </div>
        <div className="spacer" />
      </div>

      <div className="training-hero">
        <div className="hero-mark">🎓</div>
        <div style={{ flex: 1 }}>
          <h1>Análise inicial: Equipe Carga</h1>
          <p>
            Escolha um treinamento abaixo para começar. Cada módulo simula um
            fluxo real ou processo de navegação do SAP com telas e dados gerados
            sob medida.
          </p>
          <ProgressBar done={overall.done} total={overall.total} big />
        </div>
      </div>

      <div className="training-body">
        {["Iniciante", "Intermediário", "Avançado"].map(
          (level) =>
            groups[level].length > 0 && (
              <div key={level} className="training-group">
                <div className="training-section-title">
                  <span
                    className={
                      "diff-dot diff-" +
                      level
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                    }
                  />
                  {level}
                </div>
                <div className="training-grid">
                  {groups[level].map((t) => {
                    const tp = trainingProgress(progress, t);
                    return (
                      <div
                        key={t.id}
                        className={
                          "training-card " +
                          (t.available ? "available" : "locked")
                        }
                        onClick={() => t.available && onOpenTraining(t.id)}
                      >
                        {!t.available && (
                          <span className="locked-badge">Em breve</span>
                        )}
                        {t.platform === "desktop" && (
                          <span
                            className="platform-badge"
                            title="Treinamento desktop"
                          >
                            <Icon name="monitor" size={11} /> Desktop
                          </span>
                        )}
                        <div className="card-icon">
                          <Icon
                            name={t.available ? "play" : "lock"}
                            size={18}
                          />
                        </div>
                        <h3>{t.title}</h3>
                        <p>{t.desc}</p>
                        <div className="training-tags">
                          {t.tags.map((tag) => (
                            <span key={tag} className="training-tag">
                              {tag}
                            </span>
                          ))}
                          {t.hasSubmodules && (
                            <span className="training-tag submods-tag">
                              <Icon name="layers" size={10} /> Submódulos
                            </span>
                          )}
                        </div>
                        <ProgressBar done={tp.done} total={tp.total} />
                        {t.available && (
                          <div className="start-link">
                            {tp.done > 0 ? "Continuar" : "Iniciar"}{" "}
                            <Icon name="chevron-right" size={14} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ),
        )}

        {typeof REFERENCES !== "undefined" && REFERENCES.length > 0 && (
          <div className="training-group ref-section">
            <div className="training-section-title">
              <Icon name="doc-attach" size={13} /> Material de apoio
            </div>
            <div className="ref-list">
              {REFERENCES.map((ref, i) => (
                <a
                  key={i}
                  className="ref-card"
                  href={ref.file}
                  target="_blank"
                  rel="noopener"
                  download
                >
                  <div className="ref-icon">
                    <Icon name="doc-attach" size={20} />
                  </div>
                  <div className="ref-body">
                    <div className="ref-title">{ref.title}</div>
                    {ref.description && (
                      <div className="ref-desc">{ref.description}</div>
                    )}
                  </div>
                  <div className="ref-download">
                    <Icon name="external" size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
