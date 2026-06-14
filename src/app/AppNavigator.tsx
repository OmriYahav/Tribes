import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { MapScreen } from '../screens/MapScreen';
import { InventoryScreen } from '../screens/InventoryScreen';
import { CampScreen } from '../screens/CampScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { LeaderboardScreen } from '../screens/LeaderboardScreen';
import { useGameStore } from '../store/gameStore';
const Tab=createBottomTabNavigator();
export function AppNavigator(){ const user=useGameStore(s=>s.user); const hydrated=useGameStore(s=>s.hydrated); if(!hydrated) return null; if(!user) return <OnboardingScreen/>; return <NavigationContainer theme={DarkTheme}><Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{backgroundColor:'#2f241d'},tabBarActiveTintColor:'#f3e3c4'}}><Tab.Screen name="Map" component={MapScreen}/><Tab.Screen name="Inventory" component={InventoryScreen}/><Tab.Screen name="Camp" component={CampScreen}/><Tab.Screen name="Leaderboard" component={LeaderboardScreen}/><Tab.Screen name="Profile" component={ProfileScreen}/></Tab.Navigator></NavigationContainer> }
