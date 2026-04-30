window.HUMAN_ACADEMY_EXTERNAL_LESSONS = window.HUMAN_ACADEMY_EXTERNAL_LESSONS || {};
window.HUMAN_ACADEMY_EXTERNAL_QUIZZES = window.HUMAN_ACADEMY_EXTERNAL_QUIZZES || {};
window.HUMAN_ACADEMY_EXTERNAL_TESTS = window.HUMAN_ACADEMY_EXTERNAL_TESTS || {};
window.HUMAN_ACADEMY_EXTERNAL_LABS = window.HUMAN_ACADEMY_EXTERNAL_LABS || {};
window.HUMAN_ACADEMY_EXTERNAL_PROJECTS = window.HUMAN_ACADEMY_EXTERNAL_PROJECTS || {};
window.HUMAN_ACADEMY_EXTERNAL_MEDIA = window.HUMAN_ACADEMY_EXTERNAL_MEDIA || {};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-hist-methods-sources'] = {
  id: 'lesson-hist-methods-sources',
  title: 'Sources, Archives, and Source Criticism',
  summary: 'Start with the difference between the past and history, then learn how historians classify sources and evaluate authenticity, provenance, reliability, and bias.',
  learningObjectives: [
    'Distinguish primary, secondary, and tertiary sources in real cases',
    'Use external and internal criticism on a source',
    'Explain why archives never speak for themselves'
  ],
  keyTerms: ['Primary source', 'Secondary source', 'Archive', 'External criticism', 'Internal criticism', 'Corroboration'],
  guidedNotes: [
    'Write one sentence distinguishing the past from history.',
    'List three different kinds of primary sources and what each can reveal.',
    'Note one reason authentic sources can still mislead historians.'
  ],
  activities: [
    'Classify a set of documents into primary, secondary, and tertiary sources.',
    'Perform external criticism on a document by checking authorship, date, and provenance.',
    'Perform internal criticism by testing perspective, interest, and reliability.'
  ],
  readings: [
    { title: 'What Is History?', author: 'E.H. Carr', year: 1961 },
    { title: 'The Landscape of History', author: 'John Lewis Gaddis', year: 2002 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-hist-methods-causation'] = {
  id: 'lesson-hist-methods-causation',
  title: 'Periodization, Causation, and Historical Argument',
  summary: 'Move from source work into the historian\'s craft of framing time, weighing causes, and making arguments without collapsing complexity into one factor.',
  learningObjectives: [
    'Explain how periodization organizes and distorts history',
    'Distinguish proximate, structural, contingent, necessary, and sufficient causes',
    'Build a historical argument from evidence rather than chronology alone'
  ],
  keyTerms: ['Periodization', 'Historical causation', 'Contingency', 'Structure', 'Agency', 'Interpretation'],
  guidedNotes: [
    'Describe one familiar period label that may hide more than it reveals.',
    'Write a short example separating proximate and deeper causes of an event.',
    'Note one way evidence constrains interpretation without eliminating it.'
  ],
  activities: [
    'Compare two different periodizations of the same historical span.',
    'Analyze a historical event using at least three causal layers.',
    'Turn a raw timeline into a brief historical claim supported by evidence.'
  ],
  readings: [
    { title: 'The History Manifesto', author: 'Jo Guldi and David Armitage', year: 2014 },
    { title: 'In Defense of History', author: 'Richard J. Evans', year: 1997 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_QUIZZES['quiz-hist-methods-check-1'] = {
  id: 'quiz-hist-methods-check-1',
  title: 'Historical Methods Check',
  questions: [
    {
      q: 'A primary source is best defined as:',
      options: ['A source that is always reliable', 'A source produced during the period under study', 'Any textbook summary', 'A source housed in a national archive'],
      answer: 1
    },
    {
      q: 'External source criticism focuses first on:',
      options: ['Narrative style', 'Authenticity, provenance, and dating', 'Whether the source matches your thesis', 'Moral judgment of the author'],
      answer: 1
    },
    {
      q: 'Periodization matters because it:',
      options: ['Is neutral and obvious', 'Shapes how change and continuity are perceived', 'Only applies to Europe', 'Removes interpretation from history'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_TESTS['test-hist-methods-core'] = {
  id: 'test-hist-methods-core',
  title: 'Historical Methods Core Test',
  summary: 'A cumulative test on source types, criticism, causation, periodization, and evidence-based historical argument.',
  passScore: 80,
  questions: [
    {
      q: 'Which statement best captures the difference between the past and history?',
      options: ['There is no difference', 'The past is what happened; history is the interpretation built from traces of it', 'History is fiction', 'The past survives fully in archives'],
      answer: 1
    },
    {
      q: 'Internal criticism asks mainly whether:',
      options: ['The document physically survives intact', 'The source is reliable, biased, interested, or otherwise limited', 'The source was found legally', 'The topic is ancient or modern'],
      answer: 1
    },
    {
      q: 'A historian using multiple causal layers is trying to avoid:',
      options: ['Any interpretation at all', 'Single-cause reductionism', 'Primary sources', 'Chronology'],
      answer: 1
    },
    {
      q: 'Why is corroboration important?',
      options: ['One source is always enough', 'It checks claims against independent evidence and perspective', 'It eliminates bias entirely', 'It matters only for modern history'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LABS['lab-hist-methods-source-criticism'] = {
  id: 'lab-hist-methods-source-criticism',
  title: 'Source Criticism Lab',
  summary: 'Take one historical source and evaluate it for authenticity, provenance, perspective, purpose, and evidentiary value.',
  deliverable: 'A one-page source criticism sheet with final reliability judgment',
  checklist: [
    'Choose one historical document, artifact description, or eyewitness source.',
    'Identify author, date, provenance, and intended audience.',
    'Evaluate what the source can and cannot reliably tell you.',
    'Corroborate at least one claim using a second source.',
    'Write a final judgment on how the source should be used by historians.'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_PROJECTS['project-hist-methods-mini-casebook'] = {
  id: 'project-hist-methods-mini-casebook',
  title: 'Historical Methods Mini Casebook',
  drivingQuestion: 'How does the same event look different when historians compare multiple source types and causal frames?',
  scope: 'Build a short casebook around one event, controversy, or historical episode using at least three source types.',
  requirements: [
    'Choose one event or historical problem.',
    'Use at least three different source types.',
    'Evaluate each source using source criticism.',
    'Write a short causal interpretation rather than only describing the event.'
  ],
  deliverables: ['A 3-5 page casebook or slide deck', 'A short note on what remained uncertain'],
  milestones: [
    'Choose the topic and collect sources.',
    'Complete criticism notes for each source.',
    'Draft the causal interpretation.',
    'Finish the uncertainty note and revisions.'
  ],
  rubric: ['Quality of source criticism', 'Breadth of evidence', 'Strength of causal interpretation', 'Clarity of writing']
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-hist-methods-wikipedia'] = {
  id: 'media-hist-methods-wikipedia',
  type: 'wikipedia',
  title: 'Wikipedia: Historical Method',
  url: 'https://en.wikipedia.org/wiki/Historical_method',
  placement: 'overview',
  required: true,
  whyThisMatters: 'Use this as a fast orientation to method, schools, and the difference between doing history and writing about history.',
  fallback: 'Replace with a standard reference article on historiography and historical method.'
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-hist-methods-youtube-1'] = {
  id: 'media-hist-methods-youtube-1',
  type: 'youtube',
  title: 'How to Read a Primary Source',
  url: 'https://www.youtube.com/watch?v=5L0GqkNV1vY',
  youtubeId: '5L0GqkNV1vY',
  embedUrl: 'https://www.youtube-nocookie.com/embed/5L0GqkNV1vY',
  placement: 'after-lesson',
  required: false,
  whyThisMatters: 'A compact walk-through before doing your own source criticism.',
  fallback: 'Replace with another short source analysis tutorial.'
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-hist-historiography-schools'] = {
  id: 'lesson-hist-historiography-schools',
  title: 'Major Schools of Historical Writing',
  summary: 'Study how Rankean, Annales, Marxist, social, and microhistorical approaches define the object and scale of history differently.',
  learningObjectives: [
    'Compare major historiographical schools',
    'Explain how scale changes historical explanation',
    'Identify what each school foregrounds and marginalizes'
  ],
  keyTerms: ['Historicism', 'Annales', 'Longue durée', 'Marxist historiography', 'Microhistory', 'History from below'],
  guidedNotes: [
    'Write one sentence on how Ranke and Annales differ in what matters historically.',
    'Note one strength of social history and one limitation.',
    'Explain why scale matters for historical explanation.'
  ],
  activities: [
    'Sort short descriptions into the historiographical school they best fit.',
    'Rewrite the same topic at event scale and structural scale.',
    'Compare class-based explanation to culture-based explanation.'
  ],
  readings: [
    { title: 'Metahistory', author: 'Hayden White', year: 1973 },
    { title: 'The Making of the English Working Class', author: 'E.P. Thompson', year: 1963 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-hist-historiography-turns'] = {
  id: 'lesson-hist-historiography-turns',
  title: 'Narrative, Objectivity, and New Directions',
  summary: 'Follow historiography into the linguistic turn, debates over objectivity, digital methods, global history, and memory studies.',
  learningObjectives: [
    'Explain why narrative form became a historiographical problem',
    'Assess debates over objectivity after the linguistic turn',
    'Describe how digital and global methods change historical practice'
  ],
  keyTerms: ['Narrative', 'Objectivity', 'Linguistic turn', 'Global history', 'Memory studies', 'Digital humanities'],
  guidedNotes: [
    'Describe one reason narrative structure matters to historical writing.',
    'Write one argument for and one argument against strong objectivity claims in history.',
    'Note one way digital methods extend rather than replace traditional history.'
  ],
  activities: [
    'Compare two historiographical descriptions of objectivity.',
    'Identify a narrative choice in a historical essay and explain its effect.',
    'Sketch a research question that benefits from digital or global historical methods.'
  ],
  readings: [
    { title: 'What Is Global History?', author: 'Sebastian Conrad', year: 2016 },
    { title: 'In Defense of History', author: 'Richard J. Evans', year: 1997 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_QUIZZES['quiz-hist-historiography-check-1'] = {
  id: 'quiz-hist-historiography-check-1',
  title: 'Historiography Check',
  questions: [
    {
      q: 'The Annales School is especially associated with:',
      options: ['Only diplomatic history', 'Long-term structures and the longue durée', 'Rejecting archives entirely', 'Pure biography'],
      answer: 1
    },
    {
      q: 'Microhistory is valuable because it:',
      options: ['Avoids interpretation', 'Uses a small case to reveal larger historical dynamics', 'Only studies short time periods', 'Rejects social history'],
      answer: 1
    },
    {
      q: 'The linguistic turn pushed historians to pay more attention to:',
      options: ['Radiocarbon dating', 'Narrative, language, and representation', 'Military campaigns alone', 'Economic statistics only'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_TESTS['test-hist-historiography-core'] = {
  id: 'test-hist-historiography-core',
  title: 'Historiography Core Test',
  summary: 'A cumulative check on schools of historical writing, narrative, objectivity, and new methodological directions.',
  passScore: 80,
  questions: [
    {
      q: 'Rankean history is classically associated with:',
      options: ['Global systems and climate', 'Archival research and showing the past as it actually was', 'Postmodern narrative skepticism', 'Digital mapping'],
      answer: 1
    },
    {
      q: 'Why is the longue durée important?',
      options: ['It emphasizes very short events', 'It highlights long-term structural forces beyond individual events', 'It applies only to ancient history', 'It rejects interpretation'],
      answer: 1
    },
    {
      q: 'A major question raised by the linguistic turn is whether:',
      options: ['All sources are forged', 'Historical writing is shaped by narrative and language rather than merely mirroring facts', 'Statistics are impossible', 'Archives should be closed'],
      answer: 1
    },
    {
      q: 'Digital humanities in history most often means:',
      options: ['Replacing archives with AI summaries', 'Using tools such as text mining, GIS, and large corpora to extend historical inquiry', 'Rejecting qualitative work', 'Studying only internet history'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LABS['lab-hist-historiography-comparison'] = {
  id: 'lab-hist-historiography-comparison',
  title: 'Historiography Comparison Lab',
  summary: 'Take one topic and compare how two different historiographical schools would frame it, scale it, and source it differently.',
  deliverable: 'A two-column comparison sheet with a final methodological verdict',
  checklist: [
    'Choose one topic or historical episode.',
    'Select two historiographical schools to compare.',
    'Explain what each school would prioritize as evidence and explanation.',
    'Compare the narrative form or scale each would likely use.',
    'Write a brief conclusion on which frame is more illuminating and why.'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_PROJECTS['project-hist-historiography-debate'] = {
  id: 'project-hist-historiography-debate',
  title: 'Historiographical Debate Project',
  drivingQuestion: 'How does changing historical method change the past we think we are seeing?',
  scope: 'Write or present a debate between two historiographical schools over the same historical problem.',
  requirements: [
    'Choose one historical problem and two historiographical approaches.',
    'Present each approach fairly, including sources, scale, and explanation.',
    'Show where the approaches genuinely conflict.',
    'Conclude with your own judgment about what each reveals.'
  ],
  deliverables: ['A 4-6 page paper or debate slide deck', 'A short reflection on method and objectivity'],
  milestones: [
    'Choose the problem and schools.',
    'Collect representative readings or summaries.',
    'Draft the comparative debate.',
    'Write the final judgment and reflection.'
  ],
  rubric: ['Accuracy of school comparison', 'Attention to scale and method', 'Fairness to disagreement', 'Clarity of final judgment']
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-hist-historiography-wikipedia'] = {
  id: 'media-hist-historiography-wikipedia',
  type: 'wikipedia',
  title: 'Wikipedia: Historiography',
  url: 'https://en.wikipedia.org/wiki/Historiography',
  placement: 'overview',
  required: true,
  whyThisMatters: 'A quick overview of the schools and debates before moving into their differences in detail.',
  fallback: 'Replace with a standard encyclopedia article on historiography.'
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-hist-historiography-youtube-1'] = {
  id: 'media-hist-historiography-youtube-1',
  type: 'youtube',
  title: 'Historiography: Schools of Thought',
  url: 'https://www.youtube.com/watch?v=4QfP0jVv5sA',
  youtubeId: '4QfP0jVv5sA',
  embedUrl: 'https://www.youtube-nocookie.com/embed/4QfP0jVv5sA',
  placement: 'after-lesson',
  required: false,
  whyThisMatters: 'A compact orientation to how historical schools differ in method and emphasis.',
  fallback: 'Replace with another short historiography overview.'
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-hist-archaeology-excavation'] = {
  id: 'lesson-hist-archaeology-excavation',
  title: 'Excavation, Stratigraphy, and Material Context',
  summary: 'Study how archaeologists recover material evidence without destroying the context that gives artifacts meaning.',
  learningObjectives: [
    'Explain why context is as important as the artifact itself',
    'Describe stratigraphy, the law of superposition, and careful recording practices',
    'Understand why excavation is both revealing and destructive'
  ],
  keyTerms: ['Stratigraphy', 'Superposition', 'Context', 'Harris Matrix', 'Provenience', 'Excavation grid'],
  guidedNotes: [
    'Write one sentence explaining why an artifact without context can mislead.',
    'Describe what the law of superposition means for reading layers.',
    'Note one reason excavation is irreversible.'
  ],
  activities: [
    'Read a simple trench drawing and identify older and newer layers.',
    'Map an artifact find to context, layer, and associated material.',
    'Compare a careful excavation report with a looted site and explain what is lost.'
  ],
  readings: [
    { title: 'Archaeology: Theories, Methods, and Practice', author: 'Colin Renfrew and Paul Bahn', year: 2020 },
    { title: 'Archaeology Essentials', author: 'Colin Renfrew and Paul Bahn', year: 2007 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-hist-archaeology-dating'] = {
  id: 'lesson-hist-archaeology-dating',
  title: 'Dating Methods, Ancient DNA, and Remote Sensing',
  summary: 'Move from excavation context into radiocarbon dating, complementary chronometric methods, LiDAR, and the interpretive force of ancient DNA.',
  learningObjectives: [
    'Compare radiocarbon dating with other chronometric methods',
    'Explain how LiDAR and remote sensing reveal hidden sites',
    'Describe what ancient DNA can and cannot tell us about past populations'
  ],
  keyTerms: ['Radiocarbon dating', 'Dendrochronology', 'Thermoluminescence', 'LiDAR', 'Ancient DNA', 'Calibration'],
  guidedNotes: [
    'Write one limitation of radiocarbon dating.',
    'Note one kind of site where LiDAR is especially transformative.',
    'Explain why genetic evidence still requires archaeological interpretation.'
  ],
  activities: [
    'Match dating methods to the materials or timescales they fit best.',
    'Compare what a trench, a satellite image, and LiDAR each reveal.',
    'List two insights and two limits of ancient DNA evidence.'
  ],
  readings: [
    { title: 'Neanderthal Man: In Search of Lost Genomes', author: 'Svante Pääbo', year: 2014 },
    { title: 'The Horse, the Wheel, and Language', author: 'David W. Anthony', year: 2007 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_QUIZZES['quiz-hist-archaeology-check-1'] = {
  id: 'quiz-hist-archaeology-check-1',
  title: 'Archaeology Foundations Check',
  questions: [
    {
      q: 'The law of superposition means that:',
      options: ['Older layers are generally below newer ones', 'Artifacts always date the layer exactly', 'All layers were deposited at once', 'Only radiocarbon dating establishes sequence'],
      answer: 0
    },
    {
      q: 'LiDAR is especially useful when:',
      options: ['A site is underwater', 'Dense vegetation hides large-scale features', 'No mapping is needed', 'Only small artifacts matter'],
      answer: 1
    },
    {
      q: 'Ancient DNA is most powerful when combined with:',
      options: ['No other evidence', 'Archaeological context and other lines of evidence', 'Only mythological texts', 'Modern census data'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_TESTS['test-hist-archaeology-core'] = {
  id: 'test-hist-archaeology-core',
  title: 'Archaeology Core Test',
  summary: 'A cumulative test on excavation, context, dating methods, remote sensing, and ancient DNA.',
  passScore: 80,
  questions: [
    {
      q: 'Why is context central to archaeology?',
      options: ['Artifacts explain themselves', 'Context links objects to layer, association, and interpretation', 'Only museums matter', 'Dating methods replace context'],
      answer: 1
    },
    {
      q: 'Radiocarbon dating works by measuring:',
      options: ['Changes in pottery style', 'The decay of carbon-14 in once-living material', 'Depth of a trench only', 'Magnetic polarity in all artifacts'],
      answer: 1
    },
    {
      q: 'Which statement best captures the value of LiDAR?',
      options: ['It excavates sites automatically', 'It can reveal landscape-scale structures hidden beneath vegetation', 'It replaces fieldwork entirely', 'It only dates inscriptions'],
      answer: 1
    },
    {
      q: 'Ancient DNA should be interpreted carefully because it:',
      options: ['Tells us everything about culture by itself', 'Provides important biological data but not a full cultural explanation on its own', 'Is never reliable', 'Applies only to modern history'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LABS['lab-hist-archaeology-context-grid'] = {
  id: 'lab-hist-archaeology-context-grid',
  title: 'Archaeological Context Grid Lab',
  summary: 'Practice recording finds by layer, locus, association, and probable interpretation rather than treating artifacts as isolated objects.',
  deliverable: 'A filled context grid with one short interpretive summary',
  checklist: [
    'Choose or imagine a small excavation trench with multiple layers.',
    'Record at least five finds by layer and context.',
    'Note associations among finds rather than listing them separately.',
    'Assign a tentative date range using available evidence.',
    'Write a short interpretation and note what remains uncertain.'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_PROJECTS['project-hist-archaeology-site-brief'] = {
  id: 'project-hist-archaeology-site-brief',
  title: 'Archaeological Site Brief',
  drivingQuestion: 'How do archaeologists build a careful account of a site from fragmentary material evidence?',
  scope: 'Prepare a site brief for a real or reconstructed archaeological site using excavation context, dating evidence, and interpretive caution.',
  requirements: [
    'Choose one site or one clearly bounded excavation scenario.',
    'Describe context, key finds, and likely date range.',
    'Use at least two dating or evidence strategies.',
    'State both your strongest interpretation and the limits of the evidence.'
  ],
  deliverables: ['A 3-5 page site brief or equivalent slide deck', 'A short uncertainty statement'],
  milestones: [
    'Choose the site or scenario.',
    'Organize context and material evidence.',
    'Write the dating and interpretation sections.',
    'Finish the uncertainty statement and revisions.'
  ],
  rubric: ['Attention to context', 'Use of dating evidence', 'Interpretive caution', 'Clarity of presentation']
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-hist-archaeology-wikipedia'] = {
  id: 'media-hist-archaeology-wikipedia',
  type: 'wikipedia',
  title: 'Wikipedia: Archaeology',
  url: 'https://en.wikipedia.org/wiki/Archaeology',
  placement: 'overview',
  required: true,
  whyThisMatters: 'Use this as an orientation map for archaeological subfields, methods, and technical vocabulary.',
  fallback: 'Replace with a standard overview of archaeological method.'
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-hist-archaeology-youtube-1'] = {
  id: 'media-hist-archaeology-youtube-1',
  type: 'youtube',
  title: 'How Does Radiocarbon Dating Work?',
  url: 'https://www.youtube.com/watch?v=phZeE7Att_s',
  youtubeId: 'phZeE7Att_s',
  embedUrl: 'https://www.youtube-nocookie.com/embed/phZeE7Att_s',
  placement: 'after-lesson',
  required: false,
  whyThisMatters: 'A compact review of dating logic before you compare methods and limits.',
  fallback: 'Replace with another concise dating-method explainer.'
};