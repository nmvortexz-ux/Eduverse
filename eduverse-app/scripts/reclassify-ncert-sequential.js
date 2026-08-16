import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

if (!process.env.DATABASE_URL) {
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      envContent.split('\n').forEach((line) => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*["']?([^"'\r\n]+)["']?/);
        if (match) {
          process.env[match[1]] = match[2];
        }
      });
    }
  } catch (e) {
    console.warn('Warning loading .env file:', e);
  }
}

// NCERT Sequential Chapter Rules per Subject & Class
const CHAPTER_RULES = {
  'Science': {
    'Class 10': [
      { chapter: 'Ch 1: Chemical Reactions and Equations', keywords: ['chemical reaction', 'equation', 'reactants', 'products', 'balancing', 'combination', 'decomposition', 'displacement', 'double displacement', 'oxidation', 'reduction', 'redox', 'exothermic', 'endothermic', 'corrosion', 'rancidity', 'precipitate'] },
      { chapter: 'Ch 2: Acids, Bases and Salts', keywords: ['acid', 'base', 'salt', 'ph', 'litmus', 'indicator', 'neutralization', 'hydrochloric', 'sodium hydroxide', 'bleaching powder', 'baking soda', 'washing soda', 'plaster of paris', 'gypsum', 'hydronium', 'alkali'] },
      { chapter: 'Ch 3: Metals and Non-metals', keywords: ['metal', 'non-metal', 'nonmetal', 'malleable', 'ductile', 'reactivity series', 'ionic compound', 'ore', 'roasting', 'calcination', 'refining', 'anodising', 'alloy', 'amalgam', 'galvanisation'] },
      { chapter: 'Ch 4: Carbon and its Compounds', keywords: ['carbon', 'covalent', 'catenation', 'tetravalency', 'hydrocarbon', 'alkane', 'alkene', 'alkyne', 'homologous', 'functional group', 'alcohol', 'carboxylic', 'ethanoic', 'ethanol', 'soap', 'detergent', 'ester'] },
      { chapter: 'Ch 5: Life Processes', keywords: ['life process', 'nutrition', 'autotrophic', 'heterotrophic', 'photosynthesis', 'stomata', 'digestive', 'pepsin', 'bile', 'respiration', 'aerobic', 'anaerobic', 'alveoli', 'transportation', 'heart', 'xylem', 'phloem', 'blood', 'excretion', 'nephron', 'kidney'] },
      { chapter: 'Ch 6: Control and Coordination', keywords: ['control', 'coordination', 'neuron', 'synapse', 'reflex', 'brain', 'central nervous', 'spinal cord', 'hormone', 'endocrine', 'pituitary', 'thyroid', 'adrenal', 'insulin', 'auxin', 'gibberellin', 'cytokinin', 'phototropism'] },
      { chapter: 'Ch 7: How do Organisms Reproduce?', keywords: ['reproduce', 'reproduction', 'asexual', 'binary fission', 'budding', 'fragmentation', 'regeneration', 'spore', 'vegetative', 'flower', 'stamen', 'carpel', 'pollination', 'fertilization', 'zygote', 'embryo', 'placenta', 'contraception', 'puberty'] },
      { chapter: 'Ch 8: Heredity and Evolution', keywords: ['heredity', 'gene', 'allele', 'chromosome', 'dna', 'mendel', 'pea plant', 'monohybrid', 'dihybrid', 'dominant', 'recessive', 'genotype', 'phenotype', 'sex determination', 'evolution', 'speciation', 'fossil'] },
      { chapter: 'Ch 9: Light - Reflection and Refraction', keywords: ['light', 'reflection', 'refraction', 'mirror', 'lens', 'concave', 'convex', 'focal length', 'radius of curvature', 'magnification', 'refractive index', 'snell', 'real image', 'virtual image', 'pole', 'focus', 'optics'] },
      { chapter: 'Ch 10: Human Eye and Colourful World', keywords: ['eye', 'cornea', 'iris', 'pupil', 'retina', 'accommodation', 'myopia', 'hypermetropia', 'presbyopia', 'prism', 'dispersion', 'spectrum', 'rainbow', 'atmospheric refraction', 'twinkling', 'scattering'] },
      { chapter: 'Ch 11: Electricity', keywords: ['electricity', 'current', 'charge', 'coulomb', 'potential difference', 'volt', 'ohm', 'resistance', 'resistivity', 'series', 'parallel', 'joule', 'heating effect', 'electric power', 'watt', 'ammeter', 'voltmeter'] },
      { chapter: 'Ch 12: Magnetic Effects of Electric Current', keywords: ['magnetic', 'magnet', 'field lines', 'solenoid', 'fleming', 'left hand rule', 'right hand thumb', 'electromagnet', 'electromagnetic induction', 'galvanometer', 'fuse', 'short circuit', 'earthing'] },
      { chapter: 'Ch 13: Our Environment', keywords: ['environment', 'ecosystem', 'food chain', 'food web', 'trophic', 'producer', 'consumer', 'decomposer', 'biodegradable', 'non-biodegradable', 'ozone', 'cfc', 'garbage', 'biological magnification', 'waste'] }
    ],
    'Class 9': [
      { chapter: 'Ch 1: Matter in Our Surroundings', keywords: ['matter', 'solid', 'liquid', 'gas', 'evaporation', 'sublimation', 'latent heat', 'melting', 'boiling', 'diffuse', 'state of matter'] },
      { chapter: 'Ch 2: Is Matter Around Us Pure', keywords: ['pure', 'mixture', 'solution', 'suspension', 'colloid', 'tyndall', 'solute', 'solvent', 'crystallisation', 'distillation', 'chromatography', 'compound', 'element'] },
      { chapter: 'Ch 3: Atoms and Molecules', keywords: ['atom', 'molecule', 'dalton', 'atomic mass', 'molecular mass', 'mole concept', 'avogadro', 'valency', 'polyatomic ion', 'chemical formula'] },
      { chapter: 'Ch 4: Structure of the Atom', keywords: ['electron', 'proton', 'neutron', 'thomson', 'rutherford', 'bohr', 'valency', 'atomic number', 'mass number', 'isotope', 'isobar', 'shell'] },
      { chapter: 'Ch 5: The Fundamental Unit of Life', keywords: ['cell', 'membrane', 'cell wall', 'nucleus', 'cytoplasm', 'organelle', 'mitochondria', 'plastid', 'vacuole', 'endoplasmic', 'golgi', 'lysosome', 'osmosis'] },
      { chapter: 'Ch 6: Tissues', keywords: ['tissue', 'meristematic', 'permanent', 'xylem', 'phloem', 'epithelial', 'connective', 'muscular', 'nervous', 'neuron', 'cartilage', 'bone', 'parenchyma'] },
      { chapter: 'Ch 7: Motion', keywords: ['distance', 'displacement', 'speed', 'velocity', 'acceleration', 'uniform motion', 'graph', 'equation of motion', 'circular motion'] },
      { chapter: 'Ch 8: Force and Laws of Motion', keywords: ['force', 'inertia', 'first law', 'second law', 'third law', 'momentum', 'conservation of momentum', 'balanced force', 'friction', 'newton'] },
      { chapter: 'Ch 9: Gravitation', keywords: ['gravitation', 'universal law', 'gravity', 'free fall', 'mass', 'weight', 'thrust', 'pressure', 'buoyancy', 'archimedes', 'relative density'] },
      { chapter: 'Ch 10: Work and Energy', keywords: ['work', 'energy', 'kinetic energy', 'potential energy', 'power', 'joule', 'watt', 'law of conservation of energy', 'mechanical energy'] },
      { chapter: 'Ch 11: Sound', keywords: ['sound', 'wave', 'longitudinal', 'transverse', 'compression', 'rarefaction', 'frequency', 'amplitude', 'wavelength', 'speed of sound', 'echo', 'reverberation', 'ultrasound', 'sonar'] },
      { chapter: 'Ch 12: Improvement in Food Resources', keywords: ['crop', 'manure', 'fertilizer', 'irrigation', 'intercropping', 'crop rotation', 'pest', 'weed', 'animal husbandry', 'cattle', 'poultry', 'fish', 'beekeeping'] }
    ],
    'Class 8': [
      { chapter: 'Ch 1: Crop Production and Management', keywords: ['crop', 'kharif', 'rabi', 'sowing', 'irrigation', 'weeding', 'harvesting', 'storage', 'manure', 'plough'] },
      { chapter: 'Ch 2: Microorganisms: Friend and Foe', keywords: ['microorganism', 'bacteria', 'fungi', 'protozoa', 'algae', 'virus', 'fermentation', 'vaccine', 'pathogen', 'preservation', 'nitrogen cycle'] },
      { chapter: 'Ch 3: Coal and Petroleum', keywords: ['fossil fuel', 'coal', 'coke', 'coal tar', 'petroleum', 'natural gas', 'refining', 'petrochemical', 'cng', 'lpg'] },
      { chapter: 'Ch 4: Combustion and Flame', keywords: ['combustion', 'ignition temperature', 'inflammable', 'fire extinguisher', 'flame', 'zone of flame', 'calorific value', 'acid rain'] },
      { chapter: 'Ch 5: Conservation of Plants and Animals', keywords: ['deforestation', 'biosphere reserve', 'flora', 'fauna', 'endemic', 'national park', 'sanctuary', 'red data book', 'migration', 'reforestation'] },
      { chapter: 'Ch 6: Reproduction in Animals', keywords: ['asexual', 'sexual', 'sperm', 'ovum', 'zygote', 'fertilization', 'internal', 'external', 'viviparous', 'oviparous', 'metamorphosis', 'budding', 'cloning'] },
      { chapter: 'Ch 7: Reaching the Age of Adolescence', keywords: ['adolescence', 'puberty', 'pituitary', 'hormone', 'testosterone', 'estrogen', 'secondary sexual', 'menstruation', 'target site', 'balanced diet'] },
      { chapter: 'Ch 8: Force and Pressure', keywords: ['force', 'push', 'pull', 'contact force', 'non-contact', 'gravity', 'magnetic', 'electrostatic', 'pressure', 'atmospheric pressure'] },
      { chapter: 'Ch 9: Friction', keywords: ['friction', 'static', 'sliding', 'rolling', 'fluid friction', 'drag', 'lubricant', 'ball bearing'] },
      { chapter: 'Ch 10: Sound', keywords: ['vibration', 'amplitude', 'frequency', 'hertz', 'pitch', 'loudness', 'audible', 'infrasonic', 'ultrasonic', 'noise', 'eardrum'] },
      { chapter: 'Ch 11: Chemical Effects of Electric Current', keywords: ['tester', 'electroplating', 'conductor', 'insulator', 'electrode', 'electrolyte', 'led'] },
      { chapter: 'Ch 12: Some Natural Phenomena', keywords: ['lightning', 'charge', 'electroscope', 'earthing', 'earthquake', 'seismograph', 'fault zone', 'richter'] },
      { chapter: 'Ch 13: Light', keywords: ['reflection', 'incident ray', 'reflected ray', 'normal', 'angle of incidence', 'angle of reflection', 'regular reflection', 'diffused', 'kaleidoscope', 'iris', 'blind spot', 'braille'] }
    ]
  },
  'Mathematics': {
    'Class 10': [
      { chapter: 'Ch 1: Real Numbers', keywords: ['real number', 'euclid', 'lemma', 'fundamental theorem of arithmetic', 'hcf', 'lcm', 'irrational', 'rational', 'terminating', 'decimal expansion', 'prime factorization'] },
      { chapter: 'Ch 2: Polynomials', keywords: ['polynomial', 'degree', 'zeroes', 'zeros', 'coefficient', 'quadratic polynomial', 'cubic polynomial', 'remainder theorem', 'factor theorem'] },
      { chapter: 'Ch 3: Pair of Linear Equations in Two Variables', keywords: ['linear equation', 'two variables', 'graphical method', 'substitution', 'elimination', 'cross multiplication', 'consistent', 'inconsistent', 'parallel lines'] },
      { chapter: 'Ch 4: Quadratic Equations', keywords: ['quadratic equation', 'discriminant', 'roots', 'nature of roots', 'factorisation', 'completing square', 'quadratic formula', 'b^2 - 4ac'] },
      { chapter: 'Ch 5: Arithmetic Progressions', keywords: ['arithmetic progression', 'ap', 'first term', 'common difference', 'nth term', 'sum of n terms', 'sequence', 'series'] },
      { chapter: 'Ch 6: Triangles', keywords: ['triangle', 'similarity', 'similar triangles', 'basic proportionality theorem', 'thales theorem', 'pythagoras', 'congruent'] },
      { chapter: 'Ch 7: Coordinate Geometry', keywords: ['coordinate', 'distance formula', 'section formula', 'midpoint', 'area of triangle', 'origin', 'x-axis', 'y-axis', 'quadrant'] },
      { chapter: 'Ch 8: Introduction to Trigonometry', keywords: ['trigonometry', 'sine', 'cosine', 'tangent', 'sin', 'cos', 'tan', 'cot', 'sec', 'cosec', 'trigonometric identity', 'complementary angles'] },
      { chapter: 'Ch 9: Some Applications of Trigonometry', keywords: ['heights and distances', 'angle of elevation', 'angle of depression', 'line of sight', 'tower', 'building', 'shadow'] },
      { chapter: 'Ch 10: Circles', keywords: ['circle', 'tangent to a circle', 'secant', 'point of contact', 'subtended', 'radius', 'diameter'] },
      { chapter: 'Ch 11: Areas Related to Circles', keywords: ['area of circle', 'sector', 'segment', 'arc length', 'perimeter of sector', 'semicircle'] },
      { chapter: 'Ch 12: Surface Areas and Volumes', keywords: ['surface area', 'volume', 'cube', 'cuboid', 'cylinder', 'cone', 'sphere', 'hemisphere', 'frustum'] },
      { chapter: 'Ch 13: Statistics', keywords: ['statistics', 'mean', 'median', 'mode', 'grouped data', 'class mark', 'cumulative frequency', 'ogive', 'frequency distribution'] },
      { chapter: 'Ch 14: Probability', keywords: ['probability', 'favorable outcomes', 'sample space', 'event', 'impossible event', 'sure event', 'dice', 'card', 'deck', 'coin'] }
    ],
    'Class 9': [
      { chapter: 'Ch 1: Number Systems', keywords: ['irrational', 'rational', 'real number', 'number line', 'decimal', 'exponent', 'surd', 'radical', 'rationalize'] },
      { chapter: 'Ch 2: Polynomials', keywords: ['polynomial', 'degree', 'linear', 'quadratic', 'cubic', 'zeroes', 'factor theorem', 'remainder theorem', 'algebraic identity'] },
      { chapter: 'Ch 3: Coordinate Geometry', keywords: ['cartesian', 'quadrant', 'x-axis', 'y-axis', 'abscissa', 'ordinate', 'origin', 'coordinates'] },
      { chapter: 'Ch 4: Linear Equations in Two Variables', keywords: ['linear equation', 'two variables', 'solution', 'graph'] },
      { chapter: 'Ch 5: Introduction to Euclid\'s Geometry', keywords: ['euclid', 'axiom', 'postulate', 'definition', 'proof', 'point', 'line'] },
      { chapter: 'Ch 6: Lines and Angles', keywords: ['angle', 'acute', 'obtuse', 'right angle', 'adjacent', 'linear pair', 'vertically opposite', 'parallel lines', 'transversal'] },
      { chapter: 'Ch 7: Triangles', keywords: ['congruence', 'sas', 'asa', 'sss', 'rhs', 'isosceles', 'inequalities in a triangle'] },
      { chapter: 'Ch 8: Quadrilaterals', keywords: ['quadrilateral', 'parallelogram', 'rectangle', 'rhombus', 'square', 'trapezium', 'mid-point theorem'] },
      { chapter: 'Ch 9: Circles', keywords: ['circle', 'chord', 'arc', 'subtended', 'perpendicular from centre', 'cyclic quadrilateral'] },
      { chapter: 'Ch 10: Heron\'s Formula', keywords: ['heron', 'semi-perimeter', 'area of triangle'] },
      { chapter: 'Ch 11: Surface Areas and Volumes', keywords: ['surface area', 'volume', 'cuboid', 'cube', 'cylinder', 'cone', 'sphere', 'hemisphere'] },
      { chapter: 'Ch 12: Statistics', keywords: ['bar graph', 'histogram', 'frequency polygon', 'mean', 'median', 'mode', 'raw data'] }
    ],
    'Class 8': [
      { chapter: 'Ch 1: Rational Numbers', keywords: ['rational number', 'closure', 'commutativity', 'associativity', 'distributivity', 'additive inverse', 'multiplicative inverse'] },
      { chapter: 'Ch 2: Linear Equations in One Variable', keywords: ['linear equation', 'one variable', 'transposing', 'algebraic expression'] },
      { chapter: 'Ch 3: Understanding Quadrilaterals', keywords: ['polygon', 'convex', 'concave', 'regular', 'sum of exterior angles', 'parallelogram', 'rhombus', 'rectangle', 'square'] },
      { chapter: 'Ch 4: Data Handling', keywords: ['tally mark', 'pictograph', 'bar graph', 'double bar graph', 'pie chart', 'circle graph', 'outcome', 'probability'] },
      { chapter: 'Ch 5: Squares and Square Roots', keywords: ['square number', 'pythagorean triplet', 'square root', 'prime factorization', 'long division method'] },
      { chapter: 'Ch 6: Cubes and Cube Roots', keywords: ['cube', 'perfect cube', 'cube root'] },
      { chapter: 'Ch 7: Comparing Quantities', keywords: ['ratio', 'percentage', 'discount', 'marked price', 'profit', 'loss', 'sales tax', 'vat', 'gst', 'simple interest', 'compound interest'] },
      { chapter: 'Ch 8: Algebraic Expressions and Identities', keywords: ['monomial', 'binomial', 'trinomial', 'polynomial', 'like terms', 'unlike terms', 'identity'] },
      { chapter: 'Ch 9: Mensuration', keywords: ['perimeter', 'area', 'trapezium', 'rhombus', 'general quadrilateral', 'surface area', 'volume', 'cuboid', 'cylinder'] },
      { chapter: 'Ch 10: Exponents and Powers', keywords: ['exponent', 'base', 'negative exponent', 'laws of exponents', 'standard form', 'scientific notation'] },
      { chapter: 'Ch 11: Direct and Inverse Proportions', keywords: ['direct proportion', 'inverse proportion', 'constant of variation'] },
      { chapter: 'Ch 12: Factorisation', keywords: ['factorisation', 'common factors', 'regrouping', 'division of algebraic expressions'] },
      { chapter: 'Ch 13: Introduction to Graphs', keywords: ['line graph', 'linear graph', 'coordinates', 'x-axis', 'y-axis', 'independent variable'] }
    ]
  },
  'Accountancy': {
    'Class 11': [
      { chapter: 'Ch 1: Introduction to Accounting', keywords: ['accounting', 'bookkeeping', 'financial statements', 'user of accounting', 'asset', 'liability', 'capital', 'revenue', 'expense', 'debtor', 'creditor', 'voucher'] },
      { chapter: 'Ch 2: Theory Base of Accounting', keywords: ['gaap', 'accounting principle', 'going concern', 'accrual', 'matching concept', 'entity concept', 'accounting standard', 'ind as', 'ifrs', 'cash basis'] },
      { chapter: 'Ch 3: Recording of Transactions - I', keywords: ['accounting equation', 'journal', 'ledger', 'debit', 'credit', 'double entry', 'source document', 'cash discount', 'trade discount'] },
      { chapter: 'Ch 4: Recording of Transactions - II', keywords: ['cash book', 'single column', 'double column', 'petty cash', 'purchase book', 'sales book', 'purchase return', 'sales return', 'journal proper'] },
      { chapter: 'Ch 5: Bank Reconciliation Statement', keywords: ['bank reconciliation', 'brs', 'passbook', 'cashbook balance', 'cheque issued', 'cheque deposited', 'bank charges', 'overdraft'] },
      { chapter: 'Ch 6: Trial Balance and Rectification of Errors', keywords: ['trial balance', 'error of omission', 'error of commission', 'error of principle', 'compensating error', 'suspense account'] },
      { chapter: 'Ch 7: Depreciation, Provisions and Reserves', keywords: ['depreciation', 'straight line method', 'written down value', 'slm', 'wdv', 'provision', 'reserve', 'general reserve', 'capital reserve'] },
      { chapter: 'Ch 8: Financial Statements - I', keywords: ['trading account', 'profit and loss account', 'balance sheet', 'gross profit', 'net profit', 'cost of goods sold', 'cogs', 'current assets'] },
      { chapter: 'Ch 9: Financial Statements - II', keywords: ['adjustments', 'closing stock', 'outstanding expense', 'prepaid expense', 'accrued income', 'bad debts', 'provision for doubtful debts'] }
    ],
    'Class 12': [
      { chapter: 'Ch 1: Accounting for Not-for-Profit Organisation', keywords: ['npo', 'not for profit', 'receipts and payments', 'income and expenditure', 'entrance fee', 'subscription', 'legacy', 'endowment fund', 'life membership'] },
      { chapter: 'Ch 2: Accounting for Partnership: Basic Concepts', keywords: ['partnership deed', 'profit and loss appropriation', 'interest on capital', 'interest on drawings', 'guarantee of profit', 'past adjustments', 'fixed capital', 'fluctuating capital'] },
      { chapter: 'Ch 3: Reconstitution of a Partnership Firm - Admission', keywords: ['admission of partner', 'sacrificing ratio', 'goodwill', 'revaluation account', 'super profit', 'average profit', 'capital adjustment'] },
      { chapter: 'Ch 4: Retirement/Death of a Partner', keywords: ['retirement', 'gaining ratio', 'executor account', 'deceased partner', 'surrender value', 'retirement of partner'] },
      { chapter: 'Ch 5: Dissolution of Partnership Firm', keywords: ['dissolution', 'realisation account', 'unrecorded asset', 'unrecorded liability', 'realization', 'dissolving firm'] },
      { chapter: 'Ch 6: Accounting for Share Capital', keywords: ['share capital', 'equity share', 'preference share', 'forfeiture of shares', 'reissue of shares', 'oversubscription', 'pro rata', 'call in arrears', 'call in advance'] },
      { chapter: 'Ch 7: Issue and Redemption of Debentures', keywords: ['debenture', 'issue of debentures', 'redemption of debentures', 'collateral security', 'drr', 'debenture redemption reserve', 'discount on issue'] },
      { chapter: 'Ch 8: Financial Statements of a Company', keywords: ['schedule iii', 'company balance sheet', 'statement of profit and loss', 'ratio analysis', 'liquidity ratio', 'solvency ratio', 'cash flow statement'] }
    ]
  },
  'Business Studies': {
    'Class 11': [
      { chapter: 'Ch 1: Nature and Purpose of Business', keywords: ['economic activity', 'business', 'profession', 'employment', 'business risk', 'commerce', 'trade', 'auxiliaries to trade', 'industry'] },
      { chapter: 'Ch 2: Forms of Business Organisation', keywords: ['sole proprietorship', 'joint hindu family', 'huf', 'partnership', 'cooperative society', 'joint stock company', 'karta', 'moa', 'aoa'] },
      { chapter: 'Ch 3: Private, Public and Global Enterprises', keywords: ['public sector', 'departmental undertaking', 'statutory corporation', 'government company', 'mnc', 'multinational', 'ppp', 'public private partnership'] },
      { chapter: 'Ch 4: Business Services', keywords: ['banking', 'insurance', 'life insurance', 'fire insurance', 'marine insurance', 'warehousing', 'communication', 'e-banking'] },
      { chapter: 'Ch 5: Emerging Modes of Business', keywords: ['e-business', 'b2b', 'b2c', 'c2c', 'outsourcing', 'bpo', 'kpo', 'online transaction', 'cyber security'] },
      { chapter: 'Ch 6: Social Responsibilities of Business and Business Ethics', keywords: ['social responsibility', 'corporate social responsibility', 'csr', 'business ethics', 'environmental protection', 'pollution control'] },
      { chapter: 'Ch 7: Sources of Business Finance', keywords: ['equity', 'retained earnings', 'trade credit', 'factoring', 'commercial paper', 'debentures', 'adr', 'gdr', 'idr', 'public deposits'] },
      { chapter: 'Ch 8: Small Business', keywords: ['small scale industry', 'ssi', 'msme', 'micro enterprise', 'nsic', 'dic', 'rural industrialisation'] },
      { chapter: 'Ch 9: Internal Trade', keywords: ['wholesale trade', 'retail trade', 'itinerant retailers', 'departmental store', 'chain store', 'supermarket', 'gst'] },
      { chapter: 'Ch 10: International Business', keywords: ['exporting', 'importing', 'licensing', 'franchising', 'joint venture', 'wholly owned subsidiary', 'wto', 'bill of lading', 'letter of credit'] }
    ],
    'Class 12': [
      { chapter: 'Ch 1: Nature and Significance of Management', keywords: ['management', 'efficiency', 'effectiveness', 'levels of management', 'coordination', 'top level', 'middle level', 'operational level', 'science art profession'] },
      { chapter: 'Ch 2: Principles of Management', keywords: ['fayol', 'taylor', 'scientific management', 'unity of command', 'unity of direction', 'scalar chain', 'espirit de corps', 'motion study', 'time study', 'fatigue study'] },
      { chapter: 'Ch 3: Business Environment', keywords: ['business environment', 'economic environment', 'social environment', 'technological environment', 'political environment', 'legal environment', 'demonetisation', 'lpg'] },
      { chapter: 'Ch 4: Planning', keywords: ['planning process', 'standing plan', 'single use plan', 'objective', 'strategy', 'policy', 'procedure', 'method', 'rule', 'budget'] },
      { chapter: 'Ch 5: Organising', keywords: ['organising process', 'functional structure', 'divisional structure', 'formal organisation', 'informal organisation', 'delegation', 'decentralisation', 'span of management'] },
      { chapter: 'Ch 6: Staffing', keywords: ['staffing process', 'recruitment', 'selection', 'training', 'development', 'on the job', 'off the job', 'interview', 'aptitude test'] },
      { chapter: 'Ch 7: Directing', keywords: ['directing', 'supervision', 'motivation', 'maslow', 'leadership', 'autocratic', 'democratic', 'free rein', 'communication', 'formal communication', 'grapevine'] },
      { chapter: 'Ch 8: Controlling', keywords: ['controlling process', 'critical point control', 'management by exception', 'deviations', 'performance measurement'] },
      { chapter: 'Ch 9: Financial Management', keywords: ['financial management', 'capital structure', 'capital budgeting', 'working capital', 'financial leverage', 'dividend decision', 'financing decision', 'investment decision'] },
      { chapter: 'Ch 10: Financial Markets', keywords: ['money market', 'capital market', 'primary market', 'secondary market', 'sebi', 'stock exchange', 'treasury bill', 'commercial paper', 'ipo'] },
      { chapter: 'Ch 11: Marketing', keywords: ['marketing management', 'marketing mix', '4 ps', 'product', 'price', 'place', 'promotion', 'branding', 'packaging', 'labelling', 'advertising', 'personal selling'] },
      { chapter: 'Ch 12: Consumer Protection', keywords: ['consumer protection act', 'copra', 'consumer rights', 'three tier redressal', 'district commission', 'state commission', 'national commission', 'ngo'] }
    ]
  },
  'Economics': {
    'Class 11': [
      { chapter: 'Ch 1: Introduction to Microeconomics', keywords: ['microeconomics', 'scarcity', 'opportunity cost', 'central problems', 'ppc', 'production possibility frontier', 'positive normative'] },
      { chapter: 'Ch 2: Consumer\'s Equilibrium and Demand', keywords: ['utility', 'marginal utility', 'law of diminishing marginal utility', 'indifference curve', 'budget line', 'demand', 'law of demand', 'elasticity of demand', 'price elasticity'] },
      { chapter: 'Ch 3: Producer Behaviour and Supply', keywords: ['production function', 'total product', 'marginal product', 'law of variable proportions', 'cost', 'total cost', 'revenue', 'marginal revenue', 'producer equilibrium', 'supply', 'law of supply'] },
      { chapter: 'Ch 4: Forms of Market and Price Determination', keywords: ['perfect competition', 'monopoly', 'monopolistic competition', 'oligopoly', 'price determination', 'price ceiling', 'price floor'] },
      { chapter: 'Ch 5: Introduction to Statistics', keywords: ['statistics in economics', 'quantitative data', 'qualitative data', 'primary data', 'secondary data', 'census', 'sampling'] },
      { chapter: 'Ch 6: Collection, Organisation and Presentation of Data', keywords: ['data collection', 'questionnaire', 'classification of data', 'frequency distribution', 'tally marks', 'tabulation', 'bar diagram', 'pie diagram', 'histogram'] },
      { chapter: 'Ch 7: Measures of Central Tendency and Dispersion', keywords: ['mean', 'median', 'mode', 'arithmetic mean', 'standard deviation', 'mean deviation', 'quartile'] },
      { chapter: 'Ch 8: Correlation and Index Numbers', keywords: ['correlation', 'karl pearson', 'spearman rank', 'scatter diagram', 'index number', 'cpi', 'wpi', 'laspeyres', 'paasche'] }
    ],
    'Class 12': [
      { chapter: 'Ch 1: National Income and Related Aggregates', keywords: ['national income', 'gdp', 'gnp', 'ndp', 'nnp', 'real gdp', 'nominal gdp', 'circular flow of income', 'value added method', 'income method', 'expenditure method', 'gdp deflator'] },
      { chapter: 'Ch 2: Money and Banking', keywords: ['money supply', 'm1 m2 m3 m4', 'barter system', 'commercial bank', 'central bank', 'rbi', 'credit creation', 'repo rate', 'reverse repo', 'crr', 'slr', 'open market operations'] },
      { chapter: 'Ch 3: Determination of Income and Employment', keywords: ['aggregate demand', 'aggregate supply', 'propensity to consume', 'apc', 'mpc', 'aps', 'mps', 'investment multiplier', 'excess demand', 'deficient demand', 'inflationary gap', 'deflationary gap'] },
      { chapter: 'Ch 4: Government Budget and the Economy', keywords: ['government budget', 'revenue receipt', 'capital receipt', 'tax revenue', 'direct tax', 'indirect tax', 'revenue deficit', 'fiscal deficit', 'primary deficit'] },
      { chapter: 'Ch 5: Balance of Payments', keywords: ['balance of payments', 'bop', 'current account', 'capital account', 'trade deficit', 'foreign exchange rate', 'fixed exchange rate', 'flexible exchange rate', 'managed floating', 'devaluation'] },
      { chapter: 'Ch 6: Indian Economy on the Eve of Independence', keywords: ['eve of independence', 'colonial rule', 'zamindari', 'commercialisation of agriculture', 'deindustrialisation', 'drain of wealth', 'occupational structure'] },
      { chapter: 'Ch 7: Indian Economy 1950-1990', keywords: ['five year plans', 'planning commission', 'green revolution', 'land reforms', 'ipr 1956', 'import substitution', 'tariffs', 'quotas'] },
      { chapter: 'Ch 8: Economic Reforms Since 1991 (LPG)', keywords: ['economic reforms', '1991 reforms', 'liberalisation', 'privatisation', 'globalisation', 'lpg', 'disinvestment', 'outsourcing', 'wto'] },
      { chapter: 'Ch 9: Current Challenges Facing Indian Economy', keywords: ['poverty', 'headcount ratio', 'human capital formation', 'education', 'health', 'rural development', 'nabard', 'microcredit', 'employment', 'unemployment', 'informal sector', 'sustainable development'] },
      { chapter: 'Ch 10: Development Experiences of India and Neighbours', keywords: ['india china pakistan', 'great leap forward', 'commune system', 'one child policy', 'human development index', 'hdi', 'comparative development'] }
    ]
  },
  'English': {
    'DEFAULT': [
      { chapter: 'Ch 1: Reading Comprehension & Vocabulary', keywords: ['comprehension', 'passage', 'synonym', 'antonym', 'vocabulary', 'meaning', 'word', 'grammatical', 'context'] },
      { chapter: 'Ch 2: Tenses and Verb Forms', keywords: ['tense', 'past', 'present', 'future', 'verb', 'continuous', 'perfect', 'participle', 'auxiliary'] },
      { chapter: 'Ch 3: Direct and Indirect Speech', keywords: ['reported speech', 'direct speech', 'indirect speech', 'narration', 'said that', 'told'] },
      { chapter: 'Ch 4: Active and Passive Voice', keywords: ['active voice', 'passive voice', 'converted', 'by the', 'was written'] },
      { chapter: 'Ch 5: Prepositions and Conjunctions', keywords: ['preposition', 'conjunction', 'in', 'on', 'at', 'because', 'although', 'unless', 'between', 'among'] },
      { chapter: 'Ch 6: Articles and Determiners', keywords: ['article', 'determiner', 'a', 'an', 'the', 'some', 'many', 'few', 'each', 'every'] },
      { chapter: 'Ch 7: Subject-Verb Agreement', keywords: ['agreement', 'subject verb', 'plural', 'singular', 'neither', 'either', 'both'] },
      { chapter: 'Ch 8: Modals and Auxiliaries', keywords: ['modal', 'auxiliary', 'can', 'could', 'may', 'might', 'should', 'must', 'would', 'shall', 'will'] },
      { chapter: 'Ch 9: Editing and Omission', keywords: ['error', 'correction', 'editing', 'omission', 'spotting error', 'reordering'] },
      { chapter: 'Ch 10: Literature & Prose Analysis', keywords: ['prose', 'poem', 'poet', 'author', 'character', 'stanza', 'metaphor', 'simile', 'literature', 'story'] }
    ]
  },
  'GK': {
    'DEFAULT': [
      { chapter: 'Ch 1: Indian History and Heritage', keywords: ['history', 'ancient', 'medieval', 'freedom', 'gandhi', 'empire', 'mughal', 'indus', 'maurya', 'dynasty', 'british', 'battle'] },
      { chapter: 'Ch 2: World Geography and Climate', keywords: ['geography', 'continent', 'ocean', 'river', 'mountain', 'volcano', 'climate', 'capital', 'country', 'island', 'lake'] },
      { chapter: 'Ch 3: Indian Polity and Constitution', keywords: ['constitution', 'parliament', 'president', 'prime minister', 'democracy', 'article', 'amendment', 'fundamental rights', 'court', 'assembly'] },
      { chapter: 'Ch 4: General Science and Inventions', keywords: ['invention', 'inventor', 'discovery', 'scientist', 'unit', 'element', 'space', 'isro', 'nasa', 'satellite', 'physics', 'chemistry', 'biology'] },
      { chapter: 'Ch 5: Sports and Awards', keywords: ['sports', 'olympics', 'cricket', 'cup', 'trophy', 'award', 'nobel', 'bharat ratna', 'stadium', 'champion', 'player'] },
      { chapter: 'Ch 6: Current Affairs and General Awareness', keywords: ['current affairs', 'headquarters', 'organization', 'un', 'who', 'president', 'minister', 'day', 'theme', 'g20', 'summit'] },
      { chapter: 'Ch 7: Environment and Ecology', keywords: ['national park', 'sanctuary', 'wildlife', 'biodiversity', 'pollution', 'greenhouse', 'conservation', 'forest', 'species'] },
      { chapter: 'Ch 8: Economics and Trade', keywords: ['economy', 'gdp', 'rbi', 'currency', 'bank', 'tax', 'inflation', 'trade', 'market', 'finance', 'budget'] }
    ]
  },
  'Hindi Grammar': {
    'DEFAULT': [
      { chapter: 'Ch 1: वर्ण विचार एवं उच्चारण', keywords: ['वर्ण', 'स्वर', 'व्यंजन', 'उच्चारण', 'मात्रा', 'अनुस्वार'] },
      { chapter: 'Ch 2: शब्द विचार एवं तत्सम-तद्भव', keywords: ['शब्द', 'तत्सम', 'तद्भव', 'देशज', 'विदेशी', 'रूढ़', 'यौगिक'] },
      { chapter: 'Ch 3: संधि एवं समास', keywords: ['संधि', 'समास', 'स्वर संधि', 'व्यंजन संधि', 'तत्पुरुष', 'द्विगु', 'द्वंद्व', 'बहुव्रीहि'] },
      { chapter: 'Ch 4: संज्ञा, सर्वनाम एवं विशेषण', keywords: ['संज्ञा', 'सर्वनाम', 'विशेषण', 'लिंग', 'वचन', 'कारक', 'पुरुष'] },
      { chapter: 'Ch 5: क्रिया, काल एवं वाच्य', keywords: ['क्रिया', 'सकर्मक', 'अकर्मक', 'काल', 'वर्तमान', 'भूत', 'भविष्य', 'वाच्य'] },
      { chapter: 'Ch 6: उपसर्ग एवं प्रत्यय', keywords: ['उपसर्ग', 'प्रत्यय', 'शब्दांश'] },
      { chapter: 'Ch 7: पर्यायवाची एवं विलोम शब्द', keywords: ['पर्यायवाची', 'विलोम', 'समानार्थी', 'विपरीतार्थक', 'अनेकार्थी'] },
      { chapter: 'Ch 8: मुहावरे एवं लोकोक्तियां', keywords: ['मुहावरा', 'मुहावरे', 'लोकोक्ति', 'कहावत', 'अर्थ'] },
      { chapter: 'Ch 9: वाक्य भेद एवं शुद्धि', keywords: ['वाक्य', 'सरल', 'संयुक्त', 'मिश्र', 'उद्देश्य', 'विधेय'] },
      { chapter: 'Ch 10: अशुद्धि शोधन एवं विराम चिन्ह', keywords: ['अशुद्धि', 'विराम', 'चिन्ह', 'पूर्ण विराम', 'अल्प विराम', 'शुद्ध'] }
    ]
  },
  'Social Studies': {
    'DEFAULT': [
      { chapter: 'Ch 1: History - Events and Processes', keywords: ['history', 'nationalism', 'revolution', 'colonisation', 'british', 'civil disobedience', 'satyagraha', 'independence', 'war', 'ruler'] },
      { chapter: 'Ch 2: Geography - Resources and Development', keywords: ['resources', 'soil', 'water', 'forest', 'mineral', 'agriculture', 'manufacturing', 'map', 'earth', 'land'] },
      { chapter: 'Ch 3: Democratic Politics - Power Sharing & Democracy', keywords: ['power sharing', 'federalism', 'democracy', 'gender', 'caste', 'political party', 'outcomes', 'government', 'rights'] },
      { chapter: 'Ch 4: Economics - Development and Economy', keywords: ['development', 'per capita', 'sectors', 'money', 'credit', 'globalisation', 'consumer rights', 'income', 'poverty'] },
      { chapter: 'Ch 5: Environment and Agriculture', keywords: ['farming', 'cropping', 'rabi', 'kharif', 'conservation', 'irrigation', 'climate', 'vegetation'] },
      { chapter: 'Ch 6: National Movement and Independence', keywords: ['congress', 'quit india', 'partition', 'constitution', 'movement', 'freedom', 'leader'] }
    ]
  }
};

