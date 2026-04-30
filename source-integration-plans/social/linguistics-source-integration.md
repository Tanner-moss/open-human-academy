# Linguistics Source Integration Tracker

## Prompt Preferences
- Linguistics should use the full schools-of-thought.md section, not a shallow seed summary.
- Major subject areas for Linguistics should become node/tree entries when they are navigation-sized.
- Fine-grained subtopics for Linguistics should live inside coursework, lessons, labs, projects, and assessments.
- Continue using this file to track source-driven curriculum expansion work for Linguistics.

## Current Implementation Plan
- Audit the Linguistics section headings and major subject areas in schools-of-thought.md.
- Expand the graph and skill-tree structure for Linguistics from source-sized subject groupings.
- Push finer-grained source material into course detail instead of overloading the node graph.
- Verify Knowledge Tree, Skill Tree, Roadmap, and course entry all open the right Linguistics coursework.
- Rebuild HumanAcademy.exe after substantial Linguistics content passes.

## Progress
- [x] Audit full Linguistics source section
- [x] Expand source-driven overview course
- [x] Expand source-driven subject courses
- [x] Verify cross-surface linking and course resolution
- [x] Rebuild and smoke-test executable

## Turn Notes
- Added `data/linguistics-source-content.js` with a full source-driven linguistics subject map, overview course, and major subject-course blueprints derived from the Linguistics section of `schools-of-thought.md`.
- Wired Linguistics into the shared scaffold runtime so Knowledge Tree, Skill Tree, and course resolution now use the custom linguistics source blueprint instead of the old four-strand placeholder scaffold.
- Rebuilt `HumanAcademy.exe` and verified launcher behavior with a successful exit code `0` after opening `index.html`.
