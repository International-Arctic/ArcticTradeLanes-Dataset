# GIS Quality Loop — 2026-11-23 16:12 MSK (UM + ATL)

## Health / drift (vs 15:36 baseline)
- ATL home md5 c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709, /api/health ok — no drift.
- UM bundle index-D072dq9N.js unchanged; /api/people.json count 535 — no drift.

## Theme: ports.csv max_depth_m / berth_count from official sources
### Edits (metadata-only, coords unchanged)
- ARC-PORT-051 Nome Snake River Moorage Facility: max_depth_m 4.0 -> 2.44 (design basin -8 ft MLLW x 0.3048); berth_count stays NULL; last_verified 2026-10-13 -> 2026-11-23.
  - MARAD FONSI, Snake River Moorage & Access Ramps (26-Aug-2026, FY2025 BUILD), posted at https://www.nomealaska.org/1412/Snake-River-Moorage-Project---FONSI-8262 and reproduced in the Nome Port Commission 17-Sep-2026 packet (https://www.nomealaska.org/DocumentCenter/View/1568) with the PND dredge plan "PROPOSED DREDGING AREA -8' MLLW" (3.42 ac).
  - Port Director briefing Feb-2026 (DocumentCenter/View/1508): "Dredge 7-acre basin to 8-foot depth", 1,700 ft floating docks for 56 x 40-ft vessels. Port Commission 15-Oct-2026 (View/1612): design 35%, dredge bid early 2027.
  - Note: nomealaska.org PDFs return a Cloudflare challenge from the box (not bypassed); text read via the search index of the official city documents.
- ARC-PORT-040 Honningsvåg: max_depth_m 9.5 -> 12.0; berth_count 5 -> 8; last_verified 2026-09-14 -> 2026-11-23.
  - Nordkappregionen Havn IKS, https://www.nordkapphavn.no/cruise/port-information-2/ : Berth North 100 m / 12,0 m; Berth 3 125 m / 10,0 m; Berth South 80 m / 5,9 m.
  - Cruise manual 2024 (nordkapphavn.no/wp-content/uploads/2024/06/Nordkappcruise-manual-2024.pdf): quays North, 1, 2, 3, West, East, South, Inner Bølgebryter (8).
  - DNV report 2023-0269 for Nordkappregionen Havn (nordkapphavn.no/wp-content/uploads/2025/03/Vedlegg-PS-5-23-Rapport-DNV.pdf): "Selskapet drifter 8 kaier i Honningsvåg".

## Checked, not changed
- ARC-PORT-089 Grundarfjörður: grundport.is/port-information confirms Berth 1 135 m / 9.5 m at lowest tide, Berth 2 220 m / 8.0 then 6.5 m → 9.5 / 2 already correct.
- ARC-PORT-077 Ísafjörður (10 / 4): Vegagerðin Sundabakki page says the quay was dredged to 11 m; Ísafjarðarbær news 04-Apr-2024 says two Sundabakki areas dredged to 10 m. Sundabakki is carried on child ARC-PORT-140 (10 m). Left unchanged — needs one consistent figure (10 vs 11) before editing either row.
- ARC-PORT-071 Mehamn (6.0 / 6): Kystverket dredging to 9/8/7/6 m is still planned (regulation start Nov-2024); nordkynhavn.no gives quay lengths but no depths (depth chart PDF only). Left.
- ARC-PORT-061 Båtsfjord verified 2026-11-03; 072 Øksfjord not reached.

## Next
- 072 Øksfjord (Loppa havn / Kystverket), 071 Mehamn depth chart PDF (nordkynhavn.no), then resolve 077/140 10 vs 11 m.
