import { CAMP_LEVEL_REQUIREMENTS } from '../constants/balance';
import { Camp, Inventory, ResourceType } from '../types/game';
export const emptyInventory = (): Inventory => ({ data:0, energy:0, materials:0 });
export function campRequirement(camp: Camp) { return CAMP_LEVEL_REQUIREMENTS[camp.level]; }
export function campProgressPercent(camp: Camp, type: ResourceType) { const req=campRequirement(camp); if(!req || req[type]===0) return 1; return Math.min(1, camp.progress[type]/req[type]); }
export function levelUpCampIfReady(camp: Camp): Camp { let next={...camp, progress:{...camp.progress}}; while(next.level<4){ const req=CAMP_LEVEL_REQUIREMENTS[next.level]; if(!req) break; const ready=(['data','energy','materials'] as ResourceType[]).every(t=>next.progress[t]>=req[t]); if(!ready) break; next={...next, level:(next.level+1) as Camp['level'], progress:{data:Math.max(0,next.progress.data-req.data),energy:Math.max(0,next.progress.energy-req.energy),materials:Math.max(0,next.progress.materials-req.materials)}}; } return next; }
