# GIS Quality Loop — 2026-11-23 13:09 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, /atlas.4326.geojson 1c2e6a85, live /data/ports.csv c6e72709, /api/health ok. UM bundle index-D072dq9N.js, /api/people.json 535. Arctic-Trade-Lanes at fc62d2e.

## ARC-PORT-170 Cordova South Harbor: max_depth_m (commit 3c8a4da)
| field | old | new | source |
|---|---|---|---|
| max_depth_m | NULL | 2.1 | NOAA U.S. Coast Pilot 9, 2026 (44th) Edition, Cordova para (378), https://nauticalcharts.noaa.gov/publications/coast-pilot/files/cp9/CPB9_WEB.pdf (read 2026-11-23): "In 2010, the controlling depth in the entrance and access channel was 12 feet. The controlling depth in the berthing area was 7 feet." 7 ft = 2.1 m (MLLW). |

- The 2023-2026 South Harbor rebuild replaced the floats and bulkhead. The City's April 2023 IHA application to NMFS places dredging in the North Harbor only, so the rebuild does not supersede the basin figure.
- Not used: the Ocean/Municipal Dock (408 ft face, 25 ft alongside; cityofcordova.net/port-and-harbor and Coast Pilot para 375). It is a separate deep-water dock, not this float basin.
- Coast Pilot gives "about 852 berths" harbour-wide. berth_count stays at 727, per the City's newer post-rebuild figure (cityofcordova.net/harbor).
- last_verified is now 2026-11-23. Coordinates are unchanged.

## ARC-PORT-051 Nome Snake River: berth_count
Not attempted this cycle. The record itself notes the floats are not built yet (35% design, dredge bid early 2027), so no official as-built berth count can exist yet. A planned count would need the City of Nome or MARAD design documents.

Sync: only this Dataset copy changed. The Zo canonical and Arctic-Trade-Lanes ports.csv copies (c6e72709, matching live) should take this at the next gated properties-only rebuild. Nothing was published live.
