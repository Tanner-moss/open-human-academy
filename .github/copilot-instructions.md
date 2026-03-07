# Human Academy — Copilot System Instructions

## Project Overview

This workspace is the **Human Academy** learning app. The primary content file is:

```
c:\Users\twaba\Documents\human-academy\schools-of-thought.md
```

This file is a master taxonomy of all academic disciplines, formatted as nested Markdown bullet points. The app reads it to build a node-graph skill tree. The goal is to expand every discipline to exhaustive, research-level depth.

---

## The "Continue" Command

When the user types **"continue"** (or "next", "keep going", "do the next one"):

1. Look at the **Progress Queue** below. Find the **first ⏳ PENDING** item.
2. Write the full expansion for that topic directly into `schools-of-thought.md` using `replace_string_in_file`.
3. After completing the write, tell the user:
   - What topic was just completed
   - What the next pending topic will be
4. Do **not** ask for confirmation. Just do it.

---

## Depth Standard

Every topic must be written as if it will be the **sole reference** for a person who wants to reach the frontier of that field — not a layperson summary, not a textbook overview, but the knowledge structure of a working researcher who can **push the field forward**.

This means:
- Name every significant **thinker, theorist, practitioner, and school** in the topic
- Include every significant **sub-field, branch, and methodology**
- Cover the full **historical arc** — origins, development, paradigm shifts, current state
- Include **key texts, key sites, key debates, key unsolved problems**
- Include **dating methods and evidence standards** (for history/archaeology topics)
- Include the **most current scholarship** — discoveries from 2020–2026 where applicable
- Include **frontier/contemporary research directions** — what the best researchers are working on RIGHT NOW

Use Wikipedia as a starting point, but go substantially beyond it. Reference specific named papers, famous experiments, landmark discoveries by name.

---

## Format Rules

- **Nested Markdown bullet points ONLY** — no prose paragraphs, no headers within topics (the `####` line is the only heading)
- Each bullet = one node in the learner's node graph
- Structure every topic with this arc:
  - **Basics** — what it is, its scope, foundational orientation
  - **Core Knowledge** — the main sub-fields, major figures, canonical texts, historical development
  - **Advanced / Specialist** — sub-sub-fields, methodological depth, debates, edge cases
  - **Frontier / Contemporary Research** — the bleeding edge: latest discoveries, active debates, unsolved problems, newest methods (2020–present)
- Each section should have **3–5 levels of nesting depth minimum**
- Aim for **250–500 bullet points per topic** (i.e., the expanded sections already written are the correct scale)

---

## Insertion Strategy

When doing a continuation, do the following:

1. **Read** the current end of the last completed section (use `read_file` around the insertion point) to get exact text
2. Use `replace_string_in_file` to replace the **stub placeholder line** for the next topic with the full expanded content
3. If the next topic doesn't exist as a stub (just needs to be appended after a section), replace the last line of the previous section's block with that block + the new content appended

For upcoming Ancient History sub-topics, the insertion point is currently the stub `- Medieval History` at the top of the remaining placeholder list. Insert the new `####` section **before** that stub line, modifying the enclosing block so the stub remains in place for future use.

For topics in entirely new disciplines (Social Sciences, etc.), locate the relevant `###` section header and replace the first placeholder bullet under it with the full expanded content.

---

## Progress Queue

### PHASE 1 — HUMANITIES

#### Step 1: Philosophy
- ✅ **Philosophy — Full Tree** (foundations, logic, history of philosophy pre-Socratic through contemporary, metaphysics, epistemology, ethics, political philosophy, philosophy of mind, philosophy of language, philosophy of science, aesthetics, specialized branches, frontier directions; ~700 lines)

