# GIS Quality Loop 2026-11-16 16:06 MSK

Health: unchanged (ATL /api/health ok, live atlas.3996 md5 6f1a2927, 1317 features; UM geoPinned 588, peopleOnMap 476).

## ARC-ICE-015 Yevpaty Kolovrat (pr. 21180M) — metadata-only, no geometry
The row had copied ARC-ICE-014 Ilya Muromets' (pr. 21180) old values; pr. 21180M is a smaller, separate design.
Sources: designer KB Vympel press release 2024-07-01, https://vympel.ru/press-center/postroennyy-po-proektu-konstruktorskogo-byuro-osk-vympel-ledokol-evpatiy-kolovrat-peredan-zakazchiku/ (accepted by the Navy 17.06.2024, built by Almaz, RS class); spec reference with that release, https://sudostroenie.info/novosti/42736.html and https://www.korabel.ru/news/comments/noveyshiy_ledokol_evpatiy_kolovrat_peredan_vmf.html (4,080 t, 82 m x 19 m, draft 4.6 m, up to 14 kn, range 7,600 nm); base Petropavlovsk-Kamchatsky (Pacific Fleet area) per https://topwar.ru/245407-kb-vympel-soobschilo-o-zavershenii-gosispytanij-i-peredache-ledokola-evpatij-kolovrat-voennym.html
- owner_operator "Northern Fleet" -> "Russian Navy (Pacific Fleet)"
- ice_class Arc7 -> Icebreaker6 (RS; Vympel states RS class, notation Icebreaker6 per register-cited references)
- length 95.0 -> 82.0, beam 22.0 -> 19.0, draft 7.0 -> 4.6 m; speed 15 -> 14 kn; range 28000 -> 7600 nm; year_built 2018 -> 2024 (delivery)
- power_kw 6400 -> NULL (copied value, no source; references give 3 x 3.5 MW diesel generators, not a propulsion rating)
- Flagged, left: primary_service_route "Coastal and River Operations" generic; charter rate unsourced (naval vessel). Map anchor not changed (no geometry in this cycle); its anchor region should be checked against the Kamchatka base in a future gated rebuild.
