window.HUMAN_ACADEMY_EXTERNAL_COURSES = window.HUMAN_ACADEMY_EXTERNAL_COURSES || {};

window.HUMAN_ACADEMY_EXTERNAL_COURSES['phil-logic'] = {
  id: 'course-phil-logic',
  title: 'Logic',
  nodeId: 'phil-logic',
  summary: 'Learn how valid reasoning works in natural language and formal systems.',
  estimatedTime: '4-6 hours',
  learningObjectives: [
    'Distinguish deductive, inductive, and abductive reasoning',
    'Identify common informal fallacies',
    'Read basic formal notation and truth-functional structure'
  ],
  canonicalSource: 'content/courses/philosophy/course-phil-logic.json',
  lessonIds: ['lesson-phil-logic-arguments', 'lesson-phil-logic-formal-systems'],
  quizIds: ['quiz-phil-logic-check-1'],
  testId: 'test-phil-logic-core',
  labIds: ['lab-phil-logic-argument-reconstruction'],
  projectIds: ['project-phil-logic-casebook'],
  mediaIds: ['media-phil-logic-wikipedia', 'media-phil-logic-youtube-1'],
  masteryCriteria: [
    'Pass the core logic test at 80 percent or above',
    'Complete the argument reconstruction lab',
    'Finish the logic casebook project'
  ]
};