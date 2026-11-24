# GIS Quality Loop — 2026-11-24 14:14 MSK

## Drift check (vs 13:44 MSK baseline): NO DRIFT
- ATL `/` 200, 111124 B, md5 c24e5823; `/data/atlas.3996.geojson` 200, md5 6f1a2927, 1317 features; `/data/ports.csv` 200, md5 c6e72709; `/api/health` {"status":"ok"} (ts 2026-11-24T11:14:35Z = 14:14 MSK)
- UM (unicornsmap.com) bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-098 Port of Seward: max_depth_m 14.0 -> 11.58 (= 38 ft x 0.3048); last_verified 2026-11-24
  - Source: NOAA U.S. Coast Pilot 9, Chapter 4 (22 NOV 2026 edition), Seward "Wharves":
    - (965) Alaska Railroad Cruise Dock: "200-foot face; 38 feet alongside; 735 feet each side; 33 to 35 feet alongside". This is the pinned OSM way/264719377 Seward Cruise Dock and the deepest active commercial berth.
    - (964) Alaska Railroad Cargo Dock: "35 feet alongside".
    - (970) University of Alaska IMS Wharf: "150 feet of berthing space; 40 feet alongside". Research vessels only, so it is not used as the port value.
    - (966) Coal Dock: "52 feet alongside". It has been idle since 2016. ARRC's 2016 Seward Loading Facility closure decision says the dock is "unsuitable for unloading passenger vessels or cargo ships" (mooring only).
    - https://nauticalcharts.noaa.gov/publications/coast-pilot/files/cp9/CPB9_C04_WEB.pdf
    - https://www.alaskarailroad.com/sites/default/files/Communications/2016_Seward_Coal_Loading_Facility_Closure_Decision_and_Background.pdf
  - The old value 14.0 had no cited source.

## Flags / leads (not changed)
- 098: Coast Pilot still describes the old Cruise Dock. The record's sources say the new ARRC cruise terminal (750-ft floating pier) was completed in June 2026. Recheck the depth when NOAA updates the Cruise Dock entry.
- 053 Qaqortoq 7.5: NGA Pub 181 (old yumpu copy) gives Atlantic Quay 100 m with 6.6 m alongside; WPI cargo pier is 6.4-7.6 m. The current Pub 181 could not be fetched (msi.nga.mil blocked), so 053 is not changed. Lead: 7.5 -> 6.6 if a current official source confirms it.
