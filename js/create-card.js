// ============================================================
// BUSHCRAFT FIELD GUIDE — Create custom card form
// ============================================================

import { CATEGORIES } from '../data/content.js';
import * as db from './db.js';

let onSaveCallback = null;

export function setOnSave(cb) {
  onSaveCallback = cb;
}

export function renderCreateForm(app, { showToast, escHtml, topbar, ICON }) {
  const catOptions = CATEGORIES.map(c =>
    `<option value="${c.id}">${escHtml(c.label)}</option>`
  ).join('') + '<option value="autre">Autre</option>';

  app.innerHTML = `
    ${topbar('Nouvelle fiche', '#home')}
    <div class="page card-page">
      <form id="create-form" class="create-form">
        <div class="card-section">
          <div class="card-section-title">Type de fiche</div>
          <div class="create-type-switch">
            <button type="button" class="tab-btn active" data-type="technique" id="type-technique">Technique</button>
            <button type="button" class="tab-btn" data-type="naturel" id="type-naturel">Plante / Champignon</button>
          </div>
        </div>

        <div class="card-section">
          <div class="card-section-title">Informations</div>
          <div class="create-fields">
            <input type="text" id="cf-title" class="create-input" placeholder="Titre de la fiche" required maxlength="120">
            <select id="cf-category" class="create-input">${catOptions}</select>
            <select id="cf-subcategory" class="create-input hidden"></select>
            <textarea id="cf-summary" class="create-input" placeholder="Résumé (2 lignes max)" rows="2" maxlength="250"></textarea>
          </div>
        </div>

        <!-- Technique fields -->
        <div id="fields-technique" class="card-section">
          <div class="card-section-title">Étapes</div>
          <div id="cf-steps" class="create-steps-list"></div>
          <button type="button" class="btn-add-step" id="btn-add-step">+ Ajouter une étape</button>
        </div>

        <!-- Naturel fields -->
        <div id="fields-naturel" class="card-section hidden">
          <div class="card-section-title">Détails</div>
          <div class="create-fields">
            <input type="text" id="cf-latin" class="create-input" placeholder="Nom latin (optionnel)">
            <textarea id="cf-description" class="create-input" placeholder="Description" rows="3"></textarea>
            <input type="text" id="cf-habitat" class="create-input" placeholder="Habitat">
            <input type="text" id="cf-period" class="create-input" placeholder="Période de récolte">
          </div>
        </div>

        <!-- Photos -->
        <div class="card-section">
          <div class="card-section-title">Photos</div>
          <div id="cf-photos-preview" class="photos-gallery"></div>
          <label class="btn-add-photo">
            ${ICON.camera} Ajouter une photo
            <input type="file" accept="image/*" class="input-photo" id="cf-photo-input" multiple>
          </label>
        </div>

        <!-- Note -->
        <div class="card-section">
          <div class="card-section-title">Note libre</div>
          <textarea id="cf-note" class="create-input" placeholder="Observations, astuces…" rows="3"></textarea>
        </div>

        <button type="submit" class="btn-create-save">Enregistrer la fiche</button>
      </form>
    </div>`;

  hydrateForm();
}

function hydrateForm() {
  let selectedType = 'technique';
  const photos = [];

  // Type switch
  const btnTech = document.getElementById('type-technique');
  const btnNat = document.getElementById('type-naturel');
  const fieldsTech = document.getElementById('fields-technique');
  const fieldsNat = document.getElementById('fields-naturel');

  function switchType(type) {
    selectedType = type;
    btnTech.classList.toggle('active', type === 'technique');
    btnNat.classList.toggle('active', type === 'naturel');
    fieldsTech.classList.toggle('hidden', type !== 'technique');
    fieldsNat.classList.toggle('hidden', type !== 'naturel');
  }

  btnTech.addEventListener('click', () => switchType('technique'));
  btnNat.addEventListener('click', () => switchType('naturel'));

  // Subcategory selector
  const catSelect = document.getElementById('cf-category');
  const subSelect = document.getElementById('cf-subcategory');

  function updateSubcategories() {
    const cat = CATEGORIES.find(c => c.id === catSelect.value);
    const subs = cat && cat.subcategories;
    if (subs && subs.length) {
      subSelect.innerHTML = subs.map(s => `<option value="${s.id}">${s.label}</option>`).join('');
      subSelect.classList.remove('hidden');
    } else {
      subSelect.innerHTML = '';
      subSelect.classList.add('hidden');
    }
  }

  catSelect.addEventListener('change', updateSubcategories);
  updateSubcategories();

  // Steps
  const stepsContainer = document.getElementById('cf-steps');
  addStepInput(stepsContainer);
  document.getElementById('btn-add-step').addEventListener('click', () => addStepInput(stepsContainer));

  // Photos
  const photoInput = document.getElementById('cf-photo-input');
  const photosPreview = document.getElementById('cf-photos-preview');

  photoInput.addEventListener('change', (e) => {
    Array.from(e.target.files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        photos.push(ev.target.result);
        renderPhotosPrev(photosPreview, photos);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  });

  // Submit
  document.getElementById('create-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('cf-title').value.trim();
    if (!title) return;

    const id = 'custom-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
    const categoryId = document.getElementById('cf-category').value;
    const subEl = document.getElementById('cf-subcategory');
    const subcategoryId = subEl && !subEl.classList.contains('hidden') && subEl.value ? subEl.value : undefined;

    const card = {
      id,
      categoryId,
      subcategoryId,
      type: selectedType,
      title,
      summary: document.getElementById('cf-summary').value.trim(),
      isCustom: true,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    if (selectedType === 'technique') {
      card.steps = Array.from(stepsContainer.querySelectorAll('.step-input'))
        .map(input => input.value.trim())
        .filter(Boolean);
    } else {
      card.nameLatin = document.getElementById('cf-latin').value.trim() || undefined;
      card.description = document.getElementById('cf-description').value.trim();
      card.infoGrid = [
        { label: 'Habitat', value: document.getElementById('cf-habitat').value.trim() },
        { label: 'Période', value: document.getElementById('cf-period').value.trim() }
      ].filter(cell => cell.value);
    }

    card.note = document.getElementById('cf-note').value.trim();
    card.photos = photos;

    await db.saveCustomCard(card);

    if (onSaveCallback) onSaveCallback(card);
  });
}

function addStepInput(container) {
  const idx = container.querySelectorAll('.step-input').length + 1;
  const div = document.createElement('div');
  div.className = 'create-step-row';
  div.innerHTML = `
    <span class="step-num">${idx}</span>
    <input type="text" class="create-input step-input" placeholder="Étape ${idx}">`;
  container.appendChild(div);
}

function renderPhotosPrev(container, photos) {
  container.innerHTML = photos.map((dataUrl, i) => `
    <div class="photo-thumb">
      <img src="${dataUrl}" alt="Photo ${i + 1}">
      <button type="button" class="photo-thumb-del" data-idx="${i}" aria-label="Supprimer">×</button>
    </div>`).join('');

  container.querySelectorAll('.photo-thumb-del').forEach(btn => {
    btn.addEventListener('click', () => {
      photos.splice(parseInt(btn.dataset.idx), 1);
      renderPhotosPrev(container, photos);
    });
  });
}
