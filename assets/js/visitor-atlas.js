(() => {
  'use strict';
  const atlas = document.getElementById('visitor-atlas');
  if (!atlas) return;
  const svg = atlas.querySelector('svg');
  const total = document.getElementById('visitor-total');
  const period = document.getElementById('visitor-period');
  const selection = document.getElementById('visitor-selection');
  const breakdown = document.getElementById('visitor-breakdown');
  const zoomIn = atlas.querySelector('[data-zoom="in"]');
  const zoomOut = atlas.querySelector('[data-zoom="out"]');
  const reset = atlas.querySelector('[data-zoom="reset"]');
  const nf = new Intl.NumberFormat('en');
  const countryNames = new Intl.DisplayNames(['en'], { type: 'region', fallback: 'none' });
  const shapes = new Map(), markers = new Map();
  const width = 1000, height = 470;
  let view = { x: 0, y: 0, scale: 1 };
  let drag;

  const make = (tag, attrs, label) => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
    if (label) el.textContent = label;
    return el;
  };
  const getJson = async url => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Data unavailable');
    return response.json();
  };
  const zoomed = () => view.scale > 1;
  function repaint() {
    const w = width / view.scale, h = height / view.scale;
    view.x = Math.max(0, Math.min(width - w, view.x));
    view.y = Math.max(0, Math.min(height - h, view.y));
    svg.setAttribute('viewBox', [view.x, view.y, w, h].join(' '));
    zoomOut.disabled = !zoomed();
    zoomIn.disabled = view.scale >= 5;
    reset.disabled = !zoomed();
    for (const { circle, r } of markers.values()) circle.setAttribute('r', r / view.scale);
  }
  function zoom(by) {
    const next = Math.max(1, Math.min(5, view.scale * by));
    view.x += (width / view.scale - width / next) / 2;
    view.y += (height / view.scale - height / next) / 2;
    view.scale = next;
    repaint();
  }
  zoomIn.onclick = () => zoom(1.5);
  zoomOut.onclick = () => zoom(1 / 1.5);
  reset.onclick = () => { view = { x: 0, y: 0, scale: 1 }; repaint(); };
  svg.addEventListener('pointerdown', event => {
    if (!zoomed() || event.button !== 0 || event.target.closest('.atlas-dot')) return;
    const matrix = svg.getScreenCTM();
    if (!matrix) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, vx: view.x, vy: view.y, factor: matrix.a };
    svg.setPointerCapture(event.pointerId);
  });
  svg.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) return;
    view.x = drag.vx - (event.clientX - drag.x) / drag.factor;
    view.y = drag.vy - (event.clientY - drag.y) / drag.factor;
    repaint();
  });
  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) svg.addEventListener(event, () => { drag = null; });

  function anchor(path) {
    // Use the largest polygon (not overseas territories), with a point on land.
    const chunks = path.getAttribute('d').split(/(?=M)/);
    const probe = make('path', { 'aria-hidden': 'true', visibility: 'hidden' });
    svg.append(probe);
    let box, outline, area = -1;
    const polygonArea = d => {
      const coords = [...d.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)].map(m => [Number(m[1]), Number(m[2])]);
      return Math.abs(coords.reduce((sum, [x, y], i) => {
        const [u, v] = coords[(i + 1) % coords.length];
        return sum + x * v - y * u;
      }, 0));
    };
    for (const chunk of chunks) {
      const candidate = polygonArea(chunk);
      if (candidate <= area) continue;
      probe.setAttribute('d', chunk);
      box = probe.getBBox();
      area = candidate;
      outline = chunk;
    }
    if (!box || !box.width || !box.height) { probe.remove(); return null; }
    probe.setAttribute('d', outline);
    const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
    let best = null, dist = Infinity;
    for (let row = 0; row <= 12; row++) for (let col = 0; col <= 12; col++) {
      const x = box.x + col * box.width / 12, y = box.y + row * box.height / 12;
      const rank = (x - cx) ** 2 + (y - cy) ** 2;
      if (rank >= dist || !probe.isPointInFill(new DOMPoint(x, y))) continue;
      best = [x, y]; dist = rank;
    }
    probe.remove();
    return best;
  }

  function show(code, label) {
    for (const [key, { circle }] of markers) circle.classList.toggle('atlas-dot-active', key === code);
    selection.textContent = label;
    selection.hidden = false;
  }
  async function init() {
    repaint();
    try {
      const world = await getJson(atlas.dataset.world);
      const land = make('g', { 'aria-hidden': 'true' });
      for (const [code, , outline] of world) {
        const path = make('path', { d: outline, class: 'atlas-land' });
        shapes.set(code, path);
        land.append(path);
      }
      svg.append(land);
      const data = await getJson(atlas.dataset.visits);
      if (data?.source !== 'Cloudflare Web Analytics' || !Array.isArray(data.regions)
        || !Number.isSafeInteger(data.totalVisits) || data.totalVisits < 0
        || !/^\d{4}-\d\d-\d\d$/.test(data.from) || !/^\d{4}-\d\d-\d\d$/.test(data.through)) throw new Error('Invalid snapshot');
      if (Date.now() - Date.parse(data.updatedAt) > 48 * 3600000) {
        period.textContent = 'Last available snapshot · ' + data.from + ' to ' + data.through + ' (UTC).';
      } else {
        period.textContent = data.from + ' to ' + data.through + ' (UTC) · markers represent country or region totals.';
      }
      total.textContent = nf.format(data.totalVisits) + (data.totalVisits === 1 ? ' visit' : ' visits');
      const dots = make('g', {});
      svg.append(dots);
      const top = Math.max(1, ...data.regions.map(row => row.visits));
      for (const { code, visits } of data.regions) {
        if (!/^[A-Z]{2}$/.test(code) || !Number.isSafeInteger(visits) || visits < 1) continue;
        const name = countryNames.of(code) ?? code;
        const label = name + ' · ' + nf.format(visits) + (visits === 1 ? ' visit' : ' visits');
        const shape = shapes.get(code), xy = shape && anchor(shape);
        if (xy) {
          shape.classList.add('atlas-land-active');
          const r = 7 + 6 * Math.sqrt(visits / top);
          const circle = make('circle', { cx: xy[0], cy: xy[1], r, class: 'atlas-dot', role: 'button', tabindex: 0, 'aria-label': label });
          circle.append(make('title', {}, label));
          circle.onclick = () => show(code, label);
          circle.onkeydown = event => {
            if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); show(code, label); }
          };
          markers.set(code, { circle, r });
          dots.append(circle);
        }
        const li = document.createElement('li'), button = document.createElement('button');
        button.type = 'button';
        button.textContent = label;
        button.onclick = () => show(code, label);
        li.append(button);
        breakdown.append(li);
      }
      breakdown.hidden = !breakdown.childElementCount;
      if (data.unlocatedVisits > 0) period.append(' · ' + nf.format(data.unlocatedVisits) + ' without a known location are not plotted.');
      if (!breakdown.childElementCount) show('', 'No country or region visits in this period.');
      repaint();
    } catch {
      total.textContent = 'Visit totals unavailable';
      show('', 'Cloudflare data is not available yet.');
    }
  }
  init();
})();
