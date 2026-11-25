# GIS Quality Loop — 2026-11-25 09:06 MSK

## Drift check (read-only): NO DRIFT
- ATL `/` 111124 B md5 c24e5823; `/data/atlas.3996.geojson` md5 6f1a2927; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"}.
- UM bundle index-D072dq9N.js (985379 B, md5 50ebfe4c) + index-CTe7OEm6.css; `/api/stats.json` geoPinned 653 / peopleOnMap 537. `/api/people.json` has 535 rows, 26 with null coords.

## Fix (ports.csv, one row, metadata only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-006 Tiksi Sea Port: max_depth_m 8.5 -> 5.8; last_verified 2026-11-09 -> 2026-11-25.
- Source: Mintrans order No.50 of 14.02.2017, "Obligatory Regulations in seaport Tiksi" (official publication http://publication.pravo.gov.ru/document/0001201703160003; the scanned PDF was OCR'd on 2026-11-25).
  - Annex 3 lists only three berths: No.10 (88 m / 4.0 m) and No.11 and No.12 on East Pier No.1 (157.5 m / 5.8 m each). Berths 1-4, 13 and 14 on East Pier No.2 are decommissioned.
  - The old 8.5 matches Annex 2 anchorage district No.4 ("large sea-going ships, draught up to 8.5 m"). That is an anchorage draught limit, not a berth depth.
- The same order was used for ARC-PORT-036 Tiksi East Port (5.8) on 2026-11-24.

## Flags / leads (not changed)
- ARC-PORT-088 Skellefteå 12.5: the official "Våra kajer" page (https://portofskelleftea.se/vara-kajer) gives fairway depths ("farledsdjup") of Handelskajen 8.2, Jubileumskajen 8.2, Energikajen 9.3, Cementkajen 5.4 and Rönnskärskajen 12.6 m (Rönnskär is owned by Boliden). Sjöfartsverket gives max draught of 8.3 m in the inner harbour and 12 m at Rönnskär. 12.5 is the new quay's design depth. A decision is needed on whether the record means the new quay (12.5) or the port max (12.6, Boliden quay).
- ARC-PORT-146 Kemi Ajos 12: consistent with Väylävirasto (Ajos fairway deepened 10 -> 12 m, opened 30.10.2023, https://vayla.fi/-/syvennystyot-ajoksen-merivaylalla-ja-kemin-satamassa-ovat-valmistuneet-etuajassa). No change.
- UM (unchanged bundle, so not worse): the bundle has 22 person pins with lat/lng swapped (|lat| > 90): 15 Sydney (151.2093, -33.8688), 6 Melbourne (144.9631, -37.8136) and 1 Adelaide (138.6007, -34.9285). bart-boschmans is also swapped (lat 4.3517, lng 50.8503 = Brussels reversed). The EMERGENCE event marker itself is correct ([-33.8616, 151.2083]).
