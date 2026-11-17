# GIS Quality Loop — 2026-11-17 17:42 MSK

Health: no ATL/UM drift (ATL home md5 c24e5823, atlas.3996 md5 6f1a2927 / 1317 features, served /data/ports.csv md5 c6e72709,
/api/health ok; UM index-D072dq9N.js, stats 630/514).

## tankers.csv (metadata-only, no geometry)
- ARC-TNK-009 Vladimir Rusanov: owner "Dynagas (Novatek charter)" -> "MOL-COSCO Shipping JV (50/50; MOL-managed; chartered to Yamal LNG)".
  Sources: MOL press release 2017-12-21 https://www.mol.co.jp/en/pr/2017/17093.html (ownership MOL 50% / China COSCO Shipping 50%,
  management MOL; LOA 299.0 m, beam 50.00 m, draft 12.00 m in ice = row values); MarineLink / Seatrade Maritime 2018-03.
  year_built 2018 kept (new-vessels.com delivery 2018-01-03; MOL said delivery "end of December" 2017).

## Flagged (not changed)
- ARC-TNK-009 country "Greece": flag is HKG per new-vessels.com (IMO 9750701); country column meaning still unresolved.
- ARC-TNK-015 "Vladimir Tikhonov" (MOL, Arc7 LNG, 2021): MOL/COSCO ordered three Yamal Arc7 carriers (first Vladimir Rusanov,
  others delivered 2018/2019 per MOL); no source found for an Arc7 LNG carrier of this name. Unverified; needs a source or removal decision.
- Yamalmax DWT: new-vessels.com gives 96,844 DWT for Rusanov (row 96800 rounded, OK).