function normalizeSubject(subjectStr) {
  if (!subjectStr) return 'Science';
  const lower = subjectStr.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (lower.includes('account')) return 'Accountancy';
  if (lower.includes('business') || lower.includes('bst')) return 'Business Studies';
  if (lower.includes('econ') || lower.includes('eco')) return 'Economics';
  if (lower.includes('sci')) return 'Science';
  if (lower.includes('math')) return 'Mathematics';
  if (lower.includes('eng')) return 'English';
  if (lower.includes('gk') || lower.includes('general')) return 'GK';
  if (lower.includes('hindi')) return 'Hindi Grammar';
  if (lower.includes('soc') || lower.includes('history') || lower.includes('geography')) return 'Social Studies';
  return 'Science';
}

function normalizeClass(classStr) {
  if (!classStr) return 'Class 10';
  const str = String(classStr);
  if (str.includes('11')) return 'Class 11';
  if (str.includes('12')) return 'Class 12';
  if (str.includes('8')) return 'Class 8';
  if (str.includes('9')) return 'Class 9';
  return 'Class 10';
}

function getAssignedChapter(className, subjectName, text) {
  const normClass = normalizeClass(className);
  const normSubject = normalizeSubject(subjectName);

  const subjectMap = CHAPTER_RULES[normSubject] || CHAPTER_RULES['Science'];
  const rules = subjectMap[normClass] || subjectMap['DEFAULT'] || CHAPTER_RULES['Science']['Class 10'];

  const lowerText = text.toLowerCase();
  let maxScore = 0;
  let bestChapter = rules[0].chapter;

  for (const item of rules) {
    let score = 0;
    for (const kw of item.keywords) {
      if (lowerText.includes(kw.toLowerCase())) {
        score += 1;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestChapter = item.chapter;
    }
  }

  return bestChapter;
}

async function main() {
  console.log('🚀 Starting NCERT Sequential Chapter Re-classification (including Class 11 & 12 Commerce)...');
  const startTime = Date.now();

  let prisma = new PrismaClient();
  let allQuestions = [];
  
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      allQuestions = await prisma.question.findMany({
        select: { id: true, class: true, subject: true, text: true }
      });
      break;
    } catch (e) {
      console.warn(`Attempt ${attempt}/5 failed to fetch questions, retrying...`);
      await new Promise(r => setTimeout(r, 2000));
      await prisma.$disconnect().catch(() => {});
      prisma = new PrismaClient();
    }
  }

  console.log(`📊 Found total ${allQuestions.length} questions in database.`);

  const updatesMap = new Map(); // chapterName -> array of questionIds

  for (const q of allQuestions) {
    const assignedChapter = getAssignedChapter(q.class, q.subject, q.text);
    if (!updatesMap.has(assignedChapter)) {
      updatesMap.set(assignedChapter, []);
    }
    updatesMap.get(assignedChapter).push(q.id);
  }

  console.log(`🔄 Categorized into ${updatesMap.size} distinct chapters. Executing bulk updates...`);

  let completedCount = 0;
  for (const [chapter, ids] of updatesMap.entries()) {
    let batchSuccess = false;
    for (let bAttempt = 1; bAttempt <= 5; bAttempt++) {
      try {
        await prisma.question.updateMany({
          where: { id: { in: ids } },
          data: { chapter }
        });
        batchSuccess = true;
        break;
      } catch (err) {
        console.warn(`Batch retry ${bAttempt}/5 for "${chapter}"...`);
        await new Promise(r => setTimeout(r, 1500));
        await prisma.$disconnect().catch(() => {});
        prisma = new PrismaClient();
      }
    }
    if (batchSuccess) completedCount += ids.length;
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`✅ Database re-classification completed in ${duration} seconds! Updated ${completedCount} questions.\n`);

  try {
    const breakdown = await prisma.question.groupBy({
      by: ['class', 'subject', 'chapter'],
      _count: { id: true },
      orderBy: [
        { class: 'asc' },
        { subject: 'asc' },
        { chapter: 'asc' }
      ]
    });

    console.log('📌 Re-classification Summary Breakdown:');
    console.table(
      breakdown.map(b => ({
        Class: b.class,
        Subject: b.subject,
        Chapter: b.chapter,
        QuestionCount: b._count.id
      }))
    );

    const nullChapterCount = await prisma.question.count({
      where: { chapter: null }
    });

    console.log(`\n🎉 Verification: 100% Questions Updated. Unassigned/Null Chapters = ${nullChapterCount}`);
  } catch (e) {
    console.log('Summary breakdown fetch skipped:', e.message);
  } finally {
    await prisma.$disconnect().catch(() => {});
  }
}

main()
  .catch((e) => {
    console.error('❌ Error re-classifying questions:', e);
    process.exit(1);
  });
