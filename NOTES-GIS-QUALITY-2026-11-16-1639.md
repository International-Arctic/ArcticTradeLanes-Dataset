# GIS Quality Loop 2026-11-16 16:39 MSK

Health: unchanged (ATL /api/health ok, live atlas.3996 md5 6f1a2927, 1317 features; UM geoPinned 588, peopleOnMap 476).

## ARC-ICE-010 Ob (port icebreaker, Aker ARC 124) — metadata-only CSV change
Sources: operator Rosatomflot, https://rosatomflot.ru/flot/portoflot/ (accepted 18.10.2019; owner/operator FSUE Atomflot under the Port of Sabetta / Yamal LNG port-fleet contract to 31.12.2040; Icebreaker7; 12 MW; 89.5 x 21.9 x 7.5 m) and https://rosatomflot.ru/press-centr/novosti-predpriyatiya/2018/06/20/11189-portovyy-ledokol-ob-fgup-atomflot-spushen-na-vodu/ (builder figure LOA 89.2 m); builder Vyborg Shipyard reference list.
- primary_service_route "Gulf of Finland and Baltic" -> "Port of Sabetta and Ob Bay (Yamal LNG)" (operator states its task is the Sabetta port area)
- operational_range_nm 45000 -> NULL (no source; port icebreaker)
- Verified unchanged: Icebreaker7, 12000 kW, 89.5/21.9/7.5 m, 2019.
- Flagged, left: service speed 17 kn unsourced (no official open-water figure found); charter rate unsourced.

## Builder caveat (important for the next gated rebuild)
The live atlas places ARC-ICE-010 at schematic_route_anchor [28.0, 60.0] (Gulf of Finland), derived from the route text. Changing the route text will change this feature's anchor on rebuild, i.e. a geometry diff, so this change must NOT ride a properties-only rebuild; it needs an intentional-geometry gated rebuild (anchor should land in the Sabetta port area). Same issue pending for ARC-ICE-015 (Kola -> Petropavlovsk-Kamchatsky). ARC-ICE-011..013 also sit on the same Gulf of Finland schematic anchor; their deployment is not sourced.
