(function() {
  var academyData = window.HUMAN_ACADEMY_DATA || { disciplinesByDomain: {}, roadmapTracks: [] };
  var mathematicsSourceContent = window.HUMAN_ACADEMY_MATHEMATICS_SOURCE_CONTENT || { strands: [], overview: null, strandCourses: {} };
  var anthropologySourceContent = window.HUMAN_ACADEMY_ANTHROPOLOGY_SOURCE_CONTENT || { strands: [], overview: null, strandCourses: {} };
  var linguisticsSourceContent = window.HUMAN_ACADEMY_LINGUISTICS_SOURCE_CONTENT || { strands: [], overview: null, strandCourses: {} };
  var psychologySourceContent = window.HUMAN_ACADEMY_PSYCHOLOGY_SOURCE_CONTENT || { strands: [], overview: null, strandCourses: {} };
  var playableContent = window.HUMAN_ACADEMY_PLAYABLE_CONTENT || {};
  var disciplineTrees = playableContent.disciplineTrees || {};
  var generatedDisciplineTrees = {};
  var disciplinesByDomain = academyData.disciplinesByDomain || {};
  var roadmapTracks = academyData.roadmapTracks || [];

  var courses = window.HUMAN_ACADEMY_EXTERNAL_COURSES = window.HUMAN_ACADEMY_EXTERNAL_COURSES || {};
  var lessons = window.HUMAN_ACADEMY_EXTERNAL_LESSONS = window.HUMAN_ACADEMY_EXTERNAL_LESSONS || {};
  var quizzes = window.HUMAN_ACADEMY_EXTERNAL_QUIZZES = window.HUMAN_ACADEMY_EXTERNAL_QUIZZES || {};
  var tests = window.HUMAN_ACADEMY_EXTERNAL_TESTS = window.HUMAN_ACADEMY_EXTERNAL_TESTS || {};
  var labs = window.HUMAN_ACADEMY_EXTERNAL_LABS = window.HUMAN_ACADEMY_EXTERNAL_LABS || {};
  var projects = window.HUMAN_ACADEMY_EXTERNAL_PROJECTS = window.HUMAN_ACADEMY_EXTERNAL_PROJECTS || {};
  var media = window.HUMAN_ACADEMY_EXTERNAL_MEDIA = window.HUMAN_ACADEMY_EXTERNAL_MEDIA || {};
  var curriculum = window.HUMAN_ACADEMY_CURRICULUM = window.HUMAN_ACADEMY_CURRICULUM || { surfaceMappings: [], knowledgeConcepts: [], knowledgeRelations: [] };
  var MAX_GENERATED_TOPIC_CLUSTERS = 4;

  var disciplineBlueprints = {
    philosophy: {
      displayName: 'Philosophy',
      summary: 'Systematic inquiry into reality, knowledge, value, and reasoning through conceptual analysis and argument.',
      strands: ['Metaphysics & Ontology', 'Epistemology & Logic', 'Ethics & Applied Philosophy', 'History of Philosophy']
    },
    history: {
      displayName: 'History',
      summary: 'Disciplined investigation of past human societies through sources, evidence, interpretation, and historical explanation.',
      strands: ['Ancient & Classical History', 'Medieval & Early Modern History', 'Modern & Contemporary History', 'Historiography & Philosophy of History']
    },
    literature: {
      displayName: 'Literature',
      summary: 'Close reading and interpretation of verbal art across poetry, prose, drama, and world literary traditions.',
      strands: ['Literary Theory & Criticism', 'Poetry & Lyric Forms', 'Narrative & Epic Traditions', 'Drama & Performance']
    },
    'visual-arts': {
      displayName: 'Visual Arts',
      summary: 'Study of visual expression through painting, sculpture, architecture, composition, and image-making traditions.',
      strands: ['Painting & Pictorial Arts', 'Sculpture & Three-Dimensional Form', 'Architecture & Spatial Design', 'History of Visual Representation']
    },
    music: {
      displayName: 'Music',
      summary: 'Study of organized sound through theory, history, performance, cognition, and world musical systems.',
      strands: ['Music Theory & Composition', 'Music History', 'Ethnomusicology & World Music Systems', 'Acoustics, Cognition & Perception']
    },
    'performing-arts': {
      displayName: 'Performing Arts',
      summary: 'Study of theater, dance, embodied performance, staging, and global traditions of live artistic expression.',
      strands: ['Theater & Dramaturgy', 'Dance & Movement', 'Performance Studies', 'Global Performance Traditions']
    },
    religion: {
      displayName: 'Religion & Theology',
      summary: 'Comparative study of sacred systems, traditions, scriptures, theology, ritual, and religious ethics.',
      strands: ['Theology & Scriptural Studies', 'History of Religious Traditions', 'Comparative Religion & Syncretism', 'Religion & Society']
    },
    law: {
      displayName: 'Law',
      summary: 'Study of legal systems, institutions, jurisprudence, rights, governance, and the relation between law and social order.',
      strands: ['Jurisprudence & Legal Theory', 'Constitutional & International Law', 'Criminal & Civil Law Systems', 'Law & Society']
    },
    psychology: {
      displayName: 'Psychology',
      summary: 'Scientific investigation of mind, brain, behavior, development, emotion, personality, disorder, culture, work, law, and public life across multiple levels of analysis.',
      strands: psychologySourceContent.strands && psychologySourceContent.strands.length
        ? psychologySourceContent.strands.slice()
        : ['Cognitive Psychology & Learning', 'Developmental Psychology', 'Clinical & Abnormal Psychology', 'Social Psychology & Behavior']
    },
    sociology: {
      displayName: 'Sociology',
      summary: 'Study of society, institutions, inequality, culture, socialization, and large-scale social change.',
      strands: ['Sociological Theory', 'Social Structure & Inequality', 'Culture & Values', 'Institutions & Organizations']
    },
    economics: {
      displayName: 'Economics',
      summary: 'Analysis of production, distribution, markets, growth, scarcity, institutions, and economic behavior.',
      strands: ['Microeconomics & Market Theory', 'Macroeconomics & Growth', 'History of Economic Thought', 'Development & International Economics']
    },
    'political-science': {
      displayName: 'Political Science',
      summary: 'Study of governance, power, institutions, ideology, state systems, policy, and political behavior.',
      strands: ['Political Theory & Philosophy', 'Comparative Government & Systems', 'International Relations & Diplomacy', 'Public Policy & Administration']
    },
    anthropology: {
      displayName: 'Anthropology',
      summary: 'Holistic study of humanity across culture, biology, language, material life, history, ethics, and contemporary worlds of power and change.',
      strands: anthropologySourceContent.strands && anthropologySourceContent.strands.length
        ? anthropologySourceContent.strands.slice()
        : ['Ethnography & Fieldwork', 'Kinship, Family & Social Organization', 'Religion, Ritual & Symbolism', 'Material Culture & Archaeology']
    },
    linguistics: {
      displayName: 'Linguistics',
      summary: 'Scientific study of language structure, meaning, use, acquisition, change, cognition, society, writing, modality, and computation across the world\'s languages.',
      strands: linguisticsSourceContent.strands && linguisticsSourceContent.strands.length
        ? linguisticsSourceContent.strands.slice()
        : ['Phonetics, Phonology & Sound Systems', 'Morphology & Syntax', 'Semantics & Pragmatics', 'Sociolinguistics & Language Variation']
    },
    geography: {
      displayName: 'Geography',
      summary: 'Study of places, spaces, physical systems, human settlements, and human-environment relationships.',
      strands: ['Physical Geography', 'Human Geography', 'Urban & Regional Studies', 'Environmental Geography & Sustainability']
    },
    'education-studies': {
      displayName: 'Education Studies',
      summary: 'Analysis of educational systems, policy, curriculum, pedagogy, access, and learning institutions.',
      strands: ['Philosophy & Theory of Education', 'Curriculum & Pedagogy', 'Educational Psychology & Development', 'School Systems & Policy']
    },
    physics: {
      displayName: 'Physics',
      summary: 'Study of matter, energy, force, motion, and the fundamental laws governing the universe.',
      strands: ['Classical Mechanics & Thermodynamics', 'Electromagnetism & Optics', 'Modern Physics', 'Particle Physics & Cosmology']
    },
    chemistry: {
      displayName: 'Chemistry',
      summary: 'Study of matter, reactions, atomic structure, molecular behavior, and material transformation.',
      strands: ['General & Inorganic Chemistry', 'Organic Chemistry & Synthesis', 'Physical Chemistry & Thermodynamics', 'Analytical Chemistry & Spectroscopy']
    },
    biology: {
      displayName: 'Biology',
      summary: 'Study of living systems from molecules to organisms, populations, ecosystems, and evolution.',
      strands: ['Cell Biology & Molecular Biology', 'Genetics & Evolution', 'Physiology & Anatomy', 'Ecology & Population Biology']
    },
    'earth-sciences': {
      displayName: 'Earth Sciences',
      summary: 'Study of Earth systems, rocks, minerals, tectonics, fossils, landforms, and deep time.',
      strands: ['Geology & Plate Tectonics', 'Mineralogy & Petrology', 'Paleontology & Stratigraphy', 'Geomorphology & Soil Science']
    },
    astronomy: {
      displayName: 'Astronomy',
      summary: 'Study of celestial objects, planetary systems, galaxies, cosmology, and the large-scale universe.',
      strands: ['Observational Astronomy', 'Star Formation & Stellar Evolution', 'Galactic Astronomy', 'Cosmology & Exoplanets']
    },
    mathematics: {
      displayName: 'Mathematics',
      summary: 'Study of abstract structures, proof, quantity, space, symmetry, and the formal patterns that organize reasoning across every science.',
      strands: mathematicsSourceContent.strands && mathematicsSourceContent.strands.length
        ? mathematicsSourceContent.strands.slice()
        : ['Algebra & Linear Algebra', 'Analysis & Calculus', 'Geometry & Topology', 'Number Theory & Combinatorics']
    },
    logic: {
      displayName: 'Logic',
      summary: 'Study of valid reasoning, formal systems, inference, semantics, and non-classical logical frameworks.',
      strands: ['Classical & Symbolic Logic', 'Formal Systems & Proof', 'Modal & Non-Classical Logics', 'Philosophical Logic & Semantics']
    },
    'computer-science': {
      displayName: 'Computer Science',
      summary: 'Study of computation, algorithms, data, programming systems, artificial intelligence, and information processing.',
      strands: ['Algorithms & Data Structures', 'Programming Language Theory', 'Artificial Intelligence & Machine Learning', 'Systems, Networks & Security']
    },
    agriculture: {
      displayName: 'Agriculture',
      summary: 'Study of food production, soils, crops, livestock, and sustainable agricultural systems.',
      strands: ['Crop Science & Plant Breeding', 'Soil Science & Management', 'Animal Science & Livestock', 'Sustainable & Agroecological Farming']
    },
    architecture: {
      displayName: 'Architecture',
      summary: 'Design of buildings and human environments through structure, materials, space, culture, and sustainability.',
      strands: ['Architectural History & Theory', 'Building Design & Materials', 'Urban Planning & Design', 'Sustainable Architecture']
    },
    engineering: {
      displayName: 'Engineering',
      summary: 'Application of science and mathematics to build structures, machines, systems, and useful processes.',
      strands: ['Civil Engineering & Infrastructure', 'Mechanical Engineering & Dynamics', 'Electrical & Electronic Engineering', 'Chemical & Environmental Engineering']
    },
    medicine: {
      displayName: 'Medicine',
      summary: 'Diagnosis, treatment, and prevention of disease through clinical reasoning, anatomy, physiology, and evidence-based care.',
      strands: ['Anatomy & Physiology', 'Pathology & Disease Mechanisms', 'Pharmacology & Therapeutics', 'Clinical Medicine & Public Health']
    },
    education: {
      displayName: 'Education',
      summary: 'Practical design of teaching, assessment, curriculum, and inclusive learning across diverse learners.',
      strands: ['Teaching Methods & Instructional Design', 'Curriculum Development', 'Assessment & Learning Evaluation', 'Inclusive & Special Education']
    },
    environmental: {
      displayName: 'Environmental Science',
      summary: 'Interdisciplinary study of ecological systems, environmental change, policy, sustainability, and conservation.',
      strands: ['Environmental Science & Ecology', 'Climate Science & Energy', 'Conservation & Biodiversity', 'Environmental Policy & Sustainability']
    },
    metallurgy: {
      displayName: 'Metallurgy',
      summary: 'Study of metal extraction, alloys, microstructure, processing, and material performance.',
      strands: ['Mineral Processing & Extraction', 'Physical Metallurgy & Microstructure', 'Alloys & Mechanical Properties', 'Corrosion & Surface Treatment']
    },
    woodworking: {
      displayName: 'Woodworking',
      summary: 'Craft study of timber materials, joinery, tool use, construction, and finish quality.',
      strands: ['Wood Properties & Selection', 'Hand Tools & Techniques', 'Joinery & Construction', 'Finishing & Preservation']
    },
    masonry: {
      displayName: 'Masonry',
      summary: 'Craft study of stone, brick, structural assembly, mortar systems, and repair techniques.',
      strands: ['Stone & Brick Materials', 'Bonding & Mortar', 'Structural Principles', 'Repair & Conservation']
    },
    survival: {
      displayName: 'Survival Skills',
      summary: 'Practical study of shelter, water, fire, navigation, first aid, and resilient field judgment.',
      strands: ['Shelter Building & Fire Making', 'Water Sourcing & Purification', 'Foraging & Food Procurement', 'Navigation & Wilderness Safety']
    },
    'cognitive-science': {
      displayName: 'Cognitive Science',
      summary: 'Interdisciplinary study of mind and cognition across philosophy, psychology, neuroscience, AI, and language.',
      strands: ['Philosophy of Mind & Consciousness', 'Cognitive Psychology & Perception', 'Neuroscience & Brain Imaging', 'Language, Reasoning & Computation']
    },
    'communication-studies': {
      displayName: 'Communication Studies',
      summary: 'Study of rhetoric, media, persuasion, public discourse, and communicative systems in social life.',
      strands: ['Rhetoric & Persuasion', 'Media & Public Communication', 'Political Communication', 'Digital and Networked Communication']
    },
    'cultural-gender-studies': {
      displayName: 'Cultural & Gender Studies',
      summary: 'Interdisciplinary study of culture, identity, power, embodiment, media, and structural inequality across gendered and racialized social life.',
      strands: ['Cultural Theory & Hegemony', 'Feminist & Gender Studies', 'Queer, Race & Disability Studies', 'Media, Bodies & Political Economy']
    },
    'library-information-science': {
      displayName: 'Library & Information Science',
      summary: 'Study of knowledge organization, archives, retrieval, metadata, public information systems, and stewardship of records and collections.',
      strands: ['Knowledge Organization & Cataloging', 'Archives & Records', 'Information Retrieval & User Behavior', 'Digital Libraries & Information Ethics']
    }
    ,
    'business-management': {
      displayName: 'Business & Management',
      summary: 'Study of firms, strategy, operations, finance, marketing, and organizational coordination across modern economic life.',
      strands: ['Strategy & Organization', 'Finance & Accounting', 'Marketing & Operations', 'Entrepreneurship & Governance']
    },
    'social-work-public-policy': {
      displayName: 'Social Work & Public Policy',
      summary: 'Study of welfare systems, frontline care, policy design, social administration, and institutional responses to vulnerability and inequality.',
      strands: ['Social Work Practice', 'Welfare States & Policy Design', 'Community, Family & Care Systems', 'Program Evaluation & Public Administration']
    },
    neuroscience: {
      displayName: 'Neuroscience',
      summary: 'Study of nervous systems from cells and circuits to cognition, behavior, disease, and neurotechnology.',
      strands: ['Cellular & Molecular Neuroscience', 'Systems & Circuit Neuroscience', 'Cognitive & Affective Neuroscience', 'Clinical & Computational Neuroscience']
    },
    maritime: {
      displayName: 'Maritime',
      summary: 'Study of seamanship, navigation, boatbuilding, maritime trade, ocean systems, and the cultures and laws of life at sea.',
      strands: ['Seamanship & Navigation', 'Boatbuilding & Marine Engineering', 'Maritime Law, Trade & Labor', 'Naval Strategy & Ocean Systems']
    },
    'bioinformatics-computational-biology': {
      displayName: 'Bioinformatics & Computational Biology',
      summary: 'Study of biological information through algorithms, statistics, modeling, sequence analysis, omics pipelines, and translational computation.',
      strands: ['Sequence & Genome Analysis', 'Omics & Single-Cell Systems', 'Structural & Systems Biology', 'Clinical & Translational Bioinformatics']
    },
    'information-theory-systems-complexity': {
      displayName: 'Information Theory, Systems Theory & Complexity',
      summary: 'Interdisciplinary study of information, feedback, control, emergence, networks, and nonlinear systems across natural and social domains.',
      strands: ['Information & Coding', 'Cybernetics & Control', 'Complexity & Networks', 'Systems Modeling & Emergence']
    },
    'applied-emerging-ethics': {
      displayName: 'Applied & Emerging Ethics',
      summary: 'Study of moral reasoning in medicine, technology, environment, business, media, and governance under real-world conditions of power and uncertainty.',
      strands: ['Bioethics & Health', 'Technology & AI Ethics', 'Environmental & Business Ethics', 'Governance, Justice & Public Accountability']
    },
    'digital-humanities-science-communication': {
      displayName: 'Digital Humanities & Science Communication',
      summary: 'Study of digital knowledge infrastructures, computational humanities, public scholarship, and the communication of science under uncertainty.',
      strands: ['Digital Texts & Archives', 'Computational Humanities', 'Science Media & Public Communication', 'Visualization & Knowledge Infrastructure']
    },
    'energy-studies': {
      displayName: 'Energy Studies',
      summary: 'Study of energy resources, conversion, grids, fuels, storage, transition policy, and the geopolitics and justice of infrastructure.',
      strands: ['Thermodynamics & Energy Systems', 'Electricity, Grids & Storage', 'Fuels, Nuclear & Industrial Energy', 'Policy, Geopolitics & Energy Justice']
    },
    'food-science-nutrition': {
      displayName: 'Food Science & Nutrition',
      summary: 'Study of food chemistry, safety, processing, metabolism, diet, and the health and policy systems surrounding nourishment.',
      strands: ['Food Chemistry & Processing', 'Microbiology & Food Safety', 'Nutrition & Metabolism', 'Public Health & Food Systems']
    },
    'sports-science': {
      displayName: 'Sports Science',
      summary: 'Study of performance, training, movement, recovery, injury, and human adaptation across athletic and tactical contexts.',
      strands: ['Exercise Physiology', 'Biomechanics & Skill Acquisition', 'Training, Recovery & Load Management', 'Nutrition, Medicine & Performance Analytics']
    },
    'urban-studies': {
      displayName: 'Urban Studies',
      summary: 'Interdisciplinary study of cities, housing, infrastructure, governance, mobility, inequality, and urban ecological change.',
      strands: ['Urban Theory & Social Life', 'Housing & Land Use', 'Infrastructure & Mobility', 'Governance, Climate & Spatial Justice']
    },
    'disaster-science-emergency-management': {
      displayName: 'Disaster Science & Emergency Management',
      summary: 'Study of hazards, vulnerability, preparedness, emergency response, recovery, resilience, and systemic risk across crises.',
      strands: ['Hazard & Risk Analysis', 'Preparedness & Response Systems', 'Recovery & Resilience', 'Public Health & Crisis Communication']
    },
    'forensic-sciences': {
      displayName: 'Forensic Sciences',
      summary: 'Study of scientific investigation for law and accountability through evidence handling, laboratory analysis, and expert interpretation.',
      strands: ['Crime Scene & Evidence Practice', 'Biology, Toxicology & Trace Analysis', 'Digital, Document & Pattern Forensics', 'Validation, Law & Expert Testimony']
    }
  };

  var disciplineTopicSeeds = {
    philosophy: {
      'Metaphysics & Ontology': ['Being and existence', 'Substance, causation, and modality', 'Personal identity'],
      'Epistemology & Logic': ['Knowledge and justification', 'Skepticism and certainty', 'Formal and informal reasoning'],
      'Ethics & Applied Philosophy': ['Virtue, duty, and consequences', 'Political and social ethics', 'Applied moral dilemmas'],
      'History of Philosophy': ['Ancient philosophy', 'Medieval and early modern thought', 'Modern and contemporary schools']
    },
    history: {
      'Ancient & Classical History': ['Origins of civilization', 'Greek and Hellenistic worlds', 'Rome and imperial systems'],
      'Medieval & Early Modern History': ['Religious and political orders', 'Trade, empire, and exchange', 'Renaissance and reformation'],
      'Modern & Contemporary History': ['Revolutions and industrialization', 'World wars and ideological conflict', 'Globalization and contemporary change'],
      'Historiography & Philosophy of History': ['Historical method', 'Narrative and interpretation', 'Evidence, bias, and revision']
    },
    literature: {
      'Literary Theory & Criticism': ['Close reading', 'Critical theory', 'Interpretive methods'],
      'Poetry & Lyric Forms': ['Poetic devices', 'Epic and lyric traditions', 'Modern poetry'],
      'Narrative & Epic Traditions': ['Narrative structure', 'Epic and novel traditions', 'World storytelling'],
      'Drama & Performance': ['Classical drama', 'Tragedy and comedy', 'Modern performance traditions']
    },
    psychology: {
      'Cognitive Psychology & Learning': ['Memory and attention', 'Learning models', 'Decision-making'],
      'Developmental Psychology': ['Child development', 'Lifespan change', 'Attachment and identity'],
      'Clinical & Abnormal Psychology': ['Diagnostic frameworks', 'Therapeutic models', 'Psychopathology and care'],
      'Social Psychology & Behavior': ['Group behavior', 'Bias and persuasion', 'Identity and interaction']
    },
    economics: {
      'Microeconomics & Market Theory': ['Supply, demand, and price', 'Consumer and firm behavior', 'Market power and market failures', 'Game theory, incentives, and information'],
      'Macroeconomics & Growth': ['Inflation and unemployment', 'Fiscal and monetary policy', 'Growth, productivity, and business cycles', 'Banking, money, and macro instability'],
      'History of Economic Thought': ['Classical political economy', 'Marginalism and neoclassical thought', 'Keynesian and heterodox debates', 'Institutional, feminist, and ecological economics'],
      'Development & International Economics': ['Trade and comparative advantage', 'Poverty and development', 'Global finance and institutions', 'Industrial policy, inequality, and geoeconomics']
    },
    physics: {
      'Classical Mechanics & Thermodynamics': ['Motion and force', 'Energy and work', 'Heat and entropy'],
      'Electromagnetism & Optics': ['Fields and charges', 'Waves and light', 'Circuits and applications'],
      'Modern Physics': ['Relativity', 'Quantum foundations', 'Atomic and nuclear physics'],
      'Particle Physics & Cosmology': ['Standard model basics', 'Astrophysical structure', 'Origins and fate of the universe']
    },
    biology: {
      'Cell Biology & Molecular Biology': ['Cells and organelles', 'DNA, RNA, and protein synthesis', 'Cell signaling'],
      'Genetics & Evolution': ['Inheritance and variation', 'Natural selection', 'Population genetics'],
      'Physiology & Anatomy': ['Organ systems', 'Homeostasis', 'Structure and function'],
      'Ecology & Population Biology': ['Ecosystems and niches', 'Population dynamics', 'Biodiversity and conservation']
    },
    mathematics: {
      'Algebra & Linear Algebra': ['Equations, polynomials, and algebraic structure', 'Vectors, matrices, and linear maps', 'Eigenvalues, spectra, and transformations', 'Groups, symmetry, and abstract algebra'],
      'Analysis & Calculus': ['Limits, continuity, and rigorous foundations', 'Differentiation, integration, and series', 'Measure, convergence, and functional spaces', 'Differential equations, dynamics, and approximation'],
      'Geometry & Topology': ['Euclidean, affine, and projective geometry', 'Curves, manifolds, and curvature', 'Transformations, symmetry, and geometric invariants', 'Topology, continuity, and homotopy'],
      'Number Theory & Combinatorics': ['Divisibility, primes, and modular arithmetic', 'Diophantine equations and arithmetic structure', 'Counting, graphs, and discrete configurations', 'Additive, probabilistic, and combinatorial methods']
    },
    logic: {
      'Classical & Symbolic Logic': ['Arguments and validity', 'Truth tables and connectives', 'Predicate logic'],
      'Formal Systems & Proof': ['Proof strategies', 'Derivations and systems', 'Expressibility and limits'],
      'Modal & Non-Classical Logics': ['Necessity and possibility', 'Temporal and epistemic logic', 'Paraconsistent and intuitionistic logics'],
      'Philosophical Logic & Semantics': ['Meaning and reference', 'Conditionals and paradoxes', 'Logic and natural language']
    },
    'computer-science': {
      'Algorithms & Data Structures': ['Complexity and efficiency', 'Core data structures', 'Search, sorting, and graphs'],
      'Programming Language Theory': ['Syntax and semantics', 'Type systems', 'Compilation and interpretation'],
      'Artificial Intelligence & Machine Learning': ['Search and inference', 'Learning models', 'Neural and symbolic systems'],
      'Systems, Networks & Security': ['Operating systems', 'Distributed systems and networks', 'Security principles']
    },
    'cognitive-science': {
      'Philosophy of Mind & Consciousness': ['Mind-body problems', 'Consciousness theories', 'Intentionality and selfhood'],
      'Cognitive Psychology & Perception': ['Perception and attention', 'Memory and representation', 'Reasoning and judgment'],
      'Neuroscience & Brain Imaging': ['Neural systems', 'Brain mapping methods', 'Cognition and embodiment'],
      'Language, Reasoning & Computation': ['Language and thought', 'Formal reasoning', 'Computational models of mind']
    },
    'performing-arts': {
      'Theater & Dramaturgy': ['Stagecraft and dramatic form', 'Play analysis and adaptation', 'Acting traditions and rehearsal'],
      'Dance & Movement': ['Movement vocabularies', 'Choreographic composition', 'Embodied technique and training'],
      'Performance Studies': ['Performance and ritual', 'Audience and embodiment', 'Identity, liveness, and spectacle'],
      'Global Performance Traditions': ['Classical theater traditions', 'Folk and ritual performance', 'Modern and experimental stage forms']
    },
    'political-science': {
      'Political Theory & Philosophy': ['Justice, liberty, and equality', 'Ideologies and political traditions', 'Democracy, authority, and legitimacy', 'Decolonial, feminist, and critical theory'],
      'Comparative Government & Systems': ['Regimes and democratization', 'Parties, elections, and representation', 'State capacity, bureaucracy, and institutions', 'Identity, conflict, and political order'],
      'International Relations & Diplomacy': ['Realism, liberalism, and constructivism', 'War, security, and alliance politics', 'Geopolitics, geoeconomics, and grand strategy', 'Global governance, trade, and international law'],
      'Public Policy & Administration': ['Agenda-setting and policy design', 'Implementation and street-level governance', 'Public law, courts, and constitutional order', 'Digital politics, platform power, and administrative change']
    },
    geography: {
      'Physical Geography': ['Geomorphology and landscape change', 'Climatology, hydrology, and Earth systems', 'Biogeography, soils, and ecological pattern', 'Hazards, coasts, and cryosphere processes'],
      'Human Geography': ['Place, territory, and spatial theory', 'Migration, culture, and identity', 'Economic geography and uneven development', 'Power, colonialism, and relational space'],
      'Urban & Regional Studies': ['Urbanization and metropolitan form', 'Housing, land use, and regional development', 'Infrastructure, mobility, and spatial networks', 'Urban inequality, governance, and public space'],
      'Environmental Geography & Sustainability': ['Human-environment systems', 'GIS, remote sensing, and spatial evidence', 'Political ecology and environmental justice', 'Climate adaptation, resilience, and resource governance']
    },
    'education-studies': {
      'Philosophy & Theory of Education': ['Aims of education and human development', 'Democracy, authority, and moral formation', 'Critical pedagogy and emancipatory education', 'Knowledge, canon, and decolonial curriculum questions'],
      'Curriculum & Pedagogy': ['Curriculum design and sequencing', 'Instructional design and classroom methods', 'Subject-specific didactics and disciplinary thinking', 'Assessment, feedback, and evidence of learning'],
      'Educational Psychology & Development': ['Learning theory and cognitive development', 'Motivation, belonging, and self-regulation', 'Memory, transfer, and metacognition', 'Inclusion, disability, and developmental diversity'],
      'School Systems & Policy': ['Governance, finance, and accountability', 'School inequality, segregation, and access', 'Teacher education and professional learning', 'Educational technology, AI, and platformized schooling']
    },
    environmental: {
      'Environmental Science & Ecology': ['Ecosystems, biodiversity, and disturbance', 'Hydrology, soils, and land systems', 'Pollution, toxicology, and exposure', 'Restoration, conservation, and resilience'],
      'Climate Science & Energy': ['Climate systems and attribution', 'Mitigation, adaptation, and loss and damage', 'Energy-environment systems and extraction', 'Planetary boundaries and coupled Earth systems'],
      'Conservation & Biodiversity': ['Protected areas and conservation planning', 'Wildlife management and fisheries', 'Conservation genomics and biodiversity monitoring', 'Community stewardship and decolonial conservation'],
      'Environmental Policy & Sustainability': ['Environmental law and governance', 'Environmental justice and political ecology', 'Sustainability, circularity, and industrial metabolism', 'Carbon removal, geoengineering, and transition politics']
    },
    'communication-studies': {
      'Rhetoric & Persuasion': ['Classical rhetoric', 'Argument, framing, and audience', 'Persuasion and propaganda', 'Civic speech and public persuasion'],
      'Media & Public Communication': ['Journalism and news systems', 'Media effects and audience research', 'Representation and public culture', 'Public relations and strategic communication'],
      'Political Communication': ['Public sphere and campaigns', 'Agenda-setting and framing', 'Propaganda, disinformation, and narrative war', 'Opinion, polling, and democratic deliberation'],
      'Digital and Networked Communication': ['Platforms and networked publics', 'Virality, memes, and online coordination', 'Algorithmic curation and platform governance', 'Human-machine and AI-mediated communication']
    },
    'cultural-gender-studies': {
      'Cultural Theory & Hegemony': ['Culture, ideology, and hegemony', 'Representation, discourse, and power', 'Subculture and everyday life', 'Globalization and cultural industry'],
      'Feminist & Gender Studies': ['Gender formation and patriarchy', 'Feminist traditions and waves', 'Social reproduction and care', 'Embodiment, labor, and institutions'],
      'Queer, Race & Disability Studies': ['Queer and trans theory', 'Race, coloniality, and diaspora', 'Disability justice and crip theory', 'Intersectionality and decolonial critique'],
      'Media, Bodies & Political Economy': ['Body politics and affect', 'Platformed identity and algorithmic visibility', 'Culture industries and precarious labor', 'Institutions, governance, and public power']
    },
    'library-information-science': {
      'Knowledge Organization & Cataloging': ['Classification and metadata', 'Authority control and vocabularies', 'Cataloging standards and schemas', 'Linked data and knowledge graphs'],
      'Archives & Records': ['Provenance and original order', 'Records management and lifecycle control', 'Preservation, appraisal, and description', 'Community archives and cultural memory'],
      'Information Retrieval & User Behavior': ['Search and relevance', 'Information behavior models', 'Discovery systems and information literacy', 'Access design and user communities'],
      'Digital Libraries & Information Ethics': ['Digital repositories and preservation', 'Scholarly communication and open access', 'Data stewardship and platform infrastructure', 'Information ethics and access justice']
    },
    'business-management': {
      'Strategy & Organization': ['Theories of the firm', 'Competitive advantage and capabilities', 'Organization design, culture, and leadership', 'Ecosystems, platforms, and strategic adaptation'],
      'Finance & Accounting': ['Financial reporting and control', 'Capital structure and valuation', 'Risk, governance, and audit', 'Asset pricing, banking, and capital allocation'],
      'Marketing & Operations': ['Consumer and market strategy', 'Branding, pricing, and persuasion', 'Supply chains and process systems', 'Analytics, quality, and performance measurement'],
      'Entrepreneurship & Governance': ['Innovation and ventures', 'Corporate governance and stakeholder power', 'International business and digital transformation', 'Sustainability, labor, and business ethics']
    },
    'social-work-public-policy': {
      'Social Work Practice': ['Casework and clinical support', 'Trauma-informed and anti-oppressive practice', 'Group, family, and community intervention', 'Care, coercion, and self-determination'],
      'Welfare States & Policy Design': ['Policy process and implementation', 'Means testing and universalism', 'Social insurance and welfare institutions', 'Administrative burden and digital welfare systems'],
      'Community, Family & Care Systems': ['Child welfare and family regulation', 'Community development and mutual aid', 'Disability, aging, and care systems', 'Housing, homelessness, and behavioral health support'],
      'Program Evaluation & Public Administration': ['Evidence and evaluation', 'Street-level bureaucracy', 'Public management and service delivery', 'Participatory governance and justice-centered policy learning']
    },
    neuroscience: {
      'Cellular & Molecular Neuroscience': ['Neurons, glia, and signaling', 'Synapses and neurotransmitters', 'Plasticity, development, and gene regulation', 'Molecular methods and neural cell types'],
      'Systems & Circuit Neuroscience': ['Sensory and motor systems', 'Memory and navigation circuits', 'Homeostasis, reward, and state regulation', 'Connectomics and brain-mapping systems'],
      'Cognitive & Affective Neuroscience': ['Attention and executive control', 'Emotion and social cognition', 'Language, consciousness, and self', 'Decision-making, perception, and embodied cognition'],
      'Clinical & Computational Neuroscience': ['Neurological and psychiatric disorders', 'Neural coding and computational models', 'Imaging, neurotechnology, and translation', 'Brain-computer interfaces and neuroethics']
    },
    maritime: {
      'Seamanship & Navigation': ['Ship handling and watchkeeping', 'Pilotage, chartwork, and coastal navigation', 'Celestial and ocean navigation', 'Safety, rescue, and heavy-weather practice'],
      'Boatbuilding & Marine Engineering': ['Hull forms and naval architecture', 'Rigging, propulsion, and power systems', 'Materials, maintenance, and corrosion control', 'Stability, buoyancy, and marine engineering systems'],
      'Maritime Law, Trade & Labor': ['Admiralty and law of the sea', 'Ports, shipping, and insurance', 'Maritime labor and commercial systems', 'Logistics, customs, and global trade corridors'],
      'Naval Strategy & Ocean Systems': ['Sea power and naval warfare', 'Fisheries, offshore energy, and marine resources', 'Ocean observation, weather, and climate systems', 'Maritime geopolitics and undersea infrastructure']
    },
    'bioinformatics-computational-biology': {
      'Sequence & Genome Analysis': ['Alignment and search', 'Genome assembly and annotation', 'Variants, pangenomes, and comparative genomics', 'Indexing, mapping, and reference design'],
      'Omics & Single-Cell Systems': ['Transcriptomics and expression', 'Single-cell and spatial omics', 'Proteomics, metabolomics, and multiomics', 'Batch correction and cell-state inference'],
      'Structural & Systems Biology': ['Protein structure and modeling', 'Pathways and network biology', 'Phylogenetics and evolutionary inference', 'Mechanistic simulation and design workflows'],
      'Clinical & Translational Bioinformatics': ['Population and statistical genetics', 'Clinical genomics and pharmacogenomics', 'Workflows, databases, and reproducibility', 'Biomedical informatics and AI-assisted interpretation']
    },
    'information-theory-systems-complexity': {
      'Information & Coding': ['Entropy and mutual information', 'Compression and channel capacity', 'Coding, noise, and error correction', 'Inference, rate-distortion, and signal limits'],
      'Cybernetics & Control': ['Feedback and regulation', 'Control systems and homeostasis', 'Second-order cybernetics and observing systems', 'Management cybernetics and viable systems'],
      'Complexity & Networks': ['Emergence and self-organization', 'Chaos and nonlinear dynamics', 'Network structure, contagion, and cascades', 'Criticality and adaptive-system behavior'],
      'Systems Modeling & Emergence': ['System dynamics and stocks-and-flows', 'Agent-based and multiscale models', 'Resilience, tipping points, and systemic risk', 'Socio-technical governance and intervention design']
    },
    'applied-emerging-ethics': {
      'Bioethics & Health': ['Consent and medical decision-making', 'Research ethics and public health', 'Reproduction, disability, and care', 'Genomics, enhancement, and end-of-life ethics'],
      'Technology & AI Ethics': ['Fairness and accountability', 'Privacy, surveillance, and data power', 'AI governance and synthetic media', 'Platform labor, persuasion, and autonomy'],
      'Environmental & Business Ethics': ['Climate and intergenerational justice', 'Corporate responsibility and labor', 'Animal, food, and resource ethics', 'Energy, extraction, and transition ethics'],
      'Governance, Justice & Public Accountability': ['Media and professional ethics', 'Institutional design and regulation', 'Global justice and enforcement gaps', 'Ethics washing and public accountability']
    },
    'digital-humanities-science-communication': {
      'Digital Texts & Archives': ['Text encoding and TEI workflows', 'Digital editing, collation, and manuscript comparison', 'Archives, metadata, and repositories', 'Preservation, IIIF, and access infrastructures'],
      'Computational Humanities': ['Corpus analysis and stylometry', 'Topic modeling and cultural analytics', 'GIS and spatial humanities', 'Public humanities and digital pedagogy'],
      'Science Media & Public Communication': ['Deficit, dialogue, and participation models', 'Science journalism, preprints, and evidence quality', 'Uncertainty and risk communication', 'Trust, framing, and public engagement'],
      'Visualization & Knowledge Infrastructure': ['Interfaces and visual rhetoric', 'Open science and scholarly communication', 'Citizen science and participatory knowledge', 'AI in archives and public knowledge systems']
    },
    'energy-studies': {
      'Thermodynamics & Energy Systems': ['Exergy and conversion limits', 'Primary, final, and useful energy', 'Energy transitions and historical systems', 'Efficiency, waste heat, and integrated systems'],
      'Electricity, Grids & Storage': ['Power generation and balancing', 'Transmission, smart grids, and resilience', 'Batteries and long-duration storage', 'Grid operations, flexibility, and reliability'],
      'Fuels, Nuclear & Industrial Energy': ['Fossil fuels and carbon management', 'Fission, fusion, and fuel cycles', 'Hydrogen, synthetic fuels, and feedstocks', 'Industrial heat and deep decarbonization'],
      'Policy, Geopolitics & Energy Justice': ['Energy markets and finance', 'Security, minerals, and infrastructure', 'Justice, affordability, and transition governance', 'Industrial policy and geopolitical strategy']
    },
    'food-science-nutrition': {
      'Food Chemistry & Processing': ['Macromolecules and food reactions', 'Processing and preservation systems', 'Texture, flavor, and formulation', 'Ingredient functionality and product design'],
      'Microbiology & Food Safety': ['Fermentation and beneficial microbes', 'Pathogens and contamination control', 'HACCP and quality systems', 'Packaging, shelf life, and cold-chain integrity'],
      'Nutrition & Metabolism': ['Macronutrients and energy regulation', 'Micronutrients and deficiency', 'Clinical, performance, and precision nutrition', 'Metabolism, gut systems, and dietary response'],
      'Public Health & Food Systems': ['Diet patterns and epidemiology', 'Food environments and policy', 'Sustainability, supply chains, and equity', 'Culture, access, and population nutrition']
    },
    'sports-science': {
      'Exercise Physiology': ['Aerobic and anaerobic systems', 'Fatigue and adaptation', 'Environment, stress, and recovery', 'Thermoregulation and endocrine response'],
      'Biomechanics & Skill Acquisition': ['Movement analysis and kinetics', 'Motor control and learning', 'Technique and tactical performance', 'Equipment, constraints, and performance design'],
      'Training, Recovery & Load Management': ['Strength and conditioning', 'Periodization and readiness', 'Sleep, restoration, and injury risk', 'Load monitoring and return-to-play decisions'],
      'Nutrition, Medicine & Performance Analytics': ['Fueling and supplementation', 'Sports medicine and rehabilitation', 'Monitoring, data, and decision support', 'Performance psychology and competitive decision-making']
    },
    'urban-studies': {
      'Urban Theory & Social Life': ['Urbanization and social organization', 'Spatial theory and inequality', 'Public space and cultural life', 'Segregation, gentrification, and urban change'],
      'Housing & Land Use': ['Land markets and zoning', 'Housing affordability and displacement', 'Planning traditions and development', 'Property regimes and development finance'],
      'Infrastructure & Mobility': ['Transit and accessibility', 'Water, energy, and civic systems', 'Logistics, ports, and metropolitan circulation', 'Digital urbanism and platform infrastructure'],
      'Governance, Climate & Spatial Justice': ['Metropolitan governance and finance', 'Environmental justice and adaptation', 'Resilience, migration, and urban futures', 'Smart cities, public power, and civic data']
    },
    'disaster-science-emergency-management': {
      'Hazard & Risk Analysis': ['Hazard classification and exposure', 'Vulnerability and disaster risk reduction', 'Forecasting, scenarios, and compound events', 'Cascading failure and systemic risk'],
      'Preparedness & Response Systems': ['Preparedness planning and exercises', 'Incident command and emergency operations', 'Humanitarian logistics and evacuation', 'Mutual aid and interagency coordination'],
      'Recovery & Resilience': ['Infrastructure lifelines and cascading failure', 'Recovery finance and reconstruction', 'Community resilience and adaptation', 'Housing, relocation, and long-term social recovery'],
      'Public Health & Crisis Communication': ['Epidemics and health emergencies', 'Warnings, trust, and misinformation', 'Mental health and long-term social impacts', 'Risk communication, leadership, and ethics']
    },
    'forensic-sciences': {
      'Crime Scene & Evidence Practice': ['Scene preservation and documentation', 'Collection, packaging, and chain of custody', 'Reconstruction and contamination control', 'Evidence triage and scene management'],
      'Biology, Toxicology & Trace Analysis': ['DNA profiling and biological evidence', 'Toxicology and chemical detection', 'Trace evidence and laboratory methods', 'Quality assurance and interpretation limits'],
      'Digital, Document & Pattern Forensics': ['Digital-device and network investigation', 'Questioned documents and signatures', 'Pattern comparison and feature analysis', 'Multimedia, open-source, and image forensics'],
      'Validation, Law & Expert Testimony': ['Method validation and error rates', 'Admissibility and evidentiary standards', 'Bias control and expert communication', 'Forensic reform and scientific credibility']
    }
  };

  var disciplineCourseBlueprints = {
    mathematics: mathematicsSourceContent,
    anthropology: anthropologySourceContent,
    linguistics: linguisticsSourceContent,
    psychology: psychologySourceContent
  };

  window.HUMAN_ACADEMY_DISCIPLINE_BLUEPRINTS = disciplineBlueprints;

  function ensureUniqueById(collection, item) {
    if (!item || !item.id) return;
    if (!collection.some(function(candidate) { return candidate.id === item.id; })) {
      collection.push(item);
    }
  }

  function firstDefined() {
    for (var index = 0; index < arguments.length; index += 1) {
      if (arguments[index]) return arguments[index];
    }
    return null;
  }

  function sanitizeFragment(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function toWikipediaUrl(title) {
    return 'https://en.wikipedia.org/wiki/' + encodeURIComponent(String(title || '').replace(/\s+/g, '_'));
  }

  function getGeneratedOverviewNodeId(disciplineId) {
    return disciplineId + '-overview';
  }

  function getGeneratedStrandNodeId(disciplineId, strandIndex) {
    return disciplineId + '-strand-' + (strandIndex + 1);
  }

  function getGeneratedTopicNodeId(disciplineId, strandIndex, topicIndex) {
    return disciplineId + '-topic-' + (strandIndex + 1) + '-' + (topicIndex + 1);
  }

  function getVisibleGeneratedTopicTitles(disciplineId, strandTitle, disciplineName) {
    if (!disciplineUsesTopicNodes(disciplineId)) return [];
    return getStrandTopics(disciplineId, strandTitle, disciplineName).slice(0, MAX_GENERATED_TOPIC_CLUSTERS);
  }

  function makeDisciplineList() {
    var list = [];
    Object.keys(disciplinesByDomain).forEach(function(domainId) {
      (disciplinesByDomain[domainId] || []).forEach(function(discipline) {
        list.push({
          id: discipline.id,
          name: discipline.name,
          domainId: domainId,
          hasTree: !!discipline.hasTree
        });
      });
    });
    return list;
  }

  function getDisciplineMeta(disciplineId) {
    var blueprint = disciplineBlueprints[disciplineId] || null;
    var discipline = makeDisciplineList().find(function(candidate) {
      return candidate.id === disciplineId;
    }) || null;
    return {
      id: disciplineId,
      name: firstDefined((discipline && discipline.name), blueprint && blueprint.displayName, disciplineId),
      domainId: discipline && discipline.domainId,
      hasTree: !!(discipline && discipline.hasTree),
      summary: blueprint ? blueprint.summary : ('Structured scaffold for ' + disciplineId + ' built from the academy outline.'),
      strands: blueprint && Array.isArray(blueprint.strands) && blueprint.strands.length
        ? blueprint.strands.slice()
        : ['Foundations', 'Core Frameworks', 'Applications', 'Advanced Questions']
    };
  }

  function getDisciplineCourseBlueprint(disciplineId) {
    return disciplineCourseBlueprints[disciplineId] || null;
  }

  function getOverviewCourseBlueprint(disciplineId) {
    var blueprint = getDisciplineCourseBlueprint(disciplineId);
    return blueprint && blueprint.overview ? blueprint.overview : null;
  }

  function getStrandCourseBlueprint(disciplineId, strandTitle) {
    var blueprint = getDisciplineCourseBlueprint(disciplineId);
    return blueprint && blueprint.strandCourses ? blueprint.strandCourses[strandTitle] || null : null;
  }

  function disciplineUsesTopicNodes(disciplineId) {
    var blueprint = getDisciplineCourseBlueprint(disciplineId);
    return !(blueprint && blueprint.disableTopicNodes);
  }

  function getRenderableStrands(disciplineId) {
    var meta = getDisciplineMeta(disciplineId);
    var blueprint = getDisciplineCourseBlueprint(disciplineId);
    if (blueprint && blueprint.showAllStrands) return meta.strands.slice();
    return meta.strands.slice(0, 4);
  }

  function getStrandTopics(disciplineId, strandTitle, disciplineName) {
    var seeded = disciplineTopicSeeds[disciplineId] && disciplineTopicSeeds[disciplineId][strandTitle];
    if (!disciplineUsesTopicNodes(disciplineId)) return [];
    if (seeded && seeded.length) return seeded.slice(0, MAX_GENERATED_TOPIC_CLUSTERS);
    return [
      strandTitle + ' foundations',
      strandTitle + ' methods and debates',
      disciplineName + ' applications of ' + strandTitle,
      disciplineName + ' frontier questions in ' + strandTitle
    ];
  }

  function createRelationIfMissing(relation) {
    if (!relation || !relation.id) return;
    if (!curriculum.knowledgeRelations.some(function(candidate) { return candidate.id === relation.id; })) {
      curriculum.knowledgeRelations.push(relation);
    }
  }

  function makeLesson(lessonId, title, summary, bulletPoints, disciplineName) {
    var terms = (bulletPoints || []).slice(0, 5);
    return {
      id: lessonId,
      title: title,
      summary: summary,
      learningObjectives: (bulletPoints || []).slice(0, 3).map(function(point) {
        return 'Explain the role of ' + point + ' in ' + disciplineName + '.';
      }),
      keyTerms: terms,
      guidedNotes: [
        'Write a short map of the main ideas introduced in this lesson.',
        'Note one tension or debate that deserves deeper development later.',
        'Record one connection between this lesson and another strand in the discipline.'
      ],
      activities: [
        'Turn the lesson outline into a one-page concept map.',
        'Sort the listed topics into foundations, methods, and advanced debates.',
        'Write two questions that should guide later expansion of this lesson.'
      ],
      readings: [
        { title: disciplineName + ' overview from schools-of-thought scaffold', author: 'Human Academy', year: 2026 },
        { title: title + ' reference outline', author: 'Human Academy', year: 2026 }
      ]
    };
  }

  function makeDetailedLesson(lessonId, title, summary, keyTerms, points, readings, disciplineName, activities) {
    var lessonPoints = Array.isArray(points) ? points.slice() : [];
    return {
      id: lessonId,
      title: title,
      summary: summary,
      learningObjectives: lessonPoints.slice(0, 3).map(function(point) {
        return 'Explain ' + String(point || '').toLowerCase().replace(/[.]$/, '') + ' in ' + disciplineName + '.';
      }),
      keyTerms: Array.isArray(keyTerms) ? keyTerms.slice(0, 8) : [],
      guidedNotes: lessonPoints,
      activities: Array.isArray(activities) && activities.length ? activities.slice() : [
        'Extract the main concepts from this lesson into a study outline.',
        'Separate foundations, core domains, and frontier questions from the source material.',
        'Write a short note on how this lesson connects to another mathematics subject node.'
      ],
      readings: (readings || []).map(function(reading) {
        return typeof reading === 'string' ? { title: reading, author: 'Human Academy', year: 2026 } : reading;
      })
    };
  }

  function makeQuiz(quizId, title, optionsSeed) {
    var options = (optionsSeed || []).slice(0, 4);
    while (options.length < 4) options.push('Scope and structure');
    return {
      id: quizId,
      title: title,
      questions: options.slice(0, 3).map(function(option, index) {
        var distractors = options.filter(function(candidate) { return candidate !== option; }).slice(0, 3);
        while (distractors.length < 3) distractors.push('Unrelated placeholder');
        var answers = [option].concat(distractors);
        return {
          q: 'Which topic is explicitly part of this scaffolded course?',
          options: answers,
          answer: 0
        };
      })
    };
  }

  function makeTest(testId, title, focusPoints) {
    var prompts = (focusPoints || []).slice(0, 4);
    while (prompts.length < 4) prompts.push('Foundational concepts');
    return {
      id: testId,
      title: title,
      summary: 'Scaffolded cumulative check for ' + title + '.',
      passScore: 80,
      questions: prompts.slice(0, 4).map(function(prompt) {
        return {
          q: 'Which area should a learner be able to explain after completing this scaffold?',
          options: [prompt, 'Unrelated trivia', 'Interface styling only', 'Deployment mechanics'],
          answer: 0
        };
      })
    };
  }

  function makeLab(labId, title, deliverableLabel, focusPoints) {
    return {
      id: labId,
      title: title,
      summary: 'A structured practice activity for turning the scaffold into working knowledge.',
      deliverable: deliverableLabel,
      checklist: [
        'Summarize the central framework in your own words.',
        'Map at least three focus points from the scaffold into a workflow or argument.',
        'Identify one weak area that should receive deeper authored content later.',
        'Revise the map after comparing adjacent strands.'
      ].concat((focusPoints || []).slice(0, 2).map(function(point) {
        return 'Integrate ' + point + ' into the lab output.';
      }))
    };
  }

  function makeProject(projectId, title, question, focusPoints) {
    return {
      id: projectId,
      title: title,
      drivingQuestion: question,
      scope: 'Produce a structured synthesis using the scaffold as a planning frame rather than final content.',
      requirements: [
        'Use at least three scaffolded strands or topics.',
        'Explain how the selected strands relate to one another.',
        'Mark where future detailed content should be expanded.',
        'Conclude with a short roadmap for deeper study.'
      ],
      deliverables: ['A 2-4 page structured synthesis', 'A short next-step plan'],
      milestones: [
        'Select the focus strands.',
        'Draft the conceptual structure.',
        'Add examples, tensions, and open questions.',
        'Revise into a clearer roadmap.'
      ],
      rubric: ['Coverage of scaffold strands', 'Quality of structure', 'Clarity of synthesis', 'Strength of next-step planning'].concat((focusPoints || []).slice(0, 1))
    };
  }

  function makeMedia(mediaId, title, note) {
    return {
      id: mediaId,
      type: 'wikipedia',
      title: 'Wikipedia: ' + title,
      url: toWikipediaUrl(title),
      placement: 'overview',
      required: false,
      whyThisMatters: note,
      fallback: 'Replace with a curated encyclopedia or source reader when detailed content is authored.'
    };
  }

  function registerCourseBundle(key, courseRecord, lessonRecords, quizRecord, testRecord, labRecord, projectRecord, mediaRecord) {
    if (!courses[key]) courses[key] = courseRecord;
    lessonRecords.forEach(function(lesson) {
      if (!lessons[lesson.id]) lessons[lesson.id] = lesson;
    });
    if (quizRecord && !quizzes[quizRecord.id]) quizzes[quizRecord.id] = quizRecord;
    if (testRecord && !tests[testRecord.id]) tests[testRecord.id] = testRecord;
    if (labRecord && !labs[labRecord.id]) labs[labRecord.id] = labRecord;
    if (projectRecord && !projects[projectRecord.id]) projects[projectRecord.id] = projectRecord;
    if (mediaRecord && !media[mediaRecord.id]) media[mediaRecord.id] = mediaRecord;
  }

  function makeGeneratedNodeCourse(disciplineId, node, nodeIndex) {
    var discipline = getDisciplineMeta(disciplineId);
    var lessonAId = 'lesson-' + node.id + '-survey';
    var lessonBId = 'lesson-' + node.id + '-debates';
    var quizId = 'quiz-' + node.id + '-core';
    var testId = 'test-' + node.id + '-core';
    var labId = 'lab-' + node.id + '-map';
    var projectId = 'project-' + node.id + '-synthesis';
    var mediaId = 'media-' + node.id + '-overview';
    var topics = (node.topics || []).slice();
    var surveyTopics = topics.slice(0, Math.max(3, Math.ceil(topics.length / 2)));
    var debateTopics = topics.slice(Math.max(3, Math.ceil(topics.length / 2)));
    if (!debateTopics.length) debateTopics = topics.slice(0, 3);
    var courseRecord = {
      id: 'course-' + node.id,
      disciplineId: disciplineId,
      title: node.title,
      nodeId: node.id,
      summary: 'Scaffolded course structure for ' + node.title + ' built from the schools-of-thought academy outline and current tree topics.',
      estimatedTime: '3-5 hours',
      learningObjectives: (topics.length ? topics : [node.title]).slice(0, 3).map(function(topic) {
        return 'Explain how ' + topic + ' fits inside ' + node.title + '.';
      }),
      canonicalSource: 'data/scaffold-content.js',
      studyMaterial: topics,
      lessonIds: [lessonAId, lessonBId],
      quizIds: [quizId],
      testId: testId,
      labIds: [labId],
      projectIds: [projectId],
      mediaIds: [mediaId],
      masteryCriteria: [
        'Complete the scaffolded lesson sequence for ' + node.title + '.',
        'Pass the generated test at 80 percent or above.',
        'Finish the synthesis project and identify areas for authored expansion.'
      ]
    };
    registerCourseBundle(
      node.id,
      courseRecord,
      [
        makeLesson(lessonAId, node.title + ': Scope and Foundations', 'Survey the main scope, subfields, and organizing concepts in ' + node.title + '.', surveyTopics, discipline.name),
        makeLesson(lessonBId, node.title + ': Debates and Extensions', 'Use the current node topics to outline major tensions, applications, and future extensions in ' + node.title + '.', debateTopics, discipline.name)
      ],
      makeQuiz(quizId, node.title + ' Check', topics),
      makeTest(testId, node.title + ' Core Test', topics),
      makeLab(labId, node.title + ' Mapping Lab', 'A structured concept map for ' + node.title, topics),
      makeProject(projectId, node.title + ' Synthesis Project', 'How should this node expand into a fuller authored course?', topics),
      makeMedia(mediaId, node.title, 'Use this as a starting reference while richer source packets are authored.')
    );

    var conceptId = 'concept-' + node.id;
    if (!curriculum.knowledgeConcepts.some(function(concept) { return concept.conceptId === conceptId; })) {
      curriculum.knowledgeConcepts.push({
        conceptId: conceptId,
        title: node.title,
        type: 'course-scaffold',
        disciplineId: disciplineId,
        summary: 'Generated concept scaffold for ' + node.title + ' based on the academy tree and schools-of-thought topics.',
        relatedCourseIds: [courseRecord.id],
        relatedLessonIds: [lessonAId, lessonBId],
        relationIds: node.prereqs.map(function(reqId) { return 'relation-' + reqId + '-to-' + node.id; }),
        explorationPrompts: [
          'What belongs inside the fully authored version of ' + node.title + '?',
          'How does this node connect to its prerequisites and downstream topics?'
        ]
      });
    }

    (node.prereqs || []).forEach(function(reqId) {
      var relationId = 'relation-' + reqId + '-to-' + node.id;
      if (!curriculum.knowledgeRelations.some(function(relation) { return relation.id === relationId; })) {
        curriculum.knowledgeRelations.push({
          id: relationId,
          fromId: 'concept-' + reqId,
          toId: conceptId,
          label: 'Supports progression into ' + node.title,
          relationType: 'prerequisite',
          strength: 'scaffolded'
        });
      }
    });

    if (!curriculum.surfaceMappings.some(function(mapping) { return mapping.skillTree && mapping.skillTree.nodeId === node.id; })) {
      var stageIds = [];
      roadmapTracks.forEach(function(track) {
        (track.stages || []).forEach(function(stage) {
          if (Array.isArray(stage.nodeIds) && stage.nodeIds.indexOf(node.id) !== -1) {
            stageIds.push(stage.id);
          }
        });
      });
      curriculum.surfaceMappings.push({
        courseId: courseRecord.id,
        disciplineId: disciplineId,
        skillTree: {
          nodeId: node.id,
          unlockRule: (node.prereqs && node.prereqs.length) ? 'all-prereqs-mastered' : 'starting-node'
        },
        knowledgeTree: {
          conceptIds: [conceptId],
          relationIds: (node.prereqs || []).slice(0, 3).map(function(reqId) { return 'relation-' + reqId + '-to-' + node.id; })
        },
        roadmap: {
          stageIds: stageIds,
          recommendedOrder: 1000 + nodeIndex
        }
      });
    }
  }

  function makeDisciplineStrandCourse(disciplineId, strandTitle, strandIndex, stageIds) {
    var discipline = getDisciplineMeta(disciplineId);
    var customBlueprint = getStrandCourseBlueprint(disciplineId, strandTitle);
    var slug = sanitizeFragment(strandTitle) || ('strand-' + (strandIndex + 1));
    var nodeId = getGeneratedStrandNodeId(disciplineId, strandIndex);
    var prerequisiteNodeIds = [getGeneratedOverviewNodeId(disciplineId)];
    var courseId = 'course-' + disciplineId + '-strand-' + (strandIndex + 1);
    var quizId = 'quiz-' + disciplineId + '-' + slug;
    var testId = 'test-' + disciplineId + '-' + slug;
    var labId = 'lab-' + disciplineId + '-' + slug;
    var projectId = 'project-' + disciplineId + '-' + slug;
    var mediaId = 'media-' + disciplineId + '-' + slug;
    var topicSeeds = getStrandTopics(disciplineId, strandTitle, discipline.name);
    var lessonRecords;
    var lessonIds;
    var topics;
    var courseSections;
    var learningObjectives;
    var summary;
    var masteryCriteria;

    if (customBlueprint) {
      lessonRecords = customBlueprint.lessons.map(function(lesson, index) {
        return makeDetailedLesson(
          'lesson-' + disciplineId + '-' + slug + '-' + (lesson.slug || ('part-' + (index + 1))),
          lesson.title,
          lesson.summary,
          lesson.keyTerms,
          lesson.points,
          lesson.readings,
          discipline.name,
          lesson.activities
        );
      });
      lessonIds = lessonRecords.map(function(lesson) { return lesson.id; });
      topics = Array.isArray(customBlueprint.assessmentTopics) && customBlueprint.assessmentTopics.length
        ? customBlueprint.assessmentTopics.slice()
        : [strandTitle].concat((customBlueprint.sections || []).map(function(section) { return section.heading; }));
      courseSections = Array.isArray(customBlueprint.sections) ? customBlueprint.sections.slice() : [];
      learningObjectives = Array.isArray(customBlueprint.learningObjectives) && customBlueprint.learningObjectives.length
        ? customBlueprint.learningObjectives.slice()
        : topics.slice(0, 3).map(function(topic) {
            return 'Explain how ' + topic + ' fits into the discipline structure of ' + discipline.name + '.';
          });
      summary = customBlueprint.summary || ('Source-driven course structure for ' + strandTitle + ' within ' + discipline.name + '.');
      masteryCriteria = Array.isArray(customBlueprint.masteryCriteria) && customBlueprint.masteryCriteria.length
        ? customBlueprint.masteryCriteria.slice()
        : [
            'Complete the lesson sequence for ' + strandTitle + '.',
            'Pass the source-driven strand test at 80 percent or above.',
            'Use the strand project to identify connections and next expansions.'
          ];
    } else {
      var lessonAId = 'lesson-' + disciplineId + '-' + slug + '-survey';
      var lessonBId = 'lesson-' + disciplineId + '-' + slug + '-frameworks';
      var lessonCId = 'lesson-' + disciplineId + '-' + slug + '-applications';
      topics = [strandTitle].concat(topicSeeds).concat(discipline.strands.filter(function(candidate) { return candidate !== strandTitle; }).slice(0, 2));
      lessonRecords = [
        makeLesson(lessonAId, strandTitle + ': Orientation', 'Survey the field, vocabulary, and organizing questions inside ' + strandTitle + '.', topics, discipline.name),
        makeLesson(lessonBId, strandTitle + ': Frameworks and Tensions', 'Outline the major subproblems, debates, and extensions that should later become detailed authored lessons.', topicSeeds.concat(topics.slice().reverse()), discipline.name),
        makeLesson(lessonCId, strandTitle + ': Applications and Case Studies', 'Use concrete subtopics from the schools-of-thought scaffold to connect the strand to real problems and future coursework.', topicSeeds, discipline.name)
      ];
      lessonIds = [lessonAId, lessonBId, lessonCId];
      courseSections = [];
      learningObjectives = topics.slice(0, 3).map(function(topic) {
        return 'Explain how ' + topic + ' fits into the discipline structure of ' + discipline.name + '.';
      });
      summary = 'Scaffolded course structure for ' + strandTitle + ' within ' + discipline.name + ', grounded in the schools-of-thought outline.';
      masteryCriteria = [
        'Complete both strand lessons.',
        'Pass the scaffolded strand test at 80 percent or above.',
        'Use the strand project to mark which details need full authored expansion.'
      ];
    }

    registerCourseBundle(
      courseId,
      {
        id: courseId,
        disciplineId: disciplineId,
        nodeId: nodeId,
        title: strandTitle,
        summary: summary,
        estimatedTime: customBlueprint ? '4-8 hours' : '2-4 hours',
        learningObjectives: learningObjectives,
        canonicalSource: 'data/scaffold-content.js',
        sections: courseSections,
        studyMaterial: topics,
        lessonIds: lessonIds,
        quizIds: [quizId],
        testId: testId,
        labIds: [labId],
        projectIds: [projectId],
        mediaIds: [mediaId],
        masteryCriteria: masteryCriteria
      },
      lessonRecords,
      makeQuiz(quizId, strandTitle + ' Check', topics),
      makeTest(testId, strandTitle + ' Test', topics),
      makeLab(labId, strandTitle + ' Lab', 'A structured planning artifact for ' + strandTitle, topics),
      makeProject(projectId, strandTitle + ' Project', 'What should the fully built version of ' + strandTitle + ' prioritize?', topics),
      makeMedia(mediaId, strandTitle, 'Use this as a light reference while the authored reading stack is still being built.')
    );

    var conceptId = 'concept-' + disciplineId + '-strand-' + (strandIndex + 1);
    if (!curriculum.knowledgeConcepts.some(function(concept) { return concept.conceptId === conceptId; })) {
      curriculum.knowledgeConcepts.push({
        conceptId: conceptId,
        title: strandTitle,
        type: 'discipline-strand',
        disciplineId: disciplineId,
        summary: 'Generated strand scaffold for ' + strandTitle + ' in ' + discipline.name + '.',
        relatedCourseIds: [courseId],
        relatedLessonIds: lessonIds.slice(0, 2),
        relationIds: [],
        explorationPrompts: [
          'What should this strand cover first?',
          'Which adjacent strands should connect to it in a fuller curriculum graph?'
        ]
      });
    }

    createRelationIfMissing({
      id: 'relation-' + disciplineId + '-overview-to-strand-' + (strandIndex + 1),
      fromId: 'concept-' + disciplineId + '-overview',
      toId: conceptId,
      label: 'Introduces the strand ' + strandTitle,
      relationType: 'overview-to-strand',
      strength: 'scaffolded'
    });

    if (!curriculum.surfaceMappings.some(function(mapping) { return mapping.courseId === courseId; })) {
      curriculum.surfaceMappings.push({
        courseId: courseId,
        disciplineId: disciplineId,
        skillTree: {
          nodeId: nodeId,
          unlockRule: 'all-prereqs-mastered',
          prerequisiteNodeIds: prerequisiteNodeIds,
          masteryRule: { type: 'all-required-assessments-passed' }
        },
        knowledgeTree: {
          conceptIds: [conceptId],
          relationIds: []
        },
        roadmap: {
          stageIds: strandIndex === 0 ? stageIds.slice() : [],
          recommendedOrder: 2000 + strandIndex
        }
      });
    }
  }

  function makeDisciplineTopicCourse(disciplineId, strandTitle, strandIndex, topicTitle, topicIndex, stageIds) {
    var discipline = getDisciplineMeta(disciplineId);
    var strandSlug = sanitizeFragment(strandTitle) || ('strand-' + (strandIndex + 1));
    var topicSlug = sanitizeFragment(topicTitle) || ('topic-' + (topicIndex + 1));
    var nodeId = getGeneratedTopicNodeId(disciplineId, strandIndex, topicIndex);
    var parentNodeId = getGeneratedStrandNodeId(disciplineId, strandIndex);
    var courseId = 'course-' + disciplineId + '-topic-' + (strandIndex + 1) + '-' + (topicIndex + 1);
    var lessonAId = 'lesson-' + disciplineId + '-' + strandSlug + '-' + topicSlug + '-scope';
    var lessonBId = 'lesson-' + disciplineId + '-' + strandSlug + '-' + topicSlug + '-debate';
    var quizId = 'quiz-' + disciplineId + '-' + strandSlug + '-' + topicSlug;
    var testId = 'test-' + disciplineId + '-' + strandSlug + '-' + topicSlug;
    var labId = 'lab-' + disciplineId + '-' + strandSlug + '-' + topicSlug;
    var projectId = 'project-' + disciplineId + '-' + strandSlug + '-' + topicSlug;
    var mediaId = 'media-' + disciplineId + '-' + strandSlug + '-' + topicSlug;
    var siblingTopics = getStrandTopics(disciplineId, strandTitle, discipline.name).filter(function(candidate) {
      return candidate !== topicTitle;
    });
    var studyMaterial = [topicTitle, strandTitle].concat(siblingTopics.slice(0, 2));

    registerCourseBundle(
      courseId,
      {
        id: courseId,
        disciplineId: disciplineId,
        nodeId: nodeId,
        title: topicTitle,
        summary: 'Topic-level scaffold for ' + topicTitle + ' inside ' + strandTitle + ' for ' + discipline.name + '.',
        estimatedTime: '1-3 hours',
        learningObjectives: studyMaterial.slice(0, 3).map(function(topic) {
          return 'Explain the role of ' + topic + ' inside ' + strandTitle + '.';
        }),
        canonicalSource: 'data/scaffold-content.js',
        studyMaterial: studyMaterial,
        lessonIds: [lessonAId, lessonBId],
        quizIds: [quizId],
        testId: testId,
        labIds: [labId],
        projectIds: [projectId],
        mediaIds: [mediaId],
        masteryCriteria: [
          'Complete the topic lessons for ' + topicTitle + '.',
          'Pass the topic test at 80 percent or above.',
          'Use the project to identify what the authored expansion should include.'
        ]
      },
      [
        makeLesson(lessonAId, topicTitle + ': Core Scope', 'Survey the central scope, vocabulary, and stakes of ' + topicTitle + '.', studyMaterial, discipline.name),
        makeLesson(lessonBId, topicTitle + ': Debates and Extensions', 'Trace how ' + topicTitle + ' connects to broader debates, methods, and applications in ' + strandTitle + '.', studyMaterial.slice().reverse(), discipline.name)
      ],
      makeQuiz(quizId, topicTitle + ' Check', studyMaterial),
      makeTest(testId, topicTitle + ' Test', studyMaterial),
      makeLab(labId, topicTitle + ' Lab', 'A focused synthesis artifact for ' + topicTitle, studyMaterial),
      makeProject(projectId, topicTitle + ' Project', 'How should the academy deepen its coverage of ' + topicTitle + '?', studyMaterial),
      makeMedia(mediaId, topicTitle, 'Use this as a focused starting reference while detailed readings and source packs are added.')
    );

    var conceptId = 'concept-' + disciplineId + '-topic-' + (strandIndex + 1) + '-' + (topicIndex + 1);
    if (!curriculum.knowledgeConcepts.some(function(concept) { return concept.conceptId === conceptId; })) {
      curriculum.knowledgeConcepts.push({
        conceptId: conceptId,
        title: topicTitle,
        type: 'discipline-topic',
        disciplineId: disciplineId,
        summary: 'Generated topic scaffold for ' + topicTitle + ' in ' + strandTitle + '.',
        relatedCourseIds: [courseId],
        relatedLessonIds: [lessonAId, lessonBId],
        relationIds: ['relation-' + disciplineId + '-strand-' + (strandIndex + 1) + '-to-topic-' + (topicIndex + 1)],
        explorationPrompts: [
          'What primary sources or canonical examples belong under ' + topicTitle + '?',
          'Which other topics should connect to ' + topicTitle + ' in the full academy graph?'
        ]
      });
    }

    createRelationIfMissing({
      id: 'relation-' + disciplineId + '-strand-' + (strandIndex + 1) + '-to-topic-' + (topicIndex + 1),
      fromId: 'concept-' + disciplineId + '-strand-' + (strandIndex + 1),
      toId: conceptId,
      label: 'Expands the strand through ' + topicTitle,
      relationType: 'strand-to-topic',
      strength: 'scaffolded'
    });

    if (!curriculum.surfaceMappings.some(function(mapping) { return mapping.courseId === courseId; })) {
      curriculum.surfaceMappings.push({
        courseId: courseId,
        disciplineId: disciplineId,
        skillTree: {
          nodeId: nodeId,
          unlockRule: 'all-prereqs-mastered',
          prerequisiteNodeIds: [parentNodeId],
          masteryRule: { type: 'all-required-assessments-passed' }
        },
        knowledgeTree: {
          conceptIds: [conceptId],
          relationIds: ['relation-' + disciplineId + '-strand-' + (strandIndex + 1) + '-to-topic-' + (topicIndex + 1)]
        },
        roadmap: {
          stageIds: topicIndex === 0 ? stageIds.slice() : [],
          recommendedOrder: 3000 + strandIndex * 10 + topicIndex
        }
      });
    }
  }

  function makeDisciplineOverviewCourse(disciplineId) {
    var discipline = getDisciplineMeta(disciplineId);
    var customBlueprint = getOverviewCourseBlueprint(disciplineId);
    var nodeId = getGeneratedOverviewNodeId(disciplineId);
    var courseId = 'course-' + disciplineId + '-overview';
    var quizId = 'quiz-' + disciplineId + '-overview';
    var testId = 'test-' + disciplineId + '-overview';
    var labId = 'lab-' + disciplineId + '-overview';
    var projectId = 'project-' + disciplineId + '-overview';
    var mediaId = 'media-' + disciplineId + '-overview';
    var overviewTopics = getRenderableStrands(disciplineId).slice(0, 6);
    var lessonRecords;
    var lessonIds;
    var learningObjectives;
    var summary;
    var masteryCriteria;
    var courseSections;

    if (customBlueprint) {
      lessonRecords = customBlueprint.lessons.map(function(lesson, index) {
        return makeDetailedLesson(
          'lesson-' + disciplineId + '-overview-' + (lesson.slug || ('part-' + (index + 1))),
          lesson.title,
          lesson.summary,
          lesson.keyTerms,
          lesson.points,
          lesson.readings,
          discipline.name,
          lesson.activities
        );
      });
      lessonIds = lessonRecords.map(function(lesson) { return lesson.id; });
      learningObjectives = Array.isArray(customBlueprint.learningObjectives) ? customBlueprint.learningObjectives.slice() : [];
      summary = customBlueprint.summary || discipline.summary;
      masteryCriteria = Array.isArray(customBlueprint.masteryCriteria) ? customBlueprint.masteryCriteria.slice() : [];
      courseSections = Array.isArray(customBlueprint.sections) ? customBlueprint.sections.slice() : [];
      if (Array.isArray(customBlueprint.assessmentTopics) && customBlueprint.assessmentTopics.length) {
        overviewTopics = customBlueprint.assessmentTopics.slice();
      }
    } else {
      var lessonAId = 'lesson-' + disciplineId + '-overview-scope';
      var lessonBId = 'lesson-' + disciplineId + '-overview-roadmap';
      var lessonCId = 'lesson-' + disciplineId + '-overview-connections';
      lessonRecords = [
        makeLesson(lessonAId, discipline.name + ': Scope and Field Map', 'Map the field, its major strands, and how the academy currently organizes the discipline.', discipline.strands, discipline.name),
        makeLesson(lessonBId, discipline.name + ': Roadmap and Expansion', 'Use the scaffold to decide where detailed authored lessons, sources, and activities should expand next.', discipline.strands.slice().reverse(), discipline.name),
        makeLesson(lessonCId, discipline.name + ': Core Topics and Connections', 'Survey the first wave of topic clusters that branch from the major strands in ' + discipline.name + '.', overviewTopics, discipline.name)
      ];
      lessonIds = [lessonAId, lessonBId, lessonCId];
      learningObjectives = discipline.strands.slice(0, 3).map(function(strand) {
        return 'Locate ' + strand + ' within the overall structure of ' + discipline.name + '.';
      });
      summary = discipline.summary;
      masteryCriteria = [
        'Complete the overview lessons.',
        'Pass the overview check.',
        'Draft a next-step plan for moving into the strand courses.'
      ];
      courseSections = [];
    }

    registerCourseBundle(
      courseId,
      {
        id: courseId,
        disciplineId: disciplineId,
        nodeId: nodeId,
        title: discipline.name + ' Overview',
        summary: summary,
        estimatedTime: customBlueprint ? '4-6 hours' : '1-2 hours',
        learningObjectives: learningObjectives,
        canonicalSource: 'data/scaffold-content.js',
        sections: courseSections,
        studyMaterial: getRenderableStrands(disciplineId).concat(overviewTopics),
        lessonIds: lessonIds,
        quizIds: [quizId],
        testId: testId,
        labIds: [labId],
        projectIds: [projectId],
        mediaIds: [mediaId],
        masteryCriteria: masteryCriteria
      },
      lessonRecords,
      makeQuiz(quizId, discipline.name + ' Overview Check', overviewTopics),
      makeTest(testId, discipline.name + ' Overview Test', overviewTopics),
      makeLab(labId, discipline.name + ' Overview Lab', 'A field map for ' + discipline.name, overviewTopics),
      makeProject(projectId, discipline.name + ' Overview Project', 'How should ' + discipline.name + ' expand from scaffold to full program?', overviewTopics),
      makeMedia(mediaId, discipline.name, 'Use this as the quick orientation reference for the discipline.')
    );

    if (!curriculum.surfaceMappings.some(function(mapping) { return mapping.courseId === courseId; })) {
      curriculum.surfaceMappings.push({
        courseId: courseId,
        disciplineId: disciplineId,
        skillTree: {
          nodeId: nodeId,
          unlockRule: 'starting-node',
          prerequisiteNodeIds: [],
          masteryRule: { type: 'all-required-assessments-passed' }
        },
        knowledgeTree: {
          conceptIds: ['concept-' + disciplineId + '-overview'],
          relationIds: []
        },
        roadmap: {
          stageIds: [],
          recommendedOrder: 1900
        }
      });
    }

    if (!curriculum.knowledgeConcepts.some(function(concept) { return concept.conceptId === ('concept-' + disciplineId + '-overview'); })) {
      curriculum.knowledgeConcepts.push({
        conceptId: 'concept-' + disciplineId + '-overview',
        title: discipline.name + ' Overview',
        type: 'discipline-overview',
        disciplineId: disciplineId,
        summary: discipline.summary,
        relatedCourseIds: [courseId],
        relatedLessonIds: lessonIds.slice(0, 2),
        relationIds: [],
        explorationPrompts: [
          'What are the main strands inside ' + discipline.name + '?',
          'Which strand should expand first into authored course content?'
        ]
      });
    }
  }

  function makeGeneratedDisciplineTree(disciplineId) {
    var discipline = getDisciplineMeta(disciplineId);
    var renderableStrands = getRenderableStrands(disciplineId);

    if (!disciplineUsesTopicNodes(disciplineId)) {
      var rows = Math.ceil(renderableStrands.length / 2);
      var worldHeightCustom = Math.max(1180, 180 + rows * 190);
      var customNodes = [
        {
          id: getGeneratedOverviewNodeId(disciplineId),
          title: discipline.name + ' Overview',
          shortTitle: 'Overview',
          tier: 'Foundations',
          xp: 12,
          x: 60,
          y: Math.max(220, Math.round(worldHeightCustom / 2) - 70),
          prereqs: [],
          topics: [discipline.summary].concat(renderableStrands.slice(0, 3))
        }
      ];

      renderableStrands.forEach(function(strandTitle, index) {
        var leftColumnCount = Math.ceil(renderableStrands.length / 2);
        var column = index < leftColumnCount ? 0 : 1;
        var row = column === 0 ? index : index - leftColumnCount;
        var strandBlueprint = getStrandCourseBlueprint(disciplineId, strandTitle);
        customNodes.push({
          id: getGeneratedStrandNodeId(disciplineId, index),
          title: strandTitle,
          shortTitle: strandTitle,
          tier: 'Subject Domains',
          xp: 18,
          x: column === 0 ? 420 : 980,
          y: 80 + row * 190,
          prereqs: [getGeneratedOverviewNodeId(disciplineId)],
          topics: [strandTitle].concat((strandBlueprint && strandBlueprint.assessmentTopics) ? strandBlueprint.assessmentTopics.slice(0, 4) : [])
        });
      });

      return {
        id: disciplineId,
        domainId: discipline.domainId,
        name: discipline.name,
        source: 'schools-of-thought.md',
        sourceType: 'generated',
        generated: true,
        world: { width: 1580, height: worldHeightCustom },
        tiers: ['Foundations', 'Subject Domains'],
        nodes: customNodes
      };
    }

    var worldHeight = Math.max(1080, 220 + renderableStrands.length * 220);
    var nodes = [
      {
        id: getGeneratedOverviewNodeId(disciplineId),
        title: discipline.name + ' Overview',
        shortTitle: 'Overview',
        tier: 'Foundations',
        xp: 12,
        x: 60,
        y: 320,
        prereqs: [],
        topics: [discipline.summary].concat(renderableStrands.slice(0, 2))
      }
    ];

    renderableStrands.forEach(function(strandTitle, index) {
      var strandY = 100 + index * 220;
      var topicTitles = getVisibleGeneratedTopicTitles(disciplineId, strandTitle, discipline.name);
      nodes.push({
        id: getGeneratedStrandNodeId(disciplineId, index),
        title: strandTitle,
        shortTitle: strandTitle,
        tier: index < 2 ? 'Core Strands' : 'Advanced Strands',
        xp: 18,
        x: 360,
        y: strandY,
        prereqs: [getGeneratedOverviewNodeId(disciplineId)],
        topics: [strandTitle].concat(topicTitles)
      });

      topicTitles.forEach(function(topicTitle, topicIndex) {
        var centeredIndex = topicIndex - ((topicTitles.length - 1) / 2);
        nodes.push({
          id: getGeneratedTopicNodeId(disciplineId, index, topicIndex),
          title: topicTitle,
          shortTitle: topicTitle,
          tier: 'Topic Clusters',
          xp: 10,
          x: 720 + topicIndex * 270,
          y: strandY + centeredIndex * 84,
          prereqs: [getGeneratedStrandNodeId(disciplineId, index)],
          topics: [topicTitle, strandTitle].concat(topicTitles.filter(function(candidate) { return candidate !== topicTitle; }).slice(0, 3))
        });
      });
    });

    return {
      id: disciplineId,
      domainId: discipline.domainId,
      name: discipline.name,
      source: 'schools-of-thought.md',
      sourceType: 'generated',
      generated: true,
      world: { width: 1820, height: worldHeight },
      tiers: ['Foundations', 'Core Strands', 'Advanced Strands', 'Topic Clusters'],
      nodes: nodes
    };
  }

  function makeRoadmapStageCourse(stage) {
    var discipline = getDisciplineMeta(stage.disciplineId);
    var stageIdSlug = sanitizeFragment(stage.id);
    var courseId = 'course-stage-' + stage.id;
    var lessonAId = 'lesson-stage-' + stageIdSlug + '-scope';
    var lessonBId = 'lesson-stage-' + stageIdSlug + '-sequence';
    var quizId = 'quiz-stage-' + stageIdSlug;
    var testId = 'test-stage-' + stageIdSlug;
    var labId = 'lab-stage-' + stageIdSlug;
    var projectId = 'project-stage-' + stageIdSlug;
    var mediaId = 'media-stage-' + stageIdSlug;
    var topics = [stage.title, stage.description || 'Stage progression'].concat(discipline.strands.slice(0, 2));
    registerCourseBundle(
      courseId,
      {
        id: courseId,
        disciplineId: stage.disciplineId,
        title: stage.title,
        summary: stage.description || ('Roadmap stage scaffold for ' + discipline.name + '.'),
        estimatedTime: '1-3 hours',
        learningObjectives: [
          'Explain the purpose of the ' + stage.title + ' stage.',
          'Identify which parts of ' + discipline.name + ' this stage emphasizes.',
          'Use the stage scaffold to plan the next authored lessons.'
        ],
        canonicalSource: 'data/scaffold-content.js',
        studyMaterial: topics,
        lessonIds: [lessonAId, lessonBId],
        quizIds: [quizId],
        testId: testId,
        labIds: [labId],
        projectIds: [projectId],
        mediaIds: [mediaId],
        masteryCriteria: [
          'Complete the stage orientation.',
          'Pass the stage check.',
          'Turn the stage into a written next-action plan.'
        ]
      },
      [
        makeLesson(lessonAId, stage.title + ': Why This Stage Exists', 'Orient the learner to the role of this stage inside the roadmap.', topics, discipline.name),
        makeLesson(lessonBId, stage.title + ': Sequencing and Next Actions', 'Outline how this stage should unfold across lessons, labs, and projects.', topics.slice().reverse(), discipline.name)
      ],
      makeQuiz(quizId, stage.title + ' Check', topics),
      makeTest(testId, stage.title + ' Test', topics),
      makeLab(labId, stage.title + ' Lab', 'A stage planning sheet for ' + stage.title, topics),
      makeProject(projectId, stage.title + ' Project', 'What should this roadmap stage unlock next?', topics),
      makeMedia(mediaId, stage.title, 'Use this as a lightweight orientation source while the stage is still scaffolded.')
    );
  }

  Object.keys(disciplineTrees).forEach(function(disciplineId) {
    var tree = disciplineTrees[disciplineId];
    (tree.nodes || []).forEach(function(node, index) {
      if (!courses[node.id]) {
        makeGeneratedNodeCourse(disciplineId, node, index);
      }
    });
  });

  makeDisciplineList().forEach(function(discipline) {
    if (discipline.hasTree) return;
    var meta = getDisciplineMeta(discipline.id);
    var renderableStrands = getRenderableStrands(discipline.id);
    var stageIds = [];
    roadmapTracks.forEach(function(track) {
      (track.stages || []).forEach(function(stage) {
        if (stage.disciplineId === discipline.id) stageIds.push(stage.id);
      });
    });
    makeDisciplineOverviewCourse(discipline.id);
    renderableStrands.forEach(function(strandTitle, index) {
      makeDisciplineStrandCourse(discipline.id, strandTitle, index, stageIds);
      if (disciplineUsesTopicNodes(discipline.id)) {
        getVisibleGeneratedTopicTitles(discipline.id, strandTitle, meta.name).forEach(function(topicTitle, topicIndex) {
          makeDisciplineTopicCourse(discipline.id, strandTitle, index, topicTitle, topicIndex, stageIds);
        });
      }
    });
    generatedDisciplineTrees[discipline.id] = makeGeneratedDisciplineTree(discipline.id);
  });

  roadmapTracks.forEach(function(track) {
    (track.stages || []).forEach(function(stage) {
      makeRoadmapStageCourse(stage);
    });
  });

  window.HUMAN_ACADEMY_GENERATED_DISCIPLINE_TREES = generatedDisciplineTrees;
  window.HUMAN_ACADEMY_ALL_DISCIPLINE_TREES = Object.assign({}, disciplineTrees, generatedDisciplineTrees);
})();