# GIS Quality Loop — 2026-11-24 13:44 MSK

## Drift check (vs 13:13 MSK baseline) — NO DRIFT
- ATL `/` md5 c24e5823 (111124 B); `/data/atlas.3996.geojson` md5 6f1a2927, 1317 features; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"}
- UM bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-115 Port of Adak: max_depth_m 12 -> 10.67 (= 35 ft x 0.3048); last_verified 2026-11-24
  - Source: NOAA U.S. Coast Pilot 9, Chapter 7 (22 NOV 2026 edition), para (1033) Sweeper Cove "Wharves":
    "Pier 10 is a T-head fuel pier at the west end of Sweeper Cove with a least depth of 35 feet alongside."
    Piers 3 and 5 (north side) "are used by vessels drawing up to 30 feet" (no alongside depth given).
    https://nauticalcharts.noaa.gov/publications/coast-pilot/files/cp9/CPB9_C07_WEB.pdf
  - The record is pinned on OSM way/8901402 Adak Fuel Pier (= Pier 10). Old value 12 had no cited source.

## max_depth_m QA verified unchanged this cycle (no edit)
- ARC-PORT-057 Tórshavn 14.8: Port of Tórshavn fact sheet "Outer basin max depth 14,8 meters at MLWS"; "max. depth alongside is 14.8 metres" (https://www.portoftorshavn.com/maritime-info/port-information , https://www.portoftorshavn.com/en/maritime-info/).
- ARC-PORT-064 Tornio (Röyttä) 9.0: Port of Röyttä Harbour Handbook (Fintraffic masters guide) all berths draft 9,0 m; Traficom SD Part 2 2.3.3 Tornio Röyttä fairway design draught 9 m (https://mastersguide.fintraffic.fi/sites/default/files/2024-02/2021-Harbour-Handbook.pdf , https://fiho.fi/npub/sd/SD_233_EN.pdf).
- ARC-PORT-054 Raahe 10.0: Raahen Satama technical data — channel draught 10,0 m; deep-water quay 2 berths 10.0 m; Lapaluoto 3 berths 8.0 m (https://www.raahensatama.fi/en/info/technical-data).
- ARC-PORT-162 Fuglafjørður 15: Faroe Business Report 2026-07-06 — Enni/Cold Store stretch 410 m with depths 12-15 m. Official berthing page still says 7.0-13.0 m MLWS, which looks older than the 2026 Enni quay (https://portoffuglafjordur.com/berthing/).

## Flags (not changed)
- 054 Raahe: the pin is on cargo quay LL3 (2026-10-28 decision), and Lapaluoto berths are 8.0 m. The 10.0 m value is the deep-water quay and channel, so max_depth stays port-wide.
- 162: the official page (13.0 m) and the 2026 secondary source (15 m) disagree. Recheck when the port updates its page.
- 115: berth_count 2, capacity 50000, storage 83000, calls 60, ice_class have no source. Coast Pilot lists Piers 3, 5 and 10 plus a barge pier. The harbour administrator in Coast Pilot is "Aleut Enterprise Corporation"; the record says Aleut Ventures.
- 030 Kaliningrad 13.5 lead: Rosmorrechflot port register (Reestr, Rosmorport) gives terminal max vessel draughts of 9.4-9.6 m (12.5 m at one terminal), but no berth depths. Not changed (draught is not depth).
- No official depth found for 011 Ilulissat, 010 Sisimiut or 016 Hammerfest LNG (still open).
