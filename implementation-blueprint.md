# Human Academy Implementation Blueprint

## Purpose

This blueprint turns the current rough academy concept into a buildable system. It separates platform work from curriculum production so the site can scale beyond the first few hard-coded disciplines.

## Product Direction

- The Home tab should act as the center of the app: orientation, entry points, and domain discovery.
- The Skill Tree tab should remain a core learning surface for progression, unlocks, and mastery-based advancement.
- The Knowledge Tree tab should own graph exploration, conceptual relationships, and long-range map views.
- The Roadmap tab should be a guided planning surface where users pick learning paths and move through them stage by stage.
- Coursework must be deep enough to support serious study: lessons, tests, labs, projects, curated readings, Wikipedia embeds, and YouTube embeds selected by humans.
- The same coursework must be reachable from Roadmap, Skill Tree, and Knowledge Tree, with each tab mapping the same content differently instead of owning separate content silos.

## Current Constraints

- The app is still a single-file implementation in `index.html`.
- Discipline trees and course payloads are hard-coded directly into the page.
- Philosophy, History, and Literature are the only playable trees.
- This is enough for an MVP, but not enough for the full schools-of-thought scope.

## Architecture Blueprint

### 1. Split platform code from content

Move toward this structure:

- `index.html`: shell, layout, navigation, bootstrap
- `data/domains.json`: domain metadata
- `data/disciplines/*.json`: discipline graph definitions
- `content/courses/*.md` or `content/courses/*.json`: lesson content, tests, labs, projects, embeds
- `assets/embeds/*.json`: curated media manifests

The UI can remain visually single-page while the source stops being single-file.

### 2. Define one curriculum schema

Every discipline should use the same hierarchy:

- Domain
- Discipline
- Track
- Module
- Lesson
- Assessment
- Lab
- Project
- Media Block

Each node should support:

- `id`
- `title`
- `summary`
- `prerequisites`
- `difficulty`
- `estimatedTime`
- `learningObjectives`
- `studyMaterial`
- `activities`
- `quiz`
- `test`
- `lab`
- `project`
- `media`
- `masteryCriteria`

### 3. Separate graph levels

There are four different graph problems and they should not share one overloaded component:

- Academy graph: all domains
- Domain graph: all disciplines in one domain
- Discipline graph: modules and sections inside one discipline
- Course flow graph: lessons, labs, tests, and capstones inside one module

The Knowledge Tree should handle academy, domain, and discipline graph views.
The Roadmap should handle path sequencing and navigation, not graph rendering.

### 3.5. Treat the three learning surfaces as different maps of one curriculum

The platform should not behave as if Roadmap is the real academy and the other tabs are alternate decorations.

Roadmap, Skill Tree, and Knowledge Tree should all lead into the same lessons, tests, labs, projects, and media. The difference is the learner model each tab emphasizes.

Roadmap should answer:

- What should I study next for my goals?
- What sequence gets me from beginner to a chosen path outcome?
- Which disciplines or nodes overlap across the paths I selected?

Skill Tree should answer:

- What have I unlocked?
- What prerequisites stand between me and the next mastery target?
- How far have I progressed inside a discipline?

Knowledge Tree should answer:

- How do ideas, schools, thinkers, methods, and domains connect?
- What concepts sit upstream or downstream from this one?
- Where can I branch sideways into related topics without losing context?

Non-negotiable rule:

- There is one curriculum source of truth.
- Different tabs expose different traversals of that source of truth.
- A lesson completed from one surface is completed from all surfaces.
- A node mastered in Skill Tree advances Roadmap stages and updates Knowledge Tree state.

This means the academy needs shared content objects with multiple mapping layers, not separate content authored per tab.

Required shared entities:

- discipline graph entities for prerequisites and mastery progression
- knowledge graph entities for conceptual and historical relationships
- roadmap path entities for guided sequencing
- course entities for the actual educational payload

Each educational object should be addressable from all three surfaces through references, not duplication.

### 4. Build a reusable course player

Each course page should render these blocks in a standard order:

1. Overview
2. Study material
3. Key terms
4. Primary and secondary sources
5. Curated Wikipedia embeds
6. Curated YouTube embeds
7. Guided notes or reflection prompts
8. Quick knowledge checks
9. Test
10. Lab
11. Project
12. Mastery rubric

