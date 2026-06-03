/* ============ SUBMODULE INDEX PAGE ============ */
function SubmoduleIndexPage({
  training,
  progress,
  onBackToIndex,
  onStartSubmodule,
}) {
  const tp = trainingProgress(progress, training);
  const trainingDone = progress[training.id] || {};

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
        <button className="back-btn-pill" onClick={onBackToIndex}>
          <Icon name="arrow-left" size={13} /> Voltar à página principal
        </button>
      </div>

      <div className="sub-hero">
        <div
          className="back-circle"
          onClick={onBackToIndex}
          title="Voltar ao índice"
        >
          <Icon name="arrow-left" size={18} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="crumb">Treinamentos / {training.difficulty}</div>
          <h1>
            {training.title}
            <span className="difficulty-pill">
              <span
                className={
                  "diff-dot diff-" +
                  training.difficulty
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                }
              />
              {training.difficulty}
            </span>
          </h1>
          <ProgressBar done={tp.done} total={tp.total} big />
        </div>
      </div>

      <div className="sub-body">
        <div className="training-section-title">Submódulos</div>
        <div className="sub-list">
          {training.submodules.map((s, i) => {
            const isDone = !!trainingDone[s.id];
            const available = s.available;
            return (
              <div
                key={s.id}
                className={
                  "sub-item" +
                  (available ? "" : " locked") +
                  (isDone ? " done" : "")
                }
                onClick={() => available && onStartSubmodule(training.id, s.id)}
              >
                <div className="sub-num">
                  {isDone ? (
                    <Icon name="check" size={14} color="white" />
                  ) : (
                    i + 1
                  )}
                </div>
                <div className="sub-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="sub-action">
                  {!available ? (
                    <>
                      <Icon name="lock" size={13} /> Em breve
                    </>
                  ) : isDone ? (
                    <>
                      <Icon name="check" size={13} /> Concluído
                    </>
                  ) : (
                    <>
                      Iniciar <Icon name="chevron-right" size={14} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
