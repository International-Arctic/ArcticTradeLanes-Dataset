# GIS Quality Loop — 2026-09-22 ~18:48 MSK

## Outcome
- **Densified ARC-CITY-101 Vopnafjörður (Iceland / Austurland)** off soft `65.746,-14.780` onto OSM **node/59860048** `place=town` `65.7540583,-14.8294887` (wikidata Q925686; Hagstofa population source on node). Corroborated **Wikidata P625** area `65.75/-14.85`. Soft ~3dp pin sat near rounded town approx; densify onto verified OSM place node.
- Tag `gis-densify-1848`. Softish shipyards blocked set unchanged (**13–14**). Quarantine + ARC-PORT-164 untouched.
- Preferred soft ports re-checked, left soft (no new verified pier/harbour): Hoybukta-060 (Nominatim→airport Høybuktmoen, not planned Vest port), Wrangell-086 (no 6-Mile Mill geometry), Ura Guba-148 (village only / no LNG FSU harbour), Indiga-128 (village Indiga ≠ Cape Rumyanichny harbour), Nuupiluk-127 (no match), EMO-166 skipped (route-pin).
- ARC-SHIP-009 Arctech intentionally kept at Wikidata Q4117007 P625 `60.158/24.929` (≠ ARC-SHIP-010 way/4260855) — do not collapse.

## Atlas
- Rebuilt via `atlas-proj/build_atlas.py --dataset ArcticTradeLanes-Dataset`.
- `generated` **2026-09-22T15:57:01Z**, **1321** features / **70** shipyards / **156** ports / **103** cities. CRS primary EPSG:3996.
- Synced root/www/public/dist/data + Dataset aliases — **no SPA redeploy / App.tsx**.

## UM
- No package bump this cycle; geo-filter left as prior **0.1.4** (no cheap client-side filter win);
  ATL city densify shipped.
