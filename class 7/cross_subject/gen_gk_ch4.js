import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 4: Inventions, Discoveries & Explorers (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who invented the movable-type mechanical Printing Press in Mainz, Germany around 1440 CE, sparking the global Information Revolution?",
    options: ["Johannes Gutenberg", "Isaac Newton", "Leonardo da Vinci", "Galileo Galilei"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Johannes Gutenberg developed the movable metal type printing press c. 1440, printing the 42-Line Gutenberg Bible."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who improved and patented the commercial Steam Engine with a separate condenser in 1769, powering the Industrial Revolution?",
    options: ["James Watt", "George Stephenson", "Thomas Newcomen", "Robert Fulton"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "James Watt patented the separate condenser steam engine, revolutionizing mechanical power in mines and factories."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who is credited with inventing the first practical working Telephone and transmitting the famous words \"Mr. Watson, come here, I want to see you\" in 1876?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Alexander Graham Bell was awarded the foundational telephone patent in March 1876."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Which American inventor perfected the long-lasting practical incandescent Electric Light Bulb in 1879 and established the world's first industrial research lab at Menlo Park?",
    options: ["Thomas Alva Edison", "Benjamin Franklin", "Nikola Tesla", "Michael Faraday"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Thomas Edison patented a commercially viable carbon filament incandescent light bulb in 1879, holding 1,093 US patents."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who built and successfully flew the world's first motor-powered, controlled heavier-than-air Airplane at Kitty Hawk, North Carolina in 1903?",
    options: ["The Wright Brothers (Orville and Wilbur Wright)", "Charles Lindbergh", "Amelia Earhart", "Alberto Santos-Dumont"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "On 17 December 1903, the Wright Brothers achieved the first controlled, sustained powered flight in the Wright Flyer."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who discovered the world's first wonder antibiotic drug 'PENICILLIN' from Penicillium notatum mold in 1928, revolutionizing medicine?",
    options: ["Sir Alexander Fleming", "Louis Pasteur", "Edward Jenner", "Robert Koch"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Alexander Fleming discovered penicillin in 1928, launching the antibiotic era and saving hundreds of millions of lives."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who developed the world's first successful Vaccine (for deadly Smallpox) in 1796 using cowpox virus blisters?",
    options: ["Edward Jenner (The Father of Immunology)", "Louis Pasteur", "Jonas Salk", "Alexander Fleming"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Edward Jenner inoculated James Phipps with cowpox in 1796, pioneering vaccination and leading to the global eradication of smallpox."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Which Portuguese explorer discovered the direct ocean sea-route from Europe to India around the Cape of Good Hope, landing at Calicut (Kozhikode) in May 1498?",
    options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Bartholomew Dias"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Vasco da Gama's 1497–1499 armada linked Europe and Asia via maritime navigation around the African continent."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Whose Spanish maritime expedition (1519–1522) achieved the FIRST recorded circumnavigation of the entire planet Earth?",
    options: ["Ferdinand Magellan (completed by Juan Sebastián Elcano)", "Christopher Columbus", "Captain James Cook", "Francis Drake"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Magellan led the fleet of five ships; the Victoria commanded by Juan Sebastián Elcano completed the first global circumnavigation in 1522."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Which Italian explorer sailing under the Spanish flag reached the Americas in 1492 while seeking a westward maritime route to Asia?",
    options: ["Christopher Columbus", "Amerigo Vespucci", "Marco Polo", "John Cabot"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Columbus's 1492 landfall in the Bahamas initiated sustained transatlantic contact between the Old and New Worlds."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the FIRST human being to walk on the surface of the Moon on 20 July 1969 during the Apollo 11 mission, speaking: \"That's one small step for man, one giant leap for mankind\"?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Neil Armstrong stepped onto the lunar Mare Tranquillitatis on 20 July 1969 as commander of NASA's Apollo 11 mission."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the FIRST human being to travel into outer space and orbit the Earth in Vostok 1 on 12 April 1961?",
    options: ["Yuri Gagarin (Soviet Cosmonaut)", "Neil Armstrong", "Alan Shepard", "John Glenn"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Soviet cosmonaut Yuri Gagarin completed a 108-minute orbital flight aboard Vostok 1 in April 1961."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the Norwegian polar explorer who led the FIRST expedition to reach the geographic SOUTH POLE on 14 December 1911?",
    options: ["Roald Amundsen", "Robert Falcon Scott", "Ernest Shackleton", "Fridtjof Nansen"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Roald Amundsen's Norwegian team reached 90°S at the South Pole on 14 December 1911, 33 days before Robert Falcon Scott."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who discovered Electromagnetic Induction in 1831, inventing the Electric Dynamo and Transformer that created the modern electrical power grid?",
    options: ["Michael Faraday", "James Clerk Maxwell", "Nikola Tesla", "Alessandro Volta"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Michael Faraday demonstrated that changing magnetic flux induces electric current (Faraday's Law), enabling generators and transformers."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who pioneered Alternating Current (AC) electricity, invented the AC Induction Motor, and built the Niagara Falls hydroelectric station?",
    options: ["Nikola Tesla", "Thomas Edison", "George Westinghouse", "Alexander Graham Bell"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Nikola Tesla developed polyphase AC electrical systems, winning the 'War of the Currents' over Edison's direct current."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the brilliant French-Polish physicist and chemist who discovered Radioactivity, Radium, and Polonium, and is the ONLY person to win Nobel Prizes in two different scientific fields (Physics and Chemistry)?",
    options: ["Marie Curie (Madame Curie)", "Lise Meitner", "Rosalind Franklin", "Ada Lovelace"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Marie Curie won the 1903 Nobel Prize in Physics (radiation) and the 1911 Nobel Prize in Chemistry (isolation of radium/polonium)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who developed the first working Electronic Television system in 1927 at the age of 21?",
    options: ["Philo Farnsworth (and Vladimir Zworykin)", "John Logie Baird", "Guglielmo Marconi", "Charles Babbage"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Philo Farnsworth transmitted the first all-electronic television image via an image dissector tube in 1927."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who is widely celebrated as the 'Father of the Computer' for designing the programmable mechanical 'Difference Engine' and 'Analytical Engine' in the 1830s?",
    options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Blaise Pascal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Charles Babbage conceptualized the Analytical Engine featuring an arithmetic logic unit, memory store, and punched card programming."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the English mathematician who wrote the world's FIRST computer algorithm (for Babbage's Analytical Engine) and is recognized as the world's FIRST Computer Programmer?",
    options: ["Ada Lovelace (Lady Lovelace)", "Grace Hopper", "Katherine Johnson", "Dorothy Vaughan"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ada Lovelace published the first computer program to calculate Bernoulli numbers on Babbage's engine in 1843."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who invented the World Wide Web (WWW) at CERN in 1989, releasing the code freely to the public and transforming global human connectivity?",
    options: ["Sir Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Vint Cerf"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tim Berners-Lee created HTTP, HTML, URL, and the first web browser/server at CERN in 1989."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who discovered X-Rays accidentally in 1895 while experimenting with cathode ray tubes, winning the very first Nobel Prize in Physics in 1901?",
    options: ["Wilhelm Conrad Röntgen", "Henri Becquerel", "J.J. Thomson", "Ernest Rutherford"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Wilhelm Röntgen discovered electromagnetic X-radiation in 1895, taking the first X-ray radiograph of his wife's hand."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who pioneered the Germ Theory of Disease, invented Rabies and Anthrax vaccines, and developed the food preservation technique of 'Pasteurization'?",
    options: ["Louis Pasteur", "Robert Koch", "Joseph Lister", "Edward Jenner"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Louis Pasteur disproved spontaneous generation, created rabies vaccines, and developed thermal pasteurization."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who invented the modern Battery (the Voltaic Pile) in 1800, providing the world's first source of continuous direct electric current?",
    options: ["Alessandro Volta", "Luigi Galvani", "Andre-Marie Ampere", "Georg Ohm"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Alessandro Volta stacked zinc and copper discs separated by brine-soaked cloth, creating the first electrochemical battery."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the Venetian merchant traveler who spent 24 years traveling along the Silk Road through China, the Mongol Court of Kublai Khan, and India (1271–1295)?",
    options: ["Marco Polo", "Ibn Battuta", "Zheng He", "Giovanni da Verrazzano"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Marco Polo's travelogue 'The Travels of Marco Polo' introduced medieval Europeans to the immense wealth and civilization of China and Asia."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the legendary Chinese Ming Dynasty Admiral who commanded massive treasure fleets of hundreds of giant multi-decked ships across the Indian Ocean from 1405 to 1433?",
    options: ["Zheng He (Cheng Ho)", "Sun Tzu", "Kublai Khan", "Confucius"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Admiral Zheng He commanded 7 epic Ming maritime expeditions across Southeast Asia, India, Arabia, and East Africa."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who proved that lightning is a form of electricity using his famous kite and key experiment in 1752, inventing the Lightning Rod?",
    options: ["Benjamin Franklin", "Thomas Edison", "Isaac Newton", "Michael Faraday"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Benjamin Franklin demonstrated electrical charge conservation in thunderstorms and invented the grounding lightning conductor."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who discovered the fundamental Mathematical Laws of Planetary Motion in the early 17th century (elliptical orbits)?",
    options: ["Johannes Kepler", "Nicolaus Copernicus", "Galileo Galilei", "Tycho Brahe"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Kepler formulated the three laws of planetary motion, establishing that planetary orbits are ellipses with the Sun at one focus."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the FIRST Indian citizen to travel into outer space aboard the Soviet Soyuz T-11 spacecraft on 3 April 1984, describing India as \"Saare Jahaan Se Achha\"?",
    options: ["Wing Commander Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Vikram Sarabhai"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rakesh Sharma spent 7 days aboard Salyut 7 in April 1984 as India's first cosmonaut."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Read the statements:\nAssertion (A): The invention of the Movable-Type Printing Press by Gutenberg in 1440 was the catalyst for the European Renaissance, Scientific Revolution, and Protestant Reformation.\nReason (R): Mass printing democratized knowledge, lowered the cost of books by over 90%, broke ecclesiastical manuscript monopolies, and facilitated rapid pan-continental scientific peer review.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Gutenberg's typography initiated the democratization of literacy and the rapid diffusion of empirical scientific knowledge."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Spot the IMPOSTER in the following group of Inventors and their groundbreaking technological breakthroughs:\nGroup:\n1. James Watt - Steam Engine with separate condenser\n2. Alexander Graham Bell - Telephone\n3. Guglielmo Marconi - Long-distance radio wireless telegraphy\n4. Wright Brothers - First nuclear fusion power plant",
    options: ["Breakthrough 1", "Breakthrough 2", "Breakthrough 3", "Breakthrough 4 (Wright Brothers invented the FIRST AIRPLANE, not nuclear power plants)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Breakthrough 4 is false: the Wright Brothers invented the motor-powered airplane in 1903, NOT nuclear fusion."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "What is the historical significance of the 'Columbian Exchange' resulting from Christopher Columbus's 1492 transatlantic voyage?",
    options: [
      "The massive global transfer of agricultural crops (potatoes, maize, tomatoes, chillies), animals, populations, and infectious diseases between the Old World (Afro-Eurasia) and New World (Americas) that permanently transformed global diets and demographics",
      "An agreement to sell Spanish ships to Asian kings",
      "A chess tournament played in 1492",
      "The discovery of Antarctica"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Columbian Exchange fundamentally reorganized global ecology, nutrition (potatoes, maize to Eurasia; wheat, livestock to Americas), and demographics."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Match Column I (Great Pioneers) with Column II (Monumental Milestone):\n(a) Galileo Galilei       -> (i) Telescopic discovery of Jupiter's 4 moons & lunar craters\n(b) Isaac Newton          -> (ii) Universal Law of Gravitation & Three Laws of Motion\n(c) Charles Darwin        -> (iii) Theory of Evolution by Natural Selection (Origin of Species)\n(d) Albert Einstein       -> (iv) Special & General Theory of Relativity (E = mc²)",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Galileo = observational astronomy; Newton = classical mechanics; Darwin = natural selection; Einstein = relativistic physics."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Read the statements regarding space exploration milestones:\nStatement 1: 'Sputnik 1' was the world's FIRST artificial satellite launched into Earth orbit by the Soviet Union on 4 October 1957.\nStatement 2: Voyager 1 is the farthest human-made spacecraft from Earth, currently traversing interstellar space beyond the solar system.\nStatement 3: Neil Armstrong landed on the planet Mars in 1969.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because Armstrong landed on the MOON, not Mars (humans have never landed on Mars). Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the British mathematician and logician who broke the German 'Enigma' naval code during World War II at Bletchley Park and laid the theoretical foundations of Artificial Intelligence and Computer Science (Turing Machine)?",
    options: ["Alan Turing", "John von Neumann", "Claude Shannon", "Norbert Wiener"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Alan Turing engineered the Bombe codebreaking machine, formulated the Turing Machine universal computation model, and proposed the Turing Test for AI."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "What was the revolutionary medical discovery made by Edward Jenner in 1796 that transformed public health worldwide?",
    options: [
      "Inoculating humans with mild Cowpox blister fluid conferred immune protection (cross-immunity) against lethal Smallpox without causing fatal disease",
      "He discovered that boiling water prevents broken bones",
      "He created synthetic aspirin pills",
      "He proved that diseases are caused by bad smells (miasma)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Jenner's cowpox-smallpox cross-immunity trial established the scientific doctrine of vaccination (from Latin 'vacca' meaning cow)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Consider four foundational inventions:\n1. Gutenberg's Printing Press (1440)\n2. Watt's Steam Engine (1769)\n3. Bell's Telephone (1876)\n4. Berners-Lee's World Wide Web (1989)\nWhat common paradigm shift links these four inventions across 550 years?",
    options: [
      "Each invention radically accelerated the velocity and scale of human communication, energy transformation, and global knowledge distribution",
      "They were all invented in the same country",
      "They all use steam energy",
      "They all operate on batteries"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "These four inventions represent civilization-level phase shifts in energy harnessing and information entropy reduction."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Why was the discovery of the double helix structure of DNA by James Watson, Francis Crick, and Rosalind Franklin in 1953 so monumental?",
    options: [
      "It unlocked the molecular genetic code of all biological life, revealing how hereditary information is stored, replicated, and expressed across generations",
      "It proved that cells are made of stone",
      "It allowed humans to stop eating food",
      "It proved that blood has no cells"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Elucidating the double helical base-pairing (A-T, G-C) architecture of DNA launched molecular biology, biotechnology, and genomic medicine."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "What was the navigational breakthrough invented by John Harrison in the 18th century (the Marine Chronometer H4)?",
    options: [
      "A precise mechanical clock that kept exact time at sea despite ship motion and temperature changes, enabling sailors to calculate exact LONGITUDE and preventing shipwrecks",
      "A compass that pointed south",
      "A waterproof sail",
      "A telescope that saw through clouds"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Harrison's H4 chronometer solved the famous 'Longitude Problem', enabling precise oceanic navigational positioning."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "Who was the Polish astronomer whose 1543 book 'De revolutionibus orbium coelestium' shattered the 1,400-year Geocentric Ptolemaic model and proved the HELIOCENTRIC model (Earth orbits the Sun)?",
    options: ["Nicolaus Copernicus", "Tycho Brahe", "Aristotle", "Ptolemy"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Copernicus displaced Earth from the cosmological center, proposing the heliocentric planetary system and igniting the Scientific Revolution."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 4: World History, Great Inventions, Discoveries & Famous Explorers",
    question: "What unifying human spirit is celebrated through the history of Great Inventions, Discoveries, and Explorations?",
    options: [
      "Humanity's relentless curiosity, resilience, and courage to question prevailing orthodoxies, venture into uncharted frontiers, and innovate technologies that elevate human civilization",
      "That all discoveries were made by pure accident without effort",
      "That exploration has completely finished on Earth and in space",
      "That technology always reduces human happiness"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 4 synthesizes the relentless human drive for scientific discovery, geographic exploration, and transformative technological innovation."
  }
];

console.log('Generated Class 7 GK Ch4:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/gk_ch4.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
