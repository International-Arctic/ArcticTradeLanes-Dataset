# GIS Quality Loop 2026-11-23 10:07 MSK

Health (no drift): ATL home md5 c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709,
/atlas.4326.geojson 1c2e6a85, /api/health ok. UM bundle index-D072dq9N.js, /api/stats.json geoPinned 653 / peopleOnMap 537,
/api/radar/people.json count 535.

## icebreakers.csv: ARC-ICE-056 Mirai II (metadata-only, no geometry)

- service_speed_kn NULL -> 12. JAMSTEC (owner) research-vessel overview, Mirai II block: "巡航速力 12ノット" (cruising speed 12 kn).
  https://www.jamstec.go.jp/mare3/j/ships/research_vessel/
  Consistent with JAMSTEC's 2024-03-11 symposium deck (航海速力 12ノット程度, max 17 kn or more).
- power_kw left NULL: no single propulsion rating from builder/operator. JAMSTEC naming/launch release 2025-03-19 gives only
  generator ratings (3 x ~5,600 kW diesel + 1 x ~2,600 kW dual-fuel, i.e. ~19,400 kW installed generating power)
  https://www.jamstec.go.jp/j/jamstec_news/20250319/ ; NMRI symposium slide says 15,600 kW; ja.wikipedia says 10,996 PS (~8,090 kW).
  The figures conflict and none is a builder/operator propulsion rating, so none is used.
- operational_range_nm left NULL: no published figure found.
