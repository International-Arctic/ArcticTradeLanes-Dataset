#!/usr/bin/env node
/** CI lock: ARC-PORT-086 Wrangell densified off soft 56.385/-132.355 onto OSM way/240047996. */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const candidates = [
  join(here, 'ports.csv'),
  join(here, 'dataset', 'ports.csv'),
  join(here, '..', 'dataset', 'ports.csv'),
  join(here, '..', 'ports.csv'),
];
const path = candidates.find((p) => existsSync(p));
if (!path) { console.error('ports.csv not found'); process.exit(1); }
const csv = readFileSync(path, 'utf8');
const lines = csv.trim().split(/\r?\n/);
const header = lines[0].split(',');
const latIdx = header.indexOf('latitude');
const lonIdx = header.indexOf('longitude');
const idIdx = header.indexOf('port_id');
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

const row = find('ARC-PORT-086');
if (!row) { console.error('ARC-PORT-086 missing'); process.exit(1); }

const lat = Number(row[latIdx]);
const lon = Number(row[lonIdx]);
const src = row[srcIdx] || '';
const TARGET = { lat: 56.3961351, lon: -132.3404270 };
const eps = 1e-5;

if (Math.abs(lat - TARGET.lat) > eps || Math.abs(lon - TARGET.lon) > eps) {
  console.error('ARC-PORT-086 densify lock failed', { lat, lon, TARGET });
  process.exit(1);
}
if (Math.abs(lat - 56.385) < 0.001 && Math.abs(lon - (-132.355)) < 0.001) {
  console.error('ARC-PORT-086 still on soft pin');
  process.exit(1);
}
if (!src.includes('240047996') || !src.includes('gis-densify-0926')) {
  console.error('ARC-PORT-086 sources lock failed', src.slice(0, 240));
  process.exit(1);
}
console.log('check-port086-wrangell-densify: pass', { lat, lon, csv: path });
