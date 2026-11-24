# GIS Quality Loop — 2026-11-24 13:13 MSK

## Drift check (vs 12:39 MSK baseline) — NO DRIFT
- ATL `/` md5 c24e5823 (111124 B); `/data/atlas.3996.geojson` md5 6f1a2927, 1317 features; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"}
- UM bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-032 Vardo Harbor: max_depth_m 9.0 -> 7.0; last_verified 2026-11-24
  - Primary: Vardø Havn KF official "Vardø Port" page — city port where Hurtigruten and cargo ships call:
    "The dock has a length of 190 m with a depth of 7 m". https://www.vardohavn.no/ports/vardo-port
  - Corroboration: Vardø kommune / Norconsult "Ny ytre molo i Vardø" skisseprosjekt (2020-02-28), citing
    Vardø Havn KF Havneplan 2020-2030: outer harbour dredged to -7.0 m, inner harbour to -5 m (sjøkartnull).
    https://www.vardo.kommune.no/download/18.eedc0e19a7b9e8b2f12a7b/1764243334565/8%20Skisseprosjekt%20Vard%C3%B8%20ytre%20molo_05-19.pdf
  - The old 9 m figure matches Svartnes Port (separate mainland harbour ~3 km away; 194 m quay, 9 m approach depth,
    https://www.vardohavn.no/ports/svartnes-port), not the city port where this record is pinned (OSM node/269242524 Hurtigruten Vardø).

## Flags (not changed)
- 032 berth_count 6, capacity 1,200,000 t, calls 165, ice_class Arc3-Arc4, fees: unsourced. Operator name "Vardo Harbor Authority" vs official "Vardø Havn KF".
- Lead: Svartnes Port (Vardø Havn KF, 194 m quay, 9 m) has no record of its own; Vardø kommune Svartnes detaljregulering planprogram (2023-06-21) plans deepening the approach to -9.3 m.
- Consistency: ARC-PORT-094 Vardø Fishing Harbour external breakwater already 7 m.
- Earlier open flags unchanged (017 Kullkaia 9.7, 023 berth_count, PORT-160, 139 scope, berth_count 009/014/020/021/027/028/172, operators 009/021).
