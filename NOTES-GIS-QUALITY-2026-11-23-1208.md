# GIS Quality Loop — 2026-11-23 12:08 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, /atlas.4326.geojson 1c2e6a85, live /data/ports.csv c6e72709, /api/health ok. UM bundle index-D072dq9N.js, /api/people.json 535. Arctic-Trade-Lanes at fc62d2e.

## ARC-PORT-109 Keflavík harbour (Reykjaneshöfn): max_depth_m and berth_count
| field | old | new | source |
|---|---|---|---|
| max_depth_m | NULL | 13.0 | Operator Reykjaneshöfn, https://www.reykjaneshofn.is/hafnaradstada#keflavik (read 2026-11-23): "Aðalhafnargarðurinn er með viðlegu fyrir skip allt að 165 metra að lengd með dýpi frá 7 til 13 metrum við kant" |
| berth_count | NULL | 5 | Same page: main pier plus "fjórir aðrir smærri viðlegukantar fyrir báta" (4 smaller boat berths) |

Cross-check: the mbl.is 200 mílur register (https://www.mbl.is/200milur/hafnir/hofn/21/) gives a 10.0 m depth at the quay, with a greatest depth of 10.0 m along a 150 m section, and 1,386 m of berthing faces. That is lower than the operator figure. The operator value is used and the mbl figure is recorded in sources. last_verified is now 2026-11-23. Coordinates are unchanged.

## UNECE screen (no change)
All 127 coded rows were screened by distance from the pin to the UN/LOCODE point, using the datasets/un-locode mirror. Pins that sit nearer a terminal-specific code (087 SEHAH Haraholmen, 088 SESKE Skelleftehamn, 064 FIROY Röyttä, 016 NOMLK Melkøya, 143 NORYF Rypefjord, 027/146 FIAJO Ajos, 054 FIRTR/FILLO) carry the legal port's own code. That follows the practice used for 034 and 035, so they are not mismatches. 126 NOBOG is Kystverket-sourced. NO LID "Liland" is at 6820N 01445E, which is not Evenes, so it does not apply. No new name or region mismatch was found.

Sync: only this Dataset copy changed. The Zo canonical and Arctic-Trade-Lanes ports.csv copies (c6e72709, matching live) should take this at the next gated properties-only rebuild. Nothing was published live.
