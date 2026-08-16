const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Comprehensive mappings mapping regex keywords to Standard NCERT Chapter Titles
const keywordMap = [
  // MATHEMATICS
  { chapter: "Real Numbers / Number Systems", regex: /\b(real number|number system|hcf|lcm|euclid|rational|irrational|integer|prime number)\b/i },
  { chapter: "Polynomials", regex: /\b(polynomial|degree|zeros of|quadratic polynomial|cubic polynomial)\b/i },
  { chapter: "Linear Equations", regex: /\b(linear equation|two variables|substitution method|elimination method|cross-multiplication)\b/i },
  { chapter: "Quadratic Equations", regex: /\b(quadratic equation|discriminant|roots of equation|completing the square)\b/i },
  { chapter: "Arithmetic Progressions", regex: /\b(arithmetic progression|nth term|sum of first n terms|common difference)\b/i },
  { chapter: "Triangles", regex: /\b(triangle|similarity|congruence|pythagoras|thales|isosceles|equilateral)\b/i },
  { chapter: "Coordinate Geometry", regex: /\b(coordinate geometry|distance formula|section formula|mid-point formula)\b/i },
  { chapter: "Trigonometry", regex: /\b(trigonometry|sine|cosine|tangent|secant|cosecant|cotangent|angle of elevation|angle of depression|heights and distances)\b/i },
  { chapter: "Circles", regex: /\b(circle|tangent to a circle|secant|chord|radius|diameter|circumference)\b/i },
  { chapter: "Surface Areas & Volumes", regex: /\b(surface area|volume|cylinder|cone|sphere|cube|cuboid|frustum|hemisphere)\b/i },
  { chapter: "Statistics", regex: /\b(statistics|mean|median|mode|cumulative frequency|ogive|data handling)\b/i },
  { chapter: "Probability", regex: /\b(probability|dice|coin|cards|random experiment|event)\b/i },
  { chapter: "Mensuration", regex: /\b(mensuration|area|perimeter|trapezium|rhombus)\b/i },
  { chapter: "Algebraic Expressions", regex: /\b(algebraic expression|monomial|binomial|identities)\b/i },

  // SCIENCE
  { chapter: "Life Processes", regex: /\b(life process|nutrition|respiration|transportation|excretion|blood|heart|stomach|digestion|kidney|vein|artery)\b/i },
  { chapter: "Control & Coordination", regex: /\b(control and coordination|brain|hormone|nervous system|neuron|reflex|endocrine|thyroid|pituitary)\b/i },
  { chapter: "How do Organisms Reproduce", regex: /\b(reproduce|reproduction|asexual|sexual|flower|pollination|fertilization|ovary|sperm|egg|zygote)\b/i },
  { chapter: "Heredity and Evolution", regex: /\b(heredity|evolution|genes|dna|mendel|traits|fossil|chromosome)\b/i },
  { chapter: "Chemical Reactions & Equations", regex: /\b(chemical reaction|chemical equation|oxidation|reduction|exothermic|endothermic|catalyst)\b/i },
  { chapter: "Acids, Bases and Salts", regex: /\b(acid|base|salt|ph scale|litmus|neutralization|alkali)\b/i },
  { chapter: "Metals and Non-metals", regex: /\b(metal|non-metal|alloy|corrosion|reactivity series|malleability|ductility|metallurgy)\b/i },
  { chapter: "Carbon and its Compounds", regex: /\b(carbon|covalent bond|hydrocarbon|alkane|alkene|alkyne|ethanol|ethanoic|soap|detergent)\b/i },
  { chapter: "Periodic Classification of Elements", regex: /\b(periodic table|periodic classification|mendeleev|atomic radius|valency|noble gas|halogen)\b/i },
  { chapter: "Light - Reflection & Refraction", regex: /\b(light|reflection|refraction|lens|mirror|focal length|diopter|prism|optics)\b/i },
  { chapter: "Human Eye and Colourful World", regex: /\b(human eye|retina|myopia|hypermetropia|dispersion|scattering|rainbow)\b/i },
  { chapter: "Electricity", regex: /\b(electricity|current|voltage|ohm|resistance|power|circuit|ampere|volt|resistor)\b/i },
  { chapter: "Magnetic Effects of Electric Current", regex: /\b(magnetic effect|magnetic field|electromagnet|motor|generator|fleming|faraday|induction)\b/i },
  { chapter: "Sources of Energy", regex: /\b(source of energy|renewable|non-renewable|solar|wind|biomass|nuclear|geothermal)\b/i },
  { chapter: "Our Environment", regex: /\b(environment|ecosystem|food chain|food web|ozone|biodegradable|pollution)\b/i },
  { chapter: "Motion", regex: /\b(motion|velocity|acceleration|displacement|speed|distance-time|circular motion)\b/i },
  { chapter: "Force & Laws of Motion", regex: /\b(force|newton|momentum|inertia|friction|action and reaction)\b/i },
  { chapter: "Matter in Our Surroundings", regex: /\b(matter|solid|liquid|gas|evaporation|melting point|boiling point|sublimation)\b/i },
  { chapter: "Gravitation", regex: /\b(gravitation|gravity|weight|mass|buoyancy|archimedes|free fall)\b/i },
  { chapter: "Work and Energy", regex: /\b(work|energy|kinetic|potential|joule|conservation of energy)\b/i },
  { chapter: "Sound", regex: /\b(sound|wave|frequency|pitch|echo|ultrasound|amplitude)\b/i },
  { chapter: "Cell - Structure & Functions", regex: /\b(cell|nucleus|mitochondria|membrane|prokaryotic|eukaryotic|ribosome|chloroplast)\b/i },
  { chapter: "Microorganisms", regex: /\b(microorganism|bacteria|virus|fungi|protozoa|algae|pathogen|disease)\b/i },
  { chapter: "Tissues", regex: /\b(tissue|meristematic|epithelial|connective|muscular|nervous tissue|xylem|phloem)\b/i },
  { chapter: "Diversity in Living Organisms", regex: /\b(diversity|classification|kingdom|phylum|animalia|plantae|vertebrate)\b/i },

  // SOCIAL STUDIES & OTHERS
  { chapter: "History: The National Movement", regex: /\b(revolt|independence|gandhi|nationalism|satyagraha|civil disobedience|non-cooperation)\b/i },
  { chapter: "History: Empires and Kings", regex: /\b(empire|mughal|sultanate|king|dynasty|ashoka|maurya|gupta|war|battle)\b/i },
  { chapter: "Geography: Climate & Environment", regex: /\b(climate|weather|monsoon|temperature|rainfall|atmosphere)\b/i },
  { chapter: "Geography: Physical Features", regex: /\b(geography|river|mountain|soil|plateau|plain|ocean|himalaya)\b/i },
  { chapter: "Geography: Resources & Agriculture", regex: /\b(agriculture|farming|crop|mineral|resource|industry|population)\b/i },
  { chapter: "Civics/Polity: Constitution & Democracy", regex: /\b(civics|constitution|democracy|parliament|fundamental rights|election|government|judiciary|supreme court)\b/i },
  { chapter: "Economics: Development & Markets", regex: /\b(economics|money|poverty|development|sector|market|credit|bank|gdp|globalization)\b/i },
  
  // ENGLISH / LANGUAGES
  { chapter: "Grammar: Parts of Speech", regex: /\b(noun|verb|adjective|adverb|pronoun|preposition|conjunction|interjection)\b/i },
  { chapter: "Grammar: Tenses & Sentence Structure", regex: /\b(tense|past tense|present tense|future tense|active voice|passive voice|direct speech|indirect speech)\b/i },
  { chapter: "Literature: Stories & Poems", regex: /\b(poem|story|author|poet|character|prose|stanza|theme|summary)\b/i }
];

