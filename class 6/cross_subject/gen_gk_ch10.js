import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 10: World Geography & Wonders (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which is the LARGEST continent in the world by both land area and human population?",
    options: ["Asia (covers 30% of Earth's land area and ~60% of world population)", "Africa", "North America", "Europe"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Asia spans 44.58 million km² and hosts over 4.7 billion people, making it the largest continent on Earth."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which is the SMALLEST continent in the world by land area, often called an 'Island Continent'?",
    options: ["Australia (Oceania)", "Europe", "Antarctica", "South America"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Australia is the smallest continent, completely surrounded by the Indian and Pacific Oceans."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which is the LARGEST and DEEPEST ocean on Earth, covering more than one-third of the globe?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Pacific Ocean covers 165.25 million km², larger than all Earth's landmasses combined."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the DEEPEST point on Earth, located in the western Pacific Ocean near Guam (reaching ~11,034 metres depth)?",
    options: ["Mariana Trench (Challenger Deep)", "Java Trench", "Puerto Rico Trench", "Sunda Trench"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Challenger Deep in the Mariana Trench plunges nearly 11 km deep, where pressure exceeds 1,000 atmospheres."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the HIGHEST mountain peak in the world above sea level, located in the Himalayas on the border of Nepal and China (Tibet)?",
    options: ["Mount Everest (Sagarmatha / Chomolungma - 8,848.86 metres)", "K2 (Mount Godwin-Austen)", "Kangchenjunga", "Lhotse"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mount Everest reaches 8,848.86 m, first summitted by Edmund Hillary and Tenzing Norgay on 29 May 1953."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the LONGEST river in the world, flowing through northeastern Africa into the Mediterranean Sea?",
    options: ["River Nile (~6,650 km)", "Amazon River", "Yangtze River", "Mississippi River"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The River Nile stretches 6,650 km across 11 African nations, historic cradle of ancient Egyptian civilization."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the LARGEST river in the world by water discharge volume and river basin area, flowing through South America?",
    options: ["Amazon River", "River Nile", "Congo River", "Ganges River"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Amazon discharges ~209,000 m³/s of freshwater into the Atlantic, draining the world's largest rainforest basin."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the LARGEST HOT DESERT in the world, covering over 9 million square kilometres across North Africa?",
    options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Thar Desert"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Sahara spans 9.2 million km² across 11 North African countries, roughly the size of the entire United States."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which ice-covered continent surrounding the South Pole is the coldest, driest, and windiest continent on Earth (known as the 'White Continent')?",
    options: ["Antarctica", "Arctic", "Greenland", "Europe"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Antarctica is a polar desert containing 90% of world ice and 70% of global freshwater reserves."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the only Ocean in the world named after a specific country?",
    options: ["Indian Ocean (named after India / Bharat)", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Indian Ocean is the 3rd largest ocean, named after India's historic centrality along maritime spice routes."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the LONGEST continental mountain range in the world, running along the western coast of South America?",
    options: ["The Andes Mountain Range (~7,000 km)", "The Himalayas", "The Rocky Mountains", "The Alps"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Andes span ~7,000 km across 7 South American countries from Venezuela to Chile."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which iconic white marble mausoleum built in Agra, India by Mughal Emperor Shah Jahan is recognized as one of the New 7 Wonders of the World?",
    options: ["Taj Mahal", "Qutub Minar", "Red Fort", "Hawa Mahal"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Completed in 1648 on the Yamuna banks, the Taj Mahal is a UNESCO World Heritage site and New 7 Wonder of the World."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the world's HIGHEST uninterrupted waterfall, located in Canaima National Park, Venezuela (dropping 979 metres)?",
    options: ["Angel Falls (Salto Ángel)", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Angel Falls plunges 979 m (807 m uninterrupted drop) from the Auyán-tepui plateau in Venezuela."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which artificial sea-level waterway in Egypt connects the Mediterranean Sea directly with the Red Sea, enabling direct maritime navigation between Europe and Asia?",
    options: ["Suez Canal (opened in 1869)", "Panama Canal", "Kiel Canal", "Corinth Canal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Opened in 1869 across the Isthmus of Suez, the 193 km Suez Canal eliminates the 7,000 km voyage around Africa."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which artificial lock-based canal in Central America cuts across the Isthmus of Panama to connect the Atlantic Ocean with the Pacific Ocean?",
    options: ["Panama Canal (opened in 1914)", "Suez Canal", "Erie Canal", "Grand Canal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Opened in 1914, the 82 km Panama Canal uses stepped water locks to lift ships across the continental divide."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the LARGEST freshwater lake in the world by surface area, located on the border of the USA and Canada?",
    options: ["Lake Superior (82,100 sq km)", "Lake Victoria", "Lake Baikal", "Lake Michigan"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Lake Superior is the largest freshwater lake by surface area (82,103 km²) among the Laurentian Great Lakes."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the DEEPEST and OLDEST freshwater lake in the world, located in Siberia, Russia (holding 20% of world's unfrozen surface freshwater)?",
    options: ["Lake Baikal (1,642 metres deep)", "Lake Tanganyika", "Caspian Sea", "Lake Superior"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Lake Baikal is a continental rift lake reaching 1,642 m depth and containing 23,615 km³ of freshwater."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the LARGEST inland body of water (enclosed saline lake) in the world, bounded by Russia, Kazakhstan, Turkmenistan, Iran, and Azerbaijan?",
    options: ["Caspian Sea (371,000 sq km)", "Black Sea", "Aral Sea", "Red Sea"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Caspian Sea is an endorheic inland basin spanning 371,000 km², classified as the world's largest lake."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the narrow oceanic strait that separates Asia (Russia) from North America (Alaska, USA)?",
    options: ["Bering Strait", "Strait of Gibraltar", "Strait of Malacca", "Palk Strait"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 82 km wide Bering Strait links the Chukchi Sea (Arctic) with the Bering Sea (Pacific), dividing Russia and Alaska."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the strategic strait that connects the Mediterranean Sea with the Atlantic Ocean, separating Europe (Spain) from Africa (Morocco)?",
    options: ["Strait of Gibraltar", "Bosphorus Strait", "Strait of Hormuz", "Bab-el-Mandeb"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 13 km Strait of Gibraltar provides the sole natural gateway between the Atlantic Ocean and the Mediterranean basin."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which New 7 Wonder of the World is an ancient Incan citadel situated high in the Andes mountains of Peru at 2,430 metres altitude?",
    options: ["Machu Picchu", "Chichen Itza", "Christ the Redeemer", "Petra"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Built in the 15th century by Inca Emperor Pachacuti, Machu Picchu is an architectural wonder of polished dry-stone walls."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which New 7 Wonder of the World is an ancient city carved directly into vibrant red-rose sandstone cliffs in Jordan?",
    options: ["Petra (The Rose City / Al-Khazneh Treasury)", "Colosseum", "Angkor Wat", "Persepolis"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Petra was the capital of the Nabataean kingdom, renowned for rock-cut facades and water conduit systems."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which New 7 Wonder of the World is an ancient Mayan stepped pyramid complex located in the Yucatán Peninsula of Mexico?",
    options: ["Chichén Itzá (El Castillo pyramid)", "Machu Picchu", "Teotihuacan", "Tikal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "El Castillo at Chichén Itzá aligns with solar equinoxes, casting snake-like shadows down its 365 steps."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the massive amphitheatre built in Rome, Italy in 80 CE for gladiatorial combats called?",
    options: ["The Colosseum (Flavian Amphitheatre)", "Pantheon", "Parthenon", "Hagia Sophia"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Constructed under Emperors Vespasian and Titus, the Colosseum seated up to 65,000 spectators for civic spectacles."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the longest architectural defensive wall in the world, spanning over 21,000 km across northern China?",
    options: ["The Great Wall of China", "Hadrian's Wall", "Berlin Wall", "Western Wall"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Built across centuries by Chinese dynasties (notably Qin Shi Huang and Ming), the Great Wall fortified northern frontiers."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which continent is known as the 'Dark Continent' historically and is the ONLY continent through which the Equator, Tropic of Cancer, and Tropic of Capricorn ALL pass?",
    options: ["Africa", "Asia", "South America", "Australia"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Africa is the only continent traversed by all three major latitude lines: Equator, Tropic of Cancer, and Tropic of Capricorn."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the world's LARGEST island that is not a continent, covered mostly by a vast ice sheet?",
    options: ["Greenland (autonomous territory of Denmark)", "Madagascar", "New Guinea", "Borneo"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Greenland spans 2.16 million km², making it the largest non-continental island on the planet."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What are the Indian scientific research research stations established in Antarctica called?",
    options: ["Dakshin Gangotri (1983), Maitri (1989), and Bharati (2012)", "Vikram and Pragyan", "Aryabhata and Rohini", "Himalaya and Ganga"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "India operates permanent polar research bases in Antarctica: Maitri (Schirmacher Oasis) and Bharati (Larsemann Hills)."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Read the statements:\nAssertion (A): The 'Pacific Ring of Fire' is a horseshoe-shaped belt basin where over 75% of the world's active volcanoes and 90% of the world's earthquakes occur.\nReason (R): It is the tectonic boundary zone where multiple major oceanic lithospheric plates subduct beneath adjacent continental plates along deep oceanic trenches.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Subduction of the Pacific, Nazca, Cocos, and Philippine plates drives intense volcanism and seismic megathrusts."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Spot the IMPOSTER in the following group of World Wonders matched with their home countries:\nGroup: [Taj Mahal - India, Machu Picchu - Peru, Petra - Jordan, Colosseum - Greece]",
    options: ["Taj Mahal - India", "Machu Picchu - Peru", "Petra - Jordan", "Colosseum - Greece"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Colosseum is in ROME, ITALY, NOT Greece (Greece is famous for the Parthenon in Athens)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the highest NAVIGABLE lake in the world, situated in the Andes mountains on the border of Bolivia and Peru at 3,812 m altitude?",
    options: ["Lake Titicaca", "Lake Maracaibo", "Lake Poopó", "Lake Nicaragua"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Lake Titicaca is the highest commercially navigable alpine body of water in the world."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Match Column I (Geographical Straits / Waterways) with Column II (Bodies of Water Connected):\n(a) Strait of Gibraltar -> (i) Red Sea with Mediterranean Sea\n(b) Suez Canal          -> (ii) Atlantic Ocean with Pacific Ocean (locks)\n(c) Panama Canal        -> (iii) Atlantic Ocean with Mediterranean Sea\n(d) Strait of Malacca   -> (iv) Indian Ocean with South China Sea (Pacific)",
    options: [
      "a-(iii), b-(i), c-(ii), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(ii), b-(iv), c-(i), d-(iii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Gibraltar = Atlantic/Med; Suez = Red/Med; Panama = Atlantic/Pacific; Malacca = Indian/Pacific."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Read the statements regarding world physical geography:\nStatement 1: The Ural Mountain range forms the traditional geographic dividing boundary between Europe and Asia.\nStatement 2: The Great Barrier Reef in Australia is the largest coral reef system on Earth, visible from space.\nStatement 3: Antarctica is the most densely populated continent in the world.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is completely false because Antarctica has zero permanent indigenous population (only seasonal scientists). Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the driest non-polar desert on Earth, located along the Pacific coast of northern Chile where some weather stations have recorded ZERO rain for decades?",
    options: ["Atacama Desert", "Patagonian Desert", "Mojave Desert", "Namib Desert"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Atacama hyper-arid desert lies in a double rain shadow between the Chilean Coast Range and Andes."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the colossal volcanic plateau in East Africa formed by tectonic divergence, stretching over 6,000 km from the Red Sea to Mozambique?",
    options: ["The Great Rift Valley (East African Rift)", "The Deccan Plateau", "The Colorado Plateau", "The Tibetan Plateau"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The East African Rift is an active divergent tectonic boundary rifting the Nubian and Somalian plates."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which high-altitude plateau in Central Asia is revered as the 'Roof of the World', averaging over 4,500 metres in elevation?",
    options: ["Tibetan Plateau (and Pamir Knot)", "Anatolian Plateau", "Colorado Plateau", "Ethiopian Highlands"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Tibetan Plateau spans 2.5 million km² at 4,500 m elevation, feeding 10 major Asian river systems."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the southernmost tip of the South American continent (notorious for perilous maritime storms between Atlantic and Pacific) called?",
    options: ["Cape Horn (Cabo de Hornos)", "Cape of Good Hope", "Cape Comorin", "Cape Canaveral"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Cape Horn on Hornos Island marks the turbulent northern boundary of the Drake Passage."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "Which is the ONLY country in the world that is also classified as a whole Continent?",
    options: ["Australia (Commonwealth of Australia)", "Russia", "Canada", "Brazil"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Australia is uniquely a megadiverse nation-state occupying an entire sovereign continent."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What is the global imaginary line of latitude at 0° that divides the Earth into the Northern and Southern Hemispheres?",
    options: ["The Equator (0° Latitude)", "Prime Meridian (0° Longitude)", "Tropic of Cancer (23.5° N)", "Tropic of Capricorn (23.5° S)"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Equator is the 40,075 km planetary great circle equidistant from the North and South poles."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 10: World Geography, Continents, Oceans & Global Wonders",
    question: "What international line passing through the Royal Observatory in Greenwich, London defines 0° Longitude and Greenwich Mean Time (GMT)?",
    options: ["Prime Meridian", "International Date Line (180°)", "Equator", "Arctic Circle"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Established in 1884, the Greenwich Prime Meridian (0° longitude) serves as the reference datum for global time zones."
  }
];

console.log('Generated GK Ch10:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/gk_ch10.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
