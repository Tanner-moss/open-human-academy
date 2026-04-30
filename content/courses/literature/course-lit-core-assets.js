window.HUMAN_ACADEMY_EXTERNAL_LESSONS = window.HUMAN_ACADEMY_EXTERNAL_LESSONS || {};
window.HUMAN_ACADEMY_EXTERNAL_QUIZZES = window.HUMAN_ACADEMY_EXTERNAL_QUIZZES || {};
window.HUMAN_ACADEMY_EXTERNAL_TESTS = window.HUMAN_ACADEMY_EXTERNAL_TESTS || {};
window.HUMAN_ACADEMY_EXTERNAL_LABS = window.HUMAN_ACADEMY_EXTERNAL_LABS || {};
window.HUMAN_ACADEMY_EXTERNAL_PROJECTS = window.HUMAN_ACADEMY_EXTERNAL_PROJECTS || {};
window.HUMAN_ACADEMY_EXTERNAL_MEDIA = window.HUMAN_ACADEMY_EXTERNAL_MEDIA || {};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-lit-reading-close-reading'] = {
  id: 'lesson-lit-reading-close-reading',
  title: 'Close Reading and the Work of Attention',
  summary: 'Learn how literary study begins with exact attention to wording, structure, tone, image, and form rather than summary alone.',
  learningObjectives: [
    'Explain what close reading does and does not claim',
    'Track diction, syntax, imagery, and tone in a short passage',
    'Distinguish observation from interpretation while linking the two'
  ],
  keyTerms: ['Close reading', 'Diction', 'Syntax', 'Imagery', 'Tone', 'Form'],
  guidedNotes: [
    'Write down three details in a passage before offering a single interpretation.',
    'Note how one repeated word or image shifts meaning across a text.',
    'Record one place where form changes what the words are doing.'
  ],
  activities: [
    'Annotate a short poem or paragraph for diction, imagery, and tonal shifts.',
    'Write a two-sentence interpretation that depends on textual details rather than paraphrase.',
    'Compare a summary of a text with a close reading of one part of it.'
  ],
  readings: [
    { title: 'Practical Criticism', author: 'I.A. Richards', year: 1929 },
    { title: 'How to Read Literature Like a Professor', author: 'Thomas C. Foster', year: 2003 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-lit-reading-modes-and-strategies'] = {
  id: 'lesson-lit-reading-modes-and-strategies',
  title: 'Narrative, Lyric, Drama, and Active Reading Strategies',
  summary: 'Move from core attention skills into the different modes of literature and the habits that make reading cumulative rather than forgettable.',
  learningObjectives: [
    'Distinguish narrative, lyric, and dramatic modes',
    'Explain how genre expectations shape reading',
    'Use annotation, motif tracking, and commonplace notes to build interpretation over time'
  ],
  keyTerms: ['Narrative', 'Lyric', 'Drama', 'Genre', 'Reader-response', 'Commonplace book'],
  guidedNotes: [
    'Choose one text and identify whether its dominant mode is narrative, lyric, or dramatic.',
    'Write one note on how genre expectations change what you look for.',
    'Describe one reading habit that helps you remember patterns across a longer work.'
  ],
  activities: [
    'Sort short passages into narrative, lyric, and dramatic modes.',
    'Track a motif across a text and explain why it matters.',
    'Start a brief commonplace list of quotations and interpretive notes.'
  ],
  readings: [
    { title: 'The Art of Reading Poetry', author: 'Harold Bloom', year: 2004 },
    { title: 'Anatomy of Criticism', author: 'Northrop Frye', year: 1957 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_QUIZZES['quiz-lit-reading-check-1'] = {
  id: 'quiz-lit-reading-check-1',
  title: 'Reading Literature Check',
  questions: [
    {
      q: 'Close reading focuses first on:',
      options: ['Author biography', 'Language, structure, and textual detail', 'Publishing sales', 'Reader popularity'],
      answer: 1
    },
    {
      q: 'A lyric text is most often centered on:',
      options: ['Sequential plot only', 'A concentrated voice, feeling, or moment', 'Stage directions only', 'Historical footnotes'],
      answer: 1
    },
    {
      q: 'A commonplace book is useful because it:',
      options: ['Replaces interpretation', 'Stores quotations, motifs, and observations for later thinking', 'Eliminates genre', 'Only helps with exams'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_TESTS['test-lit-reading-core'] = {
  id: 'test-lit-reading-core',
  title: 'How to Read Literature Core Test',
  summary: 'A cumulative test on close reading, literary modes, genre awareness, and active reading strategies.',
  passScore: 80,
  questions: [
    {
      q: 'What is the strongest definition of close reading in this course?',
      options: ['Summarizing a plot accurately', 'Tracing how textual details generate meaning', 'Researching only the author\'s life', 'Ignoring form'],
      answer: 1
    },
    {
      q: 'Why does genre matter?',
      options: ['It determines one fixed meaning', 'It creates expectations that guide interpretation and can be fulfilled or disrupted', 'It only matters in ancient texts', 'It replaces close reading'],
      answer: 1
    },
    {
      q: 'Reader-response theory is important because it emphasizes:',
      options: ['Meaning as partly shaped by acts and communities of reading', 'That all readings are identical', 'That only authors matter', 'That texts have no form'],
      answer: 0
    },
    {
      q: 'An active reading strategy helps mainly by:',
      options: ['Reducing all texts to one summary', 'Building cumulative patterns, observations, and interpretive memory', 'Eliminating ambiguity', 'Avoiding annotation'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LABS['lab-lit-reading-annotation'] = {
  id: 'lab-lit-reading-annotation',
  title: 'Annotation Lab',
  summary: 'Practice turning a short text into an annotated field of evidence rather than a passive reading experience.',
  deliverable: 'An annotated passage with a short interpretive note',
  checklist: [
    'Choose a short poem, scene, or prose passage.',
    'Mark diction, imagery, and tonal shifts directly on the text.',
    'Identify at least one structural or formal feature.',
    'Track one recurring word, symbol, or motif.',
    'Write a short interpretation grounded in those notes.'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_PROJECTS['project-lit-reading-commonplace'] = {
  id: 'project-lit-reading-commonplace',
  title: 'Commonplace Book Project',
  drivingQuestion: 'How do readers turn scattered encounters with literature into a durable habit of interpretation?',
  scope: 'Build a short commonplace book from several literary excerpts with notes, patterns, and reflections.',
  requirements: [
    'Collect passages from at least four texts or excerpts.',
    'Annotate each with observations rather than summary alone.',
    'Group entries by a pattern such as voice, image, genre, or theme.',
    'Write a short reflection on what your notes taught you about reading.'
  ],
  deliverables: ['A short commonplace notebook or slide deck', 'A final interpretive reflection'],
  milestones: [
    'Choose the texts and excerpts.',
    'Annotate each entry.',
    'Group patterns across the entries.',
    'Write the final reflection.'
  ],
  rubric: ['Quality of annotation', 'Strength of pattern recognition', 'Use of literary vocabulary', 'Thoughtfulness of reflection']
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-lit-reading-wikipedia'] = {
  id: 'media-lit-reading-wikipedia',
  type: 'wikipedia',
  title: 'Wikipedia: Close reading',
  url: 'https://en.wikipedia.org/wiki/Close_reading',
  placement: 'overview',
  required: true,
  whyThisMatters: 'A quick orientation to one of the central habits of literary study before you practice it directly.',
  fallback: 'Replace with a standard reference overview of close reading.'
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-lit-reading-youtube-1'] = {
  id: 'media-lit-reading-youtube-1',
  type: 'youtube',
  title: 'Close Reading: A Walkthrough',
  url: 'https://www.youtube.com/watch?v=2k7F3sVQv7Q',
  youtubeId: '2k7F3sVQv7Q',
  embedUrl: 'https://www.youtube-nocookie.com/embed/2k7F3sVQv7Q',
  placement: 'after-lesson',
  required: false,
  whyThisMatters: 'A compact model of how to move from textual detail to interpretation.',
  fallback: 'Replace with another short close-reading demonstration.'
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-lit-rhetoric-classical-foundations'] = {
  id: 'lesson-lit-rhetoric-classical-foundations',
  title: 'Aristotle, Rhetoric, and the Classical Foundations',
  summary: 'Begin with poetics and rhetoric as foundational ways of understanding persuasion, imitation, plot, and audience.',
  learningObjectives: [
    'Explain key concepts from Aristotle\'s Poetics and Rhetoric',
    'Distinguish ethos, pathos, and logos in literary and rhetorical situations',
    'Understand why rhetorical analysis belongs inside literary study'
  ],
  keyTerms: ['Poetics', 'Rhetoric', 'Ethos', 'Pathos', 'Logos', 'Catharsis'],
  guidedNotes: [
    'Write one sentence distinguishing rhetoric from poetics.',
    'Identify ethos, pathos, and logos in a short speech or literary moment.',
    'Note one way audience expectations shape persuasive language.'
  ],
  activities: [
    'Read a short rhetorical passage and identify its dominant appeal.',
    'Compare a tragic scene with Aristotle\'s account of plot and catharsis.',
    'Describe the rhetorical situation of a literary speech or monologue.'
  ],
  readings: [
    { title: 'Poetics', author: 'Aristotle', year: -335 },
    { title: 'Rhetoric', author: 'Aristotle', year: -330 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-lit-rhetoric-forms-and-figures'] = {
  id: 'lesson-lit-rhetoric-forms-and-figures',
  title: 'Figures of Speech, Prosody, and Genre in Practice',
  summary: 'Move from classical foundations into the craft vocabulary of figurative language, metre, poetic form, and genre expectation.',
  learningObjectives: [
    'Recognize major figures of speech in context',
    'Scan basic metre and explain how prosody shapes effect',
    'Use genre vocabulary to describe formal expectation and deviation'
  ],
  keyTerms: ['Metaphor', 'Metonymy', 'Irony', 'Iambic pentameter', 'Prosody', 'Genre'],
  guidedNotes: [
    'Mark one figure of speech and explain why it matters for meaning.',
    'Scan one line of verse and note how rhythm contributes to effect.',
    'Describe one way a text follows or resists genre expectations.'
  ],
  activities: [
    'Label figures of speech in a short passage.',
    'Scan a few poetic lines for metre and rhythmic variation.',
    'Compare two forms, such as sonnet and free verse, in terms of expectation and effect.'
  ],
  readings: [
    { title: 'The Princeton Encyclopedia of Poetry and Poetics', author: 'Roland Greene et al.', year: 2012 },
    { title: 'A Handbook to Literature', author: 'William Harmon and C. Hugh Holman', year: 2008 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_QUIZZES['quiz-lit-rhetoric-check-1'] = {
  id: 'quiz-lit-rhetoric-check-1',
  title: 'Rhetoric and Poetics Check',
  questions: [
    {
      q: 'Ethos, pathos, and logos are:',
      options: ['Poetic metres', 'Classical rhetorical appeals', 'Narrative viewpoints', 'Genres of drama'],
      answer: 1
    },
    {
      q: 'Iambic pentameter is made of:',
      options: ['Five iambic feet', 'Ten identical stressed syllables', 'Five lines only', 'Any unrhymed line'],
      answer: 0
    },
    {
      q: 'Metonymy works by:',
      options: ['Making a direct explicit comparison with like or as', 'Substituting something closely associated for the thing itself', 'Repeating the same sound only', 'Avoiding figurative language'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_TESTS['test-lit-rhetoric-core'] = {
  id: 'test-lit-rhetoric-core',
  title: 'Rhetoric and Poetics Core Test',
  summary: 'A cumulative test on classical rhetoric, poetics, figurative language, metre, and genre.',
  passScore: 80,
  questions: [
    {
      q: 'What is the best description of rhetoric in this course?',
      options: ['Empty ornament', 'The study of persuasion, audience, and verbal strategy', 'Only political speech', 'A replacement for literature'],
      answer: 1
    },
    {
      q: 'Catharsis in Aristotle is connected most directly to:',
      options: ['A form of satire', 'The emotional work of tragedy', 'The sonnet form', 'Historical context'],
      answer: 1
    },
    {
      q: 'Why does metre matter?',
      options: ['It is decorative only', 'It shapes pacing, stress, and effect in verse', 'It replaces imagery', 'It only matters in prose'],
      answer: 1
    },
    {
      q: 'Genre analysis is useful because it:',
      options: ['Makes all works identical', 'Helps explain expectations, conventions, and departures from them', 'Ignores form', 'Only applies to ancient texts'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LABS['lab-lit-rhetoric-scansion'] = {
  id: 'lab-lit-rhetoric-scansion',
  title: 'Scansion and Figures Lab',
  summary: 'Practice reading poetic rhythm and figurative language as form, not as afterthought.',
  deliverable: 'A scanned passage with labeled figures and a short effect note',
  checklist: [
    'Choose a short poetic or rhetorical passage.',
    'Mark the metre or rhythm as clearly as possible.',
    'Identify at least three figures of speech or rhetorical devices.',
    'Explain how one formal choice shapes meaning or tone.',
    'Write a short concluding note on effect.'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_PROJECTS['project-lit-rhetoric-analysis'] = {
  id: 'project-lit-rhetoric-analysis',
  title: 'Rhetoric Analysis Project',
  drivingQuestion: 'How do persuasion and poetic craft work together inside a literary text?',
  scope: 'Write a short formal analysis of a literary passage using rhetoric, poetics, and prosody vocabulary.',
  requirements: [
    'Choose a passage from poetry, drama, or elevated prose.',
    'Analyze at least one rhetorical appeal, one figure of speech, and one formal feature.',
    'Use genre or poetics vocabulary accurately.',
    'Explain how craft choices produce effect rather than merely listing them.'
  ],
  deliverables: ['A 3-4 page analysis or equivalent slide deck', 'A short craft glossary used in the analysis'],
  milestones: [
    'Choose the passage and note its genre situation.',
    'Mark appeals, figures, and formal features.',
    'Draft the analysis.',
    'Add the glossary and final revision.'
  ],
  rubric: ['Accuracy of literary vocabulary', 'Depth of formal analysis', 'Connection between craft and meaning', 'Clarity of writing']
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-lit-rhetoric-wikipedia'] = {
  id: 'media-lit-rhetoric-wikipedia',
  type: 'wikipedia',
  title: 'Wikipedia: Rhetoric',
  url: 'https://en.wikipedia.org/wiki/Rhetoric',
  placement: 'overview',
  required: true,
  whyThisMatters: 'A quick map of the rhetorical tradition before you move into devices, forms, and literary application.',
  fallback: 'Replace with a standard rhetoric overview.'
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-lit-rhetoric-youtube-1'] = {
  id: 'media-lit-rhetoric-youtube-1',
  type: 'youtube',
  title: 'Rhetoric: The Art of Persuasion',
  url: 'https://www.youtube.com/watch?v=3klMM9BkW5o',
  youtubeId: '3klMM9BkW5o',
  embedUrl: 'https://www.youtube-nocookie.com/embed/3klMM9BkW5o',
  placement: 'after-lesson',
  required: false,
  whyThisMatters: 'A compact primer on rhetorical analysis before applying it to literature.',
  fallback: 'Replace with another short rhetoric explainer.'
};