function classifyQuestionText(text) {
  for (const mapping of keywordMap) {
    if (mapping.regex.test(text)) {
      return mapping.chapter;
    }
  }
  return "General Concepts";
}

async function main() {
  console.log("Starting Local Chapter Classification...");

  const allQuestions = await prisma.question.findMany({
    where: { chapter: null }
  });

  const totalToClassify = allQuestions.length;
  console.log(`Found ${totalToClassify} uncategorized questions.`);

  // Group IDs by assigned chapter
  const chapterGroups = {};
  for (const question of allQuestions) {
    const assignedChapter = classifyQuestionText(question.text);
    if (!chapterGroups[assignedChapter]) {
      chapterGroups[assignedChapter] = [];
    }
    chapterGroups[assignedChapter].push(question.id);
  }

  // Execute bulk updates per chapter
  const chapters = Object.keys(chapterGroups);
  console.log(`Grouped into ${chapters.length} distinct chapters. Executing bulk updates...`);

  for (const chapter of chapters) {
    const ids = chapterGroups[chapter];
    try {
      await prisma.question.updateMany({
        where: { id: { in: ids } },
        data: { chapter: chapter }
      });
      console.log(`✅ Updated ${ids.length} questions to '${chapter}'`);
    } catch (e) {
      console.error(`❌ Failed to bulk update '${chapter}': ${e.message}`);
    }
  }

  // Print final progress
  const total = await prisma.question.count();
  const uncategorized = await prisma.question.count({ where: { chapter: null } });
  const categorized = total - uncategorized;
  const percentage = Math.round((categorized / total) * 100);

  console.log('\n--- FINAL STATS ---');
  console.log(`Categorized: ${categorized} / ${total} (${percentage}%)`);
  console.log(`Remaining uncategorized: ${uncategorized}`);
  console.log('Finished Local Chapter Classification.');
}

main()
  .catch(e => {
    console.error('Error during classification:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
