import { CAMP_LEVEL_REQUIREMENTS } from '../constants/balance';
import { Camp, Inventory, ResourceType } from '../types/game';
export const emptyInventory = (): Inventory => ({ wood:0, stone:0, food:0 });
export function campRequirement(camp: Camp) { return CAMP_LEVEL_REQUIREMENTS[camp.level]; }
export function campProgressPercent(camp: Camp, type: ResourceType) { const req=campRequirement(camp); if(!req || req[type]===0) return 1; return Math.min(1, camp.progress[type]/req[type]); }
export function levelUpCampIfReady(camp: Camp): Camp { let next={...camp, progress:{...camp.progress}}; while(next.level<3){ const req=CAMP_LEVEL_REQUIREMENTS[next.level]; if(!req) break; const ready=(['wood','stone','food'] as ResourceType[]).every(t=>next.progress[t]>=req[t]); if(!ready) break; next={...next, level:(next.level+1) as Camp['level'], progress:{wood:Math.max(0,next.progress.wood-req.wood),stone:Math.max(0,next.progress.stone-req.stone),food:Math.max(0,next.progress.food-req.food)}}; } return next; }
