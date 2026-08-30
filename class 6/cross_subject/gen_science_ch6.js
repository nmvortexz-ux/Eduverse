import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 6: The Living Organisms — Characteristics and Habitats (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "The natural surroundings or specific environment where a plant or animal naturally lives and thrives is called its:",
    options: ["Habitat", "Adaptation", "Acclimatization", "Predation"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A habitat provides organisms with food, water, air, shelter, and breeding grounds tailored to their ecological niche."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Habitats located on land (such as forests, grasslands, deserts, coastal, and mountain regions) are called:",
    options: ["Terrestrial Habitats", "Aquatic Habitats", "Amphibious Habitats", "Aerial Habitats"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Terrestrial ecosystems encompass all dry-land continental environments supporting flora and fauna."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Habitats located in water (such as ponds, swamps, lakes, rivers, and oceans) are called:",
    options: ["Aquatic Habitats", "Terrestrial Habitats", "Arboreal Habitats", "Desert Habitats"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Aquatic habitats comprise marine saltwater and freshwater biomes hosting aquatic organisms."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "The living things (such as plants, animals, and microorganisms) that exist in a habitat are called its:",
    options: ["Biotic Components", "Abiotic Components", "Inorganic Components", "Non-living Factors"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Biotic factors comprise all living biological community members interacting within an ecosystem."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "The non-living physical factors (such as rocks, soil, air, water, sunlight, and temperature) in a habitat are called its:",
    options: ["Abiotic Components", "Biotic Components", "Organic Components", "Predators"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Abiotic factors are the chemical and physical non-living environmental parameters shaping habitats."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "The presence of specific structural features or behavioral habits which enable an organism to live naturally in its surroundings is called:",
    options: ["Adaptation", "Acclimatization", "Respiration", "Germination"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Adaptations are genetically evolved morphological and physiological traits enhancing survival in a given habitat."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Which of the following animals is famously adapted to survive in extremely hot, arid desert habitats, known as the 'Ship of the Desert'?",
    options: ["Camel", "Snow Leopard", "Mountain Goat", "Penguin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Camels possess wide padded feet, long legs, low sweat rates, concentrated urine, and fat-storing humps."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "The biological process by which living organisms get rid of toxic waste materials produced in their bodies is called:",
    options: ["Excretion", "Respiration", "Digestion", "Transpiration"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Excretion purges toxic metabolic byproducts (urea, CO₂, excess salts) from biological systems."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "The biological process by which organisms produce new individuals of their own kind is called:",
    options: ["Reproduction", "Respiration", "Excretion", "Stimulation"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Reproduction ensures species genetic continuity via sexual or asexual offspring generation."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Changes in our immediate surroundings that make us react and respond to them are called:",
    options: ["Stimuli (Singular: Stimulus)", "Habitats", "Adaptations", "Reflexes"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A stimulus is an environmental cue (light, heat, touch, sound) evoking a behavioral or physiological response."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Which plant is famous for folding and drooping its leaves immediately when touched by a human hand?",
    options: ["Mimosa pudica ('Touch-me-not' / Chhui-mui)", "Cactus", "Rose", "Hydrilla"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mimosa exhibits thigmonastic turgor loss in pulvini motor cells upon tactile mechanical stimulus."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How do Earthworms breathe and exchange respiratory gases (O₂ and CO₂)?",
    options: ["Through their moist and slimy skin", "Through lungs", "Through gills", "Through nostrils"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Earthworms undergo cutaneous respiration: atmospheric oxygen dissolves across the vascularized moist epidermis."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "What is the key difference between 'Adaptation' and 'Acclimatization'?",
    options: [
      "Adaptation occurs very slowly over thousands of years across generations through natural selection, while Acclimatization consists of small temporary adjustments made by an individual organism over a few days",
      "Adaptation only happens in water",
      "Acclimatization takes millions of years",
      "There is no difference"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Acclimatization is short-term physiological tuning (e.g. higher breathing rate in mountains), whereas adaptation is heritable evolutionary change."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How do desert plants (like Cactus / Opuntia) adapt to survive extreme water scarcity?",
    options: [
      "Leaves are reduced to sharp spines to minimize transpiration; stems become thick, green, and fleshy to perform photosynthesis and store water, coated with a waxy cuticle",
      "They grow broad leaves to catch rain",
      "They absorb water from desert air using flowers",
      "They sleep underground all year"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Xerophytic adaptations: spine modifications reduce transpiration, cladode stems store water, and roots penetrate deep."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How do desert animals like Rats and Snakes survive the scorching daytime heat without drinking much water?",
    options: [
      "They stay in deep underground cool burrows during the daytime heat and emerge only during the cool night (Nocturnal habit)",
      "They swim in desert lakes",
      "They sweat constantly",
      "They turn into ice"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Fossorial nocturnal behavior avoids diurnal solar heat load while conserving metabolic water."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "What anatomical adaptations allow Mountain Trees (like Pines, Deodars, and Firs) to withstand heavy snow and freezing gales?",
    options: [
      "Cone-shaped canopy with sloping branches and needle-like leaves, allowing rainwater and snow to slide off effortlessly without snapping branches",
      "Broad, flat horizontal leaves to catch snow",
      "Weak climbing stems",
      "Lack of roots"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Conical architecture and needle foliage shed heavy snow loads, preventing mechanical crown fracturing."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How is the Snow Leopard adapted to its freezing high-altitude rocky habitat?",
    options: [
      "Thick dense fur on its body, feet, and toes to protect from extreme cold, and a long furry tail for balance and warmth",
      "A bare skin without fur",
      "Large flapping ears",
      "Swimming fins"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dense woolly underfur and fur-cushioned paws insulate against snow while providing high-traction cliff grip."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "What adaptation enables the Mountain Goat (Markhor / Himalayan Tahr) to run swiftly up steep rocky slopes?",
    options: [
      "Strong, hard hooves with rubbery traction pads for running securely on steep, jagged rocks without slipping",
      "Large wings for gliding",
      "A long snake-like tail",
      "Soft padded paws like a cat"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Clad-hoofed ungulates possess keratinous outer walls and concave inner pads creating suction grip on vertical crags."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Why do Lions living in grasslands have light brown (tawny) fur and forward-facing eyes?",
    options: [
      "Light brown coat camouflages in dry grasses during stalking, and forward-facing eyes allow precise stereoscopic depth perception of prey distance",
      "To attract sunlight",
      "To scare birds",
      "Because they only eat grass"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Predatory binocular vision grants depth field focus, while tawny pelage blends into savanna grassland backgrounds."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Why do prey animals like Deer in grasslands have long ears and eyes positioned on the SIDES of their head?",
    options: [
      "Long ears hear subtle predator movements from afar, and lateral eyes provide wide 360° panoramic field of vision to spot danger in all directions",
      "To look at their own tails",
      "To fly in the wind",
      "To keep their head cool"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Herbivore side-mounted eyes deliver panoramic peripheral vision to detect approaching carnivores without turning the head."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How do marine mammals like Dolphins and Whales breathe oxygen since they do NOT possess gills?",
    options: [
      "Through Blowholes (nostrils) located on the upper surface of their heads, coming to the ocean surface to breathe air into their lungs",
      "Through their mouth underwater",
      "Through their tail flukes",
      "They do not breathe oxygen"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cetaceans are air-breathing lung-bearing mammals that surface to ventilate through dorsal blowholes."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How are completely submerged aquatic plants (like Hydrilla and Vallisneria) adapted to flowing water currents?",
    options: [
      "Narrow, thin, ribbon-like flexible leaves that can bend freely in water currents without tearing",
      "Large hard wooden trunks",
      "Thick waxy spines",
      "Heavy stone fruits"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ribbon-like linear foliage minimizes hydrodynamic drag, flexing gracefully with aqueous streamflow."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How are floating aquatic plants (like Lotus and Water Lily) adapted to survive on water surfaces?",
    options: [
      "Stems are long, hollow, light, and spongy filled with air spaces; leaves and flowers float on the surface with stomata on the upper surface",
      "Stems are solid heavy iron wood",
      "Roots are 50 meters deep in soil",
      "Leaves are covered with ice"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Aerenchyma tissue provides buoyancy, while epistomatous leaves have stomata on the dorsal side to exchange air above water."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How are Frogs adapted to live both on land and in freshwater ponds (Amphibious lifestyle)?",
    options: [
      "They possess strong webbed hind legs for swimming and leaping, breathe through lungs on land, and breathe through moist skin underwater",
      "They have feathers to fly",
      "They have gills like sharks",
      "They eat rocks"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dual respiration (pulmonary on land and cutaneous underwater) combined with webbed feet enables life in both aquatic and terrestrial habitats."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "What is the key difference between 'Breathing' and 'Respiration' in living organisms?",
    options: [
      "Breathing is the physical intake of oxygen and release of carbon dioxide, while Respiration is the biochemical oxidation of glucose inside cells to release energy",
      "Breathing produces food",
      "Respiration is only done by plants",
      "They are the exact same thing"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Breathing is physical gas exchange; cellular respiration is the metabolic catabolism of nutrients yielding ATP energy."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Why is a car or an airplane that moves, consumes fuel, and exhausts smoke NOT considered a living organism?",
    options: [
      "It cannot grow, reproduce offspring, respond to biological stimuli, or carry out internal cellular metabolism independently",
      "Because it is made of metal",
      "Because it has wheels",
      "Because it is too fast"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Non-living machines lack biological homeostasis, cellular organization, intrinsic growth, and reproductive heredity."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How do green plants respire during the night when there is no sunlight for photosynthesis?",
    options: [
      "They take in Oxygen (O₂) and release Carbon Dioxide (CO₂) through microscopic stomata, exactly like animals do",
      "They stop respiring completely",
      "They produce glucose from moonlight",
      "They turn into stone"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cellular respiration occurs 24/7 in plants; at night without photosynthetic O₂ production, net gas exchange consumes O₂ and expels CO₂."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Which of the following organisms reproduces by laying eggs (Oviparous)?",
    options: ["Birds, Snakes, and Frogs", "Cows and Buffaloes", "Lions and Tigers", "Humans and Elephants"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Oviparous animals (birds, reptiles, amphibians, insects) lay eggs that hatch outside the maternal body."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Read the statements:\nAssertion (A): Deep-sea animals like Squids and Octopuses do not possess a streamlined body shape like fish, yet can move rapidly in water.\nReason (R): When swimming actively, they streamline their bodies and expel high-pressure jets of water through a funnel-like siphon (Jet Propulsion).\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Cephalopods contract mantle cavities to shoot water jets through the hyponome, achieving high-speed directional thrust."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Spot the IMPOSTER in the following group of organisms based on their primary respiratory organ:\nGroup: [Fish (Gills), Prawn (Gills), Tadpole (Gills), Dolphin (Gills)]",
    options: ["Fish (Gills)", "Prawn (Gills)", "Tadpole (Gills)", "Dolphin (Gills)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Dolphins are aquatic mammals that breathe air through LUNGS and blowholes, NOT through gills."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "A botanist investigates root development in three plant species: Cactus (Desert), Hydrilla (Submerged aquatic), and Neem (Mesophytic tree). What comparative root adaptations are observed?",
    options: [
      "Cactus has deep extensive roots to reach deep groundwater; Hydrilla has very reduced roots purely for holding in place; Neem has widespread deep taproots",
      "Hydrilla has the deepest roots",
      "Cactus roots float in air",
      "All three have identical root structures"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Xerophytes develop extensive root networks to scavenge moisture; hydrophytes reduce roots because water surrounds the entire plant body."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Match Column I (Habitats & Adaptations) with Column II (Organisms):\n(a) Padded feet, hump, dry dung         -> (i) Snow Leopard\n(b) Thick fur on body, feet, long tail   -> (ii) Mountain Pine Tree\n(c) Conical crown, sloping branches     -> (iii) Camel\n(d) Webbed hind feet, moist skin         -> (iv) Frog",
    options: [
      "a-(iii), b-(i), c-(ii), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Camel = padded feet/hump; Snow Leopard = thick fur; Pine = conical crown; Frog = webbed feet."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Read the statements regarding plant excretion:\nStatement 1: Plants store some metabolic waste products in leaves, bark, or fruits which are shed periodically.\nStatement 2: Some plants excrete waste substances as secretions in the form of resins, gums, and latex.\nStatement 3: Plants have kidneys to filter liquid waste.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is absurd because plants lack kidneys. Statements 1 and 2 are true botanical excretion mechanisms."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Why do seeds (like dry kidney beans or wheat grains) kept dry inside a kitchen jar stay dormant without growing for months, yet sprout rapidly when placed in moist soil with warmth and air?",
    options: [
      "Seeds are living biological entities in a state of suspended dormancy; moisture, oxygen, and warmth trigger enzymatic metabolic germination",
      "Seeds are non-living stones that turn alive",
      "Soil injects electricity into seeds",
      "Water creates seeds from magic"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Seed dormancy maintains low basal metabolic rate until hydration and oxygen activate gibberellins to initiate embryo growth."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Consider four animals:\n1. Camel\n2. Fish\n3. Mountain Goat\n4. Lion\nWhich animal exhibits physiological adaptations specifically evolved to resist extreme hydrostatic and hydrodynamic fluid resistance?",
    options: ["Animal 2 (Fish - streamlined body, mucous scales, fins)", "Animal 1", "Animal 3", "Animal 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Fish exhibit hydrodynamic adaptations: fusiform profile, overlapping scales, and steering fins to conquer liquid viscous drag."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "How do plants respond to the unidirectional stimulus of sunlight (Phototropism)?",
    options: [
      "Shoots bend towards the light source due to the hormone auxin accumulating on the shaded side, while roots grow away from light into the soil",
      "Plants close their leaves and hide",
      "Plants produce black smoke",
      "Shoots grow straight into the ground"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Phototropic curvature: Auxin redistributes to shaded stem tissues, promoting differential cell elongation towards the light vector."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Why is the urine of a camel extremely concentrated and viscous, and its dung completely dry?",
    options: [
      "Extreme physiological water conservation: kidneys reabsorb maximum water to allow the camel to survive weeks without drinking water",
      "Camels eat sand",
      "Camels have no kidneys",
      "To make waste colorful"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Elongate loops of Henle in camel kidneys generate hyperosmotic urine, minimizing urinary and fecal water excretion."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "What is the primary ecological consequence when a non-native invasive species is introduced into a new habitat lacking natural predators?",
    options: [
      "It multiplies uncontrollably, outcompeting native species for resources (food, water, space) and destabilizing the ecological biotic balance",
      "It turns into a tree",
      "It evaporates the ocean",
      "It causes gravity to stop"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Invasive species disrupt biotic food webs by outcompeting native taxa through aggressive unchecked proliferation."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "Which of the following describes the biological phenomenon of 'Aestivation' (Summer Sleep) in desert animals and snails?",
    options: [
      "A state of metabolic dormancy and torpor during hot, dry summer months to prevent lethal dehydration and thermal stress",
      "Winter hibernation",
      "Migrating to the moon",
      "Laying eggs in water"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Aestivation suppresses metabolic rate during prolonged hot droughts, protecting organisms from desiccation."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 6: The Living Organisms — Characteristics and Habitats",
    question: "What are the universal core characteristics shared by ALL living organisms without exception?",
    options: [
      "Need for nutrition, Cellular respiration, Response to stimuli, Excretion, Reproduction, Growth, and Movement",
      "Ability to fly in air",
      "Having red blood",
      "Having bones and teeth"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The seven defining biological characteristics of life: Nutrition, Respiration, Irritability/Response, Excretion, Reproduction, Growth, and Movement."
  }
];

console.log('Generated Science Ch6:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/science_ch6.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
