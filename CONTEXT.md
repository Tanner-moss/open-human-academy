# Human Academy — Full Project Context

> Condensed context file for continuing this project with any LLM. Last updated: 2026-03-05.

---

## What Is This?

**Human Academy** is a single-file HTML web app (`index.html`, ~2000 lines) that structures all of human knowledge into interactive, game-style skill trees. Users progress through nodes by clicking to "master" them, earning XP and unlocking downstream nodes. A Windows `.exe` launcher opens it in the default browser.

---

## File Structure

```
human-academy/
├── index.html              # THE ENTIRE APP — HTML + CSS + JS in one file (~2000 lines)
├── build-exe.ps1           # PowerShell script to compile HumanAcademy.exe
├── HumanAcademy.exe        # Windows launcher (opens index.html in browser)
├── planning.md             # Original project vision & requirements
├── progress.md             # Task tracker (partially outdated — see below)
├── schools-of-thought.md   # Full taxonomy of academic disciplines
├── CONTEXT.md              # THIS FILE
└── launcher.ps1            # Legacy launcher script (superseded by build-exe.ps1)
```

---

## Architecture

### Single-File App
Everything lives in `index.html`. No frameworks, no build tools, no npm. Pure HTML/CSS/JS.

### Fonts
Google Fonts CDN: **Fraunces** (serif, headings) + **Manrope** (sans-serif, body).

### Theme System
CSS custom properties on `:root` (light) and `:root[data-theme="dark"]` (dark). Key tokens:
- Colors: `--bg-primary`, `--bg-card`, `--text-primary`, `--accent`, etc.
- Glass surfaces: `--nav-glass`, `--surface-glass`, `--footer-glass`, `--card-top`, `--card-bottom`
- Domain hues: `--hue-humanities`, `--hue-social`, `--hue-natural`, `--hue-formal`, `--hue-applied`, `--hue-crafts`, `--hue-interdisciplinary`

Theme is toggled via a Settings panel (gear icon in nav) and persisted in `localStorage` key `humanAcademyTheme`.

### localStorage Keys
| Key | Type | Purpose |
|-----|------|---------|
| `humanAcademyTheme` | `"light"` or `"dark"` | Theme preference |
| `humanAcademy.skillTree.v1` | JSON `{xp: number, nodeStates: {[id]: "locked"|"unlocked"|"mastered"}}` | Skill tree progress |
| `humanAcademy.hasStarted` | `"1"` | Whether user has begun (triggers profile mode) |

### XP System
- `XP_PER_LEVEL = 120`
- Level = `floor(xp / 120) + 1`
- Nodes award 20–80 XP based on tier depth

---

## Navigation Flow (3-Tier)

The app has a multi-page feel but it's all one HTML file using show/hide sections:

```
HOME PAGE (hero, stats, domain grid, features)
    │
    ├── Nav: "Skill Tree" tab
    │       ↓
    │   SKILL TREES PAGE (#skill-tree)
    │   Shows domain cards (Humanities, Social Sciences, etc.)
    │   Clicking a domain card →
    │       ↓
    │   DISCIPLINE VIEW (#discipline-view)
    │   Shows disciplines within that domain
    │   Split: "Active Disciplines" (top) / "Inactive Disciplines" (bottom)
    │   Only disciplines with hasTree=true have "Open Tree" button →
    │       ↓
    │   GRAPH VIEW (#domain-view)
    │   Full node graph with pan/zoom, progress stats, Start At controls
    │   "Back To Disciplines" → discipline view
    │
    ├── Nav: "Domains" tab → scrolls to #domains section (domain cards on home page)
    ├── Nav: "Features" tab → scrolls to #features section
    ├── Nav: "Begin Learning" CTA → navigates to Skill Trees page
    └── Nav: "Roadmap" / "About" → shows "Coming soon" toast
```

### Profile Mode
When `hasStartedJourney()` returns true (user has mastered ≥1 node or `hasStarted` flag set), `body.profile-mode` class is added, which hides `.hero`, `.stats`, and `#features` sections.

### Section Visibility Logic
- `#skill-tree` — visible by default
- `#discipline-view` — `.hidden` by default, shown when a domain is clicked from skill tree listing
- `#domain-view` — `.hidden` by default, shown when "Open Tree" clicked on a discipline card
- Navigation between views uses `classList.add/remove('hidden')`

