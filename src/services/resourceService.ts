import { RESOURCE_TYPES } from '../constants/balance';
import { Coordinates, Resource } from '../types/game';
import { randomCoordinateWithinRadius } from '../utils/geo';
export function spawnResources(center: Coordinates, count=18, radius=500): Resource[] { return Array.from({length:count},(_,i)=>({ id:`res-${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`, type:RESOURCE_TYPES[Math.floor(Math.random()*RESOURCE_TYPES.length)], coordinates:randomCoordinateWithinRadius(center,radius), collected:false })); }
