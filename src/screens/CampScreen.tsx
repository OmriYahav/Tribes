import { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { Button, Card, ProgressBar, Screen, Title } from '../components/ui';
import { CAMP_LEVEL_REQUIREMENTS } from '../constants/balance';
import { useGameStore } from '../store/gameStore';
import { Inventory, ResourceType } from '../types/game';
import { campProgressPercent } from '../utils/camp';
const names=['Empty ground','Fire Pit','Storage Hut','Watchtower'];
export function CampScreen(){ const camp=useGameStore(s=>s.camp); const inv=useGameStore(s=>s.inventory); const contribute=useGameStore(s=>s.contribute); const [amounts,setAmounts]=useState<Inventory>({wood:0,stone:0,food:0}); if(!camp)return null; const req=CAMP_LEVEL_REQUIREMENTS[camp.level]; return <Screen><Title>🏕️ Tribe Camp</Title><Card><Text>Level {camp.level}: {names[camp.level]}</Text>{req?(['wood','stone','food'] as ResourceType[]).map(t=><Card key={t}><Text>{t}: {camp.progress[t]} / {req[t]}</Text><ProgressBar value={campProgressPercent(camp,t)}/></Card>):<Text>Maximum camp level reached. Future upgrades will unlock here.</Text>}</Card><Card><Text style={{fontWeight:'800'}}>Contribute resources (+1 XP each)</Text>{(['wood','stone','food'] as ResourceType[]).map(t=><TextInput key={t} keyboardType="number-pad" placeholder={`${t} (owned ${inv[t]})`} onChangeText={v=>setAmounts(a=>({...a,[t]:Math.max(0,Number(v)||0)}))} style={{backgroundColor:'white',padding:12,borderRadius:12,marginVertical:4}}/>)}<Button onPress={()=>{contribute(amounts); setAmounts({wood:0,stone:0,food:0});}}>Contribute to camp</Button></Card></Screen> }
