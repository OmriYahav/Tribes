import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button, Card, Screen, Title } from '../components/ui';
import { useGameStore } from '../store/gameStore';
import { Tribe } from '../types/game';
export function OnboardingScreen(){ const [username,setUsername]=useState(''); const [tribe,setTribe]=useState<Tribe>('red'); const create=useGameStore(s=>s.createProfile); return <Screen><Title>Tribes</Title><Card><Text>Enter the tribal map. Choose a camp, walk, gather, craft, and help your tribe grow.</Text><TextInput placeholder="Username" value={username} onChangeText={setUsername} style={{backgroundColor:'white',padding:12,borderRadius:12}}/><View style={{flexDirection:'row',gap:8}}><Button onPress={()=>setTribe('red')}>{tribe==='red'?'✓ ':''}Red Tribe</Button><Button onPress={()=>setTribe('blue')}>{tribe==='blue'?'✓ ':''}Blue Tribe</Button></View><Text>{tribe==='red'?'Fire, strength, and aggression.':'Water, wisdom, and defense.'}</Text><Button disabled={!username.trim()} onPress={()=>create(username.trim(),tribe)}>Begin survival</Button></Card></Screen> }