### 5. Build a human-curated media system

Do not treat media as generated filler. Media must be intentionally placed.

Each media block should support:

- `type`: `youtube`, `wikipedia`, `article`, `primary-source`, `documentary`
- `title`
- `url`
- `embedUrl`
- `placement`
- `whyThisMatters`
- `required` or `optional`

## Roadmap Blueprint

The Roadmap tab should be a path system, not a node graph. It is one learning surface among several, not the only educational structure.

### Roadmap goals

- Let users choose a path based on intent
- Show staged progression across disciplines
- Offer one-click next actions
- Keep full-discipline navigation available beneath the guided path
- Point directly into the same modules and lessons surfaced elsewhere in Skill Tree and Knowledge Tree

### Roadmap responsibilities

Roadmap is responsible for:

- learner intent
- sequencing
- pacing
- recommendations
- path overlap handling

Roadmap is not responsible for being the only representation of curriculum structure.

### Roadmap page structure

1. Profile Progress
2. Current Focus
3. Learning Paths picker
4. Path Navigator with stages
5. Curriculum Navigator across all domains

### Path model

Each path should include:

- `id`
- `title`
- `description`
- `audience`
- `stages[]`

Each stage should include:

- `disciplineId`
- `title`
- `description`
- `nodeIds` or `moduleIds`
- `completionRule`
- `nextAction`

### Path selection model

Roadmaps should depend on what the user wants, not on a single developer-chosen sequence.

Required behavior:

- Users can select one path, many paths, or no paths.
- Path selection is persistent per user.
- Selected paths act as overlays on top of the academy, not as hard locks.
- A user can follow multiple identities at once, such as Humanities Core plus Civilization, Power, and Culture.
- The roadmap surface should combine all selected paths into a personalized navigator.

Implication:

- The system cannot assume one active path.
- Recommendations must be computed from a set of selected paths.
- Stage priority should consider overlap so the user sees where multiple paths reinforce each other.

### Path recommendation rules

The roadmap engine should rank next actions using the following order:

1. Stages that appear in multiple selected paths.
2. Stages already activated but not completed.
3. Stages with unlocked next lessons.
4. Stages in playable disciplines before non-playable disciplines.
5. Stages earlier in the selected path order.

If a user selects no paths:

- The roadmap should remain usable.
- The page should prompt the user to choose one or more paths.
- The curriculum navigator below should still expose full academy browsing.

### Path overlap handling

Different paths will often point at the same discipline or the same node set.

Rules:

- Duplicate stages should not duplicate progress.
- Overlapping stages should display as shared milestones.
- A stage completed for one path counts for every path that includes it.
- The UI should visually indicate shared steps because those are high-value recommendations.

### Initial roadmap paths

- Humanities Core
- Ideas, Arguments, and Inquiry
- Civilization, Power, and Culture

Later paths should cover:

- Scientific Foundations
- Formal Reasoning and Computation
- Society and Institutions
- Creative and Expressive Arts
- Engineering and Applied Practice

### Path object example

```json
{
	"id": "humanities-core",
	"title": "Humanities Core",
	"description": "Build interpretive, historical, and philosophical foundations before specializing.",
	"audience": "Best for first-time learners",
	"stages": [
		{
			"id": "phil-foundation-stage",
			"disciplineId": "philosophy",
			"title": "Philosophical Foundations",
			"description": "Method, logic, epistemology, and ethics.",
			"nodeIds": ["phil-foundations", "phil-logic", "phil-epistemology", "phil-ethics"],
			"completionRule": {
				"type": "all-nodes-mastered"
			},
			"nextAction": {
				"type": "open-next-node"
			}
		}
	]
}
```

## Curriculum Production Blueprint

Curriculum must be authored once and mapped many ways.

Every discipline should support at least three learning traversals:

- Roadmap traversal: staged sequence optimized for learner goals
- Skill Tree traversal: prerequisite and mastery progression inside a discipline
- Knowledge Tree traversal: relational exploration across concepts, thinkers, periods, and neighboring disciplines

The authored educational payload remains the same across all three.

Every discipline should move through the same production pipeline.

### Phase A. Subject decomposition

Turn the discipline section from `schools-of-thought.md` into a prerequisite-aware tree.

Output:

