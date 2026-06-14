import { Text, View } from 'react-native';
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
import { colors, layout } from '../theme/theme';
const Tab = createBottomTabNavigator();
const icons: Record<string, string> = { MAP: '⌖', INVENTORY: '▣', BASE: '⬡', MISSIONS: '◈', LEADERBOARD: '▤', PROFILE: '△' };
export function AppNavigator() { const user = useGameStore(s => s.user); const hydrated = useGameStore(s => s.hydrated); if (!hydrated) return null; if (!user) return <OnboardingScreen/>; return <NavigationContainer theme={{ ...DarkTheme, colors: { ...DarkTheme.colors, background: colors.void, card: colors.panelSolid, text: colors.text, border: colors.line, primary: colors.cyan } }}><Tab.Navigator screenOptions={({ route }) => ({ headerShown: false, tabBarHideOnKeyboard: true, tabBarStyle: { height: layout.tabBarHeight, backgroundColor: 'rgba(2,10,16,.98)', borderTopColor: colors.cyan, borderTopWidth: 1, paddingTop: 6, shadowColor: colors.cyan, shadowOpacity: .35, shadowRadius: 14 }, tabBarItemStyle: { height: layout.tabBarHeight - 8, minWidth: 44 }, tabBarActiveTintColor: colors.cyan, tabBarInactiveTintColor: colors.muted, tabBarLabelStyle: { fontSize: 9, letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: '800' }, tabBarIcon: ({ color, focused }) => <View style={{ alignItems: 'center' }}><Text style={{ color, fontSize: 20, textShadowColor: focused ? colors.cyan : 'transparent', textShadowRadius: focused ? 12 : 0 }}>{icons[route.name] ?? '◇'}</Text></View> })}><Tab.Screen name="MAP" component={MapScreen}/><Tab.Screen name="INVENTORY" component={InventoryScreen}/><Tab.Screen name="BASE" component={CampScreen}/><Tab.Screen name="MISSIONS" component={MissionsScreen}/><Tab.Screen name="LEADERBOARD" component={LeaderboardScreen}/><Tab.Screen name="PROFILE" component={ProfileScreen}/></Tab.Navigator></NavigationContainer>; }
