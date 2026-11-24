# GIS Quality Loop — 2026-11-24 10:08 MSK (UM + ATL)

## Health / drift (vs 2026-11-24 09:39 MSK baseline)
- ATL home 200, 111124 B, md5 c24e5823; /api/health {"status":"ok"} (ts 2026-11-24T07:06Z = 10:06 MSK); /data/atlas.3996.geojson md5 6f1a2927, 1317 features; /data/ports.csv md5 c6e72709. No ATL drift.
- UM bundle index-D072dq9N.js; /api/stats.json geoPinned 653, peopleOnMap 537. No UM drift.

## Theme: ports.csv max_depth_m (continued). Metadata-only, coords unchanged, LF endings kept, 20 fields, 156 rows.
### Edit
- ARC-PORT-027 Kemi Port (Ajos): max_depth_m 10.5 (unsourced) -> 13.5; last_verified 2026-10-26 -> 2026-11-24; berth_count 8 unchanged.
  - Port of Kemi Ltd (Kemin Satama Oy) does not publish quay depths on its own pages:
    - https://www.portofkemi.fi/en/portofkemi/portofajos/ : "six piers and a total of eight berths".
    - https://www.portofkemi.fi/satama/ajos/ (FI): "seitsemän laituria ... yhdeksän laituripaikkaa".
  - Its Maps page https://www.portofkemi.fi/kartat/ ("Väyläkortti") links the official Finnish Transport Infrastructure Agency (Väylävirasto) digital fairway card https://dvk.vaylapilvi.fi/vaylakortti/kortit/kemiv12m (Kemi Ajos fairway, card modified 2025-12-29, N2000 height system). The card's harbour "Kemin satama" (kesat12) gives these quay depths:
    - Quay 7: 420 m, 13.5 m (LP 1 + LP 2), the deepest
    - Quays 2 and 3: 178 m, 11.2 m
    - Oil terminal: 10.6 m. Quay 6: 160 m, 10.6 m
    - Quay 4: 292 m, 9.1 m. Quay 5: 179 m, 9.1 m
  - The value is quay depth (N2000), not draught.

## Flags
- 027 berth_count 8: the EN page says 6 piers / 8 berths, the FI page says 7 quays / 9 berths, and the fairway card lists 7 quays (incl. oil terminal) / 9 berth sections. Not changed.
- Still open (not redone): 160 text-vs-table depth, 172 and 028 berth_count.
- data/ports.csv vs ports.csv divergence now also covers 027 depth. This waits on the gated properties-only publish. No rebuild was done this cycle.

Sync: only this Dataset copy (root ports.csv) changed. Nothing was published live.
