window.HUMAN_ACADEMY_EXTERNAL_COURSES = window.HUMAN_ACADEMY_EXTERNAL_COURSES || {};

window.HUMAN_ACADEMY_EXTERNAL_COURSES['phil-foundations'] = {
  id: 'course-phil-foundations',
  title: 'Foundations and Method',
  nodeId: 'phil-foundations',
  summary: 'Build the core habits of philosophical study: reading arguments carefully, analyzing concepts, and using thought experiments with discipline.',
  estimatedTime: '4-5 hours',
  learningObjectives: [
    'Explain what distinguishes philosophical inquiry from neighboring disciplines',
    'Read arguments charitably and reconstruct them in premise-conclusion form',
    'Use conceptual analysis and thought experiments to test claims'
  ],
  canonicalSource: 'content/courses/philosophy/course-phil-foundations.json',
  lessonIds: ['lesson-phil-foundations-orientation', 'lesson-phil-foundations-methods'],
  quizIds: ['quiz-phil-foundations-check-1'],
  testId: 'test-phil-foundations-core',
  labIds: ['lab-phil-foundations-argument-map'],
  projectIds: ['project-phil-foundations-dialogue'],
  mediaIds: ['media-phil-foundations-wikipedia', 'media-phil-foundations-youtube-1'],
  masteryCriteria: [
    'Pass the foundations test at 80 percent or above',
    'Complete the argument mapping lab',
    'Finish the philosophical dialogue project'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_COURSES['phil-epistemology'] = {
  id: 'course-phil-epistemology',
  title: 'Epistemology',
  nodeId: 'phil-epistemology',
  summary: 'Study knowledge, justification, skepticism, and the social conditions that shape what counts as responsible belief.',
  estimatedTime: '5-7 hours',
  learningObjectives: [
    'Explain why the Gettier problem changed theories of knowledge',
    'Compare foundationalist, coherentist, reliabilist, and virtue-theoretic accounts of justification',
    'Connect individual inquiry to testimony, bias, and epistemic injustice'
  ],
  canonicalSource: 'content/courses/philosophy/course-phil-epistemology.json',
  lessonIds: ['lesson-phil-epistemology-knowledge', 'lesson-phil-epistemology-skepticism'],
  quizIds: ['quiz-phil-epistemology-check-1'],
  testId: 'test-phil-epistemology-core',
  labIds: ['lab-phil-epistemology-justification-audit'],
  projectIds: ['project-phil-epistemology-inquiry-journal'],
  mediaIds: ['media-phil-epistemology-wikipedia', 'media-phil-epistemology-youtube-1'],
  masteryCriteria: [
    'Pass the epistemology core test at 80 percent or above',
    'Complete the justification audit lab',
    'Finish the inquiry journal project'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_COURSES['phil-ethics'] = {
  id: 'course-phil-ethics',
  title: 'Ethics and Moral Philosophy',
  nodeId: 'phil-ethics',
  summary: 'Move from metaethical foundations into deontology, consequentialism, virtue ethics, and applied moral reasoning in public life.',
  estimatedTime: '5-7 hours',
  learningObjectives: [
    'Distinguish metaethical debates from normative ethical theories',
    'Compare deontological, consequentialist, and virtue-ethical reasoning',
    'Apply ethical frameworks to contemporary cases without reducing them to slogans'
  ],
  canonicalSource: 'content/courses/philosophy/course-phil-ethics.json',
  lessonIds: ['lesson-phil-ethics-frameworks', 'lesson-phil-ethics-applied'],
  quizIds: ['quiz-phil-ethics-check-1'],
  testId: 'test-phil-ethics-core',
  labIds: ['lab-phil-ethics-case-analysis'],
  projectIds: ['project-phil-ethics-position-paper'],
  mediaIds: ['media-phil-ethics-wikipedia', 'media-phil-ethics-youtube-1'],
  masteryCriteria: [
    'Pass the ethics core test at 80 percent or above',
    'Complete the case analysis lab',
    'Finish the ethical position paper project'
  ]
};