// ============================================================
// BUSHCRAFT FIELD GUIDE — Weather snapshot module
// ============================================================

import * as db from './db.js';

const WEATHER_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

const WEATHER_CODES = {
  0: 'Ciel dégagé', 1: 'Peu nuageux', 2: 'Partiellement nuageux', 3: 'Couvert',
  45: 'Brouillard', 48: 'Brouillard givrant',
  51: 'Bruine légère', 53: 'Bruine', 55: 'Bruine forte',
  61: 'Pluie légère', 63: 'Pluie', 65: 'Pluie forte',
  71: 'Neige légère', 73: 'Neige', 75: 'Neige forte',
  80: 'Averses légères', 81: 'Averses', 82: 'Averses fortes',
  95: 'Orage', 96: 'Orage grêle légère', 99: 'Orage grêle forte'
};

export async function fetchAndSaveWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,relative_humidity_2m_mean,weather_code&timezone=auto&forecast_days=7`;

  const resp = await fetch(url);
  if (!resp.ok) throw new Error('Erreur réseau météo');
  const json = await resp.json();

  const days = json.daily.time.map((date, i) => ({
    date,
    tempMin: json.daily.temperature_2m_min[i],
    tempMax: json.daily.temperature_2m_max[i],
    precipitation: json.daily.precipitation_sum[i],
    windMax: json.daily.wind_speed_10m_max[i],
    humidity: json.daily.relative_humidity_2m_mean[i],
    code: json.daily.weather_code[i]
  }));

  const data = { lat, lon, days };
  await db.saveWeather(data);
  return data;
}

export async function getWeatherData() {
  const w = await db.getWeather();
  if (!w) return null;

  const age = Date.now() - w.savedAt;
  if (age > WEATHER_TTL) {
    await db.clearWeather();
    return null;
  }

  return w;
}

export function weatherCodeLabel(code) {
  return WEATHER_CODES[code] || 'Inconnu';
}

export function timeAgo(timestamp) {
  const diff = Date.now() - timestamp;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return "à l'instant";
  if (hours < 24) return `il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  return `il y a ${days}j`;
}

export function expiresIn(savedAt) {
  const remaining = WEATHER_TTL - (Date.now() - savedAt);
  if (remaining <= 0) return 'expiré';
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (days > 0) return `${days}j ${hours}h`;
  return `${hours}h`;
}

export function renderWeatherCard(weather, { escHtml }) {
  if (!weather) {
    return `
      <div class="weather-card weather-card-empty">
        <div class="weather-card-header">
          <span class="weather-icon">◌</span>
          <span>Météo</span>
        </div>
        <div class="weather-card-body">
          <p class="weather-empty-msg">Aucune météo enregistrée</p>
          <button class="btn-weather-save" id="btn-save-weather">Sauvegarder la météo actuelle</button>
        </div>
      </div>`;
  }

  const daysHtml = weather.days.slice(0, 5).map(d => {
    const dayName = new Date(d.date).toLocaleDateString('fr-FR', { weekday: 'short' });
    return `
      <div class="weather-day">
        <div class="weather-day-name">${dayName}</div>
        <div class="weather-day-temp">${Math.round(d.tempMin)}° / ${Math.round(d.tempMax)}°</div>
        <div class="weather-day-detail">${d.precipitation > 0 ? d.precipitation + 'mm' : '—'}</div>
        <div class="weather-day-detail">${Math.round(d.windMax)} km/h</div>
      </div>`;
  }).join('');

  return `
    <div class="weather-card">
      <div class="weather-card-header">
        <span class="weather-icon">⛅</span>
        <span>Météo (7 jours)</span>
        <span class="weather-meta">${timeAgo(weather.savedAt)} · expire dans ${expiresIn(weather.savedAt)}</span>
      </div>
      <div class="weather-days">${daysHtml}</div>
      <button class="btn-weather-refresh" id="btn-save-weather">Rafraîchir</button>
    </div>`;
}

export async function requestLocationAndSave(showToast) {
  if (!navigator.geolocation) {
    return promptManualLocation(showToast);
  }

  showToast('Géolocalisation en cours…', 5000);

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const data = await fetchAndSaveWeather(pos.coords.latitude, pos.coords.longitude);
          showToast('Météo sauvegardée !');
          resolve(data);
        } catch {
          showToast('Erreur lors du téléchargement météo');
          resolve(null);
        }
      },
      () => {
        promptManualLocation(showToast).then(resolve);
      },
      { timeout: 10000 }
    );
  });
}

async function promptManualLocation(showToast) {
  const input = prompt('Géolocalisation refusée.\nEntrez des coordonnées (lat, lon) ou un nom de ville :');
  if (!input) return null;

  // Try as coordinates
  const coordMatch = input.match(/(-?\d+\.?\d*)\s*[,;\s]\s*(-?\d+\.?\d*)/);
  if (coordMatch) {
    try {
      const data = await fetchAndSaveWeather(parseFloat(coordMatch[1]), parseFloat(coordMatch[2]));
      showToast('Météo sauvegardée !');
      return data;
    } catch {
      showToast('Erreur lors du téléchargement météo');
      return null;
    }
  }

  // Try as city name via Open-Meteo geocoding
  try {
    const geoResp = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(input)}&count=1&language=fr`);
    const geoData = await geoResp.json();
    if (geoData.results && geoData.results.length) {
      const loc = geoData.results[0];
      const data = await fetchAndSaveWeather(loc.latitude, loc.longitude);
      showToast(`Météo pour ${loc.name} sauvegardée !`);
      return data;
    }
    showToast('Ville introuvable');
    return null;
  } catch {
    showToast('Erreur réseau');
    return null;
  }
}
