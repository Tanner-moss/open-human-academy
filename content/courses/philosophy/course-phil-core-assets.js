window.HUMAN_ACADEMY_EXTERNAL_LESSONS = window.HUMAN_ACADEMY_EXTERNAL_LESSONS || {};
window.HUMAN_ACADEMY_EXTERNAL_QUIZZES = window.HUMAN_ACADEMY_EXTERNAL_QUIZZES || {};
window.HUMAN_ACADEMY_EXTERNAL_TESTS = window.HUMAN_ACADEMY_EXTERNAL_TESTS || {};
window.HUMAN_ACADEMY_EXTERNAL_LABS = window.HUMAN_ACADEMY_EXTERNAL_LABS || {};
window.HUMAN_ACADEMY_EXTERNAL_PROJECTS = window.HUMAN_ACADEMY_EXTERNAL_PROJECTS || {};
window.HUMAN_ACADEMY_EXTERNAL_MEDIA = window.HUMAN_ACADEMY_EXTERNAL_MEDIA || {};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-phil-foundations-orientation'] = {
  id: 'lesson-phil-foundations-orientation',
  title: 'What Philosophy Is For',
  summary: 'Orient yourself to philosophy as a disciplined practice of questioning, clarification, and argument rather than a grab bag of quotations or opinions.',
  learningObjectives: [
    'Define philosophy as a mode of inquiry rather than a single doctrine',
    'Identify the major branches of philosophy and the kinds of questions they ask',
    'Explain why philosophy depends on slow reading and careful distinctions'
  ],
  keyTerms: ['Metaphysics', 'Epistemology', 'Ethics', 'Logic', 'Aesthetics', 'Political philosophy'],
  guidedNotes: [
    'Write one question that feels philosophical rather than merely factual and explain why.',
    'List two branches of philosophy that overlap in a real-world debate you care about.',
    'Note one way philosophical inquiry demands patience or precision.'
  ],
  activities: [
    'Sort six sample questions into philosophical and non-philosophical categories, then defend your border cases.',
    'Rewrite a vague claim into a sharper philosophical question.',
    'Identify the background assumptions inside a short philosophical paragraph.'
  ],
  readings: [
    { title: 'Think: A Compelling Introduction to Philosophy', author: 'Simon Blackburn', year: 1999 },
    { title: 'The Problems of Philosophy', author: 'Bertrand Russell', year: 1912 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-phil-foundations-methods'] = {
  id: 'lesson-phil-foundations-methods',
  title: 'Conceptual Analysis, Charity, and Thought Experiments',
  summary: 'Learn the working tools of early philosophy study: reconstructing arguments, refining concepts, and testing claims by imaginative cases.',
  learningObjectives: [
    'Use the principle of charity when reconstructing an argument',
    'Distinguish necessary from sufficient conditions in conceptual analysis',
    'Explain the role and limits of thought experiments'
  ],
  keyTerms: ['Principle of charity', 'Necessary condition', 'Sufficient condition', 'Counterexample', 'Thought experiment'],
  guidedNotes: [
    'Take one disputed claim and restate it in its strongest plausible form.',
    'Write a concept and test its proposed definition with a counterexample.',
    'Describe one case where a thought experiment clarifies a problem and one where it may mislead.'
  ],
  activities: [
    'Reconstruct a short argument into numbered premises and a conclusion.',
    'Test a definition of knowledge, justice, or freedom with a difficult case.',
    'Compare a thought experiment to an empirical example and note what each reveals.'
  ],
  readings: [
    { title: 'Philosophy: The Basics', author: 'Nigel Warburton', year: 2012 },
    { title: 'A Rulebook for Arguments', author: 'Anthony Weston', year: 2018 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_QUIZZES['quiz-phil-foundations-check-1'] = {
  id: 'quiz-phil-foundations-check-1',
  title: 'Foundations and Method Check',
  questions: [
    {
      q: 'The principle of charity asks you to:',
      options: ['Agree with every author you read', 'Interpret an argument in its strongest reasonable form', 'Ignore weak premises', 'Prefer moral arguments to logical ones'],
      answer: 1
    },
    {
      q: 'Conceptual analysis often focuses on:',
      options: ['Necessary and sufficient conditions', 'Historical dates only', 'Laboratory experiments', 'Poetic style'],
      answer: 0
    },
    {
      q: 'A thought experiment is most useful when it:',
      options: ['Provides statistical proof', 'Tests intuitions and clarifies implications of a claim', 'Replaces all evidence', 'Avoids hard cases'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_TESTS['test-phil-foundations-core'] = {
  id: 'test-phil-foundations-core',
  title: 'Foundations Core Test',
  summary: 'A cumulative test on philosophical inquiry, reading method, conceptual analysis, and thought experiments.',
  passScore: 80,
  questions: [
    {
      q: 'Which answer best describes philosophy as taught in this course?',
      options: ['A list of famous opinions', 'A discipline of argument, clarification, and reflective questioning', 'A branch of laboratory science', 'A method for memorizing quotations'],
      answer: 1
    },
    {
      q: 'A necessary condition is:',
      options: ['Something that guarantees a result by itself', 'Something without which the target cannot obtain', 'A historical influence', 'Any helpful but optional feature'],
      answer: 1
    },
    {
      q: 'Why use the principle of charity?',
      options: ['To avoid criticism entirely', 'To test the best version of an argument rather than a weak caricature', 'To make every argument valid', 'To replace close reading with intuition'],
      answer: 1
    },
    {
      q: 'The main value of a thought experiment is that it:',
      options: ['Settles every dispute conclusively', 'Lets you isolate assumptions and inspect implications', 'Eliminates the need for concepts', 'Works only in ethics'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LABS['lab-phil-foundations-argument-map'] = {
  id: 'lab-phil-foundations-argument-map',
  title: 'Argument Mapping Lab',
  summary: 'Choose a short philosophical passage and turn it into a clean premise-conclusion map with objections and revisions.',
  deliverable: 'A one-page argument map with a charitable reconstruction and one counterexample',
  checklist: [
    'Choose a short passage from a philosophical essay, dialogue, or lecture.',
    'Rewrite the passage as numbered premises and a conclusion.',
    'Identify one hidden assumption and explain why it matters.',
    'Add one objection or counterexample.',
    'Revise the argument into a stronger version.'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_PROJECTS['project-phil-foundations-dialogue'] = {
  id: 'project-phil-foundations-dialogue',
  title: 'Philosophical Dialogue Project',
  drivingQuestion: 'How do philosophical questions become clearer when two positions test one another directly?',
  scope: 'Write a short dialogue between two positions on a basic philosophical question such as knowledge, freedom, justice, or personal identity.',
  requirements: [
    'Present two clearly different positions on the same question.',
    'Give each position one strong argument and one objection.',
    'Use charity rather than caricature when presenting disagreement.',
    'Conclude with what remains unresolved and why.'
  ],
  deliverables: ['A 2-4 page dialogue', 'A brief author note on what the dialogue clarified'],
  milestones: [
    'Choose the question and define the two positions.',
    'Draft the strongest argument for each side.',
    'Add objections and revisions.',
    'Write the concluding reflection.'
  ],
  rubric: ['Fairness to opposing views', 'Clarity of argument structure', 'Quality of objections', 'Strength of reflection']
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-phil-foundations-wikipedia'] = {
  id: 'media-phil-foundations-wikipedia',
  type: 'wikipedia',
  title: 'Wikipedia: Philosophy',
  url: 'https://en.wikipedia.org/wiki/Philosophy',
  placement: 'overview',
  required: true,
  whyThisMatters: 'Use this as an orientation map for major branches, methods, and historical scope before diving into specialized debates.',
  fallback: 'Replace with a standard encyclopedia overview of philosophy if needed.'
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-phil-foundations-youtube-1'] = {
  id: 'media-phil-foundations-youtube-1',
  type: 'youtube',
  title: 'What Is Philosophy?',
  url: 'https://www.youtube.com/watch?v=1A_CAkYt3GY',
  youtubeId: '1A_CAkYt3GY',
  embedUrl: 'https://www.youtube-nocookie.com/embed/1A_CAkYt3GY',
  placement: 'after-lesson',
  required: false,
  whyThisMatters: 'A quick orientation that frames philosophy as disciplined inquiry rather than decorative opinion.',
  fallback: 'Swap in another short survey introduction to philosophy.'
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-phil-epistemology-knowledge'] = {
  id: 'lesson-phil-epistemology-knowledge',
  title: 'Knowledge, Justification, and Gettier',
  summary: 'Study the classical justified-true-belief model, why Gettier cases disrupted it, and the major responses that followed.',
  learningObjectives: [
    'Explain the justified true belief model of knowledge',
    'Describe why Gettier cases are problematic',
    'Compare rival responses such as reliabilism and virtue epistemology'
  ],
  keyTerms: ['Justified true belief', 'Gettier case', 'Reliabilism', 'Virtue epistemology', 'Defeasibility'],
  guidedNotes: [
    'Write the three parts of the traditional JTB model in your own words.',
    'Explain why a Gettier case looks like knowledge at first but fails on reflection.',
    'Note which response to Gettier seems strongest to you and why.'
  ],
  activities: [
    'Create one everyday example of justified true belief that still fails to count as knowledge.',
    'Compare a reliabilist answer to a virtue-theoretic answer.',
    'Rewrite a Gettier case to show exactly where luck enters.'
  ],
  readings: [
    { title: 'Epistemology: A Contemporary Introduction', author: 'Robert Audi', year: 2010 },
    { title: 'Knowledge and Its Limits', author: 'Timothy Williamson', year: 2000 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-phil-epistemology-skepticism'] = {
  id: 'lesson-phil-epistemology-skepticism',
  title: 'Skepticism, Testimony, and Social Epistemology',
  summary: 'Move from classic skeptical pressure to the social conditions of inquiry, including testimony, credibility, and epistemic injustice.',
  learningObjectives: [
    'Describe major skeptical challenges to knowledge claims',
    'Explain why testimony is central to ordinary knowing',
    'Connect prejudice and social power to epistemic failure'
  ],
  keyTerms: ['Skepticism', 'Brain in a vat', 'Testimony', 'Contextualism', 'Epistemic injustice'],
  guidedNotes: [
    'Summarize one skeptical challenge in two sentences.',
    'List three things you know primarily through testimony.',
    'Describe how social bias can distort who is heard as a credible knower.'
  ],
  activities: [
    'Compare a Moorean response to a contextualist response to skepticism.',
    'Audit a news source for how it establishes credibility.',
    'Identify a case where testimony is necessary but still vulnerable to bias.'
  ],
  readings: [
    { title: 'Epistemic Injustice', author: 'Miranda Fricker', year: 2007 },
    { title: 'Problems of Knowledge', author: 'Michael Williams', year: 2001 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_QUIZZES['quiz-phil-epistemology-check-1'] = {
  id: 'quiz-phil-epistemology-check-1',
  title: 'Epistemology Foundations Check',
  questions: [
    {
      q: 'The Gettier problem challenges knowledge as:',
      options: ['Moral virtue', 'Justified true belief', 'Reliable testimony', 'Empirical certainty'],
      answer: 1
    },
    {
      q: 'A skeptical scenario such as a brain in a vat is meant to test:',
      options: ['Memory speed', 'Whether our beliefs can be justified against radical doubt', 'Only scientific knowledge', 'Moral realism'],
      answer: 1
    },
    {
      q: 'Testimonial injustice occurs when:',
      options: ['A witness lies deliberately', 'A speaker receives a credibility deficit because of prejudice', 'A theory is falsified', 'Evidence is abundant'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_TESTS['test-phil-epistemology-core'] = {
  id: 'test-phil-epistemology-core',
  title: 'Epistemology Core Test',
  summary: 'A cumulative check on knowledge, justification, skepticism, and social epistemology.',
  passScore: 80,
  questions: [
    {
      q: 'Why are Gettier cases philosophically important?',
      options: ['They prove skepticism is correct', 'They show justified true belief can still fall short of knowledge', 'They eliminate the need for justification', 'They concern only testimony'],
      answer: 1
    },
    {
      q: 'Foundationalism claims that justification ultimately rests on:',
      options: ['An infinite regress of reasons', 'Basic beliefs', 'Social consensus alone', 'Pure skepticism'],
      answer: 1
    },
    {
      q: 'Which topic belongs to social epistemology?',
      options: ['Quantifier rules', 'Testimony and epistemic injustice', 'Possible worlds semantics', 'Formal proof theory'],
      answer: 1
    },
    {
      q: 'A contextualist response to skepticism argues that:',
      options: ['Knowledge claims never vary by context', 'Standards for claiming knowledge shift with conversational context', 'No testimony is trustworthy', 'Only mathematics survives skepticism'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LABS['lab-phil-epistemology-justification-audit'] = {
  id: 'lab-phil-epistemology-justification-audit',
  title: 'Justification Audit Lab',
  summary: 'Take one public claim and evaluate its evidence, source credibility, inferential structure, and exposure to bias or epistemic injustice.',
  deliverable: 'A one-page audit of a public claim with a justification verdict',
  checklist: [
    'Choose one public claim from journalism, policy, science communication, or social media.',
    'Identify its evidential basis and what would count against it.',
    'Evaluate the role of testimony and source credibility.',
    'Note any social factors that may distort uptake or trust.',
    'Write a final verdict: justified, under-justified, or unreliable.'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_PROJECTS['project-phil-epistemology-inquiry-journal'] = {
  id: 'project-phil-epistemology-inquiry-journal',
  title: 'Inquiry Journal Project',
  drivingQuestion: 'How do real people decide what to believe when evidence, testimony, and social trust do not line up neatly?',
  scope: 'Keep a short inquiry journal documenting how you evaluate belief claims across one week.',
  requirements: [
    'Track at least five claims you encountered through testimony, media, or direct observation.',
    'Classify the source of each claim and the reasons you had for believing or doubting it.',
    'Include one case where social context affected credibility assessment.',
    'Reflect on whether your own standards were consistent.'
  ],
  deliverables: ['A 3-5 page journal or structured slide deck', 'A final reflection on your theory of responsible belief'],
  milestones: [
    'Choose a format and tracking method.',
    'Collect five claims across the week.',
    'Analyze each using course concepts.',
    'Write the concluding reflection.'
  ],
  rubric: ['Depth of analysis', 'Use of epistemology concepts', 'Attention to testimony and bias', 'Quality of reflection']
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-phil-epistemology-wikipedia'] = {
  id: 'media-phil-epistemology-wikipedia',
  type: 'wikipedia',
  title: 'Wikipedia: Epistemology',
  url: 'https://en.wikipedia.org/wiki/Epistemology',
  placement: 'overview',
  required: true,
  whyThisMatters: 'Use this as a map of the main problems and schools before drilling into specific debates.',
  fallback: 'Replace with a standard encyclopedia article on epistemology.'
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-phil-epistemology-youtube-1'] = {
  id: 'media-phil-epistemology-youtube-1',
  type: 'youtube',
  title: 'The Gettier Problem Explained',
  url: 'https://www.youtube.com/watch?v=I0RrvnG9p7g',
  youtubeId: 'I0RrvnG9p7g',
  embedUrl: 'https://www.youtube-nocookie.com/embed/I0RrvnG9p7g',
  placement: 'after-lesson',
  required: false,
  whyThisMatters: 'A compact explanation of why JTB stopped being the end of the story.',
  fallback: 'Replace with another short Gettier explainer.'
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-phil-ethics-frameworks'] = {
  id: 'lesson-phil-ethics-frameworks',
  title: 'Metaethics and the Major Normative Frameworks',
  summary: 'Move from the status of moral claims into the major rival frameworks for evaluating action and character.',
  learningObjectives: [
    'Distinguish metaethics from normative ethics',
    'Compare deontological, consequentialist, and virtue-ethical reasoning',
    'Explain where each framework is strongest and where it strains'
  ],
  keyTerms: ['Moral realism', 'Anti-realism', 'Deontology', 'Consequentialism', 'Virtue ethics'],
  guidedNotes: [
    'Write one sentence separating metaethics from normative ethics.',
    'Name a case where deontology and consequentialism would likely diverge.',
    'Note one strength and one weakness of virtue ethics.'
  ],
  activities: [
    'Sort example claims into metaethical or normative questions.',
    'Apply three ethical frameworks to the same case.',
    'Write a short defense of the framework you find most compelling.'
  ],
  readings: [
    { title: 'Practical Ethics', author: 'Peter Singer', year: 1979 },
    { title: 'After Virtue', author: 'Alasdair MacIntyre', year: 1981 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-phil-ethics-applied'] = {
  id: 'lesson-phil-ethics-applied',
  title: 'Applied Ethics, Public Cases, and Moral Psychology',
  summary: 'Use ethical theories in biomedical, political, technological, and environmental cases while noticing how intuition and framing affect judgment.',
  learningObjectives: [
    'Apply ethical frameworks to concrete public cases',
    'Explain why trolley-style cases reveal tensions between principles',
    'Connect moral judgment to psychology without collapsing ethics into psychology'
  ],
  keyTerms: ['Applied ethics', 'Moral psychology', 'Trolley problem', 'Moral luck', 'Care ethics'],
  guidedNotes: [
    'Choose one public controversy and list how three frameworks would approach it.',
    'Describe what trolley cases illuminate and what they oversimplify.',
    'Note one place where moral judgment seems shaped by psychology or social framing.'
  ],
  activities: [
    'Analyze a biomedical, environmental, or technology ethics case.',
    'Compare principle-based reasoning to care-ethical reasoning.',
    'Revise your first moral judgment after considering an opposing framework.'
  ],
  readings: [
    { title: 'The Methods of Ethics', author: 'Henry Sidgwick', year: 1874 },
    { title: 'Justice: What\'s the Right Thing to Do?', author: 'Michael Sandel', year: 2009 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_QUIZZES['quiz-phil-ethics-check-1'] = {
  id: 'quiz-phil-ethics-check-1',
  title: 'Ethics Foundations Check',
  questions: [
    {
      q: 'Metaethics is primarily concerned with:',
      options: ['Which public policy is best', 'The status and meaning of moral claims', 'Only virtue cultivation', 'Historical ethics surveys'],
      answer: 1
    },
    {
      q: 'A deontological theory focuses most directly on:',
      options: ['Consequences alone', 'Duties, rules, and constraints', 'Aesthetic value', 'Scientific explanation'],
      answer: 1
    },
    {
      q: 'The trolley problem is useful because it highlights:',
      options: ['Transportation policy', 'Tensions between competing moral intuitions and principles', 'Only utilitarianism is correct', 'That ethics is empirical science'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_TESTS['test-phil-ethics-core'] = {
  id: 'test-phil-ethics-core',
  title: 'Ethics Core Test',
  summary: 'A cumulative check on metaethics, normative theories, applied ethics, and moral psychology.',
  passScore: 80,
  questions: [
    {
      q: 'Which option best captures the difference between metaethics and normative ethics?',
      options: ['Metaethics asks what moral claims are; normative ethics asks what we ought to do', 'They are identical', 'Normative ethics studies language only', 'Metaethics studies law only'],
      answer: 0
    },
    {
      q: 'Consequentialism evaluates actions mainly by:',
      options: ['The traits of the speaker', 'Their outcomes', 'Their legal status', 'Their popularity'],
      answer: 1
    },
    {
      q: 'Virtue ethics centers moral evaluation on:',
      options: ['Character and flourishing', 'Formal logic symbols', 'Historical chronology', 'Political institutions only'],
      answer: 0
    },
    {
      q: 'Moral psychology matters to ethics because it:',
      options: ['Replaces normativity completely', 'Shows how people actually judge and where bias or framing can distort those judgments', 'Makes all ethics subjective', 'Concerns only neuroscience'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LABS['lab-phil-ethics-case-analysis'] = {
  id: 'lab-phil-ethics-case-analysis',
  title: 'Ethics Case Analysis Lab',
  summary: 'Take one public case and compare how multiple ethical frameworks would assess it.',
  deliverable: 'A comparative ethics memo with at least three frameworks',
  checklist: [
    'Choose a real public case in technology, medicine, law, environment, or politics.',
    'State the key moral conflict in one paragraph.',
    'Analyze the case using deontology, consequentialism, and virtue ethics.',
    'Identify one point where the frameworks converge and one where they conflict.',
    'Write your final judgment and defend it.'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_PROJECTS['project-phil-ethics-position-paper'] = {
  id: 'project-phil-ethics-position-paper',
  title: 'Ethical Position Paper',
  drivingQuestion: 'What does responsible moral reasoning look like when a live public controversy resists easy answers?',
  scope: 'Write a position paper on a disputed ethical issue using multiple frameworks rather than one sloganized stance.',
  requirements: [
    'Choose one issue in applied ethics.',
    'Present at least two serious rival moral positions.',
    'Evaluate the issue through at least three ethical frameworks.',
    'Conclude with your own judgment and acknowledge what remains difficult.'
  ],
  deliverables: ['A 4-6 page paper or equivalent slide deck', 'A short reflection on where your own intuitions shifted'],
  milestones: [
    'Choose the issue and define the controversy.',
    'Research the main rival positions.',
    'Apply at least three frameworks.',
    'Draft the conclusion and reflective note.'
  ],
  rubric: ['Fairness to rival views', 'Use of ethical concepts', 'Analytical depth', 'Quality of judgment']
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-phil-ethics-wikipedia'] = {
  id: 'media-phil-ethics-wikipedia',
  type: 'wikipedia',
  title: 'Wikipedia: Ethics',
  url: 'https://en.wikipedia.org/wiki/Ethics',
  placement: 'overview',
  required: true,
  whyThisMatters: 'Use this as a quick map of metaethics, normative ethics, and applied branches before focusing on specific theories.',
  fallback: 'Replace with a standard overview reference on ethics.'
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-phil-ethics-youtube-1'] = {
  id: 'media-phil-ethics-youtube-1',
  type: 'youtube',
  title: 'Utilitarianism and Kantian Ethics',
  url: 'https://www.youtube.com/watch?v=-a739VjqdSI',
  youtubeId: '-a739VjqdSI',
  embedUrl: 'https://www.youtube-nocookie.com/embed/-a739VjqdSI',
  placement: 'after-lesson',
  required: false,
  whyThisMatters: 'A short comparative overview before you test the frameworks on real cases.',
  fallback: 'Replace with another concise introduction comparing deontology and consequentialism.'
};