---

## Skill Tree Data

Currently only **Philosophy** (under Humanities) has a playable tree.

### treeData Object (JS)
```js
const treeData = {
  domain: 'Philosophy',
  world: { width: 1380, height: 700 },
  tiers: ['Foundations', 'Frameworks', 'Systems', 'Mastery'],
  nodes: [
    // 12 nodes with id, title, tier, xp, x, y, prereqs[]
    // Layout: left-to-right columns by tier
    // Foundations (x=60) → Frameworks (x=310) → Systems (x=560) → Mastery (x=830, x=1100)
    // Capstone Synthesis is at x=1100, centered between Comparative Traditions and Applied Philosophy
  ]
};
```

### Node Graph Rendering
- Nodes: absolute-positioned `<button>` elements inside `.graph-world`
- Links: SVG bezier curves in `.graph-links` overlay
- Pan: pointer events (pointerdown/pointermove/pointerup) on `.graph-viewport`
- Zoom: CSS `zoom` property on `.graph-world` (NOT transform scale — this preserves text crispness)
- Zoom range: 0.7 to 1.8
- Pan stored in `graphTransform = { x, y, scale }`
- `zoom` applied as `world.style.zoom = graphTransform.scale`, translate via `transform`

### Node States
- **locked**: greyed out, not clickable (prereqs not met)
- **unlocked**: highlighted border, clickable → mastering it
- **mastered**: green tint, checkmark, awards XP

### Discipline Data
```js
const disciplinesByDomain = {
  humanities: [
    { id: 'philosophy', name: 'Philosophy', treeId: 'philosophy', hasTree: true },
    { id: 'history', name: 'History', hasTree: false },
    // ... 7 total
  ],
  social: [ /* 8 disciplines */ ],
  natural: [ /* 6 disciplines */ ],
  formal: [ /* 2 disciplines */ ],
  applied: [ /* 6 disciplines */ ],
  crafts: [ /* 4 disciplines */ ],
  interdisciplinary: [ /* 1 discipline */ ]
};
```

### Domain Data
7 domains defined in `domains[]` array: humanities, social, natural, formal, applied, crafts, interdisciplinary. Each has: id, hue, icon, name, desc, tags[], disciplines count, topics count.

---

## Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.hidden` | `display: none !important` — used to show/hide sections |
| `.profile-mode` | Added to `<body>` — hides hero/stats/features for returning users |
| `.graph-viewport` | Overflow-hidden container for the node graph (560px height) |
| `.graph-world` | Absolute-positioned canvas holding nodes + SVG links |
| `.graph-node` | Individual skill node button (176×82px) |
| `.graph-node.locked/unlocked/mastered` | Node state styling |
| `.graph-link` | SVG path for prerequisite connections |
| `.st-domain-card` | Domain card on Skill Trees listing page |
| `.disc-card` | Discipline card on Discipline View page |
| `.skill-tree-shell` | Glass-morphism container for tree content |
| `.academy-progress` | Progress stats bar (XP, mastered, completion) |

---

## Key JS Functions

| Function | Purpose |
|----------|---------|
| `navigateTo(target)` | Nav tab routing — resets sub-views, scrolls to section |
| `renderSkillTreeListing()` | Renders domain cards on #skill-tree page |
| `openDisciplineView(domainId)` | Shows discipline listing for a domain |
| `closeDisciplineView()` | Returns to skill tree listing |
| `renderDisciplineListing(domainId)` | Renders Active/Inactive discipline cards |
| `openTreeView(disciplineId)` | Opens the node graph for a discipline |
| `closeTreeView()` | Returns to discipline listing |
| `renderDomainGraph(newlyUnlocked, newlyMastered)` | Renders all nodes + SVG links |
| `completeNode(nodeId)` | Masters a node, awards XP, unlocks children |
| `setStartTier(tier)` | Lets user skip to any tier level |
| `applyGraphTransform()` | Applies pan (transform) + zoom (CSS zoom) |
| `updateHomeProgressUI()` | Updates stat counters + level pill |
| `updateDomainViewProgress()` | Updates progress bar in graph view |
| `applyHomeMode()` | Toggles profile-mode class |
| `applyTheme(theme)` | Sets light/dark theme |

