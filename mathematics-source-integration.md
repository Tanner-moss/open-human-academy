# Mathematics Source Integration Tracker

## Prompt Preferences
- Mathematics should use the full `schools-of-thought.md` section, not a shallow seed summary.
- Node graphs and skill-tree cards should use major math subjects as nodes.
- Fine-grained subtopics should live inside coursework, not as extra node-graph clutter.
- Example rule: `Probability Theory` is a node/course, while its course content should include sections like foundations, core domains, major theorems, and current frontiers.
- Frontier topics from the source file should be preserved inside course detail, including items such as KPZ universality, high-dimensional probability, random tensor models, stochastic PDEs, random topology, probabilistic combinatorics, optimal transport and probabilistic couplings, rough path theory, and universality in random matrix theory.
- Continue using this file to track source-driven curriculum expansion work for mathematics.

## Current Implementation Plan
- Replace the generic four-strand mathematics scaffold with a full subject map drawn from the mathematics section headings.
- Keep subject-level nodes in the graph while moving finer-grained material into lesson and course detail.
- Add deep course outlines for mathematics overview plus each subject node.
- Preserve roadmap integration and shared resolver behavior.
- Rebuild `HumanAcademy.exe` after each substantial math-content pass.

## Progress
- [ ] Create full mathematics subject map in generated tree
- [ ] Add source-driven overview course for mathematics
- [ ] Add source-driven subject courses for probability, statistics, combinatorics, logic, applied mathematics, and the pure-math subjects
- [ ] Verify the Knowledge Tree, Skill Tree, and Roadmap all open the new math coursework correctly
- [ ] Rebuild and smoke-test executable
