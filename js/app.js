/* ============ APP ============ */
function App() {
  // route: training-index | submodule-index | home | nota-input | nota-detail | solicitacao | text-editor | deck-page
  const [route, setRoute] = useState({ page: "training-index" });
  const [seed, setSeed] = useState("1252714058");

  // Persistent progress
  const [progress, setProgress] = useState(() => loadProgress());
  const markSubmoduleDone = useCallback((trainingId, submoduleId) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        [trainingId]: {
          ...(prev[trainingId] || {}),
          [submoduleId]: true,
        },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  // Decks (loaded once from decks.json at mount)
  const [decks, setDecks] = useState({});
  React.useEffect(() => {
    fetch("js/decks.json")
      .then((r) => (r.ok ? r.json() : {}))
      .then((d) => setDecks(d || {}))
      .catch(() => setDecks({}));
  }, []);

  // Active submodule (controls tour and progress crediting)
  const [activeSubmodule, setActiveSubmodule] = useState(null);

  // Tour state
  const [tourStep, setTourStep] = useState(0);
  const [tourActive, setTourActive] = useState(false);
  const activeTour = useMemo(() => {
    if (!tourActive || !activeSubmodule) return null;
    return TOUR_STEPS[activeSubmodule.submoduleId] || null;
  }, [tourActive, activeSubmodule]);

  const dataset = useMemo(() => generateDataset(seed), [seed]);
  const visibleData = useMemo(
    () => ({
      ...dataset,
      notaNumero: seed.split("|")[0],
      notaServico: seed.split("|")[0],
    }),
    [dataset, seed],
  );

  // Text editor target (which medida is being edited)
  const [editorMedida, setEditorMedida] = useState(null);

  // === Navigation ===
  const goTrainingIndex = useCallback(() => {
    setActiveSubmodule(null);
    setTourActive(false);
    setTourStep(0);
    setRoute({ page: "training-index" });
  }, []);

  const openTraining = useCallback((trainingId) => {
    const t = TRAININGS.find((x) => x.id === trainingId);
    if (!t) return;
    setRoute({ page: "submodule-index", trainingId });
  }, []);

  const startSubmodule = useCallback((trainingId, submoduleId) => {
    const training = TRAININGS.find((x) => x.id === trainingId);
    const submodule = training?.submodules?.find((s) => s.id === submoduleId);
    setActiveSubmodule({ trainingId, submoduleId });

    if (submodule?.type === "deck") {
      // Theoretical submódulo - slide deck, no SAP tour
      setTourActive(false);
      setTourStep(0);
      setRoute({ page: "deck-page", trainingId, submoduleId });
    } else {
      // Default: SAP submódulo with guided tour
      setTourStep(0);
      setTourActive(!!TOUR_STEPS[submoduleId]);
      setRoute({
        page: "nota-detail",
        trainingId,
        submoduleId,
        initialTab: "solicitacao",
      });
    }
  }, []);

  const goHome = useCallback(() => setRoute({ page: "home" }), []);
  const goNotaInput = useCallback(() => setRoute({ page: "nota-input" }), []);
  const goNotaDetail = useCallback((numero) => {
    setSeed(numero);
    setRoute({ page: "nota-detail" });
  }, []);
  const goSolicitacao = useCallback(
    () => setRoute({ page: "solicitacao" }),
    [],
  );
  const backToDetail = useCallback(() => setRoute({ page: "nota-detail" }), []);

  const openTextEditor = useCallback((medida) => {
    setEditorMedida(medida);
    setRoute({ page: "text-editor" });
  }, []);
  const closeTextEditor = useCallback(
    () => setRoute({ page: "nota-detail" }),
    [],
  );

  // Exit current SAP flow (back to submodule index, marking sub as done if applicable)
  const exitFlow = useCallback(() => {
    if (activeSubmodule) {
      markSubmoduleDone(
        activeSubmodule.trainingId,
        activeSubmodule.submoduleId,
      );
      setTourActive(false);
      setTourStep(0);
      setRoute({
        page: "submodule-index",
        trainingId: activeSubmodule.trainingId,
      });
    } else {
      goTrainingIndex();
    }
  }, [activeSubmodule, markSubmoduleDone, goTrainingIndex]);

  const regenerate = useCallback(() => {
    const salt = String(Math.floor(Math.random() * 1e9));
    setSeed((prev) => {
      const base = prev.split("|")[0];
      return base + "|" + salt;
    });
  }, []);

  // === Tour controls ===
  const advanceTour = useCallback(() => {
    setTourStep((prev) => {
      const steps = activeTour?.steps || [];
      if (prev + 1 >= steps.length) {
        // last step → mark done and return to submodule index
        if (activeSubmodule) {
          markSubmoduleDone(
            activeSubmodule.trainingId,
            activeSubmodule.submoduleId,
          );
        }
        setTourActive(false);
        setRoute((r) =>
          activeSubmodule
            ? {
                page: "submodule-index",
                trainingId: activeSubmodule.trainingId,
              }
            : { page: "training-index" },
        );
        return 0;
      }
      return prev + 1;
    });
  }, [activeTour, activeSubmodule, markSubmoduleDone]);

  const exitTour = useCallback(() => {
    setTourActive(false);
    setTourStep(0);
  }, []);

  // Handle events from NotaDetailPage to auto-advance tour
  const handleTourEvent = useCallback(
    (evt) => {
      if (!tourActive || !activeTour) return;
      const step = activeTour.steps[tourStep];
      if (!step || !step.waitFor) return;
      // simple shallow match
      const w = step.waitFor;
      const matches = Object.keys(w).every((k) => evt[k] === w[k]);
      if (matches) {
        // small delay so the UI can update before advancing
        setTimeout(() => advanceTour(), 200);
      }
    },
    [tourActive, activeTour, tourStep, advanceTour],
  );

  // Build the tour object passed to the banner / spotlight
  const tour = activeTour
    ? {
        title: activeTour.title,
        steps: activeTour.steps,
        currentStep: tourStep,
        onAdvance: advanceTour,
        onExit: exitTour,
      }
    : null;

  // === Routing ===
  let page;
  if (route.page === "training-index") {
    page = (
      <TrainingIndexPage progress={progress} onOpenTraining={openTraining} />
    );
  } else if (route.page === "submodule-index") {
    const training = TRAININGS.find((t) => t.id === route.trainingId);
    page = training ? (
      <SubmoduleIndexPage
        training={training}
        progress={progress}
        onBackToIndex={goTrainingIndex}
        onStartSubmodule={startSubmodule}
      />
    ) : (
      <TrainingIndexPage progress={progress} onOpenTraining={openTraining} />
    );
  } else if (route.page === "home") {
    page = <HomePage onOpenModificar={goNotaInput} onBackToIndex={exitFlow} />;
  } else if (route.page === "nota-input") {
    page = (
      <NotaInputPage
        initialValue={seed.split("|")[0]}
        onBack={goHome}
        onSubmit={goNotaDetail}
      />
    );
  } else if (route.page === "nota-detail") {
    page = (
      <NotaDetailPage
        data={visibleData}
        onBack={exitFlow}
        onOpenSolicitacao={goSolicitacao}
        onRegenerate={regenerate}
        onOpenTextEditor={openTextEditor}
        initialTab={route.initialTab}
        tour={tour}
        onTourEvent={handleTourEvent}
      />
    );
  } else if (route.page === "solicitacao") {
    page = <SolicitacaoPage data={visibleData} onBack={backToDetail} />;
  } else if (route.page === "text-editor") {
    page = (
      <ModificarTextoMedidaPage
        medida={editorMedida}
        onBack={closeTextEditor}
      />
    );
  } else if (route.page === "deck-page") {
    const training = TRAININGS.find((t) => t.id === route.trainingId);
    const submodule = training?.submodules?.find(
      (s) => s.id === route.submoduleId,
    );
    const deck = decks[route.submoduleId];
    page = (
      <DeckPage
        deck={deck}
        submodule={submodule}
        training={training}
        onComplete={exitFlow}
        onExit={exitFlow}
      />
    );
  } else {
    page = null;
  }

  return (
    <Fragment>
      {tour && <TourBanner tour={tour} />}
      {page}
      {tour && <TourSpotlight tour={tour} />}
    </Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
