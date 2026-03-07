# Human Academy — Project Planning

## Vision
A comprehensive, AI-powered learning academy covering the full breadth of human knowledge. Skill tree based, interactive, and beautifully designed. The repository of all human knowledge structured so anyone can learn anything.

## Core Concept
- Every major school of thought is a **skill tree**
- Trees are **nested** (disciplines → sub-disciplines → topics → concepts)
- Users progress through nodes by completing lessons/quizzes/challenges
- AI generates content dynamically — eliminates the man-hours of manual content creation

## UI / UX Requirements
- Zoomable canvas (think Figma / Obsidian style)
- Drag to pan navigation
- Collapsible/expandable tree branches
- Color-coded by domain (Humanities = warm tones, Sciences = cool tones, etc.)
- Progress tracking per node (locked / unlocked / in-progress / mastered)
- Animated, satisfying unlock interactions
- Fun to explore — designed to spark curiosity, not just complete tasks

## Data & Storage
- Per-user progress must be **minimal** by design (just node states: locked/unlocked/complete)
- Start with **localStorage** for MVP
- Plan for **backend / cloud sync** when local storage becomes too large
- May evolve into a full website / SaaS product
- No heavy per-user data — the content lives in the app, not per user

## Content Strategy
- AI generates lesson content, quizzes, and explanations on demand
- Content is structured per node in the skill tree
- Each node: title, short description, prerequisites, content body, quiz/challenge
- Depth levels: Awareness → Fundamentals → Proficiency → Mastery

## Tech Stack (TBD)
- Frontend: likely React or Vue for web; possibly Svelte for performance
- Skill tree rendering: D3.js or custom canvas/WebGL for zoomable trees
- Storage: localStorage → IndexedDB → cloud DB
- AI: API calls for dynamic content generation
- Possible PWA for offline use

## Domains (see schools-of-thought.md)
- Humanities, Social Sciences, Natural Sciences, Formal Sciences, Applied Sciences
- Crafts & Traditional Arts, Interdisciplinary Fields
- Everything is included — breadth first, depth second

## Tree of Knowledge Tab (replaces Roadmap tab)

### Concept
A dedicated **"Tree of Knowledge"** nav tab that serves as a bird's-eye-view meta-dashboard of the user's entire learning journey. Where the Skill Tree tab tracks individual activated disciplines and the Domains tab lets you browse/activate, the Tree of Knowledge tab is the **big picture**.

### What it shows
- **Massive node graphs** — one per discipline the user has interacted with. These are not the small per-discipline trees; they are full-scale, zoomed-out knowledge maps that encompass an entire discipline's breadth (all sub-topics, all tiers, cross-links).
- **Unopened / unactivated disciplines** still appear as collapsed panels with a **percentage-complete progress bar** (0% if untouched). This gives at-a-glance completeness across ALL of human knowledge — not just what the user has activated.
- Opened disciplines expand into their full node graph with pan/zoom, showing mastered/unlocked/locked states at scale.

### Purpose
- **Metadata overview** — lets the user see how much of each discipline (and each domain) they've accomplished without drilling into individual trees.
- **Motivation & curiosity driver** — seeing 0% on dozens of disciplines naturally motivates exploration.
- **Cross-discipline awareness** — at this scale, cross-discipline links become visible (e.g., Philosophy ↔ Cognitive Science, Mathematics ↔ Physics).

### UI Details
- Each domain is a collapsible section header (Humanities, Social Sciences, etc.) with an aggregate % bar.
- Under each domain, every discipline is listed with:
  - Name
  - % complete progress bar
  - Node count (mastered / total)
  - Click to expand → full zoomable node graph inline
- Graphs at this scale should lazy-load and use efficient rendering (canvas or virtualized DOM) since they'll be massive once disciplines are fully populated.
- The tab replaces the current "Roadmap" nav link.

### Data Considerations
- Progress bars are computed from the same localStorage node-state data used by the Skill Tree tab — no new storage needed.
- Aggregate percentages: domain % = average of its discipline %s (weighted by node count).
- Disciplines without playable trees yet show 0% with a "Coming soon" indicator but still occupy their slot so the user sees the full scope.

### Future
- This becomes the single most impressive view in the app — a literal map of everything a human can know, with your personal progress overlaid.
- Could support heatmap coloring (green = high mastery, red = untouched) for visual impact.
- Search/filter within the Tree of Knowledge to find any topic across all disciplines.

---

## Schools of Thought Expansion Plan

> **Goal**: Make schools-of-thought.md exhaustive enough that completing any discipline gives a person research-level understanding of that field. Every sub-topic, every major thinker, every branch — nothing left out. A completed learner should be able to *advance* their field.

> **How to use**: Feed me each step number (e.g. "Do step 1") and I'll expand that section in schools-of-thought.md with full sub-topic trees, named thinkers/theorists, historical context, and any missing disciplines.

---

### PHASE 1 — HUMANITIES (Steps 1–10)

**Step 1: Philosophy — Complete Overhaul**
- Expand every branch to 3–4 levels of depth (e.g., Ethics → Normative Ethics → Consequentialism → Act vs Rule Utilitarianism)
- Add ALL major philosophers by era: Pre-Socratics through contemporary (name every one: Thales, Anaximander, Heraclitus, Parmenides, Zeno, Democritus, Socrates, Plato, Aristotle, Plotinus, Augustine, Aquinas, Ockham, Descartes, Spinoza, Leibniz, Locke, Berkeley, Hume, Kant, Hegel, Schopenhauer, Kierkegaard, Nietzsche, Marx, Frege, Russell, Wittgenstein, Heidegger, Sartre, de Beauvoir, Arendt, Rawls, Foucault, Derrida, Deleuze, Kripke, Dennett, Chalmers, Singer, etc.)
- Add Philosophy of Technology, Philosophy of Biology, Philosophy of Physics, Feminist Philosophy, Philosophy of Race, Philosophy of Law, Experimental Philosophy
- Add every major Eastern tradition: Confucianism, Daoism, Legalism, Mohism, Buddhist philosophy (Nagarjuna, Vasubandhu), Hindu philosophy (Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta), Jain philosophy
- Add African philosophy: Ubuntu, Sage philosophy, Ethnophilosophy, Négritude

**Step 2: History — Complete Overhaul**
- Break into granular eras: Prehistory, Ancient Near East, Classical Antiquity, Late Antiquity, Early Medieval, High Medieval, Late Medieval, Early Modern, Age of Revolutions, Industrial Age, 20th Century, Contemporary
- Add regional histories: Chinese, Indian, Japanese, Korean, Southeast Asian, Central Asian, Persian/Iranian, Ottoman/Turkish, Sub-Saharan African, North African, Mesoamerican, Andean, Pacific Islander, Australian Aboriginal
- Add thematic histories: History of Medicine, History of Mathematics, History of Philosophy, History of Education, History of Warfare, History of Trade & Commerce, History of Navigation, History of Religion, History of Law, Diplomatic History, History of Espionage & Intelligence, History of Labor, History of Colonialism & Decolonization, History of Slavery & Abolition
- Add historiography methods: primary source analysis, oral history, quantitative history, microhistory, longue durée, counterfactual history

**Step 3: Languages & Linguistics — Complete Overhaul**
- Expand Linguistics to full research depth: Phonetics (articulatory, acoustic, auditory), Phonology (autosegmental, metrical, optimality theory), Morphology (inflectional, derivational, polysynthesis), Syntax (generative grammar, minimalism, HPSG, LFG, construction grammar, dependency grammar), Semantics (formal, lexical, cognitive), Pragmatics (speech acts, implicature, relevance theory, discourse analysis)
- Add: Neurolinguistics, Language Acquisition (L1 & L2), Corpus Linguistics, Forensic Linguistics, Applied Linguistics, Translation Studies, Lexicography, Dialectology, Language Documentation & Endangerment, Writing Systems & Orthography, Sign Language Linguistics
- Add Language Families survey: Indo-European, Sino-Tibetan, Afro-Asiatic, Niger-Congo, Austronesian, Dravidian, Turkic, Uralic, Japonic, Koreanic, Tai-Kadai, Austro-Asiatic, Pama-Nyungan, Na-Dene, Algonquian, Quechuan, Tupian, isolates
- Expand Literature: add every major literary period/movement (Epic, Classical, Medieval Romance, Renaissance, Enlightenment, Romanticism, Realism, Naturalism, Modernism, Postmodernism, Magical Realism, Afrofuturism) + major authors per tradition

