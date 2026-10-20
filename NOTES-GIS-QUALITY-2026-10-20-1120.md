# GIS Quality Loop gis-loop-1020-1120 (~11:20 MSK, 2026-10-20)

## ARC-PORT-101 Clyde River Small Craft Harbour (Nunavut, CACLR): moved onto the official DFO harbour point
- Old pin 70.4753 / -68.5890 (4 decimals) sat inland in Clyde River hamlet. It reverse-geocodes to a residential street near the health centre, and OSM maps no harbour objects nearby.
- New pin **70.466932 / -68.597123** comes from Fisheries and Oceans Canada open data, *Small Craft Harbours Locations and Information* (open.canada.ca record 262451e7-6416-47b5-8453-f31d212ea657; egisp.dfo-mpo.gc.ca `small_craft_harbours_en` MapServer layer 0): Harbour_number 5992 "Clyde River", NU, Harbour_Type Core Fishing. The move is about 0.98 km SSW (bearing ~198°).
- This is an official registry harbour point, not a surveyed berth line (facility_site in the ports.csv sources note). Confidence stays at 97, `last_verified` is now 2026-10-20, and all other attributes are unchanged.

## Atlas regression gate
- Built from the canonical Zo `atlas-proj` with `ref/ne_10m_land.geojson`.
- 1317 features. IDs, order and top level are identical to the 07:55:12Z gen; the only differing feature is ARC-PORT-101 (geometry).
- 25/25 lanes are water-routed, the land-mask fan is 563 and the ship water fan is 101 (display_offset 131 = live).
- Previously fixed ports did not move (014, 066, 079, 083, 135, 139, 157 and earlier fixes).

## Live
- Atlas gen `2026-10-20T08:30:55Z`, 1317 features, EPSG:3996 (md5 3996 f4452c6a, 4326 ccffea5f).

## Reviewed, not changed
- ARC-PORT-148 Ura Guba: already pinned on the AIS position of the moored Saam FSU (2026-09-29). No change.
- ARC-PORT-034 Obskaya LNG Terminal: approximate GEM-wiki point inside Yamal LNG/Sabetta. There is no distinct verifiable terminal object (the Yamal LNG berths belong to ARC-PORT-004), so it was left unchanged.
