import { Text } from 'react-native';
import { Button, Card, Screen, Title } from '../components/ui';
import { CRAFTING_RECIPES, RESOURCE_EMOJI } from '../constants/balance';
import { useGameStore } from '../store/gameStore';
import { EquipmentItem } from '../types/game';
export function InventoryScreen(){ const inv=useGameStore(s=>s.inventory); const eq=useGameStore(s=>s.equipment); const craft=useGameStore(s=>s.craft); return <Screen><Title>Inventory</Title><Card><Text>🪵 Wood: {inv.wood}</Text><Text>🪨 Stone: {inv.stone}</Text><Text>🍇 Food: {inv.food}</Text></Card><Card><Text style={{fontWeight:'800'}}>Crafting</Text>{(Object.keys(CRAFTING_RECIPES) as EquipmentItem[]).map(item=>{const r=CRAFTING_RECIPES[item]; const ok=Object.entries(r).every(([k,v])=>inv[k as keyof typeof inv]>=Number(v)); return <Button key={item} disabled={!ok} onPress={()=>craft(item)}>{RESOURCE_EMOJI[item]} Craft {item} ({Object.entries(r).map(([k,v])=>`${v} ${k}`).join(', ')})</Button>})}</Card><Card><Text style={{fontWeight:'800'}}>Equipment</Text><Text>🪛 Spears: {eq.spear}</Text><Text>🪓 Axes: {eq.axe}</Text><Text>🔥 Torches: {eq.torch}</Text></Card></Screen> }
