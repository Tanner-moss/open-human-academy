window.HUMAN_ACADEMY_MATHEMATICS_SOURCE_CONTENT = {
  strands: [
    'Foundations, Rigor, and Mathematical Culture',
    'Number Theory',
    'Algebra',
    'Geometry',
    'Topology',
    'Analysis',
    'Differential Equations',
    'Probability Theory',
    'Statistics and Data Analysis',
    'Combinatorics and Discrete Mathematics',
    'Mathematical Logic and Foundations',
    'Applied Mathematics'
  ],
  overview: {
    summary: 'Full-source orientation to mathematics across pure structure, applied foundations, canonical thinkers, and active research frontiers.',
    learningObjectives: [
      'Map the major subject domains named in the mathematics section of the schools-of-thought source.',
      'Distinguish pure mathematical structure from applied-and-foundational mathematical practice.',
      'Identify the frontier areas and open problems that organize contemporary mathematical research.'
    ],
    sections: [
      { heading: 'Basics and Scope', content: 'Pure mathematics studies abstract structures, formal patterns, rigorous proof, invariants, and conceptual relations that often later become central to physics, computing, engineering, cryptography, and economics.' },
      { heading: 'Historical Arc', content: 'The source traces mathematics from Greek geometry and classical arithmetic through nineteenth-century rigor, twentieth-century structural revolutions, and contemporary higher, derived, and machine-assisted methods.' },
      { heading: 'Pure Mathematical Themes', content: 'Symmetry, duality, classification, moduli, local-to-global reasoning, categorical structure, and proof culture connect algebra, geometry, topology, analysis, and number theory.' },
      { heading: 'Applied and Foundational Extension', content: 'The mathematics section extends beyond pure structure into differential equations, probability, statistics, combinatorics, logic, optimization, numerical mathematics, information theory, cryptography, and interdisciplinary modeling.' },
      { heading: 'Contemporary Frontiers', content: 'The source emphasizes Langlands-adjacent work, perfectoid methods, higher categories, stochastic and probabilistic frontiers, formal proof ecosystems, scientific machine learning, and ongoing debates about abstraction, rigor, and machine assistance.' }
    ],
    lessons: [
      {
        slug: 'scope',
        title: 'Mathematics: Scope, Practice, and Organizing Questions',
        summary: 'Use the source file to understand what mathematics studies, how mathematical work proceeds, and what tensions organize the field.',
        keyTerms: ['structure', 'invariance', 'proof', 'symmetry', 'continuity', 'computation'],
        points: [
          'Pure mathematics studies abstract structures, formal patterns, rigorous proof, and conceptual invariants independent of immediate application.',
          'Core questions include what structures exist, what invariants survive transformation, what can be proved or computed, and how local rules generate global phenomena.',
          'Persistent tensions include abstraction versus intuition, constructive versus classical proof, algebraic versus analytic method, local versus global reasoning, and finite versus infinite structure.',
          'Mathematical practice depends on definitions, conjectures, proof techniques, examples, counterexamples, heuristic analogy, and deep inter-field transfer rather than experiment alone.'
        ],
        readings: [
          { title: 'Euclid - Elements', author: 'Euclid' },
          { title: 'Schools of Thought: Mathematics', author: 'Human Academy', year: 2026 }
        ]
      },
      {
        slug: 'history',
        title: 'Mathematics: Historical Arc and Structural Revolutions',
        summary: 'Follow the source through ancient foundations, early modern advances, nineteenth-century rigor, and contemporary structural mathematics.',
        keyTerms: ['axiomatization', 'calculus', 'abstraction', 'category theory', 'scheme theory', 'formalization'],
        points: [
          'Ancient foundations include Greek geometry, Diophantine problems, Indian and Islamic arithmetic and algebra, and Chinese algorithmic mathematics.',
          'Early modern mathematics adds analytic geometry, infinitesimal calculus, algebraic notation, probability, and renewed number-theoretic inquiry.',
          'Nineteenth-century rigor and abstraction are marked by Gauss, Cauchy, Riemann, Galois, Dedekind, Cantor, Hilbert, Lie, Poincare, and Noether.',
          'Twentieth- and twenty-first-century work expands through category theory, functional analysis, topology, representation theory, homological methods, Langlands, mirror symmetry, additive combinatorics, higher categories, and computer-assisted proof.'
        ],
        readings: [
          { title: 'Disquisitiones Arithmeticae', author: 'Carl Friedrich Gauss' },
          { title: 'Bourbaki and Structural Mathematics', author: 'Human Academy', year: 2026 }
        ]
      },
      {
        slug: 'pure-themes',
        title: 'Mathematics: Cross-Cutting Pure Themes',
        summary: 'Survey the unifying themes that recur across the pure mathematical part of the source section.',
        keyTerms: ['duality', 'classification', 'moduli', 'sheaves', 'local-to-global', 'categorical methods'],
        points: [
          'Symmetry acts as an organizing principle across algebra, geometry, topology, and number theory.',
          'Duality phenomena include Poincare, Serre, Verdier, mirror-symmetry, Langlands-type, and Koszul-style correspondences.',
          'Mathematics repeatedly toggles between classification programs and moduli-space thinking depending on whether finite lists or parameter spaces are possible.',
          'Local-to-global principles such as sheaves, descent, localization, Hasse principles, and gluing constructions unify distant fields.',
          'Categorical and homological methods increasingly provide a shared language across geometry, topology, representation theory, and mathematical physics.'
        ],
        readings: [
          { title: 'Categories for the Working Mathematician', author: 'Saunders Mac Lane' },
          { title: 'The Rising Role of Homological Methods', author: 'Human Academy', year: 2026 }
        ]
      },
      {
        slug: 'applied-foundations',
        title: 'Mathematics: Applied and Foundational Domains',
        summary: 'Map the source transition from pure mathematics into modeling, inference, optimization, proof, and computation.',
        keyTerms: ['differential equations', 'probability', 'statistics', 'combinatorics', 'logic', 'optimization'],
        points: [
          'The applied-and-foundational continuation covers differential equations, probability, statistics, combinatorics, discrete mathematics, logic, set theory, numerical analysis, optimization, information theory, and cryptography-adjacent mathematics.',
          'These areas are not merely applications; the source treats them as deep fields with major open problems, internal theories, and broad connections to science and computing.',
          'Cross-cutting tensions include deterministic versus stochastic description, exact versus asymptotic reasoning, symbolic versus numerical methods, and constructive versus classical mathematics.',
          'Foundations are treated as live mathematical practice through proof assistants, formal verification, automated reasoning, and machine-supported workflows.'
        ],
        readings: [
          { title: 'Probability and Measure', author: 'Patrick Billingsley' },
          { title: 'Convex Optimization', author: 'Stephen Boyd and Lieven Vandenberghe' }
        ]
      },
      {
        slug: 'frontiers',
        title: 'Mathematics: Frontier Research and Open Problems',
        summary: 'Identify the live debates and high-level research problems named across the full mathematics section.',
        keyTerms: ['Riemann Hypothesis', 'BSD conjecture', 'Hodge conjecture', 'scientific machine learning', 'formal proof', 'high-dimensional inference'],
        points: [
          'Pure mathematics frontiers include Langlands-related work, p-adic geometry, perfectoid methods, prismatic cohomology, higher categories, geometric analysis, additive combinatorics, and formalization.',
          'Applied-and-foundational frontiers include neural operators, differentiable solvers, operator learning, high-dimensional probability, privacy-preserving statistics, and post-quantum cryptography.',
          'The source explicitly centers open problems such as the Riemann Hypothesis, BSD conjecture, Hodge conjecture, Navier-Stokes regularity, Yang-Mills mass gap, and foundational boundary questions around proof and complexity.',
          'A recurring debate is whether modern abstraction and machine assistance generate real unification or simply raise new barriers to verification, communication, and breadth.'
        ],
        readings: [
          { title: 'Frontier Research in Mathematics', author: 'Human Academy', year: 2026 },
          { title: 'Lean, Coq, and the Future of Formal Proof', author: 'Human Academy', year: 2026 }
        ]
      }
    ],
    masteryCriteria: [
      'Complete all overview lessons and identify the major subject domains in the mathematics source section.',
      'Pass the overview assessment on field structure, pure-versus-applied organization, and contemporary frontiers.',
      'Use the overview project to choose a sequence through the mathematics subject nodes.'
    ],
    assessmentTopics: ['Scope of pure mathematics', 'Historical arc', 'Pure mathematical themes', 'Applied and foundational domains', 'Contemporary frontiers']
  },
  strandCourses: {
    'Foundations, Rigor, and Mathematical Culture': {
      summary: 'Foundational course on axiomatic method, proof culture, mathematical crises, classification programs, and the schools and styles that shaped modern mathematics.',
      learningObjectives: [
        'Explain how axiomatic method and proof culture organize mathematical rigor.',
        'Trace the major crises and reorganizations that reshaped mathematical foundations.',
        'Identify the main schools and stylistic traditions named in the mathematics source.'
      ],
      sections: [
        { heading: 'Axiomatic Method and Proof Culture', content: 'Euclid, Hilbert, Bourbaki, and the distinction between correctness, insight, elegance, and conceptual explanation anchor the source account of mathematical rigor.' },
        { heading: 'Canonical Milestones and Crises', content: 'Irrational numbers, non-Euclidean geometry, set-theoretic paradoxes, Godel incompleteness, and large classification programs define the discipline\'s foundational turning points.' },
        { heading: 'Styles and Schools', content: 'French structuralism, Russian schools, German algebraic and geometric traditions, US postwar development, and globally networked contemporary mathematics all appear as distinct styles of work.' },
        { heading: 'Formalization and Verification', content: 'Modern mathematics increasingly interacts with proof assistants, machine-checked libraries, and debates over verification, abstraction, communication, and discoverability.' }
      ],
      lessons: [
        { slug: 'proof-culture', title: 'Foundations: Axiomatic Method and Proof Culture', summary: 'Study the source treatment of axiomatization and mathematical proof as both guarantee and explanation.', keyTerms: ['axiomatic method', 'proof', 'consistency', 'completeness', 'Bourbaki'], points: ['Euclid\'s Elements remains the canonical ancestor of axiomatic reasoning.', 'Hilbert formalized the search for consistency, completeness, and independence.', 'Bourbaki reorganized large parts of twentieth-century mathematics structurally and axiomatically.', 'The source stresses that mathematicians distinguish correctness from insight and short proofs from conceptual proofs.'] },
        { slug: 'crises', title: 'Foundations: Milestones, Crises, and Classification', summary: 'Trace the destabilizing discoveries and structural responses that reshaped mathematical foundations.', keyTerms: ['irrational numbers', 'non-Euclidean geometry', 'set paradoxes', 'incompleteness', 'classification'], points: ['The discovery of irrational numbers challenged naive arithmetic completeness.', 'Non-Euclidean geometry broke the assumption of a single spatial truth.', 'Set-theoretic paradoxes triggered foundational reconstruction.', 'Godel incompleteness limited hopes for a complete self-certifying formal system.', 'Classification programs exemplify a recurring mathematical pattern: identify invariants, construct examples, and prove completeness.'] },
        { slug: 'schools', title: 'Foundations: Schools, Styles, and Traditions', summary: 'Map the stylistic and geographic traditions highlighted in the mathematics section.', keyTerms: ['French structuralism', 'Russian schools', 'German tradition', 'postwar US mathematics', 'global institutes'], points: ['French structuralism and Bourbaki-style abstraction shaped one influential style.', 'Russian schools contributed major work in topology, dynamical systems, representation theory, and probability.', 'German traditions stretch from Gauss and Hilbert through Noether, Artin, and Grothendieck-adjacent algebraic and geometric work.', 'Contemporary mathematics is increasingly organized through global collaborations, workshops, preprints, and specialized institutes.'] },
        { slug: 'formalization', title: 'Foundations: Formalization, Proof Assistants, and Live Debates', summary: 'Use the source to frame current debates over formal verification and mathematical workflow.', keyTerms: ['Lean', 'Coq', 'formal proof', 'verification', 'abstraction'], points: ['Proof assistants and machine-checked libraries are becoming more capable in algebra, analysis, and category theory.', 'The source links formalization to broader questions about verification, discoverability, and division of labor between human and machine.', 'A live debate is whether extreme abstraction clarifies deep correspondences or creates new communication barriers.', 'Another debate concerns how much formal proof verification should become standard in core mathematical practice.'] }
      ],
      assessmentTopics: ['axiomatic method', 'proof culture', 'foundational crises', 'mathematical schools', 'formalization']
    },
    'Number Theory': {
      summary: 'Source-driven course on arithmetic structure from classical divisibility and reciprocity through analytic, algebraic, and arithmetic-geometric frontiers.',
      sections: [
        { heading: 'Foundations', content: 'The section begins with divisibility, primes, gcd, congruences, modular arithmetic, Chinese remainder theorem, Diophantine equations, and quadratic reciprocity.' },
        { heading: 'Core Domains', content: 'Elementary and Diophantine number theory, algebraic number theory, analytic number theory, arithmetic geometry, and additive/combinatorial number theory structure the field.' },
        { heading: 'Canonical Results', content: 'The source names Dirichlet on primes in arithmetic progressions, the prime number theorem, Roth, Green-Tao, modularity, Fermat\'s Last Theorem, and modern arithmetic statistics.' },
        { heading: 'Current Frontiers', content: 'Riemann Hypothesis, BSD, abc, Goldbach, twin primes, Langlands reciprocity, perfectoid methods, p-adic geometry, and machine-assisted modular exploration anchor the research frontier.' }
      ],
      lessons: [
        { slug: 'foundations', title: 'Number Theory: Classical Foundations', summary: 'Study the arithmetic base of the subject as presented in the source file.', keyTerms: ['primes', 'gcd', 'congruences', 'modular arithmetic', 'quadratic reciprocity'], points: ['Classical foundations include divisibility, primes, gcd, the Euclidean algorithm, congruences, modular arithmetic, Chinese remainder theorem, Diophantine equations, and quadratic reciprocity.', 'The source marks Euclid, Diophantus, Fermat, Euler, and Gauss as canonical figures in building the field.', 'Gauss\'s Disquisitiones Arithmeticae is treated as the foundational modern text of number theory.'] },
        { slug: 'domains', title: 'Number Theory: Elementary, Algebraic, Analytic, and Arithmetic-Geometric Domains', summary: 'Map the major internal branches of number theory named in the source.', keyTerms: ['Diophantine equations', 'class field theory', 'zeta functions', 'elliptic curves', 'additive combinatorics'], points: ['Elementary and Diophantine topics include perfect numbers, arithmetic functions, Pell equations, continued fractions, partitions, Waring-type problems, prime gaps, and sieve methods.', 'Algebraic number theory adds algebraic integers, number fields, ideals, valuations, local fields, class groups, class field theory, and Galois cohomology.', 'Analytic number theory centers zeta and L-functions, modular forms, circle method, sieve theory, exponential sums, and trace formulas.', 'Arithmetic geometry studies elliptic curves, abelian varieties, rational points, heights, moduli, Galois representations, modularity, and p-adic Hodge-style tools.', 'Additive and combinatorial number theory brings in sumsets, Szemeredi-type structure, Gowers norms, ergodic methods, and expansion in groups.'] },
        { slug: 'results', title: 'Number Theory: Major Results and Canonical Contributors', summary: 'Identify the major theorems, proofs, and contributors foregrounded by the mathematics section.', keyTerms: ['prime number theorem', 'Roth', 'Green-Tao', 'Fermat\'s Last Theorem', 'modularity'], points: ['The source highlights the infinitude of primes, Dirichlet\'s theorem, the prime number theorem, Roth\'s theorem, Baker\'s transcendence methods, Green-Tao on prime progressions, and bounded prime gap work.', 'Arithmetic geometry milestones include Faltings on the Mordell conjecture, the modularity theorem, Wiles on Fermat\'s Last Theorem, BSD, and Sato-Tate.', 'Key figures include Riemann, Hardy, Littlewood, Selberg, Deligne, Faltings, Wiles, Mazur, Bhargava, and Scholze.'] },
        { slug: 'frontiers', title: 'Number Theory: Current Frontiers and Open Problems', summary: 'Use the source to map live research problems and methods in number theory.', keyTerms: ['Riemann Hypothesis', 'BSD', 'abc conjecture', 'Langlands', 'perfectoid methods'], points: ['The source explicitly names the Riemann Hypothesis, BSD conjecture, abc conjecture, Goldbach, twin prime conjecture, and arithmetic statistics as active fronts.', 'New techniques include perfectoid methods, p-adic geometry, trace-formula advances, and arithmetic statistics of fields and elliptic curves.', 'Langlands reciprocity appears as one of the highest-level connective frameworks across number theory, geometry, and representation theory.'] }
      ],
      assessmentTopics: ['classical foundations', 'algebraic number theory', 'analytic number theory', 'arithmetic geometry', 'current frontiers']
    },
    'Algebra': {
      summary: 'Source-driven course covering linear and abstract algebra, groups, rings, fields, commutative algebra, homological methods, representation theory, and category-theoretic structure.',
      sections: [
        { heading: 'Foundations', content: 'Linear algebra, multilinear structures, and abstract algebraic objects provide the subject\'s entry point.' },
        { heading: 'Core Structures', content: 'Groups, rings, fields, modules, algebras, ideals, quotients, homomorphisms, universal properties, and Noetherian methods anchor the field.' },
        { heading: 'Higher Algebraic Languages', content: 'Homological algebra, representation theory, universal algebra, and category theory broaden algebra into a shared language across mathematics.' },
        { heading: 'Active Frontiers', content: 'Categorification, geometric representation theory, geometric Langlands, p-adic representations, higher categories, and modern module-theoretic methods remain active frontiers.' }
      ],
      lessons: [
        { slug: 'linear', title: 'Algebra: Linear and Abstract Foundations', summary: 'Cover the foundational algebraic structures described in the source.', keyTerms: ['vector spaces', 'linear maps', 'eigenvalues', 'groups', 'rings', 'fields'], points: ['Linear algebra includes vector spaces, linear maps, eigenvalues, canonical forms, inner products, tensor products, exterior algebra, and matrix representation.', 'Abstract algebra adds groups, rings, fields, modules, algebras, ideals, quotients, homomorphisms, exact sequences, and universal properties.', 'The source emphasizes Noetherian methods as a major shift from calculation toward structural argument.'] },
        { slug: 'domains', title: 'Algebra: Groups, Rings, Fields, and Commutative Structure', summary: 'Map the core branches of algebra in the source section.', keyTerms: ['group actions', 'Sylow theory', 'Dedekind domains', 'Galois theory', 'commutative algebra'], points: ['Group theory includes finite, solvable, nilpotent, permutation, combinatorial, geometric, Lie, and Coxeter group work.', 'Ring and module theory includes semisimple, Artinian, Noetherian, local, and localization-based approaches.', 'Field theory and Galois theory organize symmetry through extensions, separability, normality, radicals, and inverse Galois questions.', 'Commutative algebra provides spectra, local rings, dimension theory, depth, Cohen-Macaulay regularity, and completion as foundations for algebraic geometry.'] },
        { slug: 'higher', title: 'Algebra: Homological, Representation-Theoretic, and Categorical Languages', summary: 'Study the high-level algebraic languages that connect algebra to the rest of mathematics.', keyTerms: ['Ext', 'Tor', 'derived categories', 'representations', 'adjunctions', 'higher categories'], points: ['Homological algebra adds derived functors, Ext, Tor, spectral sequences, derived categories, and triangulated or abelian settings.', 'Representation theory covers finite groups, Lie algebras, Lie groups, quivers, associative algebras, quantum groups, and geometric representation theory.', 'Universal algebra studies identities and varieties, while category theory adds functors, natural transformations, adjunctions, limits, and universal properties.', 'Higher categories and topos-style perspectives are identified as major frontier tools in geometry, topology, and logic.'] },
        { slug: 'frontiers', title: 'Algebra: Frontiers and Continuing Programs', summary: 'Frame the live algebraic research directions named in the mathematics source.', keyTerms: ['categorification', 'geometric Langlands', 'modular representations', 'p-adic representations', 'higher algebra'], points: ['Active areas include categorification, character sheaves, geometric Langlands, p-adic representation theory, and modular representation theory.', 'The source also highlights derived and higher categorical methods as part of the current abstract toolkit.', 'Algebra remains one of the main engines of cross-field unification through structural and homological arguments.'] }
      ],
      assessmentTopics: ['linear algebra', 'abstract algebra', 'group theory', 'homological algebra', 'representation theory']
    },
    'Geometry': {
      summary: 'Course on classical, differential, algebraic, discrete, convex, and geometric-analytic traditions within the source mathematics section.',
      sections: [
        { heading: 'Classical Geometry', content: 'Euclidean, projective, affine, inversive, triangle, and convex geometry appear as enduring classical frameworks.' },
        { heading: 'Differential and Algebraic Geometry', content: 'Manifolds, curvature, symplectic and complex structures, varieties, schemes, sheaves, stacks, moduli, and birational questions dominate the modern field.' },
        { heading: 'Discrete and Global Geometry', content: 'Polytopes, packings, lattice geometry, geometric inequalities, gauge theory, flows, scalar curvature, and geometric measure theory connect geometry to topology and analysis.' },
        { heading: 'Programs and Frontiers', content: 'Ricci flow, minimal model programs, mirror symmetry, derived algebraic geometry, and deep geometry-physics interfaces remain central.' }
      ],
      lessons: [
        { slug: 'classical', title: 'Geometry: Classical and Synthetic Foundations', summary: 'Start from the classical geometries and invariants named in the source.', keyTerms: ['Euclidean geometry', 'projective geometry', 'duality', 'conics', 'axiomatic geometry'], points: ['The source includes Euclidean, projective, affine, inversive, triangle, and convex geometry.', 'Incidence structures, conics, duality, projective invariants, and axiomatic geometry remain central classical themes.', 'Euclid, Desargues, Pascal, Poncelet, Steiner, Hilbert, and Coxeter are treated as major figures in this lineage.'] },
        { slug: 'modern', title: 'Geometry: Differential and Algebraic Domains', summary: 'Follow the modern geometric expansion into manifolds, curvature, schemes, and moduli.', keyTerms: ['manifolds', 'curvature', 'symplectic geometry', 'schemes', 'moduli'], points: ['Differential geometry includes manifolds, tangent bundles, forms, Riemannian metrics, connections, curvature, geodesics, holonomy, and symplectic or complex structures.', 'Algebraic geometry includes varieties, schemes, divisors, cohomology, sheaves, stacks, moduli spaces, birational geometry, and intersection theory.', 'Major programs include etale cohomology, moduli of curves and bundles, minimal model program, enumerative geometry, mirror symmetry, and derived algebraic geometry.'] },
        { slug: 'global', title: 'Geometry: Discrete, Convex, and Geometric-Analytic Structure', summary: 'Study the broader geometric domain that links discrete objects, flows, and PDE methods.', keyTerms: ['polytopes', 'packing', 'Ricci flow', 'gauge theory', 'minimal surfaces'], points: ['Discrete and convex geometry includes polytopes, tilings, packing and covering, convex bodies, lattice geometry, and geometric inequalities.', 'Geometric analysis uses PDE methods, geometric flows, scalar curvature, gauge theory, Seiberg-Witten theory, and geometric measure theory.', 'The source highlights Ricci flow, minimal surface breakthroughs, and deep interactions with topology and physics.'] },
        { slug: 'frontiers', title: 'Geometry: Frontiers, Programs, and Deep Interfaces', summary: 'Frame the current geometry research directions named by the source section.', keyTerms: ['mirror symmetry', 'derived geometry', 'Floer theory', 'scalar curvature', 'symplectic invariants'], points: ['Mirror symmetry and string-inspired geometry are named as major expository and research unifications.', 'Derived and spectral algebraic geometry extend geometric language into contemporary frontier work.', 'Minimal surfaces, scalar-curvature problems, symplectic-topological invariants, and Floer-theoretic structures remain active frontier areas.'] }
      ],
      assessmentTopics: ['classical geometry', 'differential geometry', 'algebraic geometry', 'geometric analysis', 'mirror symmetry']
    },
    'Topology': {
      summary: 'Course on continuity, space, algebraic invariants, low-dimensional topology, and modern topological frontiers.',
      sections: [
        { heading: 'General Topology', content: 'Open and closed sets, compactness, connectedness, separation axioms, quotient constructions, and metrization form the subject foundation.' },
        { heading: 'Algebraic Topology', content: 'Fundamental groups, homology, cohomology, homotopy, fibrations, K-theory, spectral sequences, and stable homotopy dominate the algebraic domain.' },
        { heading: 'Geometric and Low-Dimensional Topology', content: 'Knots, 3-manifolds, 4-manifolds, mapping class groups, Teichmuller theory, and symplectic or contact topology anchor geometric topology.' },
        { heading: 'Open Problems and Modern Interfaces', content: 'Persistent homology, smooth 4-dimensional questions, stable homotopy classification, quantum invariants, and categorical interfaces remain live frontiers.' }
      ],
      lessons: [
        { slug: 'general', title: 'Topology: General Foundations of Space and Continuity', summary: 'Study the abstract framework that lets topology generalize beyond Euclidean intuition.', keyTerms: ['compactness', 'connectedness', 'separation axioms', 'quotient spaces', 'metrization'], points: ['General topology covers open and closed sets, compactness, connectedness, separation axioms, product spaces, quotient spaces, metrization, paracompactness, and function spaces.', 'The source emphasizes topology as the abstract study of continuity and space beyond ordinary geometry.'] },
        { slug: 'algebraic', title: 'Topology: Algebraic Invariants and Homotopical Structure', summary: 'Map the algebraic-topological framework named in the source.', keyTerms: ['fundamental group', 'homology', 'cohomology', 'spectral sequences', 'stable homotopy'], points: ['Algebraic topology includes the fundamental group, covering spaces, homology, cohomology, homotopy groups, fibrations, characteristic classes, K-theory, and stable homotopy theory.', 'Major themes include obstruction theory, generalized cohomology, higher categories in homotopy theory, and chromatic homotopy theory.'] },
        { slug: 'geometric', title: 'Topology: Geometric and Low-Dimensional Domains', summary: 'Study the knot, manifold, and gauge-theoretic side of topology.', keyTerms: ['knots', '3-manifolds', '4-manifolds', 'Teichmuller theory', 'contact topology'], points: ['Geometric and low-dimensional topology includes knots, links, 3-manifolds, 4-manifolds, mapping class groups, Teichmuller theory, and contact and symplectic topology.', 'Landmark results named in the source include the Poincare conjecture, geometrization, exotic smooth structures on R4, and gauge-theoretic constraints on four-manifolds.'] },
        { slug: 'frontiers', title: 'Topology: Applied Interfaces and Open Problems', summary: 'Use the source to identify how topology continues into data analysis and open classification problems.', keyTerms: ['persistent homology', 'smooth 4D Poincare', 'stable homotopy', 'quantum invariants', 'categorical topology'], points: ['Persistent homology is named as one path by which abstract topology feeds into data analysis.', 'The source highlights the smooth 4-dimensional Poincare conjecture, stable homotopy classification, higher-dimensional topology questions, and relations among quantum invariants, symplectic topology, and categorical structures as active problems.'] }
      ],
      assessmentTopics: ['general topology', 'algebraic topology', 'low-dimensional topology', 'persistent homology', 'open problems']
    },
    'Analysis': {
      summary: 'Course on real, complex, and functional analysis together with harmonic analysis, dynamics, ergodic theory, and probability-adjacent analytic structure.',
      sections: [
        { heading: 'Foundational Domains', content: 'Real analysis, complex analysis, and functional analysis define the analytic core of the source section.' },
        { heading: 'Advanced Analytic Systems', content: 'Harmonic analysis, PDE-adjacent pure analysis, dynamical systems, ergodic theory, and probability interfaces extend analysis outward.' },
        { heading: 'Canonical Themes', content: 'Measure, convergence, spectra, operators, Fourier structure, regularity, and recurrence are recurring organizing themes.' },
        { heading: 'Current Research', content: 'Decoupling, microlocal analysis, stochastic interfaces, free probability, and dynamical complexity remain active areas.' }
      ],
      lessons: [
        { slug: 'real-complex', title: 'Analysis: Real and Complex Foundations', summary: 'Study the core analytic domains of limits, integration, holomorphicity, and continuation.', keyTerms: ['Lebesgue integration', 'Sobolev spaces', 'holomorphic functions', 'residues', 'Riemann surfaces'], points: ['Real analysis covers limits, continuity, differentiation, integration, sequences and series, measure, integration theory, BV functions, Sobolev spaces, and harmonic-analysis foundations.', 'Complex analysis covers holomorphic functions, contour integration, residues, conformal maps, analytic continuation, Riemann surfaces, and several complex variables.', 'The source treats Cauchy, Weierstrass, Riemann, Lebesgue, Borel, Banach, Stein, and Hormander as major figures across the analytic tradition.'] },
        { slug: 'functional', title: 'Analysis: Functional, Harmonic, and Operator-Theoretic Structure', summary: 'Map the operator and Fourier-based analytic frameworks named in the source.', keyTerms: ['Banach spaces', 'Hilbert spaces', 'operators', 'Fourier analysis', 'singular integrals'], points: ['Functional analysis includes normed spaces, Banach spaces, Hilbert spaces, operators, spectra, distributions, C*-algebras, and von Neumann algebras.', 'Harmonic analysis includes Fourier series and transforms, Calderon-Zygmund theory, singular integrals, maximal functions, restriction, decoupling, dispersive estimates, and microlocal analysis.', 'These domains connect directly to PDE, quantum theory, geometry, ergodic theory, and probability.'] },
        { slug: 'dynamics', title: 'Analysis: Dynamics, Ergodic Theory, and Probability Interfaces', summary: 'Study the dynamic and stochastic branches that the source places inside analysis.', keyTerms: ['ergodic theory', 'entropy', 'hyperbolicity', 'random matrices', 'SPDE'], points: ['Dynamical systems and ergodic theory include measure-preserving systems, entropy, recurrence, hyperbolicity, bifurcation, smooth dynamics, symbolic dynamics, and Teichmuller dynamics.', 'The source also names stochastic analysis, random matrices, free probability, concentration inequalities, interacting particle systems, and SPDE theory as probability-adjacent analytic interfaces.', 'Analysis in the source remains deeply tied to structure and estimates rather than only direct applied modeling.'] },
        { slug: 'frontiers', title: 'Analysis: Modern Frontiers and Active Methods', summary: 'Locate the current analytic fronts highlighted by the mathematics section.', keyTerms: ['decoupling', 'microlocal analysis', 'free probability', 'rough analysis', 'dispersive estimates'], points: ['Active fronts include decoupling, restriction theory, dispersive analysis, microlocal methods, and free-probabilistic interfaces.', 'The analysis frontier is also shaped by SPDE, random matrix universality, and high-dimensional probabilistic structure.', 'The source repeatedly frames analysis as one of the key bridges between pure mathematics and applied-and-foundational research.'] }
      ],
      assessmentTopics: ['real analysis', 'complex analysis', 'functional analysis', 'harmonic analysis', 'ergodic theory']
    },
    'Differential Equations': {
      summary: 'Source-driven course on ODEs, PDEs, geometric PDE, stochastic and rough systems, and modern computational interfaces.',
      sections: [
        { heading: 'Foundations and Scope', content: 'Differential equations model change across physics, engineering, biology, economics, geometry, and dynamical systems.' },
        { heading: 'Ordinary and Partial Differential Equations', content: 'Existence, uniqueness, stability, phase portraits, bifurcation, elliptic/parabolic/hyperbolic classes, dispersive equations, and conservation laws structure the field.' },
        { heading: 'Geometric and Numerical Interfaces', content: 'Geometric flows, inverse problems, finite elements, spectral methods, uncertainty quantification, and scientific machine learning extend PDE work outward.' },
        { heading: 'Open Problems and Frontiers', content: 'Navier-Stokes regularity, Euler blow-up, singularity formation, rough PDEs, and data-driven operator discovery anchor the frontier.' }
      ],
      lessons: [
        { slug: 'scope', title: 'Differential Equations: Foundations and Organizing Questions', summary: 'Understand how the mathematics source frames differential equations as a central mathematical language of change.', keyTerms: ['ODE', 'PDE', 'stochastic differential equations', 'dynamics', 'modeling'], points: ['Differential equations are presented as central to physics, engineering, biology, economics, geometry, and dynamical systems.', 'Major branches include ordinary, partial, stochastic, delay, integro-differential, and differential-algebraic systems.', 'Key figures named in the source include Newton, Leibniz, Euler, Lagrange, Laplace, Poincare, Hilbert, Sobolev, Leray, Hormander, and Lions.'] },
        { slug: 'core-domains', title: 'Differential Equations: ODE and PDE Core Domains', summary: 'Study the main theoretical branches named in the source section.', keyTerms: ['Picard-Lindelof', 'Sturm-Liouville', 'elliptic', 'parabolic', 'hyperbolic'], points: ['ODE topics include existence and uniqueness, continuation, blow-up, stability, Sturm-Liouville theory, phase portraits, limit cycles, bifurcation, Hamiltonian systems, chaos, and KAM-style questions.', 'PDE topics include elliptic, parabolic, hyperbolic, dispersive, transport, conservation laws, and kinetic equations.', 'The source names Nash, De Giorgi, Moser, Caffarelli, Tao, Klainerman, and others as major figures in PDE development.'] },
        { slug: 'interfaces', title: 'Differential Equations: Geometric, Numerical, and Scientific Interfaces', summary: 'Follow the extension of differential-equation work into geometry and computation.', keyTerms: ['Ricci flow', 'finite elements', 'spectral methods', 'uncertainty quantification', 'scientific machine learning'], points: ['Geometric flows named in the source include Ricci flow, mean curvature flow, Yamabe flow, and harmonic map heat flow.', 'Numerical PDE and scientific computing include finite elements, multigrid, spectral methods, structure-preserving schemes, and uncertainty quantification.', 'Scientific machine learning, neural operators, and physics-informed learning are treated as active interfaces rather than settled theory.'] },
        { slug: 'frontiers', title: 'Differential Equations: Open Problems and Active Frontiers', summary: 'Use the source to frame the field\'s hardest open problems and contemporary directions.', keyTerms: ['Navier-Stokes', 'Euler blow-up', 'rough PDEs', 'singularity formation', 'neural operators'], points: ['The source explicitly names Navier-Stokes global regularity, Euler blow-up questions, nonlinear dispersive scattering, singularity formation, turbulence theory, and kinetic-to-fluid limits.', 'Rough PDEs and PDE on random or fractal structures remain active frontier directions.', 'Data-driven PDE discovery, neural operators, and operator-theoretic surrogates are identified as active but mathematically unsettled fronts.'] }
      ],
      assessmentTopics: ['ODE', 'PDE', 'geometric flows', 'numerical PDE', 'open problems']
    },
    'Probability Theory': {
      summary: 'Source-driven course on measure-theoretic probability, stochastic processes, calculus, random structures, classical theorems, and frontier probabilistic research.',
      sections: [
        { heading: 'Foundations', content: 'Probability is presented as the study of randomness, stochastic structure, uncertainty, and limit behavior through a measure-theoretic foundation.' },
        { heading: 'Core Domains', content: 'Random variables, convergence, stochastic processes, stochastic calculus, and random structures define the field\'s major domains.' },
        { heading: 'Major Theorems and Traditions', content: 'The source highlights laws of large numbers, central limit behavior, martingales, large deviations, coupling, Stein\'s method, and concentration.' },
        { heading: 'Current Frontiers', content: 'KPZ universality, high-dimensional probability, random tensor models, stochastic PDEs, random topology, probabilistic combinatorics, optimal transport couplings, rough paths, and random matrix universality are explicitly named.' }
      ],
      lessons: [
        { slug: 'foundations', title: 'Probability Theory: Foundations', summary: 'Study the foundational probabilistic language and figures named in the mathematics section.', keyTerms: ['probability spaces', 'sigma-algebras', 'expectation', 'conditional expectation', 'independence'], points: ['Probability studies randomness, stochastic structure, uncertainty, limit behavior, random processes, and probabilistic reasoning across mathematics and the sciences.', 'Kolmogorov\'s measure-theoretic formalization is treated as the core axiomatic foundation, while earlier figures include Pascal, Fermat, Bayes, Laplace, Chebyshev, Markov, Borel, and Levy.', 'Core concepts include random variables, expectation, conditional expectation, independence, convergence modes, and central limit behavior.'] },
        { slug: 'core-domains', title: 'Probability Theory: Core Domains', summary: 'Map the major branches of probability named in the source.', keyTerms: ['Markov chains', 'martingales', 'Brownian motion', 'Ito calculus', 'random matrices'], points: ['Stochastic processes include Markov chains, martingales, Brownian motion, Poisson processes, renewal processes, branching processes, Levy processes, and interacting particle systems.', 'Stochastic calculus includes Ito integrals, stochastic differential equations, semimartingales, Malliavin calculus, rough paths, and stochastic control.', 'Random structures include percolation, random graphs, random matrices, spin systems, stochastic geometry, concentration of measure, and free probability.'] },
        { slug: 'theorems', title: 'Probability Theory: Major Theorems and Traditions', summary: 'Identify the canonical theorem families and methodological traditions foregrounded in the source.', keyTerms: ['laws of large numbers', 'central limit theorem', 'martingale convergence', 'large deviations', 'Stein\'s method'], points: ['Major theorem families include strong and weak laws, central limit phenomena, ergodic theorems, martingale convergence, large deviations, coupling, Stein\'s method, concentration inequalities, and invariance principles.', 'The source highlights contributors such as Doob, Dynkin, Donsker, Skorokhod, Aldous, Talagrand, Varadhan, Lyons, and Voiculescu.', 'Probability is also shown operating across combinatorics, PDE, finance, geometry, and mathematical physics.'] },
        { slug: 'frontiers', title: 'Probability Theory: Current Frontiers', summary: 'Use the source section to structure frontier probability study at the course level.', keyTerms: ['KPZ universality', 'high-dimensional probability', 'random tensor models', 'stochastic PDEs', 'rough path theory'], points: ['The source explicitly names KPZ universality as a current frontier in random growth and stochastic structure.', 'High-dimensional probability now connects concentration, random matrices, and non-asymptotic geometry to modern inference and learning.', 'Random tensor models, stochastic PDEs, and random topology extend probabilistic reasoning into new structural regimes.', 'Probabilistic combinatorics, optimal transport and probabilistic couplings, rough path theory, and universality in random matrix theory are all named as active frontier areas.'] }
      ],
      assessmentTopics: ['foundations', 'stochastic processes', 'major theorems', 'random structures', 'current frontiers']
    },
    'Statistics and Data Analysis': {
      summary: 'Course on inference, estimation, Bayesian and classical traditions, modern learning, causal inference, and current high-dimensional statistical frontiers.',
      sections: [
        { heading: 'Foundations and Scope', content: 'Statistics is framed as inference from data, uncertainty quantification, model building, prediction, and decision under uncertainty.' },
        { heading: 'Classical and Bayesian Traditions', content: 'Estimation theory, testing, regression, Bayesian priors, posterior inference, hierarchical models, and decision theory structure the source treatment.' },
        { heading: 'Modern Statistical Learning', content: 'Penalization, ensembles, kernels, conformal inference, causal learning, fairness, reproducibility, and interpretable modeling define the current landscape.' },
        { heading: 'Current Frontiers', content: 'Selective inference, post-selection validity, causal machine learning, federated statistics, privacy-preserving inference, Bayesian nonparametrics, and uncertainty in deep learning are explicit frontier topics.' }
      ],
      lessons: [
        { slug: 'foundations', title: 'Statistics: Foundations and Scope', summary: 'Study the statistical foundations named in the mathematics source.', keyTerms: ['inference', 'estimation', 'testing', 'experimental design', 'decision'], points: ['Statistics studies inference from data, uncertainty quantification, model building, experimental design, estimation, testing, prediction, and decision under uncertainty.', 'The source names Gauss, Laplace, Fisher, Neyman, Pearson, Wald, Jeffreys, Tukey, Efron, Rubin, Breiman, Hastie, Tibshirani, and Donoho as major figures.', 'Exploratory data analysis, visualization, diagnostics, missing data, measurement error, and reproducibility remain foundational in practice.'] },
        { slug: 'traditions', title: 'Statistics: Classical, Bayesian, and Decision-Theoretic Traditions', summary: 'Compare the main inferential traditions in the source section.', keyTerms: ['sufficiency', 'efficiency', 'minimaxity', 'Bayesian priors', 'hierarchical models'], points: ['Classical mathematical statistics covers unbiasedness, consistency, sufficiency, efficiency, exponential families, admissibility, minimaxity, and regression traditions.', 'Bayesian statistics covers priors, posterior inference, hierarchical models, exchangeability, MCMC, variational inference, and sequential Monte Carlo.', 'Bayesian decision theory links inference directly to utility, loss, and action.'] },
        { slug: 'modern', title: 'Statistics: Modern Learning, Causality, and Data Analysis', summary: 'Map the source transition into contemporary statistical learning and causal inference.', keyTerms: ['lasso', 'random forests', 'boosting', 'conformal inference', 'causal inference'], points: ['Modern statistical learning includes lasso, ridge, elastic net, bootstrap, bagging, random forests, boosting, kernel methods, and uncertainty calibration.', 'The source names causal inference, high-dimensional data, selective inference, reproducibility, fairness, distribution shift, and interpretable modeling as current concerns.', 'Statistics is treated as both mathematical theory and practical analytic craft.'] },
        { slug: 'frontiers', title: 'Statistics: Current Frontiers', summary: 'Use the source to frame the cutting edge of statistical research.', keyTerms: ['selective inference', 'federated statistics', 'privacy-preserving inference', 'Bayesian nonparametrics', 'deep uncertainty'], points: ['The source explicitly names selective inference and post-selection validity.', 'Causal machine learning, federated statistics, privacy-preserving inference, Bayesian nonparametrics, and uncertainty in deep learning are treated as frontier directions.', 'Scientifically informed data-analysis pipelines are framed as an active research area rather than settled best practice.'] }
      ],
      assessmentTopics: ['statistical foundations', 'classical statistics', 'Bayesian inference', 'modern statistical learning', 'current frontiers']
    },
    'Combinatorics and Discrete Mathematics': {
      summary: 'Source-driven course on counting, graph structure, extremal problems, probabilistic methods, designs, coding, and current discrete-mathematical frontiers.',
      sections: [
        { heading: 'Scope and Foundations', content: 'Combinatorics studies finite or countable structures, arrangements, graph structure, counting, extremal principles, and discrete objects with algorithmic richness.' },
        { heading: 'Enumeration and Graph Theory', content: 'Generating functions, partitions, graph theory, connectivity, planarity, coloring, flows, matchings, minors, and random graphs anchor the field.' },
        { heading: 'Extremal, Probabilistic, and Structured Combinatorics', content: 'Ramsey-type work, regularity, containers, pseudorandomness, designs, matroids, coding theory, and algebraic combinatorics broaden the domain.' },
        { heading: 'Current Frontiers', content: 'High-dimensional expanders, random discrete geometry, hypergraph decomposition, extremal set theory, and links to information and theoretical computer science are active fronts.' }
      ],
      lessons: [
        { slug: 'scope', title: 'Combinatorics: Scope and Foundational Counting Ideas', summary: 'Start from the source description of combinatorics as the mathematics of finite structure.', keyTerms: ['counting', 'finite structures', 'arrangements', 'graph structure', 'extremal principles'], points: ['Combinatorics studies finite or countable structures, arrangements, counting, graph structure, designs, extremal principles, and algorithmically rich discrete objects.', 'The source names Euler, Cayley, Polya, Ramsey, Hall, Turan, Erdos, Rota, Lovasz, Tutte, Szemeredi, Robertson, Seymour, Gowers, and Razborov among major figures.'] },
        { slug: 'enumeration-graphs', title: 'Combinatorics: Enumeration and Graph Theory', summary: 'Map the enumeration and graph-theoretic core of the source section.', keyTerms: ['generating functions', 'partitions', 'planarity', 'matchings', 'graph minors'], points: ['Enumeration uses inclusion-exclusion, recurrence relations, ordinary and exponential generating functions, species, Polya counting, partitions, and q-series.', 'Graph theory includes trees, connectivity, planarity, coloring, flows, matchings, spectral graph theory, random graphs, expanders, graph minors, and extremal graph theory.', 'The source names the Four Color Theorem, Kuratowski, Hall marriage theorem, Max-Flow Min-Cut, and Robertson-Seymour graph minors as landmark results.'] },
        { slug: 'extremal', title: 'Combinatorics: Extremal, Probabilistic, and Structured Domains', summary: 'Study the high-structure branches of combinatorics named in the source.', keyTerms: ['Ramsey theory', 'regularity', 'probabilistic method', 'matroids', 'coding theory'], points: ['Extremal and probabilistic combinatorics includes Turan-type problems, Ramsey theory, hypergraph regularity, container methods, pseudorandomness, sparse regularity, removal lemmas, nibble techniques, entropy methods, and absorption.', 'Structured domains include matroid theory, finite geometries, combinatorial designs, coding theory, Latin squares, combinatorial commutative algebra, and algebraic combinatorics.', 'The source emphasizes transfers among combinatorics, number theory, and theoretical computer science.'] },
        { slug: 'frontiers', title: 'Combinatorics: Current Frontiers', summary: 'Identify the active discrete-mathematical frontiers named in the mathematics section.', keyTerms: ['high-dimensional expanders', 'random discrete geometry', 'hypergraph decomposition', 'extremal set theory', 'AI and information'], points: ['The source explicitly names high-dimensional expanders, random discrete geometry, combinatorial aspects of AI and information, hypergraph decomposition, extremal set theory, and links to theoretical computer science as major frontiers.', 'Probabilistic combinatorics also appears in the mathematics frontier material outside this dedicated subsection, reinforcing its centrality.'] }
      ],
      assessmentTopics: ['enumeration', 'graph theory', 'extremal combinatorics', 'probabilistic method', 'current frontiers']
    },
    'Mathematical Logic and Foundations': {
      summary: 'Course on model theory, proof theory, computability, set theory, alternative foundations, and current logical frontiers.',
      sections: [
        { heading: 'Model-Theoretic Foundations', content: 'Formal languages, deductive systems, compactness, Lowenheim-Skolem, definability, stability, o-minimality, and geometric model theory anchor the first branch.' },
        { heading: 'Proof Theory, Computability, and Set Theory', content: 'Normalization, reverse mathematics, recursion theory, forcing, large cardinals, descriptive set theory, and determinacy define the main foundational terrain.' },
        { heading: 'Alternative Foundations', content: 'Intuitionism, type theory, homotopy type theory, topos theory, constructive analysis, and univalent foundations extend logic beyond classical ZFC centrality.' },
        { heading: 'Current Frontiers', content: 'Inner model theory, forcing axioms, proof complexity, finite model theory, formal proof ecosystems, and logical aspects of computer-assisted theorem proving remain active.' }
      ],
      lessons: [
        { slug: 'model-theory', title: 'Logic and Foundations: Model-Theoretic Structure', summary: 'Study the model-theoretic branch named in the mathematics source.', keyTerms: ['compactness', 'Lowenheim-Skolem', 'quantifier elimination', 'stability', 'o-minimality'], points: ['The source includes formal languages, deductive systems, completeness, compactness, Lowenheim-Skolem theorems, elementary equivalence, definability, quantifier elimination, stability, o-minimality, NIP, and geometric model theory.', 'Model theory is explicitly linked to algebra, number theory, and geometry through definability and structural classification.'] },
        { slug: 'proof-computability-set', title: 'Logic and Foundations: Proof Theory, Computability, and Set Theory', summary: 'Map the proof-theoretic and set-theoretic branches in the source section.', keyTerms: ['ordinal analysis', 'Turing machines', 'forcing', 'large cardinals', 'descriptive set theory'], points: ['Proof theory and computability include sequent calculi, normalization, ordinal analysis, reverse mathematics, proof mining, recursion theory, Turing machines, degrees of unsolvability, and algorithmic randomness.', 'Set theory includes ZFC, ordinals, cardinals, transfinite recursion, forcing, large cardinals, descriptive set theory, determinacy, inner model theory, and combinatorial set theory.', 'Landmark results named by the source include incompleteness, undecidability, Church-Turing, the halting problem, continuum-hypothesis independence, and forcing.'] },
        { slug: 'alternatives', title: 'Logic and Foundations: Constructive, Categorical, and Philosophical Alternatives', summary: 'Study the alternative foundational traditions named in the mathematics section.', keyTerms: ['intuitionism', 'type theory', 'homotopy type theory', 'topos theory', 'structuralism'], points: ['Alternative foundations in the source include intuitionism, type theory, homotopy type theory, topos theory, predicativity, constructive analysis, and univalent foundations.', 'The philosophy-and-methodology layer includes formalism, logicism, intuitionism, structuralism, platonism, nominalism, predicativism, and proof-theoretic semantics.', 'The source frames a core debate over whether mathematics needs one privileged foundation or a plural toolkit.'] },
        { slug: 'frontiers', title: 'Logic and Foundations: Current Frontiers', summary: 'Use the source to frame the active research frontiers in logic and foundations.', keyTerms: ['inner model theory', 'forcing axioms', 'proof complexity', 'finite model theory', 'automated theorem proving'], points: ['Current frontiers include inner model theory, forcing axioms, derived and higher categorical foundations, formal proof ecosystems, proof complexity, finite model theory, and logical aspects of computer-assisted theorem proving.', 'Large formal libraries and proof ecosystems are treated as part of the broader foundational future of mathematics.'] }
      ],
      assessmentTopics: ['model theory', 'proof theory', 'computability', 'set theory', 'alternative foundations']
    },
    'Applied Mathematics': {
      summary: 'Course on optimization, numerical mathematics, information and coding, cryptography, biological and network modeling, and modern interdisciplinary mathematical systems.',
      sections: [
        { heading: 'Optimization and Numerical Mathematics', content: 'Linear, nonlinear, convex, combinatorial, stochastic, and variational optimization combine with numerical analysis and scientific computing in the source.' },
        { heading: 'Information, Coding, and Cryptography', content: 'Information theory, compressed sensing, sparse recovery, coding, and number-theoretic or lattice-based cryptography anchor the discrete-applied side.' },
        { heading: 'Interdisciplinary Modeling', content: 'Mathematical biology, epidemiology, network science, control, inverse problems, and multiscale systems connect mathematics to complex real-world systems.' },
        { heading: 'Current Frontiers', content: 'Scientific machine learning, differentiable solvers, operator learning, post-quantum cryptography, uncertainty quantification, and integrated mathematical systems are central frontier themes.' }
      ],
      lessons: [
        { slug: 'optimization', title: 'Applied Mathematics: Optimization and Variational Structure', summary: 'Study the optimization branch of applied mathematics as presented in the source.', keyTerms: ['convexity', 'duality', 'stochastic optimization', 'optimal control', 'variational inequalities'], points: ['Applied mathematics includes linear, nonlinear, convex, combinatorial, stochastic, and optimal-control frameworks.', 'Core topics named by the source include duality, convexity, saddle points, variational inequalities, gradient flows, game-theoretic optimization, and distributed optimization.', 'Optimization is tied to computing, logistics, control, and large-scale systems throughout the source.'] },
        { slug: 'numerics', title: 'Applied Mathematics: Numerical Analysis and Scientific Computing', summary: 'Follow the numerical and computational branch of the mathematics section.', keyTerms: ['numerical linear algebra', 'approximation', 'Monte Carlo', 'adaptive meshes', 'uncertainty quantification'], points: ['Numerical analysis includes approximation theory, numerical linear algebra, numerical ODE/PDE, quadrature, interpolation, stability, consistency, convergence, adaptive meshes, Monte Carlo, and quasi-Monte Carlo.', 'The source also names randomized numerical linear algebra, uncertainty quantification, differentiable programming, operator learning, and multiscale simulation as current topics.'] },
        { slug: 'information', title: 'Applied Mathematics: Information, Coding, and Cryptographic Structure', summary: 'Map the information-theoretic and cryptographic topics named in the source.', keyTerms: ['Shannon entropy', 'channel coding', 'compressed sensing', 'lattice cryptography', 'zero-knowledge proofs'], points: ['Information theory includes Shannon entropy, source coding, channel coding, rate-distortion, network information theory, error-correcting codes, compressed sensing, and sparse recovery.', 'Cryptography and discrete-applied mathematics include number-theoretic and lattice-based cryptography, elliptic-curve cryptography, zero-knowledge proofs, pseudorandomness, coding, and complexity assumptions.', 'The source explicitly links these domains to statistics, combinatorics, optimization, and computer science.'] },
        { slug: 'systems-frontiers', title: 'Applied Mathematics: Interdisciplinary Systems and Current Frontiers', summary: 'Use the source to study how applied mathematics integrates with contemporary scientific systems.', keyTerms: ['scientific machine learning', 'post-quantum cryptography', 'network contagion', 'inverse problems', 'multiscale control'], points: ['The source includes mathematical biology, epidemiology, evolutionary game theory, network science, ecological networks, neuroscience modeling, and control of complex systems.', 'Frontier themes include neural operators, physics-informed methods, differentiable solvers, hybrid symbolic-numeric systems, high-dimensional inference, privacy-preserving statistics, and post-quantum cryptography.', 'A recurring source claim is that the strongest current work integrates pure methods, numerics, statistics, and computing rather than treating them as separate silos.'] }
      ],
      assessmentTopics: ['optimization', 'numerical analysis', 'information theory', 'cryptography', 'scientific machine learning']
    }
  }
};
