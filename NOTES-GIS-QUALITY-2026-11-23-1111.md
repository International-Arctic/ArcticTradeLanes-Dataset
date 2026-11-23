# GIS Quality Loop — 2026-11-23 11:11 MSK

Health: no ATL/UM drift (ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, /atlas.4326.geojson 1c2e6a85, live /data/ports.csv c6e72709, /api/health ok; UM bundle index-D072dq9N.js unchanged, /api/people.json 535).

## ports.csv UN/LOCODE (metadata-only, no coordinate or geometry change)
ARC-PORT-072 Oksfjord Fishing Port (Loppa, Finnmark; pin 70.2379, 22.3497) carried NOOKS. In the UNECE NO list
(https://service.unece.org/trade/locode/no.htm, read 2026-11-23) NO OKS is "Oksnes", subdivision 18 (Nordland, Vesterålen),
function 1-------, so it points at a different municipality about 250 km away. The Øksfjord entry is
NO OKF "Øksfjord", subdivision 20 (Finnmark), function 1-3-----, coordinates 7014N 02220E, which matches the pin to within ~2 km.
Change: unlocode NOOKS -> NOOKF. Coordinates, sources and other fields unchanged.

Earlier code sweeps (11-09, 11-17) only checked whether codes exist or have the port function, so they missed codes that are valid but
belong to a different place. A name/subdivision cross-check of all 120 coded rows against the UNECE list found this as the only clear
Norway mismatch. Flagged only, no change: ARC-PORT-171 Port Elga (Cape Manorsky, Ayano-Maysky district) carries RUVNN "Vanino";
UNECE has no Elga or Manorsky entry, so blanking it would need a decision under the 11-09 blank-nonexistent rule.

Sync: only this Dataset copy changed. The Zo canonical ports.csv and the Arctic-Trade-Lanes copies (c6e72709, matching live) should take
this code at the next gated properties-only rebuild.
