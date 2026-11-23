# GIS Quality Loop — 2026-11-23 14:13 MSK

Health: no drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927 (1317 features), live /data/ports.csv c6e72709, /api/health ok. UM bundle is still index-D072dq9N.js. /api/stats.json geoPinned 653, peopleOnMap 537; /api/people.json 535. All match the 13:42 baseline.

## ARC-PORT-102 Qikiqtarjuaq Deep Sea Port: unlocode
| field | old | new | source |
|---|---|---|---|
| unlocode | (empty) | CABRT | Official UNECE UN/LOCODE CA list, https://service.unece.org/trade/locode/ca.htm (live, read 2026-11-23 via WebFetch): "CA BRT, Broughton Is, NU, function 1--4---- (port + airport), status AS, date 0001, IATA YVM, no coordinates". |

- Qikiqtarjuaq is the hamlet on Broughton Island, NU. YVM is the IATA code for Qikiqtarjuaq Airport. The UNECE list has no separate "Qikiqtarjuaq" entry. The record's existing notes already place the worksite on Broughton Channel.
- The UNECE entry has no coordinates, so there is nothing to compare against the pin. The row is still a planned port (phase 1 is targeted for ~2028); the code identifies the location, not a built facility.
- last_verified 2026-10-20 -> 2026-11-23. Coordinates, confidence and other fields are unchanged.

## Second gap: checked, not applied
- ARC-PORT-124 Effo Søldarfjørður (FO): the live UNECE FO list has no Søldarfjørður entry. Nearby Glyvrar (FO GLY) is -23----- with no port function, and Skáli (FO SKA) is a different village. Left empty.
- ARC-PORT-078 Finnafjörður, 090 Dysnes, 110 Galtarhöfn (IS): the live UNECE IS list has no entries for them. Left empty.
- ARC-PORT-083 Lumina White Mountain/Qartorqsuaq, 127 Nuupiluk (GL): the live UNECE GL list has no entries for them. Left empty. (For reference, GL KAN Kangerlussuaq Havn function 1, RL 1001, matches 151 GLKAN.)
- ARC-PORT-129 Crémaillère/St. Anthony NL: the WebFetch of ca.htm truncates at about 100 KB (around "Innisfail"), so entries from S onward can't be checked from it. Not checked.

Sync: only this Dataset copy (root ports.csv) changed. The Zo canonical and Arctic-Trade-Lanes ports.csv copies (c6e72709, matching live) should take this, together with 148 RUURA, at the next gated properties-only rebuild. Nothing was published live.

Next: find a way to read the rest of the UNECE CA list (S onward) for 129 St. Anthony, or take an RU-list gap (e.g. 156 Liinakhamari, 118 Bukhta Sever) from the live ru.htm.
