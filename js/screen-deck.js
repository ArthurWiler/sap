/* ============ DECK PAGE (slide-based submódulo, no SAP) ============ */
/* Renders a slide deck for theoretical submódulos.
   Slides come from decks.json (loaded once in app.js), indexed by submoduleId.

   Slide types:
   - type: "info" (default) - title + body + image placeholder
   - type: "quiz" - question + options[] with one correct.
     After correct answer, shows explanation per option. Próximo only enables on correct.
*/

function DeckPage({ deck, submodule, training, onComplete, onExit }) {
  const [idx, setIdx] = useState(0);
  // Per-slide quiz state: { [idx]: { selected, correct, revealed } }
  const [quizState, setQuizState] = useState({});

  if (!deck) {
    return (
      <div className="deck-page">
        <div className="deck-topbar">
          <div className="brand">
            <div className="cemig-mark">
              <span>C</span>
            </div>
            <span>Treinamentos PE/EM</span>
          </div>
          <div className="spacer" />
          <button className="back-btn-pill" onClick={onExit}>
            <Icon name="arrow-left" size={13} /> Voltar
          </button>
        </div>
        <div className="deck-missing">
          <h2>Conteúdo não encontrado</h2>
          <p>
            O conteúdo deste submódulo ainda não foi cadastrado em{" "}
            <code>decks.json</code>.
          </p>
        </div>
      </div>
    );
  }

  const slides = deck.slides || [];
  const total = slides.length;
  const slide = slides[idx];
  const isLast = idx === total - 1;
  const isFirst = idx === 0;
  const slideType = slide.type || "info";

  // Quiz advancement is blocked until user answers correctly
  const currentQuiz = quizState[idx];
  const canAdvance =
    slideType !== "quiz" || (currentQuiz && currentQuiz.correct);

  const next = () => {
    if (!canAdvance) return;
    if (isLast) {
      onComplete && onComplete();
    } else {
      setIdx((i) => Math.min(total - 1, i + 1));
    }
  };
  const prev = () => setIdx((i) => Math.max(0, i - 1));

  // Quiz click handler
  const handleQuizSelect = (optIdx) => {
    const correct = slide.options[optIdx].correct === true;
    setQuizState((prev) => {
      const existing = prev[idx] || { attempts: 0, wrongs: [] };
      const wrongs = correct
        ? existing.wrongs
        : [...new Set([...existing.wrongs, optIdx])];
      return {
        ...prev,
        [idx]: {
          selected: optIdx,
          correct,
          revealed: correct,
          attempts: existing.attempts + 1,
          wrongs,
        },
      };
    });
  };

  return (
    <div className="deck-page">
      {/* Top bar */}
      <div className="deck-topbar">
        <div className="brand">
          <div className="cemig-mark" title="CEMIG">
            <span>C</span>
          </div>
          <span>Treinamentos PE/EM</span>
        </div>
        <div className="spacer" />
        <button className="back-btn-pill" onClick={onExit}>
          <Icon name="arrow-left" size={13} /> Sair do treinamento
        </button>
      </div>

      {/* Header */}
      <div className="deck-header">
        <div className="deck-crumb">
          {training?.title} <Icon name="chevron-right" size={11} />{" "}
          {submodule?.title}
        </div>
        <h1>{deck.title}</h1>
        <div className="deck-progress-row">
          <div className="deck-progress-bar">
            <div
              className="fill"
              style={{ width: ((idx + 1) / total) * 100 + "%" }}
            />
          </div>
          <span className="deck-progress-label">
            {idx + 1} / {total}
          </span>
        </div>
      </div>

      {/* Slide body */}
      <div className="deck-body">
        {slideType === "quiz" ? (
          <QuizSlide
            slide={slide}
            state={currentQuiz}
            onSelect={handleQuizSelect}
          />
        ) : (
          <InfoSlide slide={slide} />
        )}
      </div>

      {/* Footer navigation */}
      <div className="deck-footer">
        <button
          className="sap-btn"
          onClick={prev}
          disabled={isFirst}
          title="Slide anterior"
        >
          <Icon name="back-prev" size={13} /> Anterior
        </button>

        <div className="deck-dots">
          {slides.map((s, i) => {
            const t = s.type || "info";
            const qState = quizState[i];
            let cls = "deck-dot";
            if (i === idx) cls += " active";
            if (i < idx) cls += " done";
            if (t === "quiz") {
              cls += " quiz";
              if (qState?.correct) cls += " correct";
            }
            return (
              <span
                key={i}
                className={cls}
                onClick={() => setIdx(i)}
                title={t === "quiz" ? `Pergunta ${i + 1}` : `Slide ${i + 1}`}
              />
            );
          })}
        </div>

        <button
          className="sap-btn primary"
          onClick={next}
          disabled={!canAdvance}
          title={!canAdvance ? "Responda corretamente para avançar" : ""}
        >
          {isLast ? (
            <>
              Concluir <Icon name="check" size={13} />
            </>
          ) : (
            <>
              Próximo <Icon name="fwd" size={13} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ===== Info slide (title + body + image) ===== */
function InfoSlide({ slide }) {
  return (
    <div className="deck-card">
      <div className="deck-image">
        {slide.image ? (
          <img src={slide.image} alt={slide.imageAlt || ""} />
        ) : (
          <div className="deck-image-placeholder">
            <Icon name="layers" size={32} />
            <span className="placeholder-text">
              {slide.imageAlt || "Imagem do slide (a definir)"}
            </span>
          </div>
        )}
      </div>
      <div className="deck-content">
        <h2>{slide.title}</h2>
        {slide.body && <p>{slide.body}</p>}
        {slide.bullets && (
          <ul className="deck-bullets">
            {slide.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ===== Quiz slide ===== */
function QuizSlide({ slide, state, onSelect }) {
  const isCorrect = state && state.correct;
  const wrongs = state?.wrongs || [];

  return (
    <div className="deck-quiz">
      <div className="quiz-header">
        <span className="quiz-badge">
          <Icon name="help" size={13} /> Pergunta
        </span>
        {state && state.attempts > 0 && !isCorrect && (
          <span className="quiz-attempts">
            {state.attempts} tentativa{state.attempts > 1 ? "s" : ""}
          </span>
        )}
        {isCorrect && (
          <span className="quiz-success">
            <Icon name="check" size={13} /> Resposta correta
          </span>
        )}
      </div>

      <h2 className="quiz-question">{slide.question}</h2>

      {slide.context && <div className="quiz-context">{slide.context}</div>}

      <div className="quiz-options">
        {slide.options.map((opt, i) => {
          const wasWrong = wrongs.includes(i);
          const isCorrectOpt = opt.correct === true;
          const showAsCorrect = isCorrect && isCorrectOpt;
          const showAsWrong = isCorrect && !isCorrectOpt;

          let cls = "quiz-option";
          if (wasWrong && !isCorrect) cls += " wrong-attempt";
          if (showAsCorrect) cls += " correct";
          if (showAsWrong) cls += " incorrect";

          return (
            <button
              key={i}
              className={cls}
              onClick={() => !isCorrect && onSelect(i)}
              disabled={isCorrect}
            >
              <span className="quiz-option-mark">
                {showAsCorrect && <Icon name="check" size={14} />}
                {showAsWrong && <Icon name="x" size={14} />}
                {!isCorrect && wasWrong && <Icon name="x" size={14} />}
                {!isCorrect && !wasWrong && (
                  <span className="quiz-letter">
                    {String.fromCharCode(65 + i)}
                  </span>
                )}
              </span>
              <div className="quiz-option-body">
                <div className="quiz-option-text">{opt.text}</div>
                {isCorrect && opt.explanation && (
                  <div className="quiz-option-explanation">
                    {opt.explanation}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {isCorrect && slide.summary && (
        <div className="quiz-summary">
          <Icon name="info" size={14} />
          <span>{slide.summary}</span>
        </div>
      )}
    </div>
  );
}
