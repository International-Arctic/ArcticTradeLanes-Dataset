# GIS Quality Loop — 2026-11-24 18:41 MSK

## Drift check (read-only)
- arctictradelanes.com home md5 c24e5823…, /data/atlas.3996.geojson 6f1a2927…, /data/ports.csv c6e72709…, /api/health ok — unchanged.
- unicornsmap.com bundle index-D072dq9N.js; /api/stats.json geoPinned 653 / peopleOnMap 537 — unchanged.

## Change (ports.csv, one row, metadata only, coords unchanged)
- ARC-PORT-058 Port MacKenzie Multimodal Port Expansion: max_depth_m 10.7 -> 18.29 (= 60 ft MLLW x 0.3048); last_verified 2026-09-14 -> 2026-11-24; source appended.
- Sources:
  - Matanuska-Susitna Borough (port owner), official Port MacKenzie page: https://matsugov.us/newconstructiondevelopment/35-communication/landing-pages/13880-port — "The trestle leading to the 1,200 foot deep-draft dock face extends 470 feet into Cook Inlet to a depth of -60 feet at mean lower low water (MLLW)"; barge dock "-20 feet mean lower low water (MLLW)".
  - MSB Port MacKenzie tri-fold brochure: https://matsugov.us/docs/general/22269/Port-MacKenzie-Brochure-Tri-Fold.pdf — "1,200 ft Deep Draft Dock -60' at low tide"; "550 ft Barge Dock -20' at low tide".
- Prior 10.7 m (= 35 ft) matched no cited source.

## Flags
- NOAA U.S. Coast Pilot 9, Ch. 4 (22 Nov 2026), Facilities at Anchorage table (https://nauticalcharts.noaa.gov/publications/coast-pilot/files/cp9/CPB9_C04_WEB.pdf) and USACE NDC Docks layer NAV_UNIT_ID 0YEE list only the Port Mackenzie barge wharf (500 ft, 20 ft reported depth, 2002 survey); the deep-draft dock is absent from both federal tables.
- MSB sources disagree on barge dock usable length (372 / 375 / 550 ft); not used.

## Leads (not changed)
- ARC-PORT-059 Skagway Industrial Dock (pin on Ore Peninsula project site): max_depth_m 9.1 has no depth source; USACE NDC 0U9U Skagway Ore Dock and Petro Marine Plant lists 45-90 ft, but the record is a redevelopment project; needs project design depth (skagway.org RFP) before changing.
- ARC-PORT-113 Port of Alaska Terminal 1: 11 m vs Coast Pilot 9 / USACE NDC 35 ft (10.7 m) for POA terminals; check PAMP design depth for new T1.
