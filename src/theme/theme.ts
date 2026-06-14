import type { Faction } from '../types/game';
export const space = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;
export const layout = { maxWidth: 760, tabBarHeight: 78 } as const;
export const colors = { void: '#05070A', panel: 'rgba(10,16,26,0.88)', panelSolid: '#0A101A', panel2: '#071B26', grid: '#0B3144', line: 'rgba(0,229,255,0.45)', cyan: '#00E5FF', blue: '#29B6F6', green: '#00FF88', amber: '#FFB020', violet: '#AA66FF', red: '#FF3B5C', text: '#EAF6FF', muted: '#8AA4B8', disabled: '#314250', water: '#071A2A', black: '#000000', white: '#FFFFFF', soil: '#05070A', parchment: '#0A0F19', moss: '#00E5FF' } as const;
export type ColorName = keyof typeof colors; export type ColorValue = (typeof colors)[ColorName];
export type TribeTheme = { label: string; short: string; description: string; accent: ColorValue; dark: string };
export const tribeMeta: Record<Faction, TribeTheme> = { cipher: { label: 'CIPHER', short: 'CIP', description: 'Covert data dominance and precision network control.', accent: colors.cyan, dark: '#073D4A' }, vanguard: { label: 'VANGUARD', short: 'VAN', description: 'Distributed energy logistics and resilient field operations.', accent: colors.blue, dark: '#073B4F' } };
export function isFaction(value: unknown): value is Faction { return typeof value === 'string' && value in tribeMeta; }
