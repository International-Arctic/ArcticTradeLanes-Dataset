# GIS Quality Loop: 2026-11-27 13:15 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, live /data/ports.csv c6e72709, /api/health ok (ts 2026-11-27T10:11:13Z). UM bundle index-D072dq9N.js, /api/stats.json geoPinned 653 / peopleOnMap 537.

## UN/LOCODE verification, batch 3 (GL, FO, FI, SE; DK has no rows) against the official UNECE lists
Sources: https://service.unece.org/trade/locode/gl.htm, fo.htm, fi.htm, se.htm (dk.htm not needed: no DK-coded rows), fetched 2026-11-27 via the bot web fetcher (box curl gets a 5326-byte block page). Same method as batches 1-2 (NOTES-GIS-QUALITY-2026-11-27-1215.md, -1240.md): the code exists, names the same place, and includes function 1 (port). The distance is from the row pin to the UNECE coordinate (minute precision); many GL/FO entries carry no coordinate.
No unlocode values were changed. A dated check note was appended to each row's sources field. Coordinates are unchanged.

| port_id | unlocode | UNECE entry (function, status, coord) | pin dist | result |
|---|---|---|---|---|
| 009 Nuuk Port | GLGOH | Nuuk (Godthaab) (1-34----, AI, 6411N 05145W) | 1.8 km | OK |
| 075 Nuuk Qeqertat quay | GLGOH | same | 2.4 km | OK |
| 119 Blue Water Blue Imeq (Nuuk) | GLGOH | same | 2.3 km | OK |
| 010 Sisimiut Port | GLJHS | Sisimiut (Holsteinsborg) (1--4----, AI, no coord) | n/a | OK |
| 011 Ilulissat Port | GLJAV | Ilulissat (Jakobshavn) (1--4----, AI, no coord) | n/a | OK |
| 053 Qaqortoq Port | GLJJU | Qaqortoq (Julianehaab) (1--4----, AI, no coord) | n/a | OK |
| 091 Qaqortoq Dual-Use expansion | GLJJU | same | n/a | OK |
| 062 Aasiaat Port | GLJEG | Aasiaat (Egedesminde) (1--4----, AI, no coord) | n/a | OK |
| 063 Ittoqqortoormiit (planned) | GLOBY | Illorqortoormiut (Scoresbysund) (1--4----, AI, no coord) | n/a | OK |
| 070 Maniitsoq Atlantkaj | GLJSU | Maniitsoq (Sukkertoppen) (1--4----, AI, no coord) | n/a | OK |
| 151 Kangerlussuaq Port | GLKAN | Kangerlussuaq Havn (1-------, RL, 6658N 05056W) | 10.8 km | Code OK. FLAG: the pin is about 10.8 km east of the UNECE harbour coordinate. This is more than the minute precision explains, so the pin may be on the settlement rather than the harbour. Coordinates not changed; needs a sourced pin check. (GL SFJ is the airport, function 4 only, so it does not apply) |
| 057 Tórshavn Port | FOTHO | Thorshavn (1-------, RL, 6201N 00646W) | 1.4 km | Code OK. FLAG: the list also has FO TOR "Tórshavn" (1----6--, RL, 6210N 06460W, a coordinate outside the Faroes), which looks like a duplicate. THO kept |
| 162 Fuglafjørður | FOFUG | Fuglafjørdur (1-------, RL, no coord) | n/a | OK |
| 163 Klaksvík Harbour | FOKVI | Klaksvik (1-------, RL, no coord) | n/a | OK |
| 027 Kemi Port | FIKEM | Kemi/Tornio (1-34----, AI, 6544N 02434E) | 7.8 km | Code OK. FLAG sub-site: FI AJO Ajos (1-------, RL, 6540N 02434E) is 1.9 km from the pin |
| 146 Kemi Port (Ajos) deepening | FIKEM | same | 7.9 km | Code OK. FLAG sub-site: FI AJO Ajos is 1.7 km from the pin, and this record is named for Ajos |
| 028 Oulu Port | FIOUL | Oulu (Uleåborg) (1234----, AI, 6501N 02528E) | 3.2 km | OK |
| 054 Raahe Port | FIRAA | Raahe (Brahestad) (1-------, AI, 6441N 02429E) | 4.3 km | Code OK. FLAG sub-site: FI RTR Rautaruukki (1-------, AF, 1.1 km) and FI LLO Lapaluoto (1-3-----, RL, 1.3 km) |
| 064 Port of Tornio (Röyttä) | FITOR | Tornio (Torneå) (1-------, AI, 6551N 02411E) | 10.1 km | Code OK. FLAG sub-site: FI ROY Röyttä (1-------, RL, 6545N 02410E) is 1.2 km from the pin, and this record is named for Röyttä |
| 065 Port of Kokkola | FIKOK | Kokkola (Karleby) (123-----, AI, 6350N 02307E) | 5.5 km | Code OK. FLAG sub-site: FI YXP Yxpila (123-----, RL, 6350N 02302E) is 3.6 km from the pin |
| 161 Koverhar Harbour | FIKVH | Koverhar (Koverhaara) (1-------, AI, 5952N 02313E) | 1.3 km | Code OK. Scope note: the site is at 59.88N, the same kind of owner-scope question as 135/172 |
| 029 Luleå Port | SELLA | Luleå (1--4----, AA, 6535N 02209E) | 6.2 km | OK (the coordinate is the town) |
| 087 Port of Piteå (Haraholmen) | SEPIT | Piteå (123-----, AA, 6520N 02130E) | 12.6 km | Code OK. FLAG sub-site: SE HAH Haraholmen (1-------, AA, 6514N 02139E) is 0.7 km from the pin, and this record is named for Haraholmen |
| 088 Port of Skellefteå (Skelleftehamn) | SESFT | Skellefteå (1234----, AA, 6446N 02057E) | 17.2 km | Code OK. FLAG sub-site: SE SKE Skelleftehamn (1-------, AA, 6441N 02114E) is 0.9 km from the pin, and this record is named for Skelleftehamn |

24 rows checked. No code is wrong, so nothing was blanked or replaced. Sub-site codes are flagged only and need an owner decision on whether to switch 087→SEHAH, 088→SESKE, 064→FIROY and 146→FIAJO.

With batch 3, every IS, NO, GL, FO, FI and SE coded row is checked. Next: the remaining country codes (RU, US, CA, SJ, etc.) via ru.htm/us.htm/ca.htm, then a sourced pin check for 151 Kangerlussuaq.

Sync: only this Dataset copy changed. Nothing was published live. No atlas rebuild.
