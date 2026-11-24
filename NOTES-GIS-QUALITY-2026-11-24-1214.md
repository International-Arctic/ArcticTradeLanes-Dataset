# GIS Quality Loop — 2026-11-24 12:14 MSK

## Drift check (vs 11:38 MSK baseline) — NO DRIFT
- ATL `/` md5 c24e5823 (111124 B); `/data/atlas.3996.geojson` md5 6f1a2927, 1317 features; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"}
- UM bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-021 Iqaluit Deep Sea Port: max_depth_m 7.5 -> 10.0; last_verified 2026-11-24
  - Primary: Government of Nunavut (Transportation and Infrastructure Nunavut) Iqaluit Community Profile, last updated 03-Apr-2024 —
    "Cargo Terminal - Fixed Dock: 112 m x 24 m x 13 m above LLW, 10 m min. depth; Sheet Pile Wharf; 2022"
    https://www.gov.nu.ca/sites/default/files/documents/2026-10/Iqaluit_-_Community_Profile_-_EN.pdf
    (Cloudflare 403 from box and Zo; text read via search index of that document)
  - Corroboration (live-fetched): Ports '25 (ASCE) abstract "Iqaluit's New Deep-Sea Port in the Canadian Arctic",
    co-authored by the GN Project Manager and the Worley design engineers: "nearly 12m tidal range and 10m berth depth"
    https://ports25.eventscribe.net/fsPopup.asp?PresentationID=1488330
  - Value is a minimum berth depth (datum LLW per GN profile), not a draught.

## Flags (not changed)
- 021 operator "Nunavut Sealink and Supply": GN says TIN is responsible for oversight/O&M of the facility; NSSI is a sealift carrier. Needs decision.
- 021 berth_count 4 unsourced (GN profile lists 1 fixed wharf + sealift ramp + small craft harbour).
- Earlier open flags unchanged (PORT-160, 139 scope, berth_count 009/014/020/027/028/172, 009 operator).
