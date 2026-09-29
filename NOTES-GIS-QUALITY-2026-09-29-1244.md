# GIS Quality Loop — 2026-09-29 ~12:44 MSK (gis-densify-1244)

## Outcome
- **Densified ARC-FAC-330 Greenland Mines — Sarfartoq Nd-Pr Rare Earth Project (MEL 2020-32)** off soft `61.4700,-47.0000` (SW-Greenland placeholder; ~596 km error) onto **GEUS Bulletin 17 (2009)** Sarfartoq carbonatite complex map centre **66°30′N 51°15′W = 66.5000/-51.2500** (Bedini & Tukiainen, fig.1 B).
- Soft→new ≈ **596.15 km**.
- Corroboration: OSM **node/14164746277** name=Sarfartoq (`waterway=river`) Nominatim **66.4292538/-51.5082793** (~13.91 km — same Isortoq/Sarfartoq valley family; not used as pin); company greenlandmines.com ~60 km from Kangerlussuaq/SFJ — GEUS→SFJ ≈62.5 km.
- **DISTINCT**: nearest same-class ARC-FAC-374 GAM Piiaaffik ~221 km; ARC-FAC-005 Buksefjord ~287 km. No dedicated WD P625 (Q29050345 disambiguation only).
- Tag `gis-densify-1244` (~12:44 MSK). CI lock `check-fac330-sarfartoq-densify.mjs`.
- Soft cities empty. Soft ports 127 Nuupiluk / 128 Indiga skip; EMO-166 skip. Softish shipyards 022/027/029/034 DEFER/039/052 blocked; Vard-025 quarantine; Rosatom-075 planned empty; Sevgiprorybflot-069 Issue #34; quarantine + ARC-PORT-164 untouched. Soft industry still open: 006, 008, 317, 321, 322, 324, 352 (near-duplicate of FAC-005 Buksefjord — do not conflate), 353, 354, 356 Skaergaard WD-only optional (~3.67 km Q1970121).

## Atlas
- Rebuilt via `atlas-proj/build_atlas.py --dataset ArcticTradeLanes-Dataset --out atlas-proj`.
- `generated` **2026-09-29T09:51:52Z**, **1321** features / ports **156** / shipyards **70** / cities **103** / industry **110**. CRS primary EPSG:3996.
- Static atlas aliases synced (Dataset atlas/data + site root/www/public/dist + arctic-trade-lanes dist/public/www + `/data/arctictradelanes/`) — **no SPA redeploy / App.tsx**. Restarted `svc_UpoHDo9rDHs`.

## UM ($UM-Radar)
- `@international-arctic/geo-filter` **0.1.4** left unchanged (ATL densify win shipped; UM no bump).
