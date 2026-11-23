# GIS Quality Loop 2026-11-23 09:11 MSK

Health (no drift vs 2026-11-18 baselines): ATL home md5 c24e5823, /data/atlas.3996.geojson 6f1a2927,
/data/ports.csv c6e72709, /atlas.4326.geojson 1c2e6a85, /api/health ok.

## icebreakers.csv: ARC-ICE-022 CCGS Arpatuuq (metadata-only, no geometry)

- length_m 139.0 -> 138.5. Helsinki Shipyard (builder), 2025-11-05: "The 22,800-tonne, 138.5-meter vessel"
  https://helsinkishipyard.fi/abb-azipod-propulsion-to-power-new-canadian-icebreaker-polar-max/
- beam_m NULL -> 29.4. Tekniikka&Talous, 2026-06-03 (Helsinki Shipyard build report): "138,5 metriä pitkää ja 29,4 metriä leveää"
  https://www.tekniikkatalous.fi/uutiset/a/f41c13f5-ca49-4d51-8bb6-1e5cd3aa79bb ; also Konflikty.pl 2026-04-01.
- power_kw 18000 kept: matches the 18 MW Azipod propulsion power in the same Helsinki Shipyard release.
  (Installed generating power is higher, 4 x Wartsila 16V31; that figure is only on Wikipedia, so not used.)
- draft_m, service_speed_kn left NULL: no published figure found.
- Do NOT confuse with CCGS Imnaryuaq (Seaspan, 158.2 x 28.0 x 10.5 m, PC2; keel laid 2026-10-14 per Seaspan).
  The Knud E. Hansen HVAC PDF titled "CCGS ARPATUUQ" lists the Seaspan particulars (158.20 m), so it is not used.
  Imnaryuaq has no row in icebreakers.csv; adding one is a candidate for a later cycle.
