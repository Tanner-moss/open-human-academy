# Human Academy — Task & Progress Tracker

> Use this file to maintain context across sessions. Update it at the start and end of every working session.

---

## Project Status: BRAINSTORMING / PRE-DEVELOPMENT

**Last Updated:** 2026-03-05

---

## Completed
- [x] Defined project vision — AI-powered skill-tree academy covering all human knowledge
- [x] Compiled full list of schools of thought / academic disciplines (`schools-of-thought.md`)
- [x] Created initial planning document (`planning.md`)
- [x] Established core UX requirements: zoomable, draggable, color-coded, collapsible skill trees
- [x] Defined storage strategy: localStorage MVP → cloud sync later
- [x] Built main landing page (`index.html`) — dark theme, Lucide SVG icons, domain cards, feature grid
- [x] Created Windows launcher executable (`HumanAcademy.exe`) to test-run the app quickly
- [x] Added repeatable exe rebuild script (`build-exe.ps1`) for per-turn refresh/testing

---

## In Progress
- [ ] Finalize tech stack decisions (framework, skill tree renderer, AI API)
- [ ] Decide: web app from day one vs. local app first
- [ ] Iterate on main page design (index.html)

---

## Up Next
- [ ] Design skill tree data model / schema (node structure, prereqs, progress states)
- [ ] Prototype skill tree UI (zoomable canvas with D3.js or alternative)
- [ ] Define content schema per node (title, description, prereqs, lessons, quiz)
- [ ] Choose AI content generation approach (prompt templates per domain)
- [ ] Create initial domain color palette and visual identity
- [ ] Build MVP with 1-2 fully fleshed-out skill trees (e.g., Philosophy + Mathematics)
- [ ] Implement localStorage progress saving
- [ ] Evaluate IndexedDB vs. localStorage for scale

---

## Backlog / Future
- [ ] Backend and user accounts
- [ ] Cloud sync for progress
- [ ] Mobile / PWA support
- [ ] Gamification layer (XP, streaks, badges)
- [ ] Community features (notes, discussions per node)
- [ ] AI tutoring / Q&A per node
- [ ] Cross-discipline prerequisite linking
- [ ] Public website / SaaS conversion

---

## Key Decisions Log

| Date       | Decision                                      | Rationale                                      |
|------------|-----------------------------------------------|------------------------------------------------|
| 2026-03-05 | Skill tree UI — zoomable, draggable canvas    | Core UX requirement from initial brainstorm    |
| 2026-03-05 | Storage: localStorage first, cloud later      | Keep per-user data minimal; scale when needed  |
| 2026-03-05 | AI generates content dynamically              | Replaces enormous manual content creation work |
| 2026-03-05 | All domains included (see schools-of-thought) | Comprehensive human knowledge repository       |

---

## Session Notes

### 2026-03-05 — Session 1
- Brainstorming phase started
- Vision established: comprehensive AI academy with interactive skill trees
- Compiled `schools-of-thought.md` from Wikipedia academic disciplines outline
- Core UX defined: color-coded, zoomable, draggable trees with open/close branches
- Built and tested `HumanAcademy.exe` launcher (opens `index.html`)
- Added `build-exe.ps1` so the executable can be rebuilt each turn
- Next session: settle tech stack and sketch data model
