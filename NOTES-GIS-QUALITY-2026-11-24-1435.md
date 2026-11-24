# GIS Quality Loop — 2026-11-24 14:35 MSK

## Drift check (vs 14:14 MSK baseline): NO DRIFT
- ATL `/` 200, 111124 B, md5 c24e5823; `/data/atlas.3996.geojson` 200, md5 6f1a2927, 1317 features; `/data/ports.csv` 200, md5 c6e72709; `/api/health` {"status":"ok"} (ts 2026-11-24T11:35:45Z = 14:35 MSK)
- UM (unicornsmap.com) bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-066 Vör — Reykjavík Cruise Terminal: max_depth_m 10.0 -> 12.0; last_verified 2026-11-24
  - Source: Faxaflóahafnir Port Information Guide (PDF dated 2026-09-02), https://www.datocms-assets.com/164301/1788441122-port-information-guide-faxafloahafnir.pdf
    - p.5 Reykjavík–Sundahöfn berth table: "Skarfabakki 650 m, 12.0 m" (MLWS), cruise/general cargo/bulk/trawlers (ISPS)
    - p.35 emergency plan: "VÖR Cruise Terminal — Skarfabakki 312", so the Vör terminal serves the Skarfabakki berth
  - Now matches sibling ARC-PORT-079 Skarfabakki (12, same PIG). The old 10.0 had no cited depth source.

## Verified unchanged
- ARC-PORT-065 Kokkola 14.2: Port of Kokkola "Port and terminal information guide" 6.10.2026 (https://portofkokkola.fi/wp-content/uploads/2026/10/Port-and-terminal-information-guide-6.10.2026-Port-of-Kokkola.pdf) gives Deep quay berths 10-12, 620 m, design draught 14.2 m, and channel design draught 14.2 m. Note: this is a design draught, not a charted depth; the port site says "14 m deep fairway".

## Flags / leads (not changed)
- 053 Qaqortoq 7.5: still unconfirmed. msi.geo.nga.mil Pub 181 download also failed from the box (connection 000). The NGA WPI mirror (incodocs) gives max vessel draft 6.5. Lead stays: 7.5 -> 6.6 needs a current official source.
