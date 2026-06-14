import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/app/AppNavigator';
import { useGameStore } from './src/store/gameStore';
import { useEffect } from 'react';

export default function App() {
  const hydrate = useGameStore((s) => s.hydrate);
  useEffect(() => { void hydrate(); }, [hydrate]);
  return <><AppNavigator /><StatusBar style="light" /></>;
}
