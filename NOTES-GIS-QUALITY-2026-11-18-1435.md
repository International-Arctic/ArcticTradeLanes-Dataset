# GIS Quality Loop — 2026-11-18 14:35 MSK — icebreakers.csv RS ice class labels

This change touches metadata only. No geometry was changed and there was no atlas rebuild.

Drift check: no drift. ATL home is c24e5823, /data/atlas.3996.geojson is 6f1a2927, /data/ports.csv is c6e72709 and /api/health is ok. /atlas.4326.geojson is 1c2e6a85, which is only recorded as a reference. UM is on index-D072dq9N.js, and stats show geoPinned 630 and peopleOnMap 514. /api/people.json has 512 people.

## Changes (ice_class)
| id | old | new | source |
|---|---|---|---|
| ARC-ICE-051 NS Chukotka (Project 22220) | Arc9/Polar Class 1 | Icebreaker9 | CKB Iceberg Project 22220 page, https://iceberg.org.ru/portfolio/ledokol-arktika/ : "Класс РС: КМ✪Icebreaker 9 AUT2-ICS EPP". The same page lists Chukotka as keel laid 16.12.2020 and launched 06.11.2024. This matches rows 001–004, 054 and 055. |
| ARC-ICE-006 Taymyr (IMO 8417481) | Arc9/Polar Class 1 | LL2 | RS register online, https://rs-class.org/c/getves.php?imo=8417481 : "KM(*) LL2 [2] А", class valid (checked 2026-11-18). |
| ARC-ICE-007 Vaygach (IMO 8417493) | Arc9/Polar Class 1 | LL2 | RS register online, https://rs-class.org/c/getves.php?imo=8417493 : "KM(*) LL2 [2] А", class valid and under survey. |
| ARC-ICE-009 Yamal (IMO 9077549) | Arc9/Polar Class 1 | LL1 | RS register online, https://rs-class.org/c/getves.php?imo=9077549 : "KM(*) LL1 [2] А", class valid. This uses the same style as row 008 (50 Let Pobedy, LL1). |

Label style: these rows use the bare RS category, so the values are Icebreaker9, LL1 and LL2, with no symbols or suffixes. That is the same style as the existing rows.

## Flags (not changed)
- **ARC-ICE-005 NS Rossiya (Project 10510)** still has "Arc9/Polar Class 1". It is under construction and has no RS register entry. The designer's page (iceberg.org.ru/portfolio/project-10510-lider/) does not state a class. A CRISM Prometey brochure ("Современный атомный ледокольный флот России") gives the design notation "КМ ✪ Icebreaker9 [2] AUT2-ICS EPP SDS<60 HELIDECK-H Special purpose ship «Atom»". It is a lead only, because the brochure is not from RS or the designer. Morvesti (2016) also says the original design was Icebreaker 9 and argues for a future Icebreaker 10 category. **Decision needed:** accept the Prometey design notation as Icebreaker9 (design), or wait for the RS register entry.
- Rows 006, 007 and 009 have other fields that differ from RS. These values were not changed and need a pass of their own:
  - Taymyr/Vaygach: RS gives LOA 149.70 and breadth 28.87. The CSV has 151.8 and 29.2 (Rosatomflot gives 151.8 and 29.2). Rosatomflot gives 50000 hp ≈ 36.8 MW, but the CSV power is 32500 kW.
  - Vaygach: RS gives the build date as 01.08.1990, which agrees with the CSV's 1990.
  - Yamal: RS gives LOA 150.00 and breadth 30.00. The CSV has 148.0 and 30.0 (Rosatomflot gives 147.9 and 29.9).
- The 22220 length conflict carries over: 172.7 (CKB Iceberg) vs 173.3 (Baltic Shipyard, Rosatomflot, RS 2015 press). This needs a series-wide decision.
- The Chukotka sdacha (delivery) cell on CKB Iceberg still reads "» 2026". The CSV keeps 2027, which follows the government decree used in the 13:04 cycle.

Nothing was invented, and all figures above are quoted from the sources.