#### Step 2: History
Ancient History:
- ✅ **Ancient History — Prehistory & Human Origins** (hominin lineage, *H. sapiens* origins, behavioral modernity, Palaeolithic tool industries, cave art, Neolithic Revolution, aDNA revolution, Jebel Irhoud ~315 kya, Göbekli Tepe, White Sands footprints ~21 kya)
- ✅ **Ancient History — Mesopotamia & the First Cities** (Ubaid → Uruk → writing ~3200 BCE → Sumer → Akkad → Ur III → Old Babylonian/Hammurabi → Assyrian Empire → Neo-Babylonian, cuneiform, religion, daily life, 4.2 ka event)
- ✅ **Ancient History — Ancient Egypt: Predynastic through New Kingdom** (Predynastic, Early Dynastic, Old Kingdom pyramids, Wadi el-Jarf 2017, Middle Kingdom, Hyksos, New Kingdom: Hatshepsut, Thutmose III, Akhenaten, Tutankhamun DNA, Ramesses II, Sea Peoples, Bronze Age Collapse)
- ✅ **Ancient History — Ancient Egypt: Third Intermediate Period, Late Period, Ptolemaic Period & Roman Egypt** (21st–25th Dynasties, Libyan/Nubian pharaohs, Assyrian conquest, Saite Renaissance, Persian Dynasties 27th–31st, Macedonian conquest, Ptolemaic court, Cleopatra VII, Roman province, Christianization, Arab conquest; religion → mystery cults → early Christianity in Egypt; Demotic and Coptic scripts; frontier: ScanPyramids ongoing, underwater Alexandria)
- ✅ **Ancient History — Ancient Near East: Hittites, Levant, Persia** (Hittite Old/Middle/New Kingdoms, Battle of Kadesh, Luwian inscriptions; Levant: Phoenicia/Canaan/Israel/Judah/Aram, Linear Alphabet invention, Ugarit, Hebrew Bible archaeology, Phoenician colonization; Neo-Assyrian Empire, Achaemenid Persian Empire: Cyrus–Darius–Xerxes, Royal Road, Zoroastrianism, satrap system, fall to Alexander)
- ✅ **Ancient History — Ancient Greece** (Minoan → Mycenaean → Dark Ages → Archaic: poleis, colonization, tyrants, Sparta, Athens; Classical: Persian Wars, Athenian democracy, Peloponnesian War, Macedonian rise; Hellenistic: Alexander's campaigns, successor kingdoms, cultural diffusion; art, philosophy, science, theatre, Olympics; key sites: Knossos, Mycenae, Athens, Delphi, Olympia; frontier: Antikythera Mechanism, Derveni Papyrus, Herculaneum scrolls AI decipherment)
- ✅ **Ancient History — Ancient Rome** (Regal period → Republic → Punic Wars → Late Republic/Civil Wars → Principate → High Empire → Crisis of the 3rd Century → Dominate → Fall of the West → Eastern survival; law: Twelve Tables → Justinian Code; engineering: roads, aqueducts, concrete; religion: Roman Pantheon → mystery cults → Christianity legalization; key figures: Scipio, Caesar, Augustus, Nero, Trajan, Hadrian, Constantine, Theodosius; frontier: Vindolanda tablets, ongoing Pompeii excavations, aDNA of Roman citizens)
- ✅ **Ancient History — Ancient India: Indus Valley, Vedic, Mauryan, Gupta** (Indus Valley Civilization: Harappa, Mohenjo-daro, urban planning, undeciphered script, decline ~1900 BCE; Vedic Age: Rigveda, caste origins, Upanishads; Mahajanapadas; Mauryan Empire: Chandragupta, Ashoka, Arthashastra, Buddhist spread; Sangam Age South India; Gupta Golden Age: mathematics, astronomy, Kalidasa, Nalanda; frontier: Rakhigarhi excavations, skeletal aDNA studies)
- ✅ **Ancient History — Ancient China: Shang through Han** (Erlitou → Shang Dynasty: oracle bones, bronzework; Zhou: Western/Eastern, Spring and Autumn, Warring States, Hundred Schools of Thought (Confucius, Laozi, Mozi, Mencius, Xunzi, Hanfeizi, Sunzi); Qin unification, Legalism, First Emperor, Great Wall, terracotta army; Han Dynasty: Silk Road, paper, compass, seismograph, astronomy, Sima Qian's Shiji; frontier: new oracle bone discoveries, ongoing terracotta army excavations)
- ✅ **Ancient History — Ancient Americas: Olmec through Early Maya & Chavín** (Olmec: La Venta, San Lorenzo, colossal heads, were-jaguar, mother culture debate; Pre-Classic Maya: urban centers, early writing, calendar; Zapotec: Monte Albán; Chavín de Huántar; Caral/Norte Chico; Teotihuacan; early crop domestication: maize, potato, quinoa; frontier: LiDAR revealing hidden urban networks, 2024 jungle city discoveries)
- ✅ **Ancient History — Ancient Africa: Nubia, Kush, Aksum, Carthage, Nok** (Nubian A-Group and C-Group; Kingdom of Kerma; Egyptian-Nubian relations; Kingdom of Kush: Napata, Meroe, 25th Dynasty; Axum/Aksum: trade, obelisks, Christianization, Ge'ez script; Carthaginian Empire: Phoenician colonization, Punic Wars, Hannibal; Nok Culture: terracotta figurines, iron smelting ~900 BCE; Kingdom of Aksum; sub-Saharan iron age; frontier: ongoing Meroe excavations, early iron smelting debates)
- ✅ **Ancient History — Ancient Southeast Asia & the Pacific** (Austronesian expansion: Taiwan → Polynesia, canoe technology, wayfinding; Dong Son culture: bronze drums; early states: Funan, Champa, Srivijaya predecessors; Mainland SE Asian polities; Pacific settlement: Micronesia, Melanesia, Polynesia — Hawaii, Easter Island/Rapa Nui, New Zealand; maritime trade networks; frontier: Lapita culture aDNA, new Polynesian settlement chronology revisions)

Medieval History:
- ✅ **Medieval History — Late Antiquity & the Fall of Rome** (3rd–5th c. crisis, Diocletian reforms, Constantine, Christianization, Germanic kingdoms, Attila, Odoacer 476 CE, Eastern Roman survival, Justinian's reconquest, Plague of Justinian, Byzantine cultural transmission)
- ✅ **Medieval History — The Islamic World: Rise and Golden Age** (Muhammad, Quran revelation, Rashidun Caliphate, Umayyad expansion, Abbasid Golden Age, Baghdad House of Wisdom, Mathematics/Medicine/Astronomy, Mutazilism, Sunni-Shia split, Fatimid Egypt, Crusades from Islamic perspective, Saladin, Mongol sack of Baghdad 1258, Mamluk/Ottoman successors)
- ✅ **Medieval History — Europe: Early to High Medieval** (Carolingian Empire, Viking Age, feudalism, manorialism, the Church and monasticism (Benedict, Cluniac reform), Crusades, Norman Conquest, Magna Carta, scholasticism (Aquinas), Gothic architecture, Black Death 1347–51 and demographic collapse, Hundred Years' War)
- ✅ **Medieval History — Asia: Tang, Song, Yuan, Ming; Heian Japan; Khmer; Delhi Sultanate** (Tang cosmopolitanism, Tang poetry (Du Fu, Li Bai), gunpowder/printing/compass; Song economic revolution; Mongol conquests: Chinggis Khan through Kublai Khan, Pax Mongolica, Black Death vector; Ming rebuilding; Japan: Nara → Heian (Lady Murasaki) → Kamakura samurai; Khmer Empire/Angkor Wat; Delhi Sultanate)
- ✅ **Medieval History — Africa & the Americas 500–1500 CE** (Ghana, Mali (Mansa Musa, Timbuktu), Songhay; Great Zimbabwe; Swahili Coast trade; Mesoamerica: Classic Maya (Tikal, Palenque, Copán, collapse ~900 CE), Toltec, Aztec/Mexica founding and expansion; Andean: Wari, Tiwanaku, Inca Empire formation)

Modern History:
- ✅ **Early Modern History: Renaissance through Reformation (~1400–1700)** (Italian Renaissance: humanism, Medici patronage, Petrarch→Leonardo→Michelangelo; Printing Press (Gutenberg ~1440) and information revolution; Age of Exploration: Portuguese, Spanish, Columbus 1492, Magellan, Columbian Exchange; Protestant Reformation: Luther, Calvin, Zwingli, Council of Trent, Wars of Religion; Ottoman Empire at height: Suleiman the Magnificent; Mughal India: Akbar's tolerance; Scientific Revolution: Copernicus, Brahe, Kepler, Galileo, Newton)
- ✅ **Early Modern History: Trade, Empire, and Enlightenment (~1600–1800)** (Dutch Golden Age, East India Companies, Atlantic Slave Trade and its scale and consequences, plantation economies, Triangular Trade; Enlightenment: Locke, Montesquieu, Voltaire, Rousseau, Hume, Kant; absolutism vs constitutionalism; American Revolution 1776; French Revolution 1789 and its phases; Haitian Revolution 1791; rise of nationalism)
- ✅ **Modern History: Industrial Revolution and Imperialism (1800–1900)** (British industrialization, steam power, railways, urbanization; Marx and socialist movements; 1848 revolutions; Unification of Germany/Italy; American Civil War; Meiji Restoration; partition of Africa (Berlin Conference 1884); Sino-Japanese War; US as emerging power; Social Darwinism and scientific racism; labor movements and trade unions)
- ✅ **Modern History: 20th Century Global Conflicts (1900–1945)** (WWI: causes, trench warfare, Ottoman collapse, Armenian Genocide, redrawing of world map, 1918 flu pandemic; Russian Revolution and Soviet Union; Interwar: Weimar Republic, Great Depression, rise of fascism and totalitarianism; Spanish Civil War; WWII: theaters, Holocaust, Soviet-German war, Pacific War, atomic bombs, Holocaust scholarship and memory)
- ✅ **Modern History: Cold War, Decolonization, and Globalisation (1945–2000)** (UN founding, Marshall Plan, NATO, Warsaw Pact; Korean War; Vietnam War; Cuban Missile Crisis; space race; decolonization of Africa and Asia; Non-Aligned Movement; Chinese Revolution and Cultural Revolution; 1968 global upheaval; détente; Iranian Revolution; fall of the Berlin Wall 1989; Soviet collapse 1991; Rwandan Genocide; Gulf War; globalization and economic integration)
- ✅ **Contemporary History (2000–present)** (9/11 and War on Terror; Iraq/Afghanistan wars; Arab Spring; rise of China; Global Financial Crisis 2008; Brexit; Trump/ populist nationalist wave; COVID-19 pandemic; Russia-Ukraine War 2022; AI revolution; climate crisis as historical force; historiography debates: memory studies, digital history)
- ✅ **Thematic Histories** (History of Medicine, History of Mathematics, History of Science and Technology, History of Religion, History of Law, History of Trade and Commerce, History of Navigation, History of Slavery and Abolition, History of Education, Diplomatic History, History of Espionage and Intelligence, History of Labor, History of Colonialism and Decolonization, Military History arc, Environmental History, History of Gender and Sexuality, History of Childhood, Postcolonial historiography)
- ✅ **Historiography: Methods and Schools of Historical Thought** (Primary source analysis, Rankean historicism, Annales School (Braudel, longue durée), Marxist historiography, social history, microhistory (Ginzburg), oral history, quantitative/cliometric history, postmodern history, digital humanities in history, counterfactual history, world-systems theory (Wallerstein), Big History (Christian), transnational history, global history, memory studies (Nora, lieux de mémoire))

#### Step 3: Languages & Linguistics
- ✅ **Linguistics — Full Research Depth** (all subfields: phonetics/phonology/morphology/syntax/semantics/pragmatics, neurolinguistics, historical linguistics, typology, sociolinguistics, language acquisition, computational linguistics, language documentation, writing systems, sign languages; language families survey; named linguists)
- ✅ **Literature — Full Canonical Survey** (all major literary periods and movements from Epic through contemporary; comparative literature; literary theory; rhetorical tradition; all major world literatures)

#### Step 4: Visual Arts
- ⏳ **Visual Arts — Full Chronological & Theoretical Expansion** (all movements cave art through generative AI/NFT; all media and techniques; major artists per era; art theory and criticism; museum studies; non-Western traditions)

#### Step 5: Performing Arts
- ⏳ **Music — Full Depth** (all theory: counterpoint, orchestration, Schenkerian analysis, serialism, spectralism, microtonality; all genres; all traditions; music history medieval→contemporary; ethnomusicology; music technology)
- ⏳ **Theatre — Full Depth** (Greek tragedy through postdramatic; all movements; dramaturgical theory; key playwrights)
- ⏳ **Dance — Full Depth** (all traditions: ballet, modern, hip-hop, folk, butoh, South Asian classical, African, Latin; notation; dance theory)
- ⏳ **Film & Cinema — Full Depth** (film theory: montage, mise-en-scène, auteur, feminist film theory, Third Cinema; all genres; all national cinemas; animation; documentary; VFX history)

#### Step 6: Religion & Theology
- ⏳ **Christianity — Full Theological & Historical Depth** (Patristics, Christology debates, Councils, Catholic/Orthodox/Protestant; biblical scholarship: textual criticism, form criticism, Q source, historical Jesus; Liberation Theology, Process Theology)
- ⏳ **Islam — Full Theological & Historical Depth** (Four Sunni schools, Shia branches, Sufism orders, Kalam, Falsafa, Quran sciences, Hadith sciences, Islamic jurisprudence)
- ⏳ **Judaism — Full Theological & Historical Depth** (Mishnah, Talmud, Midrash, Halakha, Kabbalah, Hasidism, Reform/Conservative/Orthodox; Jewish philosophy: Maimonides, Spinoza, Buber, Levinas, Heschel)
- ⏳ **Buddhism — Full Depth** (Theravada, Mahayana branches, Vajrayana, Abhidharma, Pali Canon; Nagarjuna, Vasubandhu, Dogen, Nagarjuna's Madhyamika; Buddhist ethics; spread across Asia)
- ⏳ **Hinduism — Full Depth** (Vedas, Upanishads, Bhagavad Gita, six orthodox schools, Tantra, Bhakti movement, Shaivism, Vaishnavism, Shaktism; modern Hindu philosophy: Vivekananda, Aurobindo, Radhakrishnan)
- ⏳ **Other World Religions & Comparative Religion** (Zoroastrianism, Jainism, Sikhism, Confucianism, Daoism, Shinto, indigenous/traditional religions globally, New Religious Movements, Gnosticism and Esotericism, Mythology and Folklore comparative; Secular/Atheist philosophical traditions)
- ⏳ **Religious Studies Methodology & Ritual Studies** (phenomenology of religion, sociology of religion, anthropology of religion, cognitive science of religion, ritual theory, sacred texts comparative study)

#### Step 7: Law
- ⏳ **Legal Theory & Jurisprudence — Full Depth** (Natural Law, Legal Positivism, Legal Realism, CLS, Law & Economics, Feminist Jurisprudence, CRT in Law; Legal Systems: Common, Civil, Islamic, Customary, Mixed; Legal History: Roman → Napoleonic → Constitutional)
- ⏳ **Substantive Law — All Branches** (Constitutional, Criminal, Property, Tort, Contract, Administrative, Labor, Tax, Corporate, IP: Patent/Copyright/Trademark/Trade Secret, Family, Immigration, Environmental, Health, Maritime, Space, Cyber, Human Rights, International Humanitarian Law)
- ⏳ **Forensic Science — Full Depth** (DNA analysis, ballistics, digital forensics, forensic psychology, toxicology, forensic pathology, questioned documents, bloodstain pattern analysis)

#### Step 8: Communication Studies (New Discipline)
- ⏳ **Communication Studies — Full Depth** (Classical rhetoric through contemporary; media studies; journalism; PR; interpersonal communication; organizational communication; health communication; political communication; digital/social media studies; propaganda studies)

#### Step 9: Cultural & Gender Studies (New Discipline)
- ⏳ **Cultural & Gender Studies — Full Depth** (Cultural Studies: Birmingham School, Stuart Hall, hegemony; Feminist Theory: waves, intersectionality; Queer Theory; Postcolonial Studies: Said, Spivak, Fanon; Race & Ethnic Studies; Disability Studies; Sexuality Studies)

#### Step 10: Library & Information Science (New Discipline)
- ⏳ **Library & Information Science — Full Depth** (classification systems, archival science, knowledge management, information retrieval, data curation, digital libraries, information ethics)

---

### PHASE 2 — SOCIAL SCIENCES

#### Step 11: Psychology
- ⏳ **Psychology — Full Research Depth** (all schools from Structuralism through contemporary; all subfields: sensation/perception, learning/memory, emotion, personality, abnormal, health, forensic, I/O, developmental, social, evolutionary, cross-cultural; research methods; replication crisis)

#### Step 12: Sociology
- ⏳ **Sociology — Full Research Depth** (all founders and major theorists; all subfields including deviance/criminology, sociology of science, sociology of technology, computational sociology; research methods)

#### Step 13: Political Science
- ⏳ **Political Science — Full Research Depth** (all major ideologies at depth; comparative politics; all IR theories; security studies; democratization; political psychology; electoral studies; geopolitics)

#### Step 14: Economics
- ⏳ **Economics — Full Research Depth** (all schools of economic thought Classical→contemporary; all subfields; full Econometrics depth; History of Economic Thought as sub-tree)

#### Step 15: Anthropology
- ⏳ **Anthropology — Full Research Depth** (all schools; cultural, biological, linguistic, archaeological sub-fields expanded; all branches of archaeology; fieldwork methods)

#### Step 16: Geography
- ⏳ **Geography — Full Research Depth** (physical and human geography expanded; GIS/Remote Sensing depth; critical geography; quantitative revolution; time geography)

#### Step 17: Linguistics (Social Sciences placement)
- ⏳ **Linguistics — Advanced Extensions** (formal semantics, laboratory phonology, language typology, creole studies, biolinguistics, evolutionary linguistics, philosophy of linguistics — builds on Phase 1 Linguistics)

#### Step 18: Business & Management
- ⏳ **Business & Management — Full Research Depth** (strategic management, international business, supply chain, HR, innovation, risk, quality management; Finance: CAPM, derivatives, behavioral finance; Accounting all branches; Marketing science; Entrepreneurship; nonprofit/public sector management)

#### Step 19: Social Work & Public Policy (New Discipline)
- ⏳ **Social Work & Public Policy — Full Depth** (social work theory and practice; community development; child welfare; mental health social work; public policy process; implementation studies; criminology and criminal justice)

---

### PHASE 3 — NATURAL SCIENCES

#### Step 20: Mathematics (Pure)
- ⏳ **Mathematics — Pure (Number Theory, Algebra, Geometry, Topology, Analysis)** (full depth in each: named mathematicians, key theorems, open problems, connections)

#### Step 21: Mathematics (Applied & Foundations)
- ⏳ **Mathematics — Applied & Foundations** (differential equations, dynamics, probability/statistics, combinatorics, logic/set theory, foundations; information theory, cryptography; named mathematicians by era)

#### Step 22: Physics
- ⏳ **Physics — Full Research Depth** (classical mechanics, thermodynamics/stat mech, electromagnetism, optics, quantum mechanics, QFT/Standard Model, GR/cosmology/gravitational waves, condensed matter, nuclear/particle; named physicists by era)

#### Step 23: Chemistry
- ⏳ **Chemistry — Full Research Depth** (organic: all named reactions; inorganic; physical/quantum chemistry; analytical; biochemistry; materials; green chemistry; history; named chemists)

#### Step 24: Biology (Molecular to Organismal)
- ⏳ **Biology Part 1: Molecular to Organismal** (molecular biology, cell biology, genetics/genomics, evolutionary biology, developmental biology, physiology, anatomy; history of biology; named biologists)

#### Step 25: Biology (Ecology to Specialized)
- ⏳ **Biology Part 2: Ecology to Specialized** (ecology all levels, botany, zoology, microbiology, marine biology, parasitology, immunology, astrobiology; bioinformatics)

#### Step 26: Neuroscience (Standalone)
- ⏳ **Neuroscience — Full Research Depth** (cellular, systems, cognitive, behavioral, computational, clinical, developmental neuroscience; neuroimaging; neuroethics)

#### Step 27: Earth Sciences
- ⏳ **Earth Sciences — Full Research Depth** (geology all sub-fields, paleontology, atmospheric science/climate, oceanography, hydrology, soil science, cryosphere, natural hazards)

#### Step 28: Astronomy & Space Science
- ⏳ **Astronomy & Space Science — Full Research Depth** (observational, stellar, galactic, extragalactic, cosmology: dark matter/dark energy, planetary science, solar physics, space exploration, astrometry; JWST-era results; named astronomers)

---

### PHASE 4 — FORMAL SCIENCES

#### Step 29: Logic
- ⏳ **Logic — Full Research Depth** (history of logic; formal systems; non-classical logics: modal, deontic, epistemic, temporal, paraconsistent, fuzzy; informal logic; argumentation theory; paradoxes)

#### Step 30: Computer Science (Theory & Systems)
- ⏳ **Computer Science Part 1: Theory & Systems** (computation theory, complexity, algorithms/data structures, programming languages, operating systems, computer architecture, networks, databases)

#### Step 31: Computer Science (AI, Security, Application Areas)
- ⏳ **Computer Science Part 2: AI, Security, Applications** (AI history and all subfields; ML/DL all architectures; NLP; computer vision; cybersecurity; software engineering; HCI; quantum computing; robotics; graphics)

#### Step 32: Data Science (New Discipline)
- ⏳ **Data Science & Statistical Learning — Full Depth** (data wrangling, EDA, feature engineering, model selection, A/B testing, causal inference, big data systems, data governance, reproducibility, spatial/text/time-series data science)

---

### PHASE 5 — APPLIED SCIENCES

#### Step 33: Engineering
- ⏳ **Engineering — Full Research Depth** (civil, mechanical, electrical/electronic, chemical, aerospace, biomedical, environmental, materials science, nuclear, industrial, mining; all with design/analysis depth)

#### Step 34: Medicine & Health
- ⏳ **Medicine — Full Research Depth** (preclinical sciences full depth; all clinical disciplines; public health; nursing; dentistry; veterinary medicine; allied health; medical history and ethics)

#### Step 35: Agriculture
- ⏳ **Agriculture — Full Research Depth** (precision agriculture, plant genetics/GMOs, soil microbiome, agroecology, permaculture, food systems, agricultural history, climate-smart agriculture, aquaculture, food security)

#### Step 36: Architecture & Design
- ⏳ **Architecture & Design — Full Research Depth** (full chronological history of architectural styles; building technology; structural systems; urban planning; landscape; sustainable design; architectural theory and named architects)

#### Step 37: Education & Pedagogy
- ⏳ **Education & Pedagogy — Full Research Depth** (all educational philosophies and theorists; learning sciences; curriculum and assessment; educational technology; comparative education; higher education; adult learning)

#### Step 38: Environmental Studies
- ⏳ **Environmental Studies — Full Research Depth** (conservation biology; sustainability science; environmental policy; climate science depth; resource management; toxicology; waste management; environmental justice)

#### Step 39: Military Science & Security Studies (New Discipline)
- ⏳ **Military Science & Security Studies — Full Depth** (military history; strategy and tactics: Clausewitz/Sun Tzu/Boyd; intelligence studies; defense technology; terrorism studies; peace and conflict studies)

#### Step 40: Transportation Science (New Discipline)
- ⏳ **Transportation Science — Full Depth** (transportation engineering, traffic engineering, transportation planning, autonomous/electric vehicles, policy, economics, safety, history)

---

### PHASE 6 — CRAFTS, TRADES & PRACTICAL ARTS

#### Step 41: Metallurgy & Smithing
- ⏳ **Metallurgy & Smithing — Full Depth** (metallurgical science: phase diagrams, heat treatment, alloy systems; historical metallurgy timeline; traditional and modern techniques; specific alloy families; casting, forming, joining, surface treatments; bladesmithing; armorsmithing)

#### Step 42: Traditional Crafts
- ⏳ **Traditional Crafts — Full Depth** (woodworking: hand/power tools, joinery, finishing, specialties; masonry; textile arts: fibre preparation through finishing; glassblowing; leatherwork; traditional printing; papermaking)

#### Step 43: Survival & Practical Skills
- ⏳ **Survival & Practical Skills — Full Depth** (wilderness survival all environments; herbalism; food preservation; brewing and distilling; traditional navigation)

#### Step 44: Maritime
- ⏳ **Maritime — Full Depth** (seamanship; navigation: coastal, celestial, electronic; boat building; naval history; maritime law; fishing; diving)

---

### PHASE 7 — INTERDISCIPLINARY & EMERGING

#### Step 45: Cognitive Science
- ⏳ **Cognitive Science — Full Depth** (philosophy of mind, psychology, neuroscience, AI/computational, linguistics, anthropology components; key figures: Turing, Newell, Simon, Marr, Chomsky, Fodor, Pylyshyn, Lakoff, Clark)

#### Step 46: Bioinformatics & Computational Biology
- ⏳ **Bioinformatics & Computational Biology — Full Depth** (sequence analysis, phylogenetics, genomics, transcriptomics, proteomics, structural bioinformatics, systems biology, metagenomics, population genetics tools)

#### Step 47: Information Theory, Systems Theory & Complexity
- ⏳ **Information Theory, Systems Theory & Complexity — Full Depth** (Shannon entropy; cybernetics; general systems theory; complexity science: CAS, emergence, chaos, network science, agent-based modeling)

#### Step 48: Applied & Emerging Ethics
- ⏳ **Applied & Emerging Ethics — Full Depth** (bioethics; environmental ethics; technology ethics/AI ethics; business ethics; media ethics; neuroethics)

#### Step 49: Digital Humanities & Science Communication
- ⏳ **Digital Humanities & Science Communication — Full Depth** (text mining, cultural analytics, digital archives, GIS for humanities, science journalism, public engagement, open science, citizen science)

#### Step 50: Remaining Disciplines & Gap Fill
- ⏳ **Energy Studies — Full Depth** (fossil fuels, nuclear: fission/fusion, renewables, storage, smart grid, energy policy and economics, energy transitions history)
- ⏳ **Food Science & Nutrition — Full Depth** (food chemistry, food microbiology, food processing, food safety, nutrition: macro/micro/metabolism, clinical nutrition, sports nutrition, nutritional epidemiology)
- ⏳ **Sports Science — Full Depth** (exercise physiology, biomechanics, sports psychology, sports nutrition, training theory/periodization, sports medicine, kinesiology)
- ⏳ **Urban Studies — Full Depth** (urban sociology, urban economics, urban planning, housing, transportation, smart cities, urban ecology)
- ⏳ **Disaster Science & Emergency Management — Full Depth** (hazard assessment, risk analysis, emergency response, disaster recovery, humanitarian logistics, disaster psychology)
- ⏳ **Forensic Sciences (standalone) — Full Depth** (forensic biology/DNA, forensic chemistry, toxicology, forensic pathology, digital forensics, forensic psychology, crime scene investigation, questioned documents, firearms analysis)

---

## Summary Statistics

| Phase | Steps | Domain |
|-------|-------|--------|
| 1 | 1–10 | Humanities |
| 2 | 11–19 | Social Sciences |
| 3 | 20–28 | Natural Sciences |
| 4 | 29–32 | Formal Sciences |
| 5 | 33–40 | Applied Sciences |
| 6 | 41–44 | Crafts & Trades |
| 7 | 45–50 | Interdisciplinary |

Total granular topics to write: ~80+ (History alone has ~20 sub-topics)

---

## Notes for AI

- The target file is `c:\Users\twaba\Documents\human-academy\schools-of-thought.md`
- Do NOT rebuild `HumanAcademy.exe` unless explicitly asked
- Do NOT add prose paragraphs — bullets only
- Do NOT summarize or truncate — full depth every time
- Each completed topic should be the same scale as the three completed Ancient History sections (~300–500 bullets)
- When using `replace_string_in_file`, make sure to include enough surrounding context in `oldString` to be unique
- After every "continue", update this file to change the completed ⏳ to ✅
