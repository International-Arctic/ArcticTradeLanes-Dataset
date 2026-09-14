# Industry densify + centroid_clone stamp — 2026-09-14 (~14:16 MSK)

GIS Quality Loop. Industry↔city exact stacks **9 → 7**; shipyard stack ARC-SHIP-069 stamped for client quarantine (no invented office offset).

## Densified (OSM-verified)

| ID | Name | Was (city) | New WGS84 | OSM |
|----|------|------------|-----------|-----|
| ARC-FAC-012 | BSNC Nome Arctic logistics | 64.5011, -165.4064 | 64.4976121, -165.40514 | way/287815378 BSNC Building |
| ARC-FAC-351 | Adak Bulk Fuel & Strategic Logistics Hub | 51.8815, -176.6581 | 51.8692789, -176.6701699 | way/480643014 Tank / bulk fuel storage |

## Builder stamp (`atlas-proj/build_atlas.py`)

Extended `geo_quality=centroid_clone` beyond ports to **shipyards** and **industry** when WGS84 matches a city pin at 7 dp. Client `filterGeoJson` source extended to quarantine those layers (ports already); SPA not redeployed this cycle — stamp is live in atlas GeoJSON for next bundle.

Stamped this cycle (14): ports 024/034/052/063/069/153; ARC-SHIP-069; industry 315/335/337/342/362/363/378.

## Remaining industry stacks (help wanted)

315 Sabetta, 335 Yellowknife ARCAN, 337 Narvik Arva, 342 Arkhangelsk Severny Proekt, 362 Liinakhamari, 363 Prudhoe Alyeschem, 378 Iqaluit Sapujjijiit — quarantine until verifiable OSM/office geometry.

## Live

- https://arctictradelanes.com/atlas.geojson — generated `2026-09-14T11:27:04Z`, **1321** features, industry 110, ports 156
- Backup: `arctic_industrial_facilities.csv.bak-gis-1416`
- No SPA redeploy; static atlas sync public+dist only
