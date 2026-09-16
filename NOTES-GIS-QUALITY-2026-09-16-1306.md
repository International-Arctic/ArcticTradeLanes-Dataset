# GIS Quality Loop — 2026-09-16 ~13:06 MSK

## Win
- Densified **ARC-SHIP-011** Rauma Marine Constructions off soft-pin `61.1300,21.5100` onto OSM [way/294240416](https://www.openstreetmap.org/way/294240416) Seaside Industry Park Rauma centroid `61.1221867,21.4603935` (`landuse=industrial` `industrial=shipyard` `waterway=boatyard`; Wikidata [Q17334709](https://www.wikidata.org/wiki/Q17334709) Rauma shipyard; named RMC building [way/1418979404](https://www.openstreetmap.org/way/1418979404) adjacent; company [Q30638410](https://www.wikidata.org/wiki/Q30638410)).

## Skipped / quarantine unchanged
- ARC-PORT-034 Obskaya, ARC-PORT-069 Chevak, ARC-SHIP-069 Sevgiprorybflot
- ARC-SHIP-002 Zvezda — still no strong Nominatim industrial hit
- ARC-SHIP-009 Arctech Helsinki — leave (same Hietalahti complex as SHIP-010)
- Wrangell PORT-086/SHIP-051 planned-only
- Turku office node for RMC (office=company) is HQ/office, not the yard — ignored

## Atlas
- rebuild after CSV densify; sync live static only (no App.tsx smash / no SPA code redeploy intent)
- features 1321 / shipyards 70 / ports 156 / crs_primary EPSG:3996
- centroid_clone remaining: ARC-PORT-034, ARC-PORT-069, ARC-SHIP-069

## Checks
- `check-ship011-rauma-seaside-densify.mjs`
