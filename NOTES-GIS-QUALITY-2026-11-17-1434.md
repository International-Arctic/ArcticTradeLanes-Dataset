# GIS Quality Loop — 2026-11-17 14:34 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, /api/health ok; UM index-D072dq9N.js, stats 630/514).

## ports.csv UN/LOCODE (metadata-only, no coordinate or geometry change)
Checked every ports.csv code against the UNECE UN/LOCODE code list (box copy fetched 2026-10-18). Two port rows carried a code
whose UNECE entry has the airport function only, while UNECE lists a separate port-function (1) code for the same place:
| id | old | UNECE entry for old | new | UNECE entry for new |
|---|---|---|---|---|
| ARC-PORT-173 Ningbo-Zhoushan Port | CNNGB | "Ningbo Lishe International Apt", function ---4---- | CNNBG | "Ningbo Pt", ZJ, function 1------- |
| ARC-PORT-109 Port of Reykjanes Keflavík Harbour | ISKEF | "Keflavík", function ---4---- (airport) | ISKEV | "Keflavikurkaupstadur", function 1------- |

Not changed (flagged only): several Alaska rows use the only UNECE code for their town even though it lacks the port function
(USBRW Barrow, USWQF Whittier, USOTZ Kotzebue, USCDB Cold Bay, USWRG Wrangell, USSWD Seward, USNIK Nikiski, USADK Adak, USVAK Chevak).
No alternative port-function code exists in the list for those places except USTBW "Point Barrow" (a different location), so they stay.

Sync: only this Dataset copy changed. The Zo canonical ports.csv and the 8 copies in International-Arctic/Arctic-Trade-Lanes
(all c6e72709, matching live) should take these two codes at the next gated properties-only rebuild.
