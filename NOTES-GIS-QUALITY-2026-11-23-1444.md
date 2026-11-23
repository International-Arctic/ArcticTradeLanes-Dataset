# GIS Quality Loop — 2026-11-23 14:44 MSK

Health: no drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927 (1317 features), live /data/ports.csv c6e72709, /api/health ok (2026-11-23T11:43Z). UM bundle index-D072dq9N.js; /api/stats.json geoPinned 653, peopleOnMap 537; /api/people.json 535. Matches the 14:12 baseline.

## ARC-PORT-156 Liinakhamari (Western Gate) Transshipment Terminal: unlocode
| field | old | new | source |
|---|---|---|---|
| unlocode | (empty) | RULNR | Official UNECE UN/LOCODE RU list, https://service.unece.org/trade/locode/ru.htm (live, read 2026-11-23 via WebFetch): "RU LNR, Linakhamari, function 1------- (port), status QQ, date 8012, no coordinates". |

- "Linakhamari" is the UNECE transliteration of Liinakhamari (Pechenga Bay, Murmansk Oblast). It is the only entry for this place name in the RU list. Port function 1.
- Caveat: status QQ means the original 1980 entry has not been re-verified by UNECE. The entry has no coordinates, so there is nothing to compare against the pin.
- last_verified 2026-09-14 -> 2026-11-23. Coordinates, confidence and other fields are unchanged.

## RU blank-unlocode ports: checked against the same live ru.htm, not applied
- 118 Bukhta Sever, 142 Chaika, 137 Utrenniy, 147 Naiba, 046 Zhelaniye, 047 Nordvik, 048 Wrangel, 049 Franz Josef Land: no UNECE entry.
- 099 Pevek Cape Nagleynyn: RU PWE Pevek (1--4----) exists, but the terminal is about 40 km west of Pevek town. The code is a city or port-area code, so it is not a clear match. Left empty.
- 050 Novaya Zemlya Ports (pin near Belushya Guba): RU BEL "Belushye" (1-------, QQ 9207, no coordinates, no subdivision) is ambiguous. Left empty.
- 031 and 164 Lavna, 157 Murmansk Arctic Gate: RU MMK Murmansk could apply as the port-area code (001, 035 and 132 already use RUMMK). This is a policy choice, not a location match. Left empty pending a decision.

## 129 St. Anthony (CA)
- WebFetch of ca.htm still truncates at about 100 KB ("Innisfail"). The datasets/un-locode GitHub mirror (code-list.csv, last commit 2026-11-01) lists "CA SAT, Saint-Anthony, NL, AI, 1-34----, 1101, IATA YAY, 5123N 05536W". This is a lead only; it was not applied because it is not the official page.

Sync: only this Dataset copy (root ports.csv) changed. It should be published together with 148 RUURA and 102 CABRT at the next gated properties-only rebuild. Nothing was published live.
