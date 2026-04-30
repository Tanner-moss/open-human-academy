# Anthropology Source Integration Tracker

## Prompt Preferences
- Anthropology should use the full schools-of-thought.md section, not a shallow seed summary.
- Major subject areas for Anthropology should become node/tree entries when they are navigation-sized.
- Fine-grained subtopics for Anthropology should live inside coursework, lessons, labs, projects, and assessments.
- Continue using this file to track source-driven curriculum expansion work for Anthropology.

## Current Implementation Plan
- Audit the Anthropology section headings and major subject areas in schools-of-thought.md.
- Expand the graph and skill-tree structure for Anthropology from source-sized subject groupings.
- Push finer-grained source material into course detail instead of overloading the node graph.
- Verify Knowledge Tree, Skill Tree, Roadmap, and course entry all open the right Anthropology coursework.
- Rebuild HumanAcademy.exe after substantial Anthropology content passes.

## Progress
- [x] Audit full Anthropology source section
- [x] Expand source-driven overview course
- [x] Expand source-driven subject courses
- [x] Verify cross-surface linking and course resolution
- [x] Rebuild and smoke-test executable

## Turn Notes
- Added `data/anthropology-source-content.js` with a source-driven anthropology subject map, overview course, and detailed subject-course blueprints based on the Anthropology section of `schools-of-thought.md`.
- Wired Anthropology into the shared scaffold runtime so Knowledge Tree, Skill Tree, and course resolution all use the same anthropology source blueprint instead of the old four-strand placeholder scaffold.
- Rebuilt `HumanAcademy.exe`; later launcher verification confirmed the executable opens `index.html` and exits cleanly with code `0` as designed.
