# GIS Quality Loop — 2026-11-24 1114 MSK

## Drift check (vs 10:36 MSK baseline) — no drift
- ATL home md5 c24e5823 (111124 B); /data/atlas.3996.geojson md5 6f1a2927, 1317 features; /data/ports.csv md5 c6e72709; /api/health ok
- UM bundle index-D072dq9N.js; /api/stats.json geoPinned 653, peopleOnMap 537

## Fix (metadata-only, coordinates unchanged)
- ARC-PORT-020 Churchill Port: max_depth_m 9.5 -> 11.5
  - Owner/operator Arctic Gateway Group media backgrounder (2020): "4 loading berths | depth" Fuel 10 m, Berth 11.5 m, Layby 10 m, Berth 9 m; Approach Channel 8.5 m; Maximum 225m LOA
    https://cdn.asp.events/CLIENT_Blueprin_40D8A101_B6E1_26A8_9C0B24F929A026E6/sites/World-Indigenous-Forum/media/libraries/brochures/604-ARCTICGATEWAY_MEDIABACKGROUNDER-01-2020.pdf
  - Corroborated: Logistec (stevedore) tech sheet Nov 2024, Pier 1 240 m depth 11.5 m, Pier 2 600 m depth 8.5 m ("approximate")
    https://www.logistecterminals.com/wp-content/uploads/2025/03/TechSheets-Churchill_Nov2024.pdf
  - last_verified 2026-11-24

## Flags (no change made)
- PORT-020 berth_count 6 vs 4 deep-sea berths (Arctic Gateway Group); not changed.
- PORT-020 approach channel 8.5 m is the controlling depth; the quay depth is 11.5 m. Wikipedia/findaport say "17 m draft", which no primary source supports, so it was not used.
- The atlas was not rebuilt; the live /data/ports.csv will lag the Dataset until the gated properties-only rebuild.
