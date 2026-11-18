# GIS Quality Loop — 2026-11-18 12:07 MSK

## Drift check (read-only)
- arctictradelanes.com home c24e5823, atlas.3996 6f1a2927, ports.csv c6e72709 (md5), /api/health ok — unchanged.
- unicornsmap.com geoPinned 630 / peopleOnMap 514, bundle index-D072dq9N.js — unchanged.

## Change (sourced, metadata-only, no geometry)
### ARC-TNK-037 Bulknes (IMO 9384370)
- Source: time-charter manager spec sheet, Mibau Stema Group — https://www.mibau-stema.com/COM/Downloads/Vessels/M_V%20BULKNES.pdf (GL 100 A5 bulk carrier self-unloader, built 2009 at Sietas Hamburg yard 1309; LOA 175.6 m, beam 26.24 m, max draft 10.8 m, DWAT 33,170 t).
- deadweight_tonnage 55000 -> 33170; length_m 190.0 -> 175.6; beam_m 30.0 -> 26.2; draft_m 10.0 -> 10.8; year_built 2013 -> 2009.

## Flagged (not changed)
- 037 owner_operator "Grieg Star" not supported (spec sheet names Mibau Stema Danmark A/S as time-charter manager; registered owner not verified); ice_class Arc5 not supported (class notation has no ice class); country Norway vs Antigua flag.
- 036 "Afina" (Grieg Star): no matching vessel found.
- 038 "Bona Safir" (Solstad, 2008, offshore supply): the only Bona Safir found is IMO 9030228, a 1992 general cargo ship (Bontveit Rederi / Karmøy Skipsconsult) — not the same vessel. 039 "Bona Sapphire": no source except the ATL site itself. Both look like placeholders; need a decision.

## Next
- 033 Prospero, 036 Afina, 042/043 "UT 755" placeholders, 049/050 NewNew placeholders — all look unverifiable; the tankers pass is close to done. Consider a summary placeholder list for Aleksei's decision.
