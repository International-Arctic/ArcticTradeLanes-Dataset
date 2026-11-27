# GIS Quality Loop: 2026-11-27 12:15 MSK

Health: no ATL or UM drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, live /data/ports.csv c6e72709, /api/health ok. UM bundle index-D072dq9N.js, /api/stats.json geoPinned 653 / peopleOnMap 537.

## UN/LOCODE verification, batch 1 (IS and NO) against the official UNECE lists
Sources: https://service.unece.org/trade/locode/is.htm and https://service.unece.org/trade/locode/no.htm, both fetched 2026-11-27 via the bot web fetcher (box curl gets a 403 from UNECE). The datasets/un-locode mirror was not needed.
For each row, the code exists, names the same place, and includes function 1 (port). No unlocode values were changed. A dated check note was appended to each row's sources field. Coordinates are unchanged.

| port_id | unlocode | UNECE entry (function, status) | result |
|---|---|---|---|
| ARC-PORT-012 Reykjavik Port | ISREY | Reykjavík (1-------, AC) | OK |
| ARC-PORT-066 Vör Cruise Terminal | ISREY | Reykjavík (1-------, AC) | OK. ISREK does not exist in the official list, so 066/079/012 are consistent and no fix was needed |
| ARC-PORT-079 Vör / Skarfabakki | ISREY | Reykjavík (1-------, AC) | OK (see 066) |
| ARC-PORT-013 Akureyri | ISAKU | Akureyri (1-------, AC) | OK. ISAEY is the airport |
| ARC-PORT-077 Ísafjörður | ISISA | Isafjørdur - høfn (1-------, AC) | OK |
| ARC-PORT-140 Ísafjörður pier ext. | ISISA | same | OK |
| ARC-PORT-089 Grundarfjörður | ISGRF | Grundarfjørdur (1-------, AC) | OK |
| ARC-PORT-109 Keflavík harbour | ISKEV | Keflavikurkaupstadur (1-------, AC) | OK. ISKEF is the airport only (---4----) |
| ARC-PORT-111 Helguvík | ISHEL | Helguvik (1-------, RL) | OK |
| ARC-PORT-112 Bolungarvík | ISBOL | Bolungarvik (1-34----, AC) | OK |
| ARC-PORT-155 Vopnafjörður | ISVPN | Vopnafjördur (1-------, AC) | OK |
| ARC-PORT-160 Mjóeyrarhöfn | ISRFJ | Reydarfjørdur (1-------, AC) | OK, kept. FLAG: the site code ISMJH Mjoeyrarhofn (1-3--67-) is status RQ (request under consideration), so it was not substituted |
| ARC-PORT-014 Tromsø | NOTOS | Tromsø (1-34----, AI) | OK |
| ARC-PORT-139 Tromsø Havn | NOTOS | same | OK |
| ARC-PORT-015 Kirkenes | NOKKN | Kirkenes (1-34----, AA) | OK |
| ARC-PORT-018 Bodø | NOBOO | Bodø (1234----, AA) | OK |
| ARC-PORT-019 Narvik | NONVK | Narvik (1234----, AA) | OK |
| ARC-PORT-016 Hammerfest LNG (Melkøya) | NOHFT | Hammerfest (1-34----, AA) | OK as the legal-port code. FLAG: NOMLK Melkøya (1-------, RL) exists. Kept per the 2026-11-23 legal-port-code practice; owner decision needed |
| ARC-PORT-143 Polarbase (Rypefjord) | NOHFT | Hammerfest (1-34----, AA) | OK as the legal-port code. FLAG: NORYF Rypefjord (1-3-----, RL) exists. Same practice; owner decision needed |
| ARC-PORT-126 Evenes Industrial Seaport | NOBOG | Bogen (1-3-----, RL, 6831N 01659E) | Kept. FLAG: approximate, about 10 km from the Liland/Rørvika pin, with no official entry for the site (NOLID Liland is at 6820N 01445E, a different place) |

Next batch: the remaining NO rows (032/094/165 NOVAO, 040/096 NOHVG, 060/076/097 NOKKN, 061 NOBJF, 071 NOMEH, 072 NOOKF, 092 NOSOJ, 093 NOALF, 095 NOKJF, 104/136 NONVK, 135 NOKVG, 158 NOSLX, 159 NOSKN, 172 NOKRS). All of these codes were already seen in the official NO list this cycle, but their per-row place and function checks still need to be written up. After that come GL/DK and FI/SE.

Sync: only this Dataset copy changed. Nothing was published live.
