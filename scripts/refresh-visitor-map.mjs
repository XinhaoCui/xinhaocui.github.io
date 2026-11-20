import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = 'https://api.cloudflare.com/client/v4/';
const host = 'xinhaocui.github.io';
const names = new Intl.DisplayNames(['en'], { type: 'region', fallback: 'none' });
const unavailable = new Set(['XX', 'ZZ', 'EU', 'AP', 'A1', 'A2', 'T1', '']);
const nameIndex = new Map();
for (const a of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') for (const b of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  const code = a + b, label = names.of(code);
  if (label && !unavailable.has(code) && !nameIndex.has(label.toLowerCase())) nameIndex.set(label.toLowerCase(), code);
}
for (const [label, code] of Object.entries({
  'united states of america': 'US', 'russian federation': 'RU', 'south korea': 'KR',
  'republic of korea': 'KR', 'viet nam': 'VN', 'czech republic': 'CZ',
  'turkey': 'TR', 'hong kong': 'HK', 'taiwan': 'TW', 'uk': 'GB',
})) nameIndex.set(label, code);

function codeFor(value) {
  const place = String(value ?? '').trim();
  const code = place.toUpperCase();
  if (unavailable.has(code)) return null;
  return /^[A-Z]{2}$/.test(code) ? (names.of(code) ? code : null) : (nameIndex.get(place.toLowerCase()) ?? null);
}

export function makeSnapshot(account, from, through, updatedAt) {
  if (!Array.isArray(account?.countries) || !Array.isArray(account?.totals) || account.totals.length > 1 || account.countries.length >= 500) {
    throw new Error('Missing, unexpected, or truncated Cloudflare totals.');
  }
  const count = row => {
    const visits = row?.sum?.visits;
    if (!Number.isFinite(visits) || visits < 0 || !Number.isSafeInteger(Math.round(visits))) throw new Error('Invalid visit count.');
    return Math.round(visits);
  };
  let unlocatedVisits = 0;
  const regions = new Map();
  for (const row of account.countries) {
    const visits = count(row);
    if (!visits) continue;
    const code = codeFor(row.dimensions?.countryName);
    if (!code) unlocatedVisits += visits;
    else regions.set(code, (regions.get(code) ?? 0) + visits);
  }
  return {
    source: 'Cloudflare Web Analytics', from, through, updatedAt,
    totalVisits: account.totals.length ? count(account.totals[0]) : 0,
    unlocatedVisits,
    regions: [...regions].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([code, visits]) => ({ code, visits })),
  };
}

export async function readSnapshot({ token, account, beacon, now = new Date(), request = fetch }) {
  if (!/^[0-9a-f]{32}$/i.test(account ?? '') || !/^[0-9a-f]{32}$/i.test(beacon ?? '')
    || !/^[A-Za-z0-9._~-]{30,200}$/.test(token ?? '') || token === beacon) throw new Error('Invalid Cloudflare credentials or site ID.');
  async function api(path, payload) {
    const response = await request(new URL(path, root), {
      method: payload ? 'POST' : 'GET', redirect: 'error', signal: AbortSignal.timeout(20000),
      headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
      ...(payload ? { body: JSON.stringify(payload) } : {}),
    });
    if (!response.ok) throw new Error('Cloudflare request failed (HTTP ' + response.status + '). Check account and read-only permissions.');
    const json = await response.json();
    if (json.success === false || json.errors?.length) throw new Error('Cloudflare rejected the query. Check account, permissions and analytics settings.');
    return json;
  }
  let siteTag;
  for (let page = 1; page <= 10; page++) {
    const sites = await api('accounts/' + account + '/rum/site_info/list?page=' + page + '&per_page=100');
    if (!Array.isArray(sites.result)) throw new Error('Cloudflare did not return a site list.');
    const site = sites.result.find(s => s.site_token === beacon || String(s.snippet ?? '').includes(beacon));
    if (site) { siteTag = site.site_tag; break; }
    if (page >= (sites.result_info?.total_pages ?? 1)) break;
  }
  if (!/^[0-9a-f]{32}$/i.test(siteTag ?? '')) throw new Error('No Web Analytics site matches the live website beacon.');
  const utcDay = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const iso = offset => new Date(utcDay - offset * 86400000).toISOString().slice(0, 10);
  const from = iso(7), through = iso(1);
  const filter = 'siteTag: ' + JSON.stringify(siteTag) + ', requestHost: ' + JSON.stringify(host)
    + ', date_geq: ' + JSON.stringify(from) + ', date_leq: ' + JSON.stringify(through);
  const query = 'query VisitorMap { viewer { accounts(filter: { accountTag: ' + JSON.stringify(account) + ' }) {'
    + ' totals: rumPageloadEventsAdaptiveGroups(limit: 1, filter: {' + filter + '}) { sum { visits } }'
    + ' countries: rumPageloadEventsAdaptiveGroups(limit: 500, filter: {' + filter + '}) { dimensions { countryName } sum { visits } }'
    + ' } } }';
  const data = await api('graphql', { query });
  return makeSnapshot(data.data?.viewer?.accounts?.[0], from, through, now.toISOString());
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [out, beacon] = process.argv.slice(2);
  try {
    if (!out || !beacon) throw new Error('Missing output directory or site identifier.');
    const snapshot = await readSnapshot({ token: process.env.CF_ANALYTICS_TOKEN, account: process.env.CF_ACCOUNT_ID, beacon });
    await mkdir(out, { recursive: true });
    await writeFile(join(out, 'visits.json'), JSON.stringify(snapshot) + '\n', { flag: 'wx' });
    console.log('Prepared a country/region aggregate snapshot.');
  } catch (error) {
    console.error('Visitor map refresh failed: ' + (error instanceof TypeError ? 'Cloudflare connection error.' : error.message));
    process.exitCode = 1;
  }
}
