# GIS Quality — gis-loop-1127-1805 (~18:05 MSK Europe/Moscow, 2026-11-27)

## Drift check (no drift)
- ATL `/` md5 c24e5823, `/data/atlas.3996.geojson` 6f1a2927, `/data/ports.csv` c6e72709, `/api/health` `{"status":"ok"}`.
- UM home bundle `index-D072dq9N.js` (unchanged). `/api/stats.json`: geoPinned 653, peopleOnMap 537 (up from 630/514 last noted; data growth, not a bundle change).

## ARC-PORT-047 Nordvik Port (historic): official-source pin check (metadata-only, coords unchanged)
- Official sources: none apply. No government order or operator filing (port/settlement abolished 1956); no Nordvik entry in the UNECE UN/LOCODE RU list (see gis-loop-1109-1522).
- Current pin 73.9975 / 111.463333 = Wikidata Q2364258 P625 (precision 1″; reference is "imported from ru.wikipedia"): https://www.wikidata.org/wiki/Q2364258 , https://ru.wikipedia.org/wiki/Нордвик_(посёлок)
- GeoNames 2019032 (PPL, minute precision) 74.03333 / 111.53333, ~4.52 km NE: https://www.geonames.org/2019032
- ru.wikipedia list of northernmost settlements: 74°01′N 111°46′E (~9.5 km).
- NGA GNS UFI -2967675 (listed on Wikidata): geonames.nga.mil was not reachable from the box this cycle. Check next cycle.
- Result: **no pin-move lead**. No official source is more accurate than the current pin.

## Hygiene lead (not applied)
- ARC-PORT-047 `city_id` = ARC-CITY-046 **Salekhard** (Yamalo-Nenets AO). Wikidata P131 places Nordvik in Taymyrsky Dolgano-Nenetsky District, Krasnoyarsk Krai. Candidate relink: ARC-CITY-009 Khatanga (Krasnoyarsk Krai). The field is kept until a decision is made.
- The 21 blank-confidence ports rows stay blank, as decided in 1606 (no sourced basis).
