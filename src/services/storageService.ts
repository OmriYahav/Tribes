import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY='tribes.localState.v1';
export async function saveState<T>(state:T){ await AsyncStorage.setItem(KEY, JSON.stringify(state)); }
export async function loadState<T>(): Promise<T|null>{ const raw=await AsyncStorage.getItem(KEY); return raw?JSON.parse(raw) as T:null; }
export async function clearState(){ await AsyncStorage.removeItem(KEY); }
