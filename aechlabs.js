/* Aechlabs: zoom a card into a big panel.
   Nothing to edit here. To add projects, copy a <li class="lab-card"> in aechlabs.html. */

const labCards = document.querySelectorAll('.lab-card');
let labActive = null;

labCards.forEach(card => {
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'Open ' + card.querySelector('.lab-name').textContent);

  // if an image file is missing, hide it so the colour block shows instead
  card.querySelectorAll('img').forEach(img =>
    img.addEventListener('error', () => { img.style.display = 'none'; })
  );

  card.addEventListener('click', () => labOpen(card));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); labOpen(card); }
  });
});

function labTarget() {
  const w = Math.min(1000, window.innerWidth * 0.94);
  const h = Math.min(620, window.innerHeight * 0.88);
  return { left: (window.innerWidth - w) / 2, top: (window.innerHeight - h) / 2, width: w, height: h };
}

function labSet(el, r) {
  el.style.left = r.left + 'px';
  el.style.top = r.top + 'px';
  el.style.width = r.width + 'px';
  el.style.height = r.height + 'px';
}

function labOpen(card) {
  if (labActive) return;
  const r = card.getBoundingClientRect();

  // everything in the zoomed view is read from the card in the HTML
  const name = card.querySelector('.lab-name').innerHTML;
  const date = card.querySelector('.lab-date').innerHTML;
  const tags = card.querySelector('.lab-tags') ? card.querySelector('.lab-tags').innerHTML : '';
  const img = card.querySelector('.lab-thumb img');
  const detail = card.querySelector('.lab-detail') ? card.querySelector('.lab-detail').innerHTML : '';

  const backdrop = document.createElement('div');
  backdrop.className = 'lab-backdrop';

  const panel = document.createElement('div');
  panel.className = 'lab-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.style.setProperty('--thumb-bg', card.style.getPropertyValue('--thumb-bg'));
  panel.innerHTML =
    '<button class="lab-close" aria-label="Close">x</button>' +
    '<div class="lab-panel-inner">' +
      '<div class="lab-panel-img">' + (img ? '<img src="' + img.getAttribute('src') + '" alt="">' : '') + '</div>' +
      '<div class="lab-panel-text">' +
        '<h2>' + name + '</h2>' +
        '<span class="lab-date">' + date + '</span>' +
        detail +
        '<p class="lab-tags">' + tags + '</p>' +
      '</div>' +
    '</div>';
  panel.setAttribute('aria-label', card.querySelector('.lab-name').textContent);
  const pImg = panel.querySelector('.lab-panel-img img');
  if (pImg) pImg.addEventListener('error', () => { pImg.style.display = 'none'; });

  // start exactly on the card, then grow to the centre
  labSet(panel, r);
  document.body.append(backdrop, panel);
  document.body.classList.add('lab-locked');
  card.classList.add('is-open');

  requestAnimationFrame(() => requestAnimationFrame(() => {
    backdrop.classList.add('show');
    panel.classList.add('is-full');
    labSet(panel, labTarget());
  }));

  labActive = { card, panel, backdrop, previousFocus: document.activeElement };
  backdrop.addEventListener('click', labClose);
  panel.querySelector('.lab-close').addEventListener('click', labClose);
  panel.querySelector('.lab-close').focus();
}

function labClose() {
  if (!labActive) return;
  const { card, panel, backdrop, previousFocus } = labActive;
  labActive = null;
  panel.classList.remove('is-full');
  backdrop.classList.remove('show');
  labSet(panel, card.getBoundingClientRect()); // shrink back into its cell
  let done = false;
  const cleanup = () => {
    if (done) return;
    done = true;
    panel.remove();
    backdrop.remove();
    card.classList.remove('is-open');
    document.body.classList.remove('lab-locked');
    if (previousFocus) previousFocus.focus();
  };
  panel.addEventListener('transitionend', e => { if (e.propertyName === 'width') cleanup(); });
  setTimeout(cleanup, 600);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') labClose(); });
window.addEventListener('resize', () => { if (labActive) labSet(labActive.panel, labTarget()); });
