# GIS Quality Loop — 2026-09-22 ~17:47 MSK

## Outcome
- **Densified ARC-PORT-112 Bolungarvíkurhöfn Salmon-Industry Expansion (Iceland / Westfjords)** off soft `66.14,-23.24` onto OSM **way/207923251** `man_made=pier` center `66.1564182,-23.246515` (Bolungarvík harbour pier cluster; nearby piers ways/207923257, 208035664, 682844405, 682844406, 682844408, 682844409, 1391245265). Corroborated **Nominatim** town relation/56180 *Bolungarvíkurkaupstaður* `66.1575503/-23.2507273` + Overpass 8× `man_made=pier` around 66.15,-23.25. Soft ~2dp pin sat on town centroid; densify onto verified existing harbour pier footprint that the salmon-industry expansion uses. Label kept neutral (municipal harbour / expansion site).
- Tag `gis-densify-1747`. Softish shipyards blocked set unchanged (**13–14**). Quarantine + ARC-PORT-164 untouched.
- Skipped planned soft set (Hoybukta-060, Wrangell-086, Nuupiluk-127, Indiga-128, Ura Guba-148, EMO-166) per standing guidance. Skipped Pevek-099 (Naglyoygnyn Nominatim ~75 km off soft — needs disambiguation).

## Atlas
- Rebuilt via `atlas-proj/build_atlas.py --dataset ArcticTradeLanes-Dataset`.
- `generated` **2026-09-22T14:55:21Z**, **1321** features / **70** shipyards / **156** ports. CRS primary EPSG:3996.
- Synced root/www/public/dist/data + Dataset aliases — **no SPA redeploy / App.tsx**.

## UM
- No package bump this cycle; geo-filter left as prior **0.1.4** (no cheap client-side filter win);
  ATL densify shipped.
