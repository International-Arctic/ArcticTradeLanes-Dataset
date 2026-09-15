# GIS Quality — 2026-09-15 ~09:50+ MSK

- ARC-SHIP-069 densify **blocked**: Overpass named Sevgiprorybflot/Bergen Group in Murmansk = 0. Other yards (Мурманская Судоверфь way/86206897, СРЗ ММФ, 35 СРЗ, ЦСКМС way/676358072) are distinct operators — not used.
- PORT-034 / 069 / 153 re-check: harbour/pier/industrial=port = 0 (unchanged quarantine).
- Atlas **not** rebuilt. Live `generated` `2026-09-14T15:52:02Z`, 1321 features / 156 ports.
- Remaining centroid_clone: PORT-034, PORT-069, PORT-153, SHIP-069.
- OSS win: `check-shipyard-city-stack.mjs` locks the sole shipyard↔city exact stack (SHIP-069↔CITY-001 + stamp).
