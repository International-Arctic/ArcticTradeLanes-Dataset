# GIS Quality Loop: 2026-11-27 14:05 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, live /data/ports.csv c6e72709, /api/health ok (ts 2026-11-27T11:06:03Z). UM bundle index-D072dq9N.js.

## UN/LOCODE verification, batch 5 (RU rows not checked before; 14 rows)
15 of the 29 RU-coded rows already carry UNECE check notes from 2026-11-09 and 2026-11-23 cycles (004-008, 033-036, 043-045, 148, 166, 171) and were not redone. The remaining 14 were checked against the datasets/un-locode mirror of the official UNECE list (https://github.com/datasets/un-locode, code-list.csv, last updated 2026-11-01), because the official ru.htm page is too long for the bot fetcher. The test is the same: the code exists, names the same place, and includes function 1 (port).
No unlocode values were changed. Coordinates are unchanged. A dated note was appended to each row's sources field.

| port_id | unlocode | entry (function, status, coord) | pin dist | result |
|---|---|---|---|---|
| 001 Murmansk Commercial Sea Port | RUMMK | Murmansk (1--4----, AI) | n/a | OK |
| 132 Murmansk NSR container terminal | RUMMK | same | n/a | OK (terminal inside Murmansk port) |
| 002 Arkhangelsk Sea Port | RUARH | Arkhangelsk (1--4----, AI) | n/a | OK |
| 073 Arkhangelsk deep-water port (planned) | RUARH | same | n/a | OK (no separate code exists) |
| 003 Dudinka | RUDUD | Dudinka (1-------, QQ) | n/a | OK |
| 030 Kaliningrad | RUKGD | Kaliningrad (1--4----, AI) | n/a | OK |
| 041 Mys Shmidta | RUMSH | Mys Shmidta (1-3-----, RL, 6853N 17926W) | 1.3 km | OK |
| 042 Egvekinot | RUEGV | Egvekinot (1-------, QQ) | n/a | OK |
| 121 DP World Vladivostok (planned) | RUVVO | Vladivostok (12-4----, AI) | n/a | OK |
| 128 Indiga deep-water port (planned) | RUIDG | Indiga (1-------, RL, 6739N 04901E) | 50.6 km | Code OK. The UNECE point is Indiga village; the pin is on the planned port site at Cape Rumyanichny (planned-port rule), so the distance is expected |
| 130 Korsakov | RUKOR | Korsakov (1-------, QQ) | n/a | OK |
| 156 Liinakhamari | RULNR | Linakhamari (1-------, QQ) | n/a | OK |
| 167 Petropavlovsk-Kamchatsky | RUPKC | Petropavlovsk-Kamchatskiy (1--4----, AI) | n/a | OK |
| 169 Korf Bay hub (planned) | RUKRF | Korf (1-------, RL) | n/a | OK |

With this batch, every RU-coded row has a check note. Next: US rows without a note (025, 026, 051, 056, 058, 059, 067, 074, 084, 085, 086, 098, 106, 107, 108, 113, 115, 170), then a sourced pin check for 151 Kangerlussuaq.

Sync: only this Dataset copy changed. Nothing was published live. No atlas rebuild.
