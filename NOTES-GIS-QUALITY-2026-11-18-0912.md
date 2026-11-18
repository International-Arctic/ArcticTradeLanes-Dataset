# GIS Quality Loop — 2026-11-18 09:12 MSK

Health: no ATL/UM drift (md5: ATL home c24e5823, atlas.3996 6f1a2927, /data/ports.csv c6e72709; /api/health ok;
UM index-D072dq9N.js, stats geoPinned 630 / peopleOnMap 514 — same as 2026-11-17 18:35).

## tankers.csv (metadata-only, no geometry)
- ARC-TNK-024 Nordic Odin: owner_operator NORDEN -> Pangaea Logistics Solutions (Nordic Bulk Carriers); DWT 75000 -> 76180; year 2011 -> 2015.
- ARC-TNK-025 Nordic Olympic: owner_operator NORDEN -> Pangaea Logistics Solutions (Nordic Bulk Carriers); DWT 75000 -> 76180; year 2012 -> 2015.
  Source: Pangaea owned-fleet page https://www.pangaeals.com/fleet (nordicbulkcarriers.com/fleet redirects there):
  "Nordic Odin 76,180 DWT • Panamax (Ice Class 1A) Built 2015 Oshima"; "Nordic Olympic 76,180 DWT • Panamax (Ice Class 1A) Built 2015 Oshima".
- ARC-TNK-028 Uikku (IMO 7500401, later Varzuga): DWT 16000 -> 16038; LOA 140.0 -> 164.4; beam 21.0 -> 22.2; draft 7.5 -> 9.5; year 1977 confirmed.
- ARC-TNK-029 Lunni (IMO 7421942, later Indiga): DWT 16000 -> 16168; LOA 140.0 -> 164.4; beam 22.2; draft 9.5; year 1978 -> 1976.
  Source: Murmansk Shipping Company operator fleet sheet (archived 2010-07-26)
  https://web.archive.org/web/20100726080213/http://en.fleet.msco.ru/tanker/lunni/
  (Nobiskrug, built Sept 1976 / Oct 1977; LOA 164.40, breadth 22.20, draft 9.50; DWT Indiga 16 168, Varzuga 16 038; RS ice class ULA1 = Finnish 1A Super).

## Flagged (not changed)
- 024/025 LOA 200.0 / beam 32.0 / draft 10.5 unsourced (Pangaea page gives no dimensions); ice_class "Arc4" vs source "Ice Class 1A"; cargo_type "General Cargo" but vessels are Panamax bulk carriers; country "Danish" (Nordic Bulk Carriers is Copenhagen-based, parent Pangaea) — column meaning unclear.
- 022 Nordic Barents / 023 Nordic Bothnia: not in Pangaea current owned fleet; all values unsourced (placeholder pattern identical to 024/025).
- 028/029 owner "Neste Oil" is historical only: per Wikipedia (MT Varzuga / MT Indiga) both were sold to Russian owners (renamed Varzuga/Indiga) and sold for scrap in 2021 — needs an authoritative status source before any change; row names/owner reflect the original Neste era. ice_class "Arc4" vs ULA1 (1A Super).
- 027 Stena Arctica and 030 Seival (Varo Energy) still unsourced.
- voyages/charter/insurance columns unsourced throughout.
Next: 027 Stena Arctica, 030 Seival, 022/023 identity check, then TNK-031+.
