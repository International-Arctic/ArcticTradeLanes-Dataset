# GIS Quality Loop — 2026-11-23 11:40 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, /atlas.4326.geojson 1c2e6a85, live /data/ports.csv c6e72709, /api/health ok. UM bundle index-D072dq9N.js, /api/people.json 535. Arctic-Trade-Lanes at fc62d2e.

## ARC-PORT-171 Port Elga: RUVNN kept (sources note only)
This resolves the 11:11 flag. The rule is to set the official UNECE code, or to blank it if none applies. Here the code applies:
- The live UNECE RU list (https://service.unece.org/trade/locode/ru.htm, read 2026-11-23) has no Elga or Manorsky entry. RU VNN is "Vanino", function 1------- (port), status QQ, with no coordinates.
- The Manorsky cape terminal is legally inside seaport Vanino. Mintrans order No.339 of 27-Sep-2024 put its land and water area into the Vanino port boundaries (morvesti.ru/news/1679/119986, 19-Jan-2026). Mintrans order No.431 of 23-Jun-2026 added the Manorsky berths to the Vanino port obligatory regulations (portnews.ru/news/394842, 29-Jul-2026).
- This matches the existing practice of giving a terminal its legal port's code: 034 Obskaya -> RUSAB, 035 Kola Bay -> RUMMK. The blank-nonexistent rule (cd72877 and 0c28a23) covered codes that do not exist in the list. RUVNN does exist and refers to the right legal port.
Change: a note was appended to the sources field. The unlocode, coordinates, confidence and last_verified did not change.

## ARC-PORT-161 Koverhar: FIHKO -> FIKVH
In the live UNECE FI list (https://service.unece.org/trade/locode/fi.htm, read 2026-11-23), FI HKO is the town of Hanko (Hangö): subdivision 18, function 1, AI, no coordinates. Koverhar has its own entry, FI KVH "Koverhar (Koverhaara)": subdivision 18, function 1------- (port), AI, 5952N 02313E. That point is about 1.3 km from the pin (59.8784, 23.2158). Port of Hanko runs Koverhar as a separate harbour (portofhanko.fi/en/harbours/koverhar-harbour/).
Change: unlocode FIHKO -> FIKVH. The old value is kept in sources and the coordinates are unchanged.

## Flagged, no change
- ARC-PORT-160 Mjóeyrarhöfn carries ISRFJ (Reydarfjørdur, AC). UNECE also has IS MJH "Mjoeyrarhofn" (sub 7, 1-3--67-), but its status is RQ (request under consideration), and its point 6455N 01357W is about 14 km from the surveyed quay. ISRFJ stays.

Sync: only this Dataset copy changed. The Zo canonical and Arctic-Trade-Lanes ports.csv copies (c6e72709, matching live) should take these at the next gated properties-only rebuild. Nothing was published live.
