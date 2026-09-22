#!/usr/bin/env node
/** GIS densify check: ARC-SHIP-016 BAE Systems Naval Ships off soft Glasgow pin onto OSM way/1310629676 Scotstoun */
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const csvPath = join(__dirname, '..', 'shipbuilding_facilities.csv');
const csv = readFileSync(csvPath, 'utf8');
const rows = parse(csv, { columns: true, skip_empty_lines: true });
const row = rows.find((r) => r.shipyard_id === 'ARC-SHIP-016');
if (!row) {
  console.error('FAIL: ARC-SHIP-016 missing');
  process.exit(1);
}
const lat = Number(row.latitude);
const lon = Number(row.longitude);
const src = row.sources || '';
const expectLat = 55.8816399;
const expectLon = -4.3656145;
const softOld = { lat: 55.86, lon: -4.25 };
const ok =
  Math.abs(lat - expectLat) < 1e-6 &&
  Math.abs(lon - expectLon) < 1e-6 &&
  src.includes('way/1310629676') &&
  src.includes('industrial=shipyard') &&
  (Math.abs(lat - softOld.lat) > 0.001 || Math.abs(lon - softOld.lon) > 0.001);
console.log(JSON.stringify({ id: 'ARC-SHIP-016', lat, lon, expectLat, expectLon, ok, srcSnippet: src.slice(-240) }, null, 2));
process.exit(ok ? 0 : 1);
