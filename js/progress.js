/* ============ PROGRESS STORAGE (localStorage) ============ */
const PROGRESS_KEY = "cemig-training-progress-v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveProgress(p) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  } catch {}
}
/** progress shape: { [trainingId]: { [submoduleId]: true } } */
function trainingProgress(progress, training) {
  if (!training.submodules || training.submodules.length === 0) {
    return { done: progress[training.id]?.__done ? 1 : 0, total: 1 };
  }
  const completed = training.submodules.filter(
    (s) => progress[training.id]?.[s.id],
  ).length;
  return { done: completed, total: training.submodules.length };
}
function totalProgress(progress) {
  let done = 0,
    total = 0;
  TRAININGS.forEach((t) => {
    const p = trainingProgress(progress, t);
    done += p.done;
    total += p.total;
  });
  return {
    done,
    total,
    pct: total ? Math.round((done / total) * 100) : 0,
  };
}

