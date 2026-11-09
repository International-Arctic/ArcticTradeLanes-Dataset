# GIS quality notes, 2026-11-09 18:44 MSK (gis-loop-1109-1844)

Metadata-only change to icebreakers.csv (no sources column, so provenance is recorded here). No geometry or atlas changes.

## Source
Official FSUE Atomflot "Portoflot" page, https://www.rosatomflot.ru/flot/portoflot/ (fetched 2026-11-09): port icebreaker "Ob", project Aker ARC 124, ice class Icebreaker7, 12 MW, length 89.5 m, beam 21.9 m, draft 7.5 m, keel laid 27 Sep 2016 at Vyborg Shipyard, accepted 18 Oct 2019; shipowner and operator FSUE Atomflot; serves the port of Sabetta under the Yamal LNG port-fleet contract to 31 Dec 2040.

## Corrected
- ARC-ICE-010 Ob: owner_operator FSUE Rosmorport -> FSUE Atomflot; ice_class Arc7 -> Icebreaker7; power_kw 25700 -> 12000; length_m 142.0 -> 89.5; beam_m 27.8 -> 21.9; draft_m 8.7 -> 7.5. year_built 2019 confirmed.

## Flagged, not changed
- primary_service_route still says "Gulf of Finland and Baltic"; the official page says port of Sabetta (Ob Bay). Left unchanged in this cycle because the atlas places icebreakers at schematic route anchors, so a route edit could move the point (a geometry change) at the next properties-only rebuild. Needs a deliberate geometry-gated change.
- service_speed_kn 17, operational_range_nm 45000 and charter_rate 120000-180000 are not on the page and look copied from another row.
- No Rosmorport icebreaker named "Ob" was found; the row is treated as Atomflot's port icebreaker.