**Step 4: Visual Arts — Complete Overhaul**
- Add art movements chronologically: Cave Art, Egyptian, Greek/Roman, Byzantine, Islamic, Romanesque, Gothic, Renaissance, Mannerism, Baroque, Rococo, Neoclassicism, Romanticism, Realism, Impressionism, Post-Impressionism, Fauvism, Expressionism, Cubism, Futurism, Dada, Surrealism, Abstract Expressionism, Pop Art, Minimalism, Conceptual Art, Land Art, Performance Art, Digital Art, Street Art, NFT/Generative Art
- Add techniques per medium (oil, watercolor, acrylic, fresco, encaustic, tempera, pastel, charcoal, ink)
- Add major artists by era (hundreds of names across all cultures)
- Add Art Theory & Criticism, Museum Studies, Art Conservation, Art Market & Economics
- Add non-Western art traditions: Chinese painting, Japanese ukiyo-e, Indian miniatures, Islamic geometric art, African sculpture, Indigenous Australian art, Pre-Columbian art, Oceanic art

**Step 5: Performing Arts — Complete Overhaul**
- Music: expand to all genres, all instruments, all compositional techniques, acoustics, music technology, electronic music production, sound design
- Music Theory deep dive: harmony, counterpoint, orchestration, form analysis, Schenkerian analysis, set theory, serialism, spectral music, microtonality, tuning systems (Pythagorean, meantone, equal temperament, just intonation)
- Named composers: hundreds from Medieval through contemporary across all traditions (Western, Indian raga, Chinese, Japanese, African, Latin American, Middle Eastern)
- Theatre: Greek tragedy/comedy, Roman, Medieval mystery/miracle plays, Commedia dell'arte, Elizabethan, French Neoclassical, Restoration, Naturalism, Expressionism, Epic Theatre (Brecht), Absurdism, Postdramatic Theatre
- Dance: ballet, modern, contemporary, jazz, tap, hip-hop, folk/traditional (hundreds of traditions), Butoh, Kathak, Bharatanatyam, Flamenco, African, ballroom, contact improvisation
- Film: complete film theory (montage, mise-en-scène, auteur theory, apparatus theory, feminist film theory, Third Cinema), genres, national cinemas, animation, documentary, VFX history

