// ============================================================
// BUSHCRAFT FIELD GUIDE — Contenu V1
// Tout le texte est embarqué ici, disponible offline d'emblée
// ============================================================

export const CATEGORIES = [
  {
    id: 'feu',
    label: 'Feu',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 7 6 10 7 13.5c.5 2 2 3.5 4 4.5-.8-2-.5-4 1-5.5 0 2 1 4 2 5.5 1-1 1.5-2.5 1.5-4 1.5 1.5 2 3.5 1.5 5.5 2-1 3.5-2.5 4-4.5C22 10 20 7 16 2c0 3-2 5-4 6 0-2-1-4 0-6Z"/></svg>`,
    subcategories: [
      { id: 'techniques', label: 'Techniques d\'allumage' },
      { id: 'types', label: 'Types de feu' },
      { id: 'amadou', label: 'Amadou & préparation' }
    ]
  },
  {
    id: 'eau',
    label: 'Eau',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 C8 8 4 12 4 16a8 8 0 0 0 16 0c0-4-4-8-8-14Z"/></svg>`
  },
  {
    id: 'abri',
    label: 'Abri',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10L12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><polyline points="9,21 9,12 15,12 15,21"/></svg>`
  },
  {
    id: 'plantes',
    label: 'Plantes',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 7 4 3 5c1 4 4 7 9 7Z"/><path d="M12 12c0-5 5-8 9-7-1 4-4 7-9 7Z"/></svg>`
  },
  {
    id: 'champignons',
    label: 'Champignons',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8"/><path d="M12 6v2"/><path d="M10 14h4v4a2 2 0 0 1-4 0v-4Z"/><line x1="4" y1="14" x2="20" y2="14"/></svg>`
  },
  {
    id: 'pistes',
    label: 'Pistes & traces',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="7" rx="3" ry="2"/><ellipse cx="15" cy="12" rx="3" ry="2"/><ellipse cx="9" cy="17" rx="3" ry="2"/></svg>`
  },
  {
    id: 'fabrication',
    label: 'Fabrication',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  },
  {
    id: 'navigation',
    label: 'Navigation',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/></svg>`
  },
  {
    id: 'secours',
    label: 'Premiers secours',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  },
  {
    id: 'noeuds',
    label: 'Nœuds',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12c0-3.3 2.7-6 6-6 2 0 3.8 1 5 2.5"/><path d="M19 12c0 3.3-2.7 6-6 6-2 0-3.8-1-5-2.5"/><path d="M5 12h2m10 0h2"/><path d="M12 5v2m0 10v2"/></svg>`
  }
];

// ── Helpers ──────────────────────────────────────────────────
function catLabel(catId, subId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) return '';
  if (subId && cat.subcategories) {
    const sub = cat.subcategories.find(s => s.id === subId);
    return sub ? `${cat.label} › ${sub.label}` : cat.label;
  }
  return cat.label;
}

// ── SVG illustrations inline ──────────────────────────────────

