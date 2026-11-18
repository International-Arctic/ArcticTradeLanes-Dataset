# GIS Quality Loop — 2026-11-18 14:11 MSK — icebreakers.csv ARC-ICE-054 / 055

Metadata-only, no geometry. No atlas rebuild in this cycle.

## Changes
| id | field | old | new | source |
|---|---|---|---|---|
| ARC-ICE-054 NS Leningrad | ice_class | Arc9/Polar Class 1 | Icebreaker9 | CKB Iceberg project 22220 page (RS class KM✪Icebreaker9 AUT2-ICS EPP); matches sister rows ARC-ICE-001..004 |
| ARC-ICE-054 | route note | "laid down Jan 2024 …; Putin attended ceremony" | "Project 22220; keel laid 26 Jan 2024 at Baltic Shipyard; delivery planned Dec 2028" | bz.ru news 2024-01-26; iceberg.org.ru build table; RIA Novosti 2025-11-18 (USC CEO Puchkov: Dec 2028, >20% complete) |
| ARC-ICE-055 NS Stalingrad | ice_class | Arc9/Polar Class 1 | Icebreaker9 | CKB Iceberg project 22220 page |
| ARC-ICE-055 | route note | "laid down 2025, planned delivery ~2030" | "Project 22220; keel laid 18 Nov 2025 at Baltic Shipyard; delivery planned Dec 2030" | kremlin.ru 2025-11-18 (event 78486); rosatom.ru 2025-11-19; World Nuclear News 2025-05-08 (Dec 2030 delivery) |

Confirmed unchanged (054 and 055): power 60000 kW, beam 34.0, draft 10.5 (design waterline), speed 22 kn, range unlimited. Sources: kremlin.ru, RIA Novosti, CKB Iceberg. year_built stays at 2028 / 2030 (the planned delivery years).

## Flags (not changed)
- length_m 173.3: Kremlin, Rosatom and RIA give 173.3 m, but the designer (CKB Iceberg) gives "длина габаритная 172,7 м". Kept 173.3 for consistency with ARC-ICE-001..004 and the 051 row. This needs a series-wide decision.
- ARC-ICE-051 Chukotka still has "Arc9/Polar Class 1". The same fix to Icebreaker9 applies, but 051 was out of scope for this cycle.
- Milestones are not yet sourced: Stalingrad launch is reported as 2028 (WNN) and as 2029 (korabel.ru). Leningrad launch is reported as "by end of 2026" (korabel.ru), and two RITM-200 reactors were installed on 2026-08-17 (korabel.ru). These were not added to the CSV because it has no milestone column.
- charter_rate and availability are N/A or under construction, as before. Nothing was invented.