- full topic tree
- node hierarchy
- prerequisite map
- thinker and source inventory

### Phase B. Module design

Convert the tree into teachable modules.

Output:

- module list
- lesson sequence
- test boundaries
- lab opportunities
- project opportunities

Each module should be small enough to teach clearly and large enough to feel meaningful.

Target size:

- 3 to 8 lessons per module
- 1 quick quiz every lesson or every two lessons
- 1 module test
- 1 lab where practice makes sense
- 1 project every 2 to 4 modules, or one capstone per major discipline block

### Phase C. Course authoring

Write the actual coursework.

Output for each module:

- lessons
- glossaries
- readings
- quizzes
- tests
- labs
- projects
- rubrics

Authoring standard:

- Lessons should explain, not just list.
- Every lesson needs examples.
- Every major thinker or school needs both a summary and a placement in the wider field.
- The learner should always know why the lesson matters and what it unlocks next.

### Phase D. Media curation

Attach human-selected references.

Output:

- Wikipedia pages
- YouTube videos
- primary texts
- lectures
- documentaries

Media curation standard:

- Wikipedia should support orientation, not replace teaching.
- YouTube should be intentionally chosen for quality, accuracy, and fit.
- Media should be tagged as `core`, `optional`, or `enrichment`.
- Courses should still stand on their own if an embed disappears.

### Phase E. QA and mastery review

Validate:

- factual accuracy
- prerequisite logic
- progression quality
- embed validity
- assessment quality
- project clarity

## Assessment Blueprint

Every serious discipline should use four layers of assessment.

### 1. Quick checks

- short quizzes
- concept recall
- immediate feedback

### 2. Tests

- module-level mastery
- mixed question types
- cumulative review

### 3. Labs

- analysis tasks
- source work
- structured practice
- simulations where appropriate

### 4. Projects

- synthesis across modules
- research papers, essays, presentations, analyses, builds, or applied work
- rubric-based evaluation

Assessment results must propagate across all surfaces.

Examples:

- Passing a module test from the Roadmap should mark the corresponding Skill Tree node progress.
- Completing a lab from the Skill Tree should satisfy the same course requirement in the Roadmap.
- Mastering a concept cluster from the Knowledge Tree should update recommendation logic where applicable.

## Canonical Data Schemas

The academy needs a stable content format before large-scale authoring begins.

The schema must support both educational content and multiple navigation mappings.

### Discipline graph schema

```json
{
	"id": "philosophy",
	"domainId": "humanities",
	"title": "Philosophy",
	"source": "schools-of-thought.md",
	"tiers": ["Foundations", "Historical Core", "Major Branches", "Specialization", "Frontier"],
	"nodes": [
		{
			"id": "phil-logic",
			"title": "Logic",
			"shortTitle": "Logic",
			"tier": "Foundations",
			"prerequisites": [],
			"xp": 20,
			"topics": ["informal logic", "propositional logic", "predicate logic"],
			"courseId": "course-phil-logic"
		}
	]
}
```

### Course schema

```json
{
	"id": "course-phil-logic",
	"disciplineId": "philosophy",
	"nodeId": "phil-logic",
	"title": "Logic",
	"summary": "Learn how valid reasoning works in natural and formal language.",
	"estimatedTime": "4-6 hours",
	"learningObjectives": [
		"Distinguish deductive, inductive, and abductive reasoning",
		"Translate basic claims into formal notation",
		"Evaluate common fallacies"
	],
	"lessons": ["lesson-phil-logic-1", "lesson-phil-logic-2"],
	"quizIds": ["quiz-phil-logic-1"],
	"testId": "test-phil-logic",
	"labIds": ["lab-phil-logic-arguments"],
	"projectIds": [],
	"mediaIds": ["media-phil-logic-wikipedia", "media-phil-logic-youtube-1"],
	"masteryCriteria": [
		"Pass module test at 80 percent or above",
		"Complete argument reconstruction lab"
	]
}
```

### Surface mapping schema

```json
{
	"courseId": "course-phil-logic",
	"disciplineId": "philosophy",
	"skillTree": {
		"nodeId": "phil-logic",
		"unlockRule": "all-prereqs-mastered"
	},
	"knowledgeTree": {
		"conceptIds": ["logic", "validity", "formal-reasoning"],
		"relationIds": ["logic-to-epistemology", "logic-to-mathematics"]
	},
	"roadmap": {
		"stageIds": ["phil-foundation-stage", "reasoning-core-stage"],
		"recommendedOrder": 1
	}
}
```

