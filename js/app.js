// ============================================================
// BUSHCRAFT FIELD GUIDE — App (main logic + renderers)
// ============================================================

import { CATEGORIES, CARDS, buildSearchIndex, getCard, getCategory, getCardsByCategory, getCategoryLabel } from '../data/content.js';
import * as db from './db.js';
import * as router from './router.js';

// ── State ─────────────────────────────────────────────────
const app    = document.getElementById('app');
const toast  = document.getElementById('toast');
const searchOverlay = document.getElementById('search-overlay');
const searchResults = document.getElementById('search-results');

let searchIndex = [];
let searchInput = null;
let toastTimer  = null;

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  searchIndex = buildSearchIndex();

  router.on('home',                 ()  => renderHome());
  router.on('cat/:catId',           (p) => renderCategory(p.catId, null));
  router.on('cat/:catId/:subId',    (p) => renderCategory(p.catId, p.subId));
  router.on('card/:cardId',         (p) => renderCard(p.cardId));
  router.on('settings',             ()  => renderSettings());

  router.start();
});

// ── Toast ─────────────────────────────────────────────────
function showToast(msg, duration = 2500) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ── Icons SVG utils ───────────────────────────────────────
const ICON = {
  back:     `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  search:   `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  close:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  camera:   `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  note:     `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  arrow:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  warn:     `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  danger:   `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  info:     `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  trash:    `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
  export:   `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  import:   `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
};

// ── Render helpers ────────────────────────────────────────
function setPage(html) {
  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function topbar(title, backHash = null, rightBtn = '') {
  return `
    <div class="topbar">
      <div class="topbar-inner">
        ${backHash ? `<button class="btn-back" onclick="router_back('${backHash}')" aria-label="Retour">${ICON.back}</button>` : ''}
        <h1 class="topbar-title">${title}</h1>
        ${rightBtn}
      </div>
    </div>`;
}

// ── HOME ──────────────────────────────────────────────────
function renderHome() {
  const catCards = CATEGORIES.map(cat => {
    const count = CARDS.filter(c => c.categoryId === cat.id).length;
    return `
      <div class="cat-card" onclick="goCategory('${cat.id}')" role="button" tabindex="0" aria-label="${cat.label}">
        <div class="cat-card-icon">${cat.icon}</div>
        <div>
          <div class="cat-card-label">${cat.label}</div>
          <div class="cat-card-count">${count} fiche${count > 1 ? 's' : ''}</div>
        </div>
      </div>`;
  }).join('');

  setPage(`
    <div class="home-header">
      <div class="home-brand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
          <path d="M20 4C15 11 12 15 13 20c.5 2.5 2 4.5 4.5 5.5-.8-2-.3-4.5 1.5-6 0 2.5 1 5 2 6.5 1-1.5 1.5-4 1.5-6 1.5 1.5 2.3 4 1.5 6C26 25 28 22.5 27 20c1-5-1-9-7-16Z" fill="#4a7c59"/>
          <path d="M20 14c-1.5 3.5-1.8 6.5-1 9.5.5 1.5 1 2.5 1 2.5s.5-1 1-2.5c.8-3 .5-6-1-9.5Z" fill="#1e3828"/>
        </svg>
        <div>
          <div class="home-brand-name">Bushcraft</div>
          <div class="home-brand-sub">Field Guide · Offline</div>
        </div>
        <button class="btn-icon" style="margin-left:auto" onclick="router.navigate('#settings')" aria-label="Paramètres">${ICON.settings}</button>
      </div>

      <div class="search-wrap">
        <span class="search-icon">${ICON.search}</span>
        <input
          id="home-search"
          class="search-input"
          type="search"
          placeholder="Rechercher…"
          autocomplete="off"
          aria-label="Recherche"
        />
        <button id="search-clear" class="search-clear hidden" aria-label="Effacer">${ICON.close}</button>
      </div>

      <div class="section-label">Catégories</div>
    </div>

    <div class="page">
      <div class="cat-grid">${catCards}</div>
    </div>

    <button class="btn-download-all" id="btn-dl-all" aria-label="Tout télécharger">
      ${ICON.download} Tout télécharger
    </button>
  `);

  // Search
  searchInput = document.getElementById('home-search');
  const clearBtn = document.getElementById('search-clear');

  searchInput.addEventListener('input', debounce(handleSearch, 200));
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) showSearchOverlay();
  });
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    hideSearchOverlay();
    searchInput.focus();
  });

  // Download all
  document.getElementById('btn-dl-all').addEventListener('click', downloadAll);
}

