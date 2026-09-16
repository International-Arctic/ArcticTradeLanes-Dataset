# GIS Quality Loop — 2026-09-16 ~09:11 MSK

## Win
- Densified **ARC-SHIP-005** Onega Shipyard off Arkhangelsk soft-pin `64.54,40.52` onto OSM [way/41865465](https://www.openstreetmap.org/way/41865465) **Онежский судостроительно-судоремонтный завод Конструкторские бюро** centroid `61.7829435,34.4023099` (Petrozavodsk, Lake Onega). Cross-check: Wikidata [Q27346605](https://www.wikidata.org/wiki/Q27346605) Onego Shipyard.
- Densified **ARC-SHIP-010** Helsinki Shipyard off coarse Helsinki centroid `60.18,24.95` onto OSM [way/4260855](https://www.openstreetmap.org/way/4260855) Helsinki Shipyard polygon centroid `60.15649896153846,24.927292753846153` (Hietalahti / Hernesaari).

## Skipped / quarantine unchanged
- ARC-PORT-034 Obskaya, ARC-PORT-069 Chevak, ARC-PORT-153 Steensby — still no verifiable pier/LNG OSM.
- ARC-PORT-086↔ARC-SHIP-051 Wrangell planned mill — no pier OSM within ~1 km.
- ARC-SHIP-069 Sevgiprorybflot — still on Murmansk city centroid; no OSM name match.
- ARC-SHIP-009 Arctech Helsinki Shipyard left alone (same Hietalahti complex as SHIP-010 historically; avoid new soft-stack).

## Atlas
- Rebuilt via `ArcticTradeLanes.com/atlas-proj/build_atlas.py --dataset ArcticTradeLanes-Dataset`; synced Dataset + public/data + dist/data + www aliases (static only — no SPA redeploy / App.tsx).
- 1321 features / 156 ports / 70 shipyards / 110 industry / 14 rail. CRS primary EPSG:3996.
- `generated` `2026-09-16T06:20:47.893986+00:00`.
- centroid_clone remaining: ARC-PORT-034, ARC-PORT-069, ARC-SHIP-069.
