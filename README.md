# Tribes

Tribes is a production-oriented Expo/React Native foundation for a location-based tribal survival game. The real world becomes the map: players choose a tribe, walk to nearby resources, craft tools, contribute to a local camp, gain XP, and see mocked nearby player interactions.

## Install and run

```bash
npm install
npx expo start
```

## Implemented

- Onboarding with local username, Red Tribe / Blue Tribe choice, level 1, and 0 XP.
- GPS map screen using `react-native-maps`, `UrlTile`, and OpenStreetMap tiles.
- Player location, collection radius, nearby resources, mocked nearby players, exact distance labels, collection rules, XP rewards, and a regenerate button for testing.
- Inventory and crafting for Spear, Axe, and Torch.
- Camp contribution and upgrade foundation through Fire Pit, Storage Hut, and Watchtower levels.
- Profile with XP progress, inventory/equipment summaries, local stats, and reset button.
- Mocked leaderboard sorted by XP, then camp contribution score.
- AsyncStorage persistence for profile, inventory, equipment, camp, resources, greeted players, and scoring stats.

## Mocked locally

There is intentionally no backend, crypto, blockchain, payments, chat, real-time multiplayer, PvP, or real trading. Nearby players, interaction responses, and leaderboard competitors are generated locally so the game loop can be tested before server-authoritative systems exist.

## Game rules

- Resources spawn within 500 meters of the player.
- Resources can be collected within 50 meters.
- Mock player interactions are available within 50 meters.
- Camp interactions are designed around a 100 meter range constant for backend validation later.
- Collecting a resource removes it from the map and adds one unit to inventory.
- 100 XP equals one level; level is calculated from total XP and starts at 1.

## Scoring rules

- Collect resource: 10 XP.
- Craft item: 20 XP.
- Contribute to camp: 1 XP per resource unit.
- Greet mocked player: 5 XP once per mock player.
- Local stats track total XP, level, resources collected, items crafted, resources contributed, greeted players, and camp contribution score.

## Map implementation details

The map uses `react-native-maps` with `UrlTile` and the OpenStreetMap URL template:

```text
https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```

The tile layer is isolated in the map screen and balance/game rules are centralized so a future migration to a paid tile provider can replace the URL/template without changing core game logic. Production deployments should respect OpenStreetMap tile usage policies: avoid abusive refresh rates, cache where platform rules permit, set a responsible app identity when using a custom tile service, and move to a paid/provider-hosted tile service as traffic grows.

## Architecture

```text
src/
  app/          navigation entry
  screens/      mobile-first game screens
  components/   reusable UI primitives
  store/        Zustand game state and actions
  types/        strong TypeScript domain types
  services/     location, storage, resource, mock player services
  utils/        distance, random coordinates, XP, camp progress
  constants/    balance, radii, XP rewards, recipes, requirements
  theme/        colors and tribe identity
```

Game logic is kept out of UI where practical: constants define balance, services generate resources/players and access device APIs, utilities calculate distance/progression, and the Zustand store owns persistent state transitions.

## Future backend migration notes

Suggested initial backend models for a Go + PostgreSQL/PostGIS architecture:

- `users`: id, username, tribe_id, total_xp, level, created_at, updated_at.
- `tribes`: id, name, identity, primary_color, secondary_color.
- `camps`: id, tribe_id, geography point, level, wood_progress, stone_progress, food_progress.
- `resources`: id, type, geography point, spawned_at, expires_at, collected_by_user_id nullable.
- `inventory`: user_id, wood, stone, food, updated_at.
- `equipment`: id, user_id, item_type, quantity, crafted_at.
- `player_locations`: user_id, geography point, accuracy_meters, recorded_at, validation_status.
- `interactions`: id, actor_user_id, target_user_id, type, status, created_at.
- `leaderboard_events`: id, user_id, event_type, xp_delta, contribution_delta, metadata, created_at.

Recommended backend steps:

1. Add authenticated user accounts and server-owned XP/stat events.
2. Move resource spawning and collection validation to server-authoritative geospatial queries.
3. Store camp positions and contribution ledgers in PostGIS-backed tables.
4. Add location anti-cheat checks using speed, accuracy, impossible jumps, and recent history.
5. Introduce WebSockets for nearby player presence and camp/resource updates.
6. Replace local mocked interactions with persisted interaction requests and server validation.
7. Move leaderboard from local sorting to event-sourced or materialized leaderboard tables.
