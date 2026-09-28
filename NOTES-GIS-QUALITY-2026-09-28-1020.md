# GIS Quality Loop — 2026-09-28 ~10:20 MSK (gis-densify-1020)

## Outcome
- **Densified ARC-SHIP-024 Ulstein Verft** off soft `62.3400,6.1400` onto Wikidata **Q2477530** P625 `62.3408333/5.8219444`.
- Official ulstein.com/contact: **Osnesvegen 110, 6065 Ulsteinvik** — OSM node/3125244133 house `62.3408460/5.8224144` (~0.03 km).
- OSM on-site: defibrillator node/14014259145 `62.3408039/5.8225373`; parking way/391644151 operator=Ulstein Verft `62.3413284/5.8243482`.
- Soft→new ≈ **16.4 km** (soft longitude error). Sibling DISTINCT: ARC-SHIP-072 ~1.35 km, ARC-SHIP-026 ~2.18 km.
- Tag `gis-densify-1020`. Soft cities empty; preferred soft ports Nuupiluk/Indiga/Ura/EMO unchanged this cycle.

## Atlas (Zo control plane)
- Rebuilt `build_atlas.py --dataset ArcticTradeLanes-Dataset`.
- `generated` **2026-09-28T07:24:14Z**, **1321** features / **70** shipyards / **156** ports / **103** cities. EPSG:3996.
- UM geo-filter stayed **0.1.4**.
