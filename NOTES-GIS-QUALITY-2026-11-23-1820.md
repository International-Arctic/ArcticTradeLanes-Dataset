# GIS Quality Loop — 2026-11-23 18:20 MSK (UM + ATL)

## Health / drift (vs 17:42 baseline)
- ATL home md5 c24e5823, /api/health ok (ts 2026-11-23T15:14Z = 18:14 MSK), /data/atlas.3996.geojson 6f1a2927 (1317 features), /data/ports.csv c6e72709. No ATL drift.
- UM home bundle index-D072dq9N.js unchanged. /api/stats.json: geoPinned 653, peopleOnMap 537 (task baseline 630/514; +23 each). Data-count growth only; bundle unchanged.

## Theme: ports.csv max_depth_m (continued). Metadata-only, coords unchanged, LF line endings kept.
### Edit
- ARC-PORT-025 Port of Anchorage (Don Young Port of Alaska): max_depth_m 13.5 (unsourced) -> 10.67; last_verified 2026-10-13 -> 2026-11-23.
  - Source (official port authority): https://www.portofalaska.com/about/facilities/ (fetched 2026-11-23): "Four ship berths that are dredged to a published draft depth of minus-35 feet mean lower low water (MLLW)". -35 ft = 10.67 m below MLLW.
  - Corroboration: NOAA U.S. Coast Pilot 9, 2026 (44th) Edition, ch. 4 para (1701) "Facilities at Anchorage" table, https://nauticalcharts.noaa.gov/publications/coast-pilot/files/cp9/CPB9_WEB.pdf: Port of Alaska P.O.L. Terminals 1 and 2, Terminal No. 1, 2 and 3 wharves, depths 35 ft (reported).
  - Consistent with sibling ARC-PORT-113 (T1 replacement, maintained to -36 ft MLLW per USACE Section 408 request): the published depth is -35, maintenance target -36.
  - **Current** published depth, not the PAMP future-deepening figure.

## Checked, not changed
- ARC-PORT-160 Mjóeyrarhöfn 14.5: official page https://www.fjardabyggdarhafnir.is/is/fjardabyggdarhafnir/mjoeyrarhofn is self-contradictory (intro prose "dýpi 14,5 metri", quay table "Mjóeyrarbryggja 383m 14,2m Stálþil"). Left at 14.5; flag.
- ARC-PORT-067 Homer float system 7.3: Coast Pilot 9 para (1419) gives no controlling depth for the small-boat harbor (refers to chart/NTM). Deep Water Dock 40 ft and Fish Dock 20 ft are different facilities. Left.
- ARC-PORT-058 Port MacKenzie 10.7: Coast Pilot 9 table lists only the 500 ft Port Mackenzie Wharf at 20 ft (reported); deep-draft dock not listed. Left; needs Mat-Su Borough source.
- UN/LOCODE for blank 150 Pyramiden (SJ list) and 124 Søldarfjørður (FO list): no entry in official UNECE lists (service.unece.org sj.htm / fo.htm, via WebFetch; curl gets 403). Left blank.

## Flags
- 025 berth_count 5 vs official "four ship berths" (plus two petroleum terminals described separately). Not changed.
- 160 needs a decision on 14.2 (table) vs 14.5 (prose).
