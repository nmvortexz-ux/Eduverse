import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 8: Fire: Friend and Foe & Meadow Surprises (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What was early primitive man's initial attitude toward fire before understanding its scientific nature?",
    options: [
      "Early humans were deeply frightened of fire, viewing it as a mysterious, terrifying, and dangerous destructive force",
      "They loved fire and played with it",
      "They ignored fire completely",
      "They kept fire in ice boxes"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Early humans feared fire because of its destructive devastation in volcanic eruptions and lightning forest fires."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Scientifically, what three essential things are required to make and sustain FIRE?",
    options: [
      "Fuel, Oxygen, and Heat",
      "Water, Wood, and Air",
      "Coal, Ice, and Smoke",
      "Gasoline, Sand, and Wind"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Fire triangle: Fuel + Oxygen (from air) + Heat (reaching ignition temperature) are the three mandatory elements."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the particular minimum temperature at which a specific fuel begins to catch fire and burn called?",
    options: ["Flash Point (or Kindling Temperature)", "Boiling Point", "Freezing Point", "Melting Point"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The minimum temperature at which a combustible fuel begins burning is its 'flash point' or 'kindling temperature'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Why is Fire described as 'a good servant but a bad master' in the prose text?",
    options: [
      "As long as fire is kept under control, it is incredibly useful for cooking, heating, and generating power ; but if it gets out of control, it destroys homes, forests, and lives",
      "Because fire works in restaurants",
      "Because fire can be bought in shops",
      "Because fire only burns in winter"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The proverb highlights that controlled combustion serves human civilization, whereas runaway infernos cause catastrophic destruction."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What are the three fundamental ways to extinguish or put out a fire?",
    options: [
      "1. Take away the Fuel ; 2. Prevent Oxygen from reaching it (smothering) ; 3. Remove the Heat / bring temperature below flash point (spraying water)",
      "1. Add more wood ; 2. Blow air ; 3. Pour oil",
      "1. Run away ; 2. Close eyes ; 3. Shout",
      "1. Paint the walls ; 2. Open windows ; 3. Plant trees"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Extinguishing fire involves breaking the fire triangle: fuel starvation, oxygen smothering, or thermal cooling."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Why should Water NEVER be used to extinguish an Electrical Fire or an Oil Fire?",
    options: [
      "Water conducts electricity (risking lethal electric shocks) ; and burning oil floats on water and spreads the blazing fire everywhere",
      "Because water catches fire",
      "Because water turns into oil",
      "Because water is too expensive"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tap water conducts lethal current in electrical fires, and low-density oil floats atop water, spreading flames."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What type of fire extinguisher is safest and most effective for combating Electrical and Oil fires?",
    options: ["Carbon Dioxide (CO₂) Fire Extinguisher", "Plain tap water bucket", "Blowing breath", "Spreading paper"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "CO₂ extinguishers displace oxygen and do not conduct electricity, suffocating oil and electrical fires safely."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "In Lois Brandt Phillips's poem 'Meadow Surprises', what two sensory habits must a visitor have to discover hidden wonders in a meadow?",
    options: ["A keen, observant Eye and a sharp, patient Ear", "A loud voice and big boots", "A camera and a telephone", "A net and a cage"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The poem begins: 'Meadows have surprises, / You can find them if you look; / Walk softly through the velvet grass, / And listen by the brook.'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the butterfly resting upon and sipping nectar from in the poem 'Meadow Surprises'?",
    options: ["A Buttercup flower (using its drinking straws / proboscis)", "A rose petal", "A tree trunk", "A rock"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Line from the poem: 'You may see a butterfly / Rest upon a buttercup / And unfold its drinking straws / To sip the nectar up.'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What small creature sits so still in the grass that you won't see it until it suddenly hops away in fright?",
    options: ["A Rabbit", "A Squirrel", "A Frog", "A Mouse"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Textual lines: 'You may scare a rabbit / Who is sitting very still; / Though at first you may not see him, / When he hops you will.'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What yellow fuzzy flower whose head turned into airy parachutes flutters away when you blow on it in the meadow?",
    options: ["A Dandelion", "A Sunflower", "A Marigold", "A Lotus"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Textual lines: 'A dandelion whose fuzzy head / Was golden days ago / Has turned to airy parachutes / That flutter when you blow.'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What meadow dwellings and animal homes are mentioned in 'Meadow Surprises'?",
    options: [
      "Burrows in the ground, birds' nests beneath tall grasses, and magnificent mounds of ants",
      "Brick houses and skyscrapers",
      "Fish ponds and aquariums",
      "Caves of bears"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The poem catalogs natural habitats: 'Burrows in the ground, / A nest beneath tall grasses, / The ant's amazing mound.'."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the chemical reaction called when oxygen in the air combines rapidly with carbon and hydrogen in a fuel to release heat and light?",
    options: ["Combustion (Exothermic Chemical Reaction)", "Evaporation", "Condensation", "Photosynthesis"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Combustion is the rapid exothermic oxidation of hydrocarbons yielding CO₂, H₂O, heat, and radiant photon emission (light)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "How did people fight fires in towns before the advent of organized fire brigades and motorized fire engines?",
    options: [
      "People formed human bucket brigades, passing buckets of water hand-to-hand from nearby wells and ponds to pour onto the burning building",
      "They waited for winter rain",
      "They blew on the fire with fans",
      "They covered the town with blankets"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Historic firefighting utilized bucket chains where lines of citizens swiftly relayed water buckets from hydrants/wells to the flames."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Why do modern city building construction laws require leaving open space between large buildings?",
    options: [
      "To reduce the risk of fire jumping and spreading from one structure to neighboring buildings",
      "To build wider roads for racing",
      "To let wild animals walk through",
      "To plant vegetable gardens"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Fire safety building codes mandate setback spaces to create thermal firebreaks that prevent structural flame leap."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "How does throwing a damp, heavy blanket or sack over a small kitchen fire extinguish it immediately?",
    options: [
      "It cuts off the supply of atmospheric Oxygen from reaching the burning fuel, instantly smothering the flame",
      "It makes the fire hotter",
      "It adds fuel to the fire",
      "It makes the fire disappear into the blanket"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Fire blankets smother flames by oxygen starvation, dropping O₂ below the 16% threshold needed for combustion."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the poetic metaphor in describing a butterfly's mouthparts as 'Drinking Straws' in 'Meadow Surprises'?",
    options: [
      "It poetically visualizes the butterfly's coiled tubular proboscis that unrolls to siphon sweet liquid nectar from flower chalices",
      "The butterfly carries plastic straws from a store",
      "The butterfly is drinking lemonade",
      "The flower is made of glass"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The metaphor illuminates insect anatomy: the elongated tubular proboscis acts like an organic drinking straw siphoning nectar."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the meaning of the word 'Smother' in firefighting contexts?",
    options: ["To extinguish a fire by depriving it of air and cutting off oxygen supply", "To burn brightly", "To pour gasoline on fire", "To heat up metal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Smother' means suffocating or extinguishing combustion by cutting off atmospheric oxygen."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the meaning of 'Kindling' in: 'Kindling temperature of wood'?",
    options: ["The ignition temperature at which a substance catches fire", "A pile of ashes", "Cold river water", "A small bird"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Kindling temperature' is the minimum thermal threshold required to ignite combustion."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Choose the correct Modal Verb of Obligation:\n'Every new commercial building _______ install fire alarms and smoke detectors.'",
    options: ["must (mandatory legal requirement)", "may", "might", "could"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Must' conveys strict compulsory obligation and legal necessity."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Fill in the blank with the appropriate Phrasal Verb:\n'The brave firefighters managed to _______ the raging blaze after two hours.'",
    options: ["put out (extinguish)", "put off", "put on", "put away"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To put out' means to extinguish a fire."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the SYNONYM of 'Fierce' in: 'A fierce fire broke out in the warehouse'?",
    options: ["Ferocious / Intense / Violent", "Gentle", "Mild", "Quiet"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Fierce' denotes intense, furious, violent physical magnitude."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the ANTONYM of 'Extinguish'?",
    options: ["Ignite / Kindle / Inflame", "Smother", "Quench", "Douse"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The antonym of 'extinguish' (put out) is 'ignite' or 'kindle' (set alight)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Choose the correct spelling:",
    options: ["Extinguisher", "Extingwisher", "Extingusher", "Extingwisher"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Correct orthography: E-X-T-I-N-G-U-I-S-H-E-R."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Identify the figure of speech in: 'The meadow whispered its secrets to those who walked softly.'",
    options: ["Personification (giving the meadow the human ability to 'whisper')", "Metaphor", "Simile", "Hyperbole"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Personification animates the meadow landscape with human vocal whispering."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Convert into PASSIVE VOICE:\n'The firefighters sprayed high-pressure water onto the burning roof.'",
    options: [
      "'High-pressure water was sprayed onto the burning roof by the firefighters.'",
      "'The burning roof sprayed high-pressure water by firefighters.'",
      "'Water had been spraying by the firefighters.'",
      "'Firefighters were sprayed by the burning roof.'"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Passive voice: Object ('High-pressure water') + was sprayed + prepositional phrase + agent."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the meaning of 'Airy parachutes' in the description of a mature Dandelion flower?",
    options: [
      "The lightweight, feathery white pappus seed-heads that float effortlessly on air breezes like tiny parachutes",
      "Parachutes used by skydivers in a meadow",
      "Plastic toys dropped from planes",
      "Yellow petals that fall on ground"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Airy parachutes' poeticizes the pappus parachute hairs of dandelion seeds designed for wind dispersal."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What happens when you blow gently on a dandelion seed-head according to the poem?",
    options: [
      "The tiny parachute seeds detach and flutter away through the air",
      "The flower turns into a yellow rose",
      "The flower disappears into water",
      "The flower catches fire"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Line from poem: 'Airy parachutes that flutter when you blow'."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Read the statements:\nAssertion (A): Fire represents the foundational dualism of scientific mastery: it is humanity's greatest technological ally when controlled, but an apocalyptic peril when unleashed.\nReason (R): Controlled combustion generates electric energy, drives industrial metallurgy, and cooks food, whereas uncontrolled runaway chemical combustion consumes entire ecosystems and urban infrastructures.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The chapter explores the dialectical nature of fire: the cradle of civilization versus primeval destructive peril."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Spot the IMPOSTER in the following methods of Firefighting and their scientific operational principles:\nGroup:\n1. Removing Fuel - Starving the fire of combustible matter\n2. Smothering with Blanket / CO₂ - Depriving the fire of atmospheric oxygen\n3. Spraying Water - Cooling fuel temperature below its flash point\n4. Throwing pure Alcohol and Gasoline - Cooling the flames into ice",
    options: ["Method 1", "Method 2", "Method 3", "Method 4 (Alcohol and Gasoline are HIGHLY INFLAMMABLE FUELS that will violently explode and feed the fire, NOT cool it)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Method 4 is a disastrous fallacy: hydrocarbons add volatile fuel to combustion, accelerating explosions."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Analyze the environmental aesthetics in Lois Brandt Phillips's 'Meadow Surprises':\nWhat does the poem teach young naturalists about ecological mindfulness?",
    options: [
      "Nature does not shout its beauty; discovering the rich biodiversity of meadows (micro-habitats, animal architecture, camouflage) requires gentle stillness, patient observation, and deep reverence",
      "Meadows are empty fields with nothing to see",
      "Children should run loudly to scare all animals away",
      "Meadows should be paved over with concrete"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Phillips champions contemplative ecological mindfulness: subtle micro-habitats reward quiet, non-intrusive observation."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Match Column I (Fire Safety & Poetic Images) with Column II (Scientific & Literary Mechanisms):\n(a) Fire Triangle               -> (i) The tripartite triad of Fuel, Oxygen, and Ignition Heat\n(b) Flash Point                 -> (ii) The critical kindling temperature threshold initiating combustion\n(c) Butterfly's Drinking Straws -> (iii) Extended tubular proboscis harvesting floral nectar\n(d) Dandelion Airy Parachutes   -> (iv) Anemochorous pappus seed adaptations for wind dispersal",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Fire Triangle = fuel/O₂/heat; Flash point = ignition temp; Proboscis = drinking straw; Pappus = airy parachute."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Read the statements regarding historical firefighting:\nStatement 1: Before modern specialized fire brigades existed, entire communities mobilized as emergency 'bucket brigades' to combat fires.\nStatement 2: The Great Fire of London (1666) destroyed thousands of timber houses, accelerating modern urban brick architecture and professional fire brigades.\nStatement 3: Fire can burn in an absolute vacuum where there is no oxygen or gas.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (combustion requires oxygen/oxidizers, impossible in vacuum). Statements 1 and 2 are historical facts."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Identify the grammatical role of the underlined clause in: 'When a fire breaks out, **firefighters immediately rush to the scene**.'",
    options: [
      "Main (Independent) Clause expressing the primary action",
      "Dependent Adverb Clause of Time",
      "Noun Clause in apposition",
      "Relative Clause"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Firefighters immediately rush to the scene' is the independent principal clause preceded by the temporal subordinate clause."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Why does spraying water on a normal wood or paper fire put it out effectively?",
    options: [
      "Water absorbs vast amounts of thermal heat energy (high specific heat and latent heat of vaporization), dropping the fuel's temperature below its kindling flash point, while steam blocks surrounding oxygen",
      "Water turns the wood into metal",
      "Water produces freezing ice instantly",
      "Water creates chemical poison for fire"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Thermodynamics of water dousing: massive enthalpy absorption lowers temperature below flash point, while expanding steam blankets oxygen."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "In 'Meadow Surprises', what camouflage survival mechanism of the rabbit is highlighted in the lines:\n'You may scare a rabbit / Who is sitting very still; / Though at first you may not see him, / When he hops you will.'?",
    options: [
      "Crypsis / Freezing behavior: prey animals blend motionless with meadow background to evade visual predator detection until forced into explosive flight",
      "Rabbits change their skin color like chameleons",
      "Rabbits become invisible with magic",
      "Rabbits dig holes with their ears"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Behavioral crypsis: motionless posture minimizes motion parallax detection by raptors and ground predators."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What is the ecological significance of the 'Ant's amazing mound' mentioned in the poem?",
    options: [
      "It represents a marvel of social insect architectural engineering, featuring complex subterranean galleries for fungal cultivation, brood chambers, and thermal regulation",
      "It is a pile of trash left by hikers",
      "It is a natural rock formation",
      "It is built by meadow birds"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Formicary ant mounds are sophisticated subterranean bio-architectural complexes regulating ventilation, brood humidity, and colony defense."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "Which of the following sentences correctly utilizes the Conditional Clause (Type 1) for fire safety?",
    options: [
      "\"If you see a fire hazard in your building, you should immediately report it to the fire officer.\"",
      "\"If you saw fire, you will run.\"",
      "\"If fire is burning, water had been sprayed.\"",
      "\"If fuel burns, smoke was rising.\""
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Standard first conditional syntax: If + simple present ('see'), main clause modal + base verb ('should report')."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What sensory contrast is created between the prose 'Fire: Friend and Foe' and the poem 'Meadow Surprises'?",
    options: [
      "The prose explores the fierce, energetic thermodynamic power of combustion and human technology, while the poem invites gentle, contemplative immersion in the quiet micro-wonders of living nature",
      "Both texts describe destructive earthquakes",
      "Both texts are mathematical formulas",
      "There is no contrast"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 8 creates thematic balance: industrial thermodynamics and civic safety paired with contemplative botanical and ecological wonder."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 8: Fire: Friend and Foe & Meadow Surprises",
    question: "What overarching humanist education unites Chapter 8 of NCERT Class 7 English?",
    options: [
      "Scientific literacy, safety consciousness, and environmental mindfulness—equipping young minds to master dangerous physical forces responsibly while nurturing gentle curiosity for nature's delicate ecosystems",
      "That humans should never explore meadows",
      "That fire should never be used for any purpose",
      "That animals should be kept in cages"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 8 bridges physical science literacy, civic safety protocols, and ecological sensitivity to the natural world."
  }
];

console.log('Generated Class 7 English Ch8:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/english_ch8.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
