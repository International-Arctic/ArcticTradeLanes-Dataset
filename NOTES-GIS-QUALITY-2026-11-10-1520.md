# GIS quality loop 2026-11-10 15:20 MSK

Health: no ATL or UM drift (ATL home c24e5823, /api/health ok; UM bundle index-CuvrFAFf, geoPinned 588, peopleOnMap 476, unicorns 303).

## ARC-ICE-040 R/V Xuelong 2 (metadata-only, no geometry)
Source: China State Shipbuilding Corporation (CSSC, builder group of Jiangnan Shipyard) report dated 2019-11-08 (http://cmie.csic.com.cn/n5/n26/c15429/content.html): length 122.5 m, moulded beam 22.32 m, design draught 7.85 m, design displacement 13,996 t, speed 12-15 kn, endurance 20,000 nautical miles, 90 persons, 60 days self-sufficiency.
- operational_range_nm 35000 -> 20000 (2万海里).
- Unchanged, confirmed: length 122.5 m, beam 22.3 m (22.32), service speed 15 kn (within 12-15), PC3 structural strength (Wuhan University CHINARE news page and CANSI shipbuilding association report both say "结构强度满足PC3要求").

## Flagged, not changed
- draft_m 8.3: CANSI gives 8.3 m as the structural (scantling) draught; CSSC gives 7.85 m design draught. Column semantics undefined, same as Polarstern ARC-ICE-042.
- power_kw 15000: no official source found this run.
- year_built 2019: CSSC says delivered 12 July 2019, consistent.
