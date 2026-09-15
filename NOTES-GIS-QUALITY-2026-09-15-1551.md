# GIS Quality Loop — 2026-09-15 ~15:51 MSK

## Win
- Densified **ARC-PORT-130** Korsakov Commercial Sea Port (KMTP) off soft-stack `46.6347,142.774` (shared with ARC-SHIP-065 planned composite shipyard) onto OSM `man_made=pier` **Южный пирс** [way/104497425](https://www.openstreetmap.org/way/104497425) centroid `46.62028475714286,142.75996909285715`.
- Broke port↔shipyard soft-stack; ARC-SHIP-065 left on planned co-location pin (no site-specific shipyard OSM; planned-only KMTP modernisation item).
- Cross-check: ferry_terminal node/1778025876; building «Управление Южного порта» way/193609860.
- Quarantine unchanged: ARC-PORT-034 Obskaya, ARC-PORT-069 Chevak, ARC-SHIP-069 Sevgiprorybflot.

## Atlas
- Rebuilt via `ArcticTradeLanes.com/atlas-proj/build_atlas.py --dataset ArcticTradeLanes-Dataset`; synced Dataset + public/data + dist/data + www aliases (static only — no SPA redeploy / App.tsx).
- 1321 features / 156 ports / 70 shipyards / 110 industry / 14 rail. CRS primary EPSG:3996.
- `generated` `2026-09-15T12:57:44.791596+00:00`.
- centroid_clone remaining: ARC-PORT-034, ARC-PORT-069, ARC-SHIP-069.

## Left alone
- ARC-PORT-034 / ARC-PORT-069 / ARC-SHIP-069 — quarantine.
- ARC-SHIP-065 — planned composite shipyard; no OSM shipyard geometry this pass.
- ARC-PORT-086↔ARC-SHIP-051 Wrangell 6-Mile — deferred (one win rule).
