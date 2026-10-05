# GIS Quality Loop — 2026-10-05 ~12:45 MSK (gis-portbay-1245)

## Outcome
- **ARC-PORT-169 VLT KORF (Korf Bay High-Latitude Multimodal Transshipment Hub, Olyutorsky District, Kamchatka)** moved off `60.2500, 163.0500`. That point sat about 47 km inland (great-circle to the Natural Earth 10m coast) in the central Olyutorsky uplands, roughly 150 km west of the bay the project is named for.
- New pin: Korf Bay anchor `60.0333, 165.7333` from [Wikidata Q1108019](https://www.wikidata.org/wiki/Q1108019) (P625). Cross-checks: OSM `natural=bay` [node/1947664519](https://www.openstreetmap.org/node/1947664519) `59.9254, 165.6161`; Korf settlement [way/690136906](https://www.openstreetmap.org/way/690136906) `60.3725, 166.0170`; Tilichiki [way/690137323](https://www.openstreetmap.org/way/690137323) `60.4291, 166.0571`.
- Precision is bay-level on purpose. The terminal site plan is not public yet; refine when VLT KORF / KRDV publish it.
- Only `ports.csv` row ARC-PORT-169 changed (lat, lon, sources note, last_verified).

## Atlas
- Rebuilt with `build_atlas.py`; live atlas aliases synced on arctictradelanes.com (no SPA redeploy). 1321 features, exactly 1 feature changed.
- Regression guard: `scripts/check_port_inland.py` in International-Arctic/Arctic-Trade-Lanes (locks ARC-PORT-169 to the water side and reports other far-inland maritime pins for review).