This mapping layer is what prevents content duplication. The course remains one object, while each surface references it according to its own navigation model.

### Skill Tree mapping schema

The Skill Tree is the mastery map for a discipline. It should not store duplicate lesson content. It should store progression structure and references into the shared course payload.

```json
{
	"nodeId": "phil-logic",
	"disciplineId": "philosophy",
	"courseId": "course-phil-logic",
	"tier": "Foundations",
	"prerequisiteNodeIds": [],
	"recommendedLessonOrder": [
		"lesson-phil-logic-arguments",
		"lesson-phil-logic-formal-systems"
	],
	"assessmentGateIds": [
		"quiz-phil-logic-check-1",
		"test-phil-logic-core",
		"lab-phil-logic-argument-reconstruction"
	],
	"masteryRule": {
		"type": "all-required-assessments-passed"
	},
	"ui": {
		"cardSummary": "Formal and informal reasoning, from argument structure to formal systems.",
		"badgeLabel": "Foundations",
		"estimatedXp": 20
	}
}
```

Skill Tree rules:

- one node should point to one shared course or one tightly defined module cluster
- unlock logic belongs here, not in the Roadmap
- mastery state should be computed from shared assessment results, not duplicated per tab
- the node card can summarize lessons, tests, labs, and projects, but it should reference shared IDs

### Knowledge Tree mapping schema

The Knowledge Tree is the relationship map. It should connect concepts, thinkers, schools, methods, periods, and neighboring disciplines back to the same courses and lessons.

```json
{
	"conceptId": "logic",
	"title": "Logic",
	"type": "concept",
	"disciplineId": "philosophy",
	"summary": "The study of valid reasoning and formal inference.",
	"relatedCourseIds": ["course-phil-logic"],
	"relatedLessonIds": [
		"lesson-phil-logic-arguments",
		"lesson-phil-logic-formal-systems"
	],
	"relationIds": [
		"logic-to-epistemology",
		"logic-to-mathematics",
		"logic-to-language"
	],
	"explorationPrompts": [
		"How does logic support epistemology?",
		"Where does logic meet mathematics and computation?"
	]
}
```

### Knowledge relation schema

```json
{
	"id": "logic-to-epistemology",
	"fromId": "logic",
	"toId": "epistemology",
	"relationType": "supports",
	"label": "Logic sharpens standards of justification",
	"courseIds": ["course-phil-logic", "course-phil-epistemology"],
	"lessonIds": ["lesson-phil-logic-arguments"],
	"strength": "core"
}
```

Knowledge Tree rules:

- a knowledge node may map to multiple courses, not only one
- a knowledge relation can open courses, lessons, or cross-discipline bridges
- conceptual exploration should never create a second copy of a course
- Knowledge Tree state should reflect shared completion and mastery signals where relevant

### Shared resolution rules

Any click from any surface should resolve through the same content lookup path.

Required resolver order:

1. surface entity selected
2. mapping object found
3. shared course or lesson ID resolved
4. course player or lesson player opened
5. progress and assessment state loaded from shared storage

This means there should eventually be one resolver function that can accept inputs like:

- `roadmapStageId`
- `skillTreeNodeId`
- `knowledgeConceptId`
- `knowledgeRelationId`

And return one consistent payload:

```json
{
	"disciplineId": "philosophy",
	"courseId": "course-phil-logic",
	"lessonId": null,
	"entrySurface": "skill-tree",
	"entryContext": {
		"nodeId": "phil-logic"
	}
}
```

### Shared progress propagation rules

The platform should treat progress as shared academic state, not tab-local UI state.

Required propagation behavior:

- completing a lesson updates every surface that references that lesson
- passing a test updates node mastery checks in the Skill Tree
- satisfying a mastery rule updates Roadmap stage completion where that node is required
- Knowledge Tree highlights should react to what has been studied, unlocked, or mastered
- recommendation systems can read shared progress, but should not own the underlying truth

### Philosophy Foundations mapping example set

The Philosophy pilot should not stop at schema examples. It should define one real mapping pack for the current playable foundations so implementation has a concrete target.