// ── SEARCH ────────────────────────────────────────────────
function handleSearch(e) {
  const q = e.target.value.trim();
  const clearBtn = document.getElementById('search-clear');

  if (!q) {
    clearBtn && clearBtn.classList.add('hidden');
    hideSearchOverlay();
    return;
  }

  clearBtn && clearBtn.classList.remove('hidden');
  const results = fullTextSearch(q);
  renderSearchResults(results, q);
  showSearchOverlay();
}

function fullTextSearch(q) {
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  return searchIndex
    .filter(item => words.every(w => item.searchText.includes(w)))
    .slice(0, 20);
}

function renderSearchResults(results, q) {
  if (!results.length) {
    searchResults.innerHTML = `<div class="search-empty">Aucun résultat pour « ${escHtml(q)} »</div>`;
    return;
  }

  searchResults.innerHTML = results.map(item => {
    const cat = getCategory(item.categoryId);
    const highlight = (text) => text.replace(
      new RegExp(`(${escRegex(q)})`, 'gi'),
      '<mark>$1</mark>'
    );
    return `
      <div class="search-result-item" onclick="goCard('${item.id}')" role="button" tabindex="0">
        <div class="search-result-title">${highlight(escHtml(item.title))}</div>
        <div class="search-result-cat">${cat ? cat.label : ''}</div>
      </div>`;
  }).join('');
}

function showSearchOverlay() {
  searchOverlay.classList.remove('hidden');
  // Keep search input accessible
  if (searchInput) {
    const rect = searchInput.getBoundingClientRect();
    searchOverlay.style.paddingTop = (rect.bottom + 12) + 'px';
  }
}

function hideSearchOverlay() {
  searchOverlay.classList.add('hidden');
}

// ── CATEGORY ──────────────────────────────────────────────
function renderCategory(catId, subId) {
  hideSearchOverlay();
  const cat = getCategory(catId);
  if (!cat) { router.navigate('#home', { replace: true }); return; }

  const hasSubs = cat.subcategories && cat.subcategories.length > 0;
  const activeSub = subId || (hasSubs ? cat.subcategories[0].id : null);
  const cards = getCardsByCategory(catId, activeSub);

  const tabs = hasSubs ? `
    <div class="subcats-tabs">
      ${cat.subcategories.map(sub => `
        <button class="tab-btn ${sub.id === activeSub ? 'active' : ''}"
          onclick="router.navigate('#cat/${catId}/${sub.id}')">${sub.label}</button>
      `).join('')}
    </div>` : '';

  const cardList = cards.map(card => `
    <div class="card-list-item" onclick="goCard('${card.id}')" role="button" tabindex="0">
      <div class="card-list-body">
        <div class="card-list-title">${escHtml(card.title)}</div>
        <div class="card-list-summary">${escHtml(card.summary)}</div>
      </div>
      <div class="card-list-arrow">${ICON.arrow}</div>
    </div>`).join('');

  setPage(`
    ${topbar(cat.label, '#home', `<button class="btn-icon" onclick="router.navigate('#settings')" aria-label="Paramètres">${ICON.settings}</button>`)}
    <div class="page">
      <div class="mt-16">${tabs}</div>
      <div class="card-list">${cardList || '<div style="color:var(--text-muted);padding:20px 0;text-align:center;">Aucune fiche dans cette section.</div>'}</div>
    </div>
  `);
}

