# GIS Quality Loop: 2026-11-27 15:13 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, live /data/ports.csv c6e72709, /api/health ok (ts 2026-11-27T12:13:51Z). UM bundle index-D072dq9N.js.

## ARC-PORT-151 Kangerlussuaq: sourced pin-move lead (not applied)
- The operator gives the port position on its page https://sikuki.gl/the-ports/port-of-kangerlussuaq/ as "Latitude: 66º96,8´N Longitude: 050º94,9´W" (about 66.968N 50.949W). This matches UNECE GL KAN "Kangerlussuaq Havn" 6658N 05056W.
- OSM at that position: man_made=pier way/188986941 (centroid 66.968470,-50.948289), the Havne Tanken fuel point node/6188583939, the ferry_terminal node/3608595131 and the harbour storage-tank farm, reached by Umiarsualiviup Aqq. (Harbour Road).
- The current pin (66.9834732,-50.6887895) is on OSM pier way/80196513 by the settlement, about 11.3 km east of the harbour quay. This is the 10.8 km UNECE gap flagged at 13:15.
- Proposed pin: 66.968470,-50.948289. No lanes.csv rows reference ARC-PORT-151.
- Not applied. A coordinate change has to go live in the same cycle, and gated atlas rebuilds are parked pending the 2026-11-25 dedupe decision (ARC-PORT-123/164). Queue this with the Homer 067 move for the next approved gated rebuild.

Sync: only a note in the Dataset ports.csv. Nothing was published live. No atlas rebuild.