Recommended first shared course set:

- `course-phil-foundations` for `phil-foundations`
- `course-phil-logic` for `phil-logic`
- `course-phil-epistemology` for `phil-epistemology`
- `course-phil-ethics` for `phil-ethics`

Recommended Roadmap stage bindings:

```json
[
	{
		"stageId": "phil-foundation-stage",
		"courseIds": ["course-phil-foundations", "course-phil-logic"],
		"nodeIds": ["phil-foundations", "phil-logic"]
	},
	{
		"stageId": "reasoning-core-stage",
		"courseIds": ["course-phil-logic", "course-phil-epistemology"],
		"nodeIds": ["phil-logic", "phil-epistemology"]
	},
	{
		"stageId": "ethics-core-stage",
		"courseIds": ["course-phil-ethics"],
		"nodeIds": ["phil-ethics"]
	}
]
```

Recommended Skill Tree bindings:

```json
[
	{
		"nodeId": "phil-foundations",
		"courseId": "course-phil-foundations",
		"masteryRule": { "type": "all-required-assessments-passed" }
	},
	{
		"nodeId": "phil-logic",
		"courseId": "course-phil-logic",
		"masteryRule": { "type": "all-required-assessments-passed" }
	},
	{
		"nodeId": "phil-epistemology",
		"courseId": "course-phil-epistemology",
		"masteryRule": { "type": "all-required-assessments-passed" }
	},
	{
		"nodeId": "phil-ethics",
		"courseId": "course-phil-ethics",
		"masteryRule": { "type": "all-required-assessments-passed" }
	}
]
```

Recommended Knowledge Tree concept bindings:

```json
[
	{
		"conceptId": "philosophical-method",
		"relatedCourseIds": ["course-phil-foundations"],
		"relatedNodeIds": ["phil-foundations"]
	},
	{
		"conceptId": "logic",
		"relatedCourseIds": ["course-phil-logic"],
		"relatedNodeIds": ["phil-logic"]
	},
	{
		"conceptId": "knowledge",
		"relatedCourseIds": ["course-phil-epistemology"],
		"relatedNodeIds": ["phil-epistemology"]
	},
	{
		"conceptId": "morality",
		"relatedCourseIds": ["course-phil-ethics"],
		"relatedNodeIds": ["phil-ethics"]
	}
]
```

Recommended Knowledge Tree relation bindings:

```json
[
	{
		"id": "method-to-logic",
		"fromId": "philosophical-method",
		"toId": "logic",
		"relationType": "supports",
		"courseIds": ["course-phil-foundations", "course-phil-logic"]
	},
	{
		"id": "logic-to-knowledge",
		"fromId": "logic",
		"toId": "knowledge",
		"relationType": "supports",
		"courseIds": ["course-phil-logic", "course-phil-epistemology"]
	},
	{
		"id": "knowledge-to-morality",
		"fromId": "knowledge",
		"toId": "morality",
		"relationType": "informs",
		"courseIds": ["course-phil-epistemology", "course-phil-ethics"]
	}
]
```

This pack should be implemented before expanding Philosophy deeper because it proves the three-surface mapping model on real node IDs already present in the app.

### Shared resolver API contract

The platform needs an explicit resolver contract before more UI work is added.

Recommended API shape:

```ts
type EntrySurface = 'roadmap' | 'skill-tree' | 'knowledge-tree';

type ResolveCourseEntryInput =
	| { surface: 'roadmap'; stageId: string; courseId?: string; nodeId?: string }
	| { surface: 'skill-tree'; nodeId: string }
	| { surface: 'knowledge-tree'; conceptId?: string; relationId?: string; courseId?: string };

type ResolveCourseEntryOutput = {
	disciplineId: string;
	courseId: string;
	lessonId: string | null;
	entrySurface: EntrySurface;
	entryEntityId: string;
	entryLabel: string;
	nodeId: string | null;
	stageId: string | null;
	conceptId: string | null;
	relationId: string | null;
	prerequisiteNodeIds: string[];
	masteryRule: { type: string } | null;
	availableLessonIds: string[];
	nextRecommendedLessonId: string | null;
};
```

Resolver guarantees:

- it never returns surface-specific duplicate content
- it always resolves to one shared course payload
- it carries enough context for the UI to render a back button and surface-specific breadcrumb
- it returns prerequisite and mastery metadata so Skill Tree and Roadmap do not each reinvent gating logic
- it can later support direct lesson deep-linking without changing the overall contract

Recommended implementation split:

- `resolveRoadmapEntry(input)`
- `resolveSkillTreeEntry(input)`
- `resolveKnowledgeTreeEntry(input)`
- `resolveCourseEntry(input)` as the public wrapper

Recommended first implementation target:

- support `phil-foundations`, `phil-logic`, `phil-epistemology`, and `phil-ethics` end to end through the shared resolver before broadening to more disciplines

### Lesson schema

```json
{
	"id": "lesson-phil-logic-1",
	"title": "Arguments and Validity",
	"summary": "What arguments are and how validity differs from truth.",
	"studyBlocks": [
		{
			"type": "explanation",
			"heading": "What is an argument?",
			"content": "An argument is a set of premises offered in support of a conclusion."
		},
		{
			"type": "example",
			"heading": "Example argument",
			"content": "All humans are mortal. Socrates is human. Therefore Socrates is mortal."
		}
	],
	"glossary": ["premise", "conclusion", "validity", "soundness"],
	"checkForUnderstanding": ["quiz-phil-logic-check-1"],
	"mediaIds": ["media-phil-logic-wikipedia"]
}
```

### Media schema

```json
{
	"id": "media-phil-logic-youtube-1",
	"type": "youtube",
	"title": "Introduction to Formal Logic",
	"url": "https://www.youtube.com/watch?v=example",
	"embedUrl": "https://www.youtube-nocookie.com/embed/example",
	"placement": "after-lesson",
	"required": false,
	"whyThisMatters": "Provides a visual walk-through of validity and formalization."
}
```

## Authoring Templates

Every author should work from consistent templates.

### Lesson template

- Hook: why this lesson matters
- Learning objectives
- Core explanation
- Worked examples
- Common mistakes
- Key terms
- Check for understanding
- Suggested media
- What this unlocks next

### Test template

- Recall section
- Concept application section
- Interpretation or analysis section
- Cumulative question or synthesis question
- Pass threshold
- Feedback notes for wrong answers

### Lab template

- Goal
- Required inputs or texts
- Procedure
- Deliverable
- Rubric
- Extension task

### Project template

- Driving question
- Scope
- Required sources or constraints
- Deliverables
- Milestones
- Rubric
- Reflection prompt

### Embed template

- Title
- Source type
- URL
- Placement in course
- Why it is included
- Required or optional
- Backup plan if unavailable

## Philosophy Pilot Blueprint

Philosophy should be the first fully realized discipline because it already has the strongest base in the app.

### Pilot objectives

- Prove the data model
- Prove the lesson template
- Prove the test and lab structure
- Prove Roadmap, Skill Tree, and Knowledge Tree navigation into the same real coursework
- Produce one discipline good enough to use as the standard for all later work

### Pilot sequence

1. Freeze the Philosophy node map.
2. Convert Philosophy graph data into the canonical external schema.
3. Author complete coursework for the Foundations tier.
4. Add real tests and at least one lab for Logic, Epistemology, and Ethics.
5. Add curated Wikipedia and YouTube references for every Foundations node.
6. Map every Foundations course into Roadmap, Skill Tree, and Knowledge Tree.
7. QA the full learner flow from each surface to lesson to assessment to mastery.
8. Expand from Foundations into Historical Core only after the workflow is stable.

## Surface-Specific UX Blueprint

The curriculum is shared, but each surface should feel purpose-built.

### Roadmap UX

- show selected paths
- show next recommended stage
- show why a recommendation matters
- open directly into the next lesson, test, or lab

### Skill Tree UX

- show tiers, prerequisites, unlocks, and mastery state
- let learners open node coursework directly from the tree
- show which lessons, tests, labs, and projects are inside each node
- emphasize advancement through disciplined study

### Knowledge Tree UX

- show concepts, thinkers, schools, methods, and historical relationships
- let learners pivot laterally into related content
- surface the same courses through conceptual entry points
- emphasize understanding the structure of knowledge, not just finishing a sequence

## Implementation Consequences

This clarification changes the platform build order.

The platform now needs:

