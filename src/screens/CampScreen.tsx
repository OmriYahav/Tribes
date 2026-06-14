import { useState } from 'react';
import { TextInput } from 'react-native';
import { Body, Button, Card, ProgressBar, Screen, Title } from '../components/ui';
import { BASE_LEVEL_NAMES, CAMP_LEVEL_REQUIREMENTS } from '../constants/balance';
import { useGameStore } from '../store/gameStore';
import { Inventory, ResourceType } from '../types/game';
import { campProgressPercent } from '../utils/camp';
import { colors } from '../theme/theme';
export function CampScreen(){ const camp=useGameStore(s=>s.camp); const inv=useGameStore(s=>s.inventory); const contribute=useGameStore(s=>s.contribute); const [amounts,setAmounts]=useState<Inventory>({data:0,energy:0,materials:0}); if(!camp)return null; const req=CAMP_LEVEL_REQUIREMENTS[camp.level]; return <Screen><Title>Base Network</Title><Card><Body>LEVEL {camp.level+1}: {BASE_LEVEL_NAMES[camp.level]}</Body>{req?(['data','energy','materials'] as ResourceType[]).map(t=><Card key={t}><Body>{t}: {camp.progress[t]} / {req[t]}</Body><ProgressBar value={campProgressPercent(camp,t)}/></Card>):<Body>FORTRESS CAPACITY ONLINE. REGIONAL COMMAND FUNCTIONS STANDBY.</Body>}</Card><Card><Body>CONTRIBUTE RESOURCES // +1 AP PER UNIT</Body>{(['data','energy','materials'] as ResourceType[]).map(t=><TextInput key={t} keyboardType="number-pad" placeholder={`${t.toUpperCase()} // OWNED ${inv[t]}`} placeholderTextColor={colors.muted} onChangeText={v=>setAmounts(a=>({...a,[t]:Math.max(0,Number(v)||0)}))} style={{borderWidth:1,borderColor:colors.line,color:colors.text,padding:10,letterSpacing:2}}/>)}<Button onPress={()=>{contribute(amounts); setAmounts({data:0,energy:0,materials:0});}}>Upload to Base</Button></Card></Screen> }
