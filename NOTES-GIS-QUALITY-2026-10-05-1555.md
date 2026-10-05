# GIS Quality Loop — gis-nzport-1555 (2026-10-05 ~15:55 MSK)

Open inland ports after gis-naiba-1524: ARC-PORT-035, ARC-PORT-164, ARC-PORT-050.

## Win
| ID | Name | Before | After | Source | Shift |
|---|---|---|---|---|---|
| ARC-PORT-050 | Novaya Zemlya Ports | 73.5000 / 55.0000 (Severny Island ice-cap interior, soft) | 71.54075 / 52.336411 | Wikidata Q26324 Belushya Guba P625; OSM way/583357819 place=town Белушья Губа (Nominatim 71.5377/52.3427, ~0.4 km) | 235.3 km |
| ARC-PORT-164 | Murmansk coal terminal 'Lavna' | 69.0000 / 32.7900 (soft, ~10 km W across Kola Bay) | 69.0341207 / 33.0244586 + UNLOCODE RULAV | DUPLICATE of ARC-PORT-031 Lavna Coal Terminal (OSM way/1300372902, lock check-port031-lavna-densify.mjs) — build_atlas soft-dedupe drops the alias pin (manifest port_alias_drops: duplicate_unlocode_coord, kept ARC-PORT-031) | quarantined (10.1 km) |

Belushya Guba is the main port/settlement of Novaya Zemlya (Guba Belushya, Yuzhny Island W coast) and the operator column is "Russian Navy/Research" — settlement-level anchor. ARC-PORT-164 CSV row + rich GosKomissii/KRDV sources kept for provenance (additive); no second coincident Lavna pin.

Not moved: ARC-PORT-035 Kola Bay Fuel Terminal (69.00/33.25, RUKOT) — no verifiable fuel-terminal node; Kola Bay WD Q161591 is bay-level only; leave for next cycle.

## Live
- atlas gen **2026-10-05T12:54:09Z** (15:54 MSK), 1320 features (ports 156→155), only ARC-PORT-050 changed + ARC-PORT-164 dropped as alias; aliases synced 10 dirs bad=0; live root /atlas/* /data/* verified. No SPA redeploy.
- ports.csv patched in 6 copies (Dataset root+data, site data/dataset/public/data/dist/data), row counts unchanged (156).

## OSS publish (gis-loop-1629, ~16:30 MSK)
The 15:55 cycle shipped live but timed out before the GitHub push; this commit publishes it from the live site files (md5-verified against Zo) and the Zo ports.csv patch.
