# Psychology Source Integration Tracker

## Prompt Preferences
- Psychology should use the full schools-of-thought.md section, not a shallow seed summary.
- Major subject areas for Psychology should become node/tree entries when they are navigation-sized.
- Fine-grained subtopics for Psychology should live inside coursework, lessons, labs, projects, and assessments.
- Continue using this file to track source-driven curriculum expansion work for Psychology.

## Current Implementation Plan
- Audit the Psychology section headings and major subject areas in schools-of-thought.md.
- Expand the graph and skill-tree structure for Psychology from source-sized subject groupings.
- Push finer-grained source material into course detail instead of overloading the node graph.
- Verify Knowledge Tree, Skill Tree, Roadmap, and course entry all open the right Psychology coursework.
- Rebuild HumanAcademy.exe after substantial Psychology content passes.

## Progress
- [x] Audit full Psychology source section
- [x] Expand source-driven overview course
- [x] Expand source-driven subject courses
- [x] Verify cross-surface linking and course resolution
- [x] Rebuild and smoke-test executable

## Turn Notes
- Added `data/psychology-source-content.js` as a full custom source-driven Psychology blueprint built from the major subject areas in `schools-of-thought.md`.
- Wired Psychology into the shared scaffold runtime in `data/scaffold-content.js` and loaded the new source file in `index.html` before scaffold generation.
- Fixed the shared discipline meta helper so custom source disciplines can expose their full strand lists instead of being truncated to four entries.
- Validated `data/psychology-source-content.js`, `data/scaffold-content.js`, and `index.html` with no reported errors.
- Rebuilt `HumanAcademy.exe` and confirmed launcher smoke-test exit code `0`.
