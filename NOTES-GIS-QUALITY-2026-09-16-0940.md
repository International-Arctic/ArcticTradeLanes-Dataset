# GIS Quality Loop — 2026-09-16 ~09:40–09:50 MSK

## Win
- Densified **ARC-SHIP-001** Baltic Shipyard off coarse St. Petersburg soft-pin `59.9430,30.2620` onto OSM [relation/8702900](https://www.openstreetmap.org/relation/8702900) **Балтийский завод** (`landuse=industrial`, Wikidata [Q530989](https://www.wikidata.org/wiki/Q530989)) polygon centroid `59.9250652,30.2570895`.

## Skipped / quarantine unchanged
- ARC-PORT-034 Obskaya, ARC-PORT-069 Chevak, ARC-PORT-153 Steensby — still no verifiable pier/LNG OSM within safe radius.
- ARC-PORT-086↔ARC-SHIP-051 Wrangell planned mill — no pier OSM within ~1 km.
- ARC-SHIP-069 Sevgiprorybflot — still on Murmansk city centroid; Overpass hits are hospital «Севрыба» / Мурманская Судоверфь (name mismatch — leave quarantine).
- ARC-FAC-342 / ARC-FAC-315 / ARC-FAC-362 soft-stacks with ports are intentional fleet/terminal co-location — not densified away.

## Atlas
- Rebuilt via `ArcticTradeLanes.com/atlas-proj/build_atlas.py --dataset ArcticTradeLanes-Dataset`; synced Dataset + public/data + dist/data + www aliases (static only — no SPA redeploy / App.tsx).
- 1321 features / 156 ports / 70 shipyards / 110 industry / 14 rail. CRS primary EPSG:3996.
- `generated` `2026-09-16T06:50:12.657541+00:00`.
- centroid_clone remaining: ARC-PORT-034, ARC-PORT-069, ARC-SHIP-069.
