# GIS Quality Loop — 2026-11-17 17:12 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, served /data/ports.csv c6e72709, /api/health ok;
UM index-D072dq9N.js, stats 630/514).

## tankers.csv (metadata-only, no geometry) — Yamal Arc7 ownership/delivery
Primary source: China LNG Shipping (CLNG, co-owner) fleet table https://www.c-lngs.com/46/ ("Yamal DSC Project" = Dynagas JV,
"Yamal TC Project" = Teekay JV, with delivery dates). Supporting: Teekay blog 2018-01-31 / 2019-12-05 (six Arc7 with JV partner
CLNG); High North News (Seapeak, Stonepeak-owned, manages the six); Maritime Executive (Teekay sold LNG business to Stonepeak,
Dynagas owns Boris Vilkitsky, Fedor Litke, Georgiy Brusilov, Boris Davydov, Nikolay Zubov).
- ARC-TNK-004 Georgiy Ushakov, 005 Yakov Gakkel, 006 Vladimir Voronin: owner "Sovcomflot (Novatek)" -> "Seapeak-CLNG JV (ex-Teekay LNG; chartered to Yamal LNG)".
- ARC-TNK-011 Eduard Toll: owner Teekay -> Seapeak-CLNG JV; year_built 2017 -> 2018 (CLNG delivery 2018-01-12).
- ARC-TNK-012 Rudolf Samoylovich: owner Teekay -> Seapeak-CLNG JV; year_built 2017 -> 2018 (CLNG delivery 2018-09-06).
- ARC-TNK-013 Nikolay Yevgenov: owner Teekay -> Seapeak-CLNG JV (2019 verified, delivery 2019-06-03).
- ARC-TNK-014 Nikolay Zubov: owner Teekay -> Dynagas-CLNG-Sinotrans JV (2019 verified, delivery 2019-02-22).
- Years verified: 004 (2019-11-06), 005 (2019-12-04), 006 (2019-08-13).

## Flagged (not changed)
- ARC-TNK-003 Fedor Litke: CLNG lists delivery 2018-01-08; RS/Offshore Energy and BV say delivered November 2017. Row keeps 2017.
- ARC-TNK-007 "Georgiy Sedov" and 008 "Yermak": not among the 15 Yamal Arc7 carriers in CLNG/Teekay/Dynagas sources; unverified.
- ARC-TNK-009 Vladimir Rusanov owner "Dynagas": not in the Dynagas five per Maritime Executive; owner needs a source.
- ARC-TNK-010 Ob River year 2018: needs a source.
- country column for Seapeak/Dynagas JV rows (Canada/Russia/Greece) is unclear (flag vs owner domicile); High North News says the
  Seapeak six are Bahamas-registered. Not changed until the column meaning is fixed.