---

## Build Pipeline

### build-exe.ps1
Uses PowerShell's `Microsoft.CSharp.CSharpCodeProvider` to compile a C# WinForms launcher into `HumanAcademy.exe` (4096 bytes). The exe finds `index.html` next to itself and opens it via `Process.Start()`.

**To rebuild:**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
.\build-exe.ps1
```

**Important:** No .NET SDK or `csc` available on this machine — the CSharpCodeProvider approach is required.

### Smoke test:
```powershell
.\HumanAcademy.exe; $LASTEXITCODE   # should print 0
```

---

## What's Done

- [x] Full landing page with hero, stats, domain grid, features grid
- [x] Visual identity: Fraunces+Manrope typography, warm parchment palette, atmospheric backgrounds
- [x] Dark/light theme toggle with Settings panel (localStorage)
- [x] All dark mode contrast issues fixed (nav, cards, footer, settings)
- [x] Windows exe launcher + repeatable build script
- [x] Philosophy skill tree (12 nodes, 4 tiers, XP/level system)
- [x] Game-style node graph (SVG bezier links, drag-pan, wheel-zoom)
- [x] Zoom uses CSS `zoom` property for crisp text at any scale
- [x] Profile mode for returning users (hides intro content)
- [x] 3-tier navigation: Skill Trees → Discipline View → Graph View
- [x] Active/Inactive discipline sections
- [x] Discipline data for all 7 domains
- [x] Start-at-any-tier functionality
- [x] Nav tabs properly route through multi-page sections
- [x] All progress persisted in localStorage

## What's NOT Done

- [ ] Other discipline trees (History, Literature, etc.) — only Philosophy has nodes
- [ ] `progress.md` is outdated — doesn't reflect most features built
- [ ] Per-domain progress aggregation on skill tree listing cards
- [ ] "Always show intro" toggle for returning users
- [ ] AI content generation (lessons, quizzes per node)
- [ ] Actual lesson/quiz content when clicking a node (currently just marks as mastered)
- [ ] Mobile responsive testing (basic responsive CSS exists)
- [ ] Backend, cloud sync, user accounts
- [ ] Roadmap and About pages (nav tabs show "Coming soon" toast)

---

## User Preferences

- **Always rebuild `HumanAcademy.exe` each turn** so the user can test-run quickly
- User wants a **game-like** feel — level up, XP, satisfying progression
- User prefers **unique aesthetic** — not generic dark/AI theme
- Node graph layout should be **clean left-to-right flow**, not cramped
- The user iterates on style/function with one discipline first, then copies to all

---

## Line Map (approximate, index.html ~2000 lines)

| Lines | Content |
|-------|---------|
| 1–10 | DOCTYPE, head, meta, font imports |
| 11–120 | CSS tokens (light + dark theme variables), base styles |
| 120–210 | Nav styles |
| 210–510 | Hero, stats, sections, domain cards, feature cards, academy progress styles |
| 510–680 | Profile mode, skill-tree-shell, graph controls, domain/discipline card styles |
| 680–750 | Graph viewport, graph world, graph links, graph node styles |
| 750–1055 | Node state styles, animations, responsive rules |
| 1055–1110 | Nav HTML |
| 1110–1170 | Settings panel HTML |
| 1170–1220 | Hero section HTML |
| 1220–1260 | Stats HTML, Skill Tree section HTML |
| 1260–1300 | Discipline view + Domain view HTML (graph viewport) |
| 1300–1370 | Features + Footer HTML |
| 1370–1460 | Script: icons object, svg() helper, treeData definition |
| 1460–1550 | Script: progress functions (create, load, save, enforce, calculate) |
| 1550–1620 | Script: completeNode, applyGraphTransform, drawGraphLinks |
| 1620–1700 | Script: renderDomainGraph, domain data array |
| 1700–1780 | Script: disciplinesByDomain data |
| 1780–1850 | Script: domain card rendering, discipline view functions |
| 1850–1970 | Script: tree view functions, event listeners, initialization |
| 1970–2000 | Script: theme, settings, nav routing, reveal animations |