**Step 6: Religion & Theology — Complete Overhaul**
- Expand every major religion to seminary/academic depth:
  - Christianity: Patristics, Scholasticism, Reformation theology, Catholic/Orthodox/Protestant distinctions, Liberation Theology, Process Theology, Pentecostalism, every denomination's distinctive theology, Biblical scholarship (textual criticism, form criticism, redaction criticism, historical Jesus studies)
  - Islam: Sunni schools (Hanafi, Maliki, Shafi'i, Hanbali), Shia branches (Twelver, Ismaili, Zaydi), Sufism (every major order), Kalam, Falsafa, Quran sciences (tafsir, tajwid, asbab al-nuzul), Hadith sciences, Islamic jurisprudence (usul al-fiqh)
  - Judaism: Mishnah, Talmud, Midrash, Halakha, Kabbalah, Hasidism, Reform/Conservative/Orthodox, Jewish philosophy (Maimonides, Spinoza, Buber, Levinas, Heschel)
  - Buddhism: Theravada, Mahayana (Madhyamaka, Yogacara, Pure Land, Chan/Zen), Vajrayana, Abhidharma, Pali Canon
  - Hinduism: Vedas, Upanishads, Bhagavad Gita, six orthodox schools, Tantra, devotional movements (Bhakti, Shaivism, Vaishnavism, Shaktism)
- Add: New Religious Movements, Secularism studies, Atheism & Agnosticism as philosophical positions, Ritual Studies, Sacred Texts comparative study

**Step 7: Law — Complete Overhaul**
- Add full legal theory depth: Natural Law, Legal Positivism (Austin, Hart, Kelsen), Legal Realism, Critical Legal Studies, Law & Economics, Feminist Jurisprudence, Critical Race Theory in Law
- Expand every branch of law: Property Law, Tort Law, Corporate/Business Law, Tax Law, Immigration Law, Family Law, Intellectual Property (Patent, Copyright, Trademark, Trade Secret), Media & Communications Law, Health Law, Space Law, Maritime/Admiralty Law, Cyber Law, Human Rights Law, Humanitarian Law (Law of Armed Conflict)
- Add Legal Systems survey: Common Law, Civil Law, Islamic Law (Sharia), Customary Law, Mixed systems
- Add Legal History: Roman law, English common law evolution, Napoleonic Code, Constitutional history
- Add Forensic Science expansion: DNA analysis, ballistics, digital forensics, forensic psychology, forensic accounting, toxicology, forensic pathology

**Step 8: NEW DISCIPLINE — Communication Studies**
- Rhetoric (classical: Aristotle, Cicero, Quintilian; modern: Burke, Perelman, Toulmin)
- Media Studies (Marshall McLuhan, media ecology, political economy of media, audience studies)
- Journalism (investigative, broadcast, photojournalism, ethics, press freedom)
- Public Relations & Strategic Communication
- Interpersonal Communication, Nonverbal Communication
- Organizational Communication
- Health Communication
- Political Communication & Propaganda Studies
- Digital Media & Social Media Studies

**Step 9: NEW DISCIPLINE — Cultural Studies & Gender Studies**
- Cultural Studies (Birmingham School, Stuart Hall, Raymond Williams, Gramsci's hegemony)
- Gender Studies & Feminist Theory (waves of feminism, intersectionality, queer theory, masculinity studies)
- Postcolonial Studies (Said, Spivak, Bhabha, Fanon)
- Race & Ethnic Studies (Critical Race Theory, Afrocentrism, Latinx studies, Asian-American studies, Indigenous studies)
- Disability Studies
- Fat Studies
- Age/Gerontology Studies
- Sexuality Studies

**Step 10: NEW DISCIPLINE — Library & Information Science**
- Information Organization (classification systems: Dewey, LOC, UDC)
- Archival Science
- Knowledge Management
- Information Retrieval
- Data Curation
- Digital Libraries
- Information Ethics & Policy
- Bibliometrics & Scientometrics

---

### PHASE 2 — SOCIAL SCIENCES (Steps 11–19)

**Step 11: Psychology — Complete Overhaul**
- Add every major school: Structuralism (Wundt, Titchener), Functionalism (James), Behaviorism (Watson, Skinner, Pavlov), Gestalt (Wertheimer, Koffka, Köhler), Psychoanalysis (Freud, Jung, Adler, Klein, Winnicott, Lacan), Humanistic (Maslow, Rogers), Cognitive (Neisser, Broadbent, Kahneman, Tversky), Ecological (Gibson, Bronfenbrenner)
- Expand every subfield to research depth: Sensation & Perception, Learning & Memory, Emotion, Motivation, Intelligence (IQ debate, multiple intelligences, emotional intelligence), Personality (Big Five, MBTI critique, trait theory), Abnormal Psychology (full DSM-5 categories), Health Psychology, Sport Psychology, Environmental Psychology, Traffic Psychology, Forensic Psychology, Industrial-Organizational Psychology, Consumer Psychology, Military Psychology, Psychology of Religion, Cross-Cultural Psychology, Community Psychology
- Add Research Methods: experimental design, quasi-experiments, correlational studies, longitudinal, cross-sectional, single-case, meta-analysis, statistical methods (ANOVA, regression, SEM, IRT, Bayesian methods), replication crisis

**Step 12: Sociology — Complete Overhaul**
- Add all founders & major theorists: Comte, Durkheim, Weber, Marx, Simmel, Mead, Parsons, Merton, Goffman, Bourdieu, Habermas, Luhmann, Giddens, Butler, Bauman, Latour, Collins
- Expand every subfield: Sociology of Education, Sociology of Work, Sociology of Deviance & Crime (Criminology), Sociology of Law, Sociology of Science, Sociology of Technology, Sociology of Sport, Sociology of Food, Sociology of Emotions, Medical Sociology, Political Sociology, Rural Sociology, Sociology of Aging, Sociology of the Body, Sociology of Migration, Sociology of Disaster, Visual Sociology, Computational Sociology, Public Sociology
- Add Research Methods: ethnography, survey research, content analysis, historical-comparative, network analysis, grounded theory

**Step 13: Political Science — Complete Overhaul**
- Add all major political ideologies at depth: Liberalism (classical, social, neoliberal), Conservatism (traditional, neoconservative, paleoconservative), Socialism (utopian, scientific, democratic), Communism (Marxism, Leninism, Maoism, Trotskyism), Anarchism (mutualism, collectivist, communist, individualist, syndicalist), Fascism, Libertarianism, Social Democracy, Green Politics, Populism, Nationalism, Feminism as political ideology, Religious politics (Christian democracy, Islamism, Hindu nationalism, Buddhist nationalism, Zionism)
- Expand IR: Realism, Liberalism, Constructivism, English School, Marxist IR, Poststructuralist IR, Feminist IR, Security Studies, Peace & Conflict Studies, Diplomacy, International Organizations, International Political Economy, Nuclear Politics, Cyber Politics
- Add: Comparative Regime Types, Authoritarianism Studies, Democratization, Public Opinion, Political Psychology, Political Communication, Political Geography, Subnational Politics, Indigenous Governance

**Step 14: Economics — Complete Overhaul**
- Add all schools of economic thought: Classical (Smith, Ricardo, Mill), Marxian, Neoclassical (Marshall, Walras, Jevons), Austrian (Menger, Mises, Hayek), Keynesian, Post-Keynesian, Monetarism (Friedman), New Classical (Lucas, Sargent), New Keynesian, Institutional (Veblen, Commons, North), Evolutionary Economics, Ecological Economics, Feminist Economics, Complexity Economics
- Expand every subfield: Public Economics, Health Economics, Education Economics, Agricultural Economics, Financial Economics, Monetary Economics, Industrial Organization, Law & Economics, Economics of Innovation, Economics of Information, Welfare Economics, Urban Economics, Transport Economics, Energy Economics, Economics of Crime, Economics of War, Experimental Economics, Neuroeconomics
- Add: full Econometrics depth (time series, panel data, causal inference, instrumental variables, regression discontinuity, difference-in-differences, synthetic control), History of Economic Thought as a proper sub-tree

**Step 15: Anthropology — Complete Overhaul**
- Add all major schools: Evolutionism (Morgan, Tylor), Diffusionism, Functionalism (Malinowski, Radcliffe-Brown), Structural-functionalism, Structuralism (Lévi-Strauss), Interpretive (Geertz), Postmodern, Feminist anthropology, Multispecies ethnography
- Expand: Political Anthropology, Economic Anthropology, Legal Anthropology, Anthropology of Religion, Anthropology of Art, Anthropology of Food, Urban Anthropology, Visual Anthropology, Digital Anthropology, Anthropology of Migration, Kinship Studies, Anthropology of the Body, Anthropology of Death, Anthropology of Childhood, Environmental Anthropology, Anthropology of Infrastructure
- Expand Archaeology: Paleolithic, Mesolithic, Neolithic, Bronze Age, Iron Age, Classical, Medieval, Historical, Underwater, Aerial/Satellite, Ethnoarchaeology, Experimental Archaeology, Bioarchaeology, Zooarchaeology, Geoarchaeology, Archaeological Theory (processual vs. post-processual)

**Step 16: Geography — Complete Overhaul**
- Physical Geography deep expansion: Biogeography, Pedology, Cryosphere, Hydrology (fluvial, karst, groundwater), Coastal Geomorphology, Aeolian processes, Plate Tectonics from geographic lens
- Human Geography deep expansion: Economic Geography, Political Geography (borders, territory, geopolitics), Social Geography, Population Geography, Health Geography, Geography of Religion, Geography of Crime, Transport Geography, Tourism Geography, Development Geography, Feminist Geography, Children's Geography, Geographies of Sexualities
- GIS & Remote Sensing expansion: LiDAR, SAR, multispectral/hyperspectral imaging, spatial analysis, geostatistics, web mapping
- Add: Critical Geography, Quantitative Revolution, Behavioral Geography, Time Geography (Hägerstrand)

**Step 17: Linguistics — Full Research Depth**
- (Mostly covered in Step 3, but add): Formal Semantics (Montague grammar, type theory), Formal Pragmatics, Laboratory Phonology, Prosody & Intonation, Language Typology (Greenberg, WALS), Creole & Pidgin Studies, Language Policy & Planning, Ecolinguistics, Clinical Linguistics, Biolinguistics (Chomsky, Berwick), Evolutionary Linguistics (origins of language), Philosophy of Linguistics
- Named linguists: Saussure, Chomsky, Sapir, Whorf, Bloomfield, Jakobson, Halle, Labov, Lakoff, Langacker, Goldberg, Pinker, Tomasello, Bybee, Croft, Haspelmath

**Step 18: Business & Management — Complete Overhaul**
- Add: Strategic Management (Porter, Mintzberg, Barney), International Business, Supply Chain Management, Project Management, Human Resource Management, Knowledge Management, Innovation Management, Risk Management, Change Management, Quality Management (Six Sigma, TQM, Lean), Decision Science
- Finance expansion: Corporate Finance, Investment Theory (CAPM, APT, Fama-French), Behavioral Finance, Derivatives & Options (Black-Scholes), Fixed Income, Real Estate Finance, Fintech, Islamic Finance
- Accounting expansion: Financial Accounting, Managerial Accounting, Auditing, Tax Accounting, Forensic Accounting, International Accounting Standards (IFRS, GAAP)
- Marketing expansion: Consumer Behavior, Branding, Digital Marketing, Marketing Analytics, Neuromarketing, Social Marketing, Services Marketing, B2B Marketing
- Add: Entrepreneurship (lean startup, venture capital, social entrepreneurship), Nonprofit Management, Public Sector Management, Health Care Management

**Step 19: NEW DISCIPLINE — Social Work & Public Policy**
- Social Work theory & practice, Community Development, Child Welfare, Substance Abuse, Mental Health Social Work, Gerontological Social Work, School Social Work
- Public Policy: policy analysis, policy process (Kingdon, Sabatier), implementation studies, evaluation research, evidence-based policy
- Criminology & Criminal Justice (if not fully covered under Sociology): classical, positivist, Chicago School, labeling theory, rational choice, routine activity, feminist criminology, green criminology, restorative justice, penology

---

### PHASE 3 — NATURAL SCIENCES (Steps 20–28)

**Step 20: Mathematics — Complete Overhaul (Part 1: Pure Math)**
- Number Theory: primes, divisibility, modular arithmetic, Diophantine equations, analytic number theory (Riemann zeta, prime number theorem), algebraic number theory (class field theory, p-adic numbers), cryptographic number theory, unsolved problems (Goldbach, twin primes, Riemann hypothesis)
- Algebra: Group Theory (symmetric, cyclic, Lie groups, representation theory), Ring Theory, Field Theory (Galois theory), Module Theory, Category Theory, Homological Algebra, Commutative Algebra, Non-commutative Algebra, Universal Algebra
- Geometry: Euclidean, Non-Euclidean (hyperbolic, elliptic), Projective, Affine, Differential Geometry (curves, surfaces, Riemannian manifolds, connections, curvature), Algebraic Geometry (varieties, schemes, sheaves, cohomology), Discrete/Computational Geometry, Convex Geometry, Fractal Geometry, Symplectic Geometry, Tropical Geometry
- Topology: Point-Set Topology, Algebraic Topology (fundamental group, homology, cohomology, homotopy theory), Differential Topology, Geometric Topology (knot theory, 3-manifolds, 4-manifolds), Topological Data Analysis
- Analysis: Real Analysis (measure theory, Lebesgue integration), Complex Analysis (conformal maps, Riemann surfaces, several complex variables), Functional Analysis (Banach spaces, Hilbert spaces, operator theory, spectral theory), Harmonic Analysis (Fourier, wavelets), p-adic Analysis, Non-standard Analysis

**Step 21: Mathematics — Complete Overhaul (Part 2: Applied & Foundations)**
- Differential Equations: ODE (existence/uniqueness, stability, bifurcation, chaos theory), PDE (elliptic, parabolic, hyperbolic, Navier-Stokes, Schrödinger, wave equation, heat equation, Maxwell's equations), Dynamical Systems, Control Theory
- Probability & Statistics: Probability Theory (axioms, random variables, distributions, limit theorems, martingales, stochastic processes, Markov chains, Brownian motion, stochastic calculus/Itô), Statistics (Bayesian, frequentist, nonparametric, survival analysis, time series, spatial statistics, causal inference, experimental design, sampling theory, multivariate analysis, high-dimensional statistics)
- Combinatorics: Enumerative (generating functions, Pólya counting), Extremal (Ramsey theory, Turán), Algebraic Combinatorics, Graph Theory (spectral, probabilistic, structural), Matroid Theory, Design Theory, Coding Theory
- Logic & Foundations: Propositional Logic, First-Order Logic, Set Theory (ZFC, large cardinals, forcing, independence results), Model Theory, Proof Theory, Recursion Theory/Computability, Constructive Mathematics, Reverse Mathematics, Type Theory (Martin-Löf, HoTT)
- Applied Mathematics: Numerical Analysis (linear algebra, ODE/PDE solvers, interpolation, quadrature, optimization, error analysis), Mathematical Modeling, Operations Research (linear/integer/nonlinear programming, network optimization, queuing theory, scheduling), Game Theory (cooperative, non-cooperative, evolutionary, mechanism design, auction theory), Mathematical Biology, Mathematical Physics, Financial Mathematics, Information Theory (Shannon, entropy, channel capacity, data compression, error-correcting codes), Cryptography (symmetric, asymmetric, hash functions, zero-knowledge proofs, post-quantum)
- Named mathematicians: hundreds from Euclid through modern Fields Medalists — organized by era and field

**Step 22: Physics — Complete Overhaul**
- Classical Mechanics deep dive: Lagrangian, Hamiltonian, rigid body dynamics, continuum mechanics, chaos theory, celestial mechanics, orbital mechanics
- Thermodynamics & Statistical Mechanics: laws of thermodynamics, entropy, ensembles (microcanonical, canonical, grand canonical), partition functions, phase transitions, critical phenomena, renormalization group, non-equilibrium thermodynamics, irreversible processes
- Electromagnetism: Maxwell's equations in full, electromagnetic waves, waveguides, antennas, special relativity from EM perspective, classical electrodynamics (Jackson level), magnetohydrodynamics
- Optics: geometric optics, wave optics (interference, diffraction, polarization), quantum optics, nonlinear optics, fiber optics, photonics, metamaterials
- Quantum Mechanics: wave-particle duality, Schrödinger equation, Dirac equation, angular momentum & spin, perturbation theory, scattering theory, quantum entanglement, Bell's theorem, quantum information, quantum computation foundations, many-body quantum physics, second quantization, path integrals
- Quantum Field Theory: QED, QCD, electroweak theory, Standard Model, gauge theories, renormalization, Feynman diagrams, lattice gauge theory, conformal field theory, topological field theory
- General Relativity & Gravitation: differential geometry for GR, Einstein field equations, black holes (Schwarzschild, Kerr, Penrose diagrams), gravitational waves (LIGO), cosmological models (FLRW, inflation, dark energy, dark matter), quantum gravity approaches (string theory, loop quantum gravity, causal set theory, asymptotic safety)
- Condensed Matter: band theory, semiconductors, superconductivity (BCS, high-Tc), superfluidity, magnetism, topological materials, quantum Hall effect, Bose-Einstein condensation, strongly correlated systems, soft matter (polymers, colloids, liquid crystals)
- Nuclear & Particle Physics: nuclear structure, nuclear reactions, radioactivity, fission/fusion, particle zoo, quark model, Standard Model particles (quarks, leptons, gauge bosons, Higgs), beyond SM (supersymmetry, GUTs, extra dimensions, dark matter candidates), experimental methods (accelerators, detectors)
- Plasma Physics: plasma parameters, MHD, plasma waves, fusion plasma, space plasma, plasma processing
- Biophysics, Geophysics, Atmospheric Physics, Medical Physics, Computational Physics
- History of Physics & named physicists by era

**Step 23: Chemistry — Complete Overhaul**
- General Chemistry: atomic structure, periodic trends, bonding (ionic, covalent, metallic, intermolecular forces), stoichiometry, thermochemistry, chemical kinetics, equilibrium, acids & bases, electrochemistry, nuclear chemistry
- Organic Chemistry: functional groups, stereochemistry, reaction mechanisms (substitution, elimination, addition, radical, pericyclic), retrosynthesis, named reactions (hundreds: Grignard, Wittig, Diels-Alder, Heck, Suzuki, olefin metathesis, aldol, Michael, etc.), heterocyclic chemistry, organometallic chemistry, natural products chemistry, medicinal chemistry, organic photochemistry
- Inorganic Chemistry: coordination chemistry (crystal field theory, ligand field theory), bioinorganic (metalloproteins), solid-state chemistry, main group chemistry, transition metal chemistry, lanthanides & actinides, cluster chemistry, organometallic inorganic
- Physical Chemistry: quantum chemistry (Hartree-Fock, DFT, post-HF methods), spectroscopy (IR, UV-Vis, NMR, Mass Spec, EPR, Raman, X-ray), statistical thermodynamics, chemical dynamics, surface chemistry, photochemistry
- Analytical Chemistry: separation techniques (chromatography: GC, HPLC, TLC, electrophoresis), spectroscopic methods, electroanalytical methods, mass spectrometry, thermal analysis, quality assurance
- Biochemistry expansion: amino acids & proteins, enzymes (kinetics, mechanisms, regulation), carbohydrates, lipids, nucleic acids, metabolism (glycolysis, TCA, oxidative phosphorylation, photosynthesis, fatty acid metabolism, amino acid metabolism), signal transduction, molecular biology of the cell
- Materials Chemistry, Supramolecular Chemistry, Green Chemistry, Astrochemistry, Food Chemistry, Cosmetic Chemistry, Forensic Chemistry, Click Chemistry
- Named chemists & history of chemistry

**Step 24: Biology — Complete Overhaul (Part 1: Molecular to Organismal)**
- Molecular Biology: DNA replication, transcription, translation, gene regulation (prokaryotic & eukaryotic), epigenetics, RNA world, CRISPR & gene editing, synthetic biology
- Cell Biology: cell structure (prokaryotic & eukaryotic), membrane biology, organelles, cytoskeleton, cell cycle & division (mitosis, meiosis), cell signaling, apoptosis, autophagy, stem cells
- Genetics: Mendelian, chromosomal, molecular, population genetics (Hardy-Weinberg, drift, selection, migration, mutation), quantitative genetics, genomics (sequencing, annotation, comparative), transcriptomics, proteomics, metabolomics, epigenomics, pharmacogenomics, human genetics & genetic disorders, genetic engineering
- Evolutionary Biology: evidence for evolution, mechanisms (natural selection, sexual selection, genetic drift, gene flow, mutation), speciation, phylogenetics (cladistics, molecular clocks, tree-building), macroevolution, coevolution, evolutionary developmental biology (evo-devo), human evolution, origin of life (abiogenesis, RNA world, hydrothermal vents), history of evolutionary thought (Darwin, Wallace, Mendel, Fisher, Wright, Haldane, Mayr, Gould, Dawkins, Kimura)
- Developmental Biology: embryology, morphogenesis, pattern formation (Hox genes, signaling gradients), organogenesis, regeneration, aging biology
- Physiology: organ systems (cardiovascular, respiratory, digestive, nervous, endocrine, immune, renal, muscular, skeletal, reproductive, integumentary), homeostasis, exercise physiology, comparative physiology
- Anatomy: gross anatomy (regional & systemic), neuroanatomy, histology

**Step 25: Biology — Complete Overhaul (Part 2: Ecology to Specialized)**
- Ecology: population ecology, community ecology, ecosystem ecology, landscape ecology, global ecology, behavioral ecology, chemical ecology, disease ecology, urban ecology, restoration ecology, conservation biology, invasion biology, agroecology, theoretical ecology (Lotka-Volterra, metapopulation theory, island biogeography, food webs, trophic cascades, ecological networks)
- Botany expansion: plant anatomy, plant physiology (photosynthesis C3/C4/CAM, transpiration, nutrient transport), plant taxonomy, plant ecology, paleobotany, ethnobotany, plant pathology, plant genetics & breeding, plant biotechnology, plant-microbe interactions, mycorrhizae
- Zoology expansion: invertebrate zoology (Porifera through Echinodermata), vertebrate zoology (fish, amphibians, reptiles, birds, mammals), comparative anatomy & physiology, animal taxonomy, animal behavior (ethology: Tinbergen, Lorenz, von Frisch; behavioral ecology, sociobiology, cognitive ethology, animal cognition)
- Microbiology expansion: bacteriology, virology (viral structure, replication cycles, classification, emerging viruses, phage biology), mycology (fungal biology, medical mycology, mycorrhizae, lichens), protistology, extremophile biology
- Marine Biology: oceanography (biological, chemical, physical), coral reef ecology, deep-sea biology, marine fisheries, marine mammalogy, plankton ecology, hydrothermal vent communities
- Parasitology, Immunology (innate, adaptive, immunogenetics, autoimmunity, immunotherapy), Neuroscience expansion (below), Bioinformatics & Computational Biology
- Astrobiology: origin of life, extremophiles, biosignatures, habitable zones, Mars/Europa/Enceladus, SETI, Drake equation, panspermia
- Named biologists & history of biology

**Step 26: Neuroscience — Standalone Deep Expansion**
- Cellular Neuroscience: neurons, glia, synaptic transmission, neurotransmitter systems (glutamate, GABA, dopamine, serotonin, acetylcholine, norepinephrine, endorphins), ion channels, action potentials, synaptic plasticity (LTP, LTD)
- Systems Neuroscience: sensory systems (visual, auditory, somatosensory, olfactory, gustatory, vestibular), motor systems (spinal cord, basal ganglia, cerebellum, motor cortex), limbic system, hypothalamus, brainstem
- Cognitive Neuroscience: attention, memory (working, episodic, semantic, procedural, consolidation), language (Broca's, Wernicke's, dual-stream model), decision-making, executive function, consciousness (neural correlates, global workspace theory, integrated information theory)
- Behavioral Neuroscience: emotion, motivation, reward, addiction, sleep & circadian rhythms, stress, aggression, social behavior
- Computational Neuroscience: neural coding, neural network models, Hodgkin-Huxley, integrate-and-fire, reinforcement learning models, Bayesian brain, connectomics, brain-computer interfaces
- Clinical Neuroscience: neurological disorders (stroke, epilepsy, Parkinson's, Alzheimer's, MS, ALS, traumatic brain injury), neuropharmacology, neuroimaging (fMRI, EEG, MEG, PET, DTI, optogenetics, calcium imaging)
- Developmental Neuroscience: neural tube formation, neurogenesis, neural migration, axon guidance, synaptogenesis, critical periods, pruning, brain aging
- Neuroethics, Neuroeconomics, Neuroaesthetics, Neurolinguistics (cross-ref)

**Step 27: Earth Sciences — Complete Overhaul**
- Geology expansion: Mineralogy (crystal systems, silicates, mineral optics), Petrology (igneous, sedimentary, metamorphic), Structural Geology (faults, folds, stress/strain), Plate Tectonics (subduction, spreading, transform, mantle convection, paleomagnetism), Volcanology (eruption types, magma chemistry, volcanic hazards), Geophysics (gravity, magnetics, seismic methods, heat flow), Economic Geology (ore deposits, petroleum geology, mining), Engineering Geology, Planetary Geology
- Paleontology expansion: micropaleontology, vertebrate paleontology, invertebrate paleontology, paleobotany, paleoecology, taphonomy, mass extinctions (Big Five + current), biostratigraphy, evolution of life timeline (Precambrian through Cenozoic)
- Atmospheric Science: atmospheric structure, radiation balance, atmospheric dynamics, synoptic meteorology, mesoscale meteorology, tropical meteorology (hurricanes), atmospheric chemistry (ozone, aerosols), air pollution, weather forecasting (numerical weather prediction), climate modeling (GCMs), paleoclimatology (ice cores, tree rings, isotopes), climate change science (greenhouse effect, carbon cycle, feedback mechanisms, IPCC)
- Oceanography: physical (ocean circulation, waves, tides, thermohaline), chemical (salinity, dissolved gases, ocean acidification), geological (mid-ocean ridges, hydrothermal vents, marine sediments), biological (see Marine Biology)
- Hydrology: surface water, groundwater, watershed science, flood hydrology, water resources management, hydrogeology, isotope hydrology
- Soil Science: soil formation (pedogenesis), soil classification, soil chemistry, soil physics, soil biology, soil conservation, soil pollution
- Cryosphere: glaciology, ice sheet dynamics, permafrost, sea ice, snow science
- Natural Hazards: earthquakes, tsunamis, volcanic eruptions, landslides, flooding, drought, wildfire science

**Step 28: Astronomy & Space Science — Complete Overhaul**
- Observational Astronomy: telescopes (optical, radio, infrared, UV, X-ray, gamma-ray), CCD photometry, spectroscopy, interferometry, adaptive optics, space telescopes (Hubble, JWST, Chandra, Fermi), survey astronomy (SDSS, LSST/Rubin), time-domain astronomy, multi-messenger astronomy (gravitational waves + EM + neutrinos)
- Stellar Astronomy: stellar structure & evolution, Hertzsprung-Russell diagram, main sequence, red giants, supergiants, white dwarfs, neutron stars, pulsars, stellar nucleosynthesis, binary stars, variable stars, stellar populations
- Galactic Astronomy: Milky Way structure (disk, bulge, halo, bar, spiral arms), stellar dynamics, interstellar medium (molecular clouds, HII regions, supernova remnants), star formation, galactic chemical evolution, the Galactic center
- Extragalactic Astronomy: galaxy classification (Hubble sequence), galaxy formation & evolution, galaxy mergers, active galactic nuclei (AGN, quasars, blazars, Seyferts), galaxy clusters, large-scale structure (cosmic web, voids, filaments)
- Cosmology: Big Bang, cosmic microwave background (COBE, WMAP, Planck), nucleosynthesis, recombination, cosmic inflation, dark matter (WIMPs, axions, observational evidence: rotation curves, gravitational lensing, CMB, bullet cluster), dark energy (cosmological constant, quintessence, accelerating expansion), structure formation, cosmological parameters (H₀, Ω), baryon acoustic oscillations, cosmic distance ladder
- Planetary Science: Solar System formation (nebular hypothesis), terrestrial planets, gas giants, ice giants, dwarf planets, moons, asteroids, comets, Kuiper Belt, Oort Cloud, planetary atmospheres, planetary geology, comparative planetology, exoplanet detection (transits, radial velocity, direct imaging), exoplanet characterization (atmospheres, habitability), exomoons
- Solar Physics: solar structure (core, radiative zone, convection zone, photosphere, chromosphere, corona), solar cycle, sunspots, solar flares & coronal mass ejections, solar wind, heliophysics, space weather
- Astrochemistry & Astrobiology (cross-ref)
- Space Exploration & Engineering: history of spaceflight, rocket propulsion (chemical, ion, nuclear), orbital mechanics, mission design, satellite technology, human spaceflight, ISS, lunar exploration (Apollo, Artemis), Mars exploration, outer Solar System missions, interstellar concepts (solar sails, Breakthrough Starshot)
- Astrometry & Celestial Mechanics: coordinate systems, precession, proper motion, parallax, astrometric surveys (Hipparcos, Gaia)
- History of Astronomy: Babylonian, Greek (Ptolemy), Islamic Golden Age, Copernicus, Tycho, Kepler, Galileo, Newton, Herschel, Hubble, modern era
- Named astronomers/astrophysicists by era

---

### PHASE 4 — FORMAL SCIENCES (Steps 29–32)

**Step 29: Logic — Complete Overhaul**
- (Covered largely in Math Step 21 foundations, but add): History of Logic (Aristotle → Boole → Frege → Gödel → Turing → modern), Informal Logic & Critical Thinking, Argumentation Theory, Paradoxes (Liar, Russell's, Banach-Tarski, Newcomb's), Paraconsistent Logic, Relevance Logic, Intuitionistic Logic, Substructural Logics, Deontic Logic, Epistemic Logic, Temporal Logic, Dynamic Logic, Description Logics, Logic Programming (Prolog), Non-monotonic Reasoning, Default Logic

**Step 30: Computer Science — Complete Overhaul (Part 1: Theory & Systems)**
- Theory of Computation: Automata (DFA, NFA, PDA, Turing machines), Formal Languages (regular, context-free, context-sensitive, recursively enumerable), Computability (halting problem, Rice's theorem, Church-Turing thesis), Complexity Theory (P, NP, NP-complete, NP-hard, PSPACE, EXPTIME, BPP, IP, PH, circuit complexity, communication complexity, proof complexity), Approximation Algorithms, Parameterized Complexity, Descriptive Complexity, Kolmogorov Complexity
- Algorithms & Data Structures: sorting, searching, graph algorithms (shortest path, MST, max flow, matching), string algorithms, computational geometry, randomized algorithms, online algorithms, streaming algorithms, approximation algorithms, amortized analysis, advanced data structures (balanced BSTs, B-trees, heaps, hash tables, bloom filters, skip lists, tries, suffix arrays/trees, union-find, range trees, van Emde Boas)
- Programming Languages: paradigms (imperative, functional, object-oriented, logic, concurrent, reactive), type systems (static/dynamic, strong/weak, dependent types, linear types, effect systems), compiler design (lexing, parsing, semantic analysis, optimization, code generation), interpreter design, formal verification, program analysis, domain-specific languages
- Operating Systems: process management, memory management (paging, segmentation, virtual memory), file systems, I/O systems, concurrency (locks, semaphores, monitors, deadlock), scheduling, security & protection, virtualization, containerization, real-time systems, distributed operating systems
- Computer Architecture: digital logic, processor design (pipelining, superscalar, out-of-order, branch prediction, speculative execution), memory hierarchy (cache design, memory controllers), I/O architecture, parallel architectures (SIMD, MIMD, GPU, FPGA), embedded systems, ISA design (RISC, CISC, ARM, RISC-V)
- Computer Networks: OSI/TCP-IP models, physical layer (encoding, modulation), data link (Ethernet, Wi-Fi, Bluetooth), network layer (IP, routing: OSPF, BGP, MPLS), transport layer (TCP, UDP, congestion control), application layer (HTTP, DNS, SMTP, TLS/SSL), network security, software-defined networking, IoT networking, mobile networks (LTE, 5G)
- Databases: relational model, SQL, normalization, query optimization, transaction processing (ACID, isolation levels, concurrency control), distributed databases (CAP theorem, eventual consistency, Paxos, Raft), NoSQL (key-value, document, column-family, graph), NewSQL, data warehousing, OLAP, stream processing, database internals (storage engines, indexing: B-tree, LSM-tree, hash)

**Step 31: Computer Science — Complete Overhaul (Part 2: AI, Security, Application Areas)**
- Artificial Intelligence: history (Turing, McCarthy, Minsky, expert systems, AI winters), knowledge representation (ontologies, frames, semantic nets), reasoning (deductive, inductive, abductive, probabilistic), planning, multi-agent systems, AI ethics & safety, explainable AI
- Machine Learning: supervised (linear models, SVMs, decision trees, random forests, gradient boosting, k-NN, naive Bayes), unsupervised (k-means, hierarchical clustering, DBSCAN, PCA, t-SNE, UMAP, autoencoders, GANs), reinforcement learning (Q-learning, policy gradients, actor-critic, MCTS, multi-armed bandits), deep learning (CNNs, RNNs, LSTMs, Transformers, attention mechanisms, diffusion models, graph neural networks, neural ODEs), NLP (tokenization, word embeddings, language models, GPT/BERT family, machine translation, question answering, summarization, NER, sentiment analysis), Computer Vision (image classification, object detection, segmentation, pose estimation, 3D vision, video understanding), Speech (recognition, synthesis, speaker diarization), Generative AI, ML theory (PAC learning, VC dimension, bias-variance, regularization), MLOps, fairness/bias in ML
- Cybersecurity: network security, application security (OWASP), operating system security, hardware security, cryptography (symmetric: AES, DES; asymmetric: RSA, ECC, Diffie-Hellman; hash: SHA, MD5; digital signatures; PKI; zero-knowledge proofs; post-quantum cryptography), malware analysis, penetration testing, incident response, forensics, security architecture, privacy engineering, identity & access management, blockchain security
- Software Engineering: requirements engineering, software design (design patterns, SOLID, DDD), software architecture (microservices, event-driven, serverless, monolith, SOA), testing (unit, integration, system, acceptance, property-based, mutation, fuzz), DevOps (CI/CD, infrastructure as code, monitoring, observability), agile methodologies (Scrum, Kanban, XP), version control, technical debt, software metrics, formal methods (model checking, theorem proving, abstract interpretation)
- Human-Computer Interaction: usability, user experience design, accessibility, information visualization, interaction design, cognitive engineering, haptics, VR/AR interfaces
- Quantum Computing: qubits, quantum gates, quantum circuits, quantum algorithms (Shor's, Grover's, VQE, QAOA), quantum error correction, quantum supremacy, quantum networking, quantum cryptography (QKD)
- Robotics: kinematics, dynamics, control (PID, MPC, adaptive), path planning, SLAM, computer vision for robotics, manipulation, legged locomotion, swarm robotics, human-robot interaction, autonomous vehicles
- Graphics & Visualization: rasterization, ray tracing, shading models, GPU programming, geometric modeling, animation, physically based rendering, real-time graphics, scientific visualization

**Step 32: NEW DISCIPLINE — Data Science & Statistical Learning**
- Separate from pure CS/Stats: data wrangling, exploratory data analysis, feature engineering, model selection, cross-validation, ensemble methods, dimensionality reduction, anomaly detection, recommendation systems, A/B testing, causal inference (from data science lens), data ethics, data governance, big data systems (Hadoop, Spark), data pipelines, data visualization (Tufte, grammar of graphics), reproducibility, Bayesian inference applied, spatial data science, text analytics, time series forecasting

---

### PHASE 5 — APPLIED SCIENCES (Steps 33–40)

**Step 33: Engineering — Complete Overhaul**
- Civil: structural analysis (statics, dynamics, finite elements), geotechnical (soil mechanics, foundation engineering), transportation (traffic engineering, highway design, rail), hydraulic/water resources, construction engineering & management, earthquake engineering
- Mechanical: statics, dynamics, strength of materials, machine design, manufacturing (CNC, additive manufacturing, casting, forming, welding), HVAC, energy systems, tribology, vibrations, mechatronics
- Electrical/Electronic: circuit theory, analog electronics, digital electronics, power systems (generation, transmission, distribution, smart grid), signal processing (DSP, filters, FFT), telecommunications, control systems, photovoltaic, power electronics, instrumentation
- Chemical: reaction engineering, transport phenomena (heat, mass, momentum transfer), separation processes, process design & control, catalysis, polymer engineering, petroleum engineering, biochemical engineering
- Aerospace: aerodynamics (subsonic, transonic, supersonic, hypersonic), propulsion (jet engines, turbomachinery, rocket propulsion), flight mechanics, orbital mechanics, aircraft structures, avionics, spacecraft design
- Biomedical: biomechanics, biomaterials, medical imaging (X-ray, CT, MRI, ultrasound, PET), tissue engineering, prosthetics, biosensors, clinical engineering, neural engineering, rehabilitation engineering
- Environmental: water treatment, wastewater treatment, air pollution control, solid waste management, remediation, environmental impact assessment
- Materials Science: crystallography, phase diagrams, mechanical properties, ceramics, polymers, composites, nanomaterials, biomaterials, electronic/optical materials, corrosion
- Nuclear Engineering, Industrial Engineering, Mining Engineering, Agricultural Engineering, Ocean Engineering, Petroleum Engineering

**Step 34: Medicine & Health — Complete Overhaul**
- Preclinical sciences: Anatomy (gross, neuroanatomy, histology, embryology), Physiology (organ systems), Biochemistry/Molecular Biology, Pathology (general: inflammation, neoplasia, hemodynamics; systemic: cardiovascular, pulmonary, GI, hepatic, renal, endocrine, reproductive, musculoskeletal, dermatologic, neuropathology, hematopathology), Microbiology & Infectious Disease, Immunology, Pharmacology (pharmacokinetics, pharmacodynamics, drug classes by system, toxicology)
- Clinical disciplines: Internal Medicine (cardiology, pulmonology, gastroenterology, nephrology, endocrinology, hematology, oncology, rheumatology, infectious disease), Surgery (general, cardiothoracic, vascular, neuro, orthopedic, plastic, transplant, trauma, pediatric), Pediatrics, Obstetrics & Gynecology, Psychiatry, Neurology, Dermatology, Ophthalmology, Otolaryngology (ENT), Urology, Radiology (diagnostic, interventional), Anesthesiology, Emergency Medicine, Family Medicine, Physical Medicine & Rehabilitation, Pathology (clinical, anatomical)
- Public Health: epidemiology (study design, outbreak investigation, screening), biostatistics, environmental health, occupational health, health policy, global health, social determinants, health economics, maternal & child health, substance abuse, mental health public health, One Health (human-animal-environment)
- Nursing: nursing theory, clinical nursing, advanced practice (NP, CRNA, CNM), evidence-based nursing
- Dentistry: oral anatomy, restorative, periodontics, endodontics, orthodontics, oral surgery, prosthodontics
- Veterinary Medicine: comparative anatomy, veterinary pathology, large vs small animal, veterinary public health
- Allied Health: physiotherapy, occupational therapy, speech-language pathology, audiology, respiratory therapy, medical laboratory science, radiologic technology
- History of Medicine, Medical Ethics (autonomy, beneficence, nonmaleficence, justice, informed consent, end-of-life), Medical Education

**Step 35: Agriculture — Complete Overhaul**
- (Expand existing with): Precision agriculture (drones, GPS, variable rate technology), Plant genetics & GMOs, Agricultural economics, Agricultural policy, Climate-smart agriculture, Agroforestry, Permaculture, Urban agriculture, Vertical farming, Hydroponics & Aeroponics, Post-harvest technology, Food systems & food security, Agricultural history (Neolithic revolution through Green Revolution), Livestock genetics & breeding, Animal nutrition, Dairy science, Poultry science

**Step 36: Architecture — Complete Overhaul**
- (Expand existing with): Full architectural history (Egyptian, Greek, Roman, Byzantine, Islamic, Romanesque, Gothic, Renaissance, Baroque, Neoclassical, Art Nouveau, Art Deco, Bauhaus, International Style, Brutalism, Postmodern, Deconstructivism, Parametricism, Biophilic, Vernacular)
- Building technology: structural systems (load-bearing, frame, shell, tensile, pneumatic), building materials (concrete, steel, timber, masonry, glass, composites), building services (HVAC, electrical, plumbing, fire protection, acoustics, lighting), building physics (thermal, moisture, sound), BIM, digital fabrication
- Architectural theory: Vitruvius, Alberti, Palladio, Viollet-le-Duc, Ruskin, Sullivan, Wright, Le Corbusier, Mies, Kahn, Venturi, Koolhaas, Zaha Hadid, Tadao Ando, Renzo Piano

**Step 37: Education & Pedagogy — Complete Overhaul**
- Educational Philosophy: Socratic method, Montessori, Waldorf/Steiner, Dewey (progressive ed.), Freire (critical pedagogy), Vygotsky (ZPD, scaffolding), Piaget (constructivism), Bruner (spiral curriculum), Bloom (taxonomy), Gardner (multiple intelligences), Papert (constructionism), Illich (deschooling), hooks (engaged pedagogy)
- Learning Sciences: cognitive load theory, spaced repetition, retrieval practice, interleaving, dual coding, multimedia learning (Mayer), self-regulated learning, metacognition, motivation theories (self-determination, expectancy-value, achievement goal), transfer of learning
- Curriculum & Assessment: curriculum design models (Tyler, Wiggins backward design, UbD), formative vs summative assessment, rubrics, portfolio assessment, standardized testing, psychometrics (IRT, CTT, reliability, validity), authentic assessment
- Educational Technology: LMS, adaptive learning, gamification, simulations, MOOCs, learning analytics, AI in education, virtual/augmented reality in education
- Comparative Education, History of Education (ancient academy through modern university), Higher Education Studies, Adult Education & Lifelong Learning, STEM Education, Literacy Studies

**Step 38: Environmental Studies — Complete Overhaul**
- Environmental Science (atmospheric, aquatic, terrestrial, soil), Environmental Chemistry, Environmental Microbiology
- Conservation: biodiversity (measurement, hotspots, threats), protected areas, species recovery, habitat restoration, landscape connectivity, marine conservation, conservation genetics
- Sustainability: sustainable development (Brundtland), planetary boundaries, circular economy, life cycle assessment, industrial ecology, environmental footprinting (carbon, water, ecological)
- Environmental Policy: NEPA, Clean Air/Water Acts, Endangered Species Act, international agreements (Montreal Protocol, Kyoto, Paris), environmental governance, environmental justice
- Climate Science depth: paleoclimate, carbon cycle, radiative forcing, climate sensitivity, feedback mechanisms, IPCC assessment process, climate models, mitigation strategies, adaptation strategies, geoengineering (SAI, CDR)
- Resource Management: water, forests, fisheries, minerals, energy systems (fossil, nuclear, renewables)
- Toxicology: dose-response, ecotoxicology, risk assessment, endocrine disruptors, persistent organic pollutants
- Waste Management: solid waste, hazardous waste, e-waste, nuclear waste, waste-to-energy

**Step 39: Military Science & Security Studies (NEW DISCIPLINE)**
- Military History (ancient through modern warfare, key battles and campaigns)
- Military Strategy & Tactics (Clausewitz, Sun Tzu, Jomini, Boyd's OODA loop, maneuver warfare, attrition, guerrilla/insurgency, counterinsurgency)
- Intelligence Studies (HUMINT, SIGINT, IMINT, OSINT, MASINT, analysis cycle)
- Defense Technology (weapons systems, armor, naval warfare, air power, space warfare, cyber warfare, autonomous weapons, WMD: nuclear/chemical/biological)
- Security Studies: national security, human security, critical security studies, terrorism studies, homeland security, border security, maritime security, biosecurity
- Peace & Conflict Studies: conflict resolution, mediation, peacekeeping, transitional justice, post-conflict reconstruction, nonviolent resistance

**Step 40: Transportation Science (NEW DISCIPLINE)**
- Transportation Engineering: highway, rail, aviation, maritime, pipeline, multimodal
- Traffic Engineering: traffic flow theory, signal control, highway capacity
- Transportation Planning: travel demand modeling, land use-transportation interaction, public transit planning, freight transportation
- Autonomous Vehicles, Electric Vehicles, Urban Air Mobility
- Transportation Policy, Transportation Economics, Transportation Safety, Transportation History

---

### PHASE 6 — CRAFTS, TRADES & PRACTICAL ARTS (Steps 41–44)

**Step 41: Metallurgy & Smithing — Complete Overhaul**
- Full expansion with metallurgical science (phase diagrams, heat treatment, alloy systems), historical metallurgy timeline (Copper Age through modern superalloys), traditional vs modern techniques, specific alloy families (steel classifications, aluminum alloys, titanium alloys, nickel superalloys, precious metals), casting methods (sand, investment, die, centrifugal), forming (forging, rolling, extrusion, drawing), joining (welding: MIG, TIG, stick, oxy-fuel; brazing, soldering), surface treatments (heat treating, plating, anodizing, case hardening), bladesmithing, armorsmithing, damascus/pattern welding

**Step 42: Traditional Crafts — Complete Overhaul**
- Woodworking: hand tools, power tools, joinery (mortise-tenon, dovetail, finger, box, biscuit, pocket-hole), wood species & properties, finishing (staining, lacquer, oil, shellac, varnish), specialties (furniture making, cabinetry, wood turning, carving, coopering, boat building, luthiery, wood bending, marquetry & inlay, shingle making)
- Masonry: stone types, brick types, mortar, arches & vaults, stone carving, dry stone walling, tiling, concrete work
- Textile Arts deep expansion: fiber preparation (carding, combing, hackling), spinning (drop spindle, spinning wheel, modern), weaving (plain, twill, satin, tapestry, jacquard, tablet/card), knitting, crochet, tatting, macramé, dyeing (natural dyes, synthetic, resist techniques: batik, shibori, tie-dye), felting, embroidery, quilting, lace-making, textile printing
- Glass: history, glassblowing (free-blown, mold-blown), flat glass, stained glass, lampworking, flameworking, fusing, casting, glass engraving, optical glass
- Leather: tanning methods (vegetable, chrome, brain), tooling, dyeing, stitching, saddlery, shoe-making, bookbinding leather
- Printing: letterpress, lithography, screen printing, etching, engraving, woodcut, linocut, digital printing
- Paper: papermaking (hand, machine), origami, paper conservation, paper engineering (pop-ups)

**Step 43: Survival & Practical Skills — Complete Overhaul**
- Wilderness Survival: shelter construction, fire starting (friction, flint, solar, chemical), water procurement & purification, signaling, land navigation (map & compass, GPS, celestial), weather observation, knots & cordage, trapping, foraging, wilderness first aid, cold/hot environment survival, desert survival, jungle survival, maritime survival, arctic survival
- Herbalism expansion: identification, medicinal uses, preparation methods (tinctures, decoctions, poultices, salves), phytochemistry, ethnobotany, poisonous plants, foraging edible plants, permaculture herbalism
- Food Preservation expansion: canning (water bath, pressure), dehydration, smoking (hot, cold), curing (salt, nitrate), fermentation (lacto, acetic, alcoholic: mead, cider, beer, wine), pickling, freeze-drying, root cellaring
- Brewing & Distilling: beer (malting, mashing, boiling, fermentation, conditioning, styles), wine (viticulture, vinification, varietals), spirits (distillation theory, pot vs column still, aging, specific spirits: whiskey, brandy, gin, rum, vodka, tequila, mezcal), cider, mead, kombucha, fermented foods (kimchi, sauerkraut, miso, tempeh, natto, kefir, yogurt, sourdough)
- Traditional Navigation: celestial (star identification, sextant), Polynesian wayfinding, dead reckoning, natural indicators

**Step 44: Maritime — Complete Overhaul**
- Seamanship: sail theory, points of sail, rigging types (sloop, ketch, schooner, square-rigged), anchoring, docking, weather routing, heavy weather sailing, man overboard procedures
- Navigation: coastal piloting, celestial navigation, electronic navigation (GPS, radar, AIS, chart plotters), chart reading, tides & currents
- Boat Building: wooden (planked, strip, stitch-and-glue), fiberglass, steel, aluminum, design principles (hull forms, stability, hydrostatics)
- Naval History: ancient naval warfare (triremes), Age of Sail, age of ironclads, WWI/WWII naval warfare, submarine warfare, modern naval operations
- Maritime Law: admiralty, UNCLOS, maritime trade, flags of convenience, piracy law
- Fishing: commercial (trawling, longlining, purse seining, gillnetting), recreational (fly, spin, trolling, ice), aquaculture
- Diving: free diving, SCUBA, saturation diving, commercial diving, marine archaeology

---

### PHASE 7 — INTERDISCIPLINARY & EMERGING (Steps 45–50)

**Step 45: Cognitive Science — Full Expansion**
- Philosophy of Mind component (consciousness, intentionality, mental representation, embodied cognition, extended mind, enactivism)
- Psychology component (perception, attention, memory, reasoning, language, concepts, categorization)
- Neuroscience component (see Step 26 cross-ref)
- AI/Computational component (computational models of cognition, ACT-R, SOAR, connectionism, probabilistic models, Bayesian cognition)
- Linguistics component (psycholinguistics, language processing, language & thought)
- Anthropology component (cultural cognition, distributed cognition)
- Key figures: Turing, Newell, Simon, Marr, Chomsky, Fodor, Pylyshyn, Lakoff, Barsalou, Clark, Varela, Thompson, Hutchins

**Step 46: Bioinformatics & Computational Biology — Full Expansion**
- Sequence analysis (alignment: BLAST, Smith-Waterman, multiple alignment), Phylogenetics (tree construction, molecular evolution), Genomics (genome assembly, annotation, comparative genomics), Transcriptomics (microarrays, RNA-seq, differential expression), Proteomics (mass spec analysis, protein structure prediction: AlphaFold), Metabolomics, Metagenomics, Structural Bioinformatics (homology modeling, molecular dynamics, docking), Systems Biology (network biology, metabolic modeling, flux balance analysis), Population Genetics (coalescent theory, GWAS, selection scans), Biostatistics software & pipelines (R/Bioconductor, Python/Biopython, Galaxy)

**Step 47: Information Theory, Systems Theory & Complexity (Full Expansion)**
- Information Theory: Shannon entropy, channel capacity, source coding theorem, rate-distortion theory, Kolmogorov complexity, algorithmic information theory, quantum information theory
- Systems Theory: general systems theory (von Bertalanffy), cybernetics (Wiener, Ashby), second-order cybernetics (Maturana, Varela), viable system model (Beer), system dynamics (Forrester), soft systems methodology (Checkland)
- Complexity Science: complex adaptive systems, emergence, self-organization, chaos theory (Lorenz, strange attractors, fractals), network science (small-world, scale-free, community detection, centrality, contagion/diffusion), agent-based modeling, cellular automata, evolutionary computation, Santa Fe Institute approaches

**Step 48: Ethics — Applied & Emerging (Full Expansion)**
- Bioethics: beginning of life (abortion, reproductive technology, embryo research), end of life (euthanasia, palliative care, advance directives), genetic ethics (gene editing, enhancement, genetic testing), research ethics (IRB, Helsinki Declaration, Belmont Report, informed consent), organ transplantation, animal experimentation
- Environmental Ethics: anthropocentrism vs biocentrism vs ecocentrism, animal rights (Singer, Regan), land ethic (Leopold), deep ecology (Naess), environmental justice, intergenerational justice, rights of nature
- Technology Ethics: AI ethics (bias, accountability, transparency, alignment), data ethics, surveillance ethics, cyber ethics, autonomous weapons, digital rights, tech addiction
- Business Ethics: corporate social responsibility, stakeholder theory, whistleblowing, labor ethics, supply chain ethics, ESG
- Media Ethics: journalism ethics, misinformation, deepfakes, censorship vs free speech, privacy
- Neuroethics: cognitive enhancement, brain reading, free will implications, criminal responsibility

**Step 49: Digital Humanities & Science Communication**
- Digital Humanities: text mining, topic modeling, computational text analysis, digital archives, GIS for humanities, network analysis for historical/literary data, visualization of cultural data, digital editions, cultural analytics, Culturomics
- Science Communication: science journalism, science writing, public engagement, science policy, science education, history of popular science, philosophy of science communication, misinformation & science denial, open science, citizen science, science diplomacy

**Step 50: Remaining New Disciplines & Gap Fill**
- Energy Studies: fossil fuels (coal, oil, natural gas — extraction, processing, power generation), nuclear energy (fission reactors: PWR, BWR, CANDU, breeder; fusion: tokamak, stellarator, inertial confinement), renewables (solar PV, concentrated solar, wind, hydroelectric, geothermal, biomass, tidal, wave), energy storage (batteries, hydrogen, pumped hydro, compressed air, thermal), smart grid, energy policy, energy economics, energy transitions history
- Food Science & Nutrition (as standalone): food chemistry, food microbiology, food processing, food safety (HACCP), nutrition (macronutrients, micronutrients, metabolism, dietary guidelines, clinical nutrition, sports nutrition, nutritional epidemiology)
- Sports Science: exercise physiology, biomechanics of movement, sports psychology, sports nutrition, training theory (periodization), sports medicine (injury, rehabilitation), kinesiology
- Urban Studies: urban sociology, urban economics, urban planning, urban design, housing studies, transportation planning, smart cities, urban ecology
- Disaster Science & Emergency Management: hazard assessment, risk analysis, emergency response, disaster recovery, humanitarian logistics, disaster psychology
- Forensic Sciences (standalone): forensic biology (DNA), forensic chemistry (drug analysis), forensic toxicology, forensic pathology, forensic entomology, forensic anthropology, digital forensics, forensic psychology, forensic accounting, crime scene investigation, bloodstain pattern analysis, questioned documents, firearms & toolmark analysis

---

### SUMMARY

| Phase | Steps | Domain | Est. Disciplines Touched |
|-------|-------|--------|--------------------------|
| 1 | 1–10 | Humanities | 10 (7 existing + 3 new) |
| 2 | 11–19 | Social Sciences | 9 (8 existing + 1 new) |
| 3 | 20–28 | Natural Sciences | 9 (7 existing + 2 expanded) |
| 4 | 29–32 | Formal Sciences | 4 (2 existing + 2 new/split) |
| 5 | 33–40 | Applied Sciences | 8 (6 existing + 2 new) |
| 6 | 41–44 | Crafts & Trades | 4 |
| 7 | 45–50 | Interdisciplinary | 8+ |
| **Total** | **50 steps** | **All 7 domains** | **52+ disciplines** |

> Feed me "Do step N" to execute any step. Each step will fully rewrite/expand that discipline's section in schools-of-thought.md with complete sub-topic trees, named thinkers, and research-level depth.

---

## Open Questions
- How to handle prerequisite chains across disciplines?
- Gamification depth (XP, badges, streaks)?
- Mobile-first or desktop-first?
- Single app vs. website from day one?
