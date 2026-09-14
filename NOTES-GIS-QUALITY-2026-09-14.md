# Port pier densify 2026-09-14

Updated `ports.csv` for ARC-PORT-040, 056, 106, 124 onto OSM pier/harbour/slipway nodes.
Companion note: International-Arctic/Arctic-Trade-Lanes `docs/PORT-CITY-DENSIFY-2026-09-14-1157.md`.
Exact port↔city stacks on live atlas: **12 → 9**. Live generated `2026-09-14T08:58:51Z`.


# GIS densify 2026-09-14 (~12:20 MSK)

Exact port↔city stacks: **9 → 6** (live after Zo sync).

| ID | was (city centroid) | now | OSM |
|----|---------------------|-----|-----|
| ARC-PORT-121 | 43.1155, 131.8855 Vladivostok | 43.0964571, 131.8717880 | relation/5160382 VMTP landuse=industrial |
| ARC-PORT-123 | 66.8983, -162.5967 Kotzebue | 66.7341667, -162.4950000 | node/5908987347 Cape Blossom |
| ARC-PORT-138 | 53.60, 159.53 city pin | 53.2491820, 159.7727540 | node/1972086501 бухта Бечевинская |
| ARC-SHIP-050 | 69.7270, 30.0456 Kirkenes | 69.7276851, 30.0333955 | way/231522562 Kimek verft |

Skipped (no distinct harbour/industrial/pier OSM): 024 Prudhoe, 034 Obskaya (inland; Sabetta already ARC-PORT-004), 052/063/069/153 proposed-only.
