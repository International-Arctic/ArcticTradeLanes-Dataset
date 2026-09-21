#!/usr/bin/env node
/** CI lock: ARC-SHIP-026 Kleven Verft densified off soft 62.35/6.15 onto WD Q1774285 P625; ≠ ARC-SHIP-072. */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const csv = readFileSync(join(root, 'shipbuilding_facilities.csv'), 'utf8');
const lines = csv.trim().split(/\r?\n/);
const header = lines[0].split(',');
const latIdx = header.indexOf('latitude');
const lonIdx = header.indexOf('longitude');
const idIdx = header.indexOf('shipyard_id');
const srcIdx = header.indexOf('sources');

function parseRow(line) {
  const cols = [];
  let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { inQ = !inQ; continue; }
    if (c === ',' && !inQ) { cols.push(cur); cur = ''; continue; }
    cur += c;
  }
  cols.push(cur);
  return cols;
}

function find(id) {
  for (const line of lines.slice(1)) {
    const cols = parseRow(line);
    if (cols[idIdx] === id) return cols;
  }
  return null;
}

const row = find('ARC-SHIP-026');
const row072 = find('ARC-SHIP-072');
if (!row) { console.error('ARC-SHIP-026 missing'); process.exit(1); }
if (!row072) { console.error('ARC-SHIP-072 missing'); process.exit(1); }

const lat = Number(row[latIdx]);
const lon = Number(row[lonIdx]);
const src = row[srcIdx] || '';
const TARGET = { lat: 62.32329874, lon: 5.84101439 };
const GY = { lat: Number(row072[latIdx]), lon: Number(row072[lonIdx]) };
const eps = 1e-5;

if (Math.abs(lat - TARGET.lat) > eps || Math.abs(lon - TARGET.lon) > eps) {
  console.error('ARC-SHIP-026 densify lock failed', { lat, lon, TARGET });
  process.exit(1);
}
if (Math.abs(lat - 62.35) < 0.01 && Math.abs(lon - 6.15) < 0.01) {
  console.error('ARC-SHIP-026 still on soft pin');
  process.exit(1);
}
if (Math.abs(lat - GY.lat) < 1e-4 && Math.abs(lon - GY.lon) < 1e-4) {
  console.error('ARC-SHIP-026 must stay distinct from ARC-SHIP-072', { lat, lon, GY });
  process.exit(1);
}
if (!src.includes('Q1774285') || !src.includes('gis-densify-1113')) {
  console.error('ARC-SHIP-026 sources lock failed', src.slice(0, 200));
  process.exit(1);
}
console.log('check-ship026-kleven-densify: pass', { lat, lon, gy: GY });
