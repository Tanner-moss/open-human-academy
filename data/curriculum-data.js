window.HUMAN_ACADEMY_CURRICULUM = {
  surfaceMappings: [
    {
      courseId: 'course-hist-methods',
      disciplineId: 'history',
      skillTree: {
        nodeId: 'hist-methods',
        unlockRule: 'starting-node'
      },
      knowledgeTree: {
        conceptIds: ['historical-method', 'archives-and-sources', 'historical-causation'],
        relationIds: ['philosophical-method-to-historical-method', 'historical-method-to-historiography', 'historical-method-to-literary-interpretation']
      },
      roadmap: {
        stageIds: ['humanities-core-historical-orientation', 'ideas-analysis-historiography-and-methods'],
        recommendedOrder: 4
      }
    },
    {
      courseId: 'course-hist-historiography',
      disciplineId: 'history',
      skillTree: {
        nodeId: 'hist-historiography',
        unlockRule: 'starting-node'
      },
      knowledgeTree: {
        conceptIds: ['historiography', 'historical-narrative', 'memory-and-interpretation'],
        relationIds: ['historical-method-to-historiography', 'historiography-to-memory', 'historiography-to-politics']
      },
      roadmap: {
        stageIds: ['ideas-analysis-historiography-and-methods', 'humanities-core-historical-orientation'],
        recommendedOrder: 5
      }
    },
    {
      courseId: 'course-hist-archaeology',
      disciplineId: 'history',
      skillTree: {
        nodeId: 'hist-archaeology',
        unlockRule: 'starting-node'
      },
      knowledgeTree: {
        conceptIds: ['archaeology', 'chronology-and-dating', 'material-evidence'],
        relationIds: ['historical-method-to-archaeology', 'archaeology-to-science', 'archaeology-to-prehistory']
      },
      roadmap: {
        stageIds: ['ideas-analysis-historiography-and-methods', 'humanities-core-historical-orientation'],
        recommendedOrder: 6
      }
    },
    {
      courseId: 'course-lit-reading',
      disciplineId: 'literature',
      skillTree: {
        nodeId: 'lit-reading',
        unlockRule: 'starting-node'
      },
      knowledgeTree: {
        conceptIds: ['close-reading', 'literary-modes', 'interpretive-reading'],
        relationIds: ['historical-method-to-close-reading', 'close-reading-to-rhetoric', 'close-reading-to-language']
      },
      roadmap: {
        stageIds: ['humanities-core-texts-and-interpretation', 'ideas-analysis-theory-and-critical-reading'],
        recommendedOrder: 7
      }
    },
    {
      courseId: 'course-lit-rhetoric',
      disciplineId: 'literature',
      skillTree: {
        nodeId: 'lit-rhetoric',
        unlockRule: 'starting-node'
      },
      knowledgeTree: {
        conceptIds: ['rhetoric', 'poetics', 'genre-and-form'],
        relationIds: ['close-reading-to-rhetoric', 'rhetoric-to-language', 'rhetoric-to-politics']
      },
      roadmap: {
        stageIds: ['humanities-core-texts-and-interpretation', 'ideas-analysis-theory-and-critical-reading'],
        recommendedOrder: 8
      }
    },
    {
      courseId: 'course-phil-foundations',
      disciplineId: 'philosophy',
      skillTree: {
        nodeId: 'phil-foundations',
        unlockRule: 'starting-node'
      },
      knowledgeTree: {
        conceptIds: ['philosophical-method', 'conceptual-analysis', 'thought-experiments'],
        relationIds: ['method-to-logic', 'method-to-ethics']
      },
      roadmap: {
        stageIds: ['humanities-core-philosophical-foundations'],
        recommendedOrder: 0
      }
    },
    {
      courseId: 'course-phil-logic',
      disciplineId: 'philosophy',
      skillTree: {
        nodeId: 'phil-logic',
        unlockRule: 'all-prereqs-mastered'
      },
      knowledgeTree: {
        conceptIds: ['logic', 'validity', 'formal-reasoning'],
        relationIds: ['logic-to-epistemology', 'logic-to-language', 'logic-to-mathematics']
      },
      roadmap: {
        stageIds: ['humanities-core-philosophical-foundations', 'ideas-analysis-argument-and-logic'],
        recommendedOrder: 1
      }
    },
    {
      courseId: 'course-phil-epistemology',
      disciplineId: 'philosophy',
      skillTree: {
        nodeId: 'phil-epistemology',
        unlockRule: 'all-prereqs-mastered'
      },
      knowledgeTree: {
        conceptIds: ['epistemology', 'justification', 'skepticism'],
        relationIds: ['logic-to-epistemology', 'epistemology-to-ethics', 'epistemology-to-science']
      },
      roadmap: {
        stageIds: ['ideas-analysis-argument-and-logic'],
        recommendedOrder: 2
      }
    },
    {
      courseId: 'course-phil-ethics',
      disciplineId: 'philosophy',
      skillTree: {
        nodeId: 'phil-ethics',
        unlockRule: 'all-prereqs-mastered'
      },
      knowledgeTree: {
        conceptIds: ['ethics', 'normative-theory', 'applied-ethics'],
        relationIds: ['method-to-ethics', 'epistemology-to-ethics', 'ethics-to-politics']
      },
      roadmap: {
        stageIds: ['civilization-power-power-justice-social-order'],
        recommendedOrder: 3
      }
    }
  ],
  knowledgeConcepts: [
    {
      conceptId: 'historical-method',
      title: 'Historical Method',
      type: 'concept',
      disciplineId: 'history',
      summary: 'The craft of source criticism, corroboration, periodization, and evidence-based interpretation of the past.',
      relatedCourseIds: ['course-hist-methods'],
      relatedLessonIds: ['lesson-hist-methods-sources', 'lesson-hist-methods-causation'],
      relationIds: ['philosophical-method-to-historical-method', 'historical-method-to-historiography', 'historical-method-to-literary-interpretation'],
      explorationPrompts: [
        'What makes a historical claim stronger than a merely chronological summary?',
        'How do source criticism and corroboration limit what can responsibly be argued?'
      ]
    },
    {
      conceptId: 'archives-and-sources',
      title: 'Archives and Sources',
      type: 'method',
      disciplineId: 'history',
      summary: 'The preserved traces of the past and the critical practices required to use them well.',
      relatedCourseIds: ['course-hist-methods'],
      relatedLessonIds: ['lesson-hist-methods-sources'],
      relationIds: [],
      explorationPrompts: [
        'What survives into the archive, and what disappears?',
        'Why can authentic sources still be partial, interested, or misleading?'
      ]
    },
    {
      conceptId: 'historical-causation',
      title: 'Historical Causation',
      type: 'concept',
      disciplineId: 'history',
      summary: 'Layered explanation in history, balancing structure, contingency, agency, and interpretation.',
      relatedCourseIds: ['course-hist-methods'],
      relatedLessonIds: ['lesson-hist-methods-causation'],
      relationIds: [],
      explorationPrompts: [
        'How do historians avoid reducing large events to one cause?',
        'What changes when causal explanation shifts from events to structures?'
      ]
    },
    {
      conceptId: 'historiography',
      title: 'Historiography',
      type: 'concept',
      disciplineId: 'history',
      summary: 'The history of historical writing and the schools that define what good history looks like.',
      relatedCourseIds: ['course-hist-historiography'],
      relatedLessonIds: ['lesson-hist-historiography-schools', 'lesson-hist-historiography-turns'],
      relationIds: ['historical-method-to-historiography', 'historiography-to-memory', 'historiography-to-politics'],
      explorationPrompts: [
        'How do schools of history change the scale and meaning of explanation?',
        'What is gained and lost when history becomes more narrative, global, or digital?'
      ]
    },
    {
      conceptId: 'historical-narrative',
      title: 'Historical Narrative',
      type: 'practice',
      disciplineId: 'history',
      summary: 'The shaping of events, evidence, and meaning into a historical account.',
      relatedCourseIds: ['course-hist-historiography'],
      relatedLessonIds: ['lesson-hist-historiography-turns'],
      relationIds: [],
      explorationPrompts: [
        'How does narration order facts without simply inventing them?',
        'When does narrative clarify causation and when does it distort it?'
      ]
    },
    {
      conceptId: 'memory-and-interpretation',
      title: 'Memory and Interpretation',
      type: 'concept',
      disciplineId: 'history',
      summary: 'The tension between collective memory, public uses of the past, and scholarly interpretation.',
      relatedCourseIds: ['course-hist-historiography'],
      relatedLessonIds: ['lesson-hist-historiography-turns'],
      relationIds: ['historiography-to-memory'],
      explorationPrompts: [
        'How do public memory and historical scholarship cooperate or conflict?',
        'What political stakes emerge when societies narrate their own past?' 
      ]
    },
    {
      conceptId: 'archaeology',
      title: 'Archaeology',
      type: 'concept',
      disciplineId: 'history',
      summary: 'The recovery and interpretation of material remains to reconstruct past human life.',
      relatedCourseIds: ['course-hist-archaeology'],
      relatedLessonIds: ['lesson-hist-archaeology-excavation', 'lesson-hist-archaeology-dating'],
      relationIds: ['historical-method-to-archaeology', 'archaeology-to-science', 'archaeology-to-prehistory'],
      explorationPrompts: [
        'What changes when the past is reconstructed from objects and layers rather than texts?',
        'How much interpretation sits inside technical archaeological method?'
      ]
    },
    {
      conceptId: 'chronology-and-dating',
      title: 'Chronology and Dating',
      type: 'method',
      disciplineId: 'history',
      summary: 'The chronometric and relative tools used to sequence finds and estimate age across archaeological contexts.',
      relatedCourseIds: ['course-hist-archaeology'],
      relatedLessonIds: ['lesson-hist-archaeology-dating'],
      relationIds: [],
      explorationPrompts: [
        'Why do dating methods need calibration, context, and cross-checking?',
        'Which questions can sequence answer better than exact date?'
      ]
    },
    {
      conceptId: 'material-evidence',
      title: 'Material Evidence',
      type: 'practice',
      disciplineId: 'history',
      summary: 'Artifacts, structures, deposits, and biological traces treated as evidence for human activity.',
      relatedCourseIds: ['course-hist-archaeology'],
      relatedLessonIds: ['lesson-hist-archaeology-excavation'],
      relationIds: [],
      explorationPrompts: [
        'What can material evidence tell us that texts cannot?',
        'How does context decide whether an object is meaningful evidence or loose debris?'
      ]
    },
    {
      conceptId: 'prehistory',
      title: 'Prehistory',
      type: 'historical-span',
      disciplineId: 'history',
      summary: 'Human existence before writing, reconstructed largely through material, environmental, and biological evidence.',
      relatedCourseIds: [],
      relatedLessonIds: [],
      relationIds: ['archaeology-to-prehistory'],
      explorationPrompts: [
        'How do historians and archaeologists work without written records?',
        'What kinds of evidence make deep human time legible?'
      ]
    },
    {
      conceptId: 'close-reading',
      title: 'Close Reading',
      type: 'concept',
      disciplineId: 'literature',
      summary: 'Attentive reading that traces meaning through wording, image, tone, structure, and form.',
      relatedCourseIds: ['course-lit-reading'],
      relatedLessonIds: ['lesson-lit-reading-close-reading', 'lesson-lit-reading-modes-and-strategies'],
      relationIds: ['historical-method-to-close-reading', 'close-reading-to-rhetoric', 'close-reading-to-language'],
      explorationPrompts: [
        'What appears only when you stop summarizing and start attending to detail?',
        'How does form carry meaning beyond paraphrase?'
      ]
    },
    {
      conceptId: 'literary-modes',
      title: 'Literary Modes',
      type: 'framework',
      disciplineId: 'literature',
      summary: 'Narrative, lyric, and dramatic ways of organizing voice, time, action, and attention.',
      relatedCourseIds: ['course-lit-reading'],
      relatedLessonIds: ['lesson-lit-reading-modes-and-strategies'],
      relationIds: [],
      explorationPrompts: [
        'How does a poem ask to be read differently from a story or a play?',
        'What shifts when voice rather than plot becomes the center of reading?'
      ]
    },
    {
      conceptId: 'interpretive-reading',
      title: 'Interpretive Reading',
      type: 'practice',
      disciplineId: 'literature',
      summary: 'The active habits of annotation, motif tracking, and reflective note-taking that turn reading into interpretation.',
      relatedCourseIds: ['course-lit-reading'],
      relatedLessonIds: ['lesson-lit-reading-modes-and-strategies'],
      relationIds: [],
      explorationPrompts: [
        'Which reading habits actually make interpretation cumulative?',
        'How do notes become arguments over time?'
      ]
    },
    {
      conceptId: 'rhetoric',
      title: 'Rhetoric',
      type: 'concept',
      disciplineId: 'literature',
      summary: 'The study of persuasion, audience, verbal strategy, and the crafted force of language.',
      relatedCourseIds: ['course-lit-rhetoric'],
      relatedLessonIds: ['lesson-lit-rhetoric-classical-foundations', 'lesson-lit-rhetoric-forms-and-figures'],
      relationIds: ['close-reading-to-rhetoric', 'rhetoric-to-language', 'rhetoric-to-politics'],
      explorationPrompts: [
        'How do rhetorical choices shape meaning even in literary works not meant as speeches?',
        'What makes persuasion feel elegant, coercive, or unforgettable?'
      ]
    },
    {
      conceptId: 'poetics',
      title: 'Poetics',
      type: 'framework',
      disciplineId: 'literature',
      summary: 'Concepts of plot, imitation, genre, and formal effect used to understand literary making.',
      relatedCourseIds: ['course-lit-rhetoric'],
      relatedLessonIds: ['lesson-lit-rhetoric-classical-foundations'],
      relationIds: [],
      explorationPrompts: [
        'What kinds of order and effect do forms make possible?',
        'How do theories of plot and genre shape interpretation?'
      ]
    },
    {
      conceptId: 'genre-and-form',
      title: 'Genre and Form',
      type: 'practice',
      disciplineId: 'literature',
      summary: 'Patterns of expectation and structure that literary works inhabit, stretch, or resist.',
      relatedCourseIds: ['course-lit-rhetoric'],
      relatedLessonIds: ['lesson-lit-rhetoric-forms-and-figures'],
      relationIds: [],
      explorationPrompts: [
        'When does following a form intensify meaning and when does breaking it do the work?',
        'How do genres guide readers before a text even begins?'
      ]
    },
    {
      conceptId: 'philosophical-method',
      title: 'Philosophical Method',
      type: 'concept',
      disciplineId: 'philosophy',
      summary: 'Argument reconstruction, charitable reading, conceptual analysis, and disciplined questioning.',
      relatedCourseIds: ['course-phil-foundations'],
      relatedLessonIds: ['lesson-phil-foundations-orientation', 'lesson-phil-foundations-methods'],
      relationIds: ['method-to-logic', 'method-to-ethics'],
      explorationPrompts: [
        'What makes a question philosophical rather than merely factual?',
        'How do charity and conceptual analysis prevent shallow disagreement?'
      ]
    },
    {
      conceptId: 'conceptual-analysis',
      title: 'Conceptual Analysis',
      type: 'method',
      disciplineId: 'philosophy',
      summary: 'Testing concepts through definitions, counterexamples, and refinement.',
      relatedCourseIds: ['course-phil-foundations'],
      relatedLessonIds: ['lesson-phil-foundations-methods'],
      relationIds: [],
      explorationPrompts: [
        'Which concepts break first when tested by counterexample?',
        'When is a definition too narrow, too broad, or simply confused?'
      ]
    },
    {
      conceptId: 'thought-experiments',
      title: 'Thought Experiments',
      type: 'method',
      disciplineId: 'philosophy',
      summary: 'Imagined cases used to isolate assumptions and test implications.',
      relatedCourseIds: ['course-phil-foundations'],
      relatedLessonIds: ['lesson-phil-foundations-methods'],
      relationIds: [],
      explorationPrompts: [
        'What can thought experiments reveal that description alone cannot?',
        'When do simplified cases distort a real moral or epistemic problem?'
      ]
    },
    {
      conceptId: 'logic',
      title: 'Logic',
      type: 'concept',
      disciplineId: 'philosophy',
      summary: 'The study of valid reasoning and formal inference.',
      relatedCourseIds: ['course-phil-logic'],
      relatedLessonIds: ['lesson-phil-logic-arguments', 'lesson-phil-logic-formal-systems'],
      relationIds: ['logic-to-epistemology', 'logic-to-language', 'logic-to-mathematics'],
      explorationPrompts: [
        'How does logic sharpen standards of justification?',
        'Where does formal reasoning connect philosophy to mathematics and language?'
      ]
    },
    {
      conceptId: 'justification',
      title: 'Justification',
      type: 'concept',
      disciplineId: 'philosophy',
      summary: 'The standards by which beliefs count as responsibly held rather than accidental.',
      relatedCourseIds: ['course-phil-epistemology'],
      relatedLessonIds: ['lesson-phil-epistemology-knowledge'],
      relationIds: ['epistemology-to-ethics', 'epistemology-to-science'],
      explorationPrompts: [
        'What turns a true belief into a justified belief?',
        'How much of your knowledge depends on trusted testimony?'
      ]
    },
    {
      conceptId: 'epistemology',
      title: 'Epistemology',
      type: 'concept',
      disciplineId: 'philosophy',
      summary: 'The study of knowledge, justification, and rational belief.',
      relatedCourseIds: ['course-phil-epistemology'],
      relatedLessonIds: ['lesson-phil-epistemology-knowledge', 'lesson-phil-epistemology-skepticism'],
      relationIds: ['logic-to-epistemology', 'epistemology-to-ethics', 'epistemology-to-science'],
      explorationPrompts: [
        'What standards justify belief?',
        'How does logical validity support good inquiry?'
      ]
    },
    {
      conceptId: 'skepticism',
      title: 'Skepticism',
      type: 'concept',
      disciplineId: 'philosophy',
      summary: 'Pressure against our claims to knowledge, especially where error and underdetermination remain possible.',
      relatedCourseIds: ['course-phil-epistemology'],
      relatedLessonIds: ['lesson-phil-epistemology-skepticism'],
      relationIds: [],
      explorationPrompts: [
        'How much doubt is intellectually responsible?',
        'Which skeptical challenges clarify inquiry and which overreach?'
      ]
    },
    {
      conceptId: 'language',
      title: 'Language',
      type: 'concept',
      disciplineId: 'philosophy',
      summary: 'Meaning, reference, and communication across natural and formal systems.',
      relatedCourseIds: [],
      relatedLessonIds: [],
      relationIds: ['logic-to-language'],
      explorationPrompts: [
        'How does meaning depend on form?',
        'Why do formal systems matter for natural language analysis?'
      ]
    },
    {
      conceptId: 'ethics',
      title: 'Ethics',
      type: 'concept',
      disciplineId: 'philosophy',
      summary: 'The study of moral claims, evaluative frameworks, and responsible action.',
      relatedCourseIds: ['course-phil-ethics'],
      relatedLessonIds: ['lesson-phil-ethics-frameworks', 'lesson-phil-ethics-applied'],
      relationIds: ['method-to-ethics', 'epistemology-to-ethics', 'ethics-to-politics'],
      explorationPrompts: [
        'Which moral frameworks clarify disagreement and which conceal it?',
        'How should ethical theory shape public judgment under uncertainty?'
      ]
    },
    {
      conceptId: 'normative-theory',
      title: 'Normative Theory',
      type: 'framework',
      disciplineId: 'philosophy',
      summary: 'Structured accounts of what we ought to do, including duty, outcomes, and virtue.',
      relatedCourseIds: ['course-phil-ethics'],
      relatedLessonIds: ['lesson-phil-ethics-frameworks'],
      relationIds: [],
      explorationPrompts: [
        'When do frameworks agree on action but disagree on why?',
        'What kinds of cases stress each framework most severely?'
      ]
    },
    {
      conceptId: 'applied-ethics',
      title: 'Applied Ethics',
      type: 'practice',
      disciplineId: 'philosophy',
      summary: 'The use of moral theory in medicine, technology, politics, ecology, and everyday public life.',
      relatedCourseIds: ['course-phil-ethics'],
      relatedLessonIds: ['lesson-phil-ethics-applied'],
      relationIds: [],
      explorationPrompts: [
        'What changes when public constraints meet clean moral theory?',
        'Which ethical issues require institutional rather than individual solutions?'
      ]
    },
    {
      conceptId: 'politics',
      title: 'Politics',
      type: 'discipline-bridge',
      disciplineId: 'social',
      summary: 'Institutions, public power, justice, law, and collective decision-making.',
      relatedCourseIds: [],
      relatedLessonIds: [],
      relationIds: ['ethics-to-politics'],
      explorationPrompts: [
        'How do moral ideals change when they enter institutions and law?',
        'Which ethical disagreements become political struggles?' 
      ]
    },
    {
      conceptId: 'science',
      title: 'Science',
      type: 'discipline-bridge',
      disciplineId: 'natural',
      summary: 'Systematic inquiry shaped by evidence, explanation, and methodological norms.',
      relatedCourseIds: [],
      relatedLessonIds: [],
      relationIds: ['epistemology-to-science'],
      explorationPrompts: [
        'What makes scientific belief more than well-organized opinion?',
        'How do evidence standards differ across forms of inquiry?'
      ]
    },
    {
      conceptId: 'mathematics',
      title: 'Mathematics',
      type: 'discipline-bridge',
      disciplineId: 'formal',
      summary: 'Abstract structures and proof systems that intersect with logic and computation.',
      relatedCourseIds: [],
      relatedLessonIds: [],
      relationIds: ['logic-to-mathematics'],
      explorationPrompts: [
        'What makes proof mathematical rather than merely persuasive?',
        'Where do logic, computation, and mathematics overlap?'
      ]
    }
  ],
  knowledgeRelations: [
    {
      id: 'philosophical-method-to-historical-method',
      fromId: 'philosophical-method',
      toId: 'historical-method',
      relationType: 'parallels',
      label: 'Close reasoning and historical criticism both discipline interpretation',
      courseIds: ['course-phil-foundations', 'course-hist-methods'],
      lessonIds: ['lesson-phil-foundations-methods', 'lesson-hist-methods-sources'],
      strength: 'bridge'
    },
    {
      id: 'historical-method-to-historiography',
      fromId: 'historical-method',
      toId: 'historiography',
      relationType: 'grounds',
      label: 'Method debates become explicit in historiography',
      courseIds: ['course-hist-methods', 'course-hist-historiography'],
      lessonIds: ['lesson-hist-methods-causation', 'lesson-hist-historiography-schools'],
      strength: 'core'
    },
    {
      id: 'historical-method-to-literary-interpretation',
      fromId: 'historical-method',
      toId: 'language',
      relationType: 'supports',
      label: 'Historical reading and textual interpretation sharpen one another',
      courseIds: ['course-hist-methods'],
      lessonIds: ['lesson-hist-methods-sources'],
      strength: 'bridge'
    },
    {
      id: 'historiography-to-memory',
      fromId: 'historiography',
      toId: 'memory-and-interpretation',
      relationType: 'questions',
      label: 'Historiography tests how memory and scholarship shape each other',
      courseIds: ['course-hist-historiography'],
      lessonIds: ['lesson-hist-historiography-turns'],
      strength: 'core'
    },
    {
      id: 'historiography-to-politics',
      fromId: 'historiography',
      toId: 'politics',
      relationType: 'intersects',
      label: 'Historical schools influence public narratives, ideology, and political memory',
      courseIds: ['course-hist-historiography'],
      lessonIds: ['lesson-hist-historiography-turns'],
      strength: 'bridge'
    },
    {
      id: 'historical-method-to-archaeology',
      fromId: 'historical-method',
      toId: 'archaeology',
      relationType: 'extends',
      label: 'Historical method extends into material evidence and site context',
      courseIds: ['course-hist-methods', 'course-hist-archaeology'],
      lessonIds: ['lesson-hist-methods-sources', 'lesson-hist-archaeology-excavation'],
      strength: 'core'
    },
    {
      id: 'archaeology-to-science',
      fromId: 'archaeology',
      toId: 'science',
      relationType: 'draws-on',
      label: 'Archaeology depends on laboratory dating, genetics, and remote sensing',
      courseIds: ['course-hist-archaeology'],
      lessonIds: ['lesson-hist-archaeology-dating'],
      strength: 'bridge'
    },
    {
      id: 'archaeology-to-prehistory',
      fromId: 'archaeology',
      toId: 'prehistory',
      relationType: 'opens',
      label: 'Archaeology opens the deep human past where texts do not exist',
      courseIds: ['course-hist-archaeology'],
      lessonIds: ['lesson-hist-archaeology-excavation', 'lesson-hist-archaeology-dating'],
      strength: 'core'
    },
    {
      id: 'historical-method-to-close-reading',
      fromId: 'historical-method',
      toId: 'close-reading',
      relationType: 'parallels',
      label: 'Historical criticism and close reading both build disciplined interpretation from textual evidence',
      courseIds: ['course-hist-methods', 'course-lit-reading'],
      lessonIds: ['lesson-hist-methods-sources', 'lesson-lit-reading-close-reading'],
      strength: 'bridge'
    },
    {
      id: 'close-reading-to-rhetoric',
      fromId: 'close-reading',
      toId: 'rhetoric',
      relationType: 'prepares',
      label: 'Close reading prepares the eye for rhetoric, figure, and formal craft',
      courseIds: ['course-lit-reading', 'course-lit-rhetoric'],
      lessonIds: ['lesson-lit-reading-close-reading', 'lesson-lit-rhetoric-forms-and-figures'],
      strength: 'core'
    },
    {
      id: 'close-reading-to-language',
      fromId: 'close-reading',
      toId: 'language',
      relationType: 'sharpens',
      label: 'Close reading sharpens attention to meaning, syntax, and verbal nuance',
      courseIds: ['course-lit-reading'],
      lessonIds: ['lesson-lit-reading-close-reading'],
      strength: 'bridge'
    },
    {
      id: 'rhetoric-to-language',
      fromId: 'rhetoric',
      toId: 'language',
      relationType: 'organizes',
      label: 'Rhetoric organizes how language persuades, moves, and frames audiences',
      courseIds: ['course-lit-rhetoric'],
      lessonIds: ['lesson-lit-rhetoric-classical-foundations'],
      strength: 'bridge'
    },
    {
      id: 'rhetoric-to-politics',
      fromId: 'rhetoric',
      toId: 'politics',
      relationType: 'feeds',
      label: 'Persuasion and public language feed directly into politics and civic life',
      courseIds: ['course-lit-rhetoric'],
      lessonIds: ['lesson-lit-rhetoric-classical-foundations'],
      strength: 'bridge'
    },
    {
      id: 'method-to-logic',
      fromId: 'philosophical-method',
      toId: 'logic',
      relationType: 'prepares',
      label: 'Method training prepares learners for formal reasoning',
      courseIds: ['course-phil-foundations', 'course-phil-logic'],
      lessonIds: ['lesson-phil-foundations-methods', 'lesson-phil-logic-arguments'],
      strength: 'core'
    },
    {
      id: 'method-to-ethics',
      fromId: 'philosophical-method',
      toId: 'ethics',
      relationType: 'frames',
      label: 'Method shapes how ethical disagreements are clarified',
      courseIds: ['course-phil-foundations', 'course-phil-ethics'],
      lessonIds: ['lesson-phil-foundations-methods', 'lesson-phil-ethics-frameworks'],
      strength: 'core'
    },
    {
      id: 'logic-to-epistemology',
      fromId: 'logic',
      toId: 'epistemology',
      relationType: 'supports',
      label: 'Logic sharpens standards of justification',
      courseIds: ['course-phil-logic'],
      lessonIds: ['lesson-phil-logic-arguments'],
      strength: 'core'
    },
    {
      id: 'logic-to-language',
      fromId: 'logic',
      toId: 'language',
      relationType: 'clarifies',
      label: 'Formal reasoning clarifies meaning and structure',
      courseIds: ['course-phil-logic'],
      lessonIds: ['lesson-phil-logic-formal-systems'],
      strength: 'core'
    },
    {
      id: 'logic-to-mathematics',
      fromId: 'logic',
      toId: 'mathematics',
      relationType: 'bridges',
      label: 'Proof and formal systems bridge philosophy and mathematics',
      courseIds: ['course-phil-logic'],
      lessonIds: ['lesson-phil-logic-formal-systems'],
      strength: 'core'
    },
    {
      id: 'epistemology-to-ethics',
      fromId: 'epistemology',
      toId: 'ethics',
      relationType: 'informs',
      label: 'Standards of justified belief shape moral responsibility',
      courseIds: ['course-phil-epistemology', 'course-phil-ethics'],
      lessonIds: ['lesson-phil-epistemology-skepticism', 'lesson-phil-ethics-applied'],
      strength: 'core'
    },
    {
      id: 'epistemology-to-science',
      fromId: 'epistemology',
      toId: 'science',
      relationType: 'supports',
      label: 'Epistemology underwrites standards of evidence and inquiry',
      courseIds: ['course-phil-epistemology'],
      lessonIds: ['lesson-phil-epistemology-knowledge'],
      strength: 'bridge'
    },
    {
      id: 'ethics-to-politics',
      fromId: 'ethics',
      toId: 'politics',
      relationType: 'extends',
      label: 'Moral theory extends into law, institutions, and public judgment',
      courseIds: ['course-phil-ethics'],
      lessonIds: ['lesson-phil-ethics-applied'],
      strength: 'bridge'
    }
  ]
};