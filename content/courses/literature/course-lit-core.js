window.HUMAN_ACADEMY_EXTERNAL_COURSES = window.HUMAN_ACADEMY_EXTERNAL_COURSES || {};

window.HUMAN_ACADEMY_EXTERNAL_COURSES['lit-reading'] = {
  id: 'course-lit-reading',
  title: 'How to Read Literature',
  nodeId: 'lit-reading',
  summary: 'Build the core habits of literary study: close reading, active annotation, genre awareness, and interpretive discipline across poems, stories, and plays.',
  estimatedTime: '4-6 hours',
  learningObjectives: [
    'Perform close reading on diction, imagery, tone, and structure',
    'Distinguish narrative, lyric, and dramatic modes of writing',
    'Use active reading strategies that support interpretation instead of passive summary'
  ],
  canonicalSource: 'content/courses/literature/course-lit-reading.json',
  lessonIds: ['lesson-lit-reading-close-reading', 'lesson-lit-reading-modes-and-strategies'],
  quizIds: ['quiz-lit-reading-check-1'],
  testId: 'test-lit-reading-core',
  labIds: ['lab-lit-reading-annotation'],
  projectIds: ['project-lit-reading-commonplace'],
  mediaIds: ['media-lit-reading-wikipedia', 'media-lit-reading-youtube-1'],
  masteryCriteria: [
    'Pass the literary reading test at 80 percent or above',
    'Complete the annotation lab',
    'Finish the commonplace book project'
  ]
};

window.HUMAN_ACADEMY_EXTERNAL_COURSES['lit-rhetoric'] = {
  id: 'course-lit-rhetoric',
  title: 'Rhetoric and Poetics',
  nodeId: 'lit-rhetoric',
  summary: 'Study persuasion, poetic form, figurative language, metre, and genre through the classical roots of literary analysis and verbal craft.',
  estimatedTime: '5-7 hours',
  learningObjectives: [
    'Explain classical rhetorical appeals and key concepts from poetics',
    'Recognize major figures of speech and poetic forms in context',
    'Use metre, prosody, and genre vocabulary precisely in literary analysis'
  ],
  canonicalSource: 'content/courses/literature/course-lit-rhetoric.json',
  lessonIds: ['lesson-lit-rhetoric-classical-foundations', 'lesson-lit-rhetoric-forms-and-figures'],
  quizIds: ['quiz-lit-rhetoric-check-1'],
  testId: 'test-lit-rhetoric-core',
  labIds: ['lab-lit-rhetoric-scansion'],
  projectIds: ['project-lit-rhetoric-analysis'],
  mediaIds: ['media-lit-rhetoric-wikipedia', 'media-lit-rhetoric-youtube-1'],
  masteryCriteria: [
    'Pass the rhetoric and poetics test at 80 percent or above',
    'Complete the scansion lab',
    'Finish the rhetoric analysis project'
  ]
};