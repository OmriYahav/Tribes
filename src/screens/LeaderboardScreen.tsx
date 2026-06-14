import { Text } from 'react-native';
import { Card, Screen, Title } from '../components/ui';
import { buildLeaderboard } from '../services/mockPlayerService';
import { useGameStore } from '../store/gameStore';
export function LeaderboardScreen(){ const user=useGameStore(s=>s.user); const score=useGameStore(s=>s.stats.campContributionScore); const rows=buildLeaderboard(user,score); return <Screen><Title>Leaderboard</Title><Card>{rows.map((r,i)=><Text key={r.id}>{i+1}. {r.username}{r.isCurrentUser?' (you)':''} • {r.tribe} • L{r.level} • {r.totalXp} XP • score {r.contributionScore}</Text>)}</Card></Screen> }
