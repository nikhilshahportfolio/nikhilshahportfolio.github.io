const headerHTML = `
  <header class="navbar">
    <nav>
      <ul class="headings">
        <li><a href="index.html">Nikhil shah</a></li>
        <li><a href="aechlabs.html">Aechlabs</a></li>
        <li><a href="https://www.are.na/aech">Are.na</a></li>
      </ul>
    </nav>
    <hr>
    <div class="live-clock">
      <span id="clockDate"></span>
      <span class="clock-line"></span>
      <span id="clockTime"></span>
    </div>
  </header>
`;

const headerSlot = document.getElementById('site-header');
if (headerSlot) headerSlot.innerHTML = headerHTML;

function updateClock() {
  const dateEl = document.getElementById('clockDate');
  const timeEl = document.getElementById('clockTime');
  if (!dateEl || !timeEl) return;

  const now = new Date();
  const tz = 'Asia/Kolkata';

  const monthDay = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: tz });
  const weekday = now.toLocaleDateString('en-US', { weekday: 'short', timeZone: tz });
  const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz });

  dateEl.textContent = monthDay + ', ' + weekday;
  timeEl.textContent = time + ' IST';
}

updateClock();
setInterval(updateClock, 1000);


(function buildSideNav() {
  const targets = document.querySelectorAll('[data-nav]');
  if (targets.length < 2) return;

  const nav = document.createElement('nav');
  nav.className = 'side-nav';
  nav.setAttribute('aria-label', 'Page sections');
  const items = [];

  targets.forEach((el, i) => {
    if (!el.id) el.id = 'section-' + (i + 1);

    const a = document.createElement('a');
    a.href = '#' + el.id;
    a.className = 'side-nav-link' + (el.dataset.navLevel === 'sub' ? ' is-sub' : '');
    a.textContent = el.dataset.nav;
    nav.appendChild(a);

    const h = el.querySelector('.cs-head, .project-title, .about-head, h4');
    if (h) h.classList.add('nav-heading');
    items.push({ el, a, h });
  });

  document.body.appendChild(nav);

  // each label sits beside its heading and scrolls with the page.
  // once it reaches the top it stops there and stacks under the ones before it.
  const TOP = 24;    // y of the first stacked label
  const STEP = 18;   // gap between stacked labels
  const LEFT = 24;   // must match .side-nav-link left in css

  function midOffset(item) {
    if (!item.h) return 40;
    const cs = getComputedStyle(item.h);
    const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.3;
    return parseFloat(cs.paddingTop) + lh / 2;
  }

  // length of the dotted line: from the end of the label to the heading
  function setReach() {
    items.forEach(item => {
      if (!item.h) return;
      const labelRight = LEFT + item.a.offsetWidth + 12;
      const len = item.h.getBoundingClientRect().left - labelRight - 10;
      item.h.style.setProperty('--reach', Math.max(16, len) + 'px');
    });
  }

  function update() {
    const line = window.innerHeight * 0.4;
    let current = items[0];

    items.forEach((item, i) => {
      const base = (item.h || item.el).getBoundingClientRect().top + midOffset(item);
      const slot = TOP + i * STEP;
      const pinned = base <= slot;

      item.a.style.transform = 'translateY(' + Math.max(base, slot) + 'px)';
      item.a.classList.toggle('is-pinned', pinned);
      if (item.h) item.h.classList.toggle('is-pinned', pinned);

      if (item.el.getBoundingClientRect().top <= line) current = item;
    });

    // at the very bottom of the page, light up the last one
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      current = items[items.length - 1];
    }

    items.forEach(item => {
      item.a.classList.toggle('is-active', item === current);
      if (item.h) item.h.classList.toggle('is-active-head', item === current);
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  });
  window.addEventListener('resize', () => { setReach(); update(); });
  window.addEventListener('load', () => { setReach(); update(); });
  setReach();
  update();
})();


// aechlabs: put the newest project first, using the date text in .lx-year
// understands "nov 2024", "2024", and "2025-26" (uses the later year). no month = january of that year.
(function labSort() {
  const grid = document.querySelector('.lx-grid');
  if (!grid) return;
  const MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

  function when(card) {
    const el = card.querySelector('.lx-year');
    const text = el ? el.textContent.toLowerCase() : '';
    const years = text.match(/\d{2,4}/g);
    if (!years) return 0;                       // no date: goes to the bottom
    let year = years[years.length - 1];
    if (year.length === 2) year = years[0].slice(0, 2) + year;   // "2025-26" -> 2026
    const m = MONTHS.findIndex(name => text.includes(name));
    return Number(year) * 100 + (m === -1 ? 1 : m + 1);
  }

  const cards = Array.from(grid.querySelectorAll('.lx-card'));
  cards
    .map((card, i) => ({ card, i, t: when(card) }))
    .sort((a, b) => b.t - a.t || a.i - b.i)     // same date: keeps the order in the html
    .forEach(item => grid.appendChild(item.card));
})();

