# GIS Quality Loop — 2026-11-23 13:42 MSK

Health: no ATL drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927 (1317 features), live /data/ports.csv c6e72709, /api/health ok. UM bundle is still index-D072dq9N.js. /api/stats.json geoPinned 653, peopleOnMap 537; /api/people.json 535. These are higher than the 2026-11-18 baseline (630/514/512) but match the 535 seen in the 13:09 cycle. It is a content-count increase, not a bundle change.

## ARC-PORT-148 Ura Guba (Ura Bay) LNG reloading terminal: unlocode
| field | old | new | source |
|---|---|---|---|
| unlocode | NULL | RUURA | Official UNECE UN/LOCODE RU list, https://service.unece.org/trade/locode/ru.htm (read 2026-11-23): "RU URA, Ura-Guba, function 1------- (port), status RL, date 0212, 6917N 03248E". |

- The UNECE point (69.283/32.800) is about 7.8 km SW of the Saam FSU pin (69.3375/32.9273). It agrees with the village corroboration already in the record (WD Q4411417, 69.2894/32.8006).
- The RU list has no separate Ura Bay or Arctic LNG terminal entry. The Murmansk entry (RUMMK) is not used because this is a separate bay with its own port-function code.
- last_verified is now 2026-11-23. Coordinates are unchanged.

## Also found (not applied)
- ARC-PORT-102 Qikiqtarjuaq: the cached UNECE CA list has "CA BRT Broughton Is, NU, function 1--4----, IATA YVM". Qikiqtarjuaq is on Broughton Island, and YVM is the Qikiqtarjuaq airport. Before applying, check the live ca.htm list. The row is a planned port.
- ARC-PORT-024 Prudhoe Bay West Dock: "US SCC Prudhoe Bay, AK" has function --34---- (no port function). Left NULL; it needs a decision.
- ARC-PORT-150 Pyramiden: the live UNECE SJ list has no Pyramiden entry, so it stays NULL.

Sync: only this Dataset copy (root ports.csv) changed. The Zo canonical and Arctic-Trade-Lanes ports.csv copies (c6e72709, matching live) should take this at the next gated properties-only rebuild. Nothing was published live.

Next: verify CA BRT on the live UNECE ca.htm list, then apply it to ARC-PORT-102 Qikiqtarjuaq.
