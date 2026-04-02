// ============================================================
// BUSHCRAFT FIELD GUIDE — IndexedDB layer
// Stores : notes | photos | mediaCache
// ============================================================

const DB_NAME    = 'bushcraft-db';
const DB_VERSION = 2;

let _db = null;

function openDB() {
  if (_db) return Promise.resolve(_db);

  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = (e) => {
      const db = e.target.result;

      if (!db.objectStoreNames.contains('notes')) {
        const notes = db.createObjectStore('notes', { keyPath: 'cardId' });
        notes.createIndex('updatedAt', 'updatedAt');
      }

      if (!db.objectStoreNames.contains('photos')) {
        const photos = db.createObjectStore('photos', { keyPath: 'id', autoIncrement: true });
        photos.createIndex('cardId', 'cardId');
      }

      if (!db.objectStoreNames.contains('mediaCache')) {
        const media = db.createObjectStore('mediaCache', { keyPath: 'key' });
        media.createIndex('cardId', 'cardId');
      }

      if (!db.objectStoreNames.contains('customCards')) {
        const custom = db.createObjectStore('customCards', { keyPath: 'id' });
        custom.createIndex('categoryId', 'categoryId');
        custom.createIndex('createdAt', 'createdAt');
      }

      if (!db.objectStoreNames.contains('weather')) {
        db.createObjectStore('weather', { keyPath: 'id' });
      }
    };

    req.onsuccess = (e) => { _db = e.target.result; resolve(_db); };
    req.onerror   = (e) => reject(e.target.error);
  });
}

function tx(storeName, mode = 'readonly') {
  return openDB().then(db => {
    const transaction = db.transaction(storeName, mode);
    const store = transaction.objectStore(storeName);
    return { transaction, store };
  });
}

function promisifyReq(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror   = (e) => reject(e.target.error);
  });
}

// ── Notes ─────────────────────────────────────────────────

export async function getNote(cardId) {
  const { store } = await tx('notes');
  const result = await promisifyReq(store.get(cardId));
  return result ? result.text : '';
}

export async function saveNote(cardId, text) {
  const { store } = await tx('notes', 'readwrite');
  await promisifyReq(store.put({ cardId, text, updatedAt: Date.now() }));
}

// ── Photos personnelles ────────────────────────────────────

export async function getPhotos(cardId) {
  const { store } = await tx('photos');
  const index  = store.index('cardId');
  return promisifyReq(index.getAll(cardId));
}

export async function addPhoto(cardId, dataUrl) {
  const { store } = await tx('photos', 'readwrite');
  return promisifyReq(store.add({ cardId, dataUrl, createdAt: Date.now() }));
}

export async function deletePhoto(id) {
  const { store } = await tx('photos', 'readwrite');
  return promisifyReq(store.delete(id));
}

export async function getAllPhotos() {
  const { store } = await tx('photos');
  return promisifyReq(store.getAll());
}

// ── Médias Wikimedia cachés ────────────────────────────────

export async function cacheMedia(cardId, url, blob) {
  const key = `${cardId}::${url}`;
  const { store } = await tx('mediaCache', 'readwrite');
  return promisifyReq(store.put({ key, cardId, url, blob, cachedAt: Date.now() }));
}

export async function getMedia(cardId, url) {
  const key = `${cardId}::${url}`;
  const { store } = await tx('mediaCache');
  return promisifyReq(store.get(key));
}

export async function getAllCachedMedia() {
  const { store } = await tx('mediaCache');
  return promisifyReq(store.getAll());
}

export async function clearMediaCache() {
  const { store } = await tx('mediaCache', 'readwrite');
  return promisifyReq(store.clear());
}

export async function getMediaCount() {
  const { store } = await tx('mediaCache');
  return promisifyReq(store.count());
}

// ── Fiches personnelles ───────────────────────────────────

export async function saveCustomCard(card) {
  const { store } = await tx('customCards', 'readwrite');
  return promisifyReq(store.put(card));
}

export async function getCustomCard(id) {
  const { store } = await tx('customCards');
  return promisifyReq(store.get(id));
}

export async function getAllCustomCards() {
  const { store } = await tx('customCards');
  return promisifyReq(store.getAll());
}

export async function getCustomCardsByCategory(catId) {
  const { store } = await tx('customCards');
  const index = store.index('categoryId');
  return promisifyReq(index.getAll(catId));
}

export async function deleteCustomCard(id) {
  const { store } = await tx('customCards', 'readwrite');
  return promisifyReq(store.delete(id));
}

// ── Météo ─────────────────────────────────────────────────

export async function saveWeather(data) {
  const { store } = await tx('weather', 'readwrite');
  return promisifyReq(store.put({ id: 'current', ...data, savedAt: Date.now() }));
}

export async function getWeather() {
  const { store } = await tx('weather');
  return promisifyReq(store.get('current'));
}

export async function clearWeather() {
  const { store } = await tx('weather', 'readwrite');
  return promisifyReq(store.delete('current'));
}

// ── Export / Import ────────────────────────────────────────

export async function exportAll() {
  const [notes, photos, media, customCards] = await Promise.all([
    (async () => { const { store } = await tx('notes'); return promisifyReq(store.getAll()); })(),
    getAllPhotos(),
    getAllCachedMedia(),
    getAllCustomCards()
  ]);

  return JSON.stringify({ version: 2, exportedAt: Date.now(), notes, photos, media, customCards }, null, 2);
}

export async function importAll(jsonString) {
  let data;
  try { data = JSON.parse(jsonString); } catch { throw new Error('JSON invalide'); }
  if (!data.version) throw new Error('Format non reconnu');

  const db = await openDB();

  await new Promise((resolve, reject) => {
    const storeNames = ['notes', 'photos', 'mediaCache'];
    if (db.objectStoreNames.contains('customCards')) storeNames.push('customCards');
    const transaction = db.transaction(storeNames, 'readwrite');
    transaction.oncomplete = resolve;
    transaction.onerror = (e) => reject(e.target.error);

    const notesStore = transaction.objectStore('notes');
    const photosStore = transaction.objectStore('photos');
    const mediaStore = transaction.objectStore('mediaCache');

    notesStore.clear();
    photosStore.clear();
    mediaStore.clear();

    (data.notes || []).forEach(n => notesStore.add(n));
    (data.photos || []).forEach(p => {
      const { id: _id, ...rest } = p;
      photosStore.add(rest);
    });
    (data.media || []).forEach(m => mediaStore.add(m));

    if (db.objectStoreNames.contains('customCards')) {
      const customStore = transaction.objectStore('customCards');
      customStore.clear();
      (data.customCards || []).forEach(c => customStore.add(c));
    }
  });
}
