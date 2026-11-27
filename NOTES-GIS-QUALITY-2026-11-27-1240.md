# GIS Quality Loop: 2026-11-27 12:40 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, live /data/ports.csv c6e72709, /api/health ok (ts 2026-11-27T09:40:01Z). UM bundle index-D072dq9N.js, /api/stats.json geoPinned 653 / peopleOnMap 537.

## UN/LOCODE verification, batch 2 (remaining NO rows) against the official UNECE list
Source: https://service.unece.org/trade/locode/no.htm, fetched 2026-11-27 via the bot web fetcher. Same method as batch 1 (NOTES-GIS-QUALITY-2026-11-27-1215.md): the code exists, names the same place, and includes function 1 (port). The distance is from the row pin to the UNECE coordinate, which is only accurate to the minute.
No unlocode values were changed. A dated check note was appended to each row's sources field. Coordinates are unchanged.

| port_id | unlocode | UNECE entry (function, status, coord) | pin dist | result |
|---|---|---|---|---|
| 032 Vardø Harbor | NOVAO | Vardø (1-34----, AA, 7022N 03106E) | 0.9 km | OK |
| 094 Vardø ytre molo | NOVAO | same | 1.1 km | OK |
| 165 Vardø fiskerihavn | NOVAO | same | 1.0 km | OK |
| 040 Honningsvåg Port | NOHVG | Honningsvåg (1-34----, AA, 7058N 02558E) | 1.6 km | OK |
| 096 Honningsvåg new quay | NOHVG | same | 1.6 km | OK |
| 060 Kirkenes Høybukta Vest (planned) | NOKKN | Kirkenes (1-34----, AA, 6943N 03002E) | 6.2 km | OK. There is no separate official code for Høybukta. NO BJV Bjornevatn and NO JAN Jakobsnes are different places |
| 076 Kirkenes Havn KF | NOKKN | same | 1.4 km | OK. NO JAN Jakobsnes (1-------, AA) is 2.3 km away and is a different place, so it was not substituted |
| 097 Kirkenes tug services | NOKKN | same | 1.1 km | OK (same note on JAN, 2.6 km) |
| 061 Båtsfjord Port | NOBJF | Båtsfjord (1-34----, AA) | 0.5 km | OK |
| 071 Mehamn | NOMEH | Mehamn (1-34----, AA) | 0.6 km | OK |
| 072 Øksfjord | NOOKF | Øksfjord (1-3-----, RL) | 0.8 km | OK (RL) |
| 092 Sørkjosen Kai | NOSOJ | Sørkjosen (1-34----, RL) | 0.7 km | OK (RL) |
| 093 Alta Urnesbukta | NOALF | Alta (1-34----, AA) | 3.5 km | OK (the UNECE coordinate is coarse) |
| 095 Kjøllefjord | NOKJF | Kjøllefjord (1-3-----, RL) | 1.6 km | OK (RL) |
| 104 Narvik Dock 5 shiploader | NONVK | Narvik (1234----, AA, 6825N 01725E) | 1.9 km | OK |
| 136 Narvik Terminal Nord | NONVK | same | 1.0 km | OK |
| 135 Kalvåg | NOKVG | Kalvåg (1-------, AA, SubDiv 14, 6146N 00453E) | 0.4 km | Code OK. FLAG: the site is at 61.76N on the Vestland coast, south of the Arctic Circle, so its inclusion in an Arctic dataset is an owner-scope question. Nothing was changed |
| 158 Sortland Havn KF | NOSLX | Sortland (1-3-----, AA) | 0.1 km | OK |
| 159 Hadsel Havn KF (Stokmarknes) | NOSKN | Stokmarknes (1-34----, AA) | 0.7 km | OK |
| 172 Kristiansand Port | NOKRS | Kristiansand (123-----, AA) | 1.1 km | Code OK. FLAG: the site is at 58.14N, outside the Arctic, so this is the same owner-scope question as 135 |

No more specific official sub-site code applies to any of these 20 pins. The only nearby function-1 entry is Jakobsnes, which is a different place. With this batch, every NO row is checked.

Next batch: GL/DK (gl.htm/dk.htm), then FI/SE.

Sync: only this Dataset copy changed. Nothing was published live. No atlas rebuild.