- one shared course player
- one shared assessment state model
- one shared progress model
- three separate mapping/rendering layers for Roadmap, Skill Tree, and Knowledge Tree

This also changes the content migration rule:

- no course should be considered complete until it can be opened and progressed from all three surfaces

### Pilot definition of done

- All Philosophy Foundations nodes load from structured data, not hard-coded HTML strings.
- Every Foundations node has at least one complete lesson.
- Logic, Epistemology, and Ethics have real tests.
- At least two Foundations nodes have labs.
- All Foundations nodes have curated embeds.
- Roadmap can guide a user through Philosophy as one stage in a larger path.
- Skill Tree can open every Foundations course directly from the node layer.
- Knowledge Tree can open the same Foundations courses from concept and relation links.

## Implementation Phases

### Phase 0. Stabilize the shell

- Keep current UI working.
- Stop adding major new hard-coded systems to `index.html`.
- Treat the current single-file app as the migration shell.

### Phase 1. Externalize data

- Move domain metadata out first.
- Move discipline tree definitions out second.
- Move course payloads out third.
- Maintain compatibility with the current renderer while migrating.

### Phase 2. Standardize content rendering

- Replace ad hoc course rendering with schema-driven rendering.
- Support lessons, tests, labs, projects, and media blocks from data.
- Keep progress and unlock logic independent from content format.
- Add a shared resolver so Roadmap, Skill Tree, and Knowledge Tree all open the same educational objects.

### Phase 3. Upgrade roadmap intelligence

- Support multiple selected paths.
- Rank next actions using shared-stage overlap.
- Surface recommended next lessons on Home and Roadmap.
- Track path progress independently from raw discipline progress.

### Phase 3.5. Build surface mappings

- Define Skill Tree mapping objects for playable disciplines.
- Define Knowledge Tree concept and relation objects for playable disciplines.
- Bind both surfaces to the shared resolver and shared progress model.
- Verify that one completed lesson or assessment updates all related views.

### Phase 4. Production pipeline

- Create repeatable authoring templates.
- Build one complete pilot discipline.
- Then scale discipline by discipline.

## Immediate Build Plan

## Content Standards

Completion of a discipline should mean more than exposure.

Minimum standard for a finished discipline:

- graph complete
- lessons complete
- tests complete
- labs complete
- projects complete
- media curated
- progression verified
- references and terminology reviewed

## Recommended Rollout

### Wave 1: pilot the full system

- Philosophy
- History
- Literature

Reason: these already have playable trees, so they can shape the architecture with real content.

### Wave 2: expand humanities

- Religion and Theology
- Law
- Visual Arts
- Performing Arts
- Communication Studies
- Cultural Studies and Gender Studies
- Library and Information Science

### Wave 3: expand social sciences

- Psychology
- Sociology
- Political Science
- Economics
- Anthropology
- Geography
- Business and Management
- Social Work and Public Policy

### Wave 4: natural and formal sciences

- Mathematics
- Physics
- Chemistry
- Biology
- Earth Sciences
- Astronomy
- Logic
- Computer Science

## Immediate Build Plan

### Step 1

Move hard-coded discipline and course data out of `index.html` into structured content files.

### Step 2

Lock the curriculum schema before expanding more disciplines.

### Step 3

Finish the Roadmap tab as a real path planner.

### Step 4

Define standard templates for:

- lesson
- test
- lab
- project
- media block

### Step 5

Take Philosophy through the full production pipeline as the canonical reference discipline.

### Step 6

Make the roadmap compute recommendations from all user-selected paths instead of only showing stage lists.

### Step 7

Move Home page recommendations so they also react to the user-selected path set.

### Step 8

Add the first real lesson, test, lab, project, and embed templates as data files instead of inline objects.

## Definition of Done

The academy is on the right track when:

- Home is the clear central entry point
- Knowledge Tree is the graph exploration surface
- Roadmap is a real guided planner
- content is no longer hard-coded per discipline inside one page
- at least one discipline has full lessons, tests, labs, projects, and curated embeds

## Non-Negotiable Rules

- The curriculum must be human-readable and human-editable.
- Embeds support the coursework; they do not replace it.
- A learner should be able to complete a course even if an external embed fails.
- Graphs are for navigation and motivation; roadmaps are for planning and progression.
- Path selection belongs to the user.