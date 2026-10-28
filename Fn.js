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

    const h = el.querySelector('.cs-head, .project-title, h4');
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