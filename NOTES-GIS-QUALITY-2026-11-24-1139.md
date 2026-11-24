# GIS Quality Loop — 2026-11-24 11:39 MSK

## Drift check (vs 11:13 MSK baseline) — no drift
- ATL / md5 c24e5823; /data/atlas.3996.geojson md5 6f1a2927 (1317 features); /data/ports.csv md5 c6e72709; /api/health {"status":"ok"}
- UM bundle index-D072dq9N.js; /api/stats.json geoPinned 653, peopleOnMap 537

## Fix (metadata-only, coords unchanged, no atlas rebuild)
- ARC-PORT-009 Nuuk Port max_depth_m 12.0 -> 10.5
  - Source: Sikuki Nuuk Harbour A/S (port authority) official page https://sikuki.gl/the-ports/port-of-nuuk/
  - Container terminal Quay 101/102: 310 m, depth 10.5 m LAT (deepest listed); Quay 103: 50 m, 5.5 m LAT;
    Atlantkaj 100 m, 10 m LAT; Feederkaj 40 m, 6.5 m LAT; Gl. Atlantkaj 170 m, 7.0-4.6 m LAT
  - Value is quay depth at LAT (not draught).

## Flags (not changed)
- ARC-PORT-009 berth_count 15 not supported by the official quay list (5 named quays/sections); operator "Royal Arctic Line" is the container-terminal operator only, port authority is Sikuki Nuuk Harbour A/S. A 350 m new quay is due 2028 (Cruise Europe press 2026-08-30) — re-check depth then.
- Lead for next cycle: ARC-PORT-021 Iqaluit 7.5 vs Government of Nunavut Iqaluit Community Profile (2026-10) "Fixed Dock 112 m x 24 m ... 10 m min. depth" — PDF behind Cloudflare challenge from the box; not applied until verified directly.
