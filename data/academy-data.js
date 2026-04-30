window.HUMAN_ACADEMY_DATA = {
  domains: [
    { id: 'humanities', hue: 'humanities', icon: 'book', name: 'Humanities', desc: 'Philosophy, history, literature, performing arts, communication, cultural interpretation, religion, law, and knowledge institutions.', tags: ['Philosophy', 'History', 'Literature', 'Performing Arts', 'Communication', 'Cultural Studies'], disciplines: 11, topics: 156 },
    { id: 'social', hue: 'social', icon: 'users', name: 'Social Sciences', desc: 'The study of human society across behavior, institutions, policy, cities, markets, language, and education.', tags: ['Psychology', 'Sociology', 'Economics', 'Political Science', 'Business', 'Urban Studies'], disciplines: 11, topics: 158 },
    { id: 'natural', hue: 'natural', icon: 'atom', name: 'Natural Sciences', desc: 'Physics, chemistry, biology, neuroscience, earth sciences, and astronomy - the laws and systems of the physical world.', tags: ['Physics', 'Chemistry', 'Biology', 'Neuroscience', 'Earth Sciences', 'Astronomy'], disciplines: 6, topics: 102 },
    { id: 'formal', hue: 'formal', icon: 'binary', name: 'Formal Sciences', desc: 'Logic, mathematics, computer science, and information systems - the abstract structures underlying all knowledge.', tags: ['Logic', 'Mathematics', 'Computer Science', 'Algorithms', 'Information Theory', 'Cryptography'], disciplines: 3, topics: 38 },
    { id: 'applied', hue: 'applied', icon: 'wrench', name: 'Applied Sciences', desc: 'Agriculture, engineering, medicine, environmental systems, nutrition, sport, emergency response, and forensic practice.', tags: ['Agriculture', 'Engineering', 'Medicine', 'Energy', 'Nutrition', 'Forensics'], disciplines: 11, topics: 152 },
    { id: 'crafts', hue: 'crafts', icon: 'hammer', name: 'Crafts, Trades & Practical Arts', desc: 'Metallurgy, woodworking, masonry, survival skills, and maritime practice - hands-on mastery.', tags: ['Metallurgy', 'Woodworking', 'Masonry', 'Survival', 'Maritime', 'Craft Practice'], disciplines: 5, topics: 46 },
    { id: 'interdisciplinary', hue: 'interdisciplinary', icon: 'sparkles', name: 'Interdisciplinary & Emerging', desc: 'Cognitive science, bioinformatics, systems theory, digital humanities, and applied ethics - where disciplines converge.', tags: ['Cognitive Science', 'Bioinformatics', 'Systems Theory', 'Applied Ethics', 'Digital Humanities'], disciplines: 5, topics: 78 }
  ],
  disciplinesByDomain: {
    humanities: [
      { id: 'philosophy', name: 'Philosophy', treeId: 'philosophy', hasTree: true },
      { id: 'history', name: 'History', treeId: 'history', hasTree: true },
      { id: 'literature', name: 'Literature', treeId: 'literature', hasTree: true },
      { id: 'visual-arts', name: 'Visual Arts', hasTree: false },
      { id: 'music', name: 'Music', hasTree: false },
      { id: 'performing-arts', name: 'Performing Arts', hasTree: false },
      { id: 'communication-studies', name: 'Communication Studies', hasTree: false },
      { id: 'cultural-gender-studies', name: 'Cultural & Gender Studies', hasTree: false },
      { id: 'library-information-science', name: 'Library & Information Science', hasTree: false },
      { id: 'religion', name: 'Religion & Theology', hasTree: false },
      { id: 'law', name: 'Law', hasTree: false }
    ],
    social: [
      { id: 'psychology', name: 'Psychology', hasTree: false },
      { id: 'sociology', name: 'Sociology', hasTree: false },
      { id: 'economics', name: 'Economics', hasTree: false },
      { id: 'political-science', name: 'Political Science', hasTree: false },
      { id: 'anthropology', name: 'Anthropology', hasTree: false },
      { id: 'linguistics', name: 'Linguistics', hasTree: false },
      { id: 'geography', name: 'Geography', hasTree: false },
      { id: 'education-studies', name: 'Education Studies', hasTree: false },
      { id: 'business-management', name: 'Business & Management', hasTree: false },
      { id: 'social-work-public-policy', name: 'Social Work & Public Policy', hasTree: false },
      { id: 'urban-studies', name: 'Urban Studies', hasTree: false }
    ],
    natural: [
      { id: 'physics', name: 'Physics', hasTree: false },
      { id: 'chemistry', name: 'Chemistry', hasTree: false },
      { id: 'biology', name: 'Biology', hasTree: false },
      { id: 'neuroscience', name: 'Neuroscience', hasTree: false },
      { id: 'earth-sciences', name: 'Earth Sciences', hasTree: false },
      { id: 'astronomy', name: 'Astronomy', hasTree: false }
    ],
    formal: [
      { id: 'logic', name: 'Logic', hasTree: false },
      { id: 'mathematics', name: 'Mathematics', hasTree: false },
      { id: 'computer-science', name: 'Computer Science', hasTree: false }
    ],
    applied: [
      { id: 'agriculture', name: 'Agriculture', hasTree: false },
      { id: 'architecture', name: 'Architecture', hasTree: false },
      { id: 'engineering', name: 'Engineering', hasTree: false },
      { id: 'medicine', name: 'Medicine', hasTree: false },
      { id: 'education', name: 'Education', hasTree: false },
      { id: 'environmental', name: 'Environmental Science', hasTree: false },
      { id: 'energy-studies', name: 'Energy Studies', hasTree: false },
      { id: 'food-science-nutrition', name: 'Food Science & Nutrition', hasTree: false },
      { id: 'sports-science', name: 'Sports Science', hasTree: false },
      { id: 'disaster-science-emergency-management', name: 'Disaster Science & Emergency Management', hasTree: false },
      { id: 'forensic-sciences', name: 'Forensic Sciences', hasTree: false }
    ],
    crafts: [
      { id: 'metallurgy', name: 'Metallurgy', hasTree: false },
      { id: 'woodworking', name: 'Woodworking', hasTree: false },
      { id: 'masonry', name: 'Masonry', hasTree: false },
      { id: 'survival', name: 'Survival Skills', hasTree: false },
      { id: 'maritime', name: 'Maritime', hasTree: false }
    ],
    interdisciplinary: [
      { id: 'cognitive-science', name: 'Cognitive Science', hasTree: false },
      { id: 'bioinformatics-computational-biology', name: 'Bioinformatics & Computational Biology', hasTree: false },
      { id: 'information-theory-systems-complexity', name: 'Information Theory, Systems Theory & Complexity', hasTree: false },
      { id: 'applied-emerging-ethics', name: 'Applied & Emerging Ethics', hasTree: false },
      { id: 'digital-humanities-science-communication', name: 'Digital Humanities & Science Communication', hasTree: false }
    ]
  },
  roadmapTracks: [
    {
      id: 'humanities-core',
      kicker: 'Broad Foundation',
      title: 'Humanities Core',
      description: 'Start with argument, context, and interpretation. This is the broadest first path for learners who want a strong intellectual base before specializing.',
      audience: 'Best for first-time learners',
      stages: [
        { id: 'humanities-core-philosophical-foundations', disciplineId: 'philosophy', title: 'Philosophical Foundations', description: 'Build method, logic, and the core questions that structure later study.', nodeIds: ['phil-foundations', 'phil-logic', 'phil-epistemology', 'phil-ethics'] },
        { id: 'humanities-core-historical-orientation', disciplineId: 'history', title: 'Historical Orientation', description: 'Anchor abstract ideas in human events, periods, empires, and causation.', nodeIds: ['hist-methods', 'hist-prehistory', 'hist-greece', 'hist-rome', 'hist-world-wars', 'hist-contemporary'] },
        { id: 'humanities-core-texts-and-interpretation', disciplineId: 'literature', title: 'Texts and Interpretation', description: 'Train close reading and literary analysis so learners can handle primary sources and complex writing.', nodeIds: ['lit-reading', 'lit-rhetoric', 'lit-theory-intro', 'lit-shakespeare', 'lit-modernism'] },
        { id: 'humanities-core-religion-and-theology', disciplineId: 'religion', title: 'Religion and Theology', description: 'Add comparative traditions, sacred texts, and doctrinal frameworks once the humanities base is stable.' },
        { id: 'humanities-core-law-and-institutions', disciplineId: 'law', title: 'Law and Institutions', description: 'Finish with legal systems, rights, and institutions so the learner can reason about applied human systems.' }
      ]
    },
    {
      id: 'ideas-analysis',
      kicker: 'Analytical Route',
      title: 'Ideas, Arguments, and Inquiry',
      description: 'A tighter route for learners who want to reason well, read critically, and move quickly into advanced conceptual work.',
      audience: 'Best for researchers and debaters',
      stages: [
        { id: 'ideas-analysis-argument-and-logic', disciplineId: 'philosophy', title: 'Argument and Logic', description: 'Focus on the machinery of reasoning before tackling broader schools and periods.', nodeIds: ['phil-foundations', 'phil-logic', 'phil-language', 'phil-science', 'phil-formal'] },
        { id: 'ideas-analysis-historiography-and-methods', disciplineId: 'history', title: 'Historiography and Methods', description: 'Learn how evidence, narrative, and interpretation shape every serious field.', nodeIds: ['hist-methods', 'hist-historiography', 'hist-archaeology'] },
        { id: 'ideas-analysis-theory-and-critical-reading', disciplineId: 'literature', title: 'Theory and Critical Reading', description: 'Use rhetoric and theory to sharpen interpretation across philosophy, politics, and culture.', nodeIds: ['lit-reading', 'lit-rhetoric', 'lit-theory-intro', 'lit-theory-advanced'] },
        { id: 'ideas-analysis-language-and-meaning', disciplineId: 'linguistics', title: 'Language and Meaning', description: 'Extend the path into semantics, pragmatics, and language structure once the discipline tree is ready.' }
      ]
    },
    {
      id: 'formal-mathematical-foundations',
      kicker: 'Formal Route',
      title: 'Formal, Mathematical, and Computational Foundations',
      description: 'Start from proof and formal reasoning, move through mathematical structure, and then connect those abstractions to computation and complex information systems.',
      audience: 'Best for abstract, technical, and systems-oriented learners',
      stages: [
        { id: 'formal-mathematical-foundations-logical-method', disciplineId: 'logic', title: 'Logical Method and Proof', description: 'Begin with validity, proof systems, semantics, and the limits of formal reasoning.', nodeIds: ['logic-overview', 'logic-strand-1', 'logic-topic-1-2', 'logic-strand-2', 'logic-topic-2-3'] },
        { id: 'formal-mathematical-foundations-mathematical-structure', disciplineId: 'mathematics', title: 'Mathematical Structure and Abstraction', description: 'Work through algebra, analysis, geometry, topology, number theory, and combinatorial structure as the shared language of the formal sciences.', nodeIds: ['mathematics-overview', 'mathematics-strand-2', 'mathematics-strand-3', 'mathematics-strand-4', 'mathematics-strand-6'] },
        { id: 'formal-mathematical-foundations-computation', disciplineId: 'computer-science', title: 'Computation and Algorithmic Systems', description: 'Translate formal structure into algorithms, data structures, language theory, and machine intelligence.', nodeIds: ['computer-science-overview', 'computer-science-strand-1', 'computer-science-topic-1-4', 'computer-science-strand-3', 'computer-science-topic-3-4'] },
        { id: 'formal-mathematical-foundations-information-and-complexity', disciplineId: 'information-theory-systems-complexity', title: 'Information, Complexity, and Emergence', description: 'Finish with coding, control, networks, and complex adaptive systems that connect mathematics to real computational and scientific systems.', nodeIds: ['information-theory-systems-complexity-overview', 'information-theory-systems-complexity-strand-1', 'information-theory-systems-complexity-topic-1-4', 'information-theory-systems-complexity-strand-3', 'information-theory-systems-complexity-topic-3-4'] }
      ]
    },
    {
      id: 'civilization-power',
      kicker: 'Society Route',
      title: 'Civilization, Power, and Culture',
      description: 'Trace how beliefs, institutions, and texts shape civilizations, conflicts, and social life across time.',
      audience: 'Best for political and cultural learners',
      stages: [
        { id: 'civilization-power-civilizations-through-time', disciplineId: 'history', title: 'Civilizations Through Time', description: 'Move from ancient societies to modern conflict so the learner understands long-term structural change.', nodeIds: ['hist-prehistory', 'hist-mesopotamia', 'hist-greece', 'hist-rome', 'hist-enlightenment', 'hist-cold-war', 'hist-contemporary'] },
        { id: 'civilization-power-power-justice-social-order', disciplineId: 'philosophy', title: 'Power, Justice, and Social Order', description: 'Layer political philosophy and social theory onto the historical base.', nodeIds: ['phil-ethics', 'phil-political', 'phil-social-ontology', 'phil-race-gender', 'phil-global'] },
        { id: 'civilization-power-culture-empire-response', disciplineId: 'literature', title: 'Culture, Empire, and Response', description: 'Study literary movements that respond to empire, modernity, and social transformation.', nodeIds: ['lit-medieval', 'lit-modernism', 'lit-postcolonial', 'lit-comparative'] },
        { id: 'civilization-power-political-systems', disciplineId: 'political-science', title: 'Political Systems', description: 'Expand into institutions, ideologies, and state power once the social science trees are implemented.' },
        { id: 'civilization-power-media-and-persuasion', disciplineId: 'communication-studies', title: 'Media and Persuasion', description: 'Finish with rhetoric, media, and propaganda as the culture-and-power route expands into communication systems.' }
      ]
    },
    {
      id: 'knowledge-media-systems',
      kicker: 'Knowledge Route',
      title: 'Media, Knowledge, and Public Culture',
      description: 'Follow how rhetoric, archives, identity, and public communication shape what societies can know and share.',
      audience: 'Best for culture, media, and knowledge-system learners',
      stages: [
        { id: 'knowledge-media-systems-rhetoric-and-publics', disciplineId: 'communication-studies', title: 'Rhetoric and Networked Publics', description: 'Start with persuasion, journalism, digital platforms, and the structure of public communication.', nodeIds: ['communication-studies-overview', 'communication-studies-strand-1', 'communication-studies-topic-1-1', 'communication-studies-strand-4', 'communication-studies-topic-4-3'] },
        { id: 'knowledge-media-systems-culture-identity-power', disciplineId: 'cultural-gender-studies', title: 'Culture, Identity, and Power', description: 'Extend into hegemony, feminism, race, disability, and the institutions that organize cultural life.', nodeIds: ['cultural-gender-studies-overview', 'cultural-gender-studies-strand-1', 'cultural-gender-studies-topic-1-1', 'cultural-gender-studies-strand-3', 'cultural-gender-studies-topic-3-4'] },
        { id: 'knowledge-media-systems-digital-public-humanities', disciplineId: 'digital-humanities-science-communication', title: 'Digital Public Humanities', description: 'Connect archives, computational humanities, and science communication to public knowledge work.', nodeIds: ['digital-humanities-science-communication-overview', 'digital-humanities-science-communication-strand-1', 'digital-humanities-science-communication-topic-1-1', 'digital-humanities-science-communication-strand-3', 'digital-humanities-science-communication-topic-3-3'] },
        { id: 'knowledge-media-systems-archives-and-access', disciplineId: 'library-information-science', title: 'Archives, Retrieval, and Access', description: 'Finish with the catalogs, repositories, retrieval systems, and ethics that govern long-term knowledge access.', nodeIds: ['library-information-science-overview', 'library-information-science-strand-1', 'library-information-science-topic-1-4', 'library-information-science-strand-4', 'library-information-science-topic-4-4'] }
      ]
    },
    {
      id: 'mind-brain-computation',
      kicker: 'Research Route',
      title: 'Mind, Brain, and Computational Life',
      description: 'Move from cognition into neuroscience, biological data systems, and the theories of information that organize complex inquiry.',
      audience: 'Best for cognitive and computational learners',
      stages: [
        { id: 'mind-brain-computation-cognitive-frames', disciplineId: 'cognitive-science', title: 'Cognitive Frames', description: 'Begin with mind, perception, language, and computational models of cognition.', nodeIds: ['cognitive-science-overview', 'cognitive-science-strand-1', 'cognitive-science-topic-1-2', 'cognitive-science-strand-4', 'cognitive-science-topic-4-3'] },
        { id: 'mind-brain-computation-neural-systems', disciplineId: 'neuroscience', title: 'Neural Systems and Brain Function', description: 'Add cellular, systems, cognitive, and clinical neuroscience as the biological substrate of mind.', nodeIds: ['neuroscience-overview', 'neuroscience-strand-1', 'neuroscience-topic-1-3', 'neuroscience-strand-3', 'neuroscience-topic-3-4'] },
        { id: 'mind-brain-computation-biological-data', disciplineId: 'bioinformatics-computational-biology', title: 'Biological Data and Inference', description: 'Work through sequence analysis, omics, structural biology, and translational bioinformatics.', nodeIds: ['bioinformatics-computational-biology-overview', 'bioinformatics-computational-biology-strand-1', 'bioinformatics-computational-biology-topic-1-3', 'bioinformatics-computational-biology-strand-2', 'bioinformatics-computational-biology-topic-2-4'] },
        { id: 'mind-brain-computation-information-systems', disciplineId: 'information-theory-systems-complexity', title: 'Information, Systems, and Complexity', description: 'Finish with entropy, cybernetics, networks, simulation, and the formal study of complex adaptive systems.', nodeIds: ['information-theory-systems-complexity-overview', 'information-theory-systems-complexity-strand-1', 'information-theory-systems-complexity-topic-1-4', 'information-theory-systems-complexity-strand-3', 'information-theory-systems-complexity-topic-3-4'] }
      ]
    },
    {
      id: 'infrastructure-risk-systems',
      kicker: 'Applied Route',
      title: 'Infrastructure, Energy, and Risk',
      description: 'Study the systems that power cities, move goods, manage hazards, and hold together under stress.',
      audience: 'Best for infrastructure and policy learners',
      stages: [
        { id: 'infrastructure-risk-systems-energy-transition', disciplineId: 'energy-studies', title: 'Energy Transition Systems', description: 'Start with thermodynamics, power systems, fuels, and the politics of energy transition.', nodeIds: ['energy-studies-overview', 'energy-studies-strand-1', 'energy-studies-topic-1-4', 'energy-studies-strand-2', 'energy-studies-topic-2-4'] },
        { id: 'infrastructure-risk-systems-urban-infrastructure', disciplineId: 'urban-studies', title: 'Urban Infrastructure and Spatial Justice', description: 'Move into housing, transit, utilities, and governance across metropolitan systems.', nodeIds: ['urban-studies-overview', 'urban-studies-strand-2', 'urban-studies-topic-2-2', 'urban-studies-strand-3', 'urban-studies-topic-3-4'] },
        { id: 'infrastructure-risk-systems-disaster-governance', disciplineId: 'disaster-science-emergency-management', title: 'Disaster Governance and Resilience', description: 'Add hazard analysis, emergency operations, recovery, and crisis communication.', nodeIds: ['disaster-science-emergency-management-overview', 'disaster-science-emergency-management-strand-1', 'disaster-science-emergency-management-topic-1-4', 'disaster-science-emergency-management-strand-4', 'disaster-science-emergency-management-topic-4-2'] },
        { id: 'infrastructure-risk-systems-maritime-networks', disciplineId: 'maritime', title: 'Maritime Networks and Ocean Systems', description: 'Finish with navigation, shipping, marine engineering, and the sea-based systems that connect global infrastructure.', nodeIds: ['maritime-overview', 'maritime-strand-1', 'maritime-topic-1-3', 'maritime-strand-3', 'maritime-topic-3-4'] }
      ]
    },
    {
      id: 'health-performance-evidence',
      kicker: 'Practice Route',
      title: 'Health, Performance, and Evidence',
      description: 'Follow how nutrition, sport, ethics, and forensic evidence translate science into high-stakes real-world decisions.',
      audience: 'Best for applied health and evidence learners',
      stages: [
        { id: 'health-performance-evidence-food-systems', disciplineId: 'food-science-nutrition', title: 'Food Systems and Human Nutrition', description: 'Begin with food chemistry, microbiology, metabolism, and public nutrition systems.', nodeIds: ['food-science-nutrition-overview', 'food-science-nutrition-strand-1', 'food-science-nutrition-topic-1-4', 'food-science-nutrition-strand-3', 'food-science-nutrition-topic-3-4'] },
        { id: 'health-performance-evidence-human-performance', disciplineId: 'sports-science', title: 'Human Performance and Recovery', description: 'Build from physiology and biomechanics into training design, recovery, and performance analytics.', nodeIds: ['sports-science-overview', 'sports-science-strand-1', 'sports-science-topic-1-2', 'sports-science-strand-3', 'sports-science-topic-3-4'] },
        { id: 'health-performance-evidence-applied-ethics', disciplineId: 'applied-emerging-ethics', title: 'Applied Ethics and Public Accountability', description: 'Add the normative frameworks needed to evaluate health, technology, environment, and institutional responsibility.', nodeIds: ['applied-emerging-ethics-overview', 'applied-emerging-ethics-strand-1', 'applied-emerging-ethics-topic-1-4', 'applied-emerging-ethics-strand-4', 'applied-emerging-ethics-topic-4-4'] },
        { id: 'health-performance-evidence-forensic-proof', disciplineId: 'forensic-sciences', title: 'Forensic Evidence and Legal Proof', description: 'Finish with evidence handling, laboratory interpretation, validation, and expert testimony.', nodeIds: ['forensic-sciences-overview', 'forensic-sciences-strand-1', 'forensic-sciences-topic-1-3', 'forensic-sciences-strand-4', 'forensic-sciences-topic-4-4'] }
      ]
    },
    {
      id: 'governance-markets-public-life',
      kicker: 'Institution Route',
      title: 'Governance, Markets, and Public Life',
      description: 'Study how states, markets, firms, and welfare systems organize power, resources, and collective life.',
      audience: 'Best for institutional and policy learners',
      stages: [
        { id: 'governance-markets-public-life-political-order', disciplineId: 'political-science', title: 'Political Order and Power', description: 'Begin with political theory, comparative institutions, international order, and public administration.', nodeIds: ['political-science-overview', 'political-science-strand-1', 'political-science-topic-1-4', 'political-science-strand-4', 'political-science-topic-4-4'] },
        { id: 'governance-markets-public-life-economic-systems', disciplineId: 'economics', title: 'Economic Systems and Distribution', description: 'Add microeconomics, macroeconomics, economic history, and development under contemporary geopolitical pressure.', nodeIds: ['economics-overview', 'economics-strand-1', 'economics-topic-1-4', 'economics-strand-4', 'economics-topic-4-4'] },
        { id: 'governance-markets-public-life-firms-and-strategy', disciplineId: 'business-management', title: 'Firms, Strategy, and Governance', description: 'Move into organization design, finance, marketing, entrepreneurship, and the ethics of corporate power.', nodeIds: ['business-management-overview', 'business-management-strand-1', 'business-management-topic-1-4', 'business-management-strand-4', 'business-management-topic-4-4'] },
        { id: 'governance-markets-public-life-care-and-policy', disciplineId: 'social-work-public-policy', title: 'Care Systems and Public Policy', description: 'Finish with social work, welfare design, community care systems, and justice-centered policy implementation.', nodeIds: ['social-work-public-policy-overview', 'social-work-public-policy-strand-1', 'social-work-public-policy-topic-1-4', 'social-work-public-policy-strand-4', 'social-work-public-policy-topic-4-4'] }
      ]
    },
    {
      id: 'place-environment-learning',
      kicker: 'Systems Route',
      title: 'Place, Environment, and Learning Systems',
      description: 'Trace how landscapes, ecological systems, cities, and schools shape collective life across space and time.',
      audience: 'Best for spatial and civic-systems learners',
      stages: [
        { id: 'place-environment-learning-geographic-systems', disciplineId: 'geography', title: 'Geographic Systems and Spatial Thinking', description: 'Start with physical geography, human geography, spatial analysis, and environmental relationships.', nodeIds: ['geography-overview', 'geography-strand-1', 'geography-topic-1-4', 'geography-strand-4', 'geography-topic-4-4'] },
        { id: 'place-environment-learning-environmental-change', disciplineId: 'environmental', title: 'Environmental Change and Justice', description: 'Move into ecology, climate, conservation, sustainability, and environmental governance.', nodeIds: ['environmental-overview', 'environmental-strand-1', 'environmental-topic-1-4', 'environmental-strand-4', 'environmental-topic-4-4'] },
        { id: 'place-environment-learning-urban-systems', disciplineId: 'urban-studies', title: 'Urban Systems and Spatial Justice', description: 'Add metropolitan infrastructure, housing, mobility, and climate adaptation in lived urban space.', nodeIds: ['urban-studies-overview', 'urban-studies-strand-1', 'urban-studies-topic-1-4', 'urban-studies-strand-4', 'urban-studies-topic-4-4'] },
        { id: 'place-environment-learning-education-systems', disciplineId: 'education-studies', title: 'Education Systems and Public Learning', description: 'Finish with curriculum, pedagogy, school governance, and the institutions that reproduce or widen civic possibility.', nodeIds: ['education-studies-overview', 'education-studies-strand-1', 'education-studies-topic-1-4', 'education-studies-strand-4', 'education-studies-topic-4-4'] }
      ]
    }
  ]
};