const SVG_ARCHET = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180">
  <style>text{font:13px system-ui;fill:#888} line,path,circle,rect{stroke-linecap:round}</style>
  <!-- Planche de base -->
  <rect x="40" y="130" width="220" height="12" rx="3" fill="#2a2a2a" stroke="#4a7c59" stroke-width="1.5"/>
  <text x="150" y="158" text-anchor="middle">Planche de bois tendre</text>
  <!-- Fuseau vertical -->
  <line x1="150" y1="40" x2="150" y2="130" stroke="#7a6040" stroke-width="6"/>
  <ellipse cx="150" cy="40" rx="8" ry="8" fill="#4a7c59" opacity=".6"/>
  <text x="168" y="88" fill="#666">Fuseau</text>
  <!-- Archet -->
  <path d="M 70 70 Q 100 30 180 50" fill="none" stroke="#7a6040" stroke-width="4"/>
  <line x1="70" y1="70" x2="180" y2="50" stroke="#c8a060" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="108" y="28" text-anchor="middle">Archet</text>
  <!-- Flèche mouvement -->
  <path d="M56 70 Q46 90 56 110" fill="none" stroke="#4a7c59" stroke-width="1.8" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6Z" fill="#4a7c59"/></marker></defs>
  <text x="22" y="92" fill="#4a7c59" font-size="11">va-et-vient</text>
  <!-- Encoche -->
  <path d="M140 126 L150 130 L160 126" fill="none" stroke="#c8a060" stroke-width="1.5"/>
  <text x="150" y="120" text-anchor="middle" fill="#888" font-size="11">encoche</text>
</svg>`;

const SVG_FEU_TIPI = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <style>text{font:12px system-ui;fill:#888}</style>
  <!-- Sol -->
  <line x1="40" y1="160" x2="260" y2="160" stroke="#333" stroke-width="2"/>
  <!-- Bûches en tipi -->
  <line x1="150" y1="80" x2="100" y2="160" stroke="#7a6040" stroke-width="5"/>
  <line x1="150" y1="80" x2="200" y2="160" stroke="#7a6040" stroke-width="5"/>
  <line x1="150" y1="85" x2="80" y2="155" stroke="#8a7050" stroke-width="4"/>
  <line x1="150" y1="85" x2="220" y2="155" stroke="#8a7050" stroke-width="4"/>
  <line x1="150" y1="90" x2="130" y2="160" stroke="#9a8060" stroke-width="3.5"/>
  <line x1="150" y1="90" x2="170" y2="160" stroke="#9a8060" stroke-width="3.5"/>
  <!-- Amadou au centre -->
  <ellipse cx="150" cy="155" rx="18" ry="6" fill="#3a2a10" stroke="#c8a060" stroke-width="1"/>
  <text x="150" y="175" text-anchor="middle">Amadou au centre</text>
  <!-- Flamme -->
  <path d="M150 90 C144 102 140 112 145 118 C148 122 152 122 155 118 C160 112 156 102 150 90Z" fill="#4a7c59" opacity=".7"/>
  <path d="M150 100 C148 108 147 114 150 118 C153 114 152 108 150 100Z" fill="#2a4a35" opacity=".8"/>
  <text x="150" y="65" text-anchor="middle" fill="#7dba92" font-size="13" font-weight="600">Feu tipi</text>
  <!-- Flèche tirage -->
  <path d="M190 100 Q210 80 195 60" fill="none" stroke="#4a7c59" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arr2)"/>
  <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6Z" fill="#4a7c59"/></marker></defs>
  <text x="200" y="58" fill="#4a7c59" font-size="11">tirage</text>
</svg>`;

const SVG_FEU_DAKOTA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <style>text{font:12px system-ui;fill:#888}</style>
  <!-- Sol -->
  <rect x="0" y="120" width="300" height="80" fill="#1a1a0a"/>
  <line x1="0" y1="120" x2="300" y2="120" stroke="#333" stroke-width="1.5"/>
  <!-- Trou principal -->
  <ellipse cx="120" cy="120" rx="35" ry="10" fill="#0a0a00" stroke="#4a7c59" stroke-width="1.5"/>
  <path d="M85 120 Q85 165 120 168 Q155 165 155 120" fill="#0a0a00" stroke="#4a7c59" stroke-width="1.5"/>
  <!-- Trou d'aération -->
  <ellipse cx="185" cy="120" rx="15" ry="5" fill="#0a0a00" stroke="#666" stroke-width="1.2"/>
  <path d="M170 120 Q170 150 185 152 Q200 150 200 120" fill="#0a0a00" stroke="#555" stroke-width="1.2"/>
  <!-- Tunnel de liaison -->
  <path d="M155 148 Q170 148 170 148" stroke="#4a7c59" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="162" y="162" text-anchor="middle" fill="#4a7c59" font-size="10">tunnel</text>
  <!-- Feu dans trou principal -->
  <path d="M120 80 C114 95 112 108 116 114 C119 118 121 118 124 114 C128 108 126 95 120 80Z" fill="#c87030" opacity=".8"/>
  <path d="M120 92 C118 102 117 110 120 114 C123 110 122 102 120 92Z" fill="#ffa020" opacity=".6"/>
  <!-- Flèches air -->
  <path d="M185 115 Q185 100 175 92 Q160 84 140 86" fill="none" stroke="#4a7c59" stroke-width="1.5" marker-end="url(#arr3)" stroke-dasharray="4,2"/>
  <defs><marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6Z" fill="#4a7c59"/></marker></defs>
  <text x="192" y="105" fill="#4a7c59" font-size="10">air</text>
  <!-- Fumée -->
  <path d="M116 80 Q112 65 118 55 Q114 45 120 38" fill="none" stroke="#555" stroke-width="2" stroke-dasharray="3,3"/>
  <text x="65" y="50" fill="#666" font-size="11">évacuation fumée</text>
  <!-- Labels -->
  <text x="120" y="12" text-anchor="middle" fill="#7dba92" font-size="13" font-weight="600">Feu Dakota</text>
  <text x="120" y="185" text-anchor="middle">Chambre de combustion</text>
  <text x="185" y="185" text-anchor="middle">Prise d'air</text>
</svg>`;

const SVG_NOEUD_CHAISE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <style>text{font:12px system-ui;fill:#888}</style>
  <text x="150" y="18" text-anchor="middle" fill="#7dba92" font-size="13" font-weight="600">Nœud de chaise</text>
  <!-- Boucle principale -->
  <path d="M80 160 L80 100 Q80 60 110 60 Q140 60 140 90 L140 110 Q140 130 120 130 Q100 130 100 110 L100 95 Q100 80 115 80 Q130 80 130 95 L130 110" fill="none" stroke="#7a6040" stroke-width="5" stroke-linecap="round"/>
  <!-- Corde sortante haut -->
  <line x1="130" y1="110" x2="130" y2="60" stroke="#7a6040" stroke-width="5"/>
  <line x1="130" y1="60" x2="220" y2="40" stroke="#c8a060" stroke-width="4"/>
  <text x="200" y="36" fill="#4a7c59" font-size="11">charge</text>
  <!-- Corde sortante bas -->
  <line x1="80" y1="160" x2="80" y2="185" stroke="#c8a060" stroke-width="4"/>
  <text x="88" y="183" fill="#666" font-size="11">extrémité libre</text>
  <!-- Annotations -->
  <text x="152" y="92" fill="#666" font-size="11">boucle fixe</text>
  <line x1="148" y1="90" x2="125" y2="95" stroke="#555" stroke-width="1"/>
</svg>`;

const SVG_NOEUD_CABESTAN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <style>text{font:12px system-ui;fill:#888}</style>
  <text x="150" y="18" text-anchor="middle" fill="#7dba92" font-size="13" font-weight="600">Nœud de cabestan</text>
  <!-- Support vertical (arbre) -->
  <rect x="130" y="30" width="30" height="160" rx="6" fill="#1a1a0a" stroke="#3a3a2a" stroke-width="2"/>
  <!-- Spires du noeud -->
  <path d="M60 80 L130 80" stroke="#7a6040" stroke-width="5" stroke-linecap="round"/>
  <path d="M130 80 Q160 80 160 100 Q160 120 130 120" stroke="#7a6040" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M130 120 L70 120" stroke="#c8a060" stroke-width="5" stroke-linecap="round"/>
  <path d="M70 120 Q40 120 40 100 Q40 80 60 80" stroke="#c8a060" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M130 120 Q165 120 165 140 Q165 158 130 158" stroke="#7a6040" stroke-width="5" fill="none" stroke-linecap="round"/>
  <line x1="130" y1="158" x2="220" y2="158" stroke="#7a6040" stroke-width="4"/>
  <text x="222" y="162" fill="#4a7c59" font-size="11">→ serrage</text>
  <text x="40" y="165" fill="#888" font-size="11">2 demi-clés croisées</text>
</svg>`;

const SVG_NOEUD_PRUSIK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <style>text{font:12px system-ui;fill:#888}</style>
  <text x="150" y="18" text-anchor="middle" fill="#7dba92" font-size="13" font-weight="600">Nœud de Prusik</text>
  <!-- Corde principale verticale -->
  <line x1="150" y1="25" x2="150" y2="185" stroke="#4a7c59" stroke-width="8" stroke-linecap="round"/>
  <!-- Anneau de cord mince -->
  <path d="M110 80 Q110 60 150 60 Q190 60 190 80 L190 120 Q190 140 150 140 Q110 140 110 120 Z" fill="none" stroke="#c8a060" stroke-width="4" stroke-linecap="round"/>
  <path d="M150 140 L150 175" stroke="#c8a060" stroke-width="4"/>
  <path d="M130 175 L170 175" stroke="#c8a060" stroke-width="4"/>
  <!-- Spires visibles -->
  <path d="M110 90 Q150 88 190 90" fill="none" stroke="#b89040" stroke-width="2.5" stroke-dasharray="4,3"/>
  <path d="M110 100 Q150 98 190 100" fill="none" stroke="#b89040" stroke-width="2.5" stroke-dasharray="4,3"/>
  <path d="M110 110 Q150 108 190 110" fill="none" stroke="#b89040" stroke-width="2.5" stroke-dasharray="4,3"/>
  <text x="205" y="102" fill="#666" font-size="11">3 spires</text>
  <text x="150" y="192" text-anchor="middle" fill="#888" font-size="11">anneau de prussik</text>
  <text x="150" y="32" text-anchor="middle" fill="#4a7c59" font-size="10">corde porteuse</text>
</svg>`;

const SVG_LEAN_TO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <style>text{font:12px system-ui;fill:#888}</style>
  <!-- Sol -->
  <line x1="20" y1="165" x2="280" y2="165" stroke="#333" stroke-width="2"/>
  <!-- Arbres supports -->
  <rect x="50" y="60" width="10" height="105" rx="3" fill="#2a1a0a" stroke="#3a2a10" stroke-width="1.5"/>
  <rect x="240" y="80" width="10" height="85" rx="3" fill="#2a1a0a" stroke="#3a2a10" stroke-width="1.5"/>
  <!-- Traverse haute -->
  <line x1="55" y1="65" x2="245" y2="85" stroke="#5a3a20" stroke-width="5" stroke-linecap="round"/>
  <!-- Lattes en diagonale -->
  <line x1="60" y1="75" x2="100" y2="165" stroke="#7a5030" stroke-width="3"/>
  <line x1="85" y1="77" x2="125" y2="165" stroke="#7a5030" stroke-width="3"/>
  <line x1="110" y1="79" x2="150" y2="165" stroke="#7a5030" stroke-width="3"/>
  <line x1="135" y1="81" x2="175" y2="165" stroke="#7a5030" stroke-width="3"/>
  <line x1="160" y1="83" x2="200" y2="165" stroke="#7a5030" stroke-width="3"/>
  <line x1="185" y1="84" x2="225" y2="165" stroke="#7a5030" stroke-width="3"/>
  <line x1="210" y1="85" x2="245" y2="165" stroke="#7a5030" stroke-width="3"/>
  <!-- Feuillage sur les lattes -->
  <path d="M60 75 Q150 60 245 85 L245 100 Q150 75 60 90Z" fill="#1a3a1a" opacity=".6"/>
  <!-- Espace intérieur -->
  <path d="M60 90 L245 100 L245 165 L60 165Z" fill="#0a0a08" opacity=".4"/>
  <!-- Label -->
  <text x="150" y="18" text-anchor="middle" fill="#7dba92" font-size="13" font-weight="600">Abri lean-to (appenti)</text>
  <text x="55" y="188" fill="#555" font-size="10">Orient. vent dos</text>
</svg>`;

const SVG_FILTRE_EAU = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" width="300" height="220">
  <style>text{font:12px system-ui;fill:#888}</style>
  <text x="150" y="18" text-anchor="middle" fill="#7dba92" font-size="13" font-weight="600">Filtre par gravité</text>
  <!-- Bouteille/contenant supérieur -->
  <path d="M100 35 L100 70 Q100 80 110 80 L190 80 Q200 80 200 70 L200 35 Q200 25 190 25 L110 25 Q100 25 100 35Z" fill="#0a1a0a" stroke="#4a7c59" stroke-width="1.5"/>
  <!-- Couche charbon -->
  <rect x="105" y="82" width="90" height="22" rx="2" fill="#111" stroke="#333" stroke-width="1"/>
  <text x="150" y="97" text-anchor="middle" fill="#555" font-size="10">Charbon actif</text>
  <!-- Couche sable -->
  <rect x="105" y="106" width="90" height="22" rx="2" fill="#2a2010" stroke="#333" stroke-width="1"/>
  <text x="150" y="121" text-anchor="middle" fill="#666" font-size="10">Sable fin</text>
  <!-- Couche gravier -->
  <rect x="105" y="130" width="90" height="22" rx="2" fill="#1a1a1a" stroke="#333" stroke-width="1"/>
  <text x="150" y="145" text-anchor="middle" fill="#555" font-size="10">Gravier</text>
  <!-- Tissu/bandana en bas -->
  <path d="M105 152 L195 152 L195 158 L105 158Z" fill="#1a3a1a" stroke="#4a7c59" stroke-width="1"/>
  <text x="150" y="167" text-anchor="middle" fill="#555" font-size="10">Tissu / bandana</text>
  <!-- Gouttes -->
  <line x1="140" y1="160" x2="140" y2="175" stroke="#4a7c59" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="150" y1="160" x2="150" y2="180" stroke="#4a7c59" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="160" y1="160" x2="160" y2="175" stroke="#4a7c59" stroke-width="1.5" stroke-dasharray="3,3"/>
  <!-- Récipient bas -->
  <path d="M118 185 L182 185 L188 210 L112 210Z" fill="#0a1818" stroke="#4a7c59" stroke-width="1.5"/>
  <text x="150" y="205" text-anchor="middle" fill="#4a7c59" font-size="10">Eau filtrée</text>
  <!-- Flèche -->
  <path d="M215 80 L215 155" fill="none" stroke="#333" stroke-width="1" marker-end="url(#arr4)"/>
  <defs><marker id="arr4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6Z" fill="#555"/></marker></defs>
  <text x="220" y="120" fill="#444" font-size="10">gravité</text>
</svg>`;

// ── FICHES ───────────────────────────────────────────────────

export const CARDS = [

  // ═══════════════════════════════════════════════
  //  FEU › Techniques d'allumage
  // ═══════════════════════════════════════════════

  {
    id: 'feu-archet',
    categoryId: 'feu',
    subcategoryId: 'techniques',
    type: 'technique',
    title: 'Allumage par archet à friction',
    summary: 'La technique la plus fiable sans matériel moderne. Demande pratique et coordination, mais fonctionne même en conditions difficiles.',
    conditions: ['Bois sec impératif', 'Humidité <70%', 'Vent faible'],
    needs: ['Bois tendre (saule, tilleul, noisetier)', 'Bois dur pour l\'archet', 'Ficelle sèche', 'Couteau', 'Amadou préparé'],
    steps: [
      'Préparer la planche de bois tendre avec une encoche en V débouchant sur un morceau d\'écorce ou de feuille sèche.',
      'Tailler le fuseau : baguette de 40 cm, bout inférieur pointu et légèrement arrondi, bout supérieur en pointe fine.',
      'Enrouler la corde de l\'archet une fois autour du fuseau. L\'archet doit être légèrement courbé.',
      'Appuyer la prise de main sur le bout supérieur du fuseau, poignet calé contre le tibia.',
      'Scier avec l\'archet en va-et-vient régulier, appuyer fermement vers le bas, maintenir un rythme constant.',
      'Dès que la poudre dans l\'encoche fume et forme un "charbon" incandescent, arrêter et souffler doucement.',
      'Transférer le charbon dans le nid d\'amadou et souffler progressivement jusqu\'à l\'embrasement.',
    ],
    attention: [
      'Le bois doit être de dureté différente entre fuseau et planche (tendre sur dur ou inversement).',
      'Un charbon qui s\'éteint = bois trop humide ou encoche mal positionnée.',
      'Ne pas souffler trop fort sur le charbon, progresser en intensité.',
      'Protéger la prise de main avec du chiffon pour éviter les ampoules.',
    ],
    svgIllustration: SVG_ARCHET
  },

  {
    id: 'feu-silex',
    categoryId: 'feu',
    subcategoryId: 'techniques',
    type: 'technique',
    title: 'Allumage par silex et acier',
    summary: 'Technique robuste avec briquet de silex ou pierre à feu. Rapide dès la maîtrise, résistante au vent.',
    conditions: ['Amadou très sec', 'Abri du vent direct'],
    needs: ['Silex, quartz ou pierre à feu', 'Lame d\'acier (couteau à dos carré)', 'Amadou de chardon / bolet amadouvier', 'Nid d\'herbes sèches'],
    steps: [
      'Tenir le silex dans la main non-dominante, bord tranchant orienté vers le haut.',
      'Placer une pièce d\'amadou préparé (champignon ou chardon carbonisé) sur le dessus du silex, sous le bord tranchant.',
      'Frapper d\'un coup sec et glissant vers le bas avec le dos de la lame, angle 30° environ.',
      'L\'étincelle doit tomber directement sur l\'amadou — ajuster la position jusqu\'à trouver le bon angle.',
      'Dès qu\'une étincelle prend, souffler doucement jusqu\'à voir un point rouge vif.',
      'Replier l\'amadou et l\'intégrer dans le nid d\'herbes sèches, souffler progressivement.',
    ],
    attention: [
      'Le dos de la lame doit être dur et carré — pas le tranchant.',
      'Un mauvais angle ne produit pas d\'étincelles exploitables.',
      'Le bolet amadouvier doit être carbonisé au préalable (amadou au sens propre).',
    ]
  },

  {
    id: 'feu-humide',
    categoryId: 'feu',
    subcategoryId: 'techniques',
    type: 'technique',
    title: 'Allumage en conditions humides',
    summary: 'Protocole adapté quand il pleut ou que le bois est gorgé d\'eau. Demande plus de préparation et de patience.',
    conditions: ['Pluie / brouillard', 'Bois en surface humide', 'Sol détrempé'],
    needs: ['Couteau', 'Bois mort debout (non couché)', 'Résine de conifère', 'Amadou de l\'intérieur du bois', 'Écorce de bouleau si disponible'],
    steps: [
      'Chercher du bois mort encore debout ou à l\'abri sous des branches : l\'intérieur reste sec même quand l\'extérieur est humide.',
      'Couper des copeaux fins en atteignant le cœur du bois sec. Les copeaux fins sèchent vite à la chaleur du corps.',
      'Préparer le site : une plateforme surélevée (rondins plats) pour isoler du sol humide.',
      'Utiliser de la résine de conifère (sapin, épicéa) comme accélérateur — elle brûle même humide.',
      'Construire un feu tipi très petit et dense, protéger du vent et de la pluie avec le corps.',
      'Alimenter progressivement : ne jamais mettre trop de bois humide d\'un coup, il étoufferait la flamme.',
    ],
    attention: [
      'L\'écorce de bouleau brûle quand elle est humide grâce à sa résine naturelle — chercher en priorité.',
      'Éviter les bois pourris (ils ne brûlent pas et dégagent peu de chaleur).',
      'Garder l\'amadou à l\'intérieur de la veste pour maintenir sa chaleur et sa sécheresse.',
    ]
  },

  // ═══════════════════════════════════════════════
  //  FEU › Types de feu
  // ═══════════════════════════════════════════════

  {
    id: 'feu-tipi',
    categoryId: 'feu',
    subcategoryId: 'types',
    type: 'technique',
    title: 'Feu tipi',
    summary: 'Construction en cône, idéale pour démarrer un feu rapidement. Excellent tirage, flamme haute, consume vite.',
    conditions: ['Cuisson rapide', 'Allumage initial', 'Vent faible à modéré'],
    needs: ['Amadou central', 'Petit bois de 10-20 cm', 'Bûches moyennes', 'Pierres pour délimiter'],
    steps: [
      'Placer l\'amadou et l\'allumage au centre de l\'emplacement.',
      'Poser des bâtonnets fins autour en cône serré, en laissant une ouverture face au vent dominant.',
      'Ajouter une deuxième couche de bois un peu plus épais, toujours en cône.',
      'Allumer l\'amadou central, souffler à la base face au vent.',
      'Alimenter progressivement par des bûches appuyées contre le cône qui se réduit.',
    ],
    attention: [
      'Trop serré = pas d\'air. Trop ouvert = les bûches tombent et étouffent l\'amadou.',
      'Flamme haute = fort rayonnement, mauvaise économie de bois.',
      'Prévoir un stock avant d\'allumer : le tipi consomme vite.',
    ],
    svgIllustration: SVG_FEU_TIPI
  },

  {
    id: 'feu-dakota',
    categoryId: 'feu',
    subcategoryId: 'types',
    type: 'technique',
    title: 'Feu Dakota (creusé)',
    summary: 'Feu enterré à deux chambres reliées par un tunnel. Discret, économe, quasi sans fumée. Idéal pour cuire.',
    conditions: ['Sol meuble', 'Cuisson longue durée', 'Discrétion souhaitée', 'Vent quelconque'],
    needs: ['Outils de creusage (bâton solide, couteau)', 'Bois sec de calibre moyen', 'Sol terreux (éviter les pierres calcaires)'],
    steps: [
      'Creuser un trou principal d\'environ 30 cm de diamètre et 30 cm de profondeur.',
      'Creuser un second trou plus petit (15 cm) à 20-25 cm du premier, légèrement incliné vers lui.',
      'Relier les deux trous par un tunnel en biais à la base — vérifier le tirage avec de la fumée ou de la salive.',
      'Allumer le feu dans le trou principal, le trou latéral aspire l\'air automatiquement.',
      'Alimenter par le dessus avec des bûches courtes. Poser le récipient directement au-dessus du trou.',
    ],
    attention: [
      'Ne pas creuser dans de l\'argile pure (risque d\'effondrement) ni près des racines.',
      'Les pierres calcaires peuvent éclater au feu — ne pas en tapisser la chambre.',
      'Bien reboucher et disperser les cendres après usage.',
    ],
    svgIllustration: SVG_FEU_DAKOTA
  },

  {
    id: 'feu-longue-duree',
    categoryId: 'feu',
    subcategoryId: 'types',
    type: 'technique',
    title: 'Feu longue durée (étoile / trappeur)',
    summary: 'Bûches disposées en étoile et poussées progressivement vers le centre. Brûle des heures avec peu d\'entretien.',
    conditions: ['Nuit en bivouac', 'Peu de bois coupé disponible', 'Sol stable'],
    needs: ['4 à 6 grosses bûches longues', 'Feu tipi pour démarrer', 'Pierres de délimitation (optionnel)'],
    steps: [
      'Allumer un feu tipi au centre pour créer un bon lit de braises.',
      'Disposer 4 à 6 grosses bûches en étoile, extrémités dans les braises centrales.',
      'Le feu se concentre au point de jonction et consume lentement chaque bûche.',
      'Pousser les bûches vers le centre au fur et à mesure qu\'elles se consument.',
      'La flamme reste modérée — idéale pour une nuit sans surveillance constante.',
    ],
    attention: [
      'Jamais sous des branches basses — les braises peuvent éjecter des étincelles.',
      'Ne pas utiliser de bois humide : ça fume beaucoup et consume peu.',
      'La taille du feu est proportionnelle au diamètre des bûches, calibrer selon la nuit.',
    ]
  },

  // ═══════════════════════════════════════════════
  //  FEU › Amadou
  // ═══════════════════════════════════════════════

  {
    id: 'feu-amadou-prep',
    categoryId: 'feu',
    subcategoryId: 'amadou',
    type: 'technique',
    title: 'Préparer un nid d\'amadou',
    summary: 'L\'amadou transforme une étincelle en flamme. Sa qualité conditionne tout le reste du processus d\'allumage.',
    conditions: ['Temps sec', 'Matériaux disponibles dans l\'environnement'],
    needs: ['Herbes sèches (graminées, foin)', 'Écorce de bouleau ou de liège', 'Duvet de chardon / typha', 'Feuilles mortes sèches crissantes'],
    steps: [
      'Collecter des fibres très sèches : herbes, pailles, duvet de typha ou chardon — les frotter entre les paumes pour les assouplir.',
      'Former un nid en forme de cœur ou de panier, dense au centre et aéré sur les bords.',
      'Intégrer les fibres les plus fines et inflammables (duvet, paille pulvérisée) au cœur.',
      'Les fibres plus grosses (herbes, feuilles) forment l\'extérieur et aident à maintenir la forme.',
      'Tester la sécheresse : le nid doit crissier au serrage et ne pas se feutrer en boule molle.',
    ],
    attention: [
      'Un nid trop humide ne prend pas — le garder à l\'abri dans la veste.',
      'Un nid trop serré ne s\'oxygène pas bien — laisser de la légèreté au centre.',
      'Le duvet de massette (typha) est un des meilleurs amadous naturels d\'Europe.',
    ]
  },

  {
    id: 'feu-amadouvier',
    categoryId: 'feu',
    subcategoryId: 'amadou',
    type: 'naturel',
    title: 'Bolet amadouvier',
    nameLatin: 'Fomes fomentarius',
    summary: 'Champignon polypore parasite des hêtres et bouleaux morts. Son tissu interne carbonisé est l\'un des meilleurs amadous naturels.',
    tags: ['Médicinal (historique)', 'Amadou', 'Non comestible'],
    photo: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Fomes_fomentarius_6.jpg/960px-Fomes_fomentarius_6.jpg',
      credit: 'JovanaKoturov, CC BY-SA 4.0, Wikimedia Commons'
    },
    description: 'Champignon en forme de sabot de cheval, de couleur grise à brun, ferme. Se trouve principalement sur les hêtres morts ou dépérissants, aussi sur bouleaux. Le tissu interne (le trame) est la partie utile.',
    infoGrid: [
      { label: 'Période', value: 'Toute l\'année (vivace)' },
      { label: 'Habitat', value: 'Hêtraies, boulaies, forêts mixtes' },
      { label: 'Usage amadou', value: 'Tissu interne carbonisé au préalable' }
    ],
    steps: [
      'Identifier et récolter le champignon (pas sur le sol — accroché aux arbres).',
      'Trancher horizontalement pour accéder au tissu brun spongieux interne.',
      'Couper des morceaux de trame, les sécher complètement.',
      'Carboniser lentement dans un récipient fermé avec un petit trou (sans flamme directe) jusqu\'à noircissement.',
      'Conserver à l\'abri de l\'humidité. L\'amadou fini est léger, noir, et prend l\'étincelle immédiatement.',
    ],
    attention: [
      'Confusions peu probables (la forme en sabot et la dureté sont distinctives).',
      'Ne pas récolter sur un arbre encore vivant et en bonne santé.',
    ],
    certitude: 'Identification facile. Pas de risque de toxicité (non comestible mais sans danger au contact).'
  },

  {
    id: 'feu-amadou-conservation',
    categoryId: 'feu',
    subcategoryId: 'amadou',
    type: 'technique',
    title: 'Conservation de l\'amadou',
    summary: 'L\'amadou perd son efficacité s\'il absorbe de l\'humidité. Quelques habitudes simples garantissent sa disponibilité.',
    conditions: ['Randonnée longue durée', 'Météo humide'],
    needs: ['Boîte métallique hermétique (ex: boîte de médicaments)', 'Sachet zip', 'Amadou préparé'],
    steps: [
      'Stocker l\'amadou dans une boîte métallique hermétique — elle protège aussi contre l\'écrasement.',
      'Si pas de boîte : double sachet zip en serrant bien l\'air.',
      'Placer la boîte contre la peau (intérieur veste) en situation d\'humidité prolongée.',
      'Régénérer un amadou humide : 10-15 min de séchage à faible chaleur (pas flamme directe).',
      'Tester avant chaque sortie : l\'amadou doit prendre une étincelle en moins de 2 secondes.',
    ],
    attention: [
      'Un amadou qui a pris l\'eau ne sèche pas en 5 minutes — prévoir 30 min minimum.',
      'Ne jamais stocker amadou et allumettes dans le même compartiment (risque d\'allumage accidentel).',
    ]
  },

  // ═══════════════════════════════════════════════
  //  EAU
  // ═══════════════════════════════════════════════

  {
    id: 'eau-filtration',
    categoryId: 'eau',
    type: 'technique',
    title: 'Filtration par gravité (filtre improvisé)',
    summary: 'Filtre multicouche construit avec des matériaux naturels ou une bouteille. Élimine les particules et certains pathogènes, mais ne purifie pas à 100% — compléter par ébullition.',
    conditions: ['Eau trouble / boueuse', 'Source naturelle'],
    needs: ['Bouteille plastique ou tube d\'écorce', 'Charbon de bois concassé', 'Sable fin', 'Gravier', 'Tissu / bandana', 'Récipient de réception'],
    steps: [
      'Couper la bouteille en deux. La partie haute (goulot en bas) sert de filtre, la partie basse récupère l\'eau.',
      'Boucher le goulot avec un tissu dense plié en plusieurs épaisseurs.',
      'Remplir dans l\'ordre (du bas vers le haut) : gravier gros, sable fin, charbon concassé, sable fin, gravier fin.',
      'Verser l\'eau à filtrer dans la partie haute et attendre l\'écoulement.',
      'Recueillir l\'eau filtrée — elle sera plus claire mais pas nécessairement potable.',
      'Faire bouillir l\'eau filtrée 3 minutes (1 min suffit à >1000m d\'altitude).',
    ],
    attention: [
      'La filtration élimine les particules, pas tous les virus ni bactéries.',
      'Le charbon de bois réduit les contaminants chimiques et améliore le goût.',
      'Sans ébullition, l\'eau filtrée reste un risque sanitaire.',
    ],
    svgIllustration: SVG_FILTRE_EAU
  },

  {
    id: 'eau-purification',
    categoryId: 'eau',
    type: 'technique',
    title: 'Purification par ébullition',
    summary: 'Méthode la plus fiable et universelle. Détruit virus, bactéries et parasites. Simple mais énergivore.',
    conditions: ['Eau filtrée disponible', 'Feu possible', 'Récipient métallique'],
    needs: ['Récipient métallique (casserole, gamelle, boîte)', 'Eau filtrée ou décantée', 'Feu'],
    steps: [
      'Filtrer l\'eau en premier si elle est trouble (la turbidité protège les pathogènes).',
      'Porter à ébullition franche (bulles grosses et continues, pas juste frémir).',
      'Maintenir l\'ébullition 1 minute en plaine, 3 minutes au-dessus de 2000 m.',
      'Laisser refroidir à l\'abri des insectes (couvrir).',
      'Conserver dans un récipient propre et fermé.',
    ],
    attention: [
      'L\'ébullition ne retire pas les contaminants chimiques (pesticides, métaux lourds).',
      'Un feu de bois consomme beaucoup d\'eau — prévoir le stock de bois en conséquence.',
      'Ne jamais utiliser un récipient galvanisé à chaud (toxique).',
    ]
  },

  {
    id: 'eau-collecte',
    categoryId: 'eau',
    type: 'technique',
    title: 'Collecte d\'eau de pluie et rosée',
    summary: 'Eau de pluie et rosée sont naturellement filtrées et peu chargées en pathogènes. Excellentes sources d\'appoint.',
    conditions: ['Rosée tôt le matin', 'Pluie disponible', 'Pas de pollution atmosphérique proche'],
    needs: ['Toile imperméable (poncho, tarp)', 'Récipient propre', 'Tissu absorbant pour la rosée', 'Ficelle / cordelette'],
    steps: [
      'Pluie : tendre une toile inclinée avec un point bas et canaliser vers un récipient. Surface maximale = volume maximum.',
      'Rosée : essuyer l\'herbe ou les feuilles avec un chiffon absorbant tôt le matin, puis tordre au-dessus d\'un récipient.',
      'Rosée alternative : attacher des chiffons aux chevilles et marcher dans l\'herbe — tordre régulièrement.',
      'Conifères : les aiguilles captent le brouillard — poser un récipient sous une branche chargée de rosée.',
    ],
    attention: [
      'Éviter la collecte sous des arbres qui peuvent être traités (feuilles de noyer : allélopathiques).',
      'L\'eau de rosée dans des zones agricoles peut contenir des résidus — filtrer et bouillir.',
      'La pluie des premiers 5-10 minutes lave l\'atmosphère — attendre ou ne pas consommer les premières eaux.',
    ]
  },

  // ═══════════════════════════════════════════════
  //  ABRI
  // ═══════════════════════════════════════════════

  {
    id: 'abri-lean-to',
    categoryId: 'abri',
    type: 'technique',
    title: 'Abri lean-to (appenti)',
    summary: 'Abri unilatéral simple et rapide à construire. Idéal en forêt avec arbres disponibles. Bon compromis protection / effort.',
    conditions: ['Vent directionnel stable', 'Forêt avec branches', 'Durée : 1 à plusieurs nuits'],
    needs: ['2 arbres ou piquets à 2-3 m de distance', 'Traverse horizontale', 'Nombreux rameaux / branches', 'Feuilles, mousse, fougères'],
    steps: [
      'Choisir deux arbres espacés de 2 à 3 m, dans une zone naturellement protégée.',
      'Fixer une traverse horizontale à hauteur d\'épaule entre les deux arbres.',
      'Appuyer des bâtons / branches en diagonale de la traverse au sol, tous dans le même sens.',
      'Tresser des petites branches perpendiculairement pour créer un treillis.',
      'Recouvrir de couches successives de feuilles, mousse ou fougères en partant du bas (comme des tuiles).',
      'La couverture finale doit être épaisse de 30 cm minimum pour l\'étanchéité.',
      'Faire un lit de fougères ou mousse surélevé de 10 cm pour s\'isoler du sol.',
    ],
    attention: [
      'Orienter l\'ouverture opposée au vent dominant et à la pluie.',
      'Un feu tipi devant l\'ouverture réfléchit la chaleur à l\'intérieur.',
      'L\'isolation du sol est aussi importante que celle du dessus.',
    ],
    svgIllustration: SVG_LEAN_TO
  },

  {
    id: 'abri-bivouac',
    categoryId: 'abri',
    type: 'technique',
    title: 'Bivouac de fortune (tas de feuilles)',
    summary: 'Abri passif utilisant les feuilles comme isolant. Aucun matériel nécessaire. Efficace jusqu\'à -5°C si bien construit.',
    conditions: ['Feuilles sèches abondantes', 'Situation d\'urgence', 'Aucun matériel'],
    needs: ['Grande quantité de feuilles sèches (1 m³ minimum)', 'Branches rigides', 'Temps de construction : 2-3h'],
    steps: [
      'Choisir un emplacement sec, à l\'abri du vent, loin des zones inondables et des arbres morts.',
      'Construire un cadre en branches formant un tunnel ou une alcôve d\'environ 60 cm de large.',
      'Entasser des feuilles sur et dans le cadre, en couches épaisses successives.',
      'L\'épaisseur finale doit dépasser 60-80 cm sur les côtés et au-dessus.',
      'Préparer un lit intérieur de feuilles sèches de 30 cm d\'épaisseur minimum.',
      'S\'y glisser les pieds en premier, refermer l\'entrée avec des feuilles ou un sac.',
    ],
    attention: [
      'Les feuilles humides n\'isolent pas — chercher dans des zones abritées ou sous les conifères.',
      'Plus l\'abri est petit, mieux il retient la chaleur corporelle.',
      'Prévenir quelqu\'un de sa localisation avant de s\'y installer pour la nuit.',
    ]
  },

  {
    id: 'abri-isolation',
    categoryId: 'abri',
    type: 'technique',
    title: 'Isolation du sol (litière d\'urgence)',
    summary: 'Le sol conduit jusqu\'à 20x plus de chaleur que l\'air. Bien s\'isoler du sol est prioritaire, même avec un abri parfait.',
    conditions: ['Tout terrain', 'Toute saison', 'Urgence thermique'],
    needs: ['Fougères, feuilles, mousse, bruyère', 'Branches rigides (cadre)', 'Temps : 30 min'],
    steps: [
      'Délimiter un rectangle légèrement plus large que les épaules et aussi long que la taille + 30 cm.',
      'Poser une couche de branches rigides en croisillons pour créer un plancher surélevé.',
      'Recouvrir de couches successives de matières isolantes : d\'abord les plus grossières, puis les plus fines.',
      'L\'épaisseur minimale est de 15 cm comprimé — prévoir 30 cm car cela se tasse.',
      'Tester avec le coude posé 30 secondes : si le sol est perceptible, ajouter des couches.',
    ],
    attention: [
      'Éviter les zones avec des fourmis, guêpes, ou humidité stagnante visible.',
      'La mousse humide n\'isole presque pas — chercher sous les conifères ou dans les zones sèches.',
      'En hiver, même avec 30°C de différence entre sol et air, le sol peut être à 0°C.',
    ]
  },

  // ═══════════════════════════════════════════════
  //  PLANTES
  // ═══════════════════════════════════════════════

  {
    id: 'plante-ortie',
    categoryId: 'plantes',
    type: 'naturel',
    title: 'Ortie dioïque',
    nameLatin: 'Urtica dioica',
    summary: 'Plante urticante omniprésente, comestible cuite et riche en nutriments. L\'une des meilleures plantes de survie d\'Europe.',
    tags: ['Comestible (cuit)', 'Médicinal', 'Riche en protéines', 'Commun'],
    photo: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Urtica_dioica38_ies.jpg/640px-Urtica_dioica38_ies.jpg',
      credit: 'Frank Vincentz, CC BY-SA 3.0, Wikimedia Commons'
    },
    description: 'Plante vivace à feuilles opposées, dentées, recouvertes de poils urticants. Tiges quadrangulaires. Fleurs discrètes en épis. Pousse partout : lisières, bords de chemin, zones riches en azote.',
    infoGrid: [
      { label: 'Période', value: 'Mars à novembre (jeunes pousses printemps)' },
      { label: 'Habitat', value: 'Partout : lisières, jardins, friches' },
      { label: 'Comestible', value: 'Feuilles cuites (soupe, légume), graines' },
      { label: 'Médicinal', value: 'Anti-inflammatoire, diurétique (usage traditionnel)' }
    ],
    confusions: [
      { name: 'Lamier blanc (Lamium album)', risk: 'Confusion rare — feuilles similaires mais SANS poils urticants. Lamier est comestible également. Vérifier l\'absence de piqûre.' }
    ],
    certitude: 'Identification très facile : les poils piquants sont un critère indiscutable. Niveau de certitude requis : faible.'
  },

  {
    id: 'plante-plantain',
    categoryId: 'plantes',
    type: 'naturel',
    title: 'Plantain lancéolé',
    nameLatin: 'Plantago lanceolata',
    summary: 'Plante médicinale classique aux feuilles en rosette. Excellente pour les piqûres d\'insectes et blessures mineures.',
    tags: ['Médicinal', 'Comestible (jeunes feuilles)', 'Très commun'],
    photo: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Plantago_lanceolata.jpg/960px-Plantago_lanceolata.jpg',
      credit: 'Luis nunes alberto, CC BY 3.0, Wikimedia Commons'
    },
    description: 'Rosette de feuilles étroites, lancéolées, avec 3-5 nervures parallèles très visibles. Hampe florale fine terminée par un épi dense et brun. Fréquent dans les prairies, pelouses, bords de chemin.',
    infoGrid: [
      { label: 'Période', value: 'Toute l\'année (feuilles)' },
      { label: 'Habitat', value: 'Prairies, pelouses, chemins' },
      { label: 'Médicinal', value: 'Feuille froissée : anti-prurit, cicatrisante' },
      { label: 'Comestible', value: 'Jeunes feuilles crues ou en soupe' }
    ],
    confusions: [
      { name: 'Plantain majeur (Plantago major)', risk: 'Pas dangereux — feuilles plus larges, même usage. Comestible également.' }
    ],
    certitude: 'Identification facile (nervures parallèles, épi brun caractéristique). Niveau requis : faible.'
  },

  {
    id: 'plante-sureau',
    categoryId: 'plantes',
    type: 'naturel',
    title: 'Sureau noir',
    nameLatin: 'Sambucus nigra',
    summary: 'Arbuste aux usages multiples : fleurs et fruits noirs cuits sont comestibles. Les baies crues et toutes les autres parties sont toxiques (glycosides cyanogènes).',
    tags: ['Comestible (fleurs, baies cuites uniquement)', 'Médicinal', 'Toxique cru'],
    photo: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sambucus_nigra_0004.JPG/640px-Sambucus_nigra_0004.JPG',
      credit: 'H. Zell (Llez), CC BY-SA 3.0, Wikimedia Commons'
    },
    description: 'Arbuste ou petit arbre de 4-8 m, écorce grise et liégeuse. Feuilles composées de 5-7 folioles. Fleurs blanc crème en corymbes plates, très odorantes (juin). Baies noires violacées en grappes pendantes (août-octobre). Pousse en lisières, haies, zones rudérales, sols riches en azote.',
    infoGrid: [
      { label: 'Période', value: 'Fleurs : juin. Baies : août-octobre' },
      { label: 'Habitat', value: 'Lisières, haies, zones rudérales' },
      { label: 'Comestible', value: 'Fleurs (beignets, sirop), baies cuites seulement — la cuisson détruit les glycosides cyanogènes' },
      { label: 'Toxicité', value: 'Baies crues : nausées, vomissements. Feuilles, écorce, racines : toxiques (sambunigrine)' }
    ],
    confusions: [
      { name: 'Sureau hièble (Sambucus ebulus)', risk: 'DANGEREUX — plante herbacée (jamais ligneuse), max 1,8 m, étamines roses (non jaunes), baies dressées vers le haut, floraison juillet-août (plus tardive), odeur désagréable. Toxique. Critère absolu : le sureau noir est un arbuste à écorce liégeuse.' },
      { name: 'Sureau rouge (Sambucus racemosa)', risk: 'Baies rouges en grappe conique — distinction facile par la couleur. Toxique cru également.' }
    ],
    certitude: 'Identification globalement facile. La distinction sureau noir (arbuste ligneux) vs sureau hièble (herbacée à étamines roses) est un critère absolu à maîtriser. Niveau requis : moyen.'
  },

  // ═══════════════════════════════════════════════
  //  CHAMPIGNONS
  // ═══════════════════════════════════════════════

  {
    id: 'champ-cepe',
    categoryId: 'champignons',
    type: 'naturel',
    title: 'Cèpe de Bordeaux',
    nameLatin: 'Boletus edulis',
    summary: 'Le champignon comestible de référence, très recherché. Chair ferme, arôme puissant. Tubes (et non lamelles) caractéristiques.',
    tags: ['Comestible (excellent)', 'Tubes blancs à jaunes', 'Forêt tempérée'],
    photo: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Boletus_edulis_2.jpg/960px-Boletus_edulis_2.jpg',
      credit: 'Sergio Bobbio, CC BY-SA 3.0, Wikimedia Commons'
    },
    description: 'Chapeau brun, gras en temps humide, plus pâle vers les bords. Pied massif, blanc à beige, orné d\'un réseau de nervures blanches caractéristique. Tubes blancs virant au jaune verdâtre à maturité. Chair blanche immuable : ne bleuit pas à la coupe. Odeur agréable. Mycorhizique : pousse en symbiose avec chênes, hêtres, épicéas, sapins.',
    infoGrid: [
      { label: 'Période', value: 'Été à automne (juillet-novembre)' },
      { label: 'Habitat', value: 'Forêts mixtes, hêtraies, pessières' },
      { label: 'Comestible', value: 'Excellent cru ou cuit. Séché = arôme maximal' },
      { label: 'Pied', value: 'Massif, réseau blanc caractéristique' }
    ],
    confusions: [
      { name: 'Bolet de Satan (Rubroboletus satanas)', risk: 'DANGEREUX — chapeau blanc/gris (non brun), pores rouge-orangé à rouge sang, pied rouge-rose avec réseau, chair bleuit à la coupe. Présent surtout sous feuillus en zones chaudes. Règle absolue : tout bolet à pores colorés rouges ou oranges = ne pas consommer.' },
      { name: 'Bolet amer (Tylopilus felleus)', risk: 'Non mortel mais immangeable — réseau brun grossier (non blanc), pores rosés à maturité, goût amer intense même après cuisson. La saveur amère à cru est un critère d\'élimination fiable.' }
    ],
    certitude: 'Règle absolue : tout bolet dont la chair bleuit à la coupe ou dont les pores sont rouges/oranges → ne pas consommer. Le cèpe a chair blanche immuable et pores blancs/jaunes. Niveau requis : moyen à élevé pour les bolets.'
  },

  {
    id: 'champ-girolle',
    categoryId: 'champignons',
    type: 'naturel',
    title: 'Girolle',
    nameLatin: 'Cantharellus cibarius',
    summary: 'Champignon doré aux faux-plis fourchés, arôme fruité caractéristique. Un des plus sûrs à identifier.',
    tags: ['Comestible (excellent)', 'Faux-plis (non lamelles)', 'Couleur jaune dorée'],
    photo: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pfifferling_Cantharellus_cibarius.jpg/640px-Pfifferling_Cantharellus_cibarius.jpg',
      credit: 'Holger Krisp, CC BY 3.0, Wikimedia Commons'
    },
    description: 'Chapeau jaune à jaune-orangé, diamètre 4-10 cm, irrégulier, ondulé sur les bords. Dessous : faux-plis (plis forked) de même couleur que le chapeau — ils se bifurquent et sont décurrents sur le pied. Pas de vraies lamelles. Pied plein, de même couleur. Chair ferme, blanche à jaune pâle, arôme fruité caractéristique (abricot). Sol acide. Mycorhizique sous feuillus et conifères.',
    infoGrid: [
      { label: 'Période', value: 'Juin à novembre' },
      { label: 'Habitat', value: 'Forêts acides : hêtraies, chênaies, pessières' },
      { label: 'Comestible', value: 'Excellent sauté. Éviter la congélation.' },
      { label: 'Odeur', value: 'Fruitée, abricot — très caractéristique' }
    ],
    confusions: [
      { name: 'Fausse girolle (Hygrophoropsis aurantiaca)', risk: 'LÉGÈREMENT TOXIQUE — couleur orange plus vif, VRAIES lamelles minces, serrées et décurrentes (non des faux-plis). Critère clé : passer le doigt sous le chapeau — des lamelles ont un tranchant net, les faux-plis de la girolle s\'aplatissent et se bifurquent.' },
      { name: 'Omphalote de l\'olivier (Omphalotus olearius)', risk: 'TOXIQUE — pousse en touffe sur souches ou racines d\'oliviers ou de chênes (sud de la France). Beaucoup plus grand (jusqu\'à 15 cm), lamelles vraies orange vif, luisantes la nuit. Odeur de champignon de Paris, non fruitée.' }
    ],
    certitude: 'Les faux-plis fourchés et l\'arôme fruité (abricot) sont des critères très fiables. Passer le doigt sous le chapeau : une vraie lamelle a un tranchant. Niveau requis : faible à moyen.'
  },

  {
    id: 'champ-pied-mouton',
    categoryId: 'champignons',
    type: 'naturel',
    title: 'Pied-de-mouton',
    nameLatin: 'Hydnum repandum',
    summary: 'Champignon à aiguillons sous le chapeau — critère unique qui écarte presque toutes les confusions. Comestible légèrement amer.',
    tags: ['Comestible', 'Aiguillons blancs', 'Confusion très peu probable'],
    photo: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Hydnum_repandum_1.jpg/640px-Hydnum_repandum_1.jpg',
      credit: 'Karelj, domaine public, Wikimedia Commons'
    },
    description: 'Chapeau brun pâle à crème, irrégulier et bosselé, diamètre 3-10 cm. Dessous du chapeau : aiguillons (épines) blancs à crème de 3-6 mm, caractéristique unique dans les forêts tempérées. Pied trapu, blanc à crème, plein. Chair ferme, blanche, peut virer à l\'orange au froissement. Légèrement amère, surtout les vieux spécimens. Préfère les sols calcaires.',
    infoGrid: [
      { label: 'Période', value: 'Août à novembre (parfois décembre)' },
      { label: 'Habitat', value: 'Forêts de feuillus et conifères, sols calcaires' },
      { label: 'Comestible', value: 'Bon comestible. Blanchir les vieux spécimens pour atténuer l\'amertume. Retirer les aiguillons si nécessaire.' },
      { label: 'Critère clé', value: 'Aiguillons sous le chapeau — unique en forêt tempérée' }
    ],
    confusions: [
      { name: 'Hydne rougeâtre (Hydnum rufescens)', risk: 'Comestible également. Plus petit (2-5 cm), couleur plus rougeâtre-orangée, préfère les conifères. Aucun risque.' }
    ],
    certitude: 'Les aiguillons sous le chapeau sont un critère infaillible — aucun champignon dangereux européen ne possède cette structure. Niveau requis : faible.'
  },

  // ═══════════════════════════════════════════════
  //  PISTES & TRACES
  // ═══════════════════════════════════════════════

  {
    id: 'piste-sanglier',
    categoryId: 'pistes',
    type: 'naturel',
    title: 'Empreinte de sanglier',
    nameLatin: 'Sus scrofa',
    summary: 'Empreinte à deux onglons larges, arrondis, souvent accompagnée d\'ergots visibles. Présence de boutis et frottoirs caractéristiques.',
    tags: ['Ongulé', 'Nocturne', 'Forêt et agriculture'],
    description: 'Deux grands onglons arrondis (plus larges que le cerf), de 5 à 8 cm. Les deux ergots postérieurs touchent le sol sur terrain meuble, laissant une empreinte à 4 points. La piste est zigzaguante. Boutis : zones retournées (fouillage). Frottoirs : traces de frottement sur les troncs, souvent enduits de boue.',
    infoGrid: [
      { label: 'Taille empreinte', value: '5 à 8 cm de large' },
      { label: 'Indices associés', value: 'Boutis, frottoirs, souilles (bains de boue)' },
      { label: 'Habitat', value: 'Forêts, bocage, cultures' },
      { label: 'Activité', value: 'Crépusculaire à nocturne surtout' }
    ],
    confusions: [
      { name: 'Cerf (Cervus elaphus)', risk: 'Onglons plus allongés et pointus que le sanglier. Ergots rarement visibles sur sol dur.' },
      { name: 'Chevreuil (Capreolus capreolus)', risk: 'Onglons similaires mais beaucoup plus petits (2-3 cm). Pas de boutis.' }
    ],
    certitude: 'Identification par la forme ronde des onglons + ergots + indices associés (boutis). Niveau requis : faible.'
  },

  {
    id: 'piste-renard',
    categoryId: 'pistes',
    type: 'naturel',
    title: 'Empreinte et piste de renard',
    nameLatin: 'Vulpes vulpes',
    summary: 'Empreinte à 4 doigts, alignés sur une diagonale caractéristique. La piste en "ligne droite" est distinctive.',
    tags: ['Canidé', 'Nocturne', 'Forêt, bocage'],
    description: 'Empreinte ovale de 4-5 cm, 4 doigts avec griffes fines. Les coussinets interdigitaux forment un "X" inversé entre les deux doigts centraux. Caractéristique clé : la piste suit une ligne quasi droite (pas les deux rangées parallèles du chien).',
    infoGrid: [
      { label: 'Taille', value: '4 à 5 cm' },
      { label: 'Piste', value: 'Ligne droite (trot direct)' },
      { label: 'Habitat', value: 'Forêts, champs, périurbain' },
      { label: 'Indices', value: 'Crottins fuselés, odeur musquée' }
    ],
    confusions: [
      { name: 'Chien domestique', risk: 'Empreinte plus ronde, piste en double rangée (démarche moins économique). Griffes plus épaisses.' }
    ],
    certitude: 'La piste en ligne droite est le critère le plus fiable. Niveau requis : faible.'
  },

  {
    id: 'piste-cerf',
    categoryId: 'pistes',
    type: 'naturel',
    title: 'Indices de présence du cerf',
    nameLatin: 'Cervus elaphus',
    summary: 'Traces, frayures, boutis, fientes — ensemble d\'indices permettant de confirmer la présence du cerf.',
    tags: ['Ongulé', 'Crépusculaire', 'Grandes forêts'],
    description: 'Onglons allongés et pointus, 6-8 cm chez l\'adulte. Ergots visibles sur sol meuble. Frayures : marques de bois sur les troncs (printemps/automne). Vermoulures : déjections cylindriques noires de 2-3 cm. Velours au sol en été (desquamation des bois).',
    infoGrid: [
      { label: 'Empreinte', value: '6 à 8 cm, pointue, allongée' },
      { label: 'Frayures', value: 'Écorce lacérée à 80-150 cm de hauteur' },
      { label: 'Fientes', value: 'Cylindriques, 2-3 cm, noires' },
      { label: 'Habitat', value: 'Grandes forêts, lisières, vallées' }
    ],
    confusions: [
      { name: 'Chevreuil', risk: 'Empreinte beaucoup plus petite (2-3 cm). Frayures à hauteur plus basse (40-70 cm).' }
    ],
    certitude: 'Identification par faisceau d\'indices (empreinte + frayures + fientes). Niveau requis : faible.'
  },

  // ═══════════════════════════════════════════════
  //  FABRICATION
  // ═══════════════════════════════════════════════

  {
    id: 'fab-cordage',
    categoryId: 'fabrication',
    type: 'technique',
    title: 'Tordage de cordage végétal',
    summary: 'Technique de base pour fabriquer un cordage solide à partir de fibres végétales. Résistance surprenante avec de la pratique.',
    conditions: ['Fibres végétales disponibles', 'Mains sèches'],
    needs: ['Tiges d\'ortie, ronces décortiquées, chanvre sauvage', 'Coussin de cuir optionnel', 'Temps : 15-30 min par mètre'],
    steps: [
      'Préparer les fibres : tiges d\'ortie décortiquées (rouir les fibres = faire tremper 24h), liber de tilleul, ronces effilées.',
      'Tenir un faisceau de fibres entre les deux mains, trouver le milieu.',
      'Tordre les deux moitiés séparément dans le sens horaire avec les doigts.',
      'Entortiller les deux torons dans le sens antihoraire autour l\'un de l\'autre.',
      'Continuer en ajoutant des fibres neuves par superposition quand les précédentes s\'amincissent.',
      'Finir en liant l\'extrémité avec une petite cordelette ou un nœud d\'about.',
    ],
    attention: [
      'Le cordage doit être torsadé dans les sens opposés au niveau toron et tresse sinon il se détord.',
      'Les fibres fraîches torsadent mieux que les sèches — travailler avant que ça sèche.',
      'Résistance maximale atteinte avec 3-4 torons et des fibres longues sans épissure.',
    ]
  },

  {
    id: 'fab-silex',
    categoryId: 'fabrication',
    type: 'technique',
    title: 'Taille du silex (base)',
    summary: 'Introduction à la taille lithique. Permet d\'obtenir des éclats tranchants pour couper, racler, allumer un feu.',
    conditions: ['Silex ou quartz disponible', 'Protection mains obligatoire'],
    needs: ['Silex, chert ou quartz', 'Percuteur dur (galet de quartzite)', 'Cuir épais ou tissu pour les genoux', 'Lunettes si disponibles'],
    steps: [
      'Choisir un silex sans fissure visible, de qualité homogène (son mat au choc = bon signe).',
      'Identifier le plan de frappe : bord à 45-75°, angle plus aigu = éclat plus fin.',
      'Protéger les genoux avec du cuir. Tenir le silex fermement sur la cuisse.',
      'Frapper avec le percuteur à 1-2 cm du bord, avec un mouvement de levier plus que de martèlement.',
      'L\'éclat part du point de frappe vers l\'intérieur — guider l\'intention.',
      'Affiner les bords au percuteur tendre (bois dur, os) pour une meilleure tranche.',
    ],
    attention: [
      'Protection des yeux : les éclats projettent des micro-fragments à haute vitesse.',
      'Ne jamais tenir le silex dans le creux de la main lors de la frappe.',
      'Les bords sont extrêmement tranchants immédiatement après taille — manipuler avec soin.',
    ]
  },

  {
    id: 'fab-poterie',
    categoryId: 'fabrication',
    type: 'technique',
    title: 'Poterie primitive (colombin)',
    summary: 'Technique au colombin sans tour. Permet de créer un récipient de cuisson en argile naturelle prélevée sur le terrain.',
    conditions: ['Argile disponible (test plasticité)', 'Feu chaud disponible pour cuisson'],
    needs: ['Argile plastique (test : rouler en corde de 4 mm sans fissure)', 'Eau', 'Sable fin ou chamotte', 'Feu à haute température (bois dur)'],
    steps: [
      'Tester l\'argile : rouler un boudin de 6 mm, enrouler autour du doigt — si fissure = ajouter du dégraissant (sable).',
      'Malaxer l\'argile longtemps pour éliminer les bulles d\'air (elles explosent à la cuisson).',
      'Former un fond plat en pinçant une galette de 8-10 mm d\'épaisseur.',
      'Rouler des colombins (boudins de 15 mm) et les spiraler sur le fond en lissant les joints.',
      'Lisser l\'intérieur et l\'extérieur avec un galet mouillé. Maintenir une épaisseur régulière.',
      'Sécher lentement à l\'air pendant 24 à 48 heures minimum — jamais au soleil direct.',
      'Cuire dans un feu de bois, progressivement : d\'abord à la périphérie puis dans les braises (800°C idéal).',
    ],
    attention: [
      'Une poterie mal séchée éclate en cuisson — pas de précipitation.',
      'Les bulles d\'air explosent — malaxer l\'argile longtemps.',
      'La première cuisson en feu ouvert donne une céramique fragile mais fonctionnelle.',
    ]
  },

  // ═══════════════════════════════════════════════
  //  NAVIGATION
  // ═══════════════════════════════════════════════

  {
    id: 'nav-etoile-polaire',
    categoryId: 'navigation',
    type: 'technique',
    title: 'Orientation par l\'étoile Polaire',
    summary: 'L\'étoile Polaire (Polaris) indique le Nord géographique avec une précision de moins de 1°. Méthode fiable par ciel dégagé.',
    conditions: ['Ciel dégagé', 'Hémisphère nord', 'Nuit'],
    needs: ['Ciel nocturne visible', 'Yeux adaptés à l\'obscurité (15 min)'],
    steps: [
      'Trouver la Grande Ourse (7 étoiles en casserole) — toujours visible sous nos latitudes.',
      'Identifier les deux étoiles du bord du "seau" de la casserole (Dubhe et Mérak).',
      'Prolonger la ligne Mérak-Dubhe vers le haut sur environ 5 fois la distance entre elles.',
      'L\'étoile brillante isolée au bout de cette ligne est Polaris (étoile Polaire).',
      'Polaris indique le Nord géographique. S\'y orienter et mémoriser la direction.',
      'Vérifier avec la Petite Ourse : Polaris est l\'extrémité de sa queue.',
    ],
    attention: [
      'Polaris n\'est pas l\'étoile la plus brillante du ciel — c\'est l\'extrémité de la Petite Ourse.',
      'Sous 20° de latitude nord, Polaris est très basse sur l\'horizon et moins utilisable.',
      'En zone urbaine, pollution lumineuse peut masquer les petites étoiles — chercher la Grande Ourse en premier.',
    ]
  },

  {
    id: 'nav-nuages',
    categoryId: 'navigation',
    type: 'technique',
    title: 'Lecture du ciel et prévision météo',
    summary: 'Les nuages sont des indicateurs fiables de l\'évolution météo à 6-12h. Apprendre à les lire permet d\'anticiper pluie, orage ou beau fixe.',
    conditions: ['Ciel observable', 'Horizon dégagé'],
    needs: ['Observation du ciel sur 30 min', 'Sens du vent'],
    steps: [
      'Observer la direction du vent dominant et son évolution : vent de SO → pluie probable. Vent de NE → temps sec.',
      'Cirrus (fils blancs très hauts) : temps stable pour 12-24h mais front approchant.',
      'Alto-cumulus (moutons gris moyens) : instabilité possible dans 6-12h.',
      'Cumulus bien blancs et arrondis le matin : belle journée probable.',
      'Cumulus qui s\'élèvent en tours l\'après-midi : risque orage en fin de journée.',
      'Nimbostratus (couverture grise basse et continue) : pluie continue imminente.',
    ],
    attention: [
      'Ces règles valent pour l\'Europe tempérée — elles varient selon les régions.',
      'Ne jamais partir en randonnée en montagne si alto-cumulus présents le matin.',
      'La règle "ciel rouge le soir = beau lendemain" est fiable en zone tempérée car les perturbations viennent de l\'Ouest.',
    ]
  },

  {
    id: 'nav-cadran-solaire',
    categoryId: 'navigation',
    type: 'technique',
    title: 'Cadran solaire au bâton (méthode ombre)',
    summary: 'Méthode de navigation solaire qui fonctionne par temps ensoleillé. Précision suffisante pour l\'orientation directionnelle.',
    conditions: ['Soleil visible', 'Sol plat', 'Heure du jour (pas midi)'],
    needs: ['Bâton droit de 30-50 cm', 'Sol plat ou surface plane', 'Cailloux ou bâtonnets de marquage'],
    steps: [
      'Planter le bâton verticalement dans un sol plat.',
      'Marquer l\'extrémité de l\'ombre avec un caillou (point 1). Attendre 15-20 minutes.',
      'Marquer la nouvelle position de l\'extrémité de l\'ombre (point 2).',
      'Tracer une ligne entre les deux points : cette ligne est orientée OUEST (point 1) → EST (point 2).',
      'Se placer avec le pied gauche sur le point 1 (Ouest) et le pied droit sur le point 2 (Est).',
      'On fait face au Nord. Le Sud est derrière soi.',
    ],
    attention: [
      'Cette méthode ne fonctionne pas à midi solaire (ombre nulle ou minimum).',
      'L\'ombre se déplace de l\'Ouest vers l\'Est en raison de la rotation de la Terre.',
      'Valable dans les deux hémisphères, mais le Nord et le Sud s\'inversent au Sud de l\'équateur.',
    ]
  },

  // ═══════════════════════════════════════════════
  //  PREMIERS SECOURS
  // ═══════════════════════════════════════════════

  {
    id: 'secours-hypothermie',
    categoryId: 'secours',
    type: 'technique',
    title: 'Hypothermie : signes et traitement',
    summary: 'L\'hypothermie tue progressivement. Reconnaître les stades tôt est vital. Le réchauffement doit être progressif.',
    conditions: ['Température basse', 'Vent + humidité', 'Épuisement', 'Immersion eau froide'],
    needs: ['Couverture de survie', 'Vêtements secs', 'Boissons chaudes sucrées si conscient', 'Abri'],
    steps: [
      'Stade léger (35-32°C — frissons forts, conscience normale) : mettre à l\'abri du vent et de l\'humidité, changer les vêtements mouillés, isoler du sol, couvrir entièrement, boisson chaude sucrée si avalée facilement.',
      'Stade modéré (32-28°C — frissons absents, confusion, somnolence) : urgence. Allonger horizontalement (ne pas faire marcher). Couverture de survie côté aluminisé vers le corps. Réchauffement passif uniquement : isoler, couvrir, protéger.',
      'Stade sévère (<28°C — inconscient, pouls imperceptible) : urgence vitale. Manipuler avec une extrême douceur (risque de fibrillation). Vérifier le pouls jusqu\'à 60 secondes avant de déclarer absent. RCP si absence confirmée.',
      'Réchauffement actif doux si stade léger seulement : poches chaudes ou mains tièdes appliquées sur les aisselles, l\'aine et la nuque uniquement (zones vasculaires centrales).',
      'Ne jamais frictionner les membres ni appliquer de chaleur directe sur les extrémités — le sang froid périphérique rejoint le cœur et l\'abaisse davantage (phénomène d\'afterdrop).',
      'Évacuation médicale dès que possible pour les stades modéré et sévère.',
    ],
    attention: [
      '⚠ Ne jamais donner d\'alcool : vasodilatateur périphérique, accélère la déperdition calorique.',
      '⚠ Un cœur hypothermique est électriquement instable (risque de fibrillation ventriculaire) — tout choc ou mouvement brusque peut déclencher un arrêt.',
      '⚠ L\'absence de frissons n\'indique pas un réchauffement — c\'est souvent le signe d\'aggravation vers le stade modéré.',
    ]
  },

  {
    id: 'secours-hemorragie',
    categoryId: 'secours',
    type: 'technique',
    title: 'Hémorragie : compression et garrots',
    summary: 'Une hémorragie sévère est mortelle en 3-5 minutes. La compression directe est la première action, le garrot une mesure extrême.',
    conditions: ['Plaie profonde', 'Saignement important', 'Urgence'],
    needs: ['Tissu propre / bandage', 'Lien de garrot (ceinture, cordelette large)', 'Bâton rigide (pour tourniquet)'],
    steps: [
      'Comprimer IMMÉDIATEMENT et FERMEMENT avec les deux mains sur la plaie.',
      'Maintenir la compression sans relâcher au minimum 10 minutes (vérifier pas avant).',
      'Si le tissu sature, EN AJOUTER UN DESSUS sans retirer le premier.',
      'Surélever le membre blessé si possible (réduire la pression sanguine locale).',
      'Garrot uniquement pour les membres, si la compression est insuffisante : poser à 5-7 cm AU-DESSUS de la blessure.',
      'Serrer jusqu\'à arrêt du saignement. Marquer l\'heure de pose sur la peau. Ne JAMAIS desserrer seul en forêt.',
      'Évacuation d\'urgence obligatoire.',
    ],
    attention: [
      '⚠ Le garrot est irréversible au-delà de 2h sans prise en charge médicale.',
      '⚠ Ne jamais poser de garrot sur le cou, l\'aine ou l\'aisselle.',
      'Une compression mal faite (trop légère) n\'arrête pas le saignement et donne une fausse sécurité.',
    ]
  },

  {
    id: 'secours-fracture',
    categoryId: 'secours',
    type: 'technique',
    title: 'Fracture : immobilisation de terrain',
    summary: 'L\'immobilisation réduit la douleur et prévient les complications. Improviser une attelle efficace avec les moyens du bord.',
    conditions: ['Fracture suspectée', 'Pas d\'évacuation immédiate possible'],
    needs: ['Branches rigides ou bâtons', 'Tissu (vêtement, bandage)', 'Rembourrage (mousse, vêtements)'],
    steps: [
      'Ne pas réduire (remettre en place) une fracture — immobiliser dans la position trouvée.',
      'Retirer délicatement les accessoires gênants (montre, bague) avant le gonflement.',
      'Préparer deux attelles rigides plus longues que les articulations encadrant la fracture.',
      'Rembourrer entre l\'attelle et le membre (éviter la compression directe).',
      'Fixer avec des liens sur 3 à 4 points, en vérifiant la circulation (ongles blancs qui reprennent couleur = OK).',
      'Vérifier le pouls distal et la sensibilité après immobilisation.',
      'Évacuation médicale dès que possible.',
    ],
    attention: [
      '⚠ Une fracture ouverte (os visible) est une urgence infectieuse — couvrir d\'un linge propre humide.',
      '⚠ Fracture de la colonne vertébrale : NE PAS BOUGER la victime sans protocole de maintien de l\'axe tête-cou-tronc.',
      'Trop serrer les liens = risque de nécrose. Vérifier la circulation toutes les 15-20 min.',
    ]
  },

  // ═══════════════════════════════════════════════
  //  NŒUDS
  // ═══════════════════════════════════════════════

  {
    id: 'noeud-chaise',
    categoryId: 'noeuds',
    type: 'noeud',
    title: 'Nœud de chaise',
    summary: 'Boucle fixe ne coulissant pas, ne se bloque pas sous charge. Un des nœuds les plus polyvalents de la randonnée.',
    usages: ['Hissage d\'une charge', 'Boucle d\'amarrage', 'Nœud de sécurité en escalade traditionnelle', 'Attacher un cordage à un arbre'],
    svgIllustration: SVG_NOEUD_CHAISE,
    steps: [
      'Former une petite boucle (le "terrier") dans le brin porteur, en faisant passer la corde par-dessus.',
      'Passer l\'extrémité libre (le "lapin") à travers la boucle en venant du dessous.',
      'Le "lapin" contourne le "tronc" (brin porteur) et revient dans le "terrier".',
      'Serrer en tirant simultanément la grande boucle et le brin porteur.',
    ],
    attention: [
      'Le sens de formation de la boucle initiale est critique — un chaise inversé peut se défaire.',
      'Terminer par un demi-clé de sécurité sur le brin porteur en alpinisme.',
      'Ne pas utiliser comme nœud de jonction entre deux cordes.',
    ]
  },

  {
    id: 'noeud-cabestan',
    categoryId: 'noeuds',
    type: 'noeud',
    title: 'Nœud de cabestan',
    summary: 'Nœud d\'amarrage ajustable, très rapide à poser et défaire. S\'adapte à la charge, se serre sous traction.',
    usages: ['Amarrage à un poteau, arbre, crochet', 'Fixation provisoire rapide', 'Début d\'un amarrage complexe'],
    svgIllustration: SVG_NOEUD_CABESTAN,
    steps: [
      'Former deux boucles identiques dans la même direction de rotation.',
      'Superposer la deuxième boucle sur la première.',
      'Passer l\'ensemble sur le support (poteau, arbre).',
      'Tirer sur les deux brins pour serrer.',
      'Alternative sans extrémité libre : enrouler deux demi-clés croisées directement sur le support.',
    ],
    attention: [
      'Le cabestan glisse si la charge est alternée (tire-pousse) — préférer le nœud de chaise dans ce cas.',
      'Ne pas utiliser en sécurité vie : il peut se défaire si la charge s\'allège.',
      'Très difficile à défaire mouillé et sous forte charge — anticiper.',
    ]
  },

  {
    id: 'noeud-prusik',
    categoryId: 'noeuds',
    type: 'noeud',
    title: 'Nœud de Prusik',
    summary: 'Nœud autobloquant : coulisse librement sur une corde grosse quand on le tient, bloque instantanément sous charge.',
    usages: ['Autosauvetage en rappel', 'Remontée sur corde fixe', 'Tirage de charge', 'Sécurité en progression'],
    svgIllustration: SVG_NOEUD_PRUSIK,
    steps: [
      'Utiliser un anneau de cordelette de 5-7 mm de diamètre (la corde porteuse fait 8-11 mm).',
      'Passer l\'anneau autour de la corde porteuse.',
      'Faire passer l\'anneau au travers de lui-même 3 fois (3 spires parallèles).',
      'Les spires doivent être bien alignées et non croisées.',
      'L\'anneau résultant sert de poignée ou de point d\'ancrage.',
      'Tester le blocage avant de se charger dessus.',
    ],
    attention: [
      'Fonctionne uniquement si la corde de Prusik est plus fine que la corde porteuse.',
      'Avec des cordes très mouillées ou verglacées, l\'efficacité diminue — 4 spires dans ce cas.',
      'Bloquer manuellement en serrant les spires — ne jamais compter sur 1 ou 2 tours seulement.',
    ]
  }

];

// ── Index de recherche ──────────────────────────────────────
export function buildSearchIndex() {
  return CARDS.map(card => {
    const parts = [
      card.title,
      card.summary,
      card.nameLatin || '',
      (card.tags || []).join(' '),
      (card.conditions || []).join(' '),
      (card.needs || []).join(' '),
      (card.steps || []).join(' '),
      (card.usages || []).join(' '),
      (card.description || '')
    ];
    return {
      id: card.id,
      categoryId: card.categoryId,
      subcategoryId: card.subcategoryId,
      title: card.title,
      summary: card.summary,
      searchText: parts.join(' ').toLowerCase()
    };
  });
}

// ── Helpers d\'accès ────────────────────────────────────────
export function getCardsByCategory(catId, subId = null) {
  return CARDS.filter(c => {
    if (c.categoryId !== catId) return false;
    if (subId) return c.subcategoryId === subId;
    return true;
  });
}

export function getCard(cardId) {
  return CARDS.find(c => c.id === cardId) || null;
}

export function getCategory(catId) {
  return CATEGORIES.find(c => c.id === catId) || null;
}

export function getCategoryLabel(catId, subId) {
  return catLabel(catId, subId);
}
