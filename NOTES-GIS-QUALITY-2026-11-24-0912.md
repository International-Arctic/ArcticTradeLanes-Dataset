# GIS Quality Loop — 2026-11-24 09:10 MSK (UM + ATL)

## Health / drift (vs 2026-11-23 18:40 baseline)
- ATL home 200, 111124 B, md5 c24e5823; /api/health {"status":"ok"} (ts 2026-11-24T06:11Z = 09:11 MSK); /data/atlas.3996.geojson 200, md5 6f1a2927, 1317 features; /data/ports.csv 200, md5 c6e72709. No ATL drift.
- UM home bundle index-D072dq9N.js; /api/stats.json geoPinned 653, peopleOnMap 537. No UM drift.

## Theme: ports.csv max_depth_m (continued). Metadata-only, coords unchanged, LF line endings kept.
### Edit
- ARC-PORT-029 Lulea Port: max_depth_m 14.0 (unsourced) -> 11.5; last_verified 2026-10-27 -> 2026-11-24.
  - Source (official port authority, Luleå Hamn AB): "Djupgående restriktioner", fixed 2025-06-19 by Luleå Hamn with Sjöfartsverket Lotsområde Luleå,
    https://portlulea.com/media/v5bdq2sa/kaj-info.pdf (linked from https://portlulea.com/sjotjanster/fartygsanlop/, fetched 2026-11-24).
    Sjökortsdjup (chart depth) / max draught: Sandskär Malmhamn 11,5 / 10,6 m; Victoriahamnen 0-690 m 11,5 / 10,6 m (pinned quay); Victoriahamnen 690-780 m 8,7 / 7,6 m;
    Victoriahamnen insida 7 / 6,1 m; RoRo ramp / Strömörkajen 8,4 / 7,5 m; Uddebo kaj 2 11,5 / 10,6 m; Svartökajen 11,5 / 10,6 m; Cementakajen 8,5 / 7,8 m. UKC at quay 0,9 m, mean water level (RH 2000).
  - Value is the port-wide deepest charted quay depth (same convention as ARC-PORT-012/013/172). Malmporten fairway deepening (portlulea.com/utbyggnaden-av-lulea-hamn/) is not reflected yet.

## Checked, not changed
- ARC-PORT-160 Mjóeyrarhöfn 14.5: the official Fjarðabyggðarhafnir page https://www.fjardabyggdarhafnir.is/is/fjardabyggdarhafnir/mjoeyrarhofn (fetched 2026-11-24) conflicts with itself. The prose says "Lengd bryggjukanta er 380 metrar og dýpi 14,5 metri", but the HAFNARBAKKAR table says Mjóeyrarbryggja 383 m, 14,2 m, Stálþil. No second official source was found, so the value is left as is. Flagged.

## Flags
- 160 depth: 14.5 (prose) vs 14.2 (quay table) on the same official page. Needs a rule (e.g. prefer the quay table) or the port authority.
- 172 berth_count 12 vs 19 (from 2026-11-23) is still open.
- The 029 sources text cites an older kaj-info URL (media/lntlfnju) for the pin. The current official PDF is media/v5bdq2sa (2025-06-19).
- data/ports.csv vs ports.csv still diverge for 072, 109, 148, 156, 161, 173, and now 029 depth too. These wait on the gated properties-only publish. No rebuild was done this cycle.
