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

# GIS densify 2026-09-14 (~12:50 MSK)

Exact port↔city stacks: **15 → 6** (live after Zo sync).

| ID | was (city centroid) | now | OSM |
|----|---------------------|-----|-----|
| ARC-PORT-002 | 64.5393, 40.5185 Arkhangelsk | 64.5325868, 40.5171670 | way/1074548530 industrial=port |
| ARC-PORT-003 | 69.4091, 86.1775 Dudinka | 69.4220612, 86.1447027 | node/7858618295 Дудинка ferry_terminal |
| ARC-PORT-005 | 69.7008, 170.2700 Pevek | 69.7052842, 170.2556335 | node/950642422 Pevek Docks |
| ARC-PORT-038 | 69.1169, -105.0594 Cambridge Bay | 69.1138158, -105.0597084 | way/146311328 G.N. Dock pier |
| ARC-PORT-059 | 59.4583, -135.3139 Skagway | 59.4509629, -135.3232692 | way/313565267 Broadway Dock pier |
| ARC-PORT-067 | 59.6425, -151.5483 Homer | 59.6424035, -151.5194138 | way/229618866 Ben Walters Float Dock |
| ARC-PORT-092 | 69.786, 20.955 Sørkjosen | 69.7938584, 20.9379571 | node/5355495279 harbour=yes |
| ARC-PORT-108 | 53.8894, -166.5272 Unalaska | 53.9071465, -166.5097581 | way/1328289905 Spit Dock |
| ARC-PORT-170 | 60.5432, -145.7564 Cordova | 60.5433947, -145.7653080 | way/8993739 L Float pier |

Skipped (proposed/planned or no distinct harbour OSM): 024 Prudhoe, 034 Obskaya, 052 Grays Bay, 063 Ittoqqortoormiit, 069 Chevak, 153 Steensby.