// ── CARD ──────────────────────────────────────────────────
async function renderCard(cardId) {
  hideSearchOverlay();
  const card = getCard(cardId);
  if (!card) { router.navigate('#home', { replace: true }); return; }

  const cat = getCategory(card.categoryId);
  const backHash = card.subcategoryId
    ? `#cat/${card.categoryId}/${card.subcategoryId}`
    : `#cat/${card.categoryId}`;

  let innerHtml = '';

  // ── Tags
  if (card.tags && card.tags.length) {
    const tagClass = (t) => {
      const tl = t.toLowerCase();
      if (tl.includes('danger') || tl.includes('toxique') || tl.includes('mortelle')) return 'danger';
      if (tl.includes('comestible') || tl.includes('médicinal') || tl.includes('amadou')) return 'accent';
      return '';
    };
    innerHtml += `<div class="card-tags">${card.tags.map(t => `<span class="pill ${tagClass(t)}">${escHtml(t)}</span>`).join('')}</div>`;
  }

  // ── Titre
  innerHtml += `<h2 class="card-title">${escHtml(card.title)}</h2>`;
  if (card.nameLatin) innerHtml += `<div class="card-latin">${escHtml(card.nameLatin)}</div>`;
  innerHtml += `<p class="card-summary">${escHtml(card.summary)}</p>`;

  // ── Technique : conditions + besoins
  if (card.type === 'technique' || card.type === 'noeud') {
    if (card.conditions && card.conditions.length) {
      innerHtml += `
        <div class="card-section">
          <div class="card-section-title">Conditions</div>
          <div class="pills">${card.conditions.map(c => `<span class="pill">${escHtml(c)}</span>`).join('')}</div>
        </div>`;
    }
    if (card.needs && card.needs.length) {
      innerHtml += `
        <div class="card-section">
          <div class="card-section-title">Ce qu'il te faut</div>
          <div class="pills">${card.needs.map(n => `<span class="pill accent">${escHtml(n)}</span>`).join('')}</div>
        </div>`;
    }
    if (card.usages && card.usages.length) {
      innerHtml += `
        <div class="card-section">
          <div class="card-section-title">Usages</div>
          <div class="pills">${card.usages.map(u => `<span class="pill accent">${escHtml(u)}</span>`).join('')}</div>
        </div>`;
    }
  }

  // ── Naturel : photo + description + infoGrid
  if (card.type === 'naturel') {
    innerHtml += await renderMediaSection(card);

    if (card.description) {
      innerHtml += `<div class="card-section"><p style="font-size:15px;line-height:1.65;color:var(--text-muted)">${escHtml(card.description)}</p></div>`;
    }

    if (card.infoGrid && card.infoGrid.length) {
      innerHtml += `
        <div class="card-section">
          <div class="card-section-title">Informations</div>
          <div class="info-grid">
            ${card.infoGrid.map(cell => `
              <div class="info-cell">
                <div class="info-cell-label">${escHtml(cell.label)}</div>
                <div class="info-cell-value">${escHtml(cell.value)}</div>
              </div>`).join('')}
          </div>
        </div>`;
    }
  }

  // ── Étapes
  if (card.steps && card.steps.length) {
    innerHtml += `
      <div class="card-section">
        <div class="card-section-title">${card.type === 'naturel' ? 'Préparation' : 'Étapes'}</div>
        <div class="steps">
          ${card.steps.map((step, i) => `
            <div class="step">
              <div class="step-num">${i + 1}</div>
              <div class="step-text">${escHtml(step)}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  // ── Points d'attention
  if (card.attention && card.attention.length) {
    innerHtml += `
      <div class="card-section">
        <div class="block-attention">
          <div class="block-attention-title">${ICON.warn} Points d'attention</div>
          <ul>${card.attention.map(a => `<li>${escHtml(a)}</li>`).join('')}</ul>
        </div>
      </div>`;
  }

  // ── SVG illustration
  if (card.svgIllustration) {
    innerHtml += `
      <div class="card-section">
        <div class="card-section-title">Illustration</div>
        <div class="card-illustration">${card.svgIllustration}</div>
      </div>`;
  }

  // ── Confusions dangereuses
  if (card.confusions && card.confusions.length) {
    innerHtml += `
      <div class="card-section">
        <div class="block-danger">
          <div class="block-danger-title">${ICON.danger} Confusions dangereuses</div>
          <ul>${card.confusions.map(c => `<li><strong>${escHtml(c.name)}</strong> — ${escHtml(c.risk)}</li>`).join('')}</ul>
        </div>
      </div>`;
  }

  // ── Certitude
  if (card.certitude) {
    innerHtml += `
      <div class="card-section">
        <div class="block-certitude">
          <div class="block-certitude-icon">${ICON.info}</div>
          <div>${escHtml(card.certitude)}</div>
        </div>
      </div>`;
  }

  // ── Note personnelle (placeholder, hydraté après)
  innerHtml += `
    <div class="card-section">
      <div class="card-section-title">Note personnelle</div>
      <div class="note-section">
        <div class="note-header">${ICON.note} Ma note</div>
        <textarea id="note-ta" class="note-textarea" placeholder="Tes observations, astuces…" rows="4"></textarea>
        <div id="note-saved" class="note-saved-indicator"></div>
      </div>
    </div>`;

  // ── Photos perso (placeholder)
  innerHtml += `
    <div class="card-section">
      <div class="card-section-title">Photos personnelles</div>
      <div id="photos-section" class="photos-section">
        <div id="photos-gallery" class="photos-gallery"></div>
        <label class="btn-add-photo">
          ${ICON.camera} Ajouter une photo
          <input type="file" accept="image/*" capture="environment" class="input-photo" id="photo-input">
        </label>
      </div>
    </div>`;

  setPage(`
    ${topbar(cat ? cat.label : 'Fiche', backHash)}
    <div class="page card-page">${innerHtml}</div>
  `);

  // ── Hydrater note
  const ta = document.getElementById('note-ta');
  const noteSaved = document.getElementById('note-saved');
  db.getNote(cardId).then(text => { if (ta) ta.value = text; });
  ta && ta.addEventListener('input', debounce(() => {
    db.saveNote(cardId, ta.value);
    noteSaved.textContent = 'Sauvegardée';
    noteSaved.classList.add('visible');
    setTimeout(() => { noteSaved.classList.remove('visible'); noteSaved.textContent = ''; }, 1800);
  }, 800));

  // ── Hydrater photos
  hydratePhotos(cardId);
  const photoInput = document.getElementById('photo-input');
  photoInput && photoInput.addEventListener('change', (e) => handlePhotoAdd(e, cardId));
}

async function renderMediaSection(card) {
  if (!card.photo) return '';

  const cached = await db.getMedia(card.id, card.photo.url).catch(() => null);
  const srcAttr = cached ? `src="${URL.createObjectURL(cached.blob)}"` : '';
  const hasImg  = !!cached;

  return `
    <div class="card-section">
      <div class="card-media">
        ${hasImg
          ? `<img ${srcAttr} alt="${escHtml(card.title)}" loading="lazy">`
          : `<div class="card-media-placeholder">
               ${ICON.download}
               <span>Image non chargée</span>
             </div>`}
        ${card.photo.credit ? `<div class="card-media-credit">${escHtml(card.photo.credit)}</div>` : ''}
      </div>
      ${!hasImg ? `
        <button class="btn-dl-media" id="btn-dl-card-media" data-url="${escHtml(card.photo.url)}" data-cardid="${card.id}">
          ${ICON.download} Télécharger ce média
        </button>` : ''}
    </div>`;
}

// ── Photo add / gallery ───────────────────────────────────
async function hydratePhotos(cardId) {
  const gallery = document.getElementById('photos-gallery');
  if (!gallery) return;

  const photos = await db.getPhotos(cardId);
  gallery.innerHTML = photos.map(p => `
    <div class="photo-thumb">
      <img src="${p.dataUrl}" alt="Photo personnelle" loading="lazy">
      <button class="photo-thumb-del" onclick="deletePhoto(${p.id}, '${cardId}')" aria-label="Supprimer">${ICON.trash}</button>
    </div>`).join('');
}

async function handlePhotoAdd(e, cardId) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (ev) => {
    await db.addPhoto(cardId, ev.target.result);
    hydratePhotos(cardId);
    showToast('Photo ajoutée');
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}

// ── Download media ────────────────────────────────────────
async function downloadCardMedia(cardId, url) {
  try {
    showToast('Téléchargement…', 10000);
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('Erreur réseau');
    const blob = await resp.blob();
    await db.cacheMedia(cardId, url, blob);
    showToast('Média enregistré !');
    // Refresh card
    renderCard(cardId);
  } catch (err) {
    showToast('Échec du téléchargement. Vérifier la connexion.');
  }
}

// ── Download all medias ───────────────────────────────────
async function downloadAll() {
  const cards = CARDS.filter(c => c.photo);
  if (!cards.length) { showToast('Aucun média à télécharger'); return; }

  const btn = document.getElementById('btn-dl-all');
  if (btn) btn.classList.add('hidden');

  // Inject progress UI
  const container = document.querySelector('.page') || app;
  const progEl = document.createElement('div');
  progEl.className = 'dl-progress';
  progEl.innerHTML = `
    <span id="dl-count">0 / ${cards.length}</span>
    <div class="progress-bar-wrap"><div class="progress-bar" id="dl-bar" style="width:0%"></div></div>`;
  container.insertBefore(progEl, container.firstChild);

  let done = 0;
  for (const card of cards) {
    try {
      const already = await db.getMedia(card.id, card.photo.url);
      if (!already) {
        const resp = await fetch(card.photo.url);
        if (resp.ok) {
          const blob = await resp.blob();
          await db.cacheMedia(card.id, card.photo.url, blob);
        }
      }
    } catch { /* ignore individual failures */ }
    done++;
    const pct = Math.round((done / cards.length) * 100);
    const bar = document.getElementById('dl-bar');
    const cnt = document.getElementById('dl-count');
    if (bar) bar.style.width = pct + '%';
    if (cnt) cnt.textContent = `${done} / ${cards.length}`;
  }

  progEl.innerHTML = `<span style="color:var(--accent)">✓ Tous les médias sont téléchargés (${cards.length})</span>`;
  showToast(`${cards.length} médias enregistrés !`);
}

// ── SETTINGS ──────────────────────────────────────────────
async function renderSettings() {
  hideSearchOverlay();
  const mediaCount = await db.getMediaCount().catch(() => 0);

  setPage(`
    ${topbar('Paramètres', '#home')}
    <div class="page">
      <div class="mt-20 section-label">Données personnelles</div>
      <div class="settings-list">
        <div class="settings-item" id="btn-export">
          <div class="settings-item-icon">${ICON.export}</div>
          <div>
            <div class="settings-item-label">Exporter mes données</div>
            <div class="settings-item-sub">Notes et photos en JSON</div>
          </div>
        </div>
        <div class="settings-item" id="btn-import">
          <div class="settings-item-icon">${ICON.import}</div>
          <div>
            <div class="settings-item-label">Importer mes données</div>
            <div class="settings-item-sub">Restaurer depuis un fichier JSON</div>
          </div>
        </div>
      </div>

      <div class="section-label">Cache médias</div>
      <div class="settings-list">
        <div class="settings-item">
          <div class="settings-item-icon">${ICON.download}</div>
          <div>
            <div class="settings-item-label">Médias Wikimedia en cache</div>
            <div class="settings-item-sub">${mediaCount} fichier${mediaCount !== 1 ? 's' : ''} stocké${mediaCount !== 1 ? 's' : ''}</div>
          </div>
        </div>
        <div class="settings-item" id="btn-clear-media" style="color:var(--danger-text)">
          <div class="settings-item-icon">${ICON.trash}</div>
          <div>
            <div class="settings-item-label">Vider le cache médias</div>
            <div class="settings-item-sub">Libère de l'espace, les médias devront être retéléchargés</div>
          </div>
        </div>
      </div>

      <div class="settings-version">Bushcraft Field Guide — V1<br>Données stockées localement sur cet appareil</div>

      <input type="file" id="import-file" accept=".json" style="display:none">
    </div>
  `);

  document.getElementById('btn-export').addEventListener('click', handleExport);
  document.getElementById('btn-import').addEventListener('click', () => document.getElementById('import-file').click());
  document.getElementById('import-file').addEventListener('change', handleImport);
  document.getElementById('btn-clear-media').addEventListener('click', async () => {
    if (!confirm('Vider le cache des médias Wikimedia ?')) return;
    await db.clearMediaCache();
    showToast('Cache vidé');
    renderSettings();
  });
}

async function handleExport() {
  try {
    const json = await db.exportAll();
    const blob = new Blob([json], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url;
    a.download = `bushcraft-export-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Export téléchargé');
  } catch { showToast('Erreur lors de l\'export'); }
}

async function handleImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    await db.importAll(text);
    showToast('Données importées avec succès');
  } catch (err) {
    showToast('Erreur : ' + err.message);
  }
  e.target.value = '';
}

// ── Global callbacks (onclick attrs) ─────────────────────
window.goCategory = (catId) => router.navigate(`#cat/${catId}`);
window.goCard = (cardId) => {
  hideSearchOverlay();
  router.navigate(`#card/${cardId}`);
};
window.router_back = (hash) => router.navigate(hash);
window.router = router;
window.deletePhoto = async (id, cardId) => {
  await db.deletePhoto(id);
  hydratePhotos(cardId);
  showToast('Photo supprimée');
};

// ── Media download button (delegated) ────────────────────
document.addEventListener('click', (e) => {
  const btn = e.target.closest('#btn-dl-card-media');
  if (btn) downloadCardMedia(btn.dataset.cardid, btn.dataset.url);
});

// ── Utils ─────────────────────────────────────────────────
function escHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function escRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function debounce(fn, ms) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}
