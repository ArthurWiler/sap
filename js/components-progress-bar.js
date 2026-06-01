/* ============ PROGRESS BAR COMPONENT ============ */
function ProgressBar({ done, total, big = false }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div className={"progress-wrap" + (big ? " hero-progress" : "")}>
      <div className="progress-bar">
        <div className="fill" style={{ width: pct + "%" }} />
      </div>
      <span className="progress-label">
        {done}/{total}
      </span>
    </div>
  );
}

