# GIS Quality Loop — 2026-11-23 15:36 MSK (UM + ATL)

## Health / drift (vs 15:06 baseline)
- ATL home md5 c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709, /api/health ok — no drift.
- UM bundle index-D072dq9N.js unchanged; /api/people.json count 535 — no drift.

## Theme: ports.csv max_depth_m / berth_count from official sources
### Edit (metadata-only, coords unchanged)
- ARC-PORT-026 Nome Harbor: max_depth_m 7.5 -> 6.86 (22.5 ft MLLW x 0.3048); berth_count 3 confirmed; last_verified 2026-09-09 -> 2026-11-23.
  - Alaska DOT&PF, Northwest Alaska Transportation Plan — Marine and Riverine Transportation tech memo:
    https://dot.alaska.gov/nreg/nwatp/files/nwatpMarineRiverineConditions.pdf
    ("The three docks along the causeway have a depth of 22.5 feet at mean lower low water (MLLW)"; Small Boat Harbor depth 10 ft).
  - USACE Alaska District, Port of Nome feasibility, Appendix D Economics (26-Mar-2020): City Dock ~200 ft, Middle Dock 210 ft, Westgold Dock 190 ft, each -22.5 ft MLLW; inner harbor -10 ft MLLW.
  - Still current: USACE SAM.gov W911KB27BA004 "Port of Nome Modification - Phase 2" (published 17-Nov-2026, bids due 17-Dec-2026) only now solicits dredging the existing outer basin to -28 ft MLLW (option) and a new -40 ft basin. Phase 1A (Kiewit) causeway extension runs to ~2028-29 (KNOM 2026-11-13).

## Checked, not changed
- ARC-PORT-019 Narvik / Narvik Havn KF quay pages (narvikhavn.no/kai/*): list "LAT 5,70m" (Fagerneskaia), 5,60 (Nordkaia, Pir 2), 5,895 (Pir 1, Pir 3). These read as quay-deck heights above LAT (chart datum), not water depth, so they were not used. No official depth found for 019 (18.5) or 104 (NULL, LKAB quay 5); LKAB pages give no depth.
- ARC-PORT-165 Vardø fiskerihavn: Kystverket project page gives the 595 m outer molo and Hasselneset dredging but no depth. Left blank.

## Flags
- ARC-PORT-051 Nome Snake River Moorage (4.0 m): the USACE/DOT figures for the inner harbor are -10 ft MLLW (~3.05 m) maintained and -8 ft authorized. The facility is still in design (35%; dredge bid early 2027), so no change until the MARAD FONSI/design depth is read.
- Most remaining blank or NULL depths are planned or concept projects (063, 074, 085, 090, 091, 102, 105-107, 110, 114, 119, 121, 123, 124, 126, 127, 129, 136, 157, 165, 166, 169). Blank is correct there until they are built.

## Next
- ARC-PORT-051 design depth from the MARAD FONSI on nomealaska.org (403 from box; try again or use a mirror on an official domain).
- Continue the depth theme: Icelandic harbour authority pages (089 Grundarfjörður, 077 Ísafjörður) and Kystverket/municipal havn pages for 040/061/071/072.
