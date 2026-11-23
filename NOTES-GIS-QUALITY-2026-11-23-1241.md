# GIS Quality Loop — 2026-11-23 12:41 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, /atlas.4326.geojson 1c2e6a85, live /data/ports.csv c6e72709, /api/health ok. UM bundle index-D072dq9N.js, /api/people.json 535. Arctic-Trade-Lanes at fc62d2e.

## ARC-PORT-112 Bolungarvíkurhöfn: max_depth_m and berth_count (commit 081e5a7)
| field | old | new | source |
|---|---|---|---|
| max_depth_m | NULL | 8.7 | Operator Bolungarvíkurkaupstaður, https://www.bolungarvik.is/stjornsysla/stofnanir/bolungarvikurhofn (read 2026-11-23): "Bryggjukantar eru alls 560 m og mesta dýpi við kant er 8,7 m, lengd á þeim kanti er 120 m" |
| berth_count | NULL | 3 | Same page: "Þrjár megin bryggjur mynda höfnina" (Brimbrjótur, Grundargarður, Lækjarbryggja). The two small-boat floating pontoons are not counted. |

Also on the page: turning basin 9 m deep and 90 m across, entrance 9.5 m. Cross-check with the mbl.is 200 mílur register (https://www.mbl.is/200milur/hafnir/hofn/69/): faces 564 m, depth at quay 8.7 m, entrance 10.0 m. Its "greatest depth 7.0 m on a 120 m section" line contradicts its own 8.7 m, so the operator value is used. last_verified is now 2026-11-23. Coordinates are unchanged.

Note: berth_count counts main piers only. The 109 Keflavík entry (5) counted smaller boat berthing faces, but floating pontoons are excluded here.

Sync: only this Dataset copy changed. The Zo canonical and Arctic-Trade-Lanes ports.csv copies (c6e72709, matching live) should take this at the next gated properties-only rebuild. Nothing was published live.
