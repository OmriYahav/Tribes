import type { Faction } from '../types/game';

export const colors = {
  void: '#05070B', panel: '#0A0F14', panel2: '#101923', grid: '#142536', line: '#24445A',
  cyan: '#00E5FF', green: '#00FF88', amber: '#FFB800', violet: '#AA66FF', red: '#FF335F',
  text: '#E6FBFF', muted: '#7893A0', disabled: '#26333D', water: '#071A2A', black: '#000000', white: '#FFFFFF',
  soil: '#05070B', parchment: '#0A0F14', moss: '#00E5FF'
} as const;

export type ColorName = keyof typeof colors;
export type ColorValue = (typeof colors)[ColorName];

export type TribeTheme = {
  label: string;
  description: string;
  accent: ColorValue;
  dark: string;
};

export const tribeMeta: Record<Faction, TribeTheme> = {
  cipher: { label: 'CIPHER CELL', description: 'Covert data dominance and precision network control.', accent: colors.cyan, dark: '#073D4A' },
  vanguard: { label: 'VANGUARD NET', description: 'Distributed energy logistics and resilient field operations.', accent: colors.green, dark: '#073B29' },
};

export function isFaction(value: unknown): value is Faction {
  return typeof value === 'string' && value in tribeMeta;
}