// aechlabs: click a project to open its small window (native <dialog>, no animation)
(function labDialog() {
  const grid = document.querySelector('.lx-grid');
  const dlg = document.getElementById('lxDialog');
  if (!grid || !dlg || typeof dlg.showModal !== 'function') return;

  const $ = id => document.getElementById(id);
  let slides = [];
  let index = 0;
  let loopClips = false;   // card has data-loop: its clips play like gifs (muted, looping, no controls)

  const VIDEO = /\.(mp4|webm|mov|m4v)$/i;   // anything else is treated as an image

  const VIMEO = /vimeo\.com\/(?:video\/)?(\d+)/i;  // vimeo links play in an embedded player

  function show(i) {
    index = (i + slides.length) % slides.length;
    const src = slides[index];
    const vimeo = src.match(VIMEO);
    const isVideo = !vimeo && VIDEO.test(src);
    const v = $('lxVideo');
    const embed = $('lxEmbed');

    v.pause();
    $('lxImg').hidden = isVideo || !!vimeo;
    v.hidden = !isVideo;
    embed.hidden = !vimeo;
    if (!vimeo) embed.removeAttribute('src');   // unloading the player stops its sound

    if (vimeo) {
      embed.src = 'https://player.vimeo.com/video/' + vimeo[1] + '?dnt=1&title=0&byline=0&portrait=0';
    } else if (isVideo) {
      v.controls = !loopClips;
      v.muted = v.loop = v.autoplay = loopClips;
      v.src = src;
      if (loopClips) v.play().catch(() => {});
    } else {
      v.removeAttribute('src');
      v.load();
      $('lxImg').src = src;
    }
    $('lxCount').textContent = (index + 1) + ' / ' + slides.length;
  }

  grid.addEventListener('click', e => {
    const card = e.target.closest('.lx-card');
    if (!card) return;
    e.preventDefault();

    loopClips = 'loop' in card.dataset;
    const img = card.querySelector('img');
    const desc = card.querySelector('.lx-desc');

    // first slide is the card image, the rest come from data-images (comma separated)
    // data-skip-thumb: the card image is only a poster, so open straight on the clip
    const first = img && !('skipThumb' in card.dataset) ? img.getAttribute('src') : '';
    slides = first ? [first] : [];   // an empty thumbnail is skipped
    if (card.dataset.images) {
      card.dataset.images.split(',').forEach(s => {
        s = s.trim();
        if (s) slides.push(s);
      });
    }
    if (!slides.length) slides = [''];
    $('lxImg').alt = img ? img.alt : '';
    $('lxSlides').hidden = slides.length < 2;
    show(0);

    // copy the nodes, not just the text, so italic hindi words stay italic in the window
    $('lxTitle').replaceChildren(...Array.from(card.querySelector('.lx-name').childNodes, n => n.cloneNode(true)));
    $('lxDate').textContent = card.querySelector('.lx-year').textContent;
    $('lxTags').textContent = card.querySelector('.lx-tags').textContent;
    $('lxDesc').replaceChildren(...(desc ? Array.from(desc.childNodes, n => n.cloneNode(true)) : []));

    // link only shows if the card has data-link
    const link = card.dataset.link;
    const a = $('lxLink');
    if (link) {
      a.href = link;
      a.textContent = (card.dataset.linkLabel || 'open project') + ' > >';
      a.hidden = false;
      a.toggleAttribute('data-reader', 'reader' in card.dataset);
    } else {
      a.hidden = true;
    }

    dlg.showModal();
  });

  $('lxPrev').addEventListener('click', () => show(index - 1));
  $('lxNext').addEventListener('click', () => show(index + 1));

  dlg.addEventListener('keydown', e => {
    if (slides.length < 2) return;
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  dlg.addEventListener('close', () => {   // stop the video when the window closes
    $('lxVideo').pause();
    $('lxEmbed').removeAttribute('src');
  });

  // data-reader links (the comic) open full screen inside this page instead of a new site,
  // so getting back is one tap, not flipping back through every page.
  // the iframe is made fresh each time and removed on close, so its page flips leave no back-button history.
  const reader = $('lxReader');
  $('lxLink').addEventListener('click', e => {
    const a = e.currentTarget;
    if (!a.hasAttribute('data-reader') || !reader) return;
    e.preventDefault();
    const frame = document.createElement('iframe');
    frame.src = a.href;
    frame.title = $('lxTitle').textContent;
    frame.allow = 'fullscreen';
    frame.allowFullscreen = true;
    $('lxReaderFrame').replaceChildren(frame);
    $('lxReaderOpen').href = a.href;
    reader.showModal();
    $('lxReaderBack').focus();
  });
  if (reader) {
    $('lxReaderBack').addEventListener('click', () => reader.close());
    reader.addEventListener('close', () => $('lxReaderFrame').replaceChildren());
  }

  $('lxClose').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });  // click outside closes
})();
