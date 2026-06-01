/* ============ TOUR BANNER (top strip) ============ */
function TourBanner({ tour }) {
  if (!tour) return null;
  const step = tour.steps[tour.currentStep] || {};
  return (
    <div className="tour-banner">
      <span className="tour-label">Treinamento</span>
      <span className="tour-title">
        {tour.title} — Passo {tour.currentStep + 1} de {tour.steps.length}
      </span>
      <button className="tour-exit" onClick={tour.onExit}>
        Pular tutorial
      </button>
    </div>
  );
}

/* ============ TOUR SPOTLIGHT (global overlay) ============ */
function TourSpotlight({ tour }) {
  const [rect, setRect] = useState(null);

  React.useEffect(() => {
    if (!tour) return;
    const step = tour.steps[tour.currentStep];
    if (!step || !step.target) {
      setRect(null);
      return;
    }

    // Poll for the element to appear (handles re-renders)
    let cancelled = false;
    let attempts = 0;
    const find = () => {
      if (cancelled) return;
      const el = document.querySelector(
        `[data-tour-id="${step.target}"]`,
      );
      if (el) {
        // Scroll the element into view if it's offscreen,
        // so the spotlight + tooltip fit within the viewport.
        const r0 = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const margin = 200; // leave room for tooltip
        if (r0.top < 60 || r0.bottom > vh - margin) {
          el.scrollIntoView({ block: "center", behavior: "smooth" });
          // wait a tick for scroll, then re-measure
          setTimeout(() => {
            if (cancelled) return;
            const r2 = el.getBoundingClientRect();
            setRect({
              left: r2.left,
              top: r2.top,
              width: r2.width,
              height: r2.height,
            });
          }, 250);
        } else {
          setRect({
            left: r0.left,
            top: r0.top,
            width: r0.width,
            height: r0.height,
          });
        }
        // Attach click handler ONLY if no waitFor is defined.
        // If waitFor is defined, the parent fires onTourEvent which advances the tour.
        // Having both would double-advance.
        if (step.advanceOn === "click" && !step.waitFor) {
          const handler = () => {
            tour.onAdvance && tour.onAdvance();
          };
          el.addEventListener("click", handler, { once: true });
          return () => el.removeEventListener("click", handler);
        }
      } else if (attempts < 20) {
        attempts++;
        setTimeout(find, 80);
      }
    };
    find();

    // also update on resize/scroll
    const onResize = () => {
      const el = document.querySelector(
        `[data-tour-id="${step.target}"]`,
      );
      if (el) {
        const r = el.getBoundingClientRect();
        setRect({
          left: r.left,
          top: r.top,
          width: r.width,
          height: r.height,
        });
      }
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [tour && tour.currentStep, tour && tour.steps]);

  if (!tour) return null;
  const step = tour.steps[tour.currentStep];
  if (!step) return null;

  // If no spotlight (intro step), show centered tooltip
  if (!rect) {
    return (
      <div
        className="tour-spotlight-overlay"
        style={{ pointerEvents: "auto" }}
      >
        <div className="tour-mask" />
        <div
          className="tour-tooltip"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="step-label">Passo {tour.currentStep + 1}</div>
          <h4>{step.title}</h4>
          <p>{step.body}</p>
          <div className="tour-actions">
            <span className="tour-progress">
              {tour.currentStep + 1} / {tour.steps.length}
            </span>
            <div className="tour-buttons">
              <button className="tour-skip" onClick={tour.onExit}>
                Pular
              </button>
              <button
                className="tour-btn primary"
                onClick={tour.onAdvance}
              >
                {tour.currentStep === tour.steps.length - 1
                  ? "Concluir"
                  : "Avançar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tooltip positioning: prefer below the target, else above
  const VW = window.innerWidth;
  const VH = window.innerHeight;
  const ttWidth = 320;
  const ttHeight = 160;
  let ttLeft = rect.left + rect.width / 2 - ttWidth / 2;
  let ttTop = rect.top + rect.height + 16;
  let arrowOnTop = true;
  if (ttTop + ttHeight > VH - 16) {
    ttTop = rect.top - ttHeight - 16;
    arrowOnTop = false;
  }
  ttLeft = Math.max(12, Math.min(ttLeft, VW - ttWidth - 12));

  return (
    <div className="tour-spotlight-overlay">
      {/* SVG mask cutting out a rect around the target */}
      <svg
        width={VW}
        height={VH}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <defs>
          <mask id="tour-mask-cut">
            <rect width="100%" height="100%" fill="white" />
            <rect
              x={rect.left - 6}
              y={rect.top - 6}
              width={rect.width + 12}
              height={rect.height + 12}
              rx="6"
              ry="6"
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="rgba(0,0,0,0.5)"
          mask="url(#tour-mask-cut)"
        />
      </svg>

      <div
        className="tour-spotlight"
        style={{
          left: rect.left - 6,
          top: rect.top - 6,
          width: rect.width + 12,
          height: rect.height + 12,
        }}
      />

      <div
        className="tour-tooltip"
        style={{ left: ttLeft, top: ttTop, pointerEvents: "auto" }}
      >
        <div className="step-label">Passo {tour.currentStep + 1}</div>
        <h4>{step.title}</h4>
        <p>{step.body}</p>
        <div className="tour-actions">
          <span className="tour-progress">
            {tour.currentStep + 1} / {tour.steps.length}
          </span>
          <div className="tour-buttons">
            <button className="tour-skip" onClick={tour.onExit}>
              Pular
            </button>
            {step.advanceOn !== "click" && (
              <button
                className="tour-btn primary"
                onClick={tour.onAdvance}
              >
                {tour.currentStep === tour.steps.length - 1
                  ? "Concluir"
                  : "Avançar"}
              </button>
            )}
            {step.advanceOn === "click" && (
              <span
                style={{
                  fontSize: 11,
                  color: "var(--text-secondary)",
                  fontStyle: "italic",
                }}
              >
                Clique no item destacado
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

