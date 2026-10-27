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
  const list = document.createElement('ul');
  const items = [];

  targets.forEach((el, i) => {
    if (!el.id) el.id = 'section-' + (i + 1);

    const li = document.createElement('li');
    if (el.dataset.navLevel === 'sub') li.className = 'is-sub';

    const a = document.createElement('a');
    a.href = '#' + el.id;
    a.innerHTML = '<span class="side-nav-label"></span><span class="side-nav-tick"></span>';
    a.querySelector('.side-nav-label').textContent = el.dataset.nav;

    li.appendChild(a);
    list.appendChild(li);
    items.push({ el, a });
  });

  nav.appendChild(list);
  document.body.appendChild(nav);

  function update() {
    const line = window.innerHeight * 0.4;
    let current = items[0];

    items.forEach(item => {
      if (item.el.getBoundingClientRect().top <= line) current = item;
    });

    // at the very bottom of the page, light up the last one
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      current = items[items.length - 1];
    }

    items.forEach(item => item.a.classList.toggle('is-active', item === current));
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  });
  window.addEventListener('resize', update);
  update();
})();