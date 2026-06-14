import { XP_PER_LEVEL } from '../constants/balance';
export const levelFromXp = (xp:number) => Math.floor(xp / XP_PER_LEVEL) + 1;
export const xpProgress = (xp:number) => ({ current: xp % XP_PER_LEVEL, required: XP_PER_LEVEL, percent: (xp % XP_PER_LEVEL) / XP_PER_LEVEL });
