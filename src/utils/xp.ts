import { LEVEL_THRESHOLDS } from '../constants/balance';
export const levelFromXp = (ap:number) => {
  let level = 1;
  for (let i = 1; i < LEVEL_THRESHOLDS.length; i += 1) if (ap >= LEVEL_THRESHOLDS[i]) level = i + 1;
  return Math.min(level, 5);
};
export const xpProgress = (ap:number) => {
  const level = levelFromXp(ap);
  const previous = LEVEL_THRESHOLDS[level - 1] ?? 0;
  const next = LEVEL_THRESHOLDS[level] ?? LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  const current = Math.max(0, ap - previous);
  const required = Math.max(1, next - previous);
  return { current, required, percent: level >= 5 ? 1 : current / required, nextTotal: next };
};
