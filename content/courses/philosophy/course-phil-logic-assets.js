window.HUMAN_ACADEMY_EXTERNAL_LESSONS = window.HUMAN_ACADEMY_EXTERNAL_LESSONS || {};
window.HUMAN_ACADEMY_EXTERNAL_QUIZZES = window.HUMAN_ACADEMY_EXTERNAL_QUIZZES || {};
window.HUMAN_ACADEMY_EXTERNAL_TESTS = window.HUMAN_ACADEMY_EXTERNAL_TESTS || {};
window.HUMAN_ACADEMY_EXTERNAL_LABS = window.HUMAN_ACADEMY_EXTERNAL_LABS || {};
window.HUMAN_ACADEMY_EXTERNAL_PROJECTS = window.HUMAN_ACADEMY_EXTERNAL_PROJECTS || {};
window.HUMAN_ACADEMY_EXTERNAL_MEDIA = window.HUMAN_ACADEMY_EXTERNAL_MEDIA || {};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-phil-logic-arguments'] = {
  id: 'lesson-phil-logic-arguments',
  title: 'Arguments, Validity, and Informal Fallacies',
  summary: 'Start with the basic anatomy of arguments, then learn how validity differs from truth and how informal fallacies distort reasoning in ordinary language.',
  learningObjectives: [
    'Separate premises, conclusions, and background assumptions',
    'Explain the difference between validity and soundness',
    'Recognize common informal fallacies in real arguments'
  ],
  keyTerms: [
    'Argument',
    'Premise',
    'Conclusion',
    'Validity',
    'Soundness',
    'Ad hominem',
    'Straw man'
  ],
  guidedNotes: [
    'Write one argument you heard this week and identify its premises and conclusion.',
    'Explain why a valid argument can still have a false conclusion if one premise is false.',
    'Record one example of a persuasive argument that is not logically sound.'
  ],
  activities: [
    'Translate a newspaper claim into premise-conclusion form.',
    'Label three short examples as deductive, inductive, or abductive reasoning.',
    'Find and rewrite one fallacious argument to make it logically stronger.'
  ],
  readings: [
    { title: 'Logic: The Laws of Truth', author: 'Nicholas J.J. Smith', year: 2012 },
    { title: 'Language, Proof and Logic', author: 'Jon Barwise and John Etchemendy', year: 2002 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LESSONS['lesson-phil-logic-formal-systems'] = {
  id: 'lesson-phil-logic-formal-systems',
  title: 'Formal Systems and the Limits of Proof',
  summary: 'Move from propositional and predicate logic into modal reasoning, then close with why completeness, incompleteness, and computability matter philosophically.',
  learningObjectives: [
    'Interpret basic truth-functional notation and quantifiers',
    'Describe how modal logic models necessity and possibility',
    'Summarize why Godel changed the philosophy of formal systems'
  ],
  keyTerms: [
    'Truth table',
    'Quantifier',
    'Predicate',
    'Necessity',
    'Possibility',
    'Completeness',
    'Incompleteness'
  ],
  guidedNotes: [
    'Write a short explanation of the difference between propositional and predicate logic.',
    'Note one example where modal reasoning is clearer than ordinary language.',
    'Summarize the philosophical importance of an undecidable statement in two sentences.'
  ],
  activities: [
    'Build a truth table for a simple conditional argument.',
    'Rewrite two natural-language statements using quantifiers.',
    'Compare a complete formal system with one limited by incompleteness.'
  ],
  readings: [
    { title: 'An Introduction to Non-Classical Logic', author: 'Graham Priest', year: 2008 },
    { title: 'Godel\'s Proof', author: 'Ernest Nagel and James R. Newman', year: 1958 }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_QUIZZES['quiz-phil-logic-check-1'] = {
  id: 'quiz-phil-logic-check-1',
  title: 'Logic Foundations Check',
  questions: [
    {
      q: 'What does the symbol → represent in propositional logic?',
      options: ['Conjunction (AND)', 'Disjunction (OR)', 'Material conditional (IF...THEN)', 'Biconditional (IF AND ONLY IF)'],
      answer: 2
    },
    {
      q: 'An ad hominem fallacy involves:',
      options: ['Attacking the person instead of their argument', 'Appealing to authority', 'Begging the question', 'Equivocation'],
      answer: 0
    },
    {
      q: 'A sound argument is one that is:',
      options: ['Persuasive to most people', 'Valid and has true premises', 'Difficult to refute rhetorically', 'Written in symbolic notation'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_TESTS['test-phil-logic-core'] = {
  id: 'test-phil-logic-core',
  title: 'Logic Core Test',
  summary: 'A cumulative check on argument structure, formal notation, and the philosophical stakes of logical systems.',
  passScore: 80,
  questions: [
    {
      q: 'Which statement best captures the difference between validity and soundness?',
      options: ['Validity concerns argument form; soundness requires validity plus true premises', 'Validity concerns only true conclusions; soundness concerns persuasive rhetoric', 'Validity and soundness mean the same thing', 'Soundness applies only to inductive arguments'],
      answer: 0
    },
    {
      q: 'In predicate logic, the symbol ∀ is used to express:',
      options: ['Existence', 'Identity', 'Universal quantification', 'Possibility'],
      answer: 2
    },
    {
      q: 'Gödel\'s incompleteness result is philosophically important because it shows that:',
      options: ['No formal reasoning is possible', 'Every true statement can be mechanically proven', 'Some truths outrun proof in sufficiently strong consistent systems', 'Mathematics depends only on psychology'],
      answer: 2
    },
    {
      q: 'Modal logic is chiefly concerned with reasoning about:',
      options: ['Only moral obligations', 'Necessity and possibility', 'Numerical equations', 'Historical causation'],
      answer: 1
    }
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_LABS['lab-phil-logic-argument-reconstruction'] = {
  id: 'lab-phil-logic-argument-reconstruction',
  title: 'Argument Reconstruction Lab',
  summary: 'Take a short editorial or debate clip, reconstruct its premises and conclusion, then evaluate whether the reasoning is valid, sound, or fallacious.',
  deliverable: 'A one-page argument map with a validity assessment and revision notes',
  checklist: [
    'Choose a short real-world argument from an article, speech, or debate clip.',
    'Rewrite the argument as numbered premises and a conclusion.',
    'Identify whether the reasoning is deductive, inductive, or abductive.',
    'Evaluate whether the argument is valid, sound, or fallacious and explain why.',
    'Revise the argument into a stronger form and note what changed.'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_PROJECTS['project-phil-logic-casebook'] = {
  id: 'project-phil-logic-casebook',
  title: 'Logic Casebook Project',
  drivingQuestion: 'How can you use formal and informal logic to evaluate real public arguments instead of textbook examples?',
  scope: 'Build a short casebook that compares three real arguments from journalism, debate, or public speech.',
  requirements: [
    'Include one deductive argument, one inductive argument, and one abductive argument.',
    'Reconstruct each argument in premise-conclusion form.',
    'Identify at least one weakness, fallacy, or hidden assumption in each case.',
    'Revise each argument into a stronger version and explain the revision.'
  ],
  deliverables: [
    'A 3-5 page logic casebook or slide deck',
    'A short reflection on which form of reasoning was hardest to evaluate'
  ],
  milestones: [
    'Choose three arguments from credible public sources.',
    'Complete premise-conclusion reconstructions for all three.',
    'Write your validity, soundness, and fallacy analysis.',
    'Revise each argument and add your final reflection.'
  ],
  rubric: [
    'Accuracy of reconstruction',
    'Strength of logical analysis',
    'Quality of revisions',
    'Clarity of written explanation'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-phil-logic-wikipedia'] = {
  id: 'media-phil-logic-wikipedia',
  type: 'wikipedia',
  title: 'Wikipedia: Logic',
  url: 'https://en.wikipedia.org/wiki/Logic',
  placement: 'overview',
  required: true,
  whyThisMatters: 'Use this as a fast orientation map for branches of logic, major terminology, and linked subfields.',
  fallback: 'If the article changes or disappears, replace it with a standard reference overview of logic.'
};

window.HUMAN_ACADEMY_EXTERNAL_MEDIA['media-phil-logic-youtube-1'] = {
  id: 'media-phil-logic-youtube-1',
  type: 'youtube',
  title: 'Introduction to Formal Logic',
  url: 'https://www.youtube.com/watch?v=qV8QK5UQ2e8',
  youtubeId: 'qV8QK5UQ2e8',
  embedUrl: 'https://www.youtube-nocookie.com/embed/qV8QK5UQ2e8',
  placement: 'after-lesson',
  required: false,
  whyThisMatters: 'A compact walkthrough of formal logic vocabulary before the symbolic work starts.',
  fallback: 'If the video becomes unavailable, replace it with a short instructor-led notation walkthrough.'
};