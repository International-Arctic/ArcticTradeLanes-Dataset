# GIS Quality Loop: 2026-11-27 14:36 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, live /data/ports.csv c6e72709, /api/health ok (ts 2026-11-27T11:36:31Z). UM bundle index-D072dq9N.js.

## UN/LOCODE verification, batch 6 (the 18 US rows not checked before)
023, 068, 069, 082, 100 and 123 already carry check notes from 2026-11-09. The other 18 were checked against the datasets/un-locode mirror of the official UNECE list (code-list.csv, last updated 2026-11-01), the same file used on 2026-11-09. Every code exists and names the same Alaska place. No unlocode values were changed. Coordinates are unchanged. A dated note was appended to each row's sources field.

| port_id | unlocode | entry (function, status, coord) | pin dist | result |
|---|---|---|---|---|
| 025 Port of Anchorage / 113 Cargo Terminal 1 | USANC | Anchorage (1--45---, AI) | n/a | OK |
| 026 Nome Harbor / 051 Snake River Moorage | USOME | Nome (1--4----, AI) | n/a | OK |
| 058 Port MacKenzie | USPMV | Port MacKenzie (123--6--, RL, 6116N 14955W) | 0.3 km | OK |
| 059 Skagway | USSGY | Skagway (1--4----, AI) | n/a | OK |
| 067 Homer | USHOM | Homer (1--4----, AI) | n/a | OK |
| 085 Metlakatla | USMTM | Metlakatla (1--4----, AI) | n/a | OK |
| 107 Juneau | USJNU | Juneau (1--4----, AI) | n/a | OK |
| 108 Dutch Harbor | USDUT | Dutch Harbor (1--4----, AI) | n/a | OK |
| 170 Cordova | USCDV | Cordova (1--4----, AI) | n/a | OK |
| 056 Utqiagvik | USBRW | Barrow (---4----, AI) | n/a | Place OK; FLAG no port function |
| 074 Cape Blossom | USOTZ | Kotzebue (---4----, AI) | n/a | Place OK; FLAG no port function |
| 084 Cold Bay | USCDB | Cold Bay (---4----, AI) | n/a | Place OK; FLAG no port function |
| 098 Seward | USSWD | Seward (---4----, AI) | n/a | Place OK; FLAG no port function |
| 086 Wrangell | USWRG | Wrangell (--3-----, RL, 5629N 13222W) | 9.8 km | Place OK; FLAG no port function (the pin is the 6-Mile site south of town) |
| 106 Nikiski | USNIK | Nikiski (--3-----, RL, 6040N 15121W) | 3.4 km | Place OK; FLAG no port function |
| 115 Adak | USADK | Adak Island/Adak Apt (---4----, AI) | n/a | Place OK; FLAG no port function. US AXK Adak (--3-----, RL) is 1.4 km from the pin and also has no port function; ADK kept |

The rows flagged "no port function" keep their code, because it is the only UN/LOCODE for that place. This is the same practice as 068/082 USWQF on 2026-11-09. Whether to keep or blank such codes is an owner decision; nothing was blanked.

With batch 6, every coded row in ports.csv has a UN/LOCODE check note. Next: a sourced pin check for 151 Kangerlussuaq (10.8 km from the UNECE harbour).

Sync: only this Dataset copy changed. Nothing was published live. No atlas rebuild.
