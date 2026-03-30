// ============================================================
// BUSHCRAFT FIELD GUIDE — Router (hash-based)
// Routes : #home | #cat/:id | #cat/:id/:subId | #card/:id | #settings
// ============================================================

const routes = [];
let currentRoute = null;

export function on(pattern, handler) {
  routes.push({ pattern, handler });
}

export function navigate(hash, { replace = false } = {}) {
  if (replace) {
    history.replaceState(null, '', hash);
  } else {
    history.pushState(null, '', hash);
  }
  dispatch(hash);
}

export function start() {
  window.addEventListener('popstate', () => dispatch(location.hash || '#home'));
  dispatch(location.hash || '#home');
}

function dispatch(hash) {
  currentRoute = hash;
  const path = hash.replace(/^#/, '') || 'home';
  const parts = path.split('/');

  for (const route of routes) {
    const match = matchRoute(route.pattern, parts);
    if (match !== null) {
      route.handler(match);
      return;
    }
  }

  // Fallback home
  const homeRoute = routes.find(r => r.pattern === 'home');
  if (homeRoute) homeRoute.handler({});
}

function matchRoute(pattern, parts) {
  const patParts = pattern.split('/');
  if (patParts.length !== parts.length) return null;

  const params = {};
  for (let i = 0; i < patParts.length; i++) {
    if (patParts[i].startsWith(':')) {
      params[patParts[i].slice(1)] = decodeURIComponent(parts[i]);
    } else if (patParts[i] !== parts[i]) {
      return null;
    }
  }
  return params;
}

export function currentHash() {
  return location.hash || '#home';
}
