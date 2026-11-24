# GIS Quality Loop — 2026-11-24 15:15 MSK

## Drift check (vs 14:35 MSK baseline): NO DRIFT
- ATL `/` 200, 111124 B, md5 c24e5823; `/data/atlas.3996.geojson` 200, md5 6f1a2927, 1317 features; `/data/ports.csv` 200, md5 c6e72709; `/api/health` {"status":"ok"} (ts 2026-11-24T12:10:00Z = 15:10 MSK)
- UM (unicornsmap.com) bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-139 Tromsø Havn (Breivika cargo port pin): max_depth_m 11.0 -> 11.5; last_verified 2026-11-24
  - Source: Tromsø Havn KF official quay list https://tromso.havn.no/tjenester/kaiplass/ (checked 2026-11-24)
    - Kai 20 Breivika 194 m, 6.5-7.5 m; Kai 21-24 Breivika 410 m, 10.4-11.0 m; Kai 24 nord 86 m, 11.0 m;
      **Kai 25 Breivika 150 m, 11.5 m** (cargo, fishing, offshore); Kai 38 Breivika nord 200 m, 11.0 m
  - The old 11.0 matched only Kai 21-24 and 24 nord. Kai 50 Grøtsund (22.0 m) is a separate site outside Breivika, so it is not used for this record.

## Flags / leads (not changed)
- Kai 50 Grøtsund (130 m, 22.0 m, special vessels/offshore/rigs) has no record of its own. It would be a candidate for a separate feature only if wanted (no new feature added).
- 053 Qaqortoq 7.5 -> 6.6 lead still needs a current official source.
