// Extracted playable content from index.html
const disciplineTrees = {
      philosophy: {
        id: 'philosophy',
        domainId: 'humanities',
        name: 'Philosophy',
        source: 'schools-of-thought.md',
        world: { width: 1700, height: 1050 },
        tiers: ['Foundations', 'Historical Core', 'Major Branches', 'Specialization', 'Frontier'],
        nodes: [
          // â”€â”€ Foundations â”€â”€
          { id: 'phil-foundations', title: 'Foundations & Method', shortTitle: 'Method', tier: 'Foundations', xp: 20, x: 60, y: 240, prereqs: [], topics: ['What philosophy is', 'How to read philosophy', 'Conceptual analysis', 'Thought experiments', 'Philosophical writing'] },
          { id: 'phil-logic', title: 'Logic', shortTitle: 'Logic', tier: 'Foundations', xp: 20, x: 60, y: 480, prereqs: [], topics: ['Informal logic', 'Propositional logic', 'Predicate logic', 'Modal logic', 'Philosophy of logic'] },
          // â”€â”€ Historical Core â”€â”€
          { id: 'phil-hist-ancient', title: 'Ancient Philosophy', shortTitle: 'Ancient', tier: 'Historical Core', xp: 25, x: 340, y: 40, prereqs: ['phil-foundations', 'phil-logic'], topics: ['Pre-Socratics', 'Socrates', 'Plato', 'Aristotle', 'Hellenistic schools', 'Neoplatonism'] },
          { id: 'phil-hist-medieval', title: 'Medieval Philosophy', shortTitle: 'Medieval', tier: 'Historical Core', xp: 25, x: 340, y: 160, prereqs: ['phil-hist-ancient'], topics: ['Augustine', 'Islamic philosophy', 'Jewish philosophy', 'Scholasticism', 'Aquinas', 'Ockham'] },
          { id: 'phil-hist-early-modern', title: 'Early Modern Philosophy', shortTitle: 'Early Modern', tier: 'Historical Core', xp: 25, x: 340, y: 280, prereqs: ['phil-hist-medieval'], topics: ['Rationalism: Descartes, Spinoza, Leibniz', 'Empiricism: Locke, Berkeley, Hume', 'Social contract theory', 'Enlightenment'] },
          { id: 'phil-hist-19th', title: '19th Century Philosophy', shortTitle: '19th Century', tier: 'Historical Core', xp: 25, x: 340, y: 400, prereqs: ['phil-hist-early-modern'], topics: ['Kant and German Idealism', 'Hegel', 'Schopenhauer', 'Kierkegaard', 'Utilitarianism', 'Marx', 'Nietzsche', 'Pragmatism'] },
          { id: 'phil-hist-continental', title: '20th C Continental', shortTitle: 'Continental', tier: 'Historical Core', xp: 25, x: 340, y: 520, prereqs: ['phil-hist-19th'], topics: ['Phenomenology', 'Existentialism', 'Hermeneutics', 'Frankfurt School', 'Structuralism', 'Post-Structuralism'] },
          { id: 'phil-hist-analytic', title: '20th C Analytic', shortTitle: 'Analytic', tier: 'Historical Core', xp: 25, x: 340, y: 640, prereqs: ['phil-hist-19th'], topics: ['Frege', 'Russell', 'Wittgenstein', 'Logical positivism', 'Ordinary language', 'Quine'] },
          { id: 'phil-hist-eastern', title: 'Eastern Philosophy', shortTitle: 'Eastern', tier: 'Historical Core', xp: 25, x: 340, y: 800, prereqs: ['phil-foundations'], topics: ['Indian philosophy', 'Chinese philosophy', 'Japanese philosophy', 'Buddhist philosophy', 'African philosophy'] },
          // â”€â”€ Major Branches â”€â”€
          { id: 'phil-metaphysics', title: 'Metaphysics', shortTitle: 'Metaphysics', tier: 'Major Branches', xp: 30, x: 680, y: 40, prereqs: ['phil-hist-ancient', 'phil-logic'], topics: ['Ontology', 'Universals and particulars', 'Space and time', 'Causation', 'Free will and determinism', 'Personal identity'] },
          { id: 'phil-epistemology', title: 'Epistemology', shortTitle: 'Epistemology', tier: 'Major Branches', xp: 30, x: 680, y: 160, prereqs: ['phil-hist-ancient', 'phil-logic'], topics: ['Sources of knowledge', 'Justified true belief', 'Gettier problem', 'Skepticism', 'Social epistemology', 'Epistemic injustice'] },
          { id: 'phil-ethics', title: 'Ethics & Moral Philosophy', shortTitle: 'Ethics', tier: 'Major Branches', xp: 30, x: 680, y: 280, prereqs: ['phil-hist-ancient', 'phil-foundations'], topics: ['Metaethics', 'Deontology', 'Consequentialism', 'Virtue ethics', 'Applied ethics', 'Moral psychology'] },
          { id: 'phil-political', title: 'Political Philosophy', shortTitle: 'Political', tier: 'Major Branches', xp: 30, x: 680, y: 400, prereqs: ['phil-ethics'], topics: ['Liberalism', 'Communitarianism', 'Marxist critical theory', 'Democracy', 'Justice and rights', 'Jurisprudence'] },
          { id: 'phil-mind', title: 'Philosophy of Mind', shortTitle: 'Mind', tier: 'Major Branches', xp: 30, x: 680, y: 520, prereqs: ['phil-metaphysics', 'phil-epistemology'], topics: ['Mind-body problem', 'Consciousness', 'Intentionality', 'Embodied cognition', 'AI and minds'] },
          { id: 'phil-language', title: 'Philosophy of Language', shortTitle: 'Language', tier: 'Major Branches', xp: 30, x: 680, y: 640, prereqs: ['phil-logic', 'phil-hist-analytic'], topics: ['Meaning', 'Reference', 'Semantics and pragmatics', 'Speech acts', 'Language and thought'] },
          { id: 'phil-science', title: 'Philosophy of Science', shortTitle: 'Science', tier: 'Major Branches', xp: 30, x: 680, y: 760, prereqs: ['phil-logic', 'phil-epistemology'], topics: ['Scientific method', 'Demarcation', 'Realism vs anti-realism', 'Explanation', 'Philosophy of physics', 'Philosophy of biology'] },
          { id: 'phil-aesthetics', title: 'Aesthetics', shortTitle: 'Aesthetics', tier: 'Major Branches', xp: 30, x: 680, y: 880, prereqs: ['phil-hist-ancient', 'phil-ethics'], topics: ['Nature of art', 'Aesthetic experience', 'Beauty and sublime', 'Philosophy of music', 'Philosophy of film', 'Critical aesthetics'] },
          // â”€â”€ Specialization â”€â”€
          { id: 'phil-religion', title: 'Philosophy of Religion', shortTitle: 'Religion', tier: 'Specialization', xp: 40, x: 1040, y: 100, prereqs: ['phil-metaphysics', 'phil-epistemology'], topics: ['Arguments for God', 'Problem of evil', 'Faith and reason', 'Religious pluralism', 'Mysticism'] },
          { id: 'phil-math', title: 'Philosophy of Mathematics', shortTitle: 'Math', tier: 'Specialization', xp: 40, x: 1040, y: 300, prereqs: ['phil-logic', 'phil-science'], topics: ['Logicism', 'Formalism', 'Intuitionism', 'Platonism', 'Structuralism'] },
          { id: 'phil-technology', title: 'Philosophy of Technology', shortTitle: 'Technology', tier: 'Specialization', xp: 40, x: 1040, y: 500, prereqs: ['phil-science', 'phil-mind'], topics: ['Heidegger on technology', 'Device paradigm', 'Philosophy of internet', 'Transhumanism'] },
          { id: 'phil-history-meta', title: 'Philosophy of History', shortTitle: 'Phil. History', tier: 'Specialization', xp: 40, x: 1040, y: 700, prereqs: ['phil-epistemology', 'phil-political'], topics: ['Historical explanation', 'Narrative theory', 'Hermeneutics', 'Memory and trauma', 'Metahistory'] },
          // â”€â”€ Frontier â”€â”€
          { id: 'phil-consciousness', title: 'Consciousness Studies', shortTitle: 'Consciousness', tier: 'Frontier', xp: 50, x: 1380, y: 40, prereqs: ['phil-mind'], topics: ['Hard problem', 'Attention schema theory', 'Neurophenomenology', 'Predictive processing', 'LLM consciousness debate'] },
          { id: 'phil-social-ontology', title: 'Social Ontology', shortTitle: 'Social Ont.', tier: 'Frontier', xp: 50, x: 1380, y: 170, prereqs: ['phil-metaphysics', 'phil-political'], topics: ['Collective intentionality', 'Social construction', 'Group agency', 'Institutional ontology'] },
          { id: 'phil-formal', title: 'Formal Philosophy', shortTitle: 'Formal Phil.', tier: 'Frontier', xp: 50, x: 1380, y: 300, prereqs: ['phil-logic', 'phil-epistemology'], topics: ['Formal epistemology', 'Deontic logic', 'Decision theory', 'Game theory and philosophy'] },
          { id: 'phil-xphi', title: 'Experimental Philosophy', shortTitle: 'X-Phi', tier: 'Frontier', xp: 50, x: 1380, y: 430, prereqs: ['phil-epistemology', 'phil-ethics'], topics: ['Cross-cultural intuitions', 'Knobe effect', 'Moral psychology', 'Methodological debates'] },
          { id: 'phil-race-gender', title: 'Philosophy of Race & Gender', shortTitle: 'Race/Gender', tier: 'Frontier', xp: 50, x: 1380, y: 560, prereqs: ['phil-political', 'phil-epistemology'], topics: ['Race as social construction', 'Gender ontology', 'Intersectionality', 'Epistemic oppression'] },
          { id: 'phil-ai-future', title: 'Philosophy of AI & Future', shortTitle: 'AI & Future', tier: 'Frontier', xp: 50, x: 1380, y: 690, prereqs: ['phil-mind', 'phil-technology'], topics: ['Alignment problem', 'Moral status of AI', 'Digital ethics', 'Posthumanism', 'Simulation argument'] },
          { id: 'phil-global', title: 'Global & Decolonial Philosophy', shortTitle: 'Global Phil.', tier: 'Frontier', xp: 50, x: 1380, y: 820, prereqs: ['phil-hist-eastern', 'phil-political'], topics: ['African philosophy', 'Latin American philosophy', 'Indigenous philosophies', 'Decolonizing philosophy', 'Comparative methodology'] }
        ]
      },
      history: {
        id: 'history',
        domainId: 'humanities',
        name: 'History',
        source: 'schools-of-thought.md',
        world: { width: 1900, height: 1320 },
        tiers: ['Foundations', 'Ancient World', 'Post-Classical', 'Modern Era', 'Specialist & Frontier'],
        nodes: [
          // â”€â”€ Foundations â”€â”€
          { id: 'hist-methods', title: 'Historical Methods', shortTitle: 'Methods', tier: 'Foundations', xp: 20, x: 60, y: 200, prereqs: [], topics: ['What is history?', 'Primary vs secondary sources', 'Source criticism', 'Periodization', 'Causation in history'] },
          { id: 'hist-historiography', title: 'Historiography', shortTitle: 'Historiography', tier: 'Foundations', xp: 20, x: 60, y: 440, prereqs: [], topics: ['Rankean historicism', 'Annales School', 'Marxist historiography', 'Social history', 'Postmodern history', 'Digital humanities'] },
          { id: 'hist-archaeology', title: 'Archaeology & Dating', shortTitle: 'Archaeology', tier: 'Foundations', xp: 20, x: 60, y: 680, prereqs: [], topics: ['Stratigraphy', 'Radiocarbon dating', 'Dendrochronology', 'Ancient DNA', 'Remote sensing & LiDAR', 'Ethnoarchaeology'] },
          // â”€â”€ Ancient World â”€â”€
          { id: 'hist-prehistory', title: 'Prehistory & Human Origins', shortTitle: 'Prehistory', tier: 'Ancient World', xp: 25, x: 360, y: 40, prereqs: ['hist-methods', 'hist-archaeology'], topics: ['Hominin evolution', 'Out of Africa', 'Paleolithic cultures', 'Neolithic Revolution', 'GÃ¶bekli Tepe', 'Behavioral modernity'] },
          { id: 'hist-mesopotamia', title: 'Mesopotamia & Near East', shortTitle: 'Mesopotamia', tier: 'Ancient World', xp: 25, x: 360, y: 170, prereqs: ['hist-prehistory'], topics: ['Sumer & Akkad', 'Cuneiform & writing', 'Babylonia', 'Assyrian Empire', 'Hittites', 'Achaemenid Persia'] },
          { id: 'hist-egypt', title: 'Ancient Egypt', shortTitle: 'Egypt', tier: 'Ancient World', xp: 25, x: 360, y: 300, prereqs: ['hist-prehistory'], topics: ['Old Kingdom pyramids', 'Middle Kingdom', 'New Kingdom', 'Akhenaten & Tutankhamun', 'Ptolemaic Egypt', 'Hieroglyphics & Rosetta Stone'] },
          { id: 'hist-greece', title: 'Ancient Greece', shortTitle: 'Greece', tier: 'Ancient World', xp: 25, x: 360, y: 430, prereqs: ['hist-mesopotamia'], topics: ['Minoan & Mycenaean', 'Archaic poleis', 'Persian Wars', 'Athenian democracy', 'Peloponnesian War', 'Alexander & Hellenism'] },
          { id: 'hist-rome', title: 'Ancient Rome', shortTitle: 'Rome', tier: 'Ancient World', xp: 25, x: 360, y: 560, prereqs: ['hist-greece'], topics: ['Roman Republic', 'Punic Wars', 'Caesar & Augustus', 'Principate & Empire', 'Roman law & engineering', 'Fall of the West'] },
          { id: 'hist-ancient-asia', title: 'Ancient India & China', shortTitle: 'Asia', tier: 'Ancient World', xp: 25, x: 360, y: 690, prereqs: ['hist-prehistory'], topics: ['Indus Valley', 'Vedic Age', 'Maurya & Gupta', 'Shang & Zhou', 'Qin unification', 'Han Dynasty & Silk Road'] },
          { id: 'hist-ancient-americas', title: 'Ancient Americas & Africa', shortTitle: 'Americas/Africa', tier: 'Ancient World', xp: 25, x: 360, y: 820, prereqs: ['hist-prehistory'], topics: ['Olmec & early Maya', 'ChavÃ­n & Norte Chico', 'Nubia & Kush', 'Aksum', 'Carthage', 'Nok culture'] },
          // â”€â”€ Post-Classical â”€â”€
          { id: 'hist-late-antiquity', title: 'Late Antiquity & Byzantium', shortTitle: 'Late Antiquity', tier: 'Post-Classical', xp: 30, x: 720, y: 40, prereqs: ['hist-rome'], topics: ['Diocletian & Constantine', 'Christianization', 'Germanic kingdoms', 'Justinian', 'Plague of Justinian', 'Byzantine culture'] },
          { id: 'hist-islamic', title: 'Islamic World', shortTitle: 'Islamic World', tier: 'Post-Classical', xp: 30, x: 720, y: 200, prereqs: ['hist-mesopotamia', 'hist-rome'], topics: ['Muhammad & Quran', 'Rashidun & Umayyad', 'Abbasid Golden Age', 'House of Wisdom', 'Crusades (Islamic view)', 'Mongol sack of Baghdad'] },
          { id: 'hist-medieval-europe', title: 'Medieval Europe', shortTitle: 'Medieval', tier: 'Post-Classical', xp: 30, x: 720, y: 360, prereqs: ['hist-late-antiquity'], topics: ['Carolingians', 'Viking Age', 'Feudalism & manorialism', 'Crusades', 'Scholasticism', 'Black Death 1347'] },
          { id: 'hist-medieval-asia', title: 'Medieval Asia', shortTitle: 'Med. Asia', tier: 'Post-Classical', xp: 30, x: 720, y: 520, prereqs: ['hist-ancient-asia'], topics: ['Tang & Song China', 'Mongol Empire', 'Delhi Sultanate', 'Heian Japan & samurai', 'Khmer Empire', 'Pax Mongolica'] },
          { id: 'hist-medieval-africa-am', title: 'Medieval Africa & Americas', shortTitle: 'Med. Afr/Am', tier: 'Post-Classical', xp: 30, x: 720, y: 680, prereqs: ['hist-ancient-americas'], topics: ['Ghana, Mali & Songhai', 'Mansa Musa & Timbuktu', 'Great Zimbabwe', 'Swahili Coast', 'Classic Maya collapse', 'Aztec & Inca empires'] },
          // â”€â”€ Modern Era â”€â”€
          { id: 'hist-early-modern', title: 'Renaissance & Reformation', shortTitle: 'Renaissance', tier: 'Modern Era', xp: 35, x: 1080, y: 40, prereqs: ['hist-medieval-europe'], topics: ['Italian Renaissance', 'Gutenberg printing press', 'Age of Exploration', 'Protestant Reformation', 'Scientific Revolution', 'Ottoman & Mughal empires'] },
          { id: 'hist-enlightenment', title: 'Enlightenment & Revolutions', shortTitle: 'Enlightenment', tier: 'Modern Era', xp: 35, x: 1080, y: 200, prereqs: ['hist-early-modern'], topics: ['Enlightenment thinkers', 'Atlantic slave trade', 'American Revolution 1776', 'French Revolution 1789', 'Haitian Revolution', 'Rise of nationalism'] },
          { id: 'hist-industrial', title: 'Industrial Age & Imperialism', shortTitle: 'Industrial', tier: 'Modern Era', xp: 35, x: 1080, y: 360, prereqs: ['hist-enlightenment'], topics: ['British industrialization', 'Marx & socialism', '1848 revolutions', 'Partition of Africa', 'Meiji Restoration', 'American Civil War'] },
          { id: 'hist-world-wars', title: 'World Wars 1900â€“1945', shortTitle: 'World Wars', tier: 'Modern Era', xp: 35, x: 1080, y: 520, prereqs: ['hist-industrial'], topics: ['WWI causes & trenches', 'Russian Revolution', 'Rise of fascism', 'Great Depression', 'WWII theaters', 'Holocaust'] },
          { id: 'hist-cold-war', title: 'Cold War & Decolonization', shortTitle: 'Cold War', tier: 'Modern Era', xp: 35, x: 1080, y: 680, prereqs: ['hist-world-wars'], topics: ['NATO vs Warsaw Pact', 'Korean & Vietnam Wars', 'Decolonization of Africa/Asia', 'Space race', 'Fall of Berlin Wall 1989', 'Soviet collapse 1991'] },
          { id: 'hist-contemporary', title: 'Contemporary World', shortTitle: 'Contemporary', tier: 'Modern Era', xp: 35, x: 1080, y: 840, prereqs: ['hist-cold-war'], topics: ['9/11 & War on Terror', 'Rise of China', 'Arab Spring', 'Global Financial Crisis 2008', 'COVID-19 pandemic', 'Russia-Ukraine War 2022'] },
          // â”€â”€ Specialist & Frontier â”€â”€
          { id: 'hist-military', title: 'Military History', shortTitle: 'Military', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 40, prereqs: ['hist-world-wars'], topics: ['Strategy & tactics', 'Clausewitz & Sun Tzu', 'Naval warfare', 'Air power', 'Nuclear deterrence', 'Asymmetric warfare'] },
          { id: 'hist-economic', title: 'Economic History', shortTitle: 'Economic', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 200, prereqs: ['hist-industrial', 'hist-enlightenment'], topics: ['Agricultural revolution', 'Trade networks', 'Capitalism origins', 'Great Divergence', 'Bretton Woods', 'Globalization'] },
          { id: 'hist-science-tech', title: 'History of Science & Tech', shortTitle: 'Sci/Tech', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 360, prereqs: ['hist-early-modern', 'hist-industrial'], topics: ['Scientific Revolution', 'Enlightenment science', 'Darwin & evolution', 'Atomic age', 'Space exploration', 'Digital revolution'] },
          { id: 'hist-social-cultural', title: 'Social & Cultural History', shortTitle: 'Social/Cultural', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 520, prereqs: ['hist-medieval-europe', 'hist-enlightenment'], topics: ['History of gender & sexuality', 'History of childhood', 'Slavery & abolition', 'Labor movements', 'History of religion', 'Material culture'] },
          { id: 'hist-environmental', title: 'Environmental History', shortTitle: 'Environmental', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 680, prereqs: ['hist-industrial', 'hist-contemporary'], topics: ['Climate & civilization', 'Columbian Exchange ecology', 'Industrial pollution', 'Conservation movement', 'Anthropocene debate', 'Climate crisis as history'] },
          { id: 'hist-digital-frontier', title: 'Digital & Public History', shortTitle: 'Digital Hist.', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 840, prereqs: ['hist-historiography', 'hist-contemporary'], topics: ['Digital archives', 'GIS for historians', 'Oral history methods', 'Memory studies', 'Big History', 'AI and historiography'] }
        ]
      },
      literature: {
        id: 'literature',
        domainId: 'humanities',
        name: 'Literature',
        source: 'schools-of-thought.md',
        world: { width: 1900, height: 1320 },
        tiers: ['Foundations', 'Classical & Medieval', 'Early Modern & Enlightenment', 'Modern & Contemporary', 'Specialist & Frontier'],
        nodes: [
          // â”€â”€ Foundations â”€â”€
          { id: 'lit-reading', title: 'How to Read Literature', shortTitle: 'Reading', tier: 'Foundations', xp: 20, x: 60, y: 200, prereqs: [], topics: ['Close reading', 'Narrative vs lyric vs dramatic', 'Formalism', 'Reader-response theory', 'Active reading strategies'] },
          { id: 'lit-rhetoric', title: 'Rhetoric & Poetics', shortTitle: 'Rhetoric', tier: 'Foundations', xp: 20, x: 60, y: 440, prereqs: [], topics: ['Aristotle\'s Poetics', 'Rhetorical appeals: ethos, pathos, logos', 'Figures of speech', 'Metre and prosody', 'Genre theory'] },
          { id: 'lit-theory-intro', title: 'Introduction to Literary Theory', shortTitle: 'Theory Intro', tier: 'Foundations', xp: 20, x: 60, y: 680, prereqs: [], topics: ['Structuralism', 'Post-structuralism', 'Marxist criticism', 'Feminist criticism', 'Psychoanalytic criticism', 'New Criticism'] },
          // â”€â”€ Classical & Medieval â”€â”€
          { id: 'lit-ancient-epic', title: 'Ancient Epic & Drama', shortTitle: 'Ancient', tier: 'Classical & Medieval', xp: 25, x: 360, y: 40, prereqs: ['lit-reading', 'lit-rhetoric'], topics: ['Homer: Iliad & Odyssey', 'Hesiod', 'Greek tragedy: Aeschylus, Sophocles, Euripides', 'Aristophanes\' comedy', 'Virgil: Aeneid', 'Ovid: Metamorphoses'] },
          { id: 'lit-classical-prose', title: 'Classical Prose & Poetry', shortTitle: 'Classical Prose', tier: 'Classical & Medieval', xp: 25, x: 360, y: 200, prereqs: ['lit-ancient-epic'], topics: ['Sappho & Greek lyric', 'Pindar', 'Horace & Catullus', 'Lucretius', 'Petronius: Satyricon', 'Apuleius: Golden Ass'] },
          { id: 'lit-eastern-classical', title: 'Eastern Classical Literature', shortTitle: 'Eastern Classical', tier: 'Classical & Medieval', xp: 25, x: 360, y: 360, prereqs: ['lit-reading'], topics: ['Mahabharata & Ramayana', 'Kalidasa: Shakuntala', 'Chinese poetry: Li Bai, Du Fu', 'Tale of Genji (Murasaki Shikibu)', 'Thousand and One Nights', 'Rumi & Persian poetry'] },
          { id: 'lit-medieval', title: 'Medieval Literature', shortTitle: 'Medieval', tier: 'Classical & Medieval', xp: 25, x: 360, y: 520, prereqs: ['lit-ancient-epic'], topics: ['Beowulf', 'Dante: Divine Comedy', 'Chaucer: Canterbury Tales', 'Arthurian romance', 'Troubadour poetry', 'Mystery and morality plays'] },
          { id: 'lit-bible-sacred', title: 'Biblical & Sacred Texts', shortTitle: 'Sacred Texts', tier: 'Classical & Medieval', xp: 25, x: 360, y: 680, prereqs: ['lit-reading'], topics: ['Hebrew Bible as literature', 'Psalms and Song of Solomon', 'Gospels as narrative', 'Quran as literary text', 'Bhagavad Gita', 'Hagiography'] },
          // â”€â”€ Early Modern & Enlightenment â”€â”€
          { id: 'lit-renaissance', title: 'Renaissance Literature', shortTitle: 'Renaissance', tier: 'Early Modern & Enlightenment', xp: 30, x: 720, y: 40, prereqs: ['lit-medieval'], topics: ['Petrarch & sonnets', 'Boccaccio: Decameron', 'Machiavelli', 'Rabelais', 'Montaigne: Essays', 'Cervantes: Don Quixote'] },
          { id: 'lit-shakespeare', title: 'Shakespeare & Elizabethan', shortTitle: 'Shakespeare', tier: 'Early Modern & Enlightenment', xp: 30, x: 720, y: 200, prereqs: ['lit-renaissance'], topics: ['Shakespeare\'s tragedies', 'Shakespeare\'s comedies', 'Shakespeare\'s histories', 'Sonnets', 'Marlowe & Jonson', 'Elizabethan theatre'] },
          { id: 'lit-enlightenment', title: 'Enlightenment & 18th Century', shortTitle: 'Enlightenment', tier: 'Early Modern & Enlightenment', xp: 30, x: 720, y: 360, prereqs: ['lit-shakespeare'], topics: ['Milton: Paradise Lost', 'Swift: Gulliver\'s Travels', 'Defoe: Robinson Crusoe', 'Voltaire: Candide', 'Rise of the novel (Fielding, Richardson)', 'Samuel Johnson'] },
          { id: 'lit-romanticism', title: 'Romanticism', shortTitle: 'Romanticism', tier: 'Early Modern & Enlightenment', xp: 30, x: 720, y: 520, prereqs: ['lit-enlightenment'], topics: ['Wordsworth & Coleridge', 'Blake', 'Byron, Shelley, Keats', 'Goethe: Faust', 'Mary Shelley: Frankenstein', 'American Romantics: Poe, Hawthorne, Melville'] },
          { id: 'lit-realism', title: 'Realism & Naturalism', shortTitle: 'Realism', tier: 'Early Modern & Enlightenment', xp: 30, x: 720, y: 680, prereqs: ['lit-romanticism'], topics: ['Balzac & Flaubert', 'Dickens & George Eliot', 'Tolstoy & Dostoevsky', 'Zola & naturalism', 'Ibsen & Chekhov (drama)', 'Mark Twain & Henry James'] },
          // â”€â”€ Modern & Contemporary â”€â”€
          { id: 'lit-modernism', title: 'Modernism', shortTitle: 'Modernism', tier: 'Modern & Contemporary', xp: 35, x: 1080, y: 40, prereqs: ['lit-realism'], topics: ['Joyce: Ulysses', 'Woolf: Mrs Dalloway', 'Kafka: The Trial', 'Proust: In Search of Lost Time', 'T.S. Eliot: The Waste Land', 'Faulkner: The Sound and the Fury'] },
          { id: 'lit-postmodernism', title: 'Postmodernism', shortTitle: 'Postmodernism', tier: 'Modern & Contemporary', xp: 35, x: 1080, y: 200, prereqs: ['lit-modernism'], topics: ['Borges', 'Nabokov: Lolita', 'Pynchon: Gravity\'s Rainbow', 'Beckett: Waiting for Godot', 'Calvino', 'DeLillo: White Noise'] },
          { id: 'lit-postcolonial', title: 'Postcolonial Literature', shortTitle: 'Postcolonial', tier: 'Modern & Contemporary', xp: 35, x: 1080, y: 360, prereqs: ['lit-modernism'], topics: ['Chinua Achebe: Things Fall Apart', 'Salman Rushdie', 'Gabriel Garc\u00eda M\u00e1rquez', 'Ng\u0169g\u0129 wa Thiong\'o', 'Arundhati Roy', 'Derek Walcott'] },
          { id: 'lit-american', title: 'American Literature', shortTitle: 'American', tier: 'Modern & Contemporary', xp: 35, x: 1080, y: 520, prereqs: ['lit-modernism'], topics: ['Harlem Renaissance (Hughes, Hurston)', 'Fitzgerald: Great Gatsby', 'Hemingway', 'Toni Morrison: Beloved', 'Beat Generation (Kerouac, Ginsberg)', 'Contemporary: Cormac McCarthy, Marilynne Robinson'] },
          { id: 'lit-poetry-modern', title: 'Modern & Contemporary Poetry', shortTitle: 'Mod. Poetry', tier: 'Modern & Contemporary', xp: 35, x: 1080, y: 680, prereqs: ['lit-romanticism', 'lit-modernism'], topics: ['Yeats', 'Rilke', 'Neruda', 'Sylvia Plath & confessional poetry', 'Seamus Heaney', 'Contemporary: Claudia Rankine, Ocean Vuong'] },
          { id: 'lit-drama-modern', title: 'Modern Drama', shortTitle: 'Mod. Drama', tier: 'Modern & Contemporary', xp: 35, x: 1080, y: 840, prereqs: ['lit-realism', 'lit-modernism'], topics: ['Brecht: epic theatre', 'Arthur Miller: Death of a Salesman', 'Tennessee Williams', 'Absurdism: Ionesco, Beckett', 'August Wilson', 'Sarah Kane & in-yer-face theatre'] },
          // â”€â”€ Specialist & Frontier â”€â”€
          { id: 'lit-theory-advanced', title: 'Advanced Literary Theory', shortTitle: 'Adv. Theory', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 40, prereqs: ['lit-theory-intro', 'lit-modernism'], topics: ['Derrida & deconstruction', 'Foucault & discourse', 'Said: Orientalism', 'Spivak: subaltern studies', 'Judith Butler & gender performativity', 'Ecocriticism'] },
          { id: 'lit-comparative', title: 'Comparative Literature', shortTitle: 'Comparative', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 200, prereqs: ['lit-eastern-classical', 'lit-postcolonial'], topics: ['Translation theory', 'World literature (Damrosch)', 'Intertextuality', 'Influence studies', 'Canon formation debates', 'Cosmopolitan reading'] },
          { id: 'lit-genre-fiction', title: 'Genre Fiction Studies', shortTitle: 'Genre Fiction', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 360, prereqs: ['lit-postmodernism'], topics: ['Science fiction (Asimov, Le Guin, Philip K. Dick)', 'Fantasy (Tolkien, Ursula Le Guin)', 'Detective fiction (Doyle, Christie, Chandler)', 'Horror (Lovecraft, Shirley Jackson, Stephen King)', 'Romance genre studies', 'Graphic novels & comics as literature'] },
          { id: 'lit-childrens', title: 'Children\'s & YA Literature', shortTitle: 'Children\'s', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 520, prereqs: ['lit-reading', 'lit-postmodernism'], topics: ['Fairy tales & folklore (Grimm, Perrault)', 'Lewis Carroll: Alice', 'C.S. Lewis & Narnia', 'Roald Dahl', 'Harry Potter phenomenon', 'YA dystopia: Hunger Games, Divergent'] },
          { id: 'lit-digital-frontier', title: 'Digital & Frontier Literature', shortTitle: 'Digital Lit.', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 680, prereqs: ['lit-postmodernism', 'lit-theory-advanced'], topics: ['Electronic literature & hypertext fiction', 'AI-generated literature', 'Interactive fiction', 'Social media as literary form', 'Distant reading (Franco Moretti)', 'Computational literary studies'] },
          { id: 'lit-creative-writing', title: 'Creative Writing & Craft', shortTitle: 'Creative Writing', tier: 'Specialist & Frontier', xp: 45, x: 1460, y: 860, prereqs: ['lit-reading', 'lit-rhetoric'], topics: ['Fiction craft: plot, character, voice', 'Poetry craft: image, line, form', 'Creative nonfiction & memoir', 'Screenwriting', 'Workshop model & MFA culture', 'Publishing industry'] }
        ]
      }
    };

    // â”€â”€ Course Content Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    var philosophyCourses = {
      'phil-foundations': {
        desc: 'What philosophy is, how to read and write it, and the core methods of philosophical inquiry including conceptual analysis and thought experiments.',
        sections: [
          'What is Philosophy? \u2014 The study of fundamental questions about existence, knowledge, values, reason, mind, and language',
          'Branches of Philosophy \u2014 Metaphysics, epistemology, ethics, logic, aesthetics, and political philosophy',
          'How to Read Philosophy \u2014 Close reading, argument reconstruction, principle of charity, identifying premises and conclusions',
          'Conceptual Analysis \u2014 Necessary and sufficient conditions, counterexamples, and definitional refinement',
          'Thought Experiments \u2014 Trolley problem, Brain in a Vat, Chinese Room, Twin Earth, Zombie World',
          'Philosophical Writing \u2014 Socratic method, dialectic, phenomenological method, formal analysis'
        ],
        videos: ['What is Philosophy? \u2014 CrashCourse Philosophy #1', 'How to Argue \u2014 Philosophical Reasoning', 'Thought Experiments \u2014 Wireless Philosophy'],
        books: ['Think: A Compelling Introduction to Philosophy \u2014 Simon Blackburn (1999)', 'The Problems of Philosophy \u2014 Bertrand Russell (1912)', 'Philosophy: The Basics \u2014 Nigel Warburton (2012)'],
        quiz: [
          { q: 'What is the principle of charity in philosophical reading?', options: ['Giving money to philosophy departments', 'Assuming the strongest possible interpretation of an argument', 'Only reading charitable philosophers', 'Accepting all arguments as valid'], answer: 1 },
          { q: 'Which of these is a thought experiment?', options: ['The Milgram experiment', 'The trolley problem', 'The Stanford prison experiment', 'The double-slit experiment'], answer: 1 },
          { q: 'Conceptual analysis typically involves finding:', options: ['Statistical correlations', 'Necessary and sufficient conditions for a concept', 'Historical origins of words', 'Empirical evidence'], answer: 1 }
        ]
      },
      'phil-logic': {
        desc: 'The formal and informal study of valid reasoning, from syllogistic logic through modern predicate logic, modal logic, and the philosophy of logic itself.',
        sections: [
          'Informal Logic \u2014 Fallacies (ad hominem, straw man, appeal to authority), argument mapping, critical thinking',
          'Classical Propositional Logic \u2014 Truth tables, connectives, tautologies, validity, soundness',
          'Predicate Logic \u2014 Quantifiers, predicates, relations, identity, models and interpretations',
          'Modal Logic \u2014 Necessity, possibility, possible worlds semantics (Kripke), accessibility relations',
          'Advanced Formal Systems \u2014 Set theory foundations, incompleteness theorems (G\u00f6del), computability, proof theory',
          'Philosophy of Logic \u2014 Logical pluralism, the status of logical laws, paraconsistent logic, relevance logic'
        ],
        videos: ['Introduction to Formal Logic', 'Truth Tables and Propositional Logic', 'Modal Logic and Possible Worlds'],
        books: ['Logic: The Laws of Truth \u2014 Nicholas J.J. Smith (2012)', 'An Introduction to Non-Classical Logic \u2014 Graham Priest (2008)', 'Language, Proof and Logic \u2014 Barwise & Etchemendy (2002)'],
        quiz: [
          { q: 'What does the symbol \u2192 represent in propositional logic?', options: ['Conjunction (AND)', 'Disjunction (OR)', 'Material conditional (IF...THEN)', 'Biconditional (IF AND ONLY IF)'], answer: 2 },
          { q: 'What did G\u00f6del\'s first incompleteness theorem show?', options: ['All mathematical truths are provable', 'Any consistent formal system strong enough for arithmetic contains unprovable truths', 'Logic is inconsistent', 'Mathematics is based on intuition'], answer: 1 },
          { q: 'An ad hominem fallacy involves:', options: ['Attacking the person instead of their argument', 'Appealing to authority', 'Begging the question', 'Equivocation'], answer: 0 }
        ]
      },
      'phil-hist-ancient': {
        desc: 'Philosophy\'s origins from the Pre-Socratics through Socrates, Plato, and Aristotle, to the Hellenistic schools and Neoplatonism.',
        sections: [
          'Pre-Socratics \u2014 Thales (water as arche), Anaximander (apeiron), Heraclitus (flux/logos), Parmenides (being), Democritus (atoms), Pythagoras (number)',
          'The Sophists and Socrates \u2014 Protagoras (man is the measure), Gorgias, Socratic method, trial and death, the examined life',
          'Plato \u2014 Theory of Forms, the Republic (justice, philosopher-kings, cave allegory), Meno (recollection), Phaedo, Symposium',
          'Aristotle \u2014 Four causes, substance and essence, Nicomachean Ethics (virtue, eudaimonia, golden mean), Politics, Organon (logic)',
          'Hellenistic Philosophy \u2014 Stoicism (Zeno, Epictetus, Marcus Aurelius), Epicureanism (atoms, pleasure, ataraxia), Skepticism (Pyrrho, Sextus Empiricus)',
          'Neoplatonism \u2014 Plotinus (the One, emanation, return), Porphyry, Proclus, influence on Christianity and Islam'
        ],
        videos: ['Ancient Greek Philosophy \u2014 CrashCourse', 'Plato\'s Allegory of the Cave', 'Aristotle\'s Ethics'],
        books: ['A History of Western Philosophy \u2014 Bertrand Russell (1945)', 'The Republic \u2014 Plato (c. 375 BCE)', 'Nicomachean Ethics \u2014 Aristotle (c. 340 BCE)'],
        quiz: [
          { q: 'Which Pre-Socratic philosopher proposed that everything is made of water?', options: ['Heraclitus', 'Parmenides', 'Thales', 'Democritus'], answer: 2 },
          { q: 'Plato\'s Theory of Forms holds that:', options: ['The physical world is the only reality', 'Abstract, perfect Forms are more real than physical objects', 'Knowledge comes only from sense experience', 'Ethics is relative to culture'], answer: 1 },
          { q: 'Aristotle\'s doctrine of the Golden Mean recommends:', options: ['Always choosing pleasure', 'Seeking the extreme in virtue', 'Finding the mean between excess and deficiency', 'Following divine commands'], answer: 2 }
        ]
      },
      'phil-metaphysics': {
        desc: 'The study of the fundamental nature of reality: what exists, what is it like, and what are its most basic features?',
        sections: [
          'Ontology \u2014 What exists? Substance, properties, particulars vs universals, abstract vs concrete objects',
          'The Problem of Universals \u2014 Realism (Plato, Armstrong), nominalism (Ockham), trope theory, resemblance nominalism',
          'Space and Time \u2014 Substantivalism vs relationalism, A-theory vs B-theory of time, presentism vs eternalism',
          'Causation \u2014 Hume\'s regularity theory, counterfactual theories (Lewis), powers/dispositions, interventionism (Woodward)',
          'Free Will and Determinism \u2014 Hard determinism, libertarianism (agent causation), compatibilism (Frankfurt cases)',
          'Personal Identity \u2014 Memory theory (Locke), psychological continuity (Parfit), animalism, narrative identity',
          'Contemporary Metaphysics \u2014 Metametaphysics (Chalmers, Sider), grounding, fundamentality, mereology'
        ],
        videos: ['What is Metaphysics?', 'Free Will \u2014 Crash Course Philosophy', 'Personal Identity \u2014 Philosophy Tube'],
        books: ['Metaphysics: A Very Short Introduction \u2014 Stephen Mumford (2012)', 'Reasons and Persons \u2014 Derek Parfit (1984)', 'Writing the Book of the World \u2014 Theodore Sider (2011)'],
        quiz: [
          { q: 'Nominalism about universals holds that:', options: ['Abstract Forms exist independently', 'Only particular things exist; there are no universal properties', 'Universals exist in the mind of God', 'Everything is made of atoms'], answer: 1 },
          { q: 'Frankfurt cases are designed to challenge:', options: ['Utilitarianism', 'The principle that moral responsibility requires the ability to do otherwise', 'Skepticism about the external world', 'The existence of God'], answer: 1 },
          { q: 'Presentism is the view that:', options: ['The past and future are as real as the present', 'Only present entities exist', 'Time is an illusion', 'Space and time are identical'], answer: 1 }
        ]
      },
      'phil-epistemology': {
        desc: 'The theory of knowledge: what is knowledge, what are its sources, how is it justified, and what are its limits?',
        sections: [
          'The Nature of Knowledge \u2014 Justified true belief, Gettier problem, responses (no-false-lemmas, defeasibility, causal theory, reliabilism)',
          'Sources of Knowledge \u2014 Perception, reason/a priori, memory, testimony, introspection, rational intuition',
          'Theories of Justification \u2014 Foundationalism (Descartes), coherentism (BonJour), reliabilism (Goldman), virtue epistemology (Sosa)',
          'Skepticism \u2014 Cartesian doubt, brain-in-a-vat, Moorean response, contextualism (DeRose), pragmatic dissolution',
          'Social Epistemology \u2014 Testimony (Coady), epistemic injustice (Fricker), standpoint theory, group knowledge',
          'Contemporary Issues \u2014 Knowledge-first epistemology (Williamson), formal epistemology (Bayesian), naturalized epistemology (Quine)'
        ],
        videos: ['What is Knowledge? \u2014 CrashCourse', 'The Gettier Problem Explained', 'Skepticism and the Matrix'],
        books: ['Epistemology: A Contemporary Introduction \u2014 Robert Audi (2010)', 'Epistemic Injustice \u2014 Miranda Fricker (2007)', 'Knowledge and Its Limits \u2014 Timothy Williamson (2000)'],
        quiz: [
          { q: 'The Gettier problem challenges the definition of knowledge as:', options: ['Certainty', 'Justified true belief', 'Reliable belief', 'True belief'], answer: 1 },
          { q: 'Fricker\'s "testimonial injustice" refers to:', options: ['Lying under oath', 'A credibility deficit due to the hearer\'s prejudice against the speaker', 'Not having enough evidence', 'False testimony'], answer: 1 },
          { q: 'Foundationalism holds that justified beliefs rest on:', options: ['An infinite chain of reasons', 'A coherent web of mutually supporting beliefs', 'Basic beliefs that are self-justifying', 'Social consensus'], answer: 2 }
        ]
      },
      'phil-ethics': {
        desc: 'The systematic study of right and wrong, including metaethical foundations, normative ethical theories, and applied ethics.',
        sections: [
          'Metaethics \u2014 Moral realism vs anti-realism, cognitivism vs non-cognitivism, naturalism, error theory (Mackie), expressivism',
          'Deontological Ethics \u2014 Kant\'s categorical imperative, duty-based morality, rights-based theories, Scanlon\'s contractualism',
          'Consequentialism \u2014 Mill\'s utilitarianism, act vs rule utilitarianism, preference utilitarianism (Singer), objections',
          'Virtue Ethics \u2014 Aristotle\'s virtues and eudaimonia, MacIntyre\'s After Virtue, care ethics (Noddings, Held)',
          'Applied Ethics \u2014 Biomedical ethics, animal rights (Singer, Regan), environmental ethics, business ethics, technology ethics',
          'Moral Psychology \u2014 Trolley problems (Foot, Thomson), moral luck (Williams, Nagel), moral intuitions, evolution and morality'
        ],
        videos: ['Ethics \u2014 CrashCourse Philosophy', 'Utilitarianism Explained', 'Kant\'s Moral Theory'],
        books: ['Practical Ethics \u2014 Peter Singer (1979)', 'After Virtue \u2014 Alasdair MacIntyre (1981)', 'The Methods of Ethics \u2014 Henry Sidgwick (1874)'],
        quiz: [
          { q: 'Kant\'s categorical imperative commands us to:', options: ['Maximize happiness', 'Act only according to maxims we could will to be universal laws', 'Follow our emotions', 'Obey divine commands'], answer: 1 },
          { q: 'The trolley problem was introduced to explore:', options: ['Transport ethics', 'The tension between doing and allowing harm', 'Game theory', 'Economic efficiency'], answer: 1 },
          { q: 'Moral anti-realism holds that:', options: ['Moral facts exist independently of minds', 'There are no mind-independent moral facts', 'Only virtue ethics is correct', 'Morality comes from God'], answer: 1 }
        ]
      },
      'phil-mind': {
        desc: 'The nature of mind, consciousness, mental states, and the relationship between mind and body.',
        sections: [
          'The Mind-Body Problem \u2014 Substance dualism (Descartes), property dualism, physicalism, identity theory, functionalism (Putnam), eliminativism',
          'Consciousness \u2014 The hard problem (Chalmers), qualia, explanatory gap, IIT, Global Workspace Theory',
          'Intentionality \u2014 Brentano\'s thesis, mental content, externalism (Putnam\'s Twin Earth, Burge), phenomenal intentionality',
          'Embodied and Extended Mind \u2014 Embodied cognition (Varela, Thompson), extended mind thesis (Clark & Chalmers), enactivism',
          'Philosophy of AI \u2014 Chinese Room (Searle), Turing Test, symbol grounding, strong vs weak AI, machine consciousness'
        ],
        videos: ['Philosophy of Mind \u2014 CrashCourse', 'The Hard Problem of Consciousness', 'Can Machines Think? \u2014 Wireless Philosophy'],
        books: ['The Conscious Mind \u2014 David Chalmers (1996)', 'Philosophy of Mind \u2014 Jaegwon Kim (2010)', 'Supersizing the Mind \u2014 Andy Clark (2008)'],
        quiz: [
          { q: 'The "hard problem" of consciousness refers to:', options: ['Building conscious robots', 'Explaining why physical processes give rise to subjective experience', 'Understanding brain injuries', 'Measuring intelligence'], answer: 1 },
          { q: 'Searle\'s Chinese Room argument targets:', options: ['Machine translation accuracy', 'Strong AI: the claim that computation alone produces understanding', 'The possibility of artificial limbs', 'Neural networks'], answer: 1 },
          { q: 'Functionalism defines mental states by their:', options: ['Physical substrate', 'Subjective feel', 'Causal roles \u2014 inputs, outputs, and relations to other states', 'Spiritual essence'], answer: 2 }
        ]
      },
      'phil-science': {
        desc: 'The philosophical foundations of science: its methods, limits, explanatory power, and the nature of scientific knowledge.',
        sections: [
          'Scientific Method and Demarcation \u2014 Inductivism, falsificationism (Popper), paradigm shifts (Kuhn), research programs (Lakatos), Feyerabend',
          'Realism vs Anti-Realism \u2014 No-miracles argument (Putnam), pessimistic meta-induction (Laudan), structural realism, constructive empiricism',
          'Scientific Explanation \u2014 DN model (Hempel), causal mechanical model (Salmon), unificationism (Kitcher), interventionism (Woodward)',
          'Philosophy of Physics \u2014 QM interpretations (Copenhagen, Many-Worlds, pilot wave), spacetime ontology, statistical mechanics and time',
          'Philosophy of Biology \u2014 Units of selection, adaptationism, species concepts, teleology and function, philosophy of medicine',
          'Philosophy of Social Science \u2014 Naturalism vs interpretivism, holism vs individualism, social kinds, values in science'
        ],
        videos: ['Philosophy of Science \u2014 CrashCourse', 'Karl Popper and Falsification', 'Thomas Kuhn\'s Paradigm Shifts'],
        books: ['The Structure of Scientific Revolutions \u2014 Thomas Kuhn (1962)', 'The Logic of Scientific Discovery \u2014 Karl Popper (1959)', 'The Scientific Image \u2014 Bas van Fraassen (1980)'],
        quiz: [
          { q: 'Popper\'s falsificationism says a theory is scientific if it is:', options: ['Verified by many observations', 'Potentially falsifiable by observations', 'Accepted by most scientists', 'Published in a journal'], answer: 1 },
          { q: 'Kuhn\'s "paradigm shift" involves:', options: ['Gradual accumulation of knowledge', 'A revolutionary replacement of one scientific framework by another', 'Mathematical proof', 'Government regulation of science'], answer: 1 },
          { q: 'The no-miracles argument for scientific realism argues that:', options: ['Miracles prove God exists', 'Science would be a miracle if its theories were not approximately true', 'Anti-realism leads to contradictions', 'All scientific entities are observable'], answer: 1 }
        ]
      }
    };

    var historyCourses = {
      'hist-methods': {
        desc: 'The craft of historical inquiry: how historians find, evaluate, and interpret evidence to reconstruct the past and construct narratives about human experience.',
        sections: [
          'What is History? \u2014 The study of change over time; distinction between the past (what happened) and history (interpretation of what happened); E.H. Carr vs. Leopold von Ranke debate',
          'Primary vs Secondary Sources \u2014 Primary: documents, artifacts, eyewitness accounts created during the period; Secondary: later scholarly analyses; Tertiary: encyclopedias, textbooks',
          'Source Criticism \u2014 External criticism (authenticity, provenance, dating); Internal criticism (reliability, bias, intent); Corroboration across multiple sources',
          'Periodization \u2014 How historians divide time: ancient/medieval/modern; problems with Eurocentric periodization; alternative frameworks (world-systems, environmental)',
          'Historical Causation \u2014 Proximate vs. distal causes; necessary vs. sufficient conditions; contingency and counterfactuals; structural vs. agency-based explanation',
          'Evidence & Argument \u2014 Constructing historical arguments; footnoting and citation standards; peer review; historiographic debates over interpretation'
        ],
        videos: ['What is History For? \u2014 The School of Life', 'How to Read a Primary Source \u2014 History Skills', 'Is History a Science? \u2014 CrashCourse'],
        books: ['What Is History? \u2014 E.H. Carr (1961)', 'The Landscape of History \u2014 John Lewis Gaddis (2002)', 'The History Manifesto \u2014 Guldi & Armitage (2014)'],
        quiz: [
          { q: 'What is the key distinction between a primary and secondary source?', options: ['Primary sources are more reliable', 'Primary sources were created during the period under study', 'Secondary sources are always books', 'Primary sources are only government documents'], answer: 1 },
          { q: 'Leopold von Ranke famously argued that history should show:', options: ['The underlying class struggle', 'How things actually were (wie es eigentlich gewesen)', 'The progress of civilization', 'God\'s plan for humanity'], answer: 1 },
          { q: 'External source criticism primarily evaluates:', options: ['The bias of the author', 'The authenticity, provenance, and date of a source', 'Whether the source supports your thesis', 'The literary quality of the writing'], answer: 1 }
        ]
      },
      'hist-historiography': {
        desc: 'The history of history-writing itself: how different schools and movements have shaped what counts as history, whose voices are heard, and what methods are valid.',
        sections: [
          'Rankean Historicism \u2014 Leopold von Ranke (1795\u20131886); emphasis on archival research, diplomatic history, showing the past "as it actually was"; professionalization of history',
          'Annales School \u2014 Marc Bloch & Lucien Febvre (1929); Fernand Braudel\'s longue dur\u00e9e; mentalit\u00e9s; history of climate, geography, material culture over events',
          'Marxist Historiography \u2014 Historical materialism; class struggle as motor of history; E.P. Thompson, Eric Hobsbawm, Eugene Genovese; base/superstructure model',
          'Social History & History from Below \u2014 Recovering voices of ordinary people; labor, women, minorities; microhistory (Carlo Ginzburg\'s The Cheese and the Worms)',
          'Postmodern & Linguistic Turn \u2014 Hayden White (Metahistory); history as narrative construction; Keith Jenkins; collapse of grand narratives; debates over objectivity',
          'Digital Humanities & New Directions \u2014 Big data, text mining, GIS mapping; global history (Sebastian Conrad); transnational history; environmental history; memory studies (Pierre Nora)'
        ],
        videos: ['Historiography: Schools of Thought \u2014 History Skills', 'The Annales School Explained', 'Postmodernism and History \u2014 Then & Now'],
        books: ['Metahistory \u2014 Hayden White (1973)', 'The Making of the English Working Class \u2014 E.P. Thompson (1963)', 'What Is Global History? \u2014 Sebastian Conrad (2016)'],
        quiz: [
          { q: 'Fernand Braudel\'s concept of the longue dur\u00e9e emphasizes:', options: ['Short-term political events', 'Long-term geographical, climatic, and structural forces', 'The role of great individuals', 'Military campaigns'], answer: 1 },
          { q: 'Hayden White\'s Metahistory argues that historical writing is fundamentally:', options: ['Pure objective science', 'A form of narrative shaped by literary tropes', 'Unreliable and useless', 'Only about politics'], answer: 1 },
          { q: 'Microhistory, as practiced by Carlo Ginzburg, focuses on:', options: ['Very short time periods of major empires', 'Intensive study of a small subject to reveal larger historical processes', 'Microscopic analysis of physical artifacts', 'History written in very short books'], answer: 1 }
        ]
      },
      'hist-archaeology': {
        desc: 'The science of recovering and interpreting the material remains of human activity: excavation techniques, dating methods, and the revolution of ancient DNA analysis.',
        sections: [
          'Stratigraphy & Excavation \u2014 Law of superposition; Harris Matrix; grid excavation; recording context; the destructive nature of excavation',
          'Radiocarbon Dating \u2014 Willard Libby (1949); C-14 decay; calibration curves; AMS dating; effective range (~50,000 years); limitations',
          'Other Dating Methods \u2014 Dendrochronology (tree rings); thermoluminescence; potassium-argon (for deep time); optically stimulated luminescence; obsidian hydration',
          'Ancient DNA Revolution \u2014 Svante P\u00e4\u00e4bo\'s Nobel Prize (2022); aDNA extraction from bones/teeth; population migration patterns; archaic admixture with Neanderthals and Denisovans',
          'Remote Sensing & LiDAR \u2014 Aerial photography; satellite imagery; LiDAR laser scanning through jungle canopy; discovery of hidden Maya cities; ground-penetrating radar',
          'Ethnoarchaeology & Experimental Archaeology \u2014 Using living cultures to interpret past behavior; replicating ancient techniques (flint knapping, smelting, construction)'
        ],
        videos: ['How Does Radiocarbon Dating Work? \u2014 SciShow', 'LiDAR: Archaeology\'s Secret Weapon', 'Ancient DNA and Human History \u2014 Svante P\u00e4\u00e4bo Nobel Lecture'],
        books: ['Archaeology: Theories, Methods, and Practice \u2014 Renfrew & Bahn (8th ed., 2020)', 'Neanderthal Man: In Search of Lost Genomes \u2014 Svante P\u00e4\u00e4bo (2014)', 'The Horse, the Wheel, and Language \u2014 David Anthony (2007)'],
        quiz: [
          { q: 'The principle of superposition in archaeology means:', options: ['Older layers are found above newer layers', 'Newer layers are deposited on top of older layers', 'All layers contain the same artifacts', 'Layers can only be dated by radiocarbon'], answer: 1 },
          { q: 'Svante P\u00e4\u00e4bo won the 2022 Nobel Prize for:', options: ['Discovering LiDAR', 'Sequencing ancient DNA from archaic humans', 'Inventing radiocarbon dating', 'Excavating Pompeii'], answer: 1 },
          { q: 'LiDAR technology is especially valuable for archaeology in:', options: ['Desert environments', 'Dense jungle or forest where structures are hidden', 'Deep ocean floors', 'Arctic ice sheets'], answer: 1 }
        ]
      },
      'hist-prehistory': {
        desc: 'From the emergence of Homo sapiens to the dawn of writing: the vast majority of human existence, covering tool technologies, migration, art, and the Neolithic Revolution.',
        sections: [
          'Hominin Evolution \u2014 Australopithecus, Homo habilis, Homo erectus, archaic Homo sapiens; bipedalism, brain expansion, tool use; Jebel Irhoud (~315 kya) earliest H. sapiens',
          'Out of Africa & Global Dispersal \u2014 Single-origin hypothesis; genetic evidence; ~70\u201360 kya migration; coastal route hypothesis; White Sands footprints (~21 kya); Beringia crossing',
          'Paleolithic Tool Industries \u2014 Oldowan, Acheulean, Mousterian, Upper Paleolithic blade traditions; Levallois technique; symbolic behavior markers',
          'Cave Art & Symbolic Thought \u2014 Lascaux, Chauvet, Altamira; Blombos Cave ochre engravings; Venus figurines; earliest musical instruments; behavioral modernity debate',
          'Neolithic Revolution \u2014 Independent invention of agriculture in multiple centers (Fertile Crescent, China, Mesoamerica); G\u00f6bekli Tepe; sedentism; domestication of plants and animals',
          'Consequences of Agriculture \u2014 Population growth; social stratification; surplus and specialization; proto-urbanization (\u00c7atalh\u00f6y\u00fck); disease burden; environmental transformation'
        ],
        videos: ['Human Origins \u2014 CrashCourse World History', 'The Agricultural Revolution \u2014 Kurzgesagt', 'G\u00f6bekli Tepe: The World\'s First Temple?'],
        books: ['Sapiens: A Brief History of Humankind \u2014 Yuval Noah Harari (2014)', 'The Dawn of Everything \u2014 Graeber & Wengrow (2021)', 'Who We Are and How We Got Here \u2014 David Reich (2018)'],
        quiz: [
          { q: 'The oldest known Homo sapiens fossils (~315 kya) were found at:', options: ['Olduvai Gorge, Tanzania', 'Jebel Irhoud, Morocco', 'Lascaux, France', 'G\u00f6bekli Tepe, Turkey'], answer: 1 },
          { q: 'The Neolithic Revolution primarily refers to:', options: ['The invention of writing', 'The transition from foraging to farming', 'The discovery of fire', 'The Bronze Age'], answer: 1 },
          { q: 'G\u00f6bekli Tepe is significant because it:', options: ['Is the oldest city', 'Is a monumental site built before agriculture was fully established', 'Contains the first writing', 'Was built by Neanderthals'], answer: 1 }
        ]
      },
      'hist-mesopotamia': {
        desc: 'The cradle of civilization: from the first cities of Sumer through Akkad, Babylon, Assyria, and Achaemenid Persia \u2014 the invention of writing, law, and empire.',
        sections: [
          'Sumer & the First Cities \u2014 Uruk (~3500 BCE), Ur, Eridu; temple economy; cuneiform writing (~3200 BCE); cylinder seals; Epic of Gilgamesh',
          'Akkadian Empire & Ur III \u2014 Sargon of Akkad (~2334 BCE); first multi-ethnic empire; Ur III Dynasty; extensive bureaucracy and record-keeping',
          'Old Babylonian Period \u2014 Hammurabi\'s law code (~1754 BCE); Babylonian mathematics (base-60 system); astronomy; Enuma Elish creation epic',
          'Hittites & Levant \u2014 Hittite Empire; Battle of Kadesh (1274 BCE); Phoenician alphabet; Ugarit; Hebrew Bible archaeology; Sea Peoples',
          'Neo-Assyrian & Neo-Babylonian Empires \u2014 Ashurbanipal\'s library at Nineveh; Assyrian military machine; Nebuchadnezzar II; Hanging Gardens; Babylonian Exile',
          'Achaemenid Persian Empire \u2014 Cyrus the Great; Darius I; Royal Road; satrapy system; Zoroastrianism; Persepolis; fall to Alexander 330 BCE'
        ],
        videos: ['Mesopotamia: The First Civilization \u2014 Epic History TV', 'The Epic of Gilgamesh Explained', 'The Persian Empire \u2014 CrashCourse'],
        books: ['The Sumerians \u2014 Samuel Noah Kramer (1963)', 'Babylon: Mesopotamia and the Birth of Civilization \u2014 Paul Kriwaczek (2012)', 'Ancient Iraq \u2014 Georges Roux (1992)'],
        quiz: [
          { q: 'Cuneiform writing was first developed around:', options: ['5000 BCE', '3200 BCE', '1500 BCE', '750 BCE'], answer: 1 },
          { q: 'Hammurabi\'s code is historically significant as:', options: ['The first known use of writing', 'One of the oldest surviving written legal codes', 'The first democratic constitution', 'A religious text'], answer: 1 },
          { q: 'The Achaemenid Persian Empire was founded by:', options: ['Darius I', 'Xerxes', 'Cyrus the Great', 'Alexander'], answer: 2 }
        ]
      },
      'hist-egypt': {
        desc: 'Three millennia of Egyptian civilization: from the unification of Upper and Lower Egypt through the pyramids, the New Kingdom golden age, to Cleopatra and Roman annexation.',
        sections: [
          'Predynastic & Early Dynastic \u2014 Nile geography and agriculture; Narmer palette; unification (~3100 BCE); Memphis; early royal tombs at Abydos',
          'Old Kingdom & Pyramids \u2014 Step Pyramid of Djoser (Imhotep); Great Pyramid of Giza (Khufu ~2560 BCE); Wadi el-Jarf papyri (2017 discovery); solar religion; collapse into First Intermediate Period',
          'Middle Kingdom \u2014 Reunification under Mentuhotep II; classical Egyptian literature; Fayum irrigation; Middle Kingdom fortresses in Nubia; Second Intermediate Period and Hyksos invasion',
          'New Kingdom \u2014 Hatshepsut; Thutmose III (Napoleon of Egypt); Akhenaten\'s monotheistic revolution; Tutankhamun and Howard Carter; Ramesses II and Kadesh; decline and Sea Peoples',
          'Late Period through Ptolemaic Egypt \u2014 Libyan and Nubian pharaohs; Saite Renaissance; Persian conquest; Alexander\'s conquest 332 BCE; Ptolemaic dynasty; Library of Alexandria; Cleopatra VII',
          'Writing, Religion & Legacy \u2014 Hieroglyphics, hieratic, and demotic scripts; Rosetta Stone (Champollion 1822); Book of the Dead; mummification; Egyptian influence on Greek and Roman culture'
        ],
        videos: ['Ancient Egypt \u2014 CrashCourse World History', 'The Great Pyramid: Wadi el-Jarf Papyri', 'Who Was Hatshepsut? \u2014 TED-Ed'],
        books: ['The Oxford History of Ancient Egypt \u2014 Ian Shaw (2003)', 'The Rise and Fall of Ancient Egypt \u2014 Toby Wilkinson (2011)', 'Cleopatra: A Life \u2014 Stacy Schiff (2010)'],
        quiz: [
          { q: 'The Great Pyramid of Giza was built for pharaoh:', options: ['Ramesses II', 'Tutankhamun', 'Khufu (Cheops)', 'Akhenaten'], answer: 2 },
          { q: 'The Rosetta Stone was key to deciphering:', options: ['Cuneiform', 'Egyptian hieroglyphics', 'Linear B', 'Sanskrit'], answer: 1 },
          { q: 'Akhenaten is historically notable for:', options: ['Building the Great Pyramid', 'Attempting to establish monotheistic worship of the Aten', 'Defeating the Sea Peoples', 'Founding Alexandria'], answer: 1 }
        ]
      },
      'hist-greece': {
        desc: 'From Minoan palaces to Alexander\'s empire: the civilization that invented democracy, philosophy, tragedy, and the foundations of Western intellectual culture.',
        sections: [
          'Bronze Age Aegean \u2014 Minoan Crete (Knossos, Linear A); Mycenaean civilization (Linear B); Trojan War question; Bronze Age Collapse ~1200 BCE',
          'Archaic Greece \u2014 Dark Age recovery; emergence of poleis; colonization across Mediterranean; tyranny; hoplite warfare; Homer\'s Iliad and Odyssey; early philosophy (Thales, Heraclitus)',
          'Classical Athens \u2014 Cleisthenes\' democratic reforms; Persian Wars (Marathon 490, Thermopylae & Salamis 480); Delian League; Parthenon; golden age of drama, philosophy, and art',
          'Peloponnesian War & Crisis \u2014 Athens vs. Sparta (431\u2013404 BCE); Thucydides\' history; plague of Athens; Sicilian Expedition disaster; Spartan hegemony; Theban hegemony (Epaminondas)',
          'Alexander & Hellenistic World \u2014 Philip II of Macedon; Alexander\'s conquests (334\u2013323 BCE); successor kingdoms (Ptolemaic, Seleucid, Antigonid); cultural diffusion; Hellenistic science',
          'Greek Legacy \u2014 Democracy, philosophy (Socrates, Plato, Aristotle), theatre (Aeschylus, Sophocles, Euripides, Aristophanes), Olympics, scientific method (Archimedes, Euclid, Eratosthenes)'
        ],
        videos: ['Ancient Greece \u2014 CrashCourse World History', 'The Persian Wars Explained', 'Alexander the Great \u2014 Epic History TV'],
        books: ['The Peloponnesian War \u2014 Thucydides (trans. Landmark ed., Strassler)', 'The Greeks \u2014 H.D.F. Kitto (1951)', 'Alexander the Great \u2014 Robin Lane Fox (1973)'],
        quiz: [
          { q: 'The Battle of Marathon (490 BCE) was fought between:', options: ['Athens and Sparta', 'Greece and Persia', 'Rome and Carthage', 'Macedon and Thebes'], answer: 1 },
          { q: 'What was the Delian League?', options: ['A Spartan military alliance', 'An Athenian-led alliance that became an Athenian empire', 'A philosophical school', 'A trading network'], answer: 1 },
          { q: 'Alexander the Great died in 323 BCE in:', options: ['Athens', 'Alexandria', 'Babylon', 'Persepolis'], answer: 2 }
        ]
      },
      'hist-rome': {
        desc: 'From a small Italian settlement to the greatest empire of the ancient world: Republic, Empire, law, engineering, and the transformation into Christendom.',
        sections: [
          'Roman Kingdom & Early Republic \u2014 Founding myths (Romulus & Remus); Etruscan influence; establishment of Republic (509 BCE); Twelve Tables; patrician-plebeian conflict',
          'Roman Expansion & Punic Wars \u2014 Conquest of Italy; Punic Wars (264\u2013146 BCE); Hannibal\'s invasion; destruction of Carthage; Roman provinces; Hellenization',
          'Late Republic & Civil Wars \u2014 Gracchi reforms; Marius and Sulla; Spartacus revolt; First Triumvirate; Julius Caesar; assassination (44 BCE); Second Triumvirate; Octavian\'s victory at Actium',
          'Principate & High Empire \u2014 Augustus (27 BCE\u201314 CE); Pax Romana; Julio-Claudian and Flavian dynasties; Five Good Emperors; Trajan\'s maximum extent; Hadrian\'s Wall',
          'Crisis, Dominate & Fall \u2014 Crisis of the Third Century; Diocletian\'s reforms; Constantine and Christianity; division East/West; barbarian invasions; fall of Rome 476 CE',
          'Roman Legacy \u2014 Roman law (Justinian Code); aqueducts, roads, concrete; Latin language; Republican ideals; influence on Western governance, architecture, and religion'
        ],
        videos: ['The Roman Empire \u2014 CrashCourse', 'Fall of Rome \u2014 CrashCourse', 'Julius Caesar \u2014 Historia Civilis'],
        books: ['SPQR: A History of Ancient Rome \u2014 Mary Beard (2015)', 'The Fall of the Roman Empire \u2014 Peter Heather (2006)', 'Rubicon: The Last Years of the Roman Republic \u2014 Tom Holland (2003)'],
        quiz: [
          { q: 'The Roman Republic was traditionally founded in:', options: ['753 BCE', '509 BCE', '264 BCE', '27 BCE'], answer: 1 },
          { q: 'The Pax Romana refers to:', options: ['A peace treaty with Carthage', 'A roughly 200-year period of relative peace and stability under the Empire', 'The Roman legal code', 'The conversion to Christianity'], answer: 1 },
          { q: 'The conventional date for the fall of the Western Roman Empire is:', options: ['376 CE', '410 CE', '476 CE', '527 CE'], answer: 2 }
        ]
      }
    };

    var literatureCourses = {
      'lit-reading': {
        desc: 'The essential skills of literary analysis: close reading, genre awareness, and the critical frameworks that transform passive reading into active interpretation.',
        sections: [
          'Close Reading \u2014 Attending to diction, syntax, imagery, tone, and structure; the New Critical method; identifying literary devices in context',
          'Narrative, Lyric, Dramatic \u2014 Three fundamental modes of literature; narrative arc, point of view, unreliable narrators; lyric \"I\" and temporality; dramatic action and dialogue',
          'Formalism & New Criticism \u2014 The text as self-contained object; Cleanth Brooks, I.A. Richards, William Empson; the heresy of paraphrase; organic unity',
          'Reader-Response Theory \u2014 Wolfgang Iser (implied reader); Stanley Fish (interpretive communities); Louise Rosenblatt (transactional reading); meaning as co-created',
          'Genre Theory \u2014 Aristotle\u2019s genres; Northrop Frye (Anatomy of Criticism); genre as horizon of expectation (Hans Robert Jauss); genre blending and transgression',
          'Active Reading Strategies \u2014 Annotating texts; tracking motifs and symbols; identifying argument structures; reading against the grain; keeping a commonplace book'
        ],
        videos: ['How to Read a Book (Adler) \u2014 Summary', 'Close Reading: A Walkthrough \u2014 Folger Shakespeare Library', 'What is Literary Theory? \u2014 CrashCourse'],
        books: ['How to Read Literature Like a Professor \u2014 Thomas C. Foster (2003)', 'The Art of Reading Poetry \u2014 Harold Bloom (2004)', 'Practical Criticism \u2014 I.A. Richards (1929)'],
        quiz: [
          { q: 'Close reading primarily focuses on:', options: ['The author\u2019s biography', 'The historical context of the work', 'The language, structure, and literary devices within the text itself', 'Reader satisfaction'], answer: 2 },
          { q: 'Stanley Fish\u2019s \"interpretive communities\" concept argues that:', options: ['All readings are equally valid', 'Meaning is determined by shared assumptions of reading groups', 'Only experts can interpret literature', 'Texts have one correct meaning'], answer: 1 },
          { q: 'Northrop Frye\u2019s Anatomy of Criticism organizes literature by:', options: ['Historical period', 'Archetypal patterns and mythic modes', 'National origin', 'Difficulty level'], answer: 1 }
        ]
      },
      'lit-rhetoric': {
        desc: 'The ancient art of persuasion and poetic form: from Aristotle\u2019s foundational Poetics and Rhetoric through metre, prosody, figurative language, and genre classification.',
        sections: [
          'Aristotle\u2019s Poetics \u2014 Mimesis (imitation); tragedy and catharsis; plot (mythos) as \"soul of tragedy\"; unity of action; recognition (anagnorisis) and reversal (peripeteia)',
          'Classical Rhetoric \u2014 Ethos, pathos, logos; five canons of rhetoric (invention, arrangement, style, memory, delivery); Cicero and Quintilian; rhetorical situation',
          'Figures of Speech \u2014 Metaphor, simile, metonymy, synecdoche; irony (verbal, dramatic, situational); hyperbole, litotes, oxymoron; schemes: anaphora, chiasmus, parallelism',
          'Metre & Prosody \u2014 Stressed and unstressed syllables; iambic pentameter; hexameter; free verse; caesura and enjambment; scansion techniques; sprung rhythm (Hopkins)',
          'Poetic Forms \u2014 Sonnet (Petrarchan, Shakespearean); villanelle; haiku; ghazal; blank verse; epic conventions (invocation, in medias res, epic simile)',
          'Genre Theory in Practice \u2014 Epic, tragedy, comedy, satire, pastoral, elegy, ode, novel, short story; genre expectations and subversion; paratextual framing (Genette)'
        ],
        videos: ['Aristotle\u2019s Poetics \u2014 Academy of Ideas', 'Rhetoric: The Art of Persuasion \u2014 TED-Ed', 'Understanding Metre in Poetry'],
        books: ['Poetics \u2014 Aristotle (trans. Halliwell)', 'Rhetoric \u2014 Aristotle (trans. Kennedy)', 'The Princeton Encyclopedia of Poetry and Poetics (4th ed., 2012)'],
        quiz: [
          { q: 'In Aristotle\u2019s Poetics, catharsis refers to:', options: ['A type of poetic metre', 'The purging of emotions (especially pity and fear) through tragedy', 'The climax of a comedy', 'A rhetorical device'], answer: 1 },
          { q: 'Iambic pentameter consists of:', options: ['Five feet of two syllables each, with stress on the second syllable', 'Ten stressed syllables per line', 'Five lines per stanza', 'Rhyming couplets only'], answer: 0 },
          { q: 'Metonymy differs from metaphor in that it:', options: ['Compares two unlike things explicitly', 'Substitutes a related attribute for the thing itself (e.g., \"the Crown\" for monarchy)', 'Always involves exaggeration', 'Only occurs in poetry'], answer: 1 }
        ]
      },
      'lit-theory-intro': {
        desc: 'The major critical schools that shape how we interpret literature: from formalism and structuralism to feminist, Marxist, psychoanalytic, and postcolonial approaches.',
        sections: [
          'New Criticism & Formalism \u2014 Text as autonomous object; Cleanth Brooks, John Crowe Ransom, W.K. Wimsatt; intentional fallacy; affective fallacy; Russian Formalism (Shklovsky, defamiliarization)',
          'Structuralism \u2014 Ferdinand de Saussure\u2019s linguistics; signifier/signified; binary oppositions; Vladimir Propp (folk tale morphology); Roland Barthes (early); Claude L\u00e9vi-Strauss',
          'Post-Structuralism & Deconstruction \u2014 Jacques Derrida; diff\u00e9rance; instability of meaning; Barthes: \"The Death of the Author\"; Foucault: author function; play of signifiers',
          'Marxist Criticism \u2014 Literature and ideology; base/superstructure; Georg Luk\u00e1cs (realism); Louis Althusser (interpellation); Terry Eagleton; Fredric Jameson: The Political Unconscious',
          'Feminist Criticism \u2014 Simone de Beauvoir; Kate Millett: Sexual Politics; Elaine Showalter (gynocriticism); H\u00e9l\u00e8ne Cixous (\u00e9criture f\u00e9minine); Gilbert & Gubar: Madwoman in the Attic',
          'Psychoanalytic Criticism \u2014 Freud: Oedipus complex, uncanny, dream interpretation; Jacques Lacan: mirror stage, Symbolic/Imaginary/Real; Harold Bloom: anxiety of influence'
        ],
        videos: ['What is Literary Theory? \u2014 CrashCourse Literature', 'Structuralism & Semiotics Explained', 'Deconstruction: Derrida for Beginners'],
        books: ['Literary Theory: An Introduction \u2014 Terry Eagleton (1983, revised 2008)', 'Beginning Theory \u2014 Peter Barry (4th ed., 2017)', 'The Norton Anthology of Theory and Criticism (3rd ed., 2018)'],
        quiz: [
          { q: 'The \"intentional fallacy\" (Wimsatt & Beardsley) warns against:', options: ['Using too many literary devices', 'Judging a work based on the author\u2019s intended meaning rather than the text itself', 'Writing about emotions', 'Reading too closely'], answer: 1 },
          { q: 'Barthes\u2019 \"The Death of the Author\" argues that:', options: ['Authors should stop writing', 'The meaning of a text is not controlled by the author but created by the reader', 'Only biographies matter', 'Literature is dying'], answer: 1 },
          { q: 'Fredric Jameson\u2019s The Political Unconscious advocates:', options: ['Ignoring politics in literature', 'Always interpreting literature within its socio-economic and historical context', 'Psychoanalyzing authors', 'Close reading only'], answer: 1 }
        ]
      },
      'lit-ancient-epic': {
        desc: 'The foundational works of Western literature: Homeric epic, Greek tragedy and comedy, and the Roman poets who transmitted the classical tradition to the modern world.',
        sections: [
          'Homer: Iliad \u2014 Wrath of Achilles; heroic code; Homeric question (oral composition, Milman Parry); epithets and formulae; book structure; war and mortality',
          'Homer: Odyssey \u2014 Nostos (homecoming); Odysseus as trickster-hero; Penelope\u2019s agency; hospitality (xenia); narrative framing; influence on all subsequent quest narratives',
          'Greek Tragedy \u2014 Aeschylus (Oresteia); Sophocles (Oedipus Rex, Antigone); Euripides (Medea, Bacchae); role of the chorus; hamartia and hubris; stagecraft at the Theatre of Dionysus',
          'Greek Comedy \u2014 Old Comedy: Aristophanes (The Clouds, Lysistrata); political satire; New Comedy: Menander; stock characters; influence on Roman comedy (Plautus, Terence)',
          'Virgil: Aeneid \u2014 Rome\u2019s foundational epic; pietas vs furor; Augustan propaganda; reception of Homer; Dido as tragic figure; Books I, II, IV, VI as key texts',
          'Ovid: Metamorphoses \u2014 Myth compendium; transformation as theme; narrative playfulness; Daphne, Narcissus, Orpheus; enormous influence on Renaissance and modern literature'
        ],
        videos: ['The Iliad \u2014 CrashCourse Literature', 'Greek Tragedy Explained \u2014 National Theatre', 'Virgil\u2019s Aeneid \u2014 OverSimplified Classics'],
        books: ['The Iliad \u2014 Homer (trans. Emily Wilson, 2023 or Robert Fagles, 1990)', 'Oresteia \u2014 Aeschylus (trans. Robert Fagles)', 'Metamorphoses \u2014 Ovid (trans. Charles Martin)'],
        quiz: [
          { q: 'The \"Homeric question\" primarily concerns:', options: ['Whether the Trojan War really happened', 'Whether Homer was a single author or a tradition of oral poets', 'The meaning of the Odyssey', 'Greek geography'], answer: 1 },
          { q: 'Aristotle considered which play the ideal tragedy?', options: ['Antigone', 'Medea', 'Oedipus Rex', 'The Bacchae'], answer: 2 },
          { q: 'Virgil\u2019s Aeneid was written to:', options: ['Criticize Roman imperialism', 'Provide Rome with a foundational origin epic linked to Troy', 'Translate Homer into Latin', 'Celebrate Greek culture'], answer: 1 }
        ]
      },
      'lit-medieval': {
        desc: 'From Anglo-Saxon heroic verse to Dante\u2019s cosmic vision: the literary masterpieces of medieval Europe, including romance, allegory, and the birth of vernacular literature.',
        sections: [
          'Beowulf \u2014 Old English heroic poem; monsters and the heroic code; Christian and pagan elements; Seamus Heaney\u2019s 1999 translation; manuscript history (Cotton Vitellius A.xv)',
          'Dante: Divine Comedy \u2014 Inferno, Purgatorio, Paradiso; terza rima; allegory and theology; Virgil as guide; Beatrice; contrapasso (punishment fits the sin); Italian vernacular revolution',
          'Chaucer: Canterbury Tales \u2014 Frame narrative (pilgrimage); estates satire; Wife of Bath as proto-feminist; Miller\u2019s Tale (fabliau); Middle English; Chaucer as father of English literature',
          'Arthurian Romance \u2014 Chr\u00e9tien de Troyes (Lancelot, Perceval); Sir Gawain and the Green Knight; Tristan and Iseult; Thomas Malory: Le Morte d\u2019Arthur; courtly love tradition',
          'Troubadour & Lyric Poetry \u2014 Proven\u00e7al troubadours; fin\u2019amor (courtly love); troub\u00e8res in northern France; Minnesang in Germany; Petrarch as bridge to Renaissance',
          'Medieval Drama \u2014 Mystery plays (York, Chester, Wakefield cycles); morality plays (Everyman); liturgical drama; carnival and folk performance traditions'
        ],
        videos: ['Beowulf \u2014 CrashCourse Literature', 'Dante\u2019s Inferno \u2014 Summary & Analysis', 'Canterbury Tales \u2014 CrashCourse Literature'],
        books: ['Beowulf \u2014 trans. Seamus Heaney (1999)', 'The Divine Comedy \u2014 Dante (trans. Robert Hollander or Robin Kirkpatrick)', 'The Canterbury Tales \u2014 Geoffrey Chaucer (trans. David Wright or Nevill Coghill)'],
        quiz: [
          { q: 'Dante\u2019s Divine Comedy is structured in:', options: ['Two parts', 'Three canticles (Inferno, Purgatorio, Paradiso)', 'Five acts', 'Seven books'], answer: 1 },
          { q: 'The Canterbury Tales uses what narrative structure?', options: ['Stream of consciousness', 'A frame story of pilgrims telling tales', 'Epistolary letters', 'A single first-person narrator'], answer: 1 },
          { q: 'Sir Gawain and the Green Knight belongs to the genre of:', options: ['Epic poetry', 'Arthurian romance', 'Historical chronicle', 'Morality play'], answer: 1 }
        ]
      },
      'lit-shakespeare': {
        desc: 'The greatest writer in the English language: Shakespeare\u2019s tragedies, comedies, histories, and sonnets, plus the larger Elizabethan and Jacobean theatre context.',
        sections: [
          'Shakespeare\u2019s Tragedies \u2014 Hamlet (delay and interiority); Othello (jealousy and race); King Lear (authority and nothingness); Macbeth (ambition and guilt); Antony and Cleopatra',
          'Shakespeare\u2019s Comedies \u2014 A Midsummer Night\u2019s Dream; Twelfth Night (gender disguise); The Merchant of Venice (justice and mercy); Much Ado About Nothing; The Tempest (late romance)',
          'Shakespeare\u2019s Histories \u2014 Richard II, Henry IV Parts 1 & 2 (Falstaff), Henry V; Tudor propaganda and national myth; the Henriad as political education',
          'The Sonnets \u2014 154 sonnets; the Fair Youth and Dark Lady; procreation sonnets; Sonnet 18, 73, 116, 130; Shakespearean sonnet form (three quatrains + couplet)',
          'Elizabethan Theatre \u2014 The Globe Theatre; boy actors; patronage system; censorship; audience culture; blank verse conventions; soliloquy and aside as dramatic tools',
          'Contemporaries & Successors \u2014 Christopher Marlowe (Doctor Faustus, Tamburlaine); Ben Jonson (Volpone); John Webster (Duchess of Malfi); Jacobean revenge tragedy'
        ],
        videos: ['Shakespeare\u2019s Hamlet \u2014 CrashCourse Literature', 'Why Shakespeare Still Matters \u2014 TED (Germaine Greer)', 'The Globe Theatre Explained'],
        books: ['Shakespeare: The Invention of the Human \u2014 Harold Bloom (1998)', 'Will in the World \u2014 Stephen Greenblatt (2004)', 'The Norton Shakespeare (3rd ed., 2015)'],
        quiz: [
          { q: 'Which Shakespeare play is considered a \"problem play\" or late romance?', options: ['Hamlet', 'The Tempest', 'Romeo and Juliet', 'Henry V'], answer: 1 },
          { q: 'The Shakespearean sonnet form consists of:', options: ['An octave and a sestet', 'Three quatrains and a final couplet', 'Free verse', 'Heroic couplets throughout'], answer: 1 },
          { q: 'Christopher Marlowe\u2019s Doctor Faustus dramatizes:', options: ['The English Civil War', 'A scholar who sells his soul to the devil for knowledge and power', 'The founding of the Globe Theatre', 'The War of the Roses'], answer: 1 }
        ]
      },
      'lit-modernism': {
        desc: 'The literary revolution of the early 20th century: stream of consciousness, fragmentation, myth, and the radical experimentation that defined Joyce, Woolf, Kafka, Eliot, and Faulkner.',
        sections: [
          'James Joyce \u2014 Dubliners (epiphanies), A Portrait of the Artist as a Young Man, Ulysses (stream of consciousness, Homeric parallels, Bloomsday), Finnegans Wake (language as music)',
          'Virginia Woolf \u2014 Mrs Dalloway (time and consciousness), To the Lighthouse (elegy and perception), Orlando (gender fluidity), A Room of One\u2019s Own (feminist manifesto), narrative technique',
          'Franz Kafka \u2014 The Metamorphosis (alienation), The Trial (bureaucratic absurdity), The Castle; Kafkaesque as cultural concept; parable and allegory; biographical readings',
          'Marcel Proust \u2014 In Search of Lost Time (involuntary memory, the madeleine); seven-volume structure; time, consciousness, and social observation; influence on memory studies',
          'T.S. Eliot \u2014 The Waste Land (1922, fragmentation, mythic method); The Love Song of J. Alfred Prufrock; Four Quartets; \"Tradition and the Individual Talent\"; Eliot as critic',
          'William Faulkner \u2014 The Sound and the Fury (multiple narrators, time disorder); As I Lay Dying; Absalom, Absalom!; Yoknapatawpha County; Southern Gothic; Nobel Prize 1949'
        ],
        videos: ['Modernism: WTF? \u2014 Tom Nicholas', 'James Joyce\u2019s Ulysses Explained', 'The Waste Land \u2014 CrashCourse Literature'],
        books: ['Ulysses \u2014 James Joyce (1922)', 'Mrs Dalloway \u2014 Virginia Woolf (1925)', 'The Waste Land and Other Poems \u2014 T.S. Eliot (1922)'],
        quiz: [
          { q: 'Joyce\u2019s Ulysses is structured as a parallel to:', options: ['The Bible', 'Homer\u2019s Odyssey', 'Dante\u2019s Inferno', 'Shakespeare\u2019s Hamlet'], answer: 1 },
          { q: 'T.S. Eliot\u2019s \"mythic method\" involves:', options: ['Writing new myths', 'Using mythological and literary allusions to give shape to modern chaos', 'Studying ancient mythology academically', 'Rejecting all tradition'], answer: 1 },
          { q: 'Kafka\u2019s The Metamorphosis opens with Gregor Samsa transformed into:', options: ['A bird', 'A giant insect', 'A stone', 'A shadow'], answer: 1 }
        ]
      },
      'lit-postcolonial': {
        desc: 'Literature from formerly colonized nations: the voices that wrote back to empire, invented magical realism, and redefined the global literary canon.',
        sections: [
          'Chinua Achebe \u2014 Things Fall Apart (1958): Igbo life before colonialism; response to Conrad\u2019s Heart of Darkness; \"An Image of Africa\" (1977) essay; father of African literature',
          'Salman Rushdie \u2014 Midnight\u2019s Children (1981): magical realism and Indian independence; The Satanic Verses (1988) and the fatwa; chutnification of English; hybrid identity',
          'Gabriel Garc\u00eda M\u00e1rquez \u2014 One Hundred Years of Solitude (1967): magical realism; Macondo as mythic Latin America; Nobel Prize 1982; influence on world literature',
          'Ng\u0169g\u0129 wa Thiong\u2019o \u2014 A Grain of Wheat; Decolonising the Mind (1986): argument for writing in African languages; politics of language; imprisonment under Kenyan regime',
          'Arundhati Roy \u2014 The God of Small Things (1997): caste, forbidden love, postcolonial India; Booker Prize; Roy as political essayist and activist',
          'Caribbean & Pacific Voices \u2014 Derek Walcott (Omeros); V.S. Naipaul; Jean Rhys (Wide Sargasso Sea as response to Jane Eyre); Jamaica Kincaid; Albert Wendt (Pacific literature)'
        ],
        videos: ['Postcolonial Literature Explained \u2014 Sprouts', 'Things Fall Apart \u2014 CrashCourse Literature', 'Magical Realism: What Is It?'],
        books: ['Things Fall Apart \u2014 Chinua Achebe (1958)', 'One Hundred Years of Solitude \u2014 Gabriel Garc\u00eda M\u00e1rquez (1967)', 'Decolonising the Mind \u2014 Ng\u0169g\u0129 wa Thiong\u2019o (1986)'],
        quiz: [
          { q: 'Achebe\u2019s \"An Image of Africa\" criticizes which canonical novel?', options: ['Moby-Dick', 'Heart of Darkness by Joseph Conrad', 'Lord of the Flies', 'Robinson Crusoe'], answer: 1 },
          { q: 'Magical realism as a literary technique involves:', options: ['Writing fantasy novels', 'Incorporating supernatural elements into an otherwise realistic narrative as though they are ordinary', 'Only writing about magic', 'Rejecting realism entirely'], answer: 1 },
          { q: 'Ng\u0169g\u0129 wa Thiong\u2019o\u2019s Decolonising the Mind argues that African writers should:', options: ['Only write in English', 'Write in their native African languages rather than colonial languages', 'Stop writing novels', 'Imitate European literary forms'], answer: 1 }
        ]
      }
    };

    function getExternalRegistry(name) {
      return window[name] || {};
    }

    function toArray(value) {
      return Array.isArray(value) ? value : [];
    }

    function getItemsByIds(registryName, ids) {
      var registry = getExternalRegistry(registryName);
      return toArray(ids).map(function(id) { return registry[id]; }).filter(Boolean);
    }

    function flattenQuizQuestions(quizSets) {
      return quizSets.reduce(function(allQuestions, quizSet) {
        return allQuestions.concat(toArray(quizSet && quizSet.questions));
      }, []);
    }

    function collectCourseBooks(rawCourse, lessons) {
      if (rawCourse.books && rawCourse.books.length > 0) return rawCourse.books;
      return lessons.reduce(function(books, lesson) {
        return books.concat(toArray(lesson && lesson.readings));
      }, []);
    }

    function buildSectionsFromLessons(rawCourse, lessons) {
      if (rawCourse.sections && rawCourse.sections.length > 0) return rawCourse.sections;
      return lessons.map(function(lesson) {
        return {
          heading: lesson.title,
          content: lesson.summary || ''
        };
      });
    }

    function buildVideoEntries(rawCourse, mediaItems) {
      if (rawCourse.videos && rawCourse.videos.length > 0) return rawCourse.videos;
      return mediaItems.filter(function(item) {
        return item.type === 'youtube';
      }).map(function(item) {
        return {
          title: item.title,
          youtubeId: item.youtubeId
        };
      });
    }

    function buildMediaLinks(mediaItems) {
      return mediaItems.filter(function(item) {
        return !!item.url && item.type !== 'youtube';
      }).map(function(item) {
        return {
          title: item.title,
          url: item.url,
          note: item.whyThisMatters || item.summary || '',
          type: item.type || 'resource',
          placement: item.placement || '',
          required: !!item.required,
          fallback: item.fallback || ''
        };
      });
    }

    function normalizeExternalCourse(rawCourse) {
      if (!rawCourse) return null;
      var lessons = getItemsByIds('HUMAN_ACADEMY_EXTERNAL_LESSONS', rawCourse.lessonIds || rawCourse.lessons);
      var quizSets = getItemsByIds('HUMAN_ACADEMY_EXTERNAL_QUIZZES', rawCourse.quizIds);
      var tests = getItemsByIds('HUMAN_ACADEMY_EXTERNAL_TESTS', rawCourse.testId ? [rawCourse.testId] : rawCourse.testIds);
      var labs = getItemsByIds('HUMAN_ACADEMY_EXTERNAL_LABS', rawCourse.labIds);
      var projects = getItemsByIds('HUMAN_ACADEMY_EXTERNAL_PROJECTS', rawCourse.projectIds);
      var mediaItems = getItemsByIds('HUMAN_ACADEMY_EXTERNAL_MEDIA', rawCourse.mediaIds);
      return Object.assign({}, rawCourse, {
        desc: rawCourse.desc || rawCourse.summary || '',
        sections: buildSectionsFromLessons(rawCourse, lessons),
        videos: buildVideoEntries(rawCourse, mediaItems),
        books: collectCourseBooks(rawCourse, lessons),
        quiz: rawCourse.quiz && rawCourse.quiz.length > 0 ? rawCourse.quiz : flattenQuizQuestions(quizSets),
        lessons: lessons,
        tests: tests,
        labs: labs,
        projects: projects,
        media: mediaItems,
        mediaLinks: buildMediaLinks(mediaItems),
        learningObjectives: toArray(rawCourse.learningObjectives),
        masteryCriteria: toArray(rawCourse.masteryCriteria)
      });
    }

    function getCourseData(nodeId) {
      var externalCourses = getExternalRegistry('HUMAN_ACADEMY_EXTERNAL_COURSES');
      if (externalCourses[nodeId]) return normalizeExternalCourse(externalCourses[nodeId]);
      if (philosophyCourses[nodeId]) return philosophyCourses[nodeId];
      if (historyCourses[nodeId]) return historyCourses[nodeId];
      if (literatureCourses[nodeId]) return literatureCourses[nodeId];
      var tree = getCurrentTree();
      var node = tree ? tree.nodes.find(function(n) { return n.id === nodeId; }) : null;
      if (!node) return { desc: '', sections: [], videos: [], books: [], quiz: [] };
      return {
        desc: 'Explore the key concepts, thinkers, and debates in ' + node.title + '.',
        sections: (node.topics || []).map(function(t) { return t; }),
        videos: [],
        books: [],
        quiz: []
      };
    }

window.HUMAN_ACADEMY_PLAYABLE_CONTENT = {
  disciplineTrees: disciplineTrees,
  philosophyCourses: philosophyCourses,
  historyCourses: historyCourses,
  literatureCourses: literatureCourses
};

