# GIS Quality Loop: 2026-11-27 13:39 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, live /data/ports.csv c6e72709, /api/health ok (ts 2026-11-27T10:39:53Z). UM bundle index-D072dq9N.js.

## UN/LOCODE verification, batch 4 (SJ, CA, KR, CN; 13 rows)
Sources: official UNECE lists https://service.unece.org/trade/locode/sj.htm, ca.htm, kr.htm, cn.htm, fetched 2026-11-27 with the bot web fetcher. The ca.htm fetch was truncated, so CA IQL, TUK and RIT were checked against the datasets/un-locode mirror (https://github.com/datasets/un-locode, code-list.csv) and labelled as such in the row notes. Method as in batches 1-3: the code exists, names the same place, and includes function 1 (port). The distance is from the row pin to the UNECE coordinate (minute precision).
No unlocode values were changed. A dated check note was appended to each row's sources field. Coordinates are unchanged.

| port_id | unlocode | entry (function, status, coord) | pin dist | result |
|---|---|---|---|---|
| 017 Longyearbyen | SJLYR | Longyearbyen (1-34----, AI, 7813N 01538E) | 1.6 km | OK |
| 144 Ny-Ålesund | SJNYA | Ny-Ålesund (1-------, AF, 7856N 01157E) | 0.7 km | OK |
| 149 Barentsburg | SJBAR | Barentsburg (1-------, AA, 7804N 01412E) | 0.3 km | OK |
| 020 Churchill | CACHV | Churchill (1--4----, AS, 5846N 09411W) | 1.2 km | OK |
| 038 Cambridge Bay | CAYCB | Cambridge Bay (1-34----, AI, 6907N 10505W) | 1.0 km | OK |
| 101 Clyde River | CACLR | Clyde River (1--4----, AS, no coord) | n/a | OK |
| 102 Qikiqtarjuaq | CABRT | Broughton Is (1--4----, AS, no coord) | n/a | OK (Broughton Island is the former name of Qikiqtarjuaq) |
| 134 Argentia | CANWP | Argentia (1-34----, AI, 4718N 05400W) | 1.2 km | OK |
| 021 Iqaluit | CAIQL | Iqaluit, ex Frobisher Bay (1-3-----, RL, 6344N 06830W) [mirror] | 1.6 km | OK |
| 022 Tuktoyaktuk | CATUK | Tuktoyaktuk (1--4----, AS, no coord) [mirror] | n/a | OK |
| 039 Rankin Inlet | CARIT | Rankin Inlet (1-3-----, RL, 6249N 09204W) [mirror] | 2.3 km | OK |
| 114 Yeongilman (Pohang) study | KRKPO | Pohang (1234----, AF, 3602N 12922E) | 9.8 km | OK. KR SHG Sinhang/Pohang also exists (10.5 km); KPO kept |
| 173 Ningbo-Zhoushan | CNNBG | Ningbo Pt (1-------, AS, 2955N 12140E) | 16.6 km | Code OK. FLAG sub-site: CN BEI Beilun (4.5 km) and CN DAX Daxie Pt (12.5 km) are closer; CN ZOS Zhoushan has no coord. Owner decision only |

13 rows checked, none wrong. Next: RU (29 rows) and US (24 rows) in two batches, then a sourced pin check for 151 Kangerlussuaq.

Sync: only this Dataset copy changed. Nothing was published live. No atlas rebuild.
