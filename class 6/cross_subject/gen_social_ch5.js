import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 5: Major Domains of the Earth (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "The solid portion of the Earth consisting of rocks of the earth's crust and thin layers of soil that contain nutrient elements is the:",
    options: ["Lithosphere", "Hydrosphere", "Atmosphere", "Biosphere"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The lithosphere (from Greek 'lithos' = stone) is the solid terrestrial outer shell comprising continents and ocean basins."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "The vast realm of water comprising oceans, seas, rivers, lakes, ice caps, glaciers, and water vapor covering over 71% of Earth is the:",
    options: ["Hydrosphere", "Lithosphere", "Atmosphere", "Stratosphere"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The hydrosphere encompasses all liquid, solid, and gaseous forms of water on the planetary surface."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "The thin gaseous envelope of air that surrounds the Earth and protects us from the harmful ultraviolet radiation of the Sun is the:",
    options: ["Atmosphere", "Lithosphere", "Hydrosphere", "Biosphere"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The atmosphere extends up to ~1,600 km above Earth, held in place by terrestrial gravity."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "The narrow zone of contact between land, water, and air where ALL forms of life exist and interact is called the:",
    options: ["Biosphere", "Lithosphere", "Hydrosphere", "Troposphere"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The biosphere is the biological life-supporting intersection where lithosphere, hydrosphere, and atmosphere converge."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "How many major Continents are there on the Earth?",
    options: ["7 Continents (Asia, Africa, North America, South America, Antarctica, Europe, Australia)", "5 Continents", "6 Continents", "8 Continents"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The 7 major continents separated by oceans are Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which is the LARGEST continent in the world by both land area (one-third of total land) and population?",
    options: ["Asia", "Africa", "North America", "Europe"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Asia covers ~30% of total land area, situated predominantly in the Eastern and Northern Hemispheres."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the highest mountain peak on Earth above sea level, located in the Himalayas in Nepal/Tibet?",
    options: ["Mount Everest (8,848.86 meters)", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mount Everest in the Great Himalayas is Earth's highest topographic elevation above mean sea level."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the deepest point in the world's oceans, located in the Mariana Trench in the Pacific Ocean?",
    options: ["Mariana Trench (Challenger Deep, 11,022 meters deep)", "Java Trench", "Puerto Rico Trench", "Sunda Trench"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Challenger Deep in the Mariana Trench plunges over 11,000 meters deep into the Pacific seabed."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which is the LARGEST and DEEPEST ocean in the world, covering one-third of the entire Earth's surface?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The circular Pacific Ocean is larger than all the continents combined, holding the Mariana Trench."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which is the ONLY ocean in the world named after a specific country?",
    options: ["Indian Ocean (named after India)", "Pacific Ocean", "Atlantic Ocean", "Southern Ocean"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Indian Ocean is uniquely named after India due to India's prominent central maritime peninsula."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which continent is known as the 'Island Continent' because it is completely surrounded on all sides by oceans and seas?",
    options: ["Australia", "Antarctica", "South America", "Europe"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Australia is the smallest continent, lying entirely in the Southern Hemisphere surrounded by the Pacific and Indian oceans."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which gas is the MOST ABUNDANT in the Earth's atmosphere, constituting about 78% of the total air volume?",
    options: ["Nitrogen gas (N₂ - 78%)", "Oxygen gas (21%)", "Carbon dioxide (0.03%)", "Argon (0.93%)"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Dry atmospheric air is composed of 78% Nitrogen, 21% Oxygen, and ~1% other trace gases (Argon, CO₂, etc.)."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which mountain range separates the continents of Asia and Europe on the west?",
    options: ["Ural Mountains", "Alps", "Himalayas", "Rockies"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Ural Mountains and Ural River in Russia form the conventional geographic boundary dividing Europe from Asia (together termed 'Eurasia')."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which is the ONLY continent through which ALL THREE major latitude circles — the Tropic of Cancer, the Equator, and the Tropic of Capricorn — pass?",
    options: ["Africa", "Asia", "South America", "Australia"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Africa's vast latitudinal expanse bisected by the Equator allows the Tropic of Cancer in the north and Tropic of Capricorn in the south to cross it."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the world's LARGEST hot desert, located in northern Africa covering an area almost the size of the United States?",
    options: ["Sahara Desert", "Kalahari Desert", "Gobi Desert", "Atacama Desert"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Sahara Desert covers over 9.2 million km² across North Africa from the Atlantic Ocean to the Red Sea."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the LONGEST river in the world, flowing northward through eastern Africa into the Mediterranean Sea?",
    options: ["Nile River (6,650 km)", "Amazon River", "Yangtze River", "Mississippi River"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Nile River drains through 11 African nations, recognized as the world's longest fluvial drainage channel."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the LARGEST river in the world by water volume discharge, flowing through the tropical rainforests of South America?",
    options: ["Amazon River", "Nile River", "Ganga", "Congo River"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Amazon discharges ~209,000 m³/s of water into the Atlantic, carrying more water volume than the next seven largest rivers combined."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the LONGEST mountain range in the world on land, stretching over 7,000 km from north to south along the western coast of South America?",
    options: ["Andes Mountain Range", "Rocky Mountains", "Himalayas", "Alps"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Andes constitute the world's longest continental mountain belt spanning seven South American countries."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the narrow strip of land connecting North America and South America, and separating the Atlantic Ocean from the Pacific Ocean?",
    options: ["Isthmus of Panama", "Strait of Gibraltar", "Palk Strait", "Suez Canal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "An Isthmus is a narrow strip of land joining two landmasses; the Isthmus of Panama bridges North and South America."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is a narrow passage of water connecting two large bodies of water (such as seas and oceans) called?",
    options: ["A Strait (e.g. Palk Strait, Bering Strait)", "An Isthmus", "A Peninsula", "An Island"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A strait is a narrow navigable marine channel linking two larger oceans or seas."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which ocean is 'S-shaped' and is the BUSIEST ocean in the world from the point of view of international maritime trade?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Atlantic's highly indented coastline creates abundant natural harbors, making it the most heavily trafficked commercial sea route."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which continent is permanently covered with thick ice sheets, completely uninhabited by native human populations, and reserved exclusively for scientific research?",
    options: ["Antarctica (the White Continent / South Pole)", "Greenland", "Australia", "Europe"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Antarctica is governed by the Antarctic Treaty of 1959 as a demilitarized scientific preserve hosting research stations."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What are the names of the two Indian permanent research stations operating in Antarctica?",
    options: ["Maitri and Bharati (along with historic Dakshin Gangotri)", "Himadri and Indira", "Sagar and Shakti", "Kalam and Sarabhai"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Maitri (established 1989) and Bharati (established 2012) are active Indian research facilities in Antarctica."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What are the FIVE vertical layers of the Earth's atmosphere arranged starting from the Earth's surface upwards?",
    options: [
      "Troposphere -> Stratosphere -> Mesosphere -> Thermosphere -> Exosphere",
      "Stratosphere -> Troposphere -> Mesosphere -> Exosphere -> Thermosphere",
      "Exosphere -> Thermosphere -> Mesosphere -> Stratosphere -> Troposphere",
      "Troposphere -> Mesosphere -> Stratosphere -> Thermosphere -> Ionosphere"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Thermal atmospheric stratification: Troposphere (0-12 km), Stratosphere (12-50 km), Mesosphere (50-80 km), Thermosphere (80-700 km), and Exosphere (>700 km)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Why is Earth uniquely called the 'Blue Planet' and the 'Water Planet'?",
    options: [
      "More than 71% of Earth's surface is covered with water, giving it a brilliant azure-blue appearance from outer space",
      "Because the sky reflects blue paint",
      "Because mountains are blue",
      "Because trees are blue in space"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rayleigh scattering of solar light across oceans covering 71% of Earth's surface yields our planetary blue hue."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Despite Earth having 71% water, why do humans and land ecosystems face acute freshwater shortages?",
    options: [
      "More than 97% of Earth's water is saline seawater in oceans, and of the remaining 3% freshwater, most is locked in polar ice sheets and glaciers",
      "Because water evaporates into outer space",
      "Because clouds take water away",
      "Because rivers do not flow"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Only ~0.3% of global water is accessible liquid freshwater in rivers, freshwater lakes, and shallow aquifers."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the crucial biological role of Carbon Dioxide (CO₂) in the atmosphere, despite its small concentration (0.03%)?",
    options: [
      "It absorbs infrared heat radiated by the Earth (Greenhouse effect) to keep the planet comfortably warm and livable, and plants use it for photosynthesis",
      "It freezes the oceans",
      "It produces rain directly",
      "It makes rocks hard"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Radiative greenhouse forcing by CO₂ maintains Earth's mean surface temperature at +15°C instead of a freezing -18°C."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Why does atmospheric density and air pressure decrease rapidly with increasing altitude as mountaineers climb high Himalayan peaks?",
    options: [
      "Earth's gravitational attraction compresses air molecules near sea level; at high altitudes, air molecules spread apart, causing lower oxygen pressure and breathing difficulty",
      "Air is blown away by satellites",
      "Sunlight destroys air at high altitude",
      "Clouds push air down"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Barometric hypsometric formula: atmospheric pressure drops exponentially with height, reducing the partial pressure of oxygen."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Read the statements:\nAssertion (A): Global warming leads to the thermal expansion of seawater and catastrophic melting of polar ice caps.\nReason (R): Excessive emission of carbon dioxide (CO₂) from fossil fuel combustion traps surplus infrared thermal radiation in the troposphere.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Anthropogenic radiative greenhouse forcing amplifies global heat retention, melting cryospheric glaciers and raising sea levels."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Spot the IMPOSTER in the following group of geographic features paired with their home Continents:\nGroup: [Nile River - Africa, Amazon River - South America, Mount Everest - Asia, Andes Mountain Range - North America]",
    options: ["Nile River - Africa", "Amazon River - South America", "Mount Everest - Asia", "Andes Mountain Range - North America"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Andes Mountain Range is located in SOUTH AMERICA, NOT in North America (North America has the Rocky Mountains)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Who were the first mountaineers to conquer and step onto the highest summit of Mount Everest on 29th May 1953?",
    options: [
      "Sir Edmund Hillary (New Zealand) and Tenzing Norgay Sherpa (India/Nepal)",
      "George Mallory and Andrew Irvine",
      "Bachendri Pal and Junko Tabei",
      "Reinhold Messner and Peter Habeler"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Edmund Hillary and Tenzing Norgay achieved the historic first confirmed ascent of Mount Everest in the 1953 British expedition."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Match Column I (Earth Domains & Features) with Column II (Definitions & Examples):\n(a) Lithosphere -> (i) Gaseous envelope held by gravity\n(b) Hydrosphere -> (ii) Solid rock crust and continental landmasses\n(c) Atmosphere  -> (iii) 71% planetary ocean and surface water realm\n(d) Biosphere   -> (iv) Narrow zone of contact supporting all living organisms",
    options: [
      "a-(ii), b-(iii), c-(i), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Lithosphere = rock crust; Hydrosphere = 71% water; Atmosphere = gas envelope; Biosphere = life zone."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Read the statements regarding the continents:\nStatement 1: Europe is bounded by the Arctic Ocean on the north, Atlantic Ocean on the west, and Mediterranean Sea on the south.\nStatement 2: South America lies entirely in the Northern Hemisphere.\nStatement 3: Australia is the only continent that is also a single nation.\nWhich statements are TRUE?",
    options: ["Statements 1 and 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because most of South America lies in the SOUTHERN Hemisphere (bisected in the north by the Equator). Statements 1 and 3 are true."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the oceanic body surrounding the continent of Antarctica, formed by the southward extension of the Pacific, Atlantic, and Indian Oceans?",
    options: ["The Southern Ocean (or Antarctic Ocean, extending up to 60° S latitude)", "Arctic Ocean", "Indian Ocean", "Mediterranean Sea"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Southern Ocean encompasses the circumpolar Antarctic waters south of 60° S, connected by the Antarctic Circumpolar Current."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Which narrow strait connects the Arctic Ocean with the Pacific Ocean between Alaska (USA) and Siberia (Russia)?",
    options: ["Bering Strait", "Strait of Gibraltar", "Palk Strait", "Strait of Malacca"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Bering Strait connects the Arctic Chukchi Sea with the Pacific Bering Sea across an 82 km maritime passage."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Why is the elevation of any land point on Earth always measured from Sea Level, and why is Sea Level taken as zero everywhere?",
    options: [
      "All the interconnected oceans of the world maintain a uniform, continuous hydrostatic surface level at equilibrium (Mean Sea Level = 0 m)",
      "Because oceans have no weight",
      "Because sea water cannot be measured",
      "Because land sinks every year"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hydrostatic communicability ensures the global marine surface conforms to an equipotential gravitational geoid serving as the datum (0 m elevation)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Consider four atmospheric gases:\n1. Nitrogen (78%)\n2. Oxygen (21%)\n3. Argon (0.93%)\n4. Carbon dioxide (0.03%)\nArrange these gases in DECREASING order of their volume percentage in clean dry air:",
    options: ["1 -> 2 -> 3 -> 4", "2 -> 1 -> 4 -> 3", "1 -> 2 -> 4 -> 3", "4 -> 3 -> 2 -> 1"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "N₂ (78.08%) > O₂ (20.95%) > Ar (0.93%) > CO₂ (0.04%)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "What is the combined landmass consisting of Europe and Asia joined together without any oceanic separation called?",
    options: ["Eurasia", "Afro-Eurasia", "Pangaea", "Gondwanaland"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Europe and Asia form a single contiguous tectonic landmass termed Eurasia, demarcated geographically by the Ural Mountains."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Who was the FIRST Indian woman to climb the summit of Mount Everest on 23rd May 1984?",
    options: ["Bachendri Pal", "Santosh Yadav", "Arunima Sinha", "Premlata Agarwal"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bachendri Pal became the first Indian woman and fifth woman in the world to reach the peak of Mount Everest in 1984."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 5: Major Domains of the Earth",
    question: "Why is human disturbance in one domain of the Earth (e.g. cutting forests in the Lithosphere or emitting gases into Atmosphere) directly detrimental to all other domains?",
    options: [
      "All four domains (Lithosphere, Hydrosphere, Atmosphere, Biosphere) are dynamically interconnected in continuous thermodynamic and biogeochemical nutrient cycles",
      "Because Earth is made of glass",
      "Because oceans will dry up in one second",
      "Because gravity will stop working"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Earth Systems Science shows complex feedback loops (carbon cycle, hydrologic cycle) link all spheres into a single interdependent ecosystem."
  }
];

console.log('Generated Social Science Ch5:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/social_ch5.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
