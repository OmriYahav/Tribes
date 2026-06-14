import type { Faction } from '../types/game';

export const space = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;
export const layout = { maxWidth: 700, tabBarHeight: 72 } as const;

export const colors = {
  void: '#05070A',
  panel: 'rgba(2,18,28,0.92)',
  panelSolid: '#020A10',
  panel2: '#071B26',
  grid: '#0B3144',
  line: '#0E6B86',
  cyan: '#00E5FF',
  blue: '#29B6F6',
  green: '#00FF88',
  amber: '#FFB800',
  violet: '#AA66FF',
  red: '#FF335F',
  text: '#DFF8FF',
  muted: '#80A9B8',
  disabled: '#26333D',
  water: '#071A2A',
  black: '#000000',
  white: '#FFFFFF',
  soil: '#05070A',
  parchment: '#0A0F19',
  moss: '#00E5FF',
} as const;

export type ColorName = keyof typeof colors;
export type ColorValue = (typeof colors)[ColorName];

export type TribeTheme = { label: string; short: string; description: string; accent: ColorValue; dark: string };

export const tribeMeta: Record<Faction, TribeTheme> = {
  cipher: { label: 'ENLIGHTENED', short: 'ENL', description: 'Covert data dominance and precision network control.', accent: colors.cyan, dark: '#073D4A' },
  vanguard: { label: 'RESISTANCE', short: 'RES', description: 'Distributed energy logistics and resilient field operations.', accent: colors.green, dark: '#073B29' },
};

export function isFaction(value: unknown): value is Faction {
  return typeof value === 'string' && value in tribeMeta;
}
