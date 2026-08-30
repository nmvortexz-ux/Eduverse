import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 4: An Indian-American Woman in Space: Kalpana Chawla (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "Where was astronaut Kalpana Chawla born?",
    options: ["Karnal, Haryana (India)", "Chandigarh, Punjab", "New Delhi", "Mumbai, Maharashtra"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kalpana Chawla was born in Karnal, Haryana, and graduated from Tagore Baal Niketan School."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "From which college did Kalpana Chawla complete her Bachelor of Science degree in Aeronautical Engineering?",
    options: [
      "Punjab Engineering College (PEC), Chandigarh",
      "IIT Delhi",
      "BITS Pilani",
      "National Institute of Technology"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Despite her father's initial hesitations, she earned her Aeronautical Engineering degree from PEC Chandigarh."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "To which country did Kalpana Chawla travel to pursue her Master's and Ph.D. in Aerospace Engineering?",
    options: ["United States of America (USA)", "United Kingdom", "Russia", "Germany"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "She earned her Master's from University of Texas and Ph.D. from University of Colorado in the United States."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "Whom did Kalpana Chawla marry in the United States, thereby becoming a naturalized U.S. citizen?",
    options: ["Flight instructor Jean-Pierre Harrison", "An Indian scientist", "A NASA commander", "A doctor"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "She married aviation flight instructor Jean-Pierre Harrison, acquiring dual Indian-American identity."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "In which space agency was Kalpana Chawla selected as an astronaut candidate in 1994?",
    options: ["NASA (National Aeronautics and Space Administration)", "ISRO", "Roscosmos", "ESA"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kalpana was chosen among thousands of applicants to train as a NASA mission specialist astronaut in December 1994."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What was the name of the NASA Space Shuttle on which Kalpana Chawla flew her first mission (STS-87 in 1997) and her final mission (STS-107 in 2003)?",
    options: ["Columbia", "Challenger", "Discovery", "Atlantis"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kalpana flew both spaceflights aboard Space Shuttle Columbia (OV-102)."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "How long did Kalpana Chawla's first space mission in Space Shuttle Columbia (STS-87) last?",
    options: ["15 days, 16 hours, and 34 minutes", "5 days", "30 days", "24 hours"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "During STS-87, she orbited the Earth 252 times, traveling 10.45 million kilometers over 15 days, 16 hours, and 34 minutes."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "How many crew members (astronauts) were on board Space Shuttle Columbia during the STS-107 mission?",
    options: ["7 crew members", "5 crew members", "3 crew members", "10 crew members"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A multinational crew of seven astronauts (including Israeli Ilan Ramon and Kalpana) staffed STS-107."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "On which tragic date did Space Shuttle Columbia break apart during atmospheric re-entry over Texas?",
    options: ["1st February 2003 (Saturday)", "15th August 2000", "26th January 2002", "1st January 2005"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "On 1 February 2003, Columbia suffered thermal wing tile damage and disintegrated 16 minutes prior to landing."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "In the poem 'Beauty' by E-Yeh-Shure, where can beauty be seen according to the poet?",
    options: [
      "In the sunlight, trees, birds, growing corn, and people working or dancing for their harvest",
      "Only in expensive gold jewelry",
      "Only in big palaces",
      "Only in the dark night"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Native American poet E-Yeh-Shure describes beauty in simple natural wonders, agriculture, and joyous human labor."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "In the supplementary story 'The Old-Clock Shop', who was Ray?",
    options: ["An old, deaf and dumb clockmaker and shopkeeper", "A young policeman", "A bank manager", "A doctor"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ray was an elderly, hearing-impaired craftsman who repaired and loaned money on old timepieces in Salt Lake City."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "On which evening did two desperate men visit Ray's old clock shop?",
    options: ["Christmas Eve (late night on 24th December)", "New Year's Eve", "Halloween night", "Easter Sunday"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The two men entered just as Ray was finishing work on a cold Christmas Eve night."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What inspiring message did Kalpana Chawla send to students from aboard the Space Shuttle Columbia?",
    options: [
      "\"The path from dreams to success does exist. May you have the vision to find it, the courage to get onto it, and the perseverance to follow it.\"",
      "\"Space is too dangerous for students.\"",
      "\"Never leave your hometown.\"",
      "\"Success comes without any hard work.\""
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Her immortal transmission from Columbia inspired youth worldwide to boldly pursue their highest aspirations."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What other aircraft pilot licenses did Kalpana Chawla hold besides astronaut qualifications?",
    options: [
      "Commercial pilot licenses for single and multi-engine land planes, single-engine seaplanes, gliders, and certified flight instructor",
      "Helicopter military gunship license only",
      "Submarine pilot license",
      "Commercial rocket captain"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "She was a multi-engine land and seaplane pilot, glider enthusiast, and FAA-certified flight instructor."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What scientific experiments did the Columbia crew conduct during their 16-day STS-107 flight?",
    options: [
      "80 scientific experiments including plant microgravity pollination, materials crystal growth, and combustion behavior in space",
      "Military missile target testing",
      "Mining gold on the Moon",
      "Building a hotel in space"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The SPACEHAB payload conducted 80 microgravity biology, physical science, and fluid physics experiments."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "In the poem 'Beauty', where is beauty heard according to stanza 2?",
    options: [
      "In the night: wind sighing, rain falling, or a singer chanting from the depths of a sincere heart",
      "In the roar of traffic",
      "In loud shouting",
      "In television commercials"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The poet captures auditory aesthetics in peaceful nocturnal sounds: gentle rain, sighing breeze, and heartfelt melodies."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "In the poem 'Beauty', where does beauty reside within oneself (stanza 3)?",
    options: [
      "In good deeds, noble thoughts, and peaceful dreams that repeat themselves in your dreams, in your work, and even in your rest",
      "In fancy designer clothes",
      "In mirror reflections only",
      "In gold coins"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "True spiritual beauty radiates from ethical virtues, pure thoughts, and selfless benevolence in daily action."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "How did deaf shopkeeper Ray defuse a potential armed robbery at his clock shop on Christmas Eve?",
    options: [
      "With calm hospitality: writing friendly notes on a notepad, treating the desperate men with dignity, and offering a $50 loan on an ordinary pocket watch",
      "By pulling out a shotgun",
      "By screaming for the police",
      "By locking them in the store"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ray sensed their desperation, communicated through written notes, and extended compassionate financial help without judgment."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "Why was Ray NOT a commercial moneylender / pawn-broker in the traditional sense?",
    options: [
      "He never charged exorbitant interest and always returned items to needy people whenever they could repay the exact loaned amount",
      "He took items for free",
      "He sold fake clocks",
      "He worked for the city bank"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ray operated out of goodwill, providing bridge loans against used watches to aid destitute folks through hard times."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What musical chime filled the shop as the clock struck midnight at 12:00 on Christmas Eve?",
    options: [
      "All clocks and timepieces chimed together with a sweet, musical message of 'Peace on Earth, Goodwill to all'",
      "A loud alarm siren",
      "A gun shot",
      "A broken glass rattle"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The synchronized chiming of antique clocks resonated as a timeless Christmas benediction of peace and universal brotherhood."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What is the meaning of the term 'Naturalized Citizen' as applied to Kalpana Chawla?",
    options: [
      "A person who legally acquires foreign citizenship after birth through the official immigration and naturalization process",
      "A person born in space",
      "A person who lives in a forest",
      "A person without any passport"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Naturalization is the legal admission of a foreign national to full statutory citizenship of a country."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What is a 'Space Shuttle'?",
    options: [
      "A reusable spacecraft that takes off like a rocket, orbits Earth, and lands on a runway like an aeroplane",
      "A standard commercial airplane",
      "An unguided missile",
      "A telescope on the ground"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "NASA Space Shuttles were winged, reusable orbital spacecraft designed to ferry crews and satellite cargo to low Earth orbit."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What did journalists write about Kalpana Chawla's extraordinary intellectual capability?",
    options: [
      "\"She was a heroine; to become an astronaut, one needs enormous knowledge about everything from biology to astrophysics and aeronautical engineering\"",
      "\"She only knew how to fly kites.\"",
      "\"She had no interest in science.\"",
      "\"Astronauts do not need education.\""
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Her biographical tribute highlighted the multidisciplinary mastery of mathematics, biology, astronomy, and physics required of astronauts."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "In 'The Old-Clock Shop', what was in the pocket of the younger man standing near the shop entrance?",
    options: [
      "A gun in his coat pocket (showing they had originally intended a robbery)",
      "A box of Christmas sweets",
      "A gold necklace",
      "A repaired wristwatch"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ray noticed the gun bulge in the visitor's coat pocket, understanding their desperate criminal intent."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "How did the older visitor's face change when Ray handed him a fifty-dollar bill for his ordinary watch?",
    options: [
      "His cold, hard eyes softened with genuine gratitude and relief, and he shook Ray's hand before saying 'Merry Christmas'",
      "He became violently angry",
      "He ran away screaming",
      "He smashed the clock"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ray's unexpected grace and generous loan diffused their criminal desperation, replacing tension with heartfelt gratitude."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What does the word 'Disaster' mean in the headline 'Columbia Shuttle Disaster'?",
    options: [
      "A sudden catastrophic accident or natural catastrophe causing great damage or loss of life",
      "A grand success",
      "A rocket launch",
      "A holiday celebration"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A disaster denotes an overwhelming calamity resulting in widespread destruction and tragic fatalities."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What is the meaning of 'Pawn' in the context of Ray's business?",
    options: [
      "To leave an object with a lender as security / collateral for borrowed money",
      "To break a chess piece",
      "To steal clocks",
      "To throw trash away"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Pawning involves depositing personal tangible property as security in exchange for a short-term cash loan."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What poetic structure does E-Yeh-Shure use in the poem 'Beauty'?",
    options: [
      "Three thematic stanzas exploring Beauty Seen (Day), Beauty Heard (Night), and Beauty Within (Self)",
      "A single rhyming couplet",
      "A war ballad",
      "A limerick"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The poem is organized into sensory visual beauty (Stanza 1), auditory beauty (Stanza 2), and moral beauty of the soul (Stanza 3)."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "Read the statements:\nAssertion (A): Kalpana Chawla broke historic socio-cultural barriers to become an immortal role model for millions of young girls in developing nations.\nReason (R): Coming from a small conservative town in Haryana, she persevered through gender resistance to earn aerospace doctorates and fly as a NASA mission specialist.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Her trailblazing journey from Karnal to NASA shattered gender glass ceilings in STEM for generations of young women."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "Spot the IMPOSTER in the following group of vocabulary words paired with their parts of speech from Chapter 4:\nGroup: [Perseverance (Noun), Astronaut (Noun), Courageously (Adverb), Aboard (Verb)]",
    options: ["Perseverance (Noun)", "Astronaut (Noun)", "Courageously (Adverb)", "Aboard (Verb)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Aboard' is a Preposition or Adverb (e.g., 'aboard the shuttle'), NOT a Verb."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What philosophical philosophy of non-violence and restorative empathy did Ray exercise in 'The Old-Clock Shop'?",
    options: [
      "He weaponized empathy: defusing potential violence by acknowledging human dignity, offering economic relief, and neutralizing criminal desperation",
      "He feigned death to escape",
      "He hypnotized the robbers",
      "He gave away all his shop clocks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ray transformed a volatile life-threatening armed robbery into an act of mutual respect, redemption, and holiday peace."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "In the poem 'Beauty', how does the poet redefine beauty beyond superficial physical glamour?",
    options: [
      "By asserting that the highest form of beauty is internal — residing in virtuous conduct, noble thoughts, and sincere selfless intentions",
      "By claiming beauty only exists in museums",
      "By stating beauty can be bought with money",
      "By saying only poets can have beauty"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "E-Yeh-Shure elevates aesthetics from external visual perception to ethical purity and moral integrity of the human heart."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "Match the following historical events with their dates in Kalpana Chawla's life:\n(a) Selected by NASA as astronaut candidate -> (i) 1 February 2003\n(b) First spaceflight launch (STS-87)         -> (ii) December 1994\n(c) Tragic Columbia re-entry accident        -> (iii) 19 November 1997\n(d) Birth in Karnal                          -> (iv) 17 March 1962 (official records)",
    options: [
      "a-(ii), b-(iii), c-(i), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "NASA Selection = 1994; STS-87 launch = 1997; Columbia disaster = 1 Feb 2003; Birth = 1962."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "Read the statements:\nStatement 1: Kalpana Chawla was the first Indian-born woman in space.\nStatement 2: Space Shuttle Columbia completed 27 successful flights before its 28th tragic mission.\nStatement 3: Kalpana never held any pilot license for airplanes.\nWhich statements are TRUE?",
    "options": ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because Kalpana held commercial pilot licenses and flight instructor certifications. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "Convert the following direct speech into reported speech:\nKalpana said, \"I never dreamed that I would cross the frontiers of space.\"",
    options: [
      "Kalpana said that she had never dreamed that she would cross the frontiers of space.",
      "Kalpana said that she never dreams to cross space.",
      "Kalpana told that I never dreamed of space.",
      "Kalpana says that she will cross frontiers of space."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Simple past ('never dreamed') in direct speech shifts to past perfect ('had never dreamed') in indirect narration."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What is the figurative meaning of the phrase 'to cross the frontiers of space'?",
    options: [
      "To transcend earthly physical and technological boundaries to explore the cosmos",
      "To cross a border between two countries with a visa",
      "To jump over a fence",
      "To build an airport"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Frontiers of space' symbolizes the outermost boundary of human technological reach and cosmic exploration."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "In 'The Old-Clock Shop', why did Ray write on the notepad: 'May I help you?' instead of asking aloud?",
    options: [
      "Ray was completely deaf and communicated with customers through written notes on a notepad",
      "He had taken a vow of silence",
      "The shop had too much music",
      "The customers were wearing earplugs"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ray's hearing impairment necessitated written communication via notepad and pencil."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "Which of the following phrases expresses the quality of 'unshakeable resolve and persistent effort despite immense difficulties'?",
    options: ["Perseverance", "Hesitation", "Complacency", "Indifference"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Perseverance' is steadfast persistence in achieving a goal despite obstacles, setbacks, or hardships."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "In the poem 'Beauty', what literary device is used in the line: 'Wind sighing, rain falling'?",
    options: ["Personification (attributing the human act of 'sighing' to the wind)", "Simile", "Irony", "Oxymoron"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Attributing human emotional and vocal characteristics (sighing) to inanimate meteorological wind is Personification."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
    question: "What overarching moral connects the life of Kalpana Chawla with the themes of Honeysuckle Chapter 4?",
    options: [
      "Human existence reaches its sublime apex when courage, relentless scientific ambition, and moral beauty guide our pursuit of dreams",
      "One should never attempt to leave one's home town",
      "Clocks are more valuable than gold",
      "Science and poetry cannot co-exist"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The chapter synthesizes cosmic scientific ambition (Kalpana Chawla) with aesthetic and moral beauty of the human spirit."
  }
];

console.log('Generated English Ch4:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/english_ch4.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
