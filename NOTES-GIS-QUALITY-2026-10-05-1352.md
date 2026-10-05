# GIS quality notes 2026-10-05 13:52 MSK (gis-lonflip-1352)

Coordinate fixes (town-level precision, Wikidata P625):

- ARC-PORT-166 (ports.csv, data/ports.csv): 64.732,-177.508 -> 64.7333,177.5042 (Anadyr Q7978; longitude sign flip)
- ARC-FAC-392 (arctic_industrial_facilities.csv, data/...): 64.7320,-177.5050 -> 64.7333,177.5042 (Anadyr Q7978; sign flip)
- ARC-PROG-699 (entrepreneur_programs.csv): 64.7320,-177.6500 -> 64.7333,177.5042 (Anadyr Q7978; sign flip)
- ARC-PROG-716 (entrepreneur_programs.csv): 64.0019,-162.0090 -> 68.0500,166.4500 (Bilibino Q105116; was in Norton Sound, Alaska)
- ARC-PROG-603 (entrepreneur_programs.csv): 64.5000,-13.5000 -> 63.7494,-68.5217 (Iqaluit Q2030; row city is Iqaluit)

Atlas synced to live generation 2026-10-05T10:55:51Z (1321 features, 5 geometries changed).
Guard: Arctic-Trade-Lanes scripts/check_offshore_land_pins.py (LOCKED ids fail on regression).
