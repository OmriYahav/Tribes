import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { MapScreen } from '../screens/MapScreen';
import { InventoryScreen } from '../screens/InventoryScreen';
import { CampScreen } from '../screens/CampScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { LeaderboardScreen } from '../screens/LeaderboardScreen';
import { MissionsScreen } from '../screens/MissionsScreen';
import { useGameStore } from '../store/gameStore';
import { colors } from '../theme/theme';
const Tab=createBottomTabNavigator();
export function AppNavigator(){ const user=useGameStore(s=>s.user); const hydrated=useGameStore(s=>s.hydrated); if(!hydrated) return null; if(!user) return <OnboardingScreen/>; return <NavigationContainer theme={{...DarkTheme,colors:{...DarkTheme.colors,background:colors.void,card:colors.panel,text:colors.text,border:colors.line,primary:colors.cyan}}}><Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{backgroundColor:colors.panel,borderTopColor:colors.line},tabBarActiveTintColor:colors.cyan,tabBarInactiveTintColor:colors.muted,tabBarLabelStyle:{fontSize:10,letterSpacing:1,textTransform:'uppercase'}}}><Tab.Screen name="Map" component={MapScreen}/><Tab.Screen name="Inventory" component={InventoryScreen}/><Tab.Screen name="Base" component={CampScreen}/><Tab.Screen name="Missions" component={MissionsScreen}/><Tab.Screen name="Leaderboard" component={LeaderboardScreen}/><Tab.Screen name="Profile" component={ProfileScreen}/></Tab.Navigator></NavigationContainer> }
