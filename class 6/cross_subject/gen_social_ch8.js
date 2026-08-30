import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 8: India — Climate, Vegetation & Wildlife (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "The day-to-day conditions of the atmosphere at a particular place (including temperature, rainfall, sunshine, and wind) is called:",
    options: ["Weather", "Climate", "Season", "Monsoon"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Weather denotes short-term diurnal atmospheric states; climate represents statistical averages over ~30+ years."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "The average weather condition of a large geographic region measured and recorded over a long period of time (around 30 to 35 years) is called its:",
    options: ["Climate", "Weather", "Atmosphere", "Humidity"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Climate is the long-term aggregated pattern of meteorological parameters across decades."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What type of general climate does India broadly possess, which is dominated and shaped by seasonal reversal of wind patterns?",
    options: ["Tropical Monsoon Climate", "Equatorial Rainforest Climate", "Tundra Polar Climate", "Mediterranean Climate"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "India's climate is predominantly Tropical Monsoon, derived from the Arabic word 'Mausim' meaning seasonal wind reversal."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Which season occurs in India from December to February when the sun rays do not fall directly in the region, bringing cool temperatures?",
    options: ["Cold Weather Season (Winter)", "Hot Weather Season (Summer)", "Southwest Monsoon Season", "Season of Retreating Monsoon"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "During winter (Dec–Feb), oblique solar rays over Northern India cause temperatures to drop sharply."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Which season occurs in India from March to May when sun rays fall more or less directly, causing high temperatures?",
    options: ["Hot Weather Season (Summer)", "Cold Weather Season", "Winter", "Retreating Monsoon"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "From March to May, the northward apparent movement of the Sun raises thermal heating across the subcontinent."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What are the hot, dry, and dusty winds that blow fiercely during the daytime in summer across the northern plains of India called?",
    options: ["Loo", "Monsoon", "Kalbaishakhi", "Chinook"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Loo' refers to the intense, desiccating, hot westerly winds blowing across north India in May and June."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Which rainy season occurs from June to September when moisture-laden winds blow from the Arabian Sea and Bay of Bengal towards the land, bringing heavy rains?",
    options: ["Southwest Monsoon Season (Advancing Rainy Season)", "Cold Season", "Retreating Monsoon Season", "Summer"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Southwest Monsoon brings ~75% of India's annual precipitation between June and September."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Which place in Meghalaya, India receives the HIGHEST rainfall in the entire world?",
    options: ["Mawsynram (in Khasi Hills, Meghalaya)", "Cherrapunji", "Mumbai", "Kochi"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mawsynram receives ~11,872 mm of average annual rainfall due to funnel-shaped orographic condensation."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Plants and trees that grow naturally on their own in an area without human interference or help are collectively called:",
    options: ["Natural Vegetation (Flora)", "Agricultural Crops", "Horticulture", "Plantations"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Natural vegetation comprises virgin plant communities that have evolved undisturbed by anthropogenic interference."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Which dense forests remain green throughout the entire year because different tree species shed their leaves at different times?",
    options: ["Tropical Evergreen Rainforests", "Tropical Deciduous Forests", "Thorny Bushes", "Mountain Vegetation"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tropical Rain Forests (Evergreen) occur in heavy rainfall zones (>200 cm), retaining a continuous verdant canopy."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Which are the MOST WIDESPREAD and dominant natural forests in India, also popularly called 'Monsoon Forests'?",
    options: ["Tropical Deciduous Forests (e.g. Sal, Teak, Peepal, Neem, Shisham)", "Tropical Evergreen Forests", "Mangrove Forests", "Alpine Tundra"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tropical deciduous forests cover the largest area in India, shedding their leaves for 6–8 weeks in dry summer."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "In which month is 'Wildlife Week' celebrated in India every year to encourage biodiversity awareness?",
    options: ["First week of October (1st to 7th October)", "First week of June", "First week of January", "First week of August"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "National Wildlife Week is observed from 2 to 8 October annually across India."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Why do the coastal states of Tamil Nadu and Andhra Pradesh receive a major part of their annual rainfall during the 'Retreating Monsoon' (Autumn season in October & November)?",
    options: [
      "Winds blow back from the mainland towards the Bay of Bengal, picking up moisture over the Bay of Bengal and striking the Coromandel coast (Northeast Monsoon)",
      "Because snow melts in the Himalayas",
      "Because the Arabian sea dries up",
      "Because clouds move only in circles"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Retreating monsoonal winds pick up marine moisture crossing the Bay of Bengal, causing heavy rainfall along the Coromandel coast."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What are the four primary factors that influence and determine the climate of any place on Earth?",
    options: [
      "Location (Latitude), Altitude (Height above sea level), Distance from the sea, and Relief (Topography)",
      "Number of cars, houses, trains, and planes",
      "Types of soil, rocks, metals, and minerals",
      "Color of clouds, birds, rivers, and trees"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Climate drivers: 1. Latitude, 2. Altitude, 3. Continentality / distance from sea, and 4. Topographic relief barriers."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Why do coastal places like Mumbai, Kolkata, and Chennai experience an 'Equable Climate' (moderate temperature with neither extreme hot nor extreme cold), whereas Delhi and Jaipur experience 'Extreme Climate'?",
    options: [
      "Proximity to the vast ocean provides a moderating maritime sea breeze, whereas interior landlocked places suffer high continental temperature variations",
      "Because coastal cities have more air conditioners",
      "Because the sun doesn't shine on oceans",
      "Because Delhi has no rain"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "High specific heat capacity of seawater dampens temperature extremes in maritime coastal regions."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What are the two extreme temperature locations in India: Drass (Ladakh) and Jaisalmer (Rajasthan)?",
    options: [
      "Drass is freezing cold with temperatures dropping to -45°C, while Jaisalmer is scorching hot with summer temperatures touching 50°C",
      "Both are freezing ice caps",
      "Both are scorching hot deserts",
      "Both have identical moderate temperatures"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Drass in Ladakh is the 2nd coldest inhabited place on Earth (-45°C), while Thar's Jaisalmer reaches +50°C."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "How are Thorny Bushes and vegetation in arid desert regions (Rajasthan, Gujarat, dry Deccan) adapted to survive with minimal rainfall?",
    options: [
      "Leaves are modified into sharp spines (thorns) to minimize transpiration water loss, and stems are fleshy with deep taproots to absorb groundwater",
      "They have broad giant leaves",
      "They float in air",
      "They shed leaves every day"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Xerophytic adaptations: microphyllous spines reduce transpiration, deep roots tap aquifers, and suberized bark insulates."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "How does vegetation change with increasing altitude in the Himalayan mountain zones (Mountain Vegetation)?",
    options: [
      "Between 1,500 m and 2,500 m, trees become conical in shape with needle-like leaves called Coniferous Trees (e.g. Chir, Pine, Deodar)",
      "Trees become thorny bushes",
      "Trees turn into ocean kelp",
      "No trees exist in mountains"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Altitudinal zonation transitions from sub-tropical foothills to temperate coniferous taiga (Pinus, Cedrus deodara) and alpine meadows."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What are 'Mangrove Forests' and in which type of water environment do they thrive?",
    options: [
      "Specialized halophytic coastal forests that can survive and thrive in saline seawater mudflats (e.g. Sundari trees in Sundarbans)",
      "Forests that grow on mountaintops in snow",
      "Desert cactus plants",
      "Freshwater lake lilies"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mangroves are tidal halophytes with salt-filtering roots and pneumatophores adapted to saline coastal estuaries."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What is the famous mangrove tree species found in the Ganga-Brahmaputra delta after which the 'Sundarbans' are named?",
    options: ["Sundari tree (Heritiera fomes)", "Sal tree", "Teak tree", "Chir Pine"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sundari trees (Heritiera fomes) dominate the tidal delta, providing timber and lending their name to the Sundarbans."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Why are natural forests of vital ecological and economic importance to our planet and human society?",
    options: [
      "They release Oxygen and absorb Carbon Dioxide, bind soil roots to prevent erosion, regulate rainfall, and provide timber, medicinal herbs, lac, and honey",
      "They take away all oxygen",
      "They cause soil erosion",
      "They make land barren"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Forests provide ecosystem services: oxygen production, carbon sequestration, soil anchoring, and non-timber forest products."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Which forest in Gujarat is world-famous as the home of the Asiatic Lion?",
    options: ["Gir Forest", "Kaziranga", "Corbett", "Sundarbans"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The dry deciduous teak forests of Gir in Gujarat constitute the exclusive natural habitat of the Asiatic Lion."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Where in India are wild Elephants and One-Horned Rhinoceroses naturally found roaming together in tall alluvial grasslands?",
    options: ["In the forests of Assam (Kaziranga and Manas)", "In the Thar Desert of Rajasthan", "In the cold deserts of Ladakh", "In the Andaman Islands"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The floodplains of Assam support mega-herbivores like Asian Elephants, One-horned Rhinos, and Wild Water Buffaloes."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Which high-altitude animals with thick woolly coats are found roaming in the snow-bound Himalayan and Ladakh ranges?",
    options: ["Wild Yaks, Tibetan Antelope (Chiru), Snow Leopards, and Himalayan Ibex", "Camels and Lions", "Elephants and Rhinos", "Peacocks and Flamingos"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "High alpine Himalayan fauna features thick pelts: Bos mutus (Wild Yak), Chiru, Snow Leopards, and Bharal (Blue Sheep)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What are 'Migratory Birds' and why do birds like Siberian Cranes, Flamingos, and Pintail Ducks migrate to Indian wetlands every winter?",
    options: [
      "They fly thousands of kilometres from freezing Arctic/Siberian winter extremes to warmer Indian wetlands in search of food and nesting grounds",
      "They migrate because they get lost",
      "They come to India to hibernate underwater",
      "They only fly in summer"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Migratory avifauna escape freezing sub-polar temperatures along the Central Asian Flyway to winter in hospitable Indian wetlands."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Which desert animals are specially adapted to the arid Rann of Kachchh and Thar Desert of northwestern India?",
    options: ["Camels (in Thar) and Wild Ass / Khur (in the Little Rann of Kachchh)", "Yaks and Snow Leopards", "Tigers and Rhinos", "Elephants and Gibbons"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Indian Wild Ass (Equus hemionus khur) thrives in the saline flats of Rann of Kachchh alongside desert camels."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What civic programme was launched to encourage people and school students across India to plant millions of trees during the monsoon season?",
    options: ["Van Mahotsav ('Forest Festival')", "Project Tiger", "Swachh Bharat", "Digital India"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Initiated by K.M. Munshi in 1950, Van Mahotsav is an annual tree-planting festival celebrated in the first week of July."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Why is agriculture in India predominantly described as a 'Gamble with the Monsoons'?",
    options: [
      "A vast majority of Indian farming relies on timely, adequate monsoon rainfall; a weak or delayed monsoon causes severe drought and crop failure",
      "Because farmers play card games in fields",
      "Because crops grow without water",
      "Because monsoons only bring snow"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rainfed agrarian livelihoods depend heavily on the spatio-temporal distribution of southwest monsoonal rains."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Read the statements:\nAssertion (A): Tropical Rainforests exhibit a complex, multi-layered vertical canopy structure where little sunlight reaches the ground floor.\nReason (R): High equatorial temperature, torrential year-round rainfall, and fertile humus foster intense biological competition, driving trees to soar up to 60 metres in height.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Canopy stratification (emergent, upper canopy, understory, forest floor) maximizes photosynthetic solar capture in dense rainforests."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Spot the IMPOSTER in the following group of trees classified by their natural forest type:\nGroup: [Ebony (Evergreen), Mahogany (Evergreen), Rosewood (Evergreen), Teak (Evergreen)]",
    options: ["Ebony (Evergreen)", "Mahogany (Evergreen)", "Rosewood (Evergreen)", "Teak (Evergreen)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Teak (Tectona grandis) is a classic TROPICAL DECIDUOUS tree, NOT an evergreen rainforest tree."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "A climatologist records the seasonal pressure patterns over South Asia in July. What atmospheric mechanism drives the Southwest Monsoon?",
    options: [
      "Intense solar heating creates an intense thermal Low-Pressure trough over the northwestern plains/Tibetan plateau, sucking in moist High-Pressure oceanic trade winds from the southern Indian Ocean",
      "Cold snow in the Himalayas blows wind to the sea",
      "The moon pulls all ocean water onto the land",
      "Earth stops rotating for a month"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Thermal depression over the continental interior draws cross-equatorial Coriolis-deflected southwesterly trade winds carrying ocean moisture."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Match Column I (Forest Types) with Column II (Dominant Species / Typical Regions):\n(a) Tropical Rainforest  -> (i) Sundari / Ganga-Brahmaputra delta\n(b) Tropical Deciduous   -> (ii) Ebony, Mahogany, Rosewood / Western Ghats\n(c) Coniferous Mountain   -> (iii) Sal, Teak, Peepal, Shisham / Central India\n(d) Mangrove Forest      -> (iv) Chir, Pine, Deodar / Himalayan slopes",
    options: [
      "a-(ii), b-(iii), c-(iv), d-(i)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Rainforest = Ebony/Mahogany; Deciduous = Sal/Teak; Coniferous = Chir/Deodar; Mangrove = Sundari."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Read the statements regarding Indian climate and forests:\nStatement 1: Western slopes of the Western Ghats receive over 250 cm of orographic rainfall and support Tropical Evergreen rainforests.\nStatement 2: The eastern leeward side of the Western Ghats lies in the rain-shadow zone and receives significantly lower rainfall.\nStatement 3: Coniferous trees shed all their leaves in summer.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because coniferous gymnosperms are evergreen and retain needle foliage through winter. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Why do plants in thorny scrub forests (like Acacia/Babool, Cactus, and Khejri) develop extensive underground root networks stretching meters deep and wide?",
    options: [
      "To maximize groundwater scavenging across deep arid soil profiles where surface moisture is scarce",
      "To anchor against heavy snowstorms",
      "To store frozen ice",
      "To connect with ocean water"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Deep phreatophytic taproots reach capillary fringe water tables, sustaining desert scrub in xerophytic environments."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Consider four national conservation sanctuaries:\n1. Gir National Park\n2. Kaziranga National Park\n3. Dachigam National Park\n4. Keibul Lamjao National Park\nMatch the exclusive endemic flagship species protected in each in order (1, 2, 3, 4):",
    options: [
      "1: Asiatic Lion ; 2: One-Horned Rhino ; 3: Hangul (Kashmir Stag) ; 4: Sangai (Dancing Deer)",
      "1: Snow Leopard ; 2: Royal Bengal Tiger ; 3: Asiatic Lion ; 4: Elephant",
      "1: Hangul ; 2: Sangai ; 3: Asiatic Lion ; 4: Rhino",
      "1: Elephant ; 2: Tiger ; 3: Snow Leopard ; 4: Hangul"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Gir = Asiatic Lion; Kaziranga = One-horned Rhino; Dachigam = Hangul; Keibul Lamjao = Sangai."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What is the phenomenon of 'Western Disturbances' that brings winter rainfall and mountain snowfall to north-western India in December and January?",
    options: [
      "Temperate cyclonic low-pressure systems originating over the Mediterranean Sea that are carried eastward into India by the subtropical westerly jet stream",
      "Cyclones from the Bay of Bengal",
      "Dust storms from the Sahara",
      "Tornadoes from the Pacific"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mediterranean extra-tropical cyclones steered by westerly jet streams provide crucial rabi crop (wheat) moisture in northwest India."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "Why is the Tibetan Antelope ('Chiru') illegally hunted and endangered in high-altitude Himalayas?",
    options: [
      "For its ultra-fine, warm, and lightweight wool called 'Shahtoosh', which is spun into expensive luxury shawls",
      "For its horn meat",
      "For leather shoes",
      "Because it attacks domestic sheep"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chiru is poached for Shahtoosh ('King of Wools'), prompting strict international CITES Appendix I trade bans."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What ecological role do coastal Mangrove forests perform during violent tropical cyclones and tsunamis?",
    options: [
      "Their dense root networks absorb and attenuate high-energy oceanic storm surges, drastically reducing inland coastal erosion and protecting human lives",
      "They create bigger waves",
      "They pump seawater into clouds",
      "They blow cyclone winds away"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mangrove bioshields act as natural coastal wave attenuators, dampening destructive hydro-dynamic surge energies."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What is the primary conservation objective of establishing 'Wildlife Corridors' between fragmented National Parks and Tiger Reserves?",
    options: [
      "To enable safe, unobstructed seasonal migration, gene flow, and territorial dispersal of wildlife populations, preventing inbreeding depression",
      "To build tourist highways through forests",
      "To fence animals in cages",
      "To separate male and female animals"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Landscape ecological corridors connect fragmented habitats, preventing genetic bottlenecks and human-wildlife conflict."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 8: India — Climate, Vegetation and Wildlife",
    question: "What fundamental message does the final chapter of NCERT Class 6 Geography emphasize regarding wildlife coexistence?",
    options: [
      "Refusing to purchase items made from animal parts (bones, horns, fur, feathers, ivory), planting native trees, and respecting all biological life on Earth",
      "Cutting down all forests for cities",
      "Keeping wild tigers as domestic pets",
      "Hunting birds during winter"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "NCERT urges ethical consumer boycotts of wildlife derivatives and active community afforestation for ecological sustainability."
  }
];

console.log('Generated Social Science Ch8:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/social_ch8.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
