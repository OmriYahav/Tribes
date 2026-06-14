import { Body, Card, FactionBadge, Screen, Title } from '../components/ui';
import { buildLeaderboard } from '../services/mockPlayerService';
import { useGameStore } from '../store/gameStore';
export function LeaderboardScreen(){ const user=useGameStore(s=>s.user); const score=useGameStore(s=>s.stats.campContributionScore); const rows=buildLeaderboard(user,score); return <Screen><Title>Intel Dashboard</Title><Card><Body>GLOBAL RANKING // SORT: AP + CONTRIBUTION + MISSIONS</Body>{rows.map((r,i)=><Card key={r.id}><Body>#{i+1} {r.username}{r.isCurrentUser?' // YOU':''}</Body><FactionBadge faction={r.tribe}/><Body>L{r.level} • {r.totalXp} AP • {r.contributionScore} CONTRIB • {r.missions} MISSIONS</Body></Card>)}</Card></Screen